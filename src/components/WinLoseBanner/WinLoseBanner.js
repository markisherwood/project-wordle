import React from "react";

function WinLoseBanner({ guesses, gameStatus, answer }) {
  const winBanner = (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guesses.length} guesses</strong>.
      </p>
    </div>
  );

  const lossBanner = (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );

  return (
    <>
      {gameStatus === "win" && winBanner}
      {gameStatus === "loss" && lossBanner}
    </>
  );
}

export default WinLoseBanner;
