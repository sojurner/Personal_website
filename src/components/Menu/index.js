import React from 'react';

import './styles.css';

export const Menu = ({ menuDisplay, menu, handleMenu }) => {
  return (
    <div className={menuDisplay ? 'col-lg overlay-active' : 'col-lg overlay'}>
      <h1>Menu</h1>
      <ul>
        {menu.map(item => {
          return (
            <li onClick={handleMenu}>
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
