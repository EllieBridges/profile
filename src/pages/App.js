import NavBar from "../components/NavBar";
import Route from "../components/Route";
import Home from "./Home";
import Map from "./Map";
import Gallery from "./Gallery";
import Colour from "./Colour";

function App() {
  return (
    <div className="flex flex-col m-5  mx-auto items-center">
      <div className="">
        <NavBar />
      </div>
      <div className="m-5">
        <Route path="/">
          <Home />
        </Route>

        <Route path="/colour">
          <Colour />
        </Route>

        <Route path="/map">
          <Map />
        </Route>

        <Route path="/gallery">
          <Gallery />
        </Route>
      </div>
    </div>
  );
}

export default App;
