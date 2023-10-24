import { useState } from "react";
import rGBConversion from "../utils/rgbToHex";
import ColourOption from "../components/ColourOption";

function Colour() {
  const [hex, setHex] = useState("FFFFFF");

  //Creates a random RGB component
  const randomPrimary = () => {
    return Math.floor(Math.random() * 255);
  };

  //Combines random RGB values to form a full RGB code
  const randomRGB = () => {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
      const primary = randomPrimary();
      rgb.push(primary);
    }
    return rgb;
  };

  const colour = randomRGB();

  const handleClick = () => {
    setHex(rGBConversion(colourSelector(colours)));
  };

  const colourPalette = (num) => {
    let colourOptions = [];
    for (let i = 0; i < num; i++) {
      colourOptions.push(randomRGB());
    }
    return colourOptions;
  };

  const colours = colourPalette(5);

  const colourSelector = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    console.log(index);
    return arr[index];
  };

  console.log("colours", colours);

  const renderedColours = colours.map((colour) => {
    return <ColourOption key={colour} colour={colour} />;
  });

  return (
    <div className="pt-48 text-center">
      Guess the Hex
      <div className="">{`Hex Code ${hex}`}</div>
      <div className="grid grid-cols-4 justify-items-center items-center h-96 w-full">
        {renderedColours}
      </div>
      <button onClick={handleClick}>click to change hex</button>
    </div>
  );
}

export default Colour;
