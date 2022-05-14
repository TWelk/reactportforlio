import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'text-editor',
      description: 'MERN Stack',
      link: "https://twlktexteditor.herokuapp.com",
      repo: "https://github.com/TWelk/TextEditor"
    },
    {
      name: 'project-two',
      description: 'Node.js/Express.js/Handlebars/MySQL Note: This is still under development.',
      link: "https://groupprojectii-app.herokuapp.com/",
      repo: "https://github.com/microjess/project2"
    },
    {
      name: 'tech-blog',
      description: 'Node.js/Handelbars.js/MySQL Sequalize/Express.js',
      link: "https://welktechblog-app.herokuapp.com/",
      repo: "https://github.com/TWelk/TechBlog"
    },
    {
      name: 'note-taker',
      description: 'Node.js/Routes/MySQL Sequalize/Express.js',
      link: "https://floating-mesa-65516.herokuapp.com/",
      repo: "https://github.com/TWelk/NoteTaker"
    },
    {
      name: 'rock-paper-scissors',
      description: 'HTML/JavaScript/CSS',
      link: "https://twelk.github.io/rpsproject/",
      repo: "https://github.com/TWelk/rpsproject"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
