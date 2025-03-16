if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, t) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let c = {};
    const r = (e) => n(e, i),
      o = { module: { uri: i }, exports: c, require: r };
    s[i] = Promise.all(a.map((e) => o[e] || r(e))).then((e) => (t(...e), c));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "a6b16edfe50030cbf26b6d1dffb7f08b",
        },
        {
          url: "/_next/build-manifest.json",
          revision: "883470a1d570232b2486a20cade08c07",
        },
        {
          url: "/_next/react-loadable-manifest.json",
          revision: "8145463c3908726e610af8cbf9073bfd",
        },
        {
          url: "/_next/server/app/_not-found/page_client-reference-manifest.js",
          revision: "edf82d81a8eba500641919500acc94c4",
        },
        {
          url: "/_next/server/app/api/send-notification/route_client-reference-manifest.js",
          revision: "6583b70621484243e21c9f361898164b",
        },
        {
          url: "/_next/server/app/page_client-reference-manifest.js",
          revision: "b5d7a190f6b7d1b3fd3dc793a3b17f51",
        },
        {
          url: "/_next/server/middleware-build-manifest.js",
          revision: "c2900219c311a192d8d3e4094fba35a5",
        },
        {
          url: "/_next/server/middleware-react-loadable-manifest.js",
          revision: "666dad344868d912ffd7992f76f881e3",
        },
        {
          url: "/_next/server/next-font-manifest.js",
          revision: "9fce7989bff5d35b01e177447faca50d",
        },
        {
          url: "/_next/server/next-font-manifest.json",
          revision: "d51420cd4aa5d37d6719849cf36d0d6f",
        },
        {
          url: "/_next/static/cVOM7ABY8INNh-W4u3EkN/_buildManifest.js",
          revision: "8127b630df9eee5663b9034295cc6e8a",
        },
        {
          url: "/_next/static/cVOM7ABY8INNh-W4u3EkN/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/341.2903e54d3da731c1.js",
          revision: "2903e54d3da731c1",
        },
        {
          url: "/_next/static/chunks/472.a3826d29d6854395.js",
          revision: "a3826d29d6854395",
        },
        {
          url: "/_next/static/chunks/4bd1b696-704dc55da575ac8d.js",
          revision: "cVOM7ABY8INNh-W4u3EkN",
        },
        {
          url: "/_next/static/chunks/684-b1b6be2f437f607d.js",
          revision: "cVOM7ABY8INNh-W4u3EkN",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-5bfe245ad955586d.js",
          revision: "cVOM7ABY8INNh-W4u3EkN",
        },
        {
          url: "/_next/static/chunks/app/api/send-notification/route-dd6a1f4f3296a591.js",
          revision: "cVOM7ABY8INNh-W4u3EkN",
        },
        {
          url: "/_next/static/chunks/app/layout-1a8373ec8aa1656f.js",
          revision: "cVOM7ABY8INNh-W4u3EkN",
        },
        {
          url: "/_next/static/chunks/app/page-f3f2a71aa8b38e93.js",
          revision: "cVOM7ABY8INNh-W4u3EkN",
        },
        {
          url: "/_next/static/chunks/framework-859199dea06580b0.js",
          revision: "cVOM7ABY8INNh-W4u3EkN",
        },
        {
          url: "/_next/static/chunks/main-6c44255adc3890fb.js",
          revision: "cVOM7ABY8INNh-W4u3EkN",
        },
        {
          url: "/_next/static/chunks/main-app-93ce151beae4b8e5.js",
          revision: "cVOM7ABY8INNh-W4u3EkN",
        },
        {
          url: "/_next/static/chunks/pages/_app-a66f9296699c5863.js",
          revision: "cVOM7ABY8INNh-W4u3EkN",
        },
        {
          url: "/_next/static/chunks/pages/_error-7688f4c9a69e67c8.js",
          revision: "cVOM7ABY8INNh-W4u3EkN",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-6a873458959d95ad.js",
          revision: "cVOM7ABY8INNh-W4u3EkN",
        },
        {
          url: "/_next/static/css/ce36268ea9980141.css",
          revision: "ce36268ea9980141",
        },
        {
          url: "/_next/static/media/569ce4b8f30dc480-s.p.woff2",
          revision: "ef6cefb32024deac234e82f932a95cbd",
        },
        {
          url: "/_next/static/media/747892c23ea88013-s.woff2",
          revision: "a0761690ccf4441ace5cec893b82d4ab",
        },
        {
          url: "/_next/static/media/93f479601ee12b01-s.p.woff2",
          revision: "da83d5f06d825c5ae65b7cca706cb312",
        },
        {
          url: "/_next/static/media/ba015fad6dcf6784-s.woff2",
          revision: "8ea4f719af3312a055caf09f34c89a77",
        },
        { url: "/img.jpeg", revision: "16249e5f8017fe33b6d33cc584f01397" },
        { url: "/manifest.json", revision: "9bb0ec30cc1b0125eb016cdf3775e72d" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
