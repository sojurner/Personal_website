import React from 'react';
import './styles.css';

export const Home = () => {
  return (
    <section className="home-section">
      <div className="home-header">
        <h1 className="home-title">UI / UX Developer</h1>
        <img
          className="home-img"
          src="https://rachio.com/img/rachio/rachio-logo-for-web.png"
        />
      </div>
      <section className="poem">
        <p className="home-content">
          This morning I wake
          <br />
          To my pig's loud quake
          <br />
          Somedays I spend thinkin`
          <br />
          About life without its stinkin`
          <br />
          Should I take it to a pit-master?
          <br />
          To end its life faster?
        </p>
        <p className="home-content">
          Unfortunately I must go walking
          <br />
          For the pig suspects my shit-talking
          <br />
          One day I'll be free
          <br />
          Lol hehe XD
        </p>
      </section>
    </section>
  );
};
