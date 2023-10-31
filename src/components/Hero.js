import { useState, useEffect, useRef } from "react";

function Hero() {
  const [position, setPosition] = useState(0);
  const [scroll, setScroll] = useState("down");

  let ref = useRef(0);

  useEffect(
    (position) => {
      console.log(position);
      //CHECK ref is correctly adjusting but not setScroll
      const handleScroll = () => {
        if (window.scrollY > ref.current) {
          ref.current = window.scrollY;
          setPosition(-40);
          console.log(scroll, ref.current);
        } else {
          ref.current = window.scrollY;
          setScroll("up");
          setPosition(40);
          console.log(scroll, ref.current);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [scroll]
  );

  return (
    <div className="h-1/2 w-full mx-auto z-2 md:h-2/3 md:h-4/5 lg:w-4/5">
      {window.innerWidth < 800 ? (
        <div className="mt-24 flex items-center justify-center mx-auto bg-[url('../public/img/hero-still.jpg')] bg-cover bg-right-top h-full w-full sm:bg-center-top sm:w-full sm:h-full sm:mt-40">
          {/* <h1 className="font-['Sansita_Swashed'] text-black text-8xl">
            Welcome
          </h1> */}
        </div>
      ) : (
        <div className="mt-52 relative w-full h-full">
          <div
            className="absolute bg-[url('../public/img/mountains.png')] bg-cover bg-right-top bottom-0 w-full overflow-visible h-[900px] bg-pink-400 transition-transform transform translate-y-0 ease-in-out duration-1000 xl:bg-top"
            style={{ transform: `translateY(${position}px)` }}
          ></div>
          <div
            className="absolute bg-[url('../public/img/pink-hills.png')] bottom-0 bg-cover bg-top w-full h-[625px] transition-transform transform translate-y-0 ease-in-out duration-1000 lg:h-[550px] xl:h-[700px]"
            style={{ transform: `translateY(${-position * 1.5}px)` }}
          ></div>
          <div className="absolute bottom-0 h-[100px] w-full bg-white"></div>
        </div>
      )}
    </div>
  );
}

export default Hero;
