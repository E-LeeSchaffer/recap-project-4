import "./ColorForm.css";
import { uid } from "uid";

export default function ColorForm({
  onAddColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newColor = { id: uid(), ...data };
    onAddColor(newColor);
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input
        className="input-field"
        type="text"
        id="role"
        name="role"
        defaultValue={initialData.role}
      />
      <label htmlFor="hex">Hex</label>
      <input
        className="input-field"
        type="text"
        id="hex"
        name="hex"
        defaultValue={initialData.hex}
      />
      <label htmlFor="contrastText">Contrast Text</label>
      <input
        className="input-field"
        type="text"
        id="contrastText"
        name="contrastText"
        defaultValue={initialData.contrastText}
      />
      <button className="button" type="submit">
        ADD COLOR
      </button>
    </form>
  );
}
