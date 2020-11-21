import React from 'react';
import { Link } from "react-scroll";

const Menu = () => {
	return (
		<>
			<nav className="menu">
				<Link
					className="menu__link"
					to="about"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
				About me
				</Link>
				<a className="menu__link" href="#relationships">Relationships</a>
				<a className="menu__link" href="#requirements">Requirements</a>
				<Link
					className="menu__link"
					to="users"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					Users
				</Link>
				<Link
					className="menu__link"
					to="form"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					Sign Up
				</Link>
			</nav>
		</>
	)
}

export default Menu;