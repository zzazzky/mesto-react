function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="place">
      <button className="place__delete button"></button>
      <img
        className="place__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
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
