import api from "../utils/Api";
import React from "react";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState(
    "Исследователь океана"
  );
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then(res => {
        setCards(res);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <div
            className="profile__avatar-edit-button"
            onClick={props.onEditAvatar}
          ></div>
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
            alt="Фотография профиля"
          ></div>
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
          <button
            className="profile__edit-button button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-button button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="places" aria-label="Фотографии">
        <ul className="places__list">
          {cards.map(card => (
            <Card card={card} onCardClick={props.onCardClick} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
