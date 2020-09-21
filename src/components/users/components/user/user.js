import React, { useEffect, useRef, useState } from 'react';

const User = ({photo, name, job, mail, phone}) => {

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
            <img className="users__photo" src={photo}/>
            <div className="users__info">
              <h2 ref={nodeName} className="users__name" style={{ marginBottom: (isNameMultiline ? "10px" : "15px") }}>{name}</h2>
              <div className="users__job">{job}</div>
              <a ref={nodeEmail} data-tip-disable={isTooltipDisable} data-tip={mail} className="users__email" href={`mailto:${mail}`}>{mail}</a>
              <div className="users__phone">{phone}</div>
            </div>
      </div>
    );
}

export default User;
