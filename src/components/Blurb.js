import React from 'react';
// import image from '../assets/at.png'

function Blurb({ handlePageChange }) {

  return (
    <div id="about">
      <h1 className="content-header">About Me</h1>
      <div id="blurb-container">
        {/* <div id="pfp-container">
          <img src={image} alt={'Profile'} id="profile-pic" />
        </div> */}
        <div id="blurb">
          <p>
            Hello! I'm Ben Martin, an independent full-stack web developer based in Minneapolis, Minnesota. I specialize in creating highly usable, visually pleasing style and practical, flexible, dynamic design.
            <br />
            <br />
            My greatest strength as a developer is my systems-oriented thinking, which helps me easily envision and implement solutions to complex problems. As a quick learner, I can quickly integrate with new teams and pick up new skillsets.
            <br />
            <br />
            In addition to web design and programming, I design board games. I have two published games and more in the works! In my free time, I enjoy playing Smash Bros. Ultimate (Samus main) and Dungeons & Dragons 5th edition. I have a borderline unhealthy love of the cyberpunk genre and firmly believe that Ghost in the Shell 1995 is the greatest film of all time.
            <br />
            <br />
            For more information, check out my <a href="https://www.linkedin.com/in/ben-martin-26266443/" target="_blank" rel="noreferrer">LinkedIn profile</a>, <a href="https://github.com/the-wake/" target="_blank" rel="noreferrer">GitHub Page</a>, or <a href="#/resume" onClick={() => handlePageChange('Resume')}>Résumé</a>.
          </p>

        </div>
        <div id="sidebar">
          <h5>Responsive Design</h5>
          <p>Flexible, adaptive designs. Experienced with JavaScript, React, Handlebars, state management, OOP, ORM, and more.</p>
          <h5>Data & Databases</h5>
          <p>Experienced with a wide range of SQL and NoSQL databases, basic statistics, and testing.</p>
          <h5>Process Improvement</h5>
          <p>Background in system thinking and process optimization, with a focus on flexible, scalable solutions that save time and lead to a seamless user experience.</p>
          <h5>Human Being</h5>
          <p>With years of experience in communication and conflict resolution, interpersonal skills are central to my work ethic.</p>
        </div>
      </div>
    </div >
  )
};

export default Blurb;
