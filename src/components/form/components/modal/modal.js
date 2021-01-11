import React from 'react';
import ReactModal from 'react-modal';
import ImgClose from './close.svg';

import './modal.scss';

ReactModal.setAppElement('#root');

const Modal = ({
  closeModal, title, text, btnText,
}) => (
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
);

export default Modal;
