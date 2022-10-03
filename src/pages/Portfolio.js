import React, { useState } from 'react';
import Project from '../components/Project.js';
import imgCrawler from '../assets/crawler.jpg';
import imgFinder from '../assets/dnd.jpg';
import imgBlog from '../assets/blog.jpg';
import imgEms from '../assets/ems.jpg';
import imgEditor from '../assets/jate.jpg';
import imgWeather from '../assets/weather.jpg';
import imgSocialMedia from '../assets/social-media-api.jpg';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Dungeon Crawler',
      link: 'https://frozen-bayou-97963.herokuapp.com/',
      description: 'One of the toughtest parts of running a tabletop RPG dungeon is simply keeping track of every last creature, trinket, and secret. Dungeon Crawler is a full-stack SQL-driven website that makes tracking a sprawling campaign as easy as clicking a button. This application takes the tedium out of running dungeons by letting users quickly and easily do things like create dungeons and rooms, manage monsters, update stats, and even allows for multiple campaigns to be managed at once!',
      image: imgCrawler,
      repo: 'https://github.com/the-wake/project-2-dungeon-crawler',
    },
    {
      name: 'Monster Finder',
      link: 'https://the-wake.github.io/project-1-dnd/',
      description: 'Every DM (Dungeon Master) knows that you can\'t build an encounter without monsters! Every DM also knows that as a system ages, tracking down monsters becomes a huge hassle. The D&D Monster Finder uses the open5e API to seach monsters from a huge range of official and unofficial sources. Users can select their desired Challenge Rating, browse mosters color-coded by type, and save lists of monsters they intend to use.',
      image: imgFinder,
      repo: 'https://github.com/the-wake/project-1-dnd',
    },
    {
      name: 'Full-Stack Blog',
      link: 'https://vast-citadel-10428.herokuapp.com/',
      description: 'A full-stack, SQL-driven blog webpage. Users can create and edit posts, write comments, and render lists of recent posts. Includes user validation, session storage, several layers of security, a range of useful methods. Heroku hosting allows babck-end functionality on the live deployment.',
      image: imgBlog,
      repo: 'https://github.com/the-wake/assignment-14-blog',
    },
    {
      name: 'Employee Management System',
      link: 'https://github.com/the-wake/assignment-12-employee-management',
      description: 'A fully back-end application run via the command line (Node.js). Users can create and update departments, job titles, and employees. The back-end MySQL database enables useful and powerful connections to be created between data points for easy reference and correlation.',
      image: imgEms,
      repo: 'https://github.com/the-wake/assignment-12-employee-management',
    },
    {
      name: 'Text Editor',
      link: 'https://safe-earth-41888.herokuapp.com/',
      description: 'A simple text editor program built and deployed using Webpackage architecture. User-entered data is automatically stored to local sotrage and IndexedDB via service workers. This lets the user pick up where they left off. In addition, the application can be downloaded and run locally, with the local intance being automatically synced with the online application.',
      image: imgEditor,
      repo: 'https://github.com/the-wake/a19-text-editor',
    },
    {
      name: 'Weather Dashboard',
      link: 'https://the-wake.github.io/assignment-6-weather/',
      description: 'Have you ever wondered what the weather is like outside? Have you ever wondered what the weather is like somewhere else? Have you ever wanted to know what the weather will be like five days from now? If you answered "yes" to any of these questions, congratulations! This application can answer them for you! Drawing from the OpenWeather API, it will return the current conditions and 5-day forecast for any city you enter.',
      image: imgWeather,
      repo: 'https://github.com/the-wake/assignment-6-weather',
    },
    {
      name: 'Social Media API',
      link: 'https://github.com/the-wake/a18-social-media-api',
      description: 'This back-end Mongoose-based API has a robust suite of queries allowing users to create accounts, post thoughts, and comment on each other\'s posts. The NoSQL nature of the database allows for greater flexibility in the data, and allows easy creation of connections between data points.',
      image: imgSocialMedia,
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
