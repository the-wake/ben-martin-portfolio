import React, { useState } from 'react';
import Project from './Project.js';
import imgPress from '../assets/press.jpg';
import imgGarden from '../assets/garden.jpg';
import imgDelver from '../assets/dungeon-delver.jpg';
import imgJarvis from '../assets/jarvis.jpg';
import imgSeekers from '../assets/seekers.jpg';
import imgBlog from '../assets/blog.jpg';
import imgEms from '../assets/ems.jpg';
import imgSocialMedia from '../assets/social-media-api.jpg';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Minnetonka Press',
      link: 'https://www.minnetonkapress.com/',
      description: `An e-commerce website for the Minnesota-based publisher Minnetonka Press, developed as a freelance project. Built in Squarespace and using its e-commerce suite, with custom layout to meet the client's needs.`,
      image: imgPress,
      alt: 'A robust currency calculator and roll planner for Fate/Grand Order.',
      repo: null,
      deployment: 'Squarespace',
    },
    {
      name: 'Garden of Avalon',
      link: 'https://garden-of-avalon.net/',
      description: `A React/Redux-based companion app for Lasengle's game Fate/Grand Order, Garden of Avalon combines intuitive reactive design with a robust set of calculators, calendars, and logic to help users plan their spending. Currency totals are calculated on the fly, and targets are saved to local storage to make persistent schedules.`,
      image: imgGarden,
      alt: 'A robust currency calculator and roll planner for Fate/Grand Order.',
      repo: 'https://github.com/the-wake/garden-of-avalon',
      deployment: 'vps',
    },
    {
      name: 'Dungeon Delver (WIP, development stage)',
      link: 'https://dungeon-delver-main.herokuapp.com/',
      description: `One of the toughest parts of running a tabletop role-playing game is simply keeping track of every last creature, trinket, and secret. Dungeon Delver is a full-stack MERN website that makes tracking a sprawling campaign as easy as clicking a button. This application takes the tedium out of running campaigns by letting users quickly and easily do things like create dungeons and rooms, manage monsters, update stats, across any number of campaigns. (Private hosting on VPS is in the works.)`,
      image: imgDelver,
      alt: 'Dungeon Delver, for all you campaign organizational needs!',
      repo: 'https://github.com/the-wake/dungeon-delver-main',
      deployment: 'heroku',
    },
    {
      name: 'Jarvis: The Smash Bros. Companion (WIP, MVP)',
      link: 'https://jarvis-smash.com/',
      description: 'A companion app for Super Smash Bros. Ultimate challenge runs. Built in React, the app helps users track their challenge attempts, providing win/loss tracking, persistent data, character randomization, and more. Currently a work-in-progress, the application could easily be scaled up to use the complete MERN stack, save run histories, provide in-depth statistical analysis, and support a wider range of challenges and functionalities.',
      image: imgJarvis,
      alt: 'Jarvis helps players track their Super Smash Bros. challenge attempts.',
      repo: 'https://github.com/the-wake/jarvis-smash-companion',
      deployment: 'vps',
    },
    {
      name: 'Dungeon Seekers',
      link: 'https://the-wake.github.io/dungeon-seekers//',
      description: 'Every Dungeon Master knows that you can\'t build a Dungeons & Dragons encounter without monsters! However, with years\' worth of creatures spread over dozens of published materials, simply finding monsters\' stats becomes a huge hassle. The D&D Monster Finder uses the open5e API to search monsters from a huge range of official and unofficial sources. Users can select their desired Challenge Rating, browse mosters color-coded by type, and save lists of monsters they intend to use.',
      image: imgSeekers,
      alt: 'Dungeon Seekers makes finding the right creature a breeze!',
      repo: 'https://github.com/the-wake/dungeon-seekers',
      deployment: 'github-pages',
    },
    {
      name: 'Full-Stack Blog',
      link: 'https://vast-citadel-10428.herokuapp.com/',
      description: 'A full-stack, SQL-driven blog. Users can create and edit posts, write comments, and render lists of recent posts. Includes user validation, session storage, several layers of security, a range of useful methods. Heroku hosting allows back-end functionality on the live deployment.',
      image: imgBlog,
      alt: 'This is one of the blogs of all time.',
      repo: 'https://github.com/the-wake/assignment-14-blog',
      deployment: 'heroku',
    },
    {
      name: 'Employee Management System',
      link: 'https://github.com/the-wake/assignment-12-employee-management',
      description: 'A fully back-end application run via the command line (Node.js). Users can create and update departments, job titles, and employees. The back-end MySQL database enables useful and powerful connections to be created between data points for easy reference and correlation.',
      image: imgEms,
      alt: 'Create and query teams in a flash!',
      repo: 'https://github.com/the-wake/assignment-12-employee-management',
      deployment: 'backend-only',
    },
    {
      name: 'Social Media API',
      link: 'https://github.com/the-wake/a18-social-media-api',
      description: 'This back-end Mongoose-based API has a robust suite of queries allowing users to create accounts, post thoughts, and comment on each other\'s posts. The NoSQL nature of the database allows for greater flexibility in the data, and allows easy creation of connections between data points.',
      image: imgSocialMedia,
      alt: 'Putting the API back in APprecIation!',
      repo: 'https://github.com/the-wake/a18-social-media-api',
      deployment: 'backend-only',
    },
  ]);

  return (
    <div id="portfolio">
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
