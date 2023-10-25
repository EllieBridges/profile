function ColourOption({ colour }) {
  const colourString = colour.join();

  const divColour = { backgroundColor: `rgb(${colourString})` };

  return (
    <div className="flex justify-center w-28 h-28 rounded-full bg-white-500 shadow ">
      <div
        className="colourOption place-self-center w-24 h-24 rounded-full p-4"
        style={divColour}
      >
        {colourString}
      </div>
    </div>
  );
}

export default ColourOption;
