import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color.jsx";
import "./App.css";
import "./Components/Form/ColorButton.css";
import ColorForm from "./Components/Form/ColorForm.jsx";
import { useState } from "react";

export default function App() {
  const [colors, setColors] = useState(initialColors);
  const [showDeleteButton, setShowDeleteButton] = useState(null);

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

  function cancelDelete() {
    setShowDeleteButton(null);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={addColor} />
      {colors.length === 0 ? (
        <p>No colors.. start by adding one!</p>
      ) : (
        <ul>
          {colors.map((color) => {
            return (
              <li key={color.id} className="color-item">
                <Color color={color} />
                <button
                  type="button"
                  onClick={() => toggleDeleteButton(color.id)}
                  className={
                    showDeleteButton === color.id ? "really-delete-button" : ""
                  }
                >
                  {showDeleteButton === color.id ? "Really delete?" : "DELETE"}
                </button>
                {showDeleteButton === color.id && (
                  <>
                    <button type="button" onClick={cancelDelete}>
                      Cancel
                    </button>

                    <button type="button" onClick={() => deleteColor(color.id)}>
                      DELETE
                    </button>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
