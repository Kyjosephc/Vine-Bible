/* Halo service worker — hand-rolled, no PWA plugin.
 *
 * Strategy:
 *  - Bible API hosts (bolls.life, bible-api.com): cache-first in the BIBLE
 *    cache; network responses refresh the cache. Reads stay offline-capable.
 *  - Same-origin navigations: network-first, falling back to cached '/'.
 *  - Same-origin static assets: cache-first, refreshed from network.
 */

const SHELL = 'halo-shell-v1';
const BIBLE = 'halo-v1';
const SHELL_ASSETS = ['/', '/manifest.webmanifest', '/icons/icon-192.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(SHELL);
        await cache.addAll(SHELL_ASSETS);
      } catch (err) {
        // Offline or asset missing during install: do not fail the install.
      }
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

function isBibleApi(host) {
  return host === 'bolls.life' || host === 'www.bolls.life' || host.endsWith('bible-api.com');
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Bible text APIs: cache-first so reading works offline.
  if (isBibleApi(url.host)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(BIBLE);
        const cached = await cache.match(request);
        if (cached) return cached;
        const response = await fetch(request);
        if (response.ok) cache.put(request, response.clone());
        return response;
      })()
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  // Navigations: network-first, fall back to the cached app shell.
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          const cache = await caches.open(SHELL);
          cache.put('/', response.clone());
          return response;
        } catch (err) {
          const cache = await caches.open(SHELL);
          const cached = await cache.match('/');
          return cached || Response.error();
        }
      })()
    );
    return;
  }

  // Same-origin static assets: cache-first.
  event.respondWith(
    (async () => {
      const cache = await caches.open(SHELL);
      const cached = await cache.match(request);
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok) cache.put(request, response.clone());
      return response;
    })()
  );
});
