export default function ColorForm({
  onAddColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddColor(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input
        type="text"
        id="role"
        name="role"
        defaultValue={initialData.role}
      />
      <label htmlFor="hex">Hex</label>
      <input type="text" id="hex" name="hex" defaultValue={initialData.hex} />
      <label htmlFor="contrastText">Contrast Text</label>
      <input
        type="text"
        id="contrastText"
        name="contrastText"
        defaultValue={initialData.contrastText}
      />
      <button type="submit">Add Color</button>
    </form>
  );
}
