import React, { Component } from 'react';
import Navigation from '../Navigation';
import { About } from '../About';
import { Other } from '../Other';
import { Work } from '../Work';
import './App.css';

class App extends Component {
  state = {
    previous: 0,
    current: 0,
    menuDisplay: false
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = event => {
    const { scrollTop } = event.srcElement;
    this.setState(prevState => {
      if (prevState.current !== scrollTop) {
        return {
          current: scrollTop,
          previous: prevState.current
        };
      }
    });
  };

  handleMenu = () => {
    this.setState({ menuDisplay: !this.state.menuDisplay });
  };

  render() {
    const { current, previous, menuDisplay } = this.state;
    return (
      <div className="App">
        <section id="About" className="about">
          <About />
          <Navigation
            current={current}
            previous={previous}
            menuDisplay={menuDisplay}
            handleMenu={this.handleMenu}
          />

          <img
            src="http://profilepicturesdp.com/wp-content/uploads/2018/06/cool-background-for-profile-pictures-10.jpg"
            className="background-img"
          />
        </section>
        <section id="Work" className="work">
          <Work />
        </section>
        <section id="Other" className="other">
          <Other />
        </section>
      </div>
    );
  }
}

export default App;
