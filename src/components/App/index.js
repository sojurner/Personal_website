import React, { Component } from 'react';
import { Navigation } from '../Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="about">
          <Navigation />
          <header className="App-header">John Tan</header>
        </section>
        <section className="projects">
          <h1>projects</h1>
        </section>
        <section className="other">
          <h1>other</h1>
        </section>
      </div>
    );
  }
}

export default App;
