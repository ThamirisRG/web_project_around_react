export default function EditAvatar() {
    return (
      <form className="popup__form" name="edit-avatar" noValidate>
        <label className="popup__field">
          <input
            type="url"
            name="avatar"
            id="avatar-link"
            className="popup__input"
            placeholder="Link da imagem do avatar"
            required
          />
          <span className="popup__error" id="avatar-link-error"></span>
        </label>
        <button className="button popup__button" type="submit">
          Salvar
        </button>
      </form>
    );
  }
  