const AIWAN_GAME_CACHE = "aiwan-game-cache-" + "$VERSION$";

const cache_url = "$CACHE_URL$";

//  install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(AIWAN_GAME_CACHE)
      .then((cache) => cache.addAll(cache_url))
      .then(() => self.skipWaiting())
  );
});

// activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys.map((key) => {
            if (key !== AIWAN_GAME_CACHE) {
              return caches.delete(key);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// fetch
self.addEventListener("fetch", (event) => {
  console.log(event.request.url);
  event.respondWith(
    caches
      .open(AIWAN_GAME_CACHE)
      .then((cache) => cache.match(event.request))
      .then((response) => response || fetch(event.request))
  );
});
