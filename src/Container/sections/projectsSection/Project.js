import React from 'react';
import {BsArrowRight} from 'react-icons/bs';
import shape from '../../../images/Polygon-1.png';
import Fade from 'react-reveal/Fade';

const Project = ({title,link, img, desc}) => {
  
  return (
    <div className="project">

      <Fade bottom>
        <div className="project-img">
          <div className="project-img-container">
            <img src={img} alt=""/>
          </div>
        </div>
      </Fade>

      <div className="text">
        <Fade bottom>
          <div className="project-title">
            <h1>{title}</h1>
            <div className="underline"></div>
          </div>
          <div className="project-desc">
            <p>{desc}</p>
            <a href={link}>Learn more <BsArrowRight className="ml-1" /></a>
          </div>
        </Fade>

        <div className="shapes">
          <img src={shape} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Project;