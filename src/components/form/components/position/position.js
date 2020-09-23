import React from 'react';

const Position = ({id, name}) => {


  return (
        <div className="form__radioWrapper">
            <input className="form__radio" name="form__radio" id={`form__radio${id}`} type="radio"/>
            <label className="form__radioLabel" htmlFor={`form__radio${id}`}>{name}</label>
        </div>
    );

}

export default Position;
