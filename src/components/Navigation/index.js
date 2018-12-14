import React from 'react';
import { Logo } from '../Logo';
import { Hamburger } from '../Hamburger';

import './styles.css';

export const Navigation = ({ current, previous, handleMenu, menuDisplay }) => {
  return (
    <nav className={current > previous ? 'navbar navbar-hide' : 'navbar'}>
      <Logo />
      <div className={menuDisplay ? 'col-lg overlay-active' : 'col-lg overlay'}>
        <h1>Menu</h1>
        <nav>
          <ul>
            <li>About</li>
            <li>Work</li>
            <li>Other</li>
          </ul>
        </nav>
      </div>
      <Hamburger menuDisplay={menuDisplay} handleMenu={handleMenu} />
    </nav>
  );
};
