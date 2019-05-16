var CACHE_NAME = 'my-site-cache-v2';
var urlsToCache = [
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/astra.php',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/terra.html',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/mare.php',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/nova.html',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/ursa.html',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/highlight.js',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/tlumode.js',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/style.css',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/modal.js',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/styles/modal.css',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/pildid/main2.png',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/pildid/tluicon.png',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/pildid/highlight/marepink.png',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/pildid/highlight/nova.png',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/pildid/highlight/terra.png',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/pildid/highlight/astra.png',
  'http://greeny.cs.tlu.ee/~rolavag/eesrakendused/iseseisev-projekt/pildid/highlight/ursa.png',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
		console.log(urlsToCache);
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
