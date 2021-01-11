import React from 'react';

const Positions = ({ fetchedPositions, errors, register }) => {
  const positions = fetchedPositions.map((position) => (
    <div key={position.id} className="form__radioWrapper">
      <input
        className="form__radio"
        id={`form__radio${position.id}`}
        type="radio"
        name="position_id"
        value={position.id}
        ref={register({ required: 'Position is required' })}
      />
      <label className="form__radioLabel" htmlFor={`form__radio${position.id}`}>{position.name}</label>
    </div>
  ));

  return (
    <>
      {positions}
      {errors.position_id && <div className="form__error">{errors.position_id.message}</div>}
    </>
  );
};

export default Positions;
