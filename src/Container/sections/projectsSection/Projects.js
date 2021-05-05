import React from 'react';
import './Projects.css';
import Project from './Project';
import {data} from './data';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="section-title">
        <h1 className="title">Projects</h1>
        <div className="underline"></div>
      </div>

      <div className="projects-container">
        {
          data.map((project, index) => {
            if (index < 3) {
              return <Project key={index} {...project}/>
            }
          })
        }
      </div>

      <div className="w-full justify-center flex">
        <Link to="/all-projects">
          <a className="btn">See All Projects</a>
        </Link>
      </div>
    </div>
  )
}

export default Projects;