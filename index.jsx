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

// root creation
createRoot(document.querySelector("#react-root")).render(<App />);
