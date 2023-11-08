import { useState } from "react";
import NavBar from "../components/NavBar";
import Route from "../components/Route";
import Home from "./Home";
import Map from "./Map";
import Gallery from "./Gallery";
import Colour from "./Colour";

function App() {
  const [lat, setLat] = useState(49.4745298);
  const [long, setLong] = useState(-95.6625551);

  const success = (position) => {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  };

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    }
    // else if ((lat !== 52.605) & (long !== -101.798)) {
    //   return;}
    else {
      // status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, (data) => {
        console.log(data);
      });
    }
  };

  return (
    <div className="flex flex-col m-5  mx-auto items-center">
      <div className="">
        <NavBar />
      </div>
      <div className="m-5">
        <Route path="/">
          <Home
            getUserLocation={getUserLocation}
            latitude={lat}
            longitude={long}
          />
        </Route>

        <Route path="/colour">
          <Colour />
        </Route>

        <Route path="/map">
          <Map
            getUserLocation={getUserLocation}
            latitude={lat}
            longitude={long}
          />
        </Route>

        <Route path="/gallery">
          <Gallery />
        </Route>
      </div>
    </div>
  );
}

export default App;
