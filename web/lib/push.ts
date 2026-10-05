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
