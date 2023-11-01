import NavBar from "../components/NavBar";
import Route from "../components/Route";
import Home from "./Home";
import Map from "./Map";
import Contact from "./Contact";
import Colour from "./Colour";

function App() {
  return (
    <div className="md:m-5">
      <div className="">
        {/* {window.innerWidth > 430 && <Name />} */}
        <NavBar />
      </div>
      <div className="m-10 md:m-20">
        <Route path="/">
          <Home />
        </Route>

        <Route path="/colour">
          <Colour />
        </Route>

        <Route path="/map">
          <Map />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </div>
  );
}

export default App;
