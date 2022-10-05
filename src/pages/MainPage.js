import React from 'react'

import Blurb from '../components/Blurb.js';
import Portfolio from '../components/Portfolio.js';
import Contact from '../components/Contact.js';

function MainPage() {

  return (
    <div>
      <Blurb />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default MainPage;