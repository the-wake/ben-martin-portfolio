import React from 'react';

import resume from '../assets/Resume-Ben-Martin.pdf';
import '../components/Navbar.css';

function Resume({ handlePageChange }) {

  return (
    <div id="resume-container">
      <object id="resume" data={resume} type="application/pdf" width="850px" height='1150px' />
      <div className="navbar s-b-toggle"><div className="nav-item s-b-toggle" onClick={() => handlePageChange('')}>Back</div></div>
    </div>
  );

};

export default Resume;
