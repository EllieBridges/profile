function ColourOption({ key, colour }) {
  return (
    <div
      key={colour}
      className="flex justify-center w-28 h-28 rounded-full bg-white-500 shadow "
    >
      <div className="place-self-center w-24 h-24 rounded-full p-4 bg-red-500"></div>
    </div>
  );
}

export default ColourOption;
