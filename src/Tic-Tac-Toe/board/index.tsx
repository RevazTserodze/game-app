import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useState } from "react";
import Square from "../square";
import "./board.css";

function Board(props: { currentPlayer: string; switchPlayer: () => void }) {
  const squareIds = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [squares, setSquares] = useState<Array<string>>(
    squareIds.map(() => "")
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");

  const checkForWinner = (squares: Array<string>) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return true;
      }
    }
    return false;
  };

  const checkForTie = (squares: Array<string>) => {
    return squares.every((element) => element !== "");
  };

  const handleOnclick = (i: number) => {
    return () => {
      if (squares[i] === "" && !winner) {
        const squaresCopy = [...squares];
        squaresCopy[i] = props.currentPlayer;
        setSquares(squaresCopy);
        if (checkForWinner(squaresCopy)) {
          setWinner(props.currentPlayer);
          setShowModal(true);
        } else if (checkForTie(squaresCopy)) {
          setWinner("nobody");
          setShowModal(true);
        } else {
          props.switchPlayer();
        }
      }
    };
  };

  const handleClose = () => {
    setShowModal(false);
    setWinner("");
  };

  return (
    <div
      className="board bg-dark p-5"
      style={{ borderRadius: "50px", boxShadow: "0px 0px 10px 15px black" }}
    >
      {squareIds.map((i) => (
        <Square
          key={i}
          handleOnClick={handleOnclick(i)}
          selected={squares[i]}
        />
      ))}

      <Dialog
        open={showModal}
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The winner is {winner}!
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Board;
