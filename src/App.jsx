import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color.jsx";
import "./App.css";
import "./Components/Form/ColorButton.css";
import ColorForm from "./Components/Form/ColorForm.jsx";
import { useState } from "react";

export default function App() {
  const [colors, setColors] = useState(initialColors);

  function addColor(newColor) {
    console.log("New color added:", newColor);
    setColors([newColor, ...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={addColor} />
      <ul>
        {colors.map((color) => {
          return (
            <li key={color.id}>
              <Color color={color} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
