const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "40px",
      right: "-10px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "130px",
      background: "black",
      position: "absolute",
      top: "80px",
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: "-90px",
      rotate: "80deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: "0px",
      rotate: "-80deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "200px",
      right: "-90px",
      rotate: "80deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "200px",
      right: 0,
      rotate: "-80deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "40px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "40px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}