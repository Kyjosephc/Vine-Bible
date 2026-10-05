'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card, ProgressBar, SectionTitle } from '@/components/ui';
import { useT } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/client';

type KnowledgeLevel = 'brand-new' | 'beginner' | 'some-experience' | 'intermediate' | 'advanced';

interface OnboardingState {
  knowledgeLevel: KnowledgeLevel | null;
  goals: string[];
  dailyMinutes: number | null;
}

const STORAGE_KEY = 'halo-onboarding';

const KNOWLEDGE_OPTIONS: { value: KnowledgeLevel; hint: string }[] = [
  { value: 'brand-new', hint: "Never really read the Bible before — let's start at the very beginning." },
  { value: 'beginner', hint: "I've opened it a few times but I'm still finding my way around." },
  { value: 'some-experience', hint: "I've read some passages and know a few stories." },
  { value: 'intermediate', hint: "I'm comfortable reading Scripture and want to go deeper." },
  { value: 'advanced', hint: "I study regularly and want rich, challenging material." },
];

const KNOWLEDGE_LABELS: Record<KnowledgeLevel, string> = {
  'brand-new': 'Brand new',
  beginner: 'Beginner',
  'some-experience': 'Some experience',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

const GOAL_OPTIONS = [
  'Who God is',
  'Jesus',
  'The Bible',
  'How to understand Scripture',
  'Christian beliefs',
  'Prayer',
  'How to live as a Christian',
  'Old Testament',
  'New Testament',
  'Specific books of the Bible',
  'Biblical history',
  'Apologetics',
  'Relationships',
  'Purpose',
  'Anxiety/fear',
  'Suffering',
  'Forgiveness',
  'Leadership',
  'Other',
];

const TIME_OPTIONS: { value: number; label: string; hint: string }[] = [
  { value: 5, label: '5 minutes', hint: 'A short daily moment with God.' },
  { value: 15, label: '15 minutes', hint: 'One focused session a day.' },
  { value: 30, label: '30 minutes', hint: 'Time for a deeper study.' },
  { value: 60, label: '1 hour+', hint: 'Go all in every day.' },
];

function persist(state: OnboardingState, skipped: boolean, router: ReturnType<typeof useRouter>) {
  const payload = {
    knowledgeLevel: state.knowledgeLevel,
    goals: state.goals,
    dailyMinutes: state.dailyMinutes,
    completed: true,
    completedAt: new Date().toISOString(),
    ...(skipped ? { skipped: true } : {}),
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    /* storage unavailable — still continue */
  }
  // Best-effort server sync (works for guests offline; never blocks).
  try {
    const supabase = createClient();
    supabase.auth
      .getUser()
      .then(({ data }) => {
        const user = data?.user;
        if (!user) return null;
        return supabase.from('profiles').upsert(
          {
            id: user.id,
            knowledge_level: state.knowledgeLevel,
            learning_goals: state.goals,
            daily_minutes: state.dailyMinutes,
            onboarding_completed: true,
          },
          { onConflict: 'id' },
        );
      })
      .catch(() => {});
  } catch {
    /* ignore */
  }
  router.push('/');
}

export default function OnboardingPage() {
  const router = useRouter();
  const { t } = useT();
  const [step, setStep] = useState(0); // 0..2 questions, 3 = confirmation
  const [state, setState] = useState<OnboardingState>({ knowledgeLevel: null, goals: [], dailyMinutes: null });

  const finish = (skipped: boolean) => persist(state, skipped, router);

  const toggleGoal = (goal: string) =>
    setState((s) => ({
      ...s,
      goals: s.goals.includes(goal) ? s.goals.filter((g) => g !== goal) : [...s.goals, goal],
    }));

  const header = (questionIndex: number) => (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          {t('onboarding_step', 'Step')} {questionIndex + 1} {t('onboarding_of', 'of')} 3
        </p>
        <button
          type="button"
          onClick={() => finish(true)}
          className="text-sm text-ink/60 underline-offset-4 hover:underline dark:text-parchment/60"
        >
          {t('onboarding_skip', 'Skip')}
        </button>
      </div>
      <ProgressBar value={questionIndex + 1} max={3} />
    </div>
  );

  const footer = (canContinue: boolean, onContinue: () => void) => (
    <div className="mt-8 flex items-center justify-between">
      <Button variant="ghost" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
        {t('onboarding_back', 'Back')}
      </Button>
      <Button onClick={onContinue} disabled={!canContinue}>
        {t('onboarding_continue', 'Continue')}
      </Button>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-xl py-6">
      {step < 3 && header(step)}

      {step === 0 && (
        <>
          <SectionTitle title={t('onboarding_q1', 'What is your current Bible knowledge?')} className="mb-5" />
          <div className="space-y-3">
            {KNOWLEDGE_OPTIONS.map((opt) => {
              const selected = state.knowledgeLevel === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setState((s) => ({ ...s, knowledgeLevel: opt.value }))}
                  aria-pressed={selected}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    selected
                      ? 'border-gold bg-gold/10 shadow-sm'
                      : 'border-ink/10 bg-white hover:border-gold/50 dark:border-white/10 dark:bg-white/[0.04]'
                  }`}
                >
                  <p className="font-semibold text-ink dark:text-parchment">
                    {t(`onboarding_knowledge_${opt.value}`, KNOWLEDGE_LABELS[opt.value])}
                  </p>
                  <p className="mt-1 text-sm text-ink/60 dark:text-parchment/60">{t(`onboarding_knowledge_${opt.value}_hint`, opt.hint)}</p>
                </button>
              );
            })}
          </div>
          {footer(state.knowledgeLevel !== null, () => setStep(1))}
        </>
      )}

      {step === 1 && (
        <>
          <SectionTitle
            title={t('onboarding_q2', 'What are you hoping to learn? (select all that apply)')}
            className="mb-5"
          />
          <div className="flex flex-wrap gap-2.5">
            {GOAL_OPTIONS.map((goal) => {
              const selected = state.goals.includes(goal);
              return (
                <button
                  key={goal}
                  type="button"
                  onClick={() => toggleGoal(goal)}
                  aria-pressed={selected}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    selected
                      ? 'border-gold bg-gold text-ink'
                      : 'border-ink/15 bg-white text-ink hover:border-gold/60 dark:border-white/15 dark:bg-white/[0.04] dark:text-parchment'
                  }`}
                >
                  {t(`onboarding_goal_${goal}`, goal)}
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-ink/60 dark:text-parchment/60">
            {t('onboarding_q2_note', "It's fine to continue without selecting any — we'll guide you anyway.")}
          </p>
          {footer(true, () => setStep(2))}
        </>
      )}

      {step === 2 && (
        <>
          <SectionTitle
            title={t('onboarding_q3', 'How much time do you have for daily learning?')}
            className="mb-5"
          />
          <div className="space-y-3">
            {TIME_OPTIONS.map((opt) => {
              const selected = state.dailyMinutes === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setState((s) => ({ ...s, dailyMinutes: opt.value }))}
                  aria-pressed={selected}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    selected
                      ? 'border-gold bg-gold/10 shadow-sm'
                      : 'border-ink/10 bg-white hover:border-gold/50 dark:border-white/10 dark:bg-white/[0.04]'
                  }`}
                >
                  <p className="font-semibold text-ink dark:text-parchment">{opt.label}</p>
                  <p className="mt-1 text-sm text-ink/60 dark:text-parchment/60">{opt.hint}</p>
                </button>
              );
            })}
          </div>
          {footer(state.dailyMinutes !== null, () => setStep(3))}
        </>
      )}

      {step === 3 && (
        <Card className="text-center">
          <p className="mb-2 text-4xl">✦</p>
          <SectionTitle title={t('onboarding_ready', 'Your personal path is ready')} className="mb-3 justify-center" />
          <p className="mx-auto max-w-sm text-ink/70 dark:text-parchment/70">
            {t(
              'onboarding_ready_sub',
              "We've shaped your study experience around what matters to you. Take it one day at a time — every small step counts.",
            )}
          </p>
          <div className="mt-6">
            <Button onClick={() => finish(false)} className="w-full sm:w-auto">
              {t('onboarding_start', 'Start learning')}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setStep(2)}
            className="mt-4 text-sm text-ink/60 underline-offset-4 hover:underline dark:text-parchment/60"
          >
            {t('onboarding_back', 'Back')}
          </button>
        </Card>
      )}
    </div>
  );
}
