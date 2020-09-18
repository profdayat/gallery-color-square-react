import React, { Fragment, useState } from "react";
import MultiSelect from "react-multi-select-component";
import Grid from "./Grid";

const MultipleSelectComp = () => {
  const options = [
    { label: "Black", value: "#000000" },
    { label: "Blue", value: "#0000FF" },
    { label: "Navy", value: "#000080" },
    { label: "Cyan", value: "#00FFFF" },
    { label: "Cadet Blue", value: "#5F9EA0" },
    { label: "Sky Blue", value: "#87CEEB" },
    { label: "Indigo", value: "#4B0082" },
    { label: "Cornsilk", value: "#FFF8DC" },
    { label: "Wheat", value: "#F5DEB3" },
    { label: "Rosy Brown", value: "#BC8F8F" },
    { label: "Coffee", value: "#6F4E37" },
    { label: "Chocolate", value: "#7B3F00" },
    { label: "Brown", value: "#A52A2A" },
    { label: "Maroon", value: "#800000" },
    { label: "Violet", value: "#7F00FF" },
    { label: "Green", value: "#008000" },
    { label: "Gray", value: "#808080" },
    { label: "Lime", value: "#BFFF00" },
    { label: "Sea Green", value: "#2E8B57" },
    { label: "Spring Green", value: "#00FF7F" },
    { label: "Chartreuse", value: "#7FFF00" },
    { label: "Olive Drab", value: "#6B8E23" },
    { label: "Pink", value: "#FD6C9E" },
    { label: "Deep Pink", value: "#FF1493" },
    { label: "Purple", value: "#800080" },
    { label: "Dark Red", value: "#8B0000	" },
    { label: "Red", value: "#FF0000" },
    { label: "Crimson", value: "#DC143C" },
    { label: "Tomato", value: "#FF6347" },
    { label: "Salmon", value: "#FA8072" },
    { label: "Lavender", value: "#E6E6FA" },
    { label: "Magenta", value: "#FF00FF" },
    { label: "Amethyst", value: "#9966CC" },
    { label: "Orange", value: "#FF6600" },
    { label: "Moccasin", value: "#FFE4B5" },
    { label: "Khaki", value: "#F0E68C" },
    { label: "Dark Khaki", value: "#BDB76B" },
    { label: "Gold", value: "#FFD700" },
    { label: "Yellow", value: "#FFFF00" },
    { label: "White", value: "#FFFFFF" },
  ];

  const [selected, setSelected] = useState(options);

  return (
    <Fragment>
      <div style={{ width: 400 }}>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy={""}
        />
      </div>

      <div style={{ padding: 20 }}></div>
      <Grid valuep={selected} />
    </Fragment>
  );
};

export default MultipleSelectComp;
