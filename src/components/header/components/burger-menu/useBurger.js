import React, { useState } from 'react';

const useBurger = () => {
    const [burgerActive, setActive] = useState(false);

    const closeBurgerMenu = () => setActive(false);
    const openBurgerMenu = () => setActive(true);

    return { burgerActive, closeBurgerMenu, openBurgerMenu }
}

export { useBurger };