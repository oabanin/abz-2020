import React from 'react'
import HeaderLogo from "../header-logo";

function BurgerMenu() {
    return (
        <>
            <div className="overlay" />
            <div className="burger__container">
                <div className="burger__header">
                    <HeaderLogo />
                </div>
            </div>

        </>
    )
}

export default BurgerMenu;
