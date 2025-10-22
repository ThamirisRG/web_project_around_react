import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  // 1) Começa controlado
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // 2) Sincroniza quando currentUser chegar/alterar
  useEffect(() => {
    setName(currentUser?.name ?? "");
    setDescription(currentUser?.about ?? "");
  }, [currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateUser({ name: name.trim(), about: description.trim() });
  };

  return (
    <form id="user-form" className="form" onSubmit={handleSubmit}>
      <fieldset className="form__fieldset">
        <div className="form__display">
          <input
            type="text"
            className="form__input form__input-name"
            id="name"
            name="name"
            placeholder="Nome"
            minLength="2"
            maxLength="40"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="error-message"></p>
        </div>

        <div className="form__display">
          <input
            type="text"
            className="form__input form__input-description"
            id="description"
            name="description"
            placeholder="Sobre mim"
            minLength="2"
            maxLength="200"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p className="error-message"></p>
        </div>

        <button id="button-save" className="form__button" type="submit">
          Salvar
        </button>
      </fieldset>
    </form>
  );
}
