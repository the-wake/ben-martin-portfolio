import React from 'react';
import './Navbar.css';

function Navbar({ currentPage, handlePageChange }) {

  return (
    <div id="navbar">
      <div
        className="nav-item" id="about-link"
        onClick={() => handlePageChange('About')}>
        About Me
      </div>
      <div className="nav-divider"></div>
      <div
        className="nav-item" id="portfolio-link"
        onClick={() => handlePageChange('Portfolio')}>
        Portfolio
      </div>
      <div className="nav-divider"></div>
      <div
        className="nav-item" id="contact-link"
        onClick={() => handlePageChange('Contact')}>
        Contact
      </div>
      <div className="nav-divider"></div>
      <div
        className="nav-item" id="resume-link"
        onClick={() => handlePageChange('Resume')}>
        Résumé
      </div>
    </div>
  );
};

export default Navbar;
