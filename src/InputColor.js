import React from "react";
import colorNames from "colornames";

const InputColor = ({
  colorValue,
  setcolorValue,
  setHexColor,
  setdarkText,
  darkText,
}) => {
  return (
    <div>
      <form
        className="input-color"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          autoFocus
          type="text"
          placeholder="Add color name"
          required
          value={colorValue}
          onChange={(e) => {
            setHexColor(colorNames(e.target.value));
            setcolorValue(e.target.value);
          }}
        ></input>
        <button onClick={() => setdarkText(!darkText)}>TOGGLE</button>
      </form>
    </div>
  );
};

export default InputColor;
