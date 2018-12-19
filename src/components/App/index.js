import React, { Component } from 'react';
import Navigation from '../Navigation';
import { About } from '../About';
import Other from '../Other';
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
            src="http://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
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
