import NavBar from "../components/NavBar";
import Name from "../components/Name";

function App() {
  return (
    <div className="m-5">
      <Name />
      <NavBar />
      {/* <div>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/read">
          <Read />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </div> */}
    </div>
  );
}

export default App;
