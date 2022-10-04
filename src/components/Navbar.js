import React from 'react';
import resume from '../assets/Resume-Ben-Martin.pdf';

// Could add js to make the page scroll to this y-coord when clicked.
function Navbar({ currentPage, handlePageChange }) {

  return (
    <div id="navbar">
      <div
        className={`nav-item ${currentPage === 'About' ? 'nav-item active' : 'nav-item'}`} id="about-link" href="#/about"
        onClick={() => handlePageChange('About')}>
        About Me
      </div>
      <div
        className={`nav-item ${currentPage === 'Portfolio' ? 'nav-item active' : 'nav-item'}`} id="portfolio-link" href="#/portfolio"
        onClick={() => handlePageChange('Portfolio')}>
        Portfolio
      </div>
      <div
        className={`nav-item ${currentPage === 'Contact' ? 'nav-item active' : 'nav-item'}`} id="contact-link" href="#/contact"
        onClick={() => handlePageChange('Contact')}>
        Contact
      </div>
      <a href={resume} download="Ben Martin Résumé">
        <div
          className="nav-item" id="resume">
          Résumé
        </div>
      </a>
    </div>
  );
};

export default Navbar;
