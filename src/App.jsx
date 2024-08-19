import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color.jsx";
import "./App.css";
import "./Components/Form/ColorButton.css";
import ColorForm from "./Components/Form/ColorForm.jsx";
import { useState } from "react";

export default function App() {
  const [colors, setColors] = useState(initialColors);
  const [showDeleteButton, setShowDeleteButton] = useState(null);
  const [buttonText, setButtonText] = useState({});

  function addColor(newColor) {
    console.log("New color added:", newColor);
    setColors([newColor, ...colors]);
  }

  function deleteColor(id) {
    const updatedColors = colors.filter((color) => color.id !== id);
    setColors(updatedColors);
  }

  function toggleDeleteButton(id) {
    setShowDeleteButton((prevId) => (prevId === id ? null : id));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={addColor} />
      <ul>
        {colors.map((color) => {
          return (
            <li key={color.id} className="color-item">
              <Color color={color} />
              <button
                type="button"
                onClick={() => toggleDeleteButton(color.id)}
              >
                {showDeleteButton === color.id ? "Really delete?" : "DELETE"}
              </button>
              {showDeleteButton === color.id && (
                <button type="button" onClick={() => deleteColor(color.id)}>
                  DELETE
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
