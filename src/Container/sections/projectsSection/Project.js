import React from 'react';
import {BsArrowRight} from 'react-icons/bs';
import shape from '../../../images/Polygon-1.png';

const Project = ({title,link, img, desc}) => {
  return (
    <div className="project">
      <div className="project-img">
        <div className="project-img-container">
          <img src={img} alt=""/>
        </div>
      </div>
      <div className="text">
        <div className="project-title">
          <h1>{title}</h1>
          <div className="underline"></div>
        </div>
        <div className="project-desc">
          <p>{desc}</p>
          <a href={link}>Learn more <BsArrowRight className="ml-1" /></a>
        </div>
        <div className="shapes">
          <img src={shape} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Project;