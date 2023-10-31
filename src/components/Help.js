import { useState, useEffect, useRef } from "react";
import { GoQuestion } from "react-icons/go";

function Help() {
  const [toggle, setToggle] = useState(true);
  const helpEl = useRef();

  const handleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handler = (event) => {
      if (!helpEl.current) {
        return;
      }
      if (!helpEl.current.contains(event.target)) {
        setToggle(true);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const helpTool = toggle ? (
    <GoQuestion size={30} />
  ) : (
    <div ref={helpEl} className="font-sans bg-light-pink p-3">
      <h1 className="text-lg md:text-xl">How to Play</h1>
      <h3 className="text-md">
        This is a game to test your hexadecimal colour knowledge
      </h3>
      <p className="text-sm">
        Once the game has started, a Hex code will appear. All you have to do is
        guess which of the colour options presented is the correct match. Sounds
        simple hey! Consecutive correct answers will result in more points - see
        how many points you can get!
      </p>
    </div>
  );

  return (
    <div onClick={handleClick} className="relative flex justify-end">
      {helpTool}
    </div>
  );
}

export default Help;
