import React from 'react';
import './Navbar.css';

function Navbar({ currentPage, handlePageChange }) {

  return (
    <div className="full-height">
      {
        currentPage !== 'Resume'
          ?
          <div id="navbar">
            <a
              className="nav-item" id="about-link" href="#/about"
              onClick={() => handlePageChange('About')}>
              About Me
            </a>
            <div className="nav-divider"></div>
            <a
              className="nav-item" id="portfolio-link" href="#/portfolio"
              onClick={() => handlePageChange('Portfolio')}>
              Portfolio
            </a>
            <div className="nav-divider"></div>
            <a
              className="nav-item" id="contact-link" href="#/contact"
              onClick={() => handlePageChange('Contact')}>
              Contact
            </a>
            <div className="nav-divider"></div>
            <a
              className="nav-item" id="resume-link" href="#/resume"
              onClick={() => handlePageChange('Resume')}>
              Résumé
            </a>
          </div>
          : <div id="navbar">
            <a
              className="nav-item" id="back-link" href="#/"
              onClick={() => handlePageChange('About')}>
              Back
            </a>
          </div>
      }
    </div>
  );
};

export default Navbar;
