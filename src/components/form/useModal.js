import React, {useState} from 'react';

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const closeModal = () => setIsOpen(false);
  
    const openModal = () => setIsOpen(true);
  
    const onAfterOpen = () => {
      const scrollWidth = window.innerWidth - document.body.offsetWidth + 'px';
      document.body.style.paddingRight = scrollWidth;
      document.body.style.overflow = "hidden";
    }
    const onAfterClose = () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "auto";
    }
  
    return { bind: { isOpen, onRequestClose: closeModal, onAfterOpen, onAfterClose }, closeModal, openModal }
  
  }

  export {useModal};