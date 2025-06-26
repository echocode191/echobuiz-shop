const CACHE_NAME = 'settlers-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/menu.html',
  '/about.html',
  '/gallery.html',
  '/contact.html',
  '/accommodation.html',
  '/assets/logo.png',
  '/assets/chapatis.jpg',
  '/assets/tea.jpg',
  '/assets/coffee.jpg',
  // add all key assets here
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
