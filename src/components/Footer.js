import React from 'react';

function Footer({ handlePageChange }) {
  return (
    <div id="footer">
      <div id="footer-left">
        <p><a className="s-toggle" href="#/resume" onClick={() => handlePageChange('Resume')}>Résumé</a></p>
        <p><a href="https://www.linkedin.com/in/ben-martin-26266443/" target="_blank" rel="noreferrer">LinkedIn</a></p>
        <p><a href="https://github.com/the-wake/" target="_blank" rel="noreferrer">GitHub</a></p>
        <p><a href="https://boardgamegeek.com/user/bmartin2009" target="_blank" rel="noreferrer">BoardGameGeek</a></p>
      </div>
      <div id="footer-right">
        <p>Made in VS Code with React and in-house custom styling.</p>
      </div>
    </div>
  )
};

export default Footer;
