import { useState } from "react";
import cat from "./assets/Curious Ginger Kitten on Purple.png";

export default function ChangeBgColor() {
  const [red, setRed] = useState(228);
  const [green, setGreen] = useState(176);
  const [blue, setBlue] = useState(70);

  const [catHeight, setCatHeight] = useState(180);
  const [catWidth, setCatWidth] = useState(180);

  const [angle, setAngle] = useState(0);

  
  function setColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  
  function enhacneHeight() {
    setCatHeight(catHeight + 20);
  }


  function enhacneWidth() {
    setCatWidth(catWidth + 20);
  }


  function rotateImage() {
    setAngle(angle + 30);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>ChangeBgColor</h2>

      
      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          width: "300px",
          height: "300px",
          margin: "20px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={cat}
          alt="cat"
          style={{
            width: `${catWidth}px`,
            height: `${catHeight}px`,
            objectFit: "fill",
            transform: `rotate(${angle}deg)`,
          }}
        />
      </div>

   
      <div>
        <button onClick={setColor}>Change Background</button>

        <button onClick={enhacneHeight}>Increase Height</button>

        <button onClick={enhacneWidth}>Increase Width</button>

        <button onClick={rotateImage}>Rotate Image</button>
      </div>

      
      <p>
        Color code: {red}, {green}, {blue}
      </p>

      <p>
        Width: {catWidth}px | Height: {catHeight}px | Angle: {angle}°
      </p>
    </div>
  );
}
