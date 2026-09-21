import ICard from "./ICard";

import bheemImg from "./images/bheem.jpg";
import idImg from "./images/id.jpeg";
import sidImg from "./images/sid.PNG";

function ICardGallery() {
  const student = {
    pic: sidImg,
    roll: "34365",
    name: "Bheem",
    branch: "CSE",
    college: "ABES Engineering College",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <ICard data={student} />
    </div>
  );
}

export default ICardGallery;
