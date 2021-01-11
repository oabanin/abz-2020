import React, { useRef } from 'react';

import useTooltip from './useTooltip';

import PhotoCover from '~assets/photo-cover.svg';

const User = ({
  email, name, phone, position, photo,
}) => {
  const nodeEmail = useRef();
  const isTooltipDisable = useTooltip(nodeEmail);

  phone = phone.split('').map((num, i) => (i === 3 || i === 5 || i === 8 || i === 10 ? `${num} ` : num)).join('');

  return (
    <div className="col-md-4 col-sm-4 users__card">
      <img
        className="users__photo"
        src={photo}
        alt={name}
        onError={(e) => e.target.src = PhotoCover}
      />
      <div className="users__info">
        <h2 className="users__name">{name}</h2>
        <div className="users__position">{position}</div>
        <a ref={nodeEmail} data-tip-disable={isTooltipDisable} data-tip={email} className="users__email" href={`mailto:${email}`}>{email}</a>
        <div className="users__phone">{phone}</div>
      </div>
    </div>
  );
};

export default User;
