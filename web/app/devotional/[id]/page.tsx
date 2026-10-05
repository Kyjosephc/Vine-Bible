import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DEVOTIONALS, getDevotional } from '@/content/devotionals';
import { useT } from '@/lib/i18n';
import type { QuizQuestion } from '@/lib/types';
import { Badge, Button, Card, SectionTitle } from '@/components/ui';
import { difficultyForMinutes } from '@/lib/study';
import { SaveButton } from '@/components/SaveButton';

interface DevotionalLike {
  id: string;
  title: string;
  ref: string;
  topic: string;
  difficulty: string;
  minutes?: number;
  passageText?: string;
  explanation: string;
  context?: string;
  terms?: { term: string; definition: string }[];
  application?: string;
  reflection?: string[];
  prayer: string;
  quiz?: QuizQuestion[];
}

function safeGetDevotional(id: string): DevotionalLike | undefined {
  try {
    const direct = getDevotional(id) as unknown as DevotionalLike | undefined;
    if (direct) return direct;
  } catch {
    // fall through
  }
  try {
    return ((DEVOTIONALS ?? []) as unknown as DevotionalLike[]).find((d) => d.id === id);
  } catch {
    return undefined;
  }
}

const DURATIONS = [5, 10, 15, 30, 45, 60];

export default function DevotionalDetailPage({ params }: { params: { id: string } }) {
  const { t } = useT();
  const dev = safeGetDevotional(params.id);
  if (!dev) notFound();

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <Link href="/devotional" className="text-sm text-gold hover:underline">
          ← {t('devotionals')}
        </Link>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <Badge>{dev.topic}</Badge>
          <Badge>{difficultyForMinutes(dev.minutes ?? 15)}</Badge>
          {dev.minutes ? (
            <Badge>
              {dev.minutes} {t('minutes')}
            </Badge>
          ) : null}
        </div>
        <h1 className="font-display mt-2 text-3xl font-semibold text-ink dark:text-parchment">
          {dev.title}
        </h1>
        <p className="mt-1 font-medium text-gold">{dev.ref}</p>
      </div>

      {dev.passageText ? (
        <Card className="border-l-4 border-l-gold">
          <p className="font-display text-lg italic leading-8 text-ink dark:text-parchment">
            {dev.passageText}
          </p>
        </Card>
      ) : null}

      <Card>
        <div className="lesson-body">
          {dev.explanation.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Card>

      {dev.context ? (
        <Card>
          <SectionTitle title={t('context')} />
          <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">{dev.context}</p>
        </Card>
      ) : null}

      {dev.terms && dev.terms.length > 0 ? (
        <Card>
          <SectionTitle title={t('key_terms')} />
          <dl className="mt-3 space-y-3">
            {dev.terms.map((x) => (
              <div key={x.term}>
                <dt className="text-sm font-semibold text-gold">{x.term}</dt>
                <dd className="mt-0.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {x.definition}
                </dd>
              </div>
            ))}
          </dl>
        </Card>
      ) : null}

      {dev.application ? (
        <Card>
          <SectionTitle title={t('application')} />
          <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">{dev.application}</p>
        </Card>
      ) : null}

      {dev.reflection && dev.reflection.length > 0 ? (
        <Card>
          <SectionTitle title={t('reflection')} />
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
            {dev.reflection.map((r, i) => (
              <li key={i} className="leading-7">
                {r}
              </li>
            ))}
          </ul>
        </Card>
      ) : null}

      <Card className="bg-gold/5">
        <SectionTitle title={t('prayer')} />
        <p className="font-display mt-3 italic leading-8 text-ink dark:text-parchment">
          {dev.prayer}
        </p>
      </Card>

      <Card>
        <SectionTitle title={t('start_study_session')} />
        <div className="mt-3 flex flex-wrap gap-2">
          {DURATIONS.map((m) => (
            <Link
              key={m}
              href={`/study?minutes=${m}&seed=${encodeURIComponent(dev.id)}`}
              className="rounded-xl border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition hover:border-gold hover:bg-gold/10 dark:border-white/15 dark:text-parchment"
            >
              {m} {t('minutes')}
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <SaveButton
            table="saved_devotionals"
            row={{ devotional_id: dev.id }}
            label={t('save')}
          />
        </div>
      </Card>

      <div>
        <Link href="/devotional">
          <Button variant="ghost">{t('back')}</Button>
        </Link>
      </div>
    </div>
  );
}
