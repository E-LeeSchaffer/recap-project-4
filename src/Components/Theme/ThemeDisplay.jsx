export default function ThemeDisplay({
  themes,
  setThemes,
  selectedTheme,
  setSelectedTheme,
}) {
  if (!selectedTheme) {
    return null;
  }
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
