import React from 'react';

import resume from '../assets/Resume-Ben-Martin.pdf';
import '../components/Navbar.css';

function Resume({ handlePageChange }) {

  return (
    <div id="resume-container">
      <object id="resume" data={resume} type="application/pdf" width="850px" height='1150px' />
      <div className="navbar s-b-toggle"><a className="nav-item s-b-toggle" href="/" onClick={() => handlePageChange('Resume')}>Back</a></div>
    </div>
  )

}

export default Resume;
