import { useState, useEffect, useRef } from "react";

function Hero() {
  const [position, setPosition] = useState(0);
  const [scroll, setScroll] = useState("down");

  let ref = useRef(0);

  useEffect(() => {
    console.log(position);
    //CHECK ref is correctly adjusting but not setScroll
    const handleScroll = () => {
      if (window.scrollY > ref.current) {
        ref.current = window.scrollY;
        setPosition(-80);
        console.log(scroll, ref.current);
      } else {
        ref.current = window.scrollY;
        setScroll("up");
        setPosition(80);
        console.log(scroll, ref.current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <div className="h-1/2 md:h-4/5 md:w-3/4 m-auto z-2">
      <div className="relative w-auto h-full bg-yellow-400">
        <div
          className="absolute bg-[url('../public/img/mountains.png')] bg-cover bottom-0 w-full overflow-visible h-full bg-pink-400 transition-transform transform translate-y-0 ease-in-out duration-1000"
          style={{ transform: `translateY(${position}px)` }}
        ></div>
        {/* <div
          className="absolute bg-[url('../public/img/pink-hills.png')] bottom-0 bg-cover bg-top w-full h-[600px] transition-transform transform translate-y-0 ease-in-out duration-1000"
          style={{ transform: `translateY(${-position}px)` }}
        ></div> */}
      </div>
    </div>
  );
}

export default Hero;
