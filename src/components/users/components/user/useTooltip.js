import React, {useState, useEffect} from 'react';

const useTooltip = (node) => {
    useEffect(() =>
    {
      compareEmailScrollSize();
    }, []);
  
    const [isTooltipDisable, setTooltipDisable] = useState(true);
  
    const compareEmailScrollSize = () => {
      const scrollWidthLargerClientWidth = node.current.scrollWidth > node.current.clientWidth;
      setTooltipDisable(!scrollWidthLargerClientWidth);
    };
  
    return isTooltipDisable;
  
}

export default useTooltip;