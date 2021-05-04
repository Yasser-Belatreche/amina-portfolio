import React from 'react';
import image from '../../../images/marcos-paulo-prado-gKqIvUBsxEc-unsplash.jpg';
import './resume.css';
import Dots from '../aboutSection/Dots';
import {education, experiences, skills} from './data';
import Skill from './Skill';
import Item from './Item';

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <div className="section-title">
        <h1 className="title">Resume</h1>
        <div className="underline"></div>
      </div>
      
      <div className="resume-container">
        <div className="resume-top">
          <div className="img-container">
            <div className="img">
              <img src={image} alt=""/>
             <Dots/>
            </div>
          </div>

          <div>
            <div className="education">
              <div className="sub-title">
                <h1>Education</h1>
                <div className="underline"></div>
              </div>
              <div className="top-content">
                {
                  education.map((item, index) => {
                    return <Item key={index} {...item} />
                  })
                }
              </div>
            </div>

            <div className="experiences">
              <div className="sub-title">
                <h1>Experiences</h1>
                <div className="underline"></div>
              </div>
              <div className="top-content">
                {
                  experiences.map((experinece, index) => {
                    return <Item key={index} {...experinece}/>
                  })
                }        
              </div>
            </div>
          </div>
        </div>

        <div className="resume-bottom">
          <div className="skills">
            <div className="sub-title pl-5">
              <h1>Skills</h1>
              <div className="underline"></div>
            </div>
            <div className="skills-container">
              {
                skills.map((skill, index) => {
                  return <Skill key={index} {...skill} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;