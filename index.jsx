// style
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";

// packages
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
// import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

// components
import StoreFront from "./components/StoreFront.jsx";
// import useMapboxMap from "./components/useMapboxMap.jsx";
// import useFetch from "./components/useFetch.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [random, setRandom] = useState(Math.random());

  return <StoreFront />;

  /* :: the code below is related entirely to the map

  // untested however this line /may/ support changing the marker
  const { marker, setMarker, handeLocationChange } = useMapboxMap("map");

  return (
    <>
      // button was commented out prior to updating
      {
        <button
          id="re-render"
          // button hidden without below style attributes
          style={{
            top: "10px",
            left: "10px",
            zIndex: "10",
            position: "absolute",
          }}
          onClick={() => setRandom(Math.random())}
        >
          Re-render
        </button>
      }
      {/* <div className="map-overlay">
        <h3>Choose store: </h3>
        <select onChange={handleLocationChange}>
          <option value="central">Central station</option>
          <option value="norrebro">Norrebro street</option>
          <option value="airport">CPH Airport</option>
        </select>
      </div> //}
      {/* for the div, class "mapboxgl-canvas" was necessary in order to work with .css //}
      <div id="map" className="mapboxgl-canvas"></div>
    </>
  );

  /* :: end section dedicated to map
     :: below will never run due to above return */

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

// Specific to this project: makes it possible for you to reload the page
let root = createRoot(document.querySelector("#react-root"));
const reload = () => {
  root.unmount();
  root = createRoot(document.querySelector("#react-root"));
  console.log("Page reloaded");
  root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
  );
};
reload();
const button = document.createElement("button");
button.textContent = "Reload page";
button.addEventListener("click", reload);
document.body.insertAdjacentElement("afterbegin", button);

// root creation without map capability
// createRoot(document.querySelector("#react-root")).render(<App />);

/*
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
*/
