import React, { useEffect} from 'react';
import './hero.css';
import { init } from 'ityped';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';



const Hero = () => {
  
  useEffect(() => {
    const container = document.querySelector('.role span');
    init(container,{
            showCursor: true,
            strings: ['Translator', 'Content Writer', 'Teacher', 'Freelancer'],
            typeSpeed:  150,
         });
  }, [])

  return (
    <div className="hero" id="hero">
      <Fade>
        <div className="text-container">
          <p className="salutation">Hey! I AM</p>
          <h1 className="name">AMINA SABOUR</h1>
          <h1 className="role">I'm a <span></span></h1>
        </div>

        <div className="btns-container">
          <div>
            <a href="#" className="btn" target="_blanc">Hire Me</a>
          </div>
          <div>
            <Link to="/all-projects">
              <a className="btn">My Work</a>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
    
  )
}

export default Hero;