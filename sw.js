const CACHE_NAME = 'pv26-cache-v1';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// Installation & Cachen
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Offline Anfragen abfangen
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache gefunden -> Offline-Version ausliefern
        if (response) {
          return response;
        }
        // Nichts im Cache -> Aus dem Netz laden
        return fetch(event.request);
      })
  );
});
