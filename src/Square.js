import React from "react";
import "./Square.css";

const Square = (props) => {
  return (
    <div style={{ position: "relative", backgroundColor: props.color.value }}>
      <div className="box-description">{props.color.label}</div>
    </div>
  );
};

export default Square;
