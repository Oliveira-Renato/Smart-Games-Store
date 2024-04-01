import React, { useEffect, useRef } from "react";

const DEFAULT_CENTER = { lat: 48.8566, lng: 2.3522 };
const DEFAULT_ZOOM = 7;

export const GoogleMaps = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google && window.google.maps && mapRef.current) {
      new window.google.maps.Map(mapRef.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: "1000px", height: "700px" }}
    />
  );
};
