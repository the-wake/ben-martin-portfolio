import React from 'react';

function Navbar({ currentPage, handlePageChange }) {

  return (
    <div className="sticky">
      {
        currentPage !== 'Resume'
          ?
          <div id="navbar" className="sticky">
            <div
              className="nav-item" id="about-link" href="#/about"
              onClick={() => handlePageChange('About')}>
              About Me
            </div>
            <div
              className="nav-item" id="portfolio-link" href="#/portfolio"
              onClick={() => handlePageChange('Portfolio')}>
              Portfolio
            </div>
            <div
              className="nav-item" id="contact-link" href="#/contact"
              onClick={() => handlePageChange('Contact')}>
              Contact
            </div>
            <div
              className="nav-item" id="resume-link" href="#/resume"
              onClick={() => handlePageChange('Resume')}>
              Résumé
            </div>
          </div>
          : <div id="navbar">
            <div
              className="nav-item" id="back-link" href="#/"
              onClick={() => handlePageChange('About')}>
              Back
            </div>
          </div>
      }
    </div>
  );
};

export default Navbar;
