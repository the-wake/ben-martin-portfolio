import React from 'react';

import resume from '../assets/Resume-Ben-Martin.pdf';

function Resume() {

  return (
    <div id="resume-container">
      <object id="resume" data={resume} type="application/pdf" width="850px" height='1150px' />
    </div>
  )

}

export default Resume;
