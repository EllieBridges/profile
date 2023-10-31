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
    <div className="h-1/2 md:h-4/5 md:w-4/5 mx-auto z-2">
      <div className="mt-52 relative w-auto h-full">
        <div
          className="absolute bg-[url('../public/img/mountains.png')] bg-cover bg-top bottom-0 w-full overflow-visible h-[900px] bg-pink-400 transition-transform transform translate-y-0 ease-in-out duration-1000"
          style={{ transform: `translateY(${position}px)` }}
        ></div>
        <div
          className="absolute bg-[url('../public/img/pink-hills.png')] bottom-0 bg-cover bg-top w-full h-[625px] transition-transform transform translate-y-0 ease-in-out duration-1000"
          style={{ transform: `translateY(${-position * 1.5}px)` }}
        ></div>
        <div className="absolute bottom-0 h-[100px] w-full bg-white"></div>
      </div>
    </div>
  );
}

export default Hero;
