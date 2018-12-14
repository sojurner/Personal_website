import React from 'react';

import './styles.css';

export const Contact = ({ handleHover, tooltipDisplay, label }) => {
  console.log(tooltipDisplay);
  const contactIcons = [
    {
      className: 'fas fa-mobile',
      tooltip: '951-801-1918',
      label: 'mobile'
    },
    {
      className: 'fas fa-envelope-square',
      tooltip: 'johntan05',
      label: 'email'
    },
    {
      className: 'fab fa-github-square',
      tooltip: 'jctan05',
      label: 'github'
    },
    { className: 'fab fa-discord', tooltip: 'discord', label: 'discord' }
  ];
  return (
    <nav className="contact-section">
      {contactIcons.map(icon => {
        const { className, tooltip } = icon;
        return (
          <div
            className="contact_icon-tooltip"
            onMouseEnter={handleHover.bind(null, true, icon.label)}
            onMouseLeave={handleHover.bind(null, false)}
          >
            <i className={className} />
            {tooltipDisplay && icon.label === label && (
              <p className="tooltip">{tooltip}</p>
            )}
          </div>
        );
      })}
    </nav>
  );
};
