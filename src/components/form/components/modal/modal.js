import React from 'react';

const Modal = () => {
  return (
    <>
      <div className="modal__container">
        <div className="modal__header">
            <h3 className="modal__title">Congratulations</h3>
        </div>
      </div>
      <hr/>
      <div className="modal__body">
        <div className="modal__container">
        You have successfully passed the registration
        </div>
      </div>
      <hr/>
      <div className="modal__footer">
        <div className="modal__container">
          <button className="modal__btn">Great</button>
        </div>
      </div>

    </>
    )
}

export default Modal;
