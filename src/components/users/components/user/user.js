import React, { useEffect, useRef, useState } from 'react';

import PhotoCover from '~assets/photo-cover.svg';

// const useTooltip = (node) => {
//   const [isTooltipDisable, setTooltipDisable] = useState(true);

//   const compareEmailScrollSize = () => {
//     const scrollWidthLargerClientWidth = node.current.scrollWidth > nodeEmail.current.clientWidth;
//     setTooltipDisable(!scrollWidthLargerClientWidth);
//   };

// }

const User = ({email, name, phone, position, photo}) => {
  const nodeEmail = useRef();
  const nodeName=useRef();

  useEffect(() =>
    {
      compareEmailScrollSize();
      checkNameCountLines();
    }, []);

  const [isTooltipDisable, setTooltipDisable] = useState(true);
  const [isNameMultiline, setMultilineMargin] = useState(false);

  const compareEmailScrollSize = () => {
    const scrollWidthLargerClientWidth = nodeEmail.current.scrollWidth > nodeEmail.current.clientWidth;
    setTooltipDisable(!scrollWidthLargerClientWidth);
  };

  const checkNameCountLines = () => {
    const offsetHeight = nodeName.current.offsetHeight;
    const lineHeight = parseInt(window.getComputedStyle(nodeName.current).getPropertyValue('line-height'));
    setMultilineMargin(offsetHeight > lineHeight);
  }

  return(
     <div className="col-md-4">
            <img className="users__photo" 
            src={photo} 
            alt={name}
            onError={e => e.target.src = PhotoCover}/>
            <div className="users__info">
              <h2 ref={nodeName} className="users__name" >{name}</h2>
              <div className="users__position">{position}</div>
              <a ref={nodeEmail} data-tip-disable={isTooltipDisable} data-tip={email} className="users__email" href={`mailto:${email}`}>{email}</a>
              <div className="users__phone">{phone}</div>
            </div>
      </div>
    );
}

export default User;

