import Color from "./Components/Color/Color.jsx";
import "./App.css";
import ColorForm from "./Components/Form/ColorForm.jsx";
import ThemeDisplay from "./Components/Theme/ThemeDisplay.jsx";
import { useEffect, useState } from "react";
import { initialThemes } from "./lib/themes.js";

export default function App() {
  const [themes, setThemes] = useState(initialThemes);
  console.log("Themes:", themes);
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  console.log("Selected Theme:", selectedTheme);

  useEffect(() => {
    if (themes.length > 0 && !selectedTheme) {
      setSelectedTheme(themes[0]);
    }
  }, []);

  async function addColorToTheme(newColor) {
    const updatedThemes = themes.map((theme) =>
      theme.id === selectedTheme.id
        ? { ...theme, colors: [newColor, ...theme.colors] }
        : theme
    );

    setThemes(updatedThemes);
    setSelectedTheme(
      updatedThemes.find((theme) => theme.id === selectedTheme.id)
    );
  }

  function deleteColorFromTheme(colorId) {
    const updatedThemes = themes.map((theme) =>
      theme.id === selectedTheme.id
        ? {
            ...theme,
            colors: theme.colors.filter((color) => color.id !== colorId),
          }
        : theme
    );

    setThemes(updatedThemes);
    setSelectedTheme(
      updatedThemes.find((theme) => theme.id === selectedTheme.id)
    );
  }

  function editColorInTheme(colorId, newProperties) {
    const updatedThemes = themes.map((theme) =>
      theme.id === selectedTheme.id
        ? {
            ...theme,
            colors: theme.colors.map((color) =>
              color.id === colorId ? { ...color, ...newProperties } : color
            ),
          }
        : theme
    );

    setThemes(updatedThemes);
    setSelectedTheme(
      updatedThemes.find((theme) => theme.id === selectedTheme.id)
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ThemeDisplay
        themes={themes}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        setThemes={setThemes}
      />
      <ColorForm onSubmit={addColorToTheme} />
      {selectedTheme && selectedTheme.colors.length === 0 ? (
        <p>No colors.. start by adding one!</p>
      ) : (
        <ul>
          {selectedTheme.colors.map((color) => {
            return (
              <li key={color.id} className="color-item">
                <Color
                  color={color}
                  onDelete={deleteColorFromTheme}
                  onEdit={editColorInTheme}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
