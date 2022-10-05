import React, { useState } from 'react'
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import Footer from '../components/Footer.js';
import MainPage from './MainPage.js'
import Resume from './Resume.js';

// I'd like to get it to scroll to the top of the rendered div when clicked, but I can't find a good way of getting that to happen with how the pages render and the header vh is set up.
function ContentContainer() {

  const [currentPage, setCurrentPage] = useState('');

  const renderPage = () => {
    if (currentPage !== 'Resume') {
      return <MainPage />;
    } else {
      return <Resume />;
    };
  };

  const handlePageChange = page => {
    setCurrentPage(page);
    // Ignore behavior if user navigates to Resume page.
    console.log(currentPage);
    if (currentPage === 'Resume') {
      return
    } else {

      // document.getElementById('content-container').scrollIntoView();
      const targetComponent = document.getElementById(page.toLowerCase());
      // console.log(targetComponent);
      targetComponent.scrollIntoView({
        alignToTop: true,
        behavior: 'smooth'
      });
    };
  };

  return (
    <div className="body">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      { currentPage === 'Resume' ? null : <Banner />}
      {/* I could put something in the Banner component to shink it when a link is clicked. */}
      <div id="main-content">
        {renderPage()}
      </div>
      <Footer />
    </div>
  )
};

export default ContentContainer;
