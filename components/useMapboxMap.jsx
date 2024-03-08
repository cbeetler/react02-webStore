import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import "mapbox-gl/dist/mapbox-gl.css";

export default function useMapboxMap(container) {
  const [marker, setMarker] = useState();

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
    console.log(location);
    marker.setLngLat(stores[location]);
  }
}
