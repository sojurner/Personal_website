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
      menu: ['Home', 'Work', 'About', 'Other'],
      tooltipDisplay: false,
      contactDisplay: false,
      label: ''
    };
  }

  handleHover = label => {
    this.setState({ label });
  };

  toggleContact = () => {
    this.setState({ contactDisplay: !this.state.contactDisplay });
  };

  render() {
    const { menu, tooltipDisplay, label, contactDisplay } = this.state;
    const { current, previous, handleMenu, menuDisplay } = this.props;
    return (
      <nav className={current > previous ? 'navbar navbar-hide' : 'navbar'}>
        <Logo />
        <Menu menu={menu} menuDisplay={menuDisplay} handleMenu={handleMenu} />
        <Hamburger menuDisplay={menuDisplay} handleMenu={handleMenu} />
        <Contact
          contactDisplay={contactDisplay}
          handleHover={this.handleHover}
          tooltipDisplay={tooltipDisplay}
          label={label}
          toggleContact={this.toggleContact}
        />
      </nav>
    );
  }
}

export default Navigation;
