'use server';

import { revalidatePath } from 'next/cache';
import { requireAdmin, removeAdminRole, setContentFlag } from '@/lib/admin';

/** Remove an admin role. Guarded: no self-removal, never the last admin. */
export async function removeAdminAction(formData: FormData): Promise<void> {
  const admin = await requireAdmin();
  const target = formData.get('user_id');
  if (typeof target !== 'string' || !target) throw new Error('Missing user id.');
  await removeAdminRole(target, admin.id);
  revalidatePath('/admin/roles');
}

/** Toggle a content flag on/off. */
export async function setFlagAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const key = formData.get('key');
  const enabled = formData.get('enabled');
  if (typeof key !== 'string' || !key) throw new Error('Missing flag key.');
  await setContentFlag(key, enabled === 'on');
  revalidatePath('/admin/flags');
}
