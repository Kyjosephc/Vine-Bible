'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { DEVOTIONALS, getDevotional } from '@/content/devotionals';
import { buildSession, difficultyForMinutes } from '@/lib/study';
import type { SessionPlan } from '@/lib/study';
import { getVerseText, refToSlug } from '@/lib/bible';
import { FALLBACK_PASSAGES } from '@/content/fallback-passages';
import { newReviewItem } from '@/lib/srs';
import type { QuizQuestion, SessionMinutes } from '@/lib/types';
import { QuizRunner } from '@/components/QuizRunner';
import { Badge, Button, Card, SectionTitle, Spinner } from '@/components/ui';
import { useT } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/client';

interface DevotionalLike {
  id: string;
  title: string;
  ref: string;
  topic: string;
  minutes: 5 | 10 | 15 | 30 | 60;
  passageText?: string;
  explanation: string;
  context?: string;
  terms?: { term: string; definition: string }[];
  application?: string;
  reflection?: string[];
  prayer: string;
  quiz?: QuizQuestion[];
}

const VALID_MINUTES: SessionMinutes[] = [5, 10, 15, 30, 45, 60];

function safeGetDevotional(id: string): DevotionalLike | undefined {
  try {
    const direct = getDevotional(id) as unknown as DevotionalLike | undefined;
    if (direct) return direct;
  } catch {
    // fall through to array search
  }
  try {
    const list = (DEVOTIONALS ?? []) as unknown as DevotionalLike[];
    return list.find((d) => d.id === id);
  } catch {
    return undefined;
  }
}

async function resolvePassage(ref: string): Promise<string> {
  try {
    const v = await getVerseText(ref);
    return v.text;
  } catch {
    const fb = FALLBACK_PASSAGES[refToSlug(ref)];
    return fb ? fb.text : '';
  }
}

