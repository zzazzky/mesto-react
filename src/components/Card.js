function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li key={props.card._id} className="place">
      <button className="place__delete button"></button>
      <div
        className="place__image"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={handleClick}
      ></div>
      <div className="place__caption">
        <h2 className="place__text">{props.card.name}</h2>
        <div className="place__like-container">
          <button className="place__like-button button"></button>
          <p className="place__like-number">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
