import React from "react";
import GameDisplayer from "./GameDisplayer";



function GuessMyNumber() {

  const [randomNum, setRamdomNun] = React.useState<number | undefined>();

  React.useEffect(() => {
    randNumGenerator();
  }, []);

  const randNumGenerator = () => {
    let num1 = Math.floor(Math.random() * 20) + 1;
    setRamdomNun(num1);
  };

  return (
    <div>
      <GameDisplayer randNum={randomNum || 0} />
    </div>
  );
}

export default GuessMyNumber;