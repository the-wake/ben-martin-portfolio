import React from 'react';

import resume from '../assets/Resume-Ben-Martin.pdf';
import '../components/Navbar.css';

function Resume() {

  return (
    <div id="resume-container">
      <object id="resume" data={resume} type="application/pdf" width="850px" height='1150px' />
      <div className="nav-item s-toggle">Back</div>
    </div>
  )

}

export default Resume;
