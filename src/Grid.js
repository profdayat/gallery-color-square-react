import React, { Component } from "react";
import "./Grid.css";
import Square from "./Square";

export class Grid extends Component {
  constructor(props) {
    super(props);
    console.log("==> constructor");
    this.state = {
      value: "",
    };
  }

  render() {
    console.log("render");

    return (
      <div className="grid-container">
        {this.props.valuep.map((value) => {
          return <Square key={value.value} color={value} />;
        })}
      </div>
    );
  }
}

export default Grid;
