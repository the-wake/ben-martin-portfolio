import React from 'react';
import image from '../assets/at.png'

function Blurb() {
  return (
    <div>
      <h1 className="content-header">About Me</h1>
      <div className="container blurb-container">
        <div id="pfp-container">
          <img src={image} id="profile-pic" />
        </div>
        <div id="blurb">
          <p>Hello! I'm Ben Martin, an independent full-stack web designer based in Minneapolis, Minnesota. I specialize in creating highly usable, visually pleasing style (CSS) and practical, flexible, dynamic design (JavaScript).</p>

          <p>My greatest strength as a developer is my systems-oriented thought process, which helps me easily envision and implement solutions to complex problems. On top of that, my ability to quickly learn new skills helps me quickly integrate to new teams and pick up new processes.</p>

          <p>In addition to web design and programming, I design board games. I have two published games and more in the works! In my free time, I enjoy playing Smash Bros. Ultimate (dirty Samus main) and Dungeons & Dragons 5th edition. I have a borderline unhealthy love of the cyberpunk genre and firmly believe that Ghost in the Shell 1995 is the greatest film of all time.</p>

          <p>For more information, check out my <a href="https://www.linkedin.com/in/ben-martin-26266443/" target="_blank">LinkedIn profile</a>, or take a look at my <a href="https://github.com/the-wake/" target="_blank">GitHub Page</a>.</p>

          <p>(Also, the transparency pattern is intentional. Don't worry about it.)</p>
        </div>
      </div>
    </div >
  )
}

export default Blurb;
