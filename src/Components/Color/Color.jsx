import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDelete }) {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  function toggleDeleteButton() {
    setShowDeleteButton(!showDeleteButton);
  }

  function cancelDelete() {
    setShowDeleteButton(false);
  }
  console.log(color);
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <button
        type="button"
        onClick={toggleDeleteButton}
        className={showDeleteButton ? "really-delete-button" : ""}
      >
        {showDeleteButton ? "Really delete?" : "DELETE"}
      </button>
      {showDeleteButton && (
        <>
          <button type="button" onClick={cancelDelete}>
            Cancel
          </button>

          <button type="button" onClick={() => onDelete(color.id)}>
            DELETE
          </button>
        </>
      )}
    </div>
  );
}
