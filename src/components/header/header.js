import React from 'react';
import { animateScroll } from "react-scroll";

import Logo from '~assets/logo.svg';
import BurgerMenuIcon from '~assets/menu-icon.svg';
import Menu from './components/menu';

const Header = () => {
	return (
		<header className="header">
			<div className="container-fluid">
				<div className="row h-100">
					<div className="col-lg-2 col-md-2 col-sm-6 col-6 d-flex align-items-center">
						<a
							className="header__logo"
							onClick={() => animateScroll.scrollToTop()}
						>
							<img
								src={Logo}
								alt="Logo"
							/>
						</a>
					</div>
					<div className="col-lg-6 offset-lg-4 col-md-8 offset-md-2 col-sm-6 col-6">
						<Menu />
						<div className="header__burger">
							<img
								src={BurgerMenuIcon}
								alt="Burger Menu Icon" />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;