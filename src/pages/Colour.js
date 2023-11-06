import { useState, useEffect, useRef } from "react";
import rgbToHex, { randomRGB } from "../utils/rgbToHex";
import Help from "../components/Help";
import ColourOption from "../components/ColourOption";
import Result from "../components/Result";
import GameOver from "../components/GameOver";
import Description from "../components/Description";

function Colour() {
  const [colours, setColours] = useState([
    [255, 0, 0],
    [255, 0, 255],
    [0, 255, 0],
  ]);

  const [playing, setPlaying] = useState(true);
  const [points, setPoints] = useState(0);

  const selected = useRef(null);

  const COLOUR_OPTION_COUNT = 3;

  useEffect(() => {
    colourPalette(COLOUR_OPTION_COUNT);
  }, [points]);

  const colourPalette = (num) => {
    let colourOptions = [];
    for (let i = 0; i < num; i++) {
      colourOptions.push(randomRGB());
    }
    setColours(colourOptions);
  };

  const index = Math.floor(Math.random() * colours.length);
  const answer = colours[index];
  const hex = rgbToHex(answer);

  console.log("answer", answer);

  const handleSelection = (e) => {
    e.preventDefault();
    selected.current = e.target.id;
    if (selected.current === answer.join()) {
      setPoints(points + 1);
    } else {
      setPlaying(false);
    }
  };

  const playAgain = (e) => {
    e.preventDefault();
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
    <div className="relative pt-28 text-center w-screen px-5">
      <Help />
      <div className="m-auto">
        <h1 className="font-['Sansita_Swashed'] italic text-black text-4xl text-orange text-center sm:text-6xl md:text-8xl sm:pb-5">
          Guess the Hex
        </h1>
      </div>
      {playing ? (
        <div className="m-4">
          <h2 className="text-xl sm:text-2xl mb-8">Hex {hex}</h2>
          <div className="grid grid-cols-3 mx-auto h-[200px] w-fit justify-items-center items-center sm:h-48 sm:grid-rows-1 lg:px-64">
            {renderedColours}
          </div>
          <div>{points > 0 && <Result points={points} />}</div>
        </div>
      ) : (
        <GameOver handleClick={playAgain} topScore={points} />
      )}
      <Description
        title="Colour Game"
        content="I wanted to understand how hex codes are created and how to translate what colour they might be. I thought creating a game would help me pull apart the mystery of them, whilst practicing my coding skills. I decided to keep the raw data in RGB as an easy and consistent comparision. I found value in another application for useRef and understanding how to use state management efficiently. My main learning outcome is when a component relies on multiple state, to breakdown which variables can be handled with standard variables, rather than its own state. This cut down undesirable re-renders, making the processes more efficient."
        colour="#adcde4"
        accent="#839dd7"
        softwares={["ClassNames", "React icons"]}
        skills={[
          "UseEffect",
          "UseState",
          "UseRef",
          "Event handlers",
          "Default and named exports",
          "Props",
          "Event listeners",
          "Logical problem-solving",
          "Flex and grid",
        ]}
      />
    </div>
  );
}

export default Colour;
