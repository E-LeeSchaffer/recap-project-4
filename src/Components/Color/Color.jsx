import { useState } from "react";
import "./Color.css";
import ColorForm from "../Form/ColorForm";

export default function Color({ color, onDelete, onEdit }) {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  function toggleDeleteButton() {
    setShowDeleteButton(!showDeleteButton);
  }

  function cancelDelete() {
    setShowDeleteButton(false);
  }
  console.log(color);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleUpdateColor(updatedColor) {
    onEdit(color.id, updatedColor);
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(color.hex);
      console.log("Hex code copied to clipboard:", color.hex);
      setConfirmationMessage("Color copied to clipboard");
      setTimeout(() => {
        setConfirmationMessage("");
      }, 3000);
    } catch (error) {
      console.error("failed to copy text:", error.message);
    }
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <button type="button" onClick={handleCopy}>
        COPY
      </button>{" "}
      <p>{confirmationMessage}</p>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {isEditing ? (
        <>
          <ColorForm
            onSubmit={handleUpdateColor}
            buttonText="UPDATE COLOR"
            initialData={color}
          />

          <button type="button" onClick={handleCancel}>
            CANCEL
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={toggleDeleteButton}
            className={showDeleteButton ? "really-delete-button" : ""}
          >
            {showDeleteButton ? "Really delete?" : "DELETE"}
          </button>
          {!isEditing && !showDeleteButton && (
            <button type="button" onClick={handleEdit}>
              EDIT
            </button>
          )}
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
        </>
      )}
    </div>
  );
}
