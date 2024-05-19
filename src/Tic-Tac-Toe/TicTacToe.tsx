import { useState } from "react";
import Board from "./board";
import Head from "./head";
import "./TicTacToe.css";

function TicTacToe() {
  const [currentPlayer, setCurrentPlayer] = useState<string>("x");

  const switchPlayer = () => {
    if (currentPlayer === "x") {
      setCurrentPlayer("o");
    } else {
      setCurrentPlayer("x");
    }
  };

  return (
    <div
      className="tic-tac-toe-container "
      style={{ marginTop: "130px", marginBottom: "150px" }}
    >
      <Head currentPlayer={currentPlayer} />
      <Board currentPlayer={currentPlayer} switchPlayer={switchPlayer} />
    </div>
  );
}

export default TicTacToe;
