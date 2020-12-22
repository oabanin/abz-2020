import React from 'react';
import ImgClose from './close.svg'
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const Modal = ({closeModal, title, text, btnText}) => {
  return (
    <>
      <div className="modal__container">
        <div className="modal__header">
          <h3 className="modal__title">{title}</h3>
          <button onClick={closeModal} className="modal__close">
            <img src={ImgClose} />
          </button>
        </div>
      </div>
      <div className="modal__container">
        <div className="modal__text">
          {text}
        </div>
      </div>
      <div className="modal__container">
        <div className="modal__footer">

          <button onClick={closeModal} className="modal__btn">{btnText}</button>
        </div>
      </div>

    </>
  )
}

export default Modal;
