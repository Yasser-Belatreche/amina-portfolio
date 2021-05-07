import React from 'react';
import './about.css';
import image from '../../../images/marcos-paulo-prado-gKqIvUBsxEc-unsplash.jpg';
import Dots from './Dots';
import {scrollTo} from '../navbar/Navbar';
import Fade from 'react-reveal/Fade';


const About = () => {
  return (
    <div className="about" id="about">
      <div className="section-container">

        <Fade right >
          <div className="section-title">
            <h1 className="title">About me</h1>
            <div className="underline"></div>
          </div>
        </Fade>
        
          <div className="img-container relative">
            <Fade left> 
              <div className="img">
                <img src={image} alt=""/>
              </div>
            </Fade>

            <Dots/>
          </div>
        
        <Fade right>
          <div className="desc">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni consequatur vitae sequi nam atque. Odio voluptatem ab eveniet? Harum praesentium minima esse fugiat numquam sint itaque rerum. Iste, itaque.</p>
            <a className="btn" onClick={() => scrollTo("resume")}>Learn More</a>
          </div>
        </Fade>
        <div className="shapes">
          <div className="circle"></div>
          <div className="rectangle"></div>
        </div>
      </div>
    </div>
  )
}

export default About;