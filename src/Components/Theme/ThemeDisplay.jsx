import { useState } from "react";

export const initialThemes = [
  {
    id: "t1",
    name: "Default Theme",
    colors: [
      {
        id: "c1",
        role: "primary main",
        hex: "#ff4a11",
        contrastText: "#FFFFFF",
      },
      {
        id: "c2",
        role: "primary dark",
        hex: "#c73e0b",
        contrastText: "#FFFFFF",
      },
      {
        id: "c3",
        role: "primary light",
        hex: "#ff7a3e",
        contrastText: "#000000",
      },
      {
        id: "c4",
        role: "secondary main",
        hex: "#5C6BC0",
        contrastText: "#FFFFFF",
      },
      {
        id: "c5",
        role: "secondary dark",
        hex: "#3949AB",
        contrastText: "#FFFFFF",
      },
    ],
  },

  {
    id: "t2",
    name: "2nd Theme",
    colors: [
      {
        id: "c6",
        role: "secondary light",
        hex: "#9FA8DA",
        contrastText: "#000000",
      },
      {
        id: "c7",
        role: "background main",
        hex: "#252629",
        contrastText: "#FFFFFF",
      },
      {
        id: "c8",
        role: "background dark",
        hex: "#1b1d1f",
        contrastText: "#FFFFFF",
      },
      {
        id: "c9",
        role: "background light",
        hex: "#43464b",
        contrastText: "#FFFFFF",
      },
    ],
  },
];

export default function ThemeDisplay() {
  const [themes, setThemes] = useState(initialThemes);
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  console.log("Selected Theme:", selectedTheme);

  function handleAddTheme() {
    const newTheme = {
      id: `t${themes.length + 1}`,
      name: `New Theme ${themes.length + 1}`,
      colors: [],
    };
    setThemes([...themes, newTheme]);
    setSelectedTheme(newTheme);
  }

  function handleEditTheme() {
    console.log("handle edit theme");
    //Show Update and Cancel Button to edit Theme name
  }

  function handleDeleteTheme() {
    console.log("handle delete theme");
    //Show up new Buttons to confirm deletion: YES DELETE, CANCEL
  }

  //Select of option has to show other colors. Initial colors per theme to be saved somewhere.
  return (
    <>
      <select
        value={selectedTheme.id}
        onChange={(event) =>
          setSelectedTheme(
            themes.find((theme) => theme.id === event.target.value)
          )
        }
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
      <button onClick={handleAddTheme}>ADD</button>
      <button>EDIT</button>
      <button>DELETE</button>
    </>
  );
}
