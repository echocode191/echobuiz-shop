const CACHE_NAME = 'settlers-v1';
const urlsToCache = [
  'index.html',
  'menu.html',
  'about.html',
  'gallery.html',
  'contact.html',
  'assets/logo.png',
  'assets/chapatis.jpg',
  'assets/tea.jpg',
  'assets/coffee.jpg',
  'assets/ugali-fish.jpg',
  'assets/room.jpg',
  // add more assets as needed
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
