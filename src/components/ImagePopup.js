function ImagePopup() {
  return(
    <div className="popup popup_type_picture">
    <figure className="popup__illustration">
      <button className="popup__close-button button" type="button"></button>
      <img className="popup__image" />
      <figcaption className="popup__caption"></figcaption>
    </figure>
  </div>
  )
}

export default ImagePopup