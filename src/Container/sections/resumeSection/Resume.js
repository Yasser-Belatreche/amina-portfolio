import React from 'react';
import image from '../../../images/marcos-paulo-prado-gKqIvUBsxEc-unsplash.jpg';
import './resume.css';
import Dots from '../aboutSection/Dots';
import {education, experiences, skills} from './data';
import Skill from './Skill';
import Item from './Item';
import star from '../../../images/Star-1.png';
import Fade from 'react-reveal/Fade';


const Resume = () => {
  return (
    <div className="resume" id="resume">
      <Fade bottom>
        <div className="section-title">
          <h1 className="title">Resume</h1>
          <div className="underline"></div>
        </div>
      </Fade>

      <div className="resume-container">
        <div className="resume-top">
          
          <div className="img-container">
            <Fade left>
              <div className="img">
                <img src={image} alt=""/>
                <Dots/>
              </div>
            </Fade>

          </div>

          <div>
            
            <div className="education relative">
              <Fade right>
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
              </Fade>

              <div className="shapes absolute">
                <img src={star} alt=""/>
              </div>
            </div>

            <div className="experiences relative">
              <Fade right>
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
              </Fade>

              <div className="shapes absolute">
                <img src={star} alt=""/>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-bottom relative">
          <div className="skills">
            <Fade bottom>
              <div className="sub-title pl-5">
                <h1>Skills</h1>
                <div className="underline"></div>
              </div>
            </Fade>

            <div className="skills-container">
              <Fade bottom>
                {
                  skills.map((skill, index) => {
                    return <Skill key={index} {...skill} />
                  })
                }
              </Fade>
            </div>
            
          </div>

          <div className="shapes">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;