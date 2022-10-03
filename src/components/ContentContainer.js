// rfce
import React, { useState } from 'react'
import Navbar from './Navbar.js';
import Banner from './Banner.js';
import Footer from './Footer.js';
import Blurb from '../pages/Blurb.js';
import Portfolio from '../pages/Portfolio.js';
import Contact from '../pages/Contact.js';

// I'd like to get it to scroll to the top of the rendered div when clicked, but I can't find a good way of getting that to happen with how the pages render and the header vh is set up.
function ContentContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === '' || currentPage === 'About') {
      return <Blurb />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  }

  const handlePageChange = page => setCurrentPage(page);

  return (
    <div className="body">
      <Banner />
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div id="content-container">
        {renderPage()}
      </div>
      <Footer />
    </div>
  )
}

export default ContentContainer;
