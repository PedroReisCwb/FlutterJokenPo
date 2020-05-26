'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9259e8d102b43de0043b2635ed055282",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/imagens/padrao.png": "589c46b59101f6116106c88f390fb683",
"assets/imagens/papel.png": "ada35938120c7c8b2a3164cc58fe1756",
"assets/imagens/pedra.png": "db796ff45155ea8c0ced267298d1bb48",
"assets/imagens/tesoura.png": "d8f126622a2a6bb4ad64fd5ed5b35a8a",
"assets/LICENSE": "829acbc245bd56f693d004352b598b74",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "25d6d3fa9e14b8bdc012a195cbc1014f",
"/": "25d6d3fa9e14b8bdc012a195cbc1014f",
"main.dart.js": "84529065730a8bc47fb81e62bcb103b3",
"manifest.json": "b5f371de98bf67e0ffa0a452ae9d67c4"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
