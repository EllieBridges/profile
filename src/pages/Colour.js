import { useState, useEffect, useRef } from "react";
import rgbToHex, { randomRGB } from "../utils/rgbToHex";
import Help from "../components/Help";
import ColourOption from "../components/ColourOption";
import Result from "../components/Result";
import GameOver from "../components/GameOver";
import Description from "../components/Description";
import Footer from "../components/Footer";

function Colour() {
  const [colours, setColours] = useState([
    [255, 0, 0],
    [255, 0, 255],
    [0, 255, 0],
  ]);

  const [playing, setPlaying] = useState(true);
  const [points, setPoints] = useState(0);

  //for selected answer
  const selected = useRef(null);

  //set amount of colour choices
  const COLOUR_OPTION_COUNT = 3;

  //on first load or when points change
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

  //set a random answer, then find the colour and translate to hex
  const index = Math.floor(Math.random() * colours.length);
  const answer = colours[index];
  const hex = rgbToHex(answer);

  //handle user choice - results in points if correct/ game over if not.
  const handleSelection = (e) => {
    e.preventDefault();
    selected.current = e.target.id;
    if (selected.current === answer.join()) {
      setPoints(points + 1);
    } else {
      setPlaying(false);
    }
  };

  //restart game points and playing state
  const playAgain = (e) => {
    e.preventDefault();
    setPoints(0);
    setPlaying(true);
  };

  //run through colours and create the number of answer options
  const renderedColours = colours.map((colour) => {
    return (
      <ColourOption
        key={colour}
        colour={colour}
        selected={selected.current}
        highlighted={"border border-grey-200"}
        handleClick={handleSelection}
        className={"m-5 sm:m-10"}
      />
    );
  });

  return (
    <div className="flex flex-col mx-auto text-center items-center">
      <div className="lg:w-4/5 mx-auto">
        <h1 className="font-['Sansita_Swashed'] italic text-black text-4xl text-blue text-center sm:text-6xl md:text-8xl sm:pb-5">
          Guess the Hex
        </h1>

        {playing ? (
          <div className="m-4">
            <h2 className="text-xl sm:text-2xl mb-8">Hex {hex}</h2>
            <div className="grid grid-cols-3 h-[150px] mx-auto w-fit justify-items-center items-center sm:h-48 sm:grid-rows-1 sm:h-[200px]">
              {renderedColours}
            </div>
            <div>{points > 0 && <Result points={points} />}</div>
          </div>
        ) : (
          <GameOver handleClick={playAgain} topScore={points} />
        )}
        <div className="">
          <Help className="bg-light-pink" />
        </div>
      </div>
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
      <Footer
        title="Find more about my professional history here"
        link="https://www.linkedin.com/in/ellie-bridges-244b7582"
      />
    </div>
  );
}

export default Colour;
