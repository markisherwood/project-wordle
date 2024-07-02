import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => {
        return (
          <p className="guess" key={rowIndex}>
            {range(5).map((charIndex) => (
              <span className="cell" key={charIndex}>{guesses?.[rowIndex]?.[charIndex]}</span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
