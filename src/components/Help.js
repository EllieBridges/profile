import { useState } from "react";
import { GoQuestion } from "react-icons/go";

function Help() {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const helpTool = toggle ? (
    <GoQuestion size={30} />
  ) : (
    <div className="font-display bg-pink-200">
      <h1 className="text-xl">How to Play</h1>
      <h3 className="text-lg">
        This is a game to test your hexadecimal colour knowledge
      </h3>
      <p>
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
