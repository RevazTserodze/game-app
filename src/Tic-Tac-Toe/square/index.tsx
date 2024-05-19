import React from "react";
import "./square.css";

function Square(props: {
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
  selected: string;
}) {
  const imageSrc = `./tic-tac-toeImgs/${
    props.selected ? props.selected : "square"
  }.png`;

  return (
    <div className="square">
      <button onClick={props.handleOnClick}>
        <img style={{ width:'200px'}} className="img-fluid" src={imageSrc} alt="square_image"></img>
      </button>
    </div>
  );
}

export default Square;
