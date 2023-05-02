const AIWAN_GAME_CACHE = "aiwan-game-cache-" + "$VERSION$";

const cache_url = "$CACHE_URL$";

//  install
self.addEventListener("install", async () => {
  const cache = await caches.open(AIWAN_GAME_CACHE);
  await cache.addAll(cache_url);
  await self.skipWaiting();
});

// activate
self.addEventListener("activate", async () => {
  const keys = await caches.keys();
  keys.forEach(async (key) => {
    if (key !== AIWAN_GAME_CACHE) {
      await caches.delete(key);
    }
  });
  await self.clients.claim();
});

// fetch
self.addEventListener("fetch", async (event) => {
  console.log(event.request.url);
  event.respondWith(cacheFirst(event.request));
});

async function networkFirst(request) {
  return await fetch(request).catch(async () => {
    const cache = await caches.open(AIWAN_GAME_CACHE);
    return cache.match(request);
  });
}

async function cacheFirst(request) {
  const cache = await caches.open(AIWAN_GAME_CACHE);
  const cached = await cache.match(request);
  cached &&
    console.log(
      "🚀 ~ file: _serviceWorker.js:39 ~ cacheFirst ~ cached:",
      cached
    );
  return cached || (await fetch(request));
}
