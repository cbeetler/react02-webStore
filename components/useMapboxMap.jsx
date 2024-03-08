import { useEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import "mapbox-gl/dist/mapbox-gl.css";

export default function useMapboxMap(container) {
  // Mapbox token
  mapboxgl.accessToken =
    "pk.eyJ1IjoidnNscWRzaGNiaWlnc291eGtkIiwiYSI6ImNsM3dyZDhvaTBucjkzbGxkM2syYTZpYW4ifQ.UyVIpJDgWM2-ZIufnxMBZQ";

  // renders map once
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: container,
      style: "mapbox://styles/mapbox/dark-v10", // sets the dark mode
      center: [12.567898, 55.67583], // Sets the center of the map (long, lat)
      zoom: 9,
    });
  }, []);
}
