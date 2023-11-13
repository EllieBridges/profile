import { useState } from "react";
import NavBar from "../components/NavBar";
import Route from "../components/Route";
import Home from "./Home";
import Map from "./Map";
import Gallery from "./Gallery";
import Colour from "./Colour";
import { Helmet } from "react-helmet";

function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const success = (position) => {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  };

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      // status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, (data) => {
        console.log(data);
      });
    }
  };

  return (
    <div className="flex flex-col m-0 p-0 w-full items-center text-center ">
      <NavBar />
      <div className="pt-24 md:pt-32 lg:pt-44">
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
      <Helmet>
        <meta property="og:title" content="Ellie Bridges Profile" />
        <meta
          property="og:description"
          content="A Frontend Development Portfolio"
        />
        <meta property="og:image" content="../public/img/hero-still.png" />
        <meta property="og:url" content="https://elliebridges.vercel.app/" />
      </Helmet>
    </div>
  );
}

export default App;
