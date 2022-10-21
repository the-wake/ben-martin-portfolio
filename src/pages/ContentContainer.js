import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import Footer from '../components/Footer.js';
import MainPage from './MainPage.js'
import Resume from './Resume.js';

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
  };

  useEffect(() => {
    const targetComponent = document.getElementById(currentPage.toLowerCase());

    if (currentPage === '' && targetComponent) {
      return;
    } else if (targetComponent) {
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
        {currentPage !== 'Resume' ? <Banner /> : null}
        {renderPage()}
        {currentPage !== 'Resume' ? <Footer handlePageChange={handlePageChange} /> : null}
      </div>
    </div>
  );
};

export default ContentContainer;
