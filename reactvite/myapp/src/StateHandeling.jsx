import React, { use, useState } from "react";

export default function ChnageBgColor() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(0);
  function setColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));

    alert("bg color changed");
  }
  return (
    <div>
      ChnageBgColor
      <h2></h2>
      <div
        style={{
          backgroundColor: `rgb(${red},${green},${blue})`,
          width: "200px",
          height: "200px",
        }}
      >
        <h1> .</h1>
      </div>
      <button onClick={setColor}>ChnageBgColor1</button>
      <div></div>
    </div>
  );
}
