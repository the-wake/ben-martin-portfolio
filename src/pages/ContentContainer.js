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
    const targetComponent = document.getElementById(page.toLowerCase());

    // Ignore behavior if user navigates to Resume page.
    if (page === 'Resume') {
      window.scrollTo(0, 0);
    } else if (targetComponent) {
      // document.getElementById('content-container').scrollIntoView();
      // console.log(targetComponent);
      targetComponent.scrollIntoView({
        alignToTop: true,
        behavior: 'smooth'
      });
    };
  };

  return (
    <div id="body">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div id="main-container">
        {currentPage === 'Resume' ? null : <Banner />}
        <div id="main-content">
          {renderPage()}
        </div>
        {currentPage !== 'Resume' ? <Footer /> : null}
      </div>
    </div>
  )
};

export default ContentContainer;
