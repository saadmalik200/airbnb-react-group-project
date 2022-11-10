import getDistance from "geolib/es/getDistance";
const geolib = require("geolib");

navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(
      "You are ",
      geolib.getDistance(position.coords, {
        latitude: 51.525,
        longitude: 7.4575,
      }),
      "meters away from 51.525, 7.4575"
    );
  },
  () => {
    alert("Position could not be determined.");
  }
);
