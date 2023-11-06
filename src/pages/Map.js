import Description from "../components/Description";
import MapContainer from "../components/MapContainer";

function Map() {
  return (
    <div>
      <MapContainer />
      <Description
        title="Google Maps API"
        content="As you can see there's a lot more to be done here... I wanted to use the new Google Maps React Components @vis.gl/react-google-maps released on the 2nd November 2023. I'm hoping to add data to focused around the contrast between the built environment and our natural world."
        colour="#f3b5bd"
        accent="#f6727e"
        softwares={["Google Maps API", "CSS"]}
        skills={[
          "Utilsing documentation",
          "UseState",
          "UseEffect",
          "Props",
          "Custom map styling",
        ]}
      />
    </div>
  );
}

export default Map;
