

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {wordToGuess.split("").map((letter, index) => (
        <div className="border-bottom mx-1" style={{ fontSize: "2rem" }} key={index}>
          <span
            className={`${
              guessedLetters.includes(letter) || reveal ? "" : "invisible"
            } ${!guessedLetters.includes(letter) && reveal ? "text-danger" : "text-dark"}`}
            style={{ fontFamily: "monospace", fontWeight: "bold" }}
          >
            {letter}
          </span>
        </div>
      ))}
    </div>
  );
}
