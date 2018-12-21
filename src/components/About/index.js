import React from 'react';

import { education, experience } from '../../assets/data/data';
import './styles.css';

export const About = () => {
  const educationList = education.map((item, index) => {
    const { institution, education, start_date, end_date } = item;
    return (
      <div key={`education-${index}`} className="timeline-education-group">
        <span className="timeline-education-space" />
        <span className="timeline-education-start">{start_date}</span>
        <div className="timeline-education-box">
          <div className="timeline-education-post">
            <div className="timeline-education-content">
              <p>{institution}</p>
              <p>{education}</p>
            </div>
          </div>
        </div>
        <span className="timeline-education-end">{end_date}</span>
      </div>
    );
  });

  const experienceList = experience.map((item, index) => {
    const { company, title, start_date, end_date } = item;
    return (
      <div key={`experience-${index}`} className="timeline-experience-group">
        <span className="timeline-experience-space" />
        <span className="timeline-experience-start">{start_date}</span>
        <div className="timeline-experience-box">
          <div className="timeline-experience-post">
            <div className="timeline-experience-content">
              <p>{title}</p>
              <p>{company}</p>
            </div>
          </div>
        </div>
        <span className="timeline-experience-end">{end_date}</span>
      </div>
    );
  });

  return (
    <section className="about-section">
      <div className="outer-education-container">
        <h1>Education</h1>
        <div className="inner-education-container">
          <div className="education-timeline">{educationList}</div>
        </div>
      </div>
      <div className="outer-experience-container">
        <h1>Experience</h1>
        <div className="inner-experience-container">
          <div className="experience-timeline">{experienceList}</div>
        </div>
      </div>
    </section>
  );
};
