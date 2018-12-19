import React from 'react';
import { projectsData } from '../../assets/data/data';
import { Carousel } from 'react-bootstrap';

import './styles.css';

export const Work = () => {
  return (
    <section className="work-section">
      <h1 className="work-title">
        <i className="fab fa-confluence" />
        My Work
      </h1>
      <Carousel>
        {projectsData.map(project => {
          return (
            <Carousel.Item>
              <img src={project.gif_path} />
              <Carousel.Caption>
                <h3>{project.project_name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      ;
    </section>
  );
};
