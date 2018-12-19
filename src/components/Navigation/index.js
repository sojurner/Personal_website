import React from 'react';
import { Logo } from '../Logo';
import { Hamburger } from '../Hamburger';
import { Menu } from '../Menu';
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
        <Menu menu={menu} menuDisplay={menuDisplay} handleMenu={handleMenu} />
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
