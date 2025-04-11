export default function Card({
  card,
  onCardClick,
  onLikeClick,
  onDeleteClick,
}) {
  const { name, link, isLiked } = card;

  return (
    <li className="cards__container">
      <button className="cards__button-remove" onClick={onDeleteClick}>
        <img
          src={link}
          alt={name}
          className="cards__image"
          onClick={() => onCardClick(card)}
        />
      </button>
      
      <img
        src="/imagens/Trash.png"
        alt="Deletar"
        className="cards__delete"
        onClick={onDeleteClick}
      />

      <div className="cards__container-title">
        <h3 className="cards__container-name">{name}</h3>
        <button
          className={`cards__button-like ${
            isLiked ? "cards__button-like_active" : ""
          }`}
          type="button"
          onClick={onLikeClick}
        />
      </div>
    </li>
  );
}
