import { useState, useEffect, useRef } from "react";

const useScroll = () => {
  const [position, setPosition] = useState(0);
  const [scroll, setScroll] = useState("down");

  let ref = useRef(0);

  useEffect(
    (position) => {
      //CHECK ref is correctly adjusting, but not setScroll
      const handleScroll = () => {
        //scroll down movement
        if (window.scrollY > ref.current) {
          setScroll("down");
          setPosition(-40);
          ref.current = window.scrollY;
        } else {
          setScroll("up");
          setPosition(40);
          ref.current = window.scrollY;
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll, { passive: true });
      };
    },
    [scroll]
  );
  return position;
};

export default useScroll;
