import React from 'react';
import resume from '../assets/resume.pdf';

// Could add js to make the page scroll to this y-coord when clicked.
function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="custom-navbar">
      <div
        className="nav-item" id="about" href="#/about"
        className={currentPage === 'About' ? 'nav-item active' : 'nav-item'}
        onClick={() => handlePageChange('About')}>
        About Me
      </div>
      <div
        className="nav-item" id="portfolio" href="#/portfolio"
        className={currentPage === 'Portfolio' ? 'nav-item active' : 'nav-item'}
        onClick={() => handlePageChange('Portfolio')}>
        Portfolio
      </div>
      <div
        className="nav-item" id="contact" href="#/contact"
        className={currentPage === 'Contact' ? 'nav-item active' : 'nav-item'}
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
}

export default Navbar;
