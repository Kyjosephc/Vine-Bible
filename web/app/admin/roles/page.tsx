import { requireAdmin, listAdmins } from '@/lib/admin';
import { removeAdminAction } from '../actions';
import { Card, Button } from '@/components/ui';

const GRANT_SQL = `insert into public.user_roles (user_id, role)
values ('<user-uuid>', 'admin');`;

/** /admin/roles — list admins, remove them; adding is SQL-only by design. */
export default async function AdminRolesPage() {
  const admin = await requireAdmin();
  const admins = await listAdmins();

  return (
    <div>
      <section aria-labelledby="admins">
        <h2 id="admins" className="font-display text-lg font-semibold text-ink dark:text-parchment">
          Current admins ({admins.length})
        </h2>
        <Card className="mt-3 p-0">
          {admins.length === 0 ? (
            <p className="p-4 text-sm text-slate-500 dark:text-slate-400">No admins found.</p>
          ) : (
            <ul className="divide-y divide-ink/5 dark:divide-white/5">
              {admins.map((a) => {
                const isSelf = a.user_id === admin.id;
                return (
                  <li key={a.user_id} className="flex items-center justify-between gap-3 px-4 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-ink dark:text-parchment">
                        {a.display_name || 'No display name'}
                        {isSelf ? (
                          <span className="ml-2 rounded-full bg-gold/15 px-2 py-0.5 text-[11px] font-semibold text-gold">
                            you
                          </span>
                        ) : null}
                      </p>
                      <p className="truncate font-mono text-[11px] text-slate-500 dark:text-slate-400">
                        {a.user_id}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Granted {a.created_at.slice(0, 10)}
                      </p>
                    </div>
                    {!isSelf && admins.length > 1 ? (
                      <form action={removeAdminAction}>
                        <input type="hidden" name="user_id" value={a.user_id} />
                        <Button
                          variant="ghost"
                          type="submit"
                          className="!border-red-500/30 !text-red-400 hover:!bg-red-500/10"
                        >
                          Remove
                        </Button>
                      </form>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          )}
        </Card>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          You can’t remove yourself or the last admin.
        </p>
      </section>

      <section aria-labelledby="grant" className="mt-8">
        <h2 id="grant" className="font-display text-lg font-semibold text-ink dark:text-parchment">
          Grant an admin
        </h2>
        <Card className="mt-3 p-5">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Admins can’t be granted from the app — this is deliberate. Only the
            owner can grant admin access, by running this SQL in the{' '}
            <strong>Supabase dashboard → SQL Editor</strong> (the service role
            bypasses row-level security; the app itself has no insert permission
            on <code className="font-mono text-xs">user_roles</code>).
          </p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-slate-600 dark:text-slate-300">
            <li>
              Find the user’s UUID in <strong>Supabase → Authentication → Users</strong>.
            </li>
            <li>Run the SQL below with the UUID filled in.</li>
          </ol>
          <pre className="mt-3 overflow-x-auto rounded-xl bg-ink p-4 font-mono text-xs leading-6 text-parchment dark:bg-black/40">
            {GRANT_SQL}
          </pre>
        </Card>
      </section>
    </div>
  );
}
