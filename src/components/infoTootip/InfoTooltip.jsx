// import React from "react";
// Este componente exibirá uma mensagem de sucesso ou erro após o registro.
import attentiongreen from "../../assets/uniongreen.png";
import attentionred from "../../assets/unionred.png";
import close from "../../assets/close__image (1).png";

function InfoTooltip({ isOpen, onClose, isSuccess }) {
  return (
    <div className={`popup-info ${isOpen ? "popup-info_opened" : ""}`}>
      <div className="popup-info__container">
        <button type="button" className=" popup-info__close-button">
          <img src={close} alt="fechar" onClick={onClose} />
        </button>
        <img
          src={isSuccess ? attentiongreen : attentionred}
          alt="Icone"
          className="popup-info__icon"
        />
        <h2 className="popup-info__title">
          {isSuccess
            ? "Vitória! Você precisa se registrar."
            : "Ops, algo saiu deu errado! Por favor, tente novamente."}
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;