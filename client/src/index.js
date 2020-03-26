import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGlkaTM3IiwiYSI6ImNrODkyejgxYzAwcmQzZmw5cGpkZ25sb3MifQ.TltNRwSWcCerlffzzs35gg";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
