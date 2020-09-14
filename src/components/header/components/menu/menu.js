import React from 'react';

const Menu = () => {
	return (
		<>
			<nav className="menu">
				<a className="menu__link" href="#about">About me</a>
				<a className="menu__link" href="#relationships">Relationships</a>
				<a className="menu__link" href="#requirements">Requirements</a>
				<a className="menu__link" href="#users">Users</a>
				<a className="menu__link" href="#sign-up">Sign Up</a>
			</nav>
		</>
	)
}

export default Menu;