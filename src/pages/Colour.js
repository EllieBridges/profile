import { useState, useEffect, useRef } from "react";
import rgbToHex, { randomRGB } from "../utils/rgbToHex";
import Help from "../components/Help";
import ColourOption from "../components/ColourOption";
import Result from "../components/Result";
import GameOver from "../components/GameOver";

function Colour() {
  // const [answer, setAnswer] = useState();
  // const [hex, setHex] = useState("");
  const [colours, setColours] = useState([
    [255, 0, 0],
    [255, 0, 255],
    [0, 255, 0],
  ]);

  const [playing, setPlaying] = useState(true);
  const [points, setPoints] = useState(0);

  const selected = useRef();

  const COLOUR_OPTION_COUNT = 3;

  useEffect(() => {
    colourPalette(COLOUR_OPTION_COUNT);
  }, [points]);

  const colourPalette = (num) => {
    let colourOptions = [];
    for (let i = 0; i < num; i++) {
      colourOptions.push(randomRGB());
      setColours(colourOptions);
    }
    return colourOptions;
  };

  const index = Math.floor(Math.random() * colours.length);
  const answer = colours[index];
  const hex = rgbToHex(answer);

  console.log("answer", answer);

  const handleSelection = (event) => {
    selected.current = event.target.id;
    if (selected.current === answer.join()) {
      setPoints(points + 1);
    } else {
      setPlaying(false);
    }
  };

  const playAgain = () => {
    setPoints(0);
    setPlaying(true);
  };

  const renderedColours = colours.map((colour) => {
    return (
      <ColourOption
        key={colour}
        colour={colour}
        selected={selected.current}
        highlighted={"border border-grey-200"}
        handleClick={handleSelection}
        className={"my-5 sm:my-10"}
      />
    );
  });

  return (
    <div className="pt-28 text-center">
      <Help />
      <div className="">
        <h1 className="font-['Sansita_Swashed'] italic text-black text-6xl m-5 pb-5 text-orange text-center sm:text-8xl">
          Guess the Hex
        </h1>
      </div>
      {playing ? (
        <div>
          <h2 className="text-xl sm:text-2xl mb-12">Hex {hex}</h2>
          <div className="grid grid-rows-3 mx-auto h-[400px] justify-items-center items-center  w-full sm:h-48 sm:grid-rows-1 sm:grid-cols-3 lg:px-64">
            {renderedColours}
          </div>
          <div>{points > 0 && <Result points={points} />}</div>
        </div>
      ) : (
        <GameOver handleClick={playAgain} topScore={points} />
      )}
    </div>
  );
}

export default Colour;
