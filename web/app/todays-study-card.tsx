'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/i18n';
import { difficultyForMinutes } from '@/lib/study';
import type { SessionMinutes } from '@/lib/types';
import { Badge, Card, EmptyState } from '@/components/ui';

export interface DevotionalSummary {
  id: string;
  title: string;
  ref: string;
  topic: string;
  minutes: 5 | 10 | 15 | 30 | 60;
}

const OPTIONS: SessionMinutes[] = [5, 10, 15, 30, 45, 60];

function dayOfYear(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now.getTime() - start.getTime()) / 86400000);
}

/**
 * Today's Study card. The user picks how much time they have; the card
 * updates to show a devotional of that length (rotating daily), with its
 * title, Scripture reference, difficulty, topic, today's progress details
 * (sessions and minutes studied today, plus a "Done today" badge when this
 * devotional's passage was already studied today), and a Start Study button.
 */
export interface TodaySessionSummary {
  ref: string;
  minutes: number;
}

export function TodaysStudyCard({
  devotionals,
  todaySessions = [],
}: {
  devotionals: DevotionalSummary[];
  todaySessions?: TodaySessionSummary[];
}) {
  const { t } = useT();
  const [minutes, setMinutes] = useState<SessionMinutes>(15);

  const devotional = useMemo(() => {
    const pool = devotionals.filter((d) => d.minutes === minutes);
    const list = pool.length > 0 ? pool : devotionals;
    if (list.length === 0) return null;
    return list[dayOfYear() % list.length];
  }, [devotionals, minutes]);

  if (!devotional) {
    return <EmptyState title={t('todays_study')} description={t('no_lessons')} />;
  }

  const doneToday = todaySessions.some((s) => s.ref === devotional.ref);
  const todayMinutes = todaySessions.reduce((sum, s) => sum + (s.minutes || 0), 0);

  return (
    <Card className="border-gold/30">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{devotional.topic}</Badge>
        <Badge>{difficultyForMinutes(devotional.minutes)}</Badge>
        <Badge>
          {devotional.minutes} {t('minutes')}
        </Badge>
        {doneToday && <Badge>✓ {t('done_today')}</Badge>}
      </div>
      <h2 className="font-display mt-3 text-2xl font-semibold text-ink dark:text-parchment">
        {devotional.title}
      </h2>
      <p className="mt-1 text-sm font-medium text-gold">{devotional.ref}</p>
      <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
        {t('studied_today')}: {todaySessions.length} {t('sessions_label')} · {todayMinutes}{' '}
        {t('minutes')}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {t('duration')}
          <select
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value) as SessionMinutes)}
            className="ml-2 rounded-lg border border-ink/15 bg-transparent px-2 py-1.5 text-sm text-ink focus:border-gold focus:outline-none dark:border-white/15 dark:bg-ink dark:text-parchment"
          >
            {OPTIONS.map((m) => (
              <option key={m} value={m}>
                {m} {t('minutes')}
              </option>
            ))}
          </select>
        </label>
        <Link
          href={`/study?minutes=${minutes}&seed=${encodeURIComponent(devotional.id)}`}
          className="inline-flex items-center rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition hover:brightness-110"
        >
          {t('start_study')}
        </Link>
      </div>
    </Card>
  );
}
