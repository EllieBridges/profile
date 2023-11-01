import { useLoadScript } from "@react-google-maps/api";

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCm2WrV7bWWobLwx_DoNr_l1PdQiFC78YY",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <div>Map</div>;
}
export default Map;
