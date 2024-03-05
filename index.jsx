// style
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";

// packages
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

// components
import StoreFront from "./components/StoreFront.jsx";
// import Product from "./components/Product.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [random, setRandom] = useState(Math.random()); // previously used with map
  const [marker, setMarker] = useState();

  // Mapbox token
  mapboxgl.accessToken =
    "pk.eyJ1IjoidnNscWRzaGNiaWlnc291eGtkIiwiYSI6ImNsM3dyZDhvaTBucjkzbGxkM2syYTZpYW4ifQ.UyVIpJDgWM2-ZIufnxMBZQ";

  // renders map once
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // matches <div id="map" />
      style: "mapbox://styles/mapbox/dark-v10", // sets the dark mode
      center: [12.567898, 55.67583], // Sets the center of the map (long, lat)
      zoom: 9,
    });
    // create marker
    const mapMarker = new mapboxgl.Marker()
      .setLngLat([12.567898, 55.67583])
      .addTo(map); // add it to the existing map
    setMarker(mapMarker); // update state of marker to default location
  }, []);

  // store coordinates (related to map)
  const stores = {
    central: [12.567898, 55.67583],
    norrebro: [12.553806, 55.699299],
    airport: [12.650784, 55.618042],
  };

  // since useEffect only renders once, this will update the mapMarker set there
  function handleLocationChange(e) {
    const location = e.target.value;
    marker.setLngLat(stores[location]);
  }

  return (
    <>
      {/* <button
        id="re-render"
        // button hidden without below style attributes
        style={{ zIndex: "10", position: "absolute" }}
        onClick={() => setRandom(Math.random())}
      >
        Re-render
      </button> */}
      <div className="map-overlay">
        <h3>Choose store: </h3>
        <select onChange={handleLocationChange}>
          <option value="central">Central station</option>
          <option value="norrebro">Norrebro street</option>
          <option value="airport">CPH Airport</option>
        </select>
      </div>
      {/* for the div, class "mapboxgl-canvas" was necessary in order to work with .CSS */}
      <div id="map" className="mapboxgl-canvas"></div>
    </>
  );
  /* :: end section dedicated to map
     :: below will never run due to above return */

  // return <StoreFront />;

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

// root creation without map capability
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
