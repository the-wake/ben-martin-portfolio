import React, { useState, useEffect } from 'react'
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
      return <MainPage handlePageChange={handlePageChange} />;
    } else {
      return <Resume handlePageChange={handlePageChange} />;
    };
  };

  const handlePageChange = page => {
    setCurrentPage(page);
    //   if (currentPage === 'Resume') {
    //     setCurrentPage(page);

    //     setTimeout(() => {
    //       const targetComponent = document.getElementById(page.toLowerCase());
    //       if (targetComponent) {
    //         targetComponent.scrollIntoView({
    //           alignToTop: true,
    //           behavior: 'smooth'
    //         });
    //       };
    //     }, 100);

    //   } else {
    //     setCurrentPage(page);
    //     const targetComponent = document.getElementById(page.toLowerCase());

    //     if (targetComponent) {
    //       targetComponent.scrollIntoView({
    //         alignToTop: true,
    //         behavior: 'smooth'
    //       });
    //     };
    //   }
  };

  useEffect(() => {
    const targetComponent = document.getElementById(currentPage.toLowerCase());

    if (targetComponent) {
      targetComponent.scrollIntoView({
        alignToTop: true,
        behavior: 'smooth'
      });
    };
  }, [currentPage]);

  return (
    <div id="body">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div id="main-container">
        {currentPage === 'Resume' ? null : <Banner />}
        <div id="main-content">
          {renderPage()}
        </div>
        {currentPage !== 'Resume' ? <Footer handlePageChange={handlePageChange} /> : null}
      </div>
    </div>
  )
};

export default ContentContainer;
