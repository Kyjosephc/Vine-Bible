import { requireAdmin, listContentFlags } from '@/lib/admin';
import { setFlagAction } from '../actions';
import { Card, Button } from '@/components/ui';

const FLAG_DESCRIPTIONS: Record<string, string> = {
  tutor: 'AI verse tutor (needs an LLM key configured; see README).',
  verse_images: 'Shareable verse-image generator.',
  groups: 'Study groups and the church dashboard.',
  jesus_mode: 'The Life of Jesus chronology.',
  kids_mode: 'Kids mode toggle in Settings.',
  premium_extras: 'Reserved for future premium extras. Off by default.',
};

/** /admin/flags — content publish flags. Everything stays free; flags gate availability. */
export default async function AdminFlagsPage() {
  await requireAdmin();
  const flags = await listContentFlags();

  return (
    <div>
      <h2 className="font-display text-lg font-semibold text-ink dark:text-parchment">Content flags</h2>
      <p className="mt-1 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
        Publish flags control whether a feature area is available. Turning a flag
        off hides it for everyone; turning it on restores it. This is the
        entitlement layer for future free/premium/church plans —{' '}
        <strong>Bible text and core learning are never paywalled</strong>; flags
        only toggle feature availability.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {flags.map((flag) => (
          <Card key={flag.key} className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-mono text-sm font-semibold text-ink dark:text-parchment">
                  {flag.key}
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {FLAG_DESCRIPTIONS[flag.key] ?? 'Feature availability flag.'}
                </p>
                <p className="mt-1 text-[11px] text-slate-400 dark:text-slate-500">
                  Updated {flag.updated_at.slice(0, 10)}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  flag.enabled ? 'bg-emerald-500/15 text-emerald-400' : 'bg-white/10 text-slate-400'
                }`}
              >
                {flag.enabled ? 'On' : 'Off'}
              </span>
            </div>
            <form action={setFlagAction} className="mt-3">
              <input type="hidden" name="key" value={flag.key} />
              <input type="hidden" name="enabled" value={flag.enabled ? 'off' : 'on'} />
              <Button variant="ghost" type="submit">
                Turn {flag.enabled ? 'off' : 'on'}
              </Button>
            </form>
          </Card>
        ))}
      </div>
      {flags.length === 0 ? (
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          No flags found. Run the phase-2 SQL migration to seed the defaults.
        </p>
      ) : null}
    </div>
  );
}
