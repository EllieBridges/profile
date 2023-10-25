import { useEffect, useState } from "react";
import { GoQuestion } from "react-icons/go";
import rGBConversion, { randomRGB } from "../utils/rgbToHex";
import Help from "../components/Help";
import ColourOption from "../components/ColourOption";
import Button from "../components/Button";

function Colour() {
  const [answer, setAnswer] = useState();
  const [hex, setHex] = useState("");

  useEffect(() => {
    colourSelector(colours);
    // setAnswer(palette);
    // console.log(answer);
    // setHex(rGBConversion(palette));
    // console.log(hex);
  }, []);

  const colourPalette = (num) => {
    let colourOptions = [];
    for (let i = 0; i < num; i++) {
      colourOptions.push(randomRGB());
    }
    return colourOptions;
  };

  //choose the number of choices (more = harder the game)
  const colours = colourPalette(6);

  //selects colour to guess in rgb
  const colourSelector = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    console.log(index);
    return arr[index];
  };

  const renderedColours = colours.map((colour) => {
    return <ColourOption key={colour} colour={colour} />;
  });

  return (
    <div className="pt-28 text-center">
      <Help />
      <div className="pt-14">
        <h1 className="display">Guess the Hex</h1>
        {hex && <h2>{`Hex Code ${hex}`}</h2>}
      </div>
      <div className="grid grid-cols-3 justify-items-center items-center h-96 w-full">
        {renderedColours}
      </div>
      <Button>Lets Play </Button>
    </div>
  );
}

export default Colour;
