import React from 'react';
import { Link } from "react-scroll";

const Menu = () => {
  const items = [
    { href: "about", value: "About me" },
    { href: "form", value: "Relationships" },
    { href: "form", value: "Requirements" },
    { href: "users", value: "Users" },
    { href: "form", value: "Sign Up" },
  ]
  return (
    <>
      <nav className="menu">
        {items.map(item => <Link
          key={item.value}
          className="menu__link"
          to={item.href}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {item.value}
        </Link>)}
      </nav>
    </>
  )
}

export default Menu;
