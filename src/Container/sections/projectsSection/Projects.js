import React from 'react';
import './Projects.css';
import Project from './Project';
import {data} from './data';
import {BsArrowRight} from 'react-icons/bs';
import img from '../../../images/carli-jeen-15YDf39RIVc-unsplash.jpg';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="section-title">
        <h1 className="title">Projects</h1>
        <div className="underline"></div>
      </div>

      <div className="projects-container">
        <div className="project">
          <div className="project-img">
            <div className="project-img-container">
              <img src={img} alt=""/>
            </div>
          </div>
          <div className="text">
            <div className="project-title">
              <h1>Projects Title</h1>
              <div className="underline"></div>
            </div>
            <div className="project-desc">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae vitae accusamus architecto! Doloremque voluptas cum exercitationem eum. Natus, repudiandae optio</p>
              <a href="#n">Learn more <BsArrowRight className="ml-1" /></a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-img">
            <div className="project-img-container">
              <img src={img} alt=""/>
            </div>
          </div>
          <div className="text">
            <div className="project-title">
              <h1>Projects Title</h1>
              <div className="underline"></div>
            </div>
            <div className="project-desc">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae vitae accusamus architecto! Doloremque voluptas cum exercitationem eum. Natus, repudiandae optio</p>
              <a href="#n">Learn more <BsArrowRight className="ml-1" /></a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-img">
            <div className="project-img-container">
              <img src={img} alt=""/>
            </div>
          </div>
          <div className="text">
            <div className="project-title">
              <h1>Projects Title</h1>
              <div className="underline"></div>
            </div>
            <div className="project-desc">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae vitae accusamus architecto! Doloremque voluptas cum exercitationem eum. Natus, repudiandae optio</p>
              <a href="#n">Learn more <BsArrowRight className="ml-1" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full justify-center flex">
        <a href="#l" className="btn">See All Projects</a>
      </div>
    </div>
  )
}

export default Projects;