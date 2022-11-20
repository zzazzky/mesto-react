import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    isAddPlacePopupOpen && setAddPlacePopupOpen(false);
    isEditProfilePopupOpen && setEditProfilePopupOpen(false);
    isEditAvatarPopupOpen && setEditAvatarPopupOpen(false);
    isDeleteCardPopupOpen && setDeleteCardPopupOpen(false);
    selectedCard && setSelectedCard(false);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_content_profile-name"
            type="text"
            name="profile-name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__error popup__error_type_profile-name"></span>
          <input
            className="popup__input popup__input_content_description"
            type="text"
            name="profile-description"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__error popup__error_type_profile-description"></span>
        </PopupWithForm>
        <PopupWithForm
          name="add-card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_content_name"
            type="text"
            name="name"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="popup__error popup__error_type_name"></span>
          <input
            className="popup__input popup__input_content_link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error popup__error_type_link"></span>
        </PopupWithForm>
        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_content_avatar-link"
            type="url"
            name="avatar-link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error popup__error_type_avatar-link"></span>
        </PopupWithForm>
        <PopupWithForm
          name="delete-card"
          title="Вы уверены?"
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
