// packages
import "./index.css";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import "mapbox-gl/dist/mapbox-gl.css";

// components
import StoreFront from "./components/StoreFront.jsx";
// import Product from "./components/Product.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [random, setRandom] = useState(Math.random());

  // Mapbox token
  mapboxgl.accessToken =
    "pk.eyJ1IjoidnNscWRzaGNiaWlnc291eGtkIiwiYSI6ImNsM3dyZDhvaTBucjkzbGxkM2syYTZpYW4ifQ.UyVIpJDgWM2-ZIufnxMBZQ";

  // return <StoreFront />;

  // renders map once
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // matches <div id="map" />
      style: "mapbox://styles/mapbox/dark-v10", // sets the dark mode
      center: [12.567898, 55.67583], // Sets the center of the map (long, lat)
      zoom: 9,
    });
    // create marker
    const marker = new mapboxgl.Marker()
      .setLngLat([12.567898, 55.67583])
      .addTo(map); // add it to the existing map
  }, []);

  return (
    <>
      <button
        id="re-render"
        // button hidden without below style attributes
        style={{ zIndex: "10", position: "absolute" }}
        onClick={() => setRandom(Math.random())}
      >
        Re-render
      </button>
      {/* for the div, class "mapboxgl-canvas" was necessary in order to work with .CSS */}
      <div id="map" className="mapboxgl-canvas"></div>
    </>
  );
  /* :: end section dedicated to map
     :: */

  if (loggedIn) {
    return (
      <>
        <StoreFront />
        <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>
          Logout
        </button>
      </>
    );
  }

  return (
    <>
      <h2>Please login</h2>
      <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>
        Login
      </button>
    </>
  );
}

// createRoot(document.querySelector("#react-root")).render(<App />);

// Do NOT modify the code below
// Special map loading setup
// specific to react-tutorial.app
const script = document.createElement("script");
script.src = "https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js";
script.onload = () => {
  createRoot(document.querySelector("#react-root")).render(
    // StrictMode caused map to render twice for me.
    // Probably works different/better in the browser app
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
  );
};

document.body.appendChild(script);
