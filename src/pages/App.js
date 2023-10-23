import Link from "../components/Link";
import Route from "../components/Route";
import Contact from "../pages/Contact";

function App() {
  return (
    <div>
      <Link to="/contact">Go to Contacts</Link>
      <Link to="/home">Go to Home</Link>
      <div>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </div>
  );
}

export default App;
