import React from 'react';
import image from '../assets/pfp.jpg'

function Banner() {
  return (
    <div className="jumbotron">
      <div id={"banner-left"}>
        <h1>Ben Martin</h1>

        <p>Independent full-stack web designer based in Minneapolis, Minnesota with an eye for simple, elegant, flexible design.</p>
      </div>
      <div id={"banner-right"}>
        <img src={image} alt={'Profile'} id="profile-pic" />
      </div>
    </div>
  )
}

export default Banner;