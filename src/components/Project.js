import React from 'react';

function Project({ project }) {
  const { name, link, description, repo, image, alt, deployment } = project;

  const genMessage = () => {
    if (deployment === 'github-pages') {
      return `Deployed on Github Pages.`
    } else if (deployment === 'heroku') {
      return `Deployed on Heroku – Expect delay on load.`
    } else if (deployment === 'backend-only') {
      return `Backend only – See GitHub Repo for readme and demonstration.`
    };
  };

  const deployMessage = genMessage();

  return (
    <div className="project-container">
      <a className="image-link" rel="noreferrer" href={link} target="_blank">
        <img src={image} alt={alt} className="project-image" />
      </a>
      <div className="content-container">
        <a href={link} target="_blank" rel="noreferrer"><h3>{name}</h3></a>
        <p className="project-description">{description}</p>
        <p className="deployment-message">{deployMessage}</p>
        <a href={repo} target="_blank" rel="noreferrer" className="github-element">GitHub Repo</a>
      </div>
    </div>
  )
}

export default Project;
