// Compact gamification display: level + XP progress, streak, and badges.
// Surfaced on home and the progress dashboard. Warm and encouraging —
'use client';

import Link from 'next/link';
import { useT } from '@/lib/i18n';
import { ProgressBar } from './ui';
import type { Badge, LevelProgress } from '@/lib/gamification';

interface GamificationStripProps {
  level: LevelProgress;
  xp: number;
  streak: number;
  badges: Badge[];
  /** Optional: today's minutes + daily goal for the goal ring. */
  todayMinutes?: number;
  dailyGoal?: number;
  /** Optional: link to the full progress dashboard. */
  progressHref?: string;
}

export function GamificationStrip({
  level,
  xp,
  streak,
  badges,
  todayMinutes,
  dailyGoal,
  progressHref,
}: GamificationStripProps) {
  const { t } = useT();
  const earned = badges.filter((b) => b.earned);

  return (
    <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/[0.10] via-transparent to-transparent p-5 dark:from-gold/[0.06]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            {t('Your journey')}
          </p>
          <p className="font-display mt-1 text-xl font-semibold text-ink dark:text-parchment">
            {level.level.name}
            <span className="ml-2 text-sm font-normal text-slate-500 dark:text-slate-400">
              {xp} {t('XP')}
            </span>
          </p>
        </div>
        <div
          className="shrink-0 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-sm font-semibold text-ink dark:text-gold"
          aria-label={t('Day streak')}
        >
          🔥 {streak}
        </div>
      </div>

      <div className="mt-3">
        <ProgressBar value={level.pct} max={100} />
        <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
          {level.next
            ? t('{n} XP to {level}', `${level.toNext} XP to ${level.next.name}`)
            : t('You have reached the highest level. Keep shining.')}
        </p>
      </div>

      {typeof todayMinutes === 'number' && dailyGoal ? (
        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span>
            {t('Today')}: {todayMinutes} / {dailyGoal} {t('min')}
          </span>
          {todayMinutes >= dailyGoal && (
            <span className="font-semibold text-gold">{t('Daily goal met ✓')}</span>
          )}
        </div>
      ) : null}

      {earned.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {earned.map((b) => (
            <span
              key={b.id}
              title={b.description}
              className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-white/60 px-2.5 py-1 text-xs font-medium text-ink dark:bg-white/[0.05] dark:text-parchment"
            >
              <span aria-hidden>{b.icon}</span>
              {b.name}
            </span>
          ))}
        </div>
      )}

      {progressHref && (
        <Link
          href={progressHref}
          className="mt-4 inline-block text-sm font-semibold text-gold hover:underline"
        >
          {t('View full progress')} →
        </Link>
      )}
    </div>
  );
}
