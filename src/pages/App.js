import NavBar from "../components/NavBar";
import Route from "../components/Route";
import Name from "../components/Name";
import Home from "./Home";
import Read from "./Read";
import Gallery from "./Gallery";
import Contact from "./Contact";

function App() {
  return (
    <div className="md:m-5">
      <div className="">
        {window.innerWidth > 430 && <Name />}
        <NavBar />
      </div>
      <div className="m-10 md:m-20">
        <Route path="/">
          <Home />
        </Route>

        <Route path="/read">
          <Read />
        </Route>

        <Route path="/gallery">
          <Gallery />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </div>
  );
}

export default App;
