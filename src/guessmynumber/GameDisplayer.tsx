import React, { useState } from "react";

interface Props {
  randNum: number;
}

const GameDisplayer: React.FC<Props> = ({ randNum }) => {
  const [checkValue, setCheckValue] = useState<number | undefined>();
  const [output, setOutput] = useState<string>("Start Guessing");
  const [correctAnswer, setCorrectAsnswer] = useState<boolean>(false);
  const [score, setScore] = useState<number>(20);
  const [highScore, setHighScore] = useState<number>(
    localStorage.getItem("highScore")
      ? parseInt(localStorage.getItem("highScore")!)
      : 0
  );

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckValue(parseInt(event.target.value));
  };

  const checkHandler = () => {
    if (!correctAnswer && score > 0) {
      if (typeof checkValue !== "undefined") {
        if (checkValue === randNum) {
          setOutput("Correct Guess");
          setCorrectAsnswer(true);
        } else {
          setOutput(
            checkValue > randNum ? "Guess Is Higher" : "Guess Is Lower"
          );
          setScore(score - 1);
        }

        if (score - 1 === 0) {
          setOutput("Game Over");
          setScore(0);
        }
      }
    }
  };

  React.useEffect(() => {
    if (correctAnswer) {
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("highScore", score.toString());
      }
    }
  }, [correctAnswer, score, highScore]);

  const resetLocalStorage = () => {
    localStorage.removeItem("highScore");
    setHighScore(0);
  };

  const relaodGame = () => {
    window.location.reload();
  };

  const containerStyles = {
    backgroundColor: correctAnswer
      ? "#d4edda"
      : score === 0
      ? "#f8d7da"
      : "#f0f0f0",
    borderRadius: "15px",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
    padding: "2rem",
  };

  const lineStyles = {
    height: "2px",
    backgroundColor: "#333",
    flexGrow: 1,
  };

  const titleStyles = {
    fontSize: "2.5rem",
    fontWeight: "bold",
  };

  const h1Styles = {
    fontSize: "4rem",
    fontWeight: "bold",
  };

  const middleSectionStyles = {
    fontSize: "1.2rem",
    margin: "0.5rem 0",
  };

  const inputStyles = {
    width: "50%",
    margin: "0 auto",
  };

  const buttonContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const buttonStyles = {
    margin: "0 0.5rem",
  };

  return (
    <div className="container-fluid text-center" style={containerStyles}>
      <div className="container py-5">
        <div className="topSection d-flex justify-content-between align-items-center mb-4">
          <div style={lineStyles}></div>
          <h1 className="mx-3 display-1" style={h1Styles}>
            {correctAnswer ? randNum : `?`}
          </h1>
          <div style={lineStyles}></div>
        </div>

        <div className="title mb-4">
          <h1 style={titleStyles}>Guess My Number</h1>
        </div>

        <div className="middleSection mb-4" style={middleSectionStyles}>
          <p>
            Score: <span>{score}</span>
          </p>
          <p>
            High Score: <span>{highScore}</span>
          </p>
          <p>{output}</p>
        </div>

        <div className="inputArea">
          <input
            type="number"
            className="form-control mb-3"
            style={inputStyles}
            onChange={inputHandler}
          />
          <div className="buttons mb-3" style={buttonContainerStyles}>
            <button
              className="btn btn-primary me-2"
              style={buttonStyles}
              onClick={checkHandler}
            >
              Guess
            </button>
            <button
              className="btn btn-secondary"
              style={buttonStyles}
              onClick={relaodGame}
            >
              Restart
            </button>
          </div>
          <button
            className="btn btn-danger"
            style={buttonStyles}
            onClick={resetLocalStorage}
          >
            Reset Score
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameDisplayer;
