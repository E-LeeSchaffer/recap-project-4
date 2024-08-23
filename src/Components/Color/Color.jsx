import { useEffect, useState } from "react";
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

  function handleEditMode() {
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
      setConfirmationMessage("SUCCESSFULLY COPIED!");
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
      <p className="notification-message">{confirmationMessage}</p>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <ContrastDisplay hex={color.hex} contrastText={color.contrastText} />
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
            <button type="button" onClick={handleEditMode}>
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

function ContrastDisplay({ hex, contrastText }) {
  const [fetchResult, setFetchResult] = useState(null);

  //fetchData();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            method: "POST",
            body: JSON.stringify({ colors: [hex, contrastText] }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch contrast data");
        }

        const contrastData = await response.json();
        const contrastScore = contrastData.overall;
        console.log(contrastData);
        setFetchResult(contrastScore);
      } catch (error) {
        console.error("Error checking contrast:", error);
        return "Error fetching contrast data";
      }
    }
    fetchData();
  }, [hex, contrastText]);
  return (
    <>
      <p>Contrast Score: {fetchResult}</p>
    </>
  );
}
