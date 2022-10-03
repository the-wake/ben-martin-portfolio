import React from 'react';
import image from '../assets/pfp.jpg'

function Banner() {
  return (
    <div className="jumbotron">
      <div id={"banner-left"}>
        <h1>Ben Martin</h1>
        <p>Flexible, systems-oriented web development with a human touch.</p>
      </div>
      <div id={"banner-right"}>
        <img src={image} alt={'Profile'} id="profile-pic" />
      </div>
    </div>
  )
}

export default Banner;