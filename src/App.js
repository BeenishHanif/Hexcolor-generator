import { useState } from "react";
import ColorBox from "./ColorBox";
import InputColor from "./InputColor";

function App() {
  const [hexColor, setHexColor] = useState("");
  const [colorValue, setcolorValue] = useState("");
  const [darkText, setdarkText] = useState(true);
  return (
    <div className="App">
      <ColorBox
        colorValue={colorValue}
        hexColor={hexColor}
        darkText={darkText}
      />
      <InputColor
        colorValue={colorValue}
        setcolorValue={setcolorValue}
        setHexColor={setHexColor}
        setdarkText={setdarkText}
        darkText={darkText}
      />
    </div>
  );
}

export default App;
