export default function ImagePopup({ card, onClose }) {
    if (!card) return null;
  
    function handleOverlayClick(e) {
      if (e.target.classList.contains('popup')) {
        onClose();
      }
    }
  
    return (
      <div className="popup popup-image popup_opened" onClick={handleOverlayClick}>
        <div className="popup__image-container">
          <button
            aria-label="Close modal"
            className="popup__close"
            type="button"
            onClick={onClose}
          />
          <img className="popup__image-open" src={card.link} alt={card.name} />
          <p className="popup__image-name">{card.name}</p>
        </div>
      </div>
    );
  }
  