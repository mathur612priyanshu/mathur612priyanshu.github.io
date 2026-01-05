'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "92c95b5f09621161b20eef71b7fb4222",
"assets/AssetManifest.bin.json": "2802b10710a9902e7541e9d2d34d4f59",
"assets/AssetManifest.json": "de08715bcfa086f8150448c95fc02712",
"assets/assets/images/calci.png": "689d5f60f3b072c940db21c2d0d8a402",
"assets/assets/images/crm1.png": "bb40a5425bca8cb750bb8ae5f26f133d",
"assets/assets/images/crm2.png": "d64bf929e7b2eb6552f8e68261109cd1",
"assets/assets/images/crm3.png": "00cf12c365288fa5a23440885a321965",
"assets/assets/images/crm4.png": "2ffa656809b6cc4a480fdaf9978da6f2",
"assets/assets/images/crm5.png": "ba6fb6f23a5c7216c885a0231d23daa9",
"assets/assets/images/crm6.png": "a149af4cc126db6de0e5ec848115a0c0",
"assets/assets/images/crm7.png": "a95c0f34e77919183f320cdc74015800",
"assets/assets/images/devIcon.png": "495bb4d2e7c65cf83273ff02a8f86ab5",
"assets/assets/images/event1.png": "aeec5cde723395f625f4a96066028f02",
"assets/assets/images/event2.png": "38fe4cae896f8845375581522e0cc8fe",
"assets/assets/images/event3.png": "8c4e99c7601e52253a47fb2c5a9d0893",
"assets/assets/images/event4.png": "13ba75b8db2c4be4e7f6c39a0a83c4cf",
"assets/assets/images/event5.png": "f78528bbb81dd1ac28cfed30c8f86fdd",
"assets/assets/images/event6.png": "d78d3a8fe4917896c6a43c5b99988722",
"assets/assets/images/meme1.png": "7a73b7113f518e3f156fb2dd6c605d56",
"assets/assets/images/meme2.png": "434ac8986fd6293178836e1d2e899840",
"assets/assets/images/news1.png": "0c43e4be6c30ea02f1457ede03f7e19e",
"assets/assets/images/news2.png": "08d333835c427b8414e1ac7acea24f9c",
"assets/assets/images/news3.png": "42d04b662fc68d9d59587c77d4fc2648",
"assets/assets/images/nexo1.png": "9854fcac145ce656aa4bd56025af7b13",
"assets/assets/images/nexo10.png": "5d7c689e43717a902ffa70068b2979a9",
"assets/assets/images/nexo11.png": "c318c074873b9b4ac14ea6494b10e5b1",
"assets/assets/images/nexo12.png": "b0827ddf202b88143068b72e61e966f9",
"assets/assets/images/nexo13.png": "5debdf5b981aa137b19878be1a177d36",
"assets/assets/images/nexo14.png": "12fb1ff131dbb7e42417fd6a24565865",
"assets/assets/images/nexo15.png": "995f1cd490d80f0a432184a12b634a36",
"assets/assets/images/nexo16.png": "c31764ec4ee4dc24661236f44a78478b",
"assets/assets/images/nexo17.png": "7e1a7c7ae3ddb7f7bf0da9145d928e04",
"assets/assets/images/nexo2.png": "7cfc60a8da56dd96c034c04740b0b858",
"assets/assets/images/nexo3.png": "bef27cbd729102e7fadd479eda910bb3",
"assets/assets/images/nexo4.png": "9d65704de4f6df8f9bb9fb20e4f66314",
"assets/assets/images/nexo5.png": "b708e014b6293a4402b3305e2ed54828",
"assets/assets/images/nexo6.png": "e1bb8ca6784d65ad3b3918960932143a",
"assets/assets/images/nexo7.png": "f89858975d500dc0fa924b97cfeaa496",
"assets/assets/images/nexo8.png": "aaa604ce3d267f58712e72250a61f343",
"assets/assets/images/nexo9.png": "df4b25023a07484d4f8714b51f7c58e6",
"assets/assets/images/pm%2520logo.jpg": "ce1c83f9d88c776e962c8f36834e71b6",
"assets/assets/images/todo1.png": "7432e9a33401501be756672f9ad3c624",
"assets/assets/images/todo2.png": "69bda1ffbc2fa405395e7d0430dcedaa",
"assets/assets/images/todo3.png": "9b3c9b27d584631cd210d6c606204782",
"assets/assets/images/todo4.png": "3983c743ba0eaffeca3f0e2185985bd0",
"assets/assets/images/todo5.png": "b028b791ecb131e08cb5a12a5b49ff2d",
"assets/assets/images/walpy1.png": "f5e4006f5869aea9648f119185aeb31a",
"assets/assets/images/walpy2.png": "b3e137e11485b373f0bc835aaf9cf5e3",
"assets/assets/images/walpy3.png": "1d1ab34b329c6888a17f38631179902b",
"assets/assets/images/walpy4.png": "87ef5ea5f5b4f9865db7dd80ec306054",
"assets/assets/images/walpy5.png": "07f1c739b636b8833600aea576511586",
"assets/assets/images/whatsapp1.png": "f4042a64083c9d9536950badcaceb7fb",
"assets/assets/images/whatsapp2.png": "9d8d7193190a4a49810c221ec676d548",
"assets/assets/images/whatsapp3.png": "2b1429adaadca47b124f393bf15e4af3",
"assets/assets/images/whatsapp4.png": "933772d54e3bcae76d7c706a5bd85535",
"assets/assets/images/whatsapp5.png": "3f6da15e1059160a27c5d9428787282d",
"assets/assets/rive/birb.riv": "9bb8fa5eb406053bb58d9045f2603747",
"assets/assets/rive/splash_boy.riv": "0665735dc99f99a48bda581bd4177aa3",
"assets/assets/rive/upArrow.riv": "db170212c607d7b738283b899de486d9",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "3f55073e40e3d4ce5ad6fddd1fd4eed9",
"assets/NOTICES": "519a1053586f349113ea7f3ef8ae8772",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "6c42594c531261a67410f4d9aca3b776",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "c7fbcd68b4cafeed0b7c03b729f6324f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eec2abf87c563d0c59cbd61380ce54b1",
"/": "eec2abf87c563d0c59cbd61380ce54b1",
"main.dart.js": "d4f7830defdaf798ca4df51df1d44d28",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
