import React from 'react';
import HeaderLogo from "./components/header-logo"
import Menu from './components/menu';
import BurgerMenu from './components/burger-menu';


const Header = () => {
	return (
		<header className="header">
			<BurgerMenu />
			<div className="container-fluid">
				<div className="row h-100">
					<div className="col-lg-2 col-md-2 col-sm-6 col-6 d-flex align-items-center">
						<HeaderLogo />
					</div>
					<div className="col-lg-6 offset-lg-4 col-md-8 offset-md-2 col-sm-6 col-6">
						<Menu />
						<div className="header__burger">
							<button className="burgerBtn" type="button" />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;

