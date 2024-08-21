import "./ColorForm.css";
import { uid } from "uid";
import ColorInput from "./ColorInput";

export default function ColorForm({
  onSubmit,
  buttonText = "ADD COLOR",
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newColor = {
      id: initialData || uid(),
      //   ...initialData,
      //   ...data,
      role: data.role || initialData.role,
      hex: data.hex || initialData.hex,
      contrastText: data.contrastText || initialData.contrastText,
    };
    event.target.elements.role.focus();
    // console.log("object data:", event.target.elements.role);
    onSubmit(newColor);
    event.target.reset();
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input type="text" id="role" name="role" placeholder={initialData.role} />
      <label htmlFor="hex">Hex</label>
      <ColorInput id="hex" placeholder={initialData.hex} />
      <label htmlFor="contrastText">Contrast Text</label>
      <ColorInput id="contrastText" placeholder={initialData.contrastText} />
      <button className="button" type="submit">
        {buttonText}
      </button>
    </form>
  );
}
