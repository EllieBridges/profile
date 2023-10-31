import Button from "./Button";
import { GoSmiley } from "react-icons/go";

function GameOver({ handleClick, topScore }) {
  const chooseContent = (score) => {
    if (score > 3) {
      return (
        <div className="flex flex-col">
          You got {topScore} points! Well done!
          <GoSmiley size={30} className="mx-auto my-3 sm:scale-150 sm:my-5" />
        </div>
      );
    } else if (score === 0) {
      return "Hard luck, try again";
    } else {
      return `You scored ${topScore} points`;
    }
  };

  const content = chooseContent(topScore);

  return (
    <div className="bg-blue p-3 w-3/4 mx-auto my-10 rounded sm:w-1/2 md:my-20 shadow-lg">
      <h1 className="text-white font-bold text-2xl">GAME OVER</h1>
      <div className="text-white my-5">{content}</div>
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
