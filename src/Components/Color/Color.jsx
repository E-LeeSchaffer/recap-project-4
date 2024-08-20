import "./Color.css";

export default function Color({
  color,
  onToggleDelete,
  showDeleteButton,
  onCancelDelete,
  onDelete,
}) {
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
        onClick={() => onToggleDelete(color.id)}
        className={showDeleteButton === color.id ? "really-delete-button" : ""}
      >
        {showDeleteButton === color.id ? "Really delete?" : "DELETE"}
      </button>
      {showDeleteButton === color.id && (
        <>
          <button type="button" onClick={onCancelDelete}>
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
