import React from 'react';

function Project({ project }) {
  const { name, link, description, repo, image, alt, deployment } = project;

  const genMessage = () => {
    if (deployment === 'github-pages') {
      return `Deployed on Github Pages`
    } else if (deployment === 'vps') {
      return 'Deployed via personal VPS'
    } else if (deployment === 'heroku') {
      return `Deployed on Heroku – Expect delay on load`
    } else if (deployment === 'backend-only') {
      return `Backend only – See GitHub Repo for readme and demonstration`
    } else {
      return `Hosted on ${deployment}`;
    };
  };

  return (
    <div className="project-container">
      <a className="image-link" href={link} target="_blank" rel="noreferrer">
        <img src={image} alt={alt} className="project-image" />
      </a>
      <div className="content-container">
        <a href={link} target="_blank" rel="noreferrer"><h3>{name}</h3></a>
        <p className="project-description">{description}</p>
        <p className="deployment-message">{genMessage()}</p>
        { repo !== null && <a className="github-element" href={repo} target="_blank" rel="noreferrer">GitHub Repo</a> }
      </div>
    </div>
  )
};

export default Project;
