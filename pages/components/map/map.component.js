import React from "react";
import { useEffect } from "react";
import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components"; // Create a Tailwind Styled Component with Tailwind rules that you can render directly

// set accessToken property of the object `mapboxgl`
mapboxgl.accessToken =
  "pk.eyJ1IjoiYW50cmFuMDkiLCJhIjoiY2t6MWE5NmdmMWM4bTJxbXZmbnVha2V6NyJ9.a9TqbWLxc_SMUp-MYqBndQ";

const Map = ({ pickupCoordinates, dropoffCoordinates }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [13.404954, 52.520008],
      zoom: 5,
    });

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (dropoffCoordinates && pickupCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        padding: 60,
      });
    }
  }, [pickupCoordinates, dropoffCoordinates]); // function within useEffect is called once every time after the component is rendered

  const addToMap = (map, coordinates) => {
    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <MapContainer id="map"></MapContainer>;
};

export const MapContainer = tw.div`flex-1 h-1/2`; // MapContainer has the height that is half of the page

export default Map;
