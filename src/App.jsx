import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color.jsx";
import "./App.css";
import ColorForm from "./Components/Form/ColorForm.jsx";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  function addColor(newColor) {
    console.log("New color added:", newColor);
    setColors([newColor, ...colors]);
  }

  function deleteColor(id) {
    const updatedColors = colors.filter((color) => color.id !== id);
    setColors(updatedColors);
  }

  function editColor(id, newProperties) {
    const updatedColors = colors.map((color) =>
      color.id === id ? { ...color, ...newProperties } : color
    );
    setColors(updatedColors);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmit={addColor} />
      {colors.length === 0 ? (
        <p>No colors.. start by adding one!</p>
      ) : (
        <ul>
          {colors.map((color) => {
            return (
              <li key={color.id} className="color-item">
                <Color
                  color={color}
                  onDelete={deleteColor}
                  onEdit={editColor}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
