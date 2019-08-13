# Bug with Leaflet.GestureHandling

## We want to disable `Leaflet.GestureHandling` when the map is in full screen.

This works fine when we don't use javascript modules, like in this [branch](https://github.com/francoisromain/bug-leaflet-gesture-handling/tree/no-modules).

When we use javascript modules, it does not work anymore.

---

To reproduce the bug:

- clone the master branch of this repo
- install dependencies: `npm i`
- build the js bundle: `npm run build`
- serve and open the page. For example with [http-server](https://www.npmjs.com/package/http-server): `http-server .` and open `http://127.0.0.1:8080`)
- in the browser, click the fullscreen button and try to zoom-in or zoom-out.

The bug: in fullscreen `Leaflet.GestureHandling` is still enabled.

What is expected: in fullscreen `Leaflet.GestureHandling` should be disabled.

---

To see the bug, check this page: [francoisromain.github.io/bug-leaflet-gesture-handling
](https://francoisromain.github.io/bug-leaflet-gesture-handling).

---

[Issue on Github](https://github.com/elmarquis/Leaflet.GestureHandling/issues/31)
