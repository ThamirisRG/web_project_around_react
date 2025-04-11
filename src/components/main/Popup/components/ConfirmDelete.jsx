export default function ConfirmDelete({ onConfirm, onClose }) {
    return (
      <div className="popup__container popup__container-confirm">
        <button className="popup__button" onClick={onClose}></button>
        <h2 className="popup__title-confirm">Tem certeza?</h2>
        <button
          type="button"
          className="popup__save-button popup__button-confirm"
          onClick={onConfirm}
        >
          Sim
        </button>
      </div>
    );
  }
  