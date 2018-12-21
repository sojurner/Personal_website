import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { contact } from '../../assets/data/data';
import './styles.css';

export const Contact = ({ handleHover, contactDisplay, toggleContact }) => {
  return (
    <div className="contact-sidebar">
      <i
        onClick={toggleContact}
        className={
          !contactDisplay ? 'fas fa-address-book' : 'fas fa-chevron-up'
        }
      />
      <nav
        className={contactDisplay ? 'contact-section' : 'contact-section-hide'}
      >
        {contact.map(icon => {
          const { className, tooltip, label, link } = icon;
          const tt = (
            <Tooltip id={label}>
              <strong>{tooltip}</strong>
            </Tooltip>
          );
          return (
            <OverlayTrigger placement="left" overlay={tt}>
              <div
                className="contact_icon-tooltip"
                onMouseEnter={handleHover.bind(null, label)}
                onMouseLeave={handleHover.bind(null, '')}
              >
                <i
                  className={className}
                  onClick={() => window.open(link, '_blank')}
                />
              </div>
            </OverlayTrigger>
          );
        })}
      </nav>
    </div>
  );
};
