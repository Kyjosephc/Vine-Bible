/**
 * Web Push subscription helpers (client side).
 *
 * Uses the existing /sw.js service worker registration and the public VAPID
 * key from NEXT_PUBLIC_VAPID_PUBLIC_KEY. All functions are safe to call when
 * push is unsupported — they return null/false instead of throwing.
 */

export function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = typeof window !== 'undefined' ? window.atob(base64) : '';
  const output = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i += 1) {
    output[i] = raw.charCodeAt(i);
  }
  return output;
}

function pushSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    'PushManager' in window &&
    'Notification' in window
  );
}

async function getRegistration(): Promise<ServiceWorkerRegistration | null> {
  if (!pushSupported()) return null;
  const existing = await navigator.serviceWorker.getRegistration();
  if (existing) return existing;
  try {
    return await navigator.serviceWorker.register('/sw.js');
  } catch {
    return null;
  }
}

/** Get the current push subscription for /sw.js, if any. */
export async function getPushSubscription(): Promise<PushSubscription | null> {
  const reg = await getRegistration();
  if (!reg) return null;
  try {
    return await reg.pushManager.getSubscription();
  } catch {
    return null;
  }
}

/**
 * Subscribe this device for push notifications. Returns the subscription,
 * or null when push is unsupported, permission is denied, or no VAPID key
 * is configured.
 */
export async function subscribePush(): Promise<PushSubscription | null> {
  if (!pushSupported()) return null;
  const vapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  if (!vapidKey) return null;

  let permission: NotificationPermission = Notification.permission;
  if (permission === 'default') {
    try {
      permission = await Notification.requestPermission();
    } catch {
      return null;
    }
  }
  if (permission !== 'granted') return null;

  const reg = await getRegistration();
  if (!reg) return null;
  try {
    const existing = await reg.pushManager.getSubscription();
    if (existing) return existing;
    return await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(vapidKey) as BufferSource,
    });
  } catch {
    return null;
  }
}

/** Remove the current push subscription. Returns true when nothing remains subscribed. */
export async function unsubscribePush(): Promise<boolean> {
  if (!pushSupported()) return false;
  const reg = await getRegistration();
  if (!reg) return true;
  try {
    const sub = await reg.pushManager.getSubscription();
    if (!sub) return true;
    return await sub.unsubscribe();
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// Reminder preferences (device-facing helpers over profiles columns).
//
// All reminder types default OFF. The deployer's scheduler reads
// profiles.daily_reminder_enabled / daily_reminder_time / review_reminders /
// streak_reminders together with push_subscriptions, then sends via the
// admin-gated POST /api/push/send. See README "Notification setup".
// ---------------------------------------------------------------------------

export interface ReminderPrefs {
  daily_reminder_enabled: boolean;
  /** HH:MM 24-hour local time */
  daily_reminder_time: string;
  review_reminders: boolean;
  streak_reminders: boolean;
}

export const DEFAULT_REMINDER_PREFS: ReminderPrefs = {
  daily_reminder_enabled: false,
  daily_reminder_time: '08:00',
  review_reminders: false,
  streak_reminders: false,
};

const PREFS_KEY = 'halo-reminder-prefs';

function validTime(value: string): boolean {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
}

/** Local (device) copy of reminder prefs — works even when signed out. */
export function loadLocalReminderPrefs(): ReminderPrefs {
  try {
    const raw = window.localStorage.getItem(PREFS_KEY);
    if (!raw) return { ...DEFAULT_REMINDER_PREFS };
    const parsed = JSON.parse(raw) as Partial<ReminderPrefs>;
    return {
      daily_reminder_enabled: parsed.daily_reminder_enabled === true,
      daily_reminder_time:
        typeof parsed.daily_reminder_time === 'string' && validTime(parsed.daily_reminder_time)
          ? parsed.daily_reminder_time
          : DEFAULT_REMINDER_PREFS.daily_reminder_time,
      review_reminders: parsed.review_reminders === true,
      streak_reminders: parsed.streak_reminders === true,
    };
  } catch {
    return { ...DEFAULT_REMINDER_PREFS };
  }
}

export function saveLocalReminderPrefs(prefs: ReminderPrefs): void {
  try {
    window.localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch {
    // storage unavailable — ignore
  }
}

