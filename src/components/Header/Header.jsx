import React from 'react';
import { Nav } from './Nav/Nav';
import { Top } from './Top/Top';

import './Header.scss';

export const Header = () => (
  <header className="header">
    <a className="header__logo-link" href="/">
      Cracker
    </a>
    <Top />
    <Nav />
  </header>
);
