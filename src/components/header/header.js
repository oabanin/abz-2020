import React from 'react';
import { Link, animateScroll } from "react-scroll";

import Logo from '~assets/logo.svg';
import Menu from './components/menu';

const Header = () => {
	return (
		<header className="header">
			<div className="container-fluid">
				<div className="row h-100">
					<div className="col-lg-2 d-flex align-items-center">
						<Link 
						className="header__logo" 
						onClick={()=>animateScroll.scrollToTop()}
						>
							<img 
							 src={Logo}
							 alt="Logo"
							 />
						</Link>
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