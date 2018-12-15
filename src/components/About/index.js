import React from 'react';
import './styles.css';

export const About = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <img
          className="about-img"
          src="https://upload.wikimedia.org/wikipedia/en/5/5c/Loma_linda_university_logo.png"
        />
        <h1 className="about-title">PhD BioChemistry</h1>
      </div>
      <p className="about-content">
        My obsession with body building has driven me to a lifestyle fad known
        as bulking/Cutting. The idea is you get super fat during the bulking
        phase, eating anything and everything you can get your fat paws on. Then
        after you get nice and chubby, you transition to a strict lean diet to
        convert the adipose to muscle-pose. So towards the end of the bulking
        phase I went to the Gym to lift some weights; to get my body ready for
        the transitioin. A group of douchebags walked by and laughed at me
        calling me a "Fat Loser". And they were right I was losing fat...
      </p>
    </section>
  );
};
