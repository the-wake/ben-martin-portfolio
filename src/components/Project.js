import React from 'react';

function Project({ project }) {
  const { name, link, description, repo, image, alt } = project;

  return (
    <div className="project-container">
      <a className="image-link" rel="noreferrer" href={link} target="_blank">
        <img src={image} alt={alt} className="project-image" />
      </a>
      <div className="content-container">
        <a href={link} target="_blank" rel="noreferrer"><h3>{name}</h3></a>
        <p>{description}</p>
        <a href={repo} target="_blank" rel="noreferrer" className="github-element">GitHub Repo</a>
      </div>
    </div>
  )
}

export default Project;
