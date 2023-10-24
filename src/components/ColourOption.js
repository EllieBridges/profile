function ColourOption({ key, colour }) {
  return (
    <div
      key={colour}
      className="relative w-28 h-28 rounded-full bg-white-500 shadow "
    >
      <div className="absolute w-2/3 h-2/3 place-self-center rounded-full p-4 bg-red-500"></div>
    </div>
  );
}

export default ColourOption;
