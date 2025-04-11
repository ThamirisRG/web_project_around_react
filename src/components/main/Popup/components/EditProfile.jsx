import { useState } from "react";

export default function EditProfile() {
  const [name, setName] = useState("Jacques Cousteau");
  const [description, setDescription] = useState("Explorador");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Perfil atualizado:\nNome: ${name}\nDescrição: ${description}`);
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <label className="popup__field">
        <input
          type="text"
          className="popup__input"
          minLength="2"
          maxLength="40"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="popup__field">
        <input
          type="text"
          className="popup__input"
          minLength="2"
          maxLength="200"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button className="popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
