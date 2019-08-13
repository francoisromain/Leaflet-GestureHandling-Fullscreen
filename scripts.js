// define map and tile layer
const map = L.map("mapid", {
  doubleClickZoom: false,
  minZoom: 4,
  gestureHandling: true,
  fullscreenControl: {
    pseudoFullscreen: true
  }
}).setView([51.505, -0.09], 13);

const scale = L.control.scale({ imperial: false });

const tileLayer = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }
);

scale.addTo(map);
tileLayer.addTo(map);

map.on("fullscreenchange", () => {
  if (map.isFullscreen()) {
    map.gestureHandling.disable();
    console.log("entered fullscreen", map.gestureHandling.enabled());
  } else {
    map.gestureHandling.enable();
    console.log("exited fullscreen", map.gestureHandling);
  }
});
