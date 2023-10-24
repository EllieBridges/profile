import { useState, useEffect, useRef } from "react";

function Hero() {
  const [position, setPosition] = useState(0);
  const [scroll, setScroll] = useState("down");

  let ref = useRef(0);

  useEffect(() => {
    //CHECK ref is correctly adjusting but not setScroll
    const handleScroll = () => {
      if (window.scrollY > ref.current) {
        ref.current = window.scrollY;
        setPosition(-50);
        console.log(scroll, ref.current);
      } else {
        ref.current = window.scrollY;
        setScroll("up");
        setPosition(50);
        console.log(scroll, ref.current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <div className="h-1/2 md:h-2/3 z-0">
      <div className="mt-48 relative w-auto h-full bg-yellow-400">
        <div
          className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-green-400 transition-transform transform translate-y-0 ease-in-out duration-700"
          style={{ transform: `translateY(${position}px)` }}
        >
          Move me
        </div>
        <div
          className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-pink-400 transition-transform transform translate-y-0 ease-in-out duration-700"
          style={{ transform: `translateY(${position * 2}px)` }}
        ></div>
      </div>
    </div>
  );
}

export default Hero;
