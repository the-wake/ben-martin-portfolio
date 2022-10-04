import React from 'react';

function Project({ project }) {
  const { name, link, description, repo, image, alt } = project;

  return (
    <div className="project-container">
      <img src={image} alt={alt} className='project-image'/>
      <div className="content-container">
        <a href={link}><h3>{name}</h3></a>
        <p>{description}</p>
        <a href={repo} className="github-element">GitHub Repo</a>
      </div>
    </div>
  )
}

export default Project;
