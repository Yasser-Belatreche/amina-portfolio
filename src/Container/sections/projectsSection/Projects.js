import React from 'react';
import './Projects.css';
import Project from './Project';
import {data} from './data';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';


const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Fade bottom>
        <div className="section-title">
          <h1 className="title">Projects</h1>
          <div className="underline"></div>
        </div>
      </Fade>

      <div className="projects-container">
        {
          data.map((project, index) => {
            if (index < 3) {
              return <Project key={index} {...project} fadeImage='left' fadeText='right'/>
            }
          })
        }
      </div>

      <Fade bottom>
        <div className="w-full justify-center flex">
          <Link to="/all-projects">
            <a className="btn">See All Projects</a>
          </Link>
        </div>
      </Fade>
    </div>
  )
}

export default Projects;