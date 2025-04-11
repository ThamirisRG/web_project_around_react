export default function Popup({ title, children, onClose }) {
    return (
      <div className="popup" style={{ display: "flex", opacity: 1 }}>
        <div
          className={`popup__content ${
            !title ? "popup__content_content_image" : ""
          }`}
        >
          <button
            aria-label="Fechar popup"
            className="popup__close"
            type="button"
            onClick={onClose}
          />
          {title && <h3 className="popup__title">{title}</h3>}
          {children}
        </div>
      </div>
    );
  }
  