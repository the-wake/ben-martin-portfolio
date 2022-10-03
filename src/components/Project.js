import React from 'react';

function Project({ project }) {
  const { name, link, description, repo, image } = project;

  return (
    <div className="project-container">
      <div className="image-container">
        <img src={image} />
      </div>
      <div className="content-container">
        <a href={link}><h3>{name}</h3></a>
        <p>{description}</p>
        <a href={repo} className="github-element">GitHub Repo</a>
      </div>
    </div>
  )
}

export default Project;
