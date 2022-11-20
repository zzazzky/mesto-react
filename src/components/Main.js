import avatar from '../images/profile__avatar.jpg'

function Main(props) {
  return(
<main>
        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar-edit-button" onClick={props.onEditAvatar}></div>
            <img
              className="profile__avatar"
              src={avatar}
              alt="Фотография профиля" />
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <p className="profile__description">Исследователь океана</p>
            <button className="profile__edit-button button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <button className="profile__add-button button" type="button" onClick={props.onAddPlace}></button>
        </section>
        <section className="places" aria-label="Фотографии">
          <ul className="places__list">
            <template className="places__template">
              <li className="place">
                <button className="place__delete button"></button>
                <img className="place__image" />
                <div className="place__caption">
                  <h2 className="place__text"></h2>
                  <div className="place__like-container">
                    <button className="place__like-button button"></button>
                    <p className="place__like-number">0</p>
                  </div>
                </div>
              </li>
            </template>
          </ul>
        </section>
      </main>
)

}
  
  
export default Main