import classNames from "classnames";

function ColourOption({
  colour,
  handleClick,
  highlighted,
  className,
  selected,
}) {
  const colourString = colour.join();
  console.log("colourString", colourString, "selected", selected);

  const divColour = { backgroundColor: `rgb(${colourString})` };

  const classes = classNames(
    `flex justify-center w-[75px] h-[75px] rounded-full bg-white-500 hover:scale-125 hover:border-black hover:border-2 sm:w-[150px] sm:h-[150px]`,
    className,
    highlighted
  );

  return (
    <div className={classes}>
      <div
        className="colourOption place-self-center w-5/6 h-5/6 rounded-full p-4"
        style={divColour}
        id={colour}
        onClick={handleClick}
      ></div>
    </div>
  );
}

export default ColourOption;
