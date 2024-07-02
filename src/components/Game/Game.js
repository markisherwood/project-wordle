import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import WinLoseBanner from "../WinLoseBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  console.log(guesses);
  function makeGuess(guess) {
    setGuesses([...guesses, checkGuess(guess, answer)]);
  }


  let [gameStatus, setGameStatus] = React.useState('inProgress');
  if (
    guesses.some((guess) => guess.every((char) => char.status === "correct"))
  ) {
    setGameStatus("win");
  } else if (guesses.length >= 6) {
    setGameStatus("loss");
  }

  return (
    <div>
      <WinLoseBanner guesses={guesses} gameStatus={gameStatus} answer={answer} />
      <GuessResults guesses={guesses} />
      <GuessInput makeGuess={makeGuess} disabled={gameStatus === 'win'} />
    </div>
  );
}

export default Game;
