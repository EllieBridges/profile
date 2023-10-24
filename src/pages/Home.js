import Hero from "../components/Hero";

function Home() {
  return (
    <div id="pageContainer" className="h-screen">
      <Hero />
      <div className="relative bg-white font-display px-10 py-40 z-5">
        <div className="sm:text-xl text-center italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
          ligula pretium, suscipit ipsum id, placerat dolor. Donec sagittis
          augue arcu, vel luctus eros pretium ut.
        </div>
      </div>
    </div>
  );
}

export default Home;
