import React from 'react';

import resume from '../assets/Resume-Ben-Martin.pdf';

function Resume() {

  return (
    <div id='resume-container'>
      <object data={resume} type="application/pdf" width="1200px" height='1200px'>
        <p>Alternative text - include a link <a href={resume}>to the PDF!</a></p>
      </object>
    </div>
  )

}

export default Resume;
