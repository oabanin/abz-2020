import React, { useState } from 'react';
import HeaderLogo from "./components/header-logo"
import Menu from './components/menu';
import BurgerMenu from './components/burger-menu';
import { useBurger } from './components/burger-menu/useBurger';

const Header = () => {
	const { burgerActive, closeBurgerMenu, openBurgerMenu } = useBurger();
	return (
		<header className="header">
			<BurgerMenu active={burgerActive} closeBurger={closeBurgerMenu} />
			<div className="container-fluid">
				<div className="row h-100">
					<div className="col-lg-2 col-md-2 col-sm-6 col-6 d-flex align-items-center">
						<HeaderLogo />
					</div>
					<div className="col-lg-6 offset-lg-4 col-md-8 offset-md-2 col-sm-6 col-6">
						<Menu />
						<div className="header__burger">
							<button className="burgerBtn" type="button" onClick={openBurgerMenu} />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;

