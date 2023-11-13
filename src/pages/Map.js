import { useState } from "react";
import Description from "../components/Description";
import GrantAccess from "../components/GrantAccess";
import MapContainer from "../components/MapContainer";
import Footer from "../components/Footer";

function Map({ getUserLocation, latitude, longitude }) {
  const [zoom, setZoom] = useState(3);

  const handleClick = () => {
    getUserLocation();
    setZoom(12);
  };

  return (
    <div className="flex flex-col mx-auto items-center text-center">
      <MapContainer latitude={latitude} longitude={longitude} zoom={zoom} />
      <GrantAccess
        className="bg-orange mx-auto justify-self-center z-10 hover:bg-pink"
        handleClick={handleClick}
      >
        My Location
      </GrantAccess>
      <Description
        title="Google Maps API"
        content="As you can see there's a lot more to be done here... I wanted to use the new Google Maps React Components @vis.gl/react-google-maps released on the 2nd November 2023. I'm hoping to add data to focused around the contrast between the built environment and our natural world."
        colour="#f3b5bd"
        accent="#f6727e"
        softwares={["Google Maps API", "CSS"]}
        skills={[
          "Utilising documentation",
          "UseState",
          "UseEffect",
          "Props",
          "Custom map styling",
        ]}
      />
      <Footer
        title="Find more about my professional history here"
        link="https://www.linkedin.com/in/ellie-bridges-244b7582"
      />
    </div>
  );
}

export default Map;
