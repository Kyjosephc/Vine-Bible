'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/client';

type RowValue = string | number | boolean | null;

/** Generic "save this for later" button that inserts a row for the current user. */
export function SaveButton({
  table,
  row,
  label,
}: {
  table: string;
  row: Record<string, RowValue>;
  label?: string;
}) {
  const { t } = useT();
  const [saved, setSaved] = useState(false);
  const [needLogin, setNeedLogin] = useState(false);

  const save = async () => {
    try {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!user) {
        setNeedLogin(true);
        return;
      }
      await supabase.from(table).insert({ ...row, user_id: user.id });
      setSaved(true);
    } catch {
      // ignore — offline
    }
  };

  if (saved) {
    return <span className="text-xs font-semibold text-gold">✓ {t('saved')}</span>;
  }

  return (
    <span className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={save}
        className="rounded-lg border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink transition hover:bg-ink/5 dark:border-white/15 dark:text-parchment dark:hover:bg-white/5"
      >
        {label ?? t('save')}
      </button>
      {needLogin && (
        <Link href="/login" className="text-xs font-semibold text-gold hover:underline">
          {t('login_required')}
        </Link>
      )}
    </span>
  );
}
