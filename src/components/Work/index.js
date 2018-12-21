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
      <Carousel interval={null}>
        {projectsData.map(project => {
          const { gif_path, github_url, live_url, project_name } = project;
          return (
            <Carousel.Item>
              <img src={gif_path} />
              <Carousel.Caption>
                <h3>{project_name}</h3>
                <i
                  onClick={() => window.open(github_url, '_blank')}
                  className="fab fa-github"
                />
                <i
                  target="_blank"
                  onClick={() => window.open(live_url, '_blank')}
                  className="fas fa-code-branch"
                />
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      ;
    </section>
  );
};
