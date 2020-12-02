import React from 'react'
import HeaderLogo from "../header-logo";
import { Link } from "react-scroll";

function BurgerMenu() {
  const items = [
    { href: "about", value: "About me" },
    { href: "form", value: "Relationships" },
    { href: "users", value: "Users" },
    { href: "form", value: "Sign Up" },
    { href: "form", value: "Terms And Conditions" },
    { href: "form", value: "How it works" },
    { href: "form", value: "Partnership" },
    { href: "form", value: "Help" },
    { href: "form", value: "Leave testimonial" },
    { href: "form", value: "Contact us" },
    { href: "form", value: "Articles" },
    { href: "form", value: "Our news" },
    { href: "form", value: "Testimonials" },
    { href: "form", value: "Licenses" },
    { href: "form", value: "Privacy Policy" },
  ];
  return (
    <div className="burger">
    <div className="overlay" />
      <div className="burger__header">
        <HeaderLogo />
      </div>
      <div className="burger__content">
        <ul>
          {items.map(item =>
            <li key={item.value}>
              <Link
                key={item.value}
                className="burger__link"
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item.value}
              </Link>
            </li>)
          }
        </ul>
      </div>

    </div>
  )
}

export default BurgerMenu;
