import React from 'react';

import Logo from '~assets/logo.svg';
import Menu from './components/menu';

const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<a className="header__logo" href="#">
					<img 
					 src={Logo}
					 alt="Logo"
					 />
				</a>
				<Menu/>
			</div>
		</header>
	)
}

export default Header;