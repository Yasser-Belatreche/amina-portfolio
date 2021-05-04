import React, {useState, useEffect} from 'react';
import './hero.css';
import logo from '../../../images/Amina-Logo.png';
import {IoIosArrowDown} from 'react-icons/io';
import { init } from 'ityped';


const Hero = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isSubLinksOpen, setIsSubLinksOpen] = useState(false);
  

  useEffect(() => {
    const container = document.querySelector('.role span');
    init(container,{
            showCursor: true,
            strings: ['Translator', 'Teacher', 'Freelancer', 'Content Writer'],
            typeSpeed:  150,
            
         }); 
  }, [])

  return (
    <>
      <div className= {`nav-container ${isLinksOpen ? 'showLinks' : ''}`}>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          
          <div className="nav-btn" onClick={() => setIsLinksOpen(!isLinksOpen)}>
            <div className="bar first"></div>
            <div className="bar mid"></div>
            <div className="bar last"></div>
          </div>

          {/* desktop nav */}
          <div className="nav-links">
            <div className="link">
              <a href="#hero">home</a>
            </div>
            <div className="link">
              <a href="#about">about</a>
            </div>
            <div className="link">
              <a href="#services">Services</a>
            </div>
            <div className="link">
              <a href="#projects">projects</a>
            </div>
            <div className="link">
              <a href="#resume">resume</a>
            </div>
            <div className="link">
              <a href="#testimonials">testimonials</a>
            </div>
            <div className="link">
              <a href="#faq">fAQ</a>
            </div>
            <div className="link">
              <a href="#contact">contact</a>
            </div>
          </div>
          {/* desktop nav */}
        </div>
        
        {/* phone nav */}
        <div className="nav-links">
          <div className="link">
            <a href="#hero" onClick={() => setIsLinksOpen(false)}>home</a>
          </div>
          <div className="link relative">
            <a href="#" className="about-link flex items-center cursor-pointer" onClick={() => setIsSubLinksOpen(!isSubLinksOpen)}>
              about
              <IoIosArrowDown className="ml-1" style={{zIndex:'-5'}} className={`${isSubLinksOpen ? "rotate" : ""}`} style={{transition:".5s"}}/>
            </a>

            <div className= {`sub-links ${isSubLinksOpen ? "showSubLinks" : ""}`}>
              <div className="link" style={{}}>
                <a href="#about" onClick={() => setIsLinksOpen(false)}>- Who I am</a>
              </div>
              <div className="link">
                <a href="#services" onClick={() => setIsLinksOpen(false)}>- Services</a>
              </div>
              <div className="link" style={{}}>
                <a href="#faq" onClick={() => setIsLinksOpen(false)}>- fAQ</a>
              </div>
            </div>
          </div>
          <div className="link">
            <a href="#projects" onClick={() => setIsLinksOpen(false)}>projects</a>
          </div>
          <div className="link">
            <a href="#resume" onClick={() => setIsLinksOpen(false)}>resume</a>
          </div>
          <div className="link">
            <a href="#testimonials" onClick={() => setIsLinksOpen(false)}>testimonials</a>
          </div>
          <div className="link">
            <a href="#contact" onClick={() => setIsLinksOpen(false)}>contact</a>
          </div>
        </div>
        {/* phone nav bar */}
      </div>
      
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
    </>
    
  )
}

export default Hero;