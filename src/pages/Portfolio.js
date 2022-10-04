import React, { useState } from 'react';
import Project from '../components/Project.js';
import imgDelver from '../assets/dungeon-delver.jpg';
import imgJarvis from '../assets/jarvis.jpg';
import imgFinder from '../assets/dnd.jpg';
import imgBlog from '../assets/blog.jpg';
import imgEms from '../assets/ems.jpg';
import imgSocialMedia from '../assets/social-media-api.jpg';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Dungeon Delver',
      link: 'https://dungeon-delver-main.herokuapp.com/',
      description: 'One of the toughtest parts of running a tabletop RPG dungeon is simply keeping track of every last creature, trinket, and secret. Dungeon Crawler is a full-stack SQL-driven website that makes tracking a sprawling campaign as easy as clicking a button. This application takes the tedium out of running dungeons by letting users quickly and easily do things like create dungeons and rooms, manage monsters, update stats, and even allows for multiple campaigns to be managed at once! (Refactored from a previous version using Handlebars and Sequelize.)',
      image: imgDelver,
      alt: 'Dungeon Delver, for all you campaign organizational needs!',
      repo: 'https://github.com/the-wake/dungeon-delver-main',
    },
    {
      name: 'Jarvis: The Smash Bros. Companion',
      link: 'https://the-wake.github.io/jarvis-smash-companion/',
      description: 'A companion app for Super Smash Bros. Ultimate ironman challenges. Built in React, the app helps users track their challenge attempts, providing win/loss tracking, persistent data, a random character selection algorithm, and more. Currently a work-in-progress, the application could easily be scaled up to use the complete MERN stack, save run histories, and support other types of challenges and analysis.',
      image: imgJarvis,
      alt: 'Jarvis helps players track their Super Smash Bros. challenge attempts.',
      repo: 'https://github.com/the-wake/jarvis-smash-companion',
    },
    {
      name: 'Monster Finder',
      link: 'https://the-wake.github.io/project-1-dnd/',
      description: 'Every DM (Dungeon Master) knows that you can\'t build an encounter without monsters! Every DM also knows that as a system ages, tracking down monsters becomes a huge hassle. The D&D Monster Finder uses the open5e API to seach monsters from a huge range of official and unofficial sources. Users can select their desired Challenge Rating, browse mosters color-coded by type, and save lists of monsters they intend to use.',
      image: imgFinder,
      alt: 'Monster Finder makes finding the right creatures a breeze!',
      repo: 'https://github.com/the-wake/project-1-dnd',
    },
    {
      name: 'Full-Stack Blog',
      link: 'https://vast-citadel-10428.herokuapp.com/',
      description: 'A full-stack, SQL-driven blog webpage. Users can create and edit posts, write comments, and render lists of recent posts. Includes user validation, session storage, several layers of security, a range of useful methods. Heroku hosting allows back-end functionality on the live deployment.',
      image: imgBlog,
      alt: 'This is one of the blogs of all time.',
      repo: 'https://github.com/the-wake/assignment-14-blog',
    },
    {
      name: 'Employee Management System',
      link: 'https://github.com/the-wake/assignment-12-employee-management',
      description: 'A fully back-end application run via the command line (Node.js). Users can create and update departments, job titles, and employees. The back-end MySQL database enables useful and powerful connections to be created between data points for easy reference and correlation.',
      image: imgEms,
      alt: 'Create and querry teams in a flash!',
      repo: 'https://github.com/the-wake/assignment-12-employee-management',
    },
    {
      name: 'Social Media API',
      link: 'https://github.com/the-wake/a18-social-media-api',
      description: 'This back-end Mongoose-based API has a robust suite of queries allowing users to create accounts, post thoughts, and comment on each other\'s posts. The NoSQL nature of the database allows for greater flexibility in the data, and allows easy creation of connections between data points.',
      image: imgSocialMedia,
      alt: 'Putting the API back in APprecIation!',
      repo: 'https://github.com/the-wake/a18-social-media-api',
    },
  ]);

  return (
    <div>
      <h1 className="content-header">Portfolio</h1>
      <div className="projects-container">
        {projects.map((project, index) => {
          return <Project project={project} key={index} />
        })}
      </div>
    </div>
  )
}

export default Portfolio;
