// Set this to true for production
var doCache = true;

// Name our cache
var CACHE_NAME = 'my-pwa-cache-v1';

// Delete old caches that are not our current one!
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
        caches.keys()
              .then(keyList =>
                    Promise.all(keyList.map(key => {
                      if (!cacheWhitelist.includes(key)) {
                        // tslint:disable-next-line:no-console
                        console.log('Deleting cache: ' + key)
                        return caches.delete(key);
                      }
                    }))
              )
  );
});

self.addEventListener('install', event => { event.waitUntil(
	caches.open(cacheName).then(cache => cache.addAll([
		'/bootstrap.js','/material.min.css','/material.min.js','/static/js/bundle.js','/index.html','/']))
	); 
});self.addEventListener('install', event => { event.waitUntil(
	caches.open(cacheName).then(cache => cache.addAll([
		'/bootstrap.js','/material.min.css','/material.min.js','/static/js/bundle.js','/index.html','/']))
	); 
});

// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', function(event) {
  if (doCache) {
    event.waitUntil(
          caches.open(CACHE_NAME)
                .then(function(cache) {
                  // Get the assets manifest so we can see what our js file is named
                  // This is because webpack hashes it
                  fetch("asset-manifest.json")
                        .then(response => {
                          response.json()
                        })
                        .then(assets => {
                          // Open a cache and cache our files
                          // We want to cache the page and the main.js generated by webpack
                          // We could also cache any static assets like CSS or images
                          const urlsToCache = [
                            "/",
                            assets["main.js"]
                          ]
                          cache.addAll(urlsToCache)
                          // tslint:disable-next-line:no-console
                          console.log('cached');
                        })
                })
    );
  }
});

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
self.addEventListener('fetch', function(event) {
  if (doCache) {
    event.respondWith(
          caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
          })
    );
  }
});