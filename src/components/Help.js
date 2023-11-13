import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { GoQuestion } from "react-icons/go";

function Help({ className }) {
  const [toggle, setToggle] = useState(true);
  const helpEl = useRef();

  const handleClick = () => {
    setToggle(!toggle);
  };

  //click anywhere to close help box
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

  const classes = classNames(
    "font-sans m-6 p-10 rounded lg:w-4/5 mx-auto text-white",
    className
  );

  const helpTool = toggle ? (
    <GoQuestion
      size={30}
      color="black"
      className="hover:bg-yellow-300 rounded-full"
    />
  ) : (
    <div ref={helpEl} className={`${classes}`}>
      <h1 className="text-lg md:text-2xl font-bold  m-1">How to Play</h1>
      <h3 className="text-md font-bold my-3 md:text-xl">
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
