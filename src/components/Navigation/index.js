import React from 'react';
import { Logo } from '../Logo';
import { Hamburger } from '../Hamburger';
import { Contact } from '../Contact';

import './styles.css';

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: ['About', 'Work', 'Other'],
      tooltipDisplay: false,
      label: ''
    };
  }

  handleHover = (tooltipDisplay, label) => {
    this.setState({ tooltipDisplay, label });
  };

  render() {
    const { menu, tooltipDisplay, label } = this.state;
    const { current, previous, handleMenu, menuDisplay } = this.props;
    return (
      <nav className={current > previous ? 'navbar navbar-hide' : 'navbar'}>
        <Logo />
        <div
          className={menuDisplay ? 'col-lg overlay-active' : 'col-lg overlay'}
        >
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
        <Hamburger menuDisplay={menuDisplay} handleMenu={handleMenu} />
        <Contact
          handleHover={this.handleHover}
          tooltipDisplay={tooltipDisplay}
          label={label}
        />
      </nav>
    );
  }
}

export default Navigation;
