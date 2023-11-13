function Result({ points }) {
  return (
    <div className="bg-pink w-fit my-4 rounded-full mx-auto p-3 sm:my-10 sm:p-6">
      <h2 className="font-sans text-white text:lg sm:text-2xl">
        Score : {points}{" "}
      </h2>
    </div>
  );
}

export default Result;
