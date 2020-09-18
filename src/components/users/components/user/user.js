import React, { useEffect, useRef, useState } from 'react';

const User = ({photo, name, job, mail, phone}) => {

  useEffect(() => compareSize(), []);

  const node = useRef();

  const [isTooltipDisable, setTooltipDisable] = useState(true);

  const compareSize = () => {
    const scrollWidthLargerClientWidth = node.current.scrollWidth > node.current.clientWidth;
    setTooltipDisable(!scrollWidthLargerClientWidth);
  };

  return(
     <div className="col-md-4">
            <img className="users__photo" src={photo}/>
            <div className="users__info">
              <h2 className="users__name">{name}</h2>
              <div className="users__job">{job}</div>
              <a ref={node} data-tip-disable={isTooltipDisable} data-tip={mail} className="users__email" href={`mailto:${mail}`}>{mail}</a>
              <div className="users__phone">{phone}</div>
            </div>
      </div>
    );
}

export default User;
