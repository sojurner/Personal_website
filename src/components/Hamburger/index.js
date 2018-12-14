import React from 'react';
import './styles.css';

export const Hamburger = ({ menuDisplay, handleMenu }) => {
  return (
    <div
      class={
        menuDisplay ? 'hamburger-wrapper menu-active' : 'hamburger-wrapper'
      }
      onClick={handleMenu}
    >
      <div class="hamburger" />
    </div>
  );
};
