import React from "react";

const ColorBox = ({ colorValue, hexColor, darkText }) => {
  return (
    <section
      className="section"
      style={{
        backgroundColor: colorValue,
        color: darkText ? "#FFF" : "#000",
      }}
    >
      <div style={{ position: "absolute", top: "50px", display: "flex" }}>
        <p>{colorValue ? colorValue : "Empty value"}</p>
        <p>{hexColor ? hexColor : null}</p>
      </div>
    </section>
  );
};

ColorBox.defaultProps = {
  colorValue: "Empty color value",
};

export default ColorBox;
