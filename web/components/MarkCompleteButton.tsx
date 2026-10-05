'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/client';
import { Button } from './ui';

/** Marks a lesson (or course lesson) complete in lesson_progress. */
export function MarkCompleteButton({ lessonId }: { lessonId: string }) {
  const { t } = useT();
  const [done, setDone] = useState(false);
  const [needLogin, setNeedLogin] = useState(false);
  const [saving, setSaving] = useState(false);

  const mark = async () => {
    setSaving(true);
    try {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!user) {
        setNeedLogin(true);
        return;
      }
      const { data: existing } = await supabase
        .from('lesson_progress')
        .select('lesson_id')
        .eq('user_id', user.id)
        .eq('lesson_id', lessonId);
      if (!existing || (existing as unknown[]).length === 0) {
        await supabase.from('lesson_progress').insert({
          user_id: user.id,
          lesson_id: lessonId,
          completed_at: new Date().toISOString(),
        });
      }
      setDone(true);
    } catch {
      // ignore — offline
    } finally {
      setSaving(false);
    }
  };

  if (done) {
    return <span className="text-sm font-semibold text-gold">✓ {t('lesson_complete')}</span>;
  }

  return (
    <span className="inline-flex flex-col items-start gap-2">
      <Button variant="gold" onClick={mark} disabled={saving}>
        {t('mark_complete')}
      </Button>
      {needLogin && (
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {t('login_required')}{' '}
          <Link href="/login" className="font-semibold text-gold hover:underline">
            {t('login')}
          </Link>
        </span>
      )}
    </span>
  );
}
