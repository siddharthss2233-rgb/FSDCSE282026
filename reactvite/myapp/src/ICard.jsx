import React from "react";

function ICard({ data }) {
  return (
    <div
      style={{
        border: "5px solid red",
        width: "250px",
        height: "400px",
        textAlign: "center",
      }}
    >
      <img
        src={data.pic}
        alt={data.name}
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          marginTop: "10px",
        }}
      />

      <h2>Roll: {data.roll}</h2>
      <h2>Name: {data.name}</h2>
      <h2>Branch: {data.branch}</h2>
      <h2>College: {data.college}</h2>
    </div>
  );
}

export default ICard;
