// rfce
import React, { useState, useEffect, useRef } from 'react'
import Navbar from './Navbar.js';
import Banner from './Banner.js';
import Footer from './Footer.js';
import Blurb from '../pages/Blurb.js';
import Portfolio from '../pages/Portfolio.js';
import Contact from '../pages/Contact.js';

// I'd like to get it to scroll to the top of the rendered div when clicked, but I can't find a good way of getting that to happen with how the pages render and the header vh is set up.
function ContentContainer() {
  const [currentPage, setCurrentPage] = useState('');
  // const [displayBanner, setDisplayBanner] = useState(true);
  // const isMounted = useRef(false);

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
  
  // const homeHandler = () => {
  //   // setCurrentPage('');
  //   setDisplayBanner(true);
  // };

  // useEffect(() => {
  //   if (isMounted.current === true) {
  //     setDisplayBanner(false);
  //   } else {
  //     isMounted.current = true
  //   };
  // }, [currentPage]);

  return (
    <div className="body">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* I could put something in the Banner component to shink it when a link is clicked. */}
      <Banner />
      {/* {
        displayBanner === true
          ? <Banner />
          : <div id="home-button">Back home</div>
      } */}
      <div id="content-container">
        {renderPage()}
      </div>
      <Footer />
    </div>
  )
}

export default ContentContainer;
