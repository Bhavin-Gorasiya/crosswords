'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "15aad80e73a6bec92a8f56b9b191e584",
"assets/AssetManifest.json": "5290e324b96ad2b0df3dccc000b94bcf",
"assets/assets/emoji/cats.png": "7ed33432a55be5106a9cf3156953db3b",
"assets/assets/emoji/eyes.png": "022fb7ca0c517038d0e89716078b1a2d",
"assets/assets/emoji/smile.png": "bef2c040795f8cdebdb1653994f1bd1a",
"assets/assets/images/91656.jpg": "94d0860344a5e46f4ec21d5da287c5b7",
"assets/assets/images/army.png": "6ad1404a65540dd07ee99e176d089e93",
"assets/assets/images/caution.png": "ff77be46e14c7688cb001e592e7bb0c3",
"assets/assets/images/clap.png": "e4fc896f257bde55731ccab80aa2a872",
"assets/assets/images/cup.png": "a60272f264a808f1328d0e86580bb466",
"assets/assets/images/darkAngel.png": "4244322b5e914fd8c1892bae2e74d07b",
"assets/assets/images/devill.png": "2aff41a0fd24d121b3acf5362d8a6ec6",
"assets/assets/images/fillHeart.png": "8dd45b1fb748cb0e7052fa3dfef12860",
"assets/assets/images/game.png": "5558b850ee51884ec029aed6abf3d9da",
"assets/assets/images/gameState.png": "5ec3217613bc1280856d324084bb836d",
"assets/assets/images/greetings.png": "e6fcf97f854544bfa199bf486f7ce3d1",
"assets/assets/images/heart.png": "e3ba9b54e9d713e6e7c83cecd096be39",
"assets/assets/images/help&support.png": "d699e3d180095a6b3a00aadb39041c4a",
"assets/assets/images/img.png": "878cb810c5f13163629178e68d1b94aa",
"assets/assets/images/img_1.png": "5707a2d1f72b2a3287a5a418d8bcbc52",
"assets/assets/images/img_2.png": "c68cdc86bc2ab22c8b1446c8bafb66e1",
"assets/assets/images/img_3.png": "17d14953221ac88a14c460e567158b0c",
"assets/assets/images/img_4.png": "ca8a8bcbfd323619a5a06c49cd444e48",
"assets/assets/images/img_5.png": "8241f0d6098473204eeed5411c58e833",
"assets/assets/images/note.png": "09082b2ccc97f1b586b03765ec498ab5",
"assets/assets/images/people.png": "063b7b455bc042c5091d65ff1426ba56",
"assets/assets/images/profile.png": "f0eb53bdc3d2d2a843546fc08bc677cf",
"assets/assets/images/remove.png": "40210aa35b3f999f067ba5328a85a84e",
"assets/assets/images/right.png": "9fc178859db2b8ebea13476950287ae8",
"assets/assets/images/settings.png": "b5864c7e839155481a2386fb33b5fda3",
"assets/assets/images/wrong.png": "b43d27690d71e3ab0afa4114940a17f5",
"assets/assets/music/currect.mp3": "5ab0d8d4b7e1b840976f0855fd375124",
"assets/assets/music/lost_game.mp3": "909e0071eb8934d08edb146a3fa564f3",
"assets/assets/music/lost_game.wav": "372633719ec77ca40784b15aa8f5a5d3",
"assets/assets/music/win.mp3": "e59c9cbf6892661802f661e053d616ce",
"assets/assets/music/win.wav": "df23a70f3bbcb351836a2bbba8fdb29b",
"assets/assets/music/win2.mp3": "e10fb2df41fc12e50443c5e81c409d41",
"assets/assets/music/win2.wav": "339710733eb95e576d6f478bc88e6045",
"assets/assets/music/win3.mp3": "de7c0cf36488e8bae779a91a49d5d0cd",
"assets/assets/music/win3.wav": "89d41f79e3bed828a5bd7d26a0b03589",
"assets/assets/music/wrong.mp3": "ee1774664a7feeec0aad059d4753dc1a",
"assets/assets/music/wrong.wav": "3300f86b936ca66dc72af5fb1a8401f0",
"assets/assets/music/wrong2.mp3": "9a6ebd59266412d4c124ef83f578c7cd",
"assets/assets/music/wrong2.wav": "6c0964454ca972a41b68ea0588ed1520",
"assets/FontManifest.json": "88daae14a98e99c588cae86c0c0828c5",
"assets/fonts/MaterialIcons-Regular.otf": "1aedeaca8da0dd3be08e14199f764587",
"assets/fonts/Podkova-VariableFont_wght.ttf": "da271d5cdd8b9398c3589b28cc42bec5",
"assets/NOTICES": "821da4e699ee5d58030f764c814acfab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/apple-touch-icon.png": "8dbb527e2714cba877f3c1d7995ef336",
"icons/favicon.ico": "36227e1820915fce66bf3ec5ae06d457",
"icons/icon-192-maskable.png": "1600eea972e23be4999a4c29b237ac99",
"icons/Icon-192.png": "338f86db33b9b980feb6f015708a4f37",
"icons/icon-512-maskable.png": "57f3b3dde519f618c0b29e65d3604dfc",
"icons/Icon-512.png": "996740a5c49ee7729ff4603c31ed6405",
"index.html": "347cd62bf78c8f4c7eee65baa185d4d6",
"/": "347cd62bf78c8f4c7eee65baa185d4d6",
"main.dart.js": "d4d499a7eb7d0af22239e0f0a25cf9c0",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7",
"X.png": "2ed024c7320aef5da08516bf83d00285"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
