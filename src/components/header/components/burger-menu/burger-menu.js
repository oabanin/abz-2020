import React, { useLayoutEffect } from 'react';
import { Link } from 'react-scroll';
import HeaderLogo from '../header-logo';

import './burger-menu.scss';

function BurgerMenu({ active, closeBurger }) {
  if (active) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'visible';

  const items = [
    { href: 'about', value: 'About me' },
    { href: 'form', value: 'Relationships' },
    { href: 'users', value: 'Users' },
    { href: 'form', value: 'Sign Up' },
    { href: 'form', value: 'Terms And Conditions' },
    { href: 'form', value: 'How it works' },
    { href: 'form', value: 'Partnership' },
    { href: 'form', value: 'Help' },
    { href: 'form', value: 'Leave testimonial' },
    { href: 'form', value: 'Contact us' },
    { href: 'form', value: 'Articles' },
    { href: 'form', value: 'Our news' },
    { href: 'form', value: 'Testimonials' },
    { href: 'form', value: 'Licenses' },
    { href: 'form', value: 'Privacy Policy' },
  ];
  return (
    <>
      <div className={active ? 'overlay active' : 'overlay'} onClick={closeBurger} />
      <div className={active ? 'burger active' : 'burger'}>
        <div className="burger__header">
          <HeaderLogo closeBurger={closeBurger} />
        </div>
        <div className="burger__content">
          <ul>
            {items.map((item) => (
              <li key={item.value}>
                <Link
                  key={item.value}
                  className="burger__link"
                  to={item.href}
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  onClick={closeBurger}
                >
                  {item.value}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </>
  );
}

export default BurgerMenu;
