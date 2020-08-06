let cacheData = "expenseTrackerV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/",
        "index.html",
        "/manifest.json",
        "/favicon.ico",
        "/logo192.png",
        "https://image.flaticon.com/icons/svg/2033/2033921.svg",
        "https://image.flaticon.com/icons/svg/1164/1164954.svg",
        "https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap",
      ]);
    })
  );
});

this.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open(cacheData).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return (
          response ||
          fetch(event.request).then(function (response) {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});
