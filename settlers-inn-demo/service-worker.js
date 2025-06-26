const CACHE_NAME = 'settlers-v1';
const urlsToCache = [
  '/',
  'index.html',
  'menu.html',
  'about.html',
  'contact.html',
  'gallery.html',
  'accommodation.html',
  'assets/logo.png',
  'assets/tea.jpg',
  'assets/coffee.jpg',
  'assets/chapatis.jpg',
  'assets/ugali-fish.jpg',
  'assets/settlers-bg.mp4',
  'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
