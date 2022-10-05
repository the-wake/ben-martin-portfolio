import React from 'react';

function Navbar({ handlePageChange }) {

  return (
    <div id="navbar">
      <div
        className="nav-item" id="about-link" href="#/about"
        onClick={() => handlePageChange('About')}>
        About Me
      </div>
      <div
        className="nav-item"  id="portfolio-link" href="#/portfolio"
        onClick={() => handlePageChange('Portfolio')}>
        Portfolio
      </div>
      <div
        className="nav-item"  id="contact-link" href="#/contact"
        onClick={() => handlePageChange('Contact')}>
        Contact
      </div>
      <div
        className="nav-item"  id="resume-link" href="#/resume"
        onClick={() => handlePageChange('Resume')}>
        Résumé
      </div>
    </div>
  );
};

export default Navbar;
