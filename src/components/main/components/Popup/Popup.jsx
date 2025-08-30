import close from "../../../../assets/close__image (1).png";
export default function Popup(props) {
  const { title, children, onClose } = props;
  return (
    <div className="popup">
      <div
        className={`popup__container ${!title ? "popup__container_image" : ""}`}
      >
        <div className="popup__form-container">
          <button
            className={`popup__button ${!title ? "popup__button_image" : ""}`}
            onClick={onClose}
          >
            <img src={close} alt="close" className="popup__close" />
          </button>
          {title && <h3 className="popup__title">{title}</h3>}
          {children}
        </div>
      </div>
    </div>
  );
}