import React from 'react'
import { animateScroll } from "react-scroll";

import Logo from '~assets/logo.svg';

function HeaderLogo() {
    return (
        <>
            <a
                className="header__logo"
                onClick={() => animateScroll.scrollToTop()}
            >
                <img
                    src={Logo}
                    alt="Logo"
                />
            </a>

        </>
    )
}

export default HeaderLogo;
