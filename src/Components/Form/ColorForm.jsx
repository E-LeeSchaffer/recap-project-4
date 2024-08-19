import "./ColorForm.css";
import { uid } from "uid";
import ColorInput from "./ColorInput";

export default function ColorForm({
  onAddColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newColor = {
      id: uid(),
      role: data.role || initialData.role,
      hex: data.hex || initialData.hex,
      contrastText: data.contrastText || initialData.contrastText,
    };
    event.target.elements.role.focus();
    // console.log("object data:", event.target.elements.role);
    onAddColor(newColor);
    event.target.reset();
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input
        className="input-field"
        type="text"
        id="role"
        name="role"
        placeholder={initialData.role}
      />
      <label htmlFor="hex">Hex</label>
      <ColorInput
        className="input-field"
        id="hex"
        placeholder={initialData.hex}
      />
      <label htmlFor="contrastText">Contrast Text</label>
      <ColorInput
        className="input-field"
        id="contrastText"
        placeholder={initialData.contrastText}
      />
      <button className="button" type="submit">
        ADD COLOR
      </button>
    </form>
  );
}
