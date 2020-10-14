import React from 'react';
import ImgClose from './close.svg'

const Modal = () => {
  return (
    <>
      <div className="modal__container">
        <div className="modal__header">
          <h3 className="modal__title">Congratulations</h3>
          <button className="modal__close">
            <img src={ImgClose} />
          </button>
        </div>
      </div>
      <div className="modal__container">
        <div className="modal__text">
          You have successfully passed the registration
        </div>
      </div>
      <div className="modal__container">
        <div className="modal__footer">

          <button className="modal__btn">Great</button>
        </div>
      </div>

    </>
  )
}

export default Modal;
