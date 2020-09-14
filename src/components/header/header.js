import React from 'react';

import Logo from '~assets/logo.svg';
import Menu from './components/menu';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="row h-100">
					<div className="col-lg-2 d-flex align-items-center">
						<a className="header__logo" href="#">
							<img 
							 src={Logo}
							 alt="Logo"
							 />
						</a>
					</div>
					<div className="col-lg-6 offset-lg-4">
						<Menu/>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;