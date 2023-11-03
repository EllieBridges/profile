import { useState, useEffect } from "react";
import {
  APIProvider,
  Map,
  useMap,
  Marker,
  useMarkerRef,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import "./MapContainer.css";

const MapContainer = () => {
  const map = useMap("e21ebf05c669eb98");
  const [markerRef, marker] = useMarkerRef();
  const [placesServices, setPlacesServices] = useState(null);

  const placesLibrary = useMapsLibrary("places");

  useEffect(() => {
    if (!marker || !placesLibrary) return;
    setPlacesServices(new placesLibrary.placesServices());
  }, [marker, placesLibrary]);

  return (
    <APIProvider
      apiKey={"AIzaSyCVYNubHc3sZaoJkJPHxe2LWuxxvRrP0Ts"}
      className="map-container"
    >
      <Map
        mapId={"e21ebf05c669eb98"}
        className="google-map"
        zoom={3}
        center={{ lat: 53.0036294, lng: -105.0135052 }}
      >
        <Marker ref={markerRef} position={{ lat: 53.54992, lng: 10.00678 }} />
      </Map>
    </APIProvider>
  );
};

export default MapContainer;
