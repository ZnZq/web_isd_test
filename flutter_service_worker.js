'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "7a82abb3034558e137a98108ab786d14",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "319304014f13d809a16a4793577abfcb",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "bd8de99d2586a0a68645d49059796b03",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8f608017c6996ed49418d291f1efeecf",
".git/logs/refs/heads/gh-pages": "8f608017c6996ed49418d291f1efeecf",
".git/logs/refs/remotes/origin/gh-pages": "6b8759a80fbb270ef8f399b9dfcd9f14",
".git/objects/0c/5bb6ed343b912e7ec87241cc36af9ba536f4e8": "657a248db9d06d97cdc14ff1ccb429bf",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/58144122f8fb7ead743df45e9c15431eee72b3": "6bc499fb7104d54d1f8b94af7611f781",
".git/objects/13/466abbd8751924b4bd6db8b56618e7cdf13a35": "594cead211217c6c1d828d5c140f00a5",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1c/3f7b43bb3d28c46fece62f99a1d25682aca712": "1edf4a89edc48c4a713ec623ea21b8af",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/5e36708b7cc2f93ed72083c4b7c8dd7fe2d7bb": "c3191cada1ecacd0a6b02c54db4df7af",
".git/objects/24/6e74c281c173a5d62f011f2e4415bf7d180878": "477812dbd93329fc614bbf4e095ec1f6",
".git/objects/2c/4c396de2c705ebddd7be861bce8eebafa2fd9e": "17085b7023bd01a7938bcb3b10dae822",
".git/objects/33/87aaec6ffc03d8bbcceb14d6b9103123d95496": "acb7461210f38b5642b15f3cc824ecc1",
".git/objects/38/53b6bb16d28140cd1fc11e7a026175e92abead": "9bab9d489c4ee0c188e40e419e6259bb",
".git/objects/3b/c2fafd3d51860a817e82d4479280f71cc1365d": "7c3b1a51e4494a1516044a7eff029ecb",
".git/objects/3c/c75f9da308c6f43f4dd1604693d4a25b342495": "1bfd412bdea183115fcde7590abda8a8",
".git/objects/47/bd381920a61aeb7bcee401732958b1316ef77c": "9ac4198a2f8e2a6b3e3705c7464c9ca1",
".git/objects/5a/68c49de50312175db2fe351e4f072114eed020": "0682b98df9460804e5601160fbc52673",
".git/objects/5d/511cce0dd5e43fb3906059fb538b3ffee8636d": "c5dde5d0031ad5c6c378febfab77fdb6",
".git/objects/64/693e8fcbcda500630a5a5b1cd82451eddc422e": "dfe95c6d8ca76d1d9afc529cab1a7686",
".git/objects/64/699a73b219b87b0cb7502df6bfee7cc7bd8a2e": "22296808aaf7236e4289d4bd0ce2284e",
".git/objects/71/22a19d5fdf48f5443b999144091f832f1ba0d0": "a05193e5d5e0376976b9febe0a8cc29d",
".git/objects/73/1ca570c5d54a3d123d4d38322dbaa55b7def12": "790139bcdc1e10180275937026063554",
".git/objects/74/44b52fff328591c6d2d4ac1ef7d3dc89e851dd": "f676d97d99f6b5c1454c8f16c37c1715",
".git/objects/79/1478504d5a3834c1a4bf5d7c8057409337d3a2": "319ea1df308d515c77da875362b9582b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/32328ac7a6b2c6dd3bdddefd7c29cd0d05a2be": "0076c9d5421eb7740dfba5306f131973",
".git/objects/8c/9b97e9c1eb691c2d60750735806e04d274367b": "027280ada830172e326f5a12704a7768",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9a/d31602f8d453f4178bbdebd6508f88bf1c1068": "23c080464f0e645e9d923f986b5788ad",
".git/objects/a0/5b2e8f0d04edafcfb33597131c27d908ff3bbc": "598fe275a8438215d56ac808f347a3ac",
".git/objects/a1/f168c06faf0eca2eaba0b9f59b8cb14980fa01": "10ac59d234d85b746535d2323cf95de5",
".git/objects/af/be58694d45419b5bfc13912a394ef9aefbbd0c": "f2c1b832bdd3f989be3f8ab6f1533755",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/1303b9456eab9b5fdc9a8b151b0bea672026a8": "2ee91ae470f839be97665d8c31f087e2",
".git/objects/ca/02581bb245cd9fff870405cef643c0c99ca3b7": "f91eba2e1f56d50b00db329c0a5f451f",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/ef/d61732706f71be997545a49d09bd4bceaf67e2": "69fab7df4428df2267beef431f80f85c",
".git/objects/f3/406d0fb44205823bcdf8f51477e09a47ada814": "62903aeaf7b84c945f3adf318492e668",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fc/dc3ebb8f8484631e62fba91480c574617e5e74": "d781e7e54b216c0acb28e0cbbb362b4c",
".git/refs/heads/gh-pages": "d99f422e47f0ba119b53b08e3412a80b",
".git/refs/remotes/origin/gh-pages": "d99f422e47f0ba119b53b08e3412a80b",
".vs/slnx.sqlite": "61ad91a8803293a9be2b331d8ac041d9",
"assets/AssetManifest.json": "4146042b94940691d38e87b179ce8a0d",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/boss/berkman.l.n.jpg": "079182fbd45bb6b2f24fd1d518fe1a38",
"assets/images/boss/bonkarchyck.a.p.jpg": "d4dde1cf4e73514a98d2815e7c13ce55",
"assets/images/boss/salo.a.ya.jpg": "17af128674fd3019e56c19e854fdfe3c",
"assets/images/boss/tolybko.v.b.jpg": "88e85f0167ba8ef79e996557935ed3ad",
"assets/images/boss/yavtyshenko.a.m.jpg": "3084d560d1a1260644cead183fd7f547",
"assets/images/teacher/aleksina.l.t.jpg": "c41dff371004a76a096a745bd9f524d3",
"assets/images/teacher/chorna.v.m.jpg": "6e74f9a8cdba9e88af3b5a22dfd65125",
"assets/images/teacher/kosenko.v.p.jpg": "261f2311d1edf550333765bd35a4f22a",
"assets/images/teacher/mikolaichuck.v.r.jpg": "752319099e2d567d33e1db2d56cf7a66",
"assets/images/teacher/palonevich.o.v.jpg": "d2466aa1f3f868fdf8dc7e35730012d0",
"assets/images/teacher/sribna.i.m.jpg": "951b929c2e56eed5bc74767c1887fc7e",
"assets/images/teacher/storchack.k.p.jpg": "f1afc43648b31053f26af8594ab20e1c",
"assets/images/teacher/tkalenko.o.m.jpg": "4cb3007ac775b8d8fa745a86893f4d59",
"assets/images/teacher/tyshich.a.m.jpg": "8e950ffb337062810d10c73a52b394b4",
"assets/images/unknown.jpg": "2619f2852b2143b8e16cb02402cd4506",
"assets/LICENSE": "69c1b96cc43931a192cb787ac012ebef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "193856738ad2f3dbc8b9b10c8ce4f4d8",
"/": "193856738ad2f3dbc8b9b10c8ce4f4d8",
"main.dart.js": "4e99ba130bb975bd7267b2ce0455f941",
"manifest.json": "e8ea1dca5aa0cc1b1be9b6ab3c1dda48"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
