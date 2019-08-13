var app = new Vue({
  el: "#app",
  data() {
    return {
      message: "Hello Vue!",
      map: null
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      // define map and tile layer
      this.map = L.map(this.$refs.map, {
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

      scale.addTo(this.map);
      tileLayer.addTo(this.map);

      this.map.on("fullscreenchange", () => {
        if (this.map.isFullscreen()) {
          this.map.gestureHandling.disable();
          console.log("entered fullscreen", this.map.gestureHandling.enabled());
        } else {
          this.map.gestureHandling.enable();
          console.log("exited fullscreen", this.map.gestureHandling);
        }
      });
    }
  }
});
