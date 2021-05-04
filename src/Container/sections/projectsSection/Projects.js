import React from 'react';
import './Projects.css';
import Project from './Project';
import {data} from './data';

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
            return <Project key={index} {...project}/>
          })
        }
      </div>

      <div className="w-full justify-center flex">
        <a href="#l" className="btn">See All Projects</a>
      </div>
    </div>
  )
}

export default Projects;