function StudyClient() {
  const { t } = useT();
  const params = useSearchParams();
  const [plan, setPlan] = useState<SessionPlan | null>(null);
  const [error, setError] = useState(false);
  const [saved, setSaved] = useState(false);
  const [needLogin, setNeedLogin] = useState(false);
  const [saving, setSaving] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    const raw = Number(params.get('minutes'));
    const minutes: SessionMinutes = VALID_MINUTES.includes(raw as SessionMinutes)
      ? (raw as SessionMinutes)
      : 10;
    const seedId = params.get('seed');
    const refParam = params.get('ref');

    (async () => {
      try {
        const dev = seedId ? safeGetDevotional(seedId) : undefined;
        if (dev) {
          const passageText = dev.passageText || (await resolvePassage(dev.ref));
          setPlan(
            buildSession(minutes, {
              title: dev.title,
              ref: dev.ref,
              topic: dev.topic,
              difficulty: difficultyForMinutes(dev.minutes ?? minutes),
              passageText: passageText || dev.explanation,
              explanation: dev.explanation,
              context: dev.context,
              terms: dev.terms,
              application: dev.application,
              reflection: dev.reflection,
              prayer: dev.prayer,
              quiz: dev.quiz,
            }),
          );
        } else if (refParam) {
          const passageText = await resolvePassage(refParam);
          if (!passageText) {
            setError(true);
            return;
          }
          setPlan(
            buildSession(minutes, {
              title: refParam,
              ref: refParam,
              topic: 'Scripture',
              difficulty: 'All levels',
              passageText,
              explanation:
                'Read this passage slowly, twice. Notice what it says about God, about people, and about how we should live. Scripture is best understood when it is received, not just scanned.',
              prayer:
                'Father, open my heart to your word. Show me what you want me to see, and give me grace to live it today. Amen.',
            }),
          );
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      }
    })();
  }, [params]);

  useEffect(
    () => () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    },
    [],
  );

  const speak = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !plan) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const text = `${plan.title}. ${plan.sections
      .filter((s) => s.kind !== 'quiz')
      .map((s) => `${s.heading}. ${s.body}`)
      .join(' ')}`;
    const utter = new SpeechSynthesisUtterance(text);
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utter);
    setSpeaking(true);
  };

  const complete = async () => {
    if (!plan || saving) return;
    setSaving(true);
    try {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!user) {
        setNeedLogin(true);
        return;
      }
      await supabase.from('study_sessions').insert({
        user_id: user.id,
        ref: plan.ref,
        label: plan.title,
        minutes: plan.minutes,
        topic: plan.topic,
      });
      const item = newReviewItem(plan.topic);
      const { data: existing } = await supabase
        .from('review_items')
        .select('concept')
        .eq('user_id', user.id)
        .eq('concept', plan.topic);
      if (!existing || (existing as unknown[]).length === 0) {
        await supabase.from('review_items').insert({
          user_id: user.id,
          concept: item.concept,
          next_review: item.nextReview,
          interval_days: item.intervalDays,
          reps: item.reps,
        });
      }
      setSaved(true);
    } catch {
      setNeedLogin(true);
    } finally {
      setSaving(false);
    }
  };

  if (error) {
    return (
      <div className="mx-auto max-w-2xl">
        <Card>
          <p className="text-ink dark:text-parchment">{t('study_not_found')}</p>
          <Link href="/devotional" className="mt-4 inline-block">
            <Button variant="ghost">{t('back')}</Button>
          </Link>
        </Card>
      </div>
    );
  }

  if (!plan) return <Spinner />;

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <div>
        <Link href="/" className="text-sm text-gold hover:underline">
          ← {t('back')}
        </Link>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <Badge>
            {plan.minutes} {t('minutes')}
          </Badge>
          <Badge>{plan.topic}</Badge>
          <Badge>{plan.difficulty}</Badge>
        </div>
        <h1 className="font-display mt-2 text-3xl font-semibold text-ink dark:text-parchment">
          {plan.title}
        </h1>
        <p className="mt-1 font-medium text-gold">{plan.ref}</p>
        <div className="mt-3">
          <Button variant="ghost" onClick={speak}>
            {speaking ? t('stop_reading') : t('read_aloud')}
          </Button>
        </div>
      </div>

      {plan.sections.map((s, i) => {
        if (s.kind === 'passage') {
          const lines = s.body.split('\n');
          const text = lines[0].trim() === plan.ref ? lines.slice(1).join('\n') : s.body;
          return (
            <Card key={i} className="border-l-4 border-l-gold">
              <SectionTitle title={s.heading} />
              <p className="font-display mt-3 text-lg italic leading-8 text-ink dark:text-parchment">
                {text}
              </p>
              <p className="mt-3 text-sm font-semibold text-gold">{plan.ref}</p>
            </Card>
          );
        }
        if (s.kind === 'quiz') {
          return (
            <div key={i}>
              <SectionTitle title={s.heading} className="mb-3" />
              <QuizRunner
                questions={plan.quiz ?? []}
                tag={plan.topic}
                onComplete={() => {}}
              />
            </div>
          );
        }
        if (s.kind === 'prayer') {
          return (
            <Card key={i} className="bg-gold/5">
              <SectionTitle title={s.heading} />
              <p className="font-display mt-3 text-lg italic leading-8 text-ink dark:text-parchment">
                {s.body}
              </p>
            </Card>
          );
        }
        if (s.kind === 'list') {
          return (
            <Card key={i}>
              <SectionTitle title={s.heading} />
              <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
                {s.body.split('\n').filter(Boolean).map((line, j) => (
                  <li key={j} className="leading-7">
                    {line}
                  </li>
                ))}
              </ul>
            </Card>
          );
        }
        return (
          <Card key={i}>
            <SectionTitle title={s.heading} />
            {s.body.split('\n\n').map((para, j) => (
              <p key={j} className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
                {para}
              </p>
            ))}
          </Card>
        );
      })}

      <Card className="text-center">
        {saved ? (
          <p className="font-semibold text-gold">{t('session_saved')}</p>
        ) : (
          <>
            <Button onClick={complete} disabled={saving}>
              {t('complete_session')}
            </Button>
            {needLogin && (
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                {t('login_to_track')}{' '}
                <Link href="/login" className="font-semibold text-gold hover:underline">
                  {t('login')}
                </Link>
              </p>
            )}
          </>
        )}
      </Card>
    </div>
  );
}

export default function StudyPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <StudyClient />
    </Suspense>
  );
}
