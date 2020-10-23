import React from 'react';

// import classNames from 'classnames/bind';

import './Nav.scss';

export const Nav = () => (
  <nav className="header__nav nav">
    <ul className="nav__list">
      <li className="nav__item">
        <a href="/#" className="nav__link nav__link--active">
          Home
        </a>
      </li>
      <li className="nav__item">
        <a href="/#" className="nav__link">
          About us
        </a>
      </li>
      <li className="nav__item">
        <a href="/#" className="nav__link">
          Contacts
        </a>
      </li>
      <li className="nav__item">
        <a href="/#" className="nav__link">
          Checkout
        </a>
      </li>
      <li className="nav__item">
        <a href="/#" className="nav__link nav__link--last">
          Account
        </a>
      </li>
    </ul>
  </nav>
);
