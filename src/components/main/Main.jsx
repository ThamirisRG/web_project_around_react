import { useState } from "react";
import Card from "./components/Card/Card";
import Popup from "./Popup/Popup";
import ImagePopup from "./Popup/components/ImagePopup";
import NewCard from "./Popup/components/NewCard";
import EditProfile from "./Popup/components/EditProfile";
import EditAvatar from "./Popup/components/EditAvatar";
import ConfirmDelete from "./Popup/components/ConfirmDelete";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardToDelete, setCardToDelete] = useState(null);

  const [cards, setCards] = useState([
    {
      isLiked: false,
      _id: '1',
      name: 'Yosemite Valley',
      link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    },
    {
      isLiked: false,
      _id: '2',
      name: 'Lake Louise',
      link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    }
  ]);
  

  const newCardPopup = {
    title: "Novo card",
    children: <NewCard />,
  };

  const editAvatarPopup = {
    title: "Editar avatar",
    children: <EditAvatar />,
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />
  };
  
  const confirmDeletePopup = {
    title: "Tem certeza?",
    children: <ConfirmDelete />
  };
  

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
    setSelectedCard(null);
    setCardToDelete(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleLikeCard(cardId) {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card._id === cardId ? { ...card, isLiked: !card.isLiked } : card
      )
    );
  }

  function handleRequestDelete(card) {
    setPopup({
      title: "Tem certeza?",
      children: <ConfirmDelete onConfirm={() => handleDelete(card)} />
    });
  }

  function handleDeleteCard(cardId) {
    setCards((prevCards) => prevCards.filter((card) => card._id !== cardId));
    handleClosePopup();
  }

  function handleLike(cardId) {
    // Aqui você pode atualizar o estado dos cards para alternar o like
    setCards((prevCards) =>
      prevCards.map((card) =>
        card._id === cardId ? { ...card, isLiked: !card.isLiked } : card
      )
    );
  }
  
  function handleDelete(cardId) {
    // Aqui você pode filtrar os cards e remover o com o ID correspondente
    setCards((prevCards) => prevCards.filter((card) => card._id !== cardId));
  }
  

  return (
    <main className="main page__section">
      {/* Seção do perfil */}
      <section className="profile">
        <div className="profile__image-container">
          <img
            src="/public/imagens/image_header.jpg"
            alt="Foto de perfil"
            className="profile__image"
          />
          <div className="profile__edit-overlay"></div>
          <div className="profile__edit-icon"></div>
          <button
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          >
            ✏️
          </button>
        </div>

        <div className="profile__card">
          <h2 className="profile__name">Jacques Cousteau</h2>
          <p className="profile__description">Explorador</p>
          <button
            className="profile__button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          >
            ✏️
          </button>
        </div>

        <button
          className="profile__add"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          ➕
        </button>
      </section>

      {/* Lista de cards */}
      <section className="cards">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={() => handleCardClick(card)}
            onLikeClick={() => handleLike(card._id)}
            onDeleteClick={() => handleDelete(card._id)}
          />
        ))}
      </section>

      {/* Popup genérico */}
      {popup && (
        <Popup title={popup.title} onClose={handleClosePopup}>
          {popup.children}
        </Popup>
      )}

      {/* Popup da imagem */}
      {selectedCard && (
        <Popup onClose={handleClosePopup}>
          <ImagePopup card={selectedCard} />
        </Popup>
      )}

      {/* Popup de confirmação de exclusão */}
      {cardToDelete && (
        <Popup onClose={handleClosePopup}>
          <ConfirmDelete onConfirm={() => handleDeleteCard(cardToDelete._id)} />
        </Popup>
      )}
    </main>
  );
}
