import Button from "./Button";

function GameOver({ handleClick, topScore }) {
  return (
    <div className="bg-blue p-3 w-3/4 mx-auto my-10 rounded md:w-1/2 md:my-20">
      <h1 className="text-white font-bold text-2xl">GAME OVER</h1>
      <h2 className="text-white my-5">Your Top Score is {topScore}</h2>
      <Button
        handleClick={handleClick}
        className="bg-light-pink hover:bg-hot-pink font-bold"
      >
        Play Again
      </Button>
    </div>
  );
}

export default GameOver;
