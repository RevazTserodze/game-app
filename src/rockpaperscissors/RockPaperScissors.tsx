import React, { useEffect, useState } from "react";
import "./RockPaperScissors.css";

type Choice = "rock" | "paper" | "scissors";

const RockPaperScissors: React.FC = () => {
  const [userChoice, setUserChoice] = useState<Choice>("rock");
  const [computerChoice, setComputerChoice] = useState<Choice>("rock");
  const [userPoints, setUserPoints] = useState<number>(0);
  const [computerPoints, setComputerPoints] = useState<number>(0);
  const [turnResult, setTurnResult] = useState<string | null>(null);
  const [result, setResult] = useState<string>("Let's see who wins");
  const [gameOver, setGameOver] = useState<boolean>(false);

  const choices: Choice[] = ["rock", "paper", "scissors"];

  useEffect(() => {
    generateComputerChoice();
  }, []);

  useEffect(() => {
    if (!gameOver) {
      determineWinner();
    }
  }, [userChoice, gameOver]);

  const handleClick = (value: Choice) => {
    setUserChoice(value);
  };

  const generateComputerChoice = () => {
    const randomChoice: Choice =
      choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const determineWinner = () => {
    const randomChoice: Choice =
      choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);

    const comboMoves = userChoice + randomChoice;
    let resultMessage = "";
    if (
      comboMoves === "scissorspaper" ||
      comboMoves === "rockscissors" ||
      comboMoves === "paperrock"
    ) {
      setUserPoints(userPoints + 1);
      resultMessage = "User gets the point!";
    } else if (
      comboMoves === "paperscissors" ||
      comboMoves === "scissorsrock" ||
      comboMoves === "rockpaper"
    ) {
      setComputerPoints(computerPoints + 1);
      resultMessage = "Computer gets the point!";
    } else {
      resultMessage = "No one gets a point!";
    }

    setTurnResult(resultMessage);

    if (userPoints === 4 || computerPoints === 4) {
      setGameOver(true);
      setResult(userPoints === 4 ? "User Wins" : "Computer Wins");
    }
  };

  const reset = () => {
    setUserPoints(0);
    setComputerPoints(0);
    setResult("Let's see who wins");
    setGameOver(false);
  };

  const refreshScores = () => {
    setUserPoints(0);
    setComputerPoints(0);
    setGameOver(false);
    setTurnResult(null);
    setUserChoice("rock");
    setComputerChoice("rock");
  };

  return (
    <div
      style={{
        marginTop: "200px",
        marginBottom: "230px",
        boxShadow: "0px 10px 20px 10px black",
      }}
      className="rock-paper-scissors container bg-warning text-center py-5"
    >
      <h1 className="display-4 mb-4">Rock-Paper-Scissors</h1>
      <div className="score mb-4">
        <h2>User Points: {userPoints}</h2>
        <h2>Computer Points: {computerPoints}</h2>
      </div>

      <div className="choice row mb-4">
        <div
          className="choice-user col-md-6"
          style={{ transform: "rotate(180deg) scaleY(-1)" }}
        >
          <img
            className="user-hand img-fluid"
            src={`/rock-paper-scisorsImgs/${userChoice}.png`}
            alt={userChoice}
          />
        </div>

        <div className="choice-computer col-md-6">
          <img
            className="computer-hand img-fluid"
            src={`/rock-paper-scisorsImgs/${computerChoice}.png`}
            alt={computerChoice}
          />
        </div>
      </div>

      <div className="button-div mb-4">
        {choices.map((choice, index) => (
          <button
            className="btn btn-success w-25 mx-2"
            key={index}
            onClick={() => handleClick(choice)}
            disabled={gameOver}
          >
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>

      <div className="result mb-4">
        <h2>Turn Result: {turnResult}</h2>
        <h2>Final Result: {result}</h2>
      </div>

      <div className="button-div mb-4">
        <button className="btn btn-danger" onClick={refreshScores}>
          Refresh Scores
        </button>
      </div>

      {gameOver && (
        <div className="button-div">
          <button className="btn btn-info" onClick={reset}>
            Restart Game?
          </button>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
