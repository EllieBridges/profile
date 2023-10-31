import Hero from "../components/Hero";

function Home() {
  return (
    <div id="pageContainer" className="h-screen">
      <Hero />
      <div className="relative bg-white py-12 font-serif z-5 md:px-10 md:py-30">
        <div className="text-md text-center italic sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
          ligula pretium, suscipit ipsum id, placerat dolor. Donec sagittis
          augue arcu, vel luctus eros pretium ut.
        </div>
      </div>
    </div>
  );
}

export default Home;
