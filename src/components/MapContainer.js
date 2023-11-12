import {
  APIProvider,
  Map,
  // useMap,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";
import "./MapContainer.css";

const MapContainer = ({ latitude, longitude, zoom }) => {
  // const map = useMap("e21ebf05c669eb98");
  const [markerRef] = useMarkerRef();
  // const [placesServices, setPlacesServices] = useState(null);

  // const placesLibrary = useMapsLibrary("places");

  return (
    <APIProvider
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      className="map-container"
    >
      <Map
        mapId={"e21ebf05c669eb98"}
        className="google-map w-200 h-200 sm:w-800 sm:h-800"
        zoom={5}
        center={{ lat: latitude, lng: longitude }}
      >
        {zoom !== 3 && (
          <Marker
            ref={markerRef}
            position={{ lat: latitude, lng: longitude }}
          />
        )}
      </Map>
    </APIProvider>
  );
};

export default MapContainer;
