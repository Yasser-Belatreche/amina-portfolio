import React, { useEffect, useRef} from 'react';
import './hero.css';
import { init } from 'ityped';


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
      <div className="text-container">
        <p className="salutation">Hey! I AM</p>
        <h1 className="name">AMINA SABOUR</h1>
        <h1 className="role">I'm a <span></span></h1>
      </div>

      <div className="btns-container">
        <div >
          <a href="#" className="btn">Hire Me</a>
        </div>
        <div >
          <a href="#" className="btn">My Work</a>
        </div>
      </div>
    </div>
    
  )
}

export default Hero;