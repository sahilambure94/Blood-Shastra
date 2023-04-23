'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d16b718c883ccee4a2e265bb44a9411d",
"assets/assets/fonts/courgette.ttf": "59c3685a73f0f1b7c302dd2d6dabd628",
"assets/assets/fonts/sf.ttf": "d09549c1ab4a5947a007561521e45da3",
"assets/assets/icons/001-blood%2520drop.svg": "9f713b00cc976ed7121983b55e808b3e",
"assets/assets/icons/002-screen.svg": "fa87886858ad88101ff0ae45c4487530",
"assets/assets/icons/003-medical%2520kit.svg": "9c3ee11b9481bafd9c73d45834218643",
"assets/assets/icons/004-clipboard.svg": "de6bd831175fc9eaf839a503fc82144a",
"assets/assets/icons/005-blood%2520bag.svg": "ee450b41152a12152acdf39955855f77",
"assets/assets/icons/006-ambulance.svg": "c7a13f739e81e87511bb988574a4b331",
"assets/assets/icons/007-microscope.svg": "fb045a5415ed4a79b65c9e7ff6459936",
"assets/assets/icons/008-blood%2520drop.svg": "c25cfe9d7be8fa5ea5272a2706516e1f",
"assets/assets/icons/009-map%2520location.svg": "bfbdf5fd4c7521fd842171879844c21d",
"assets/assets/icons/010-test%2520tube.svg": "8f8d979614dd9c930e7cd99b2150719c",
"assets/assets/icons/011-dna.svg": "a440e4772ef7f1346a82669126d42165",
"assets/assets/icons/012-mobile%2520phone.svg": "dacbdbb1beb1f8f03a4e5cb11fbc6de6",
"assets/assets/icons/013-blood%2520drop.svg": "b5b8dc8498169431200fa699120f3bea",
"assets/assets/icons/014-doctor.svg": "e75fa59dbf6725fc7306c3109f845b5d",
"assets/assets/icons/015-blood%2520drop.svg": "b2fb90be95944de1c7907bf7d631dc62",
"assets/assets/icons/016-syringe.svg": "0fd6f6cda479cb9db9b6af117e2a9b6a",
"assets/assets/icons/017-blood%2520drop.svg": "3d79041efcc4f1583ec01c5a70558e6c",
"assets/assets/icons/018-blood%2520tube.svg": "94bc56514f57ce1f64042935bd494ac7",
"assets/assets/icons/019-hospital.svg": "5ceae7de6ca9190b2532890097bcb6a5",
"assets/assets/icons/020-blood%2520drop.svg": "3f90142bb51d1712feaf6953c8f5ca9e",
"assets/assets/icons/021-red%2520blood%2520cells.svg": "5a7b3349edc437f438a19786b3039aae",
"assets/assets/icons/022-blood%2520donation.svg": "46cfc5f1a1ecff977ef6e2c26f4450c9",
"assets/assets/icons/023-blood%2520drop.svg": "8a3dd8231738ad41b92100816aca5bfb",
"assets/assets/icons/024-nurse.svg": "f5c722dfc61e24028e4b1568fe5e70cd",
"assets/assets/icons/025-donor.svg": "d3ce68d3a1c071b3ec0828a2da8a3853",
"assets/assets/icons/026-map%2520pointer.svg": "bfb5074e17d387a021aeb22018c6c3f1",
"assets/assets/icons/027-blood%2520drop.svg": "75b3ce250c79f7eb2753ea5d706317c2",
"assets/assets/icons/028-blood%2520donor%2520card.svg": "dda39b7c175829e66893214304c6ed9b",
"assets/assets/icons/029-rubber%2520gloves.svg": "339d7a229c2843ee2e2bdd832270357f",
"assets/assets/icons/030-syringe%2520needle.svg": "4004fc797d0dd6d04dbd68db9e5960ab",
"assets/assets/icons/031-blood%2520bank.svg": "9f45da3a46d44563be0819b3f2529f4e",
"assets/assets/icons/032-blood%2520bag.svg": "97e556ab15be7e8bafc54cf43152a940",
"assets/assets/icons/033-blood%2520drop.svg": "6eddcd788b6e50526bb40b6f97fe49df",
"assets/assets/icons/034-virus.svg": "eabd69cadac79972799ed01266355880",
"assets/assets/icons/035-band%2520aid.svg": "e398d6fc3a8e3d736640b1370eeadee7",
"assets/assets/icons/036-dentist%2520chair.svg": "a622596576a0d3bb269f032f071b1fc7",
"assets/assets/icons/037-blood%2520drop.svg": "1d32f04c6c3136b46da1d690834bf229",
"assets/assets/icons/038-stethoscope.svg": "f08683cd89fe0006f1157cca176f3a26",
"assets/assets/icons/039-ribbon.svg": "772e0cff72fdafb4e63323be9355d7fc",
"assets/assets/icons/040-blood%2520bag.svg": "535636ef59b8131579be6637db0dcb08",
"assets/assets/icons/041-blood%2520drop.svg": "c3e8eb7cc47552dcffcae113c3236e12",
"assets/assets/icons/042-dropper.svg": "11db81f525dfe73d8c29396629052985",
"assets/assets/icons/043-shirt.svg": "91c83fdf8b6da3d6de15399fd2b08f8d",
"assets/assets/icons/044-blood%2520drop.svg": "d7fcd77037ed6c1baef62e694bb3f0b1",
"assets/assets/icons/045-blood%2520drop%2520empty.svg": "e0ed24940281a2a368f81c60a035532d",
"assets/assets/icons/logo.svg": "91d37027d2a92c1ca98434e63adb93db",
"assets/FontManifest.json": "ad4180d19d2aa976280538ee465b009a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "9ac0d635b379587d6c903165ffdfe853",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fontisto_flutter/lib/fonts/fontisto.ttf": "7802ca9f30d027b59c5a26e1f637f6e4",
"assets/packages/fontisto_flutter/lib/fonts/linearicon.ttf": "d6fade6f18d5d907e23a6201a49ef050",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "30906b66cfbdf4ef543f5df8326971ff",
"/": "30906b66cfbdf4ef543f5df8326971ff",
"main.dart.js": "920133ef4cf439dd5f44a0b6abc36673",
"manifest.json": "fcd7784318ebbb9f540d43c2384f85b8",
"version.json": "21526709bbcb6d2b9ed416448e5c7286"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
