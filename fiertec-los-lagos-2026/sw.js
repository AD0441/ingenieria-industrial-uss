const CACHE = "fiertec-problema-idea-v19";
const FILES = [
  "./",
  "./index.html",
  "./styles.css?v=19",
  "./app.js?v=19",
  "./manifest.webmanifest",
  "./assets/fiertec-logo.png",
  "./assets/uss-logo.png",
  "./assets/hero-mission-v2.png",
  "./assets/juicero-concept-v1.jpg",
  "./assets/juicero-comparison-v1.jpg",
  "./assets/observe-school-v2.png",
  "./assets/design-thinking-v2.png",
  "./assets/workshop-context-v1.jpg",
  "./assets/workshop-people-v1.png",
  "./assets/workshop-return-v1.png",
  "./assets/icons/dt-empathize.png",
  "./assets/icons/dt-define.png",
  "./assets/icons/dt-ideate.png",
  "./assets/icons/dt-prototype.png",
  "./assets/icons/dt-test.png",
  "./assets/icons/idea-weak.png",
  "./assets/icons/idea-incomplete.png",
  "./assets/icons/idea-promising.png",
  "./assets/icons/idea-audience.png",
  "./assets/icons/part-wheel.svg",
  "./assets/icons/part-cable.svg",
  "./assets/icons/part-battery.svg",
  "./assets/icons/risk-see.svg",
  "./assets/icons/risk-understand.svg",
  "./assets/icons/risk-return.svg",
  "./assets/icons/measure-time.svg",
  "./assets/icons/measure-return.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (event.request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(event.request);
        if (response.ok) {
          const cache = await caches.open(CACHE);
          await cache.put("./index.html", response.clone());
        }
        return response;
      } catch {
        return (await caches.match("./index.html")) || Response.error();
      }
    })());
    return;
  }
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
