import React, {useState, useEffect} from 'react';
import './hero.css';
import logo from '../../../images/Amina-Logo.png';
import {IoIosArrowDown} from 'react-icons/io';
import { init } from 'ityped';


const Hero = () => {
  const [isSubLinksOpen, setIsSubLinksOpen] = useState(false);
  
  const handleMouseOver = (e) => {
    if (e.target.className.includes("about")) {
      setIsSubLinksOpen(true);
    }else {
      setIsSubLinksOpen(false);
    }
  }

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
      <div className="navbar" onMouseOver={handleMouseOver}>
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>

        <div className="nav-links">
          <div className="link">
            <a href="#hero">home</a>
          </div>
          <div className="link relative">
            <a href="" className="about flex items-center">
              about
              <IoIosArrowDown className="ml-1" style={{zIndex:'-5'}}/>
            </a>

            <div className= {`sub-links ${isSubLinksOpen ? "show" : ""}`}>
              <div className="link" style={{marginTop: "1rem"}}>
                <a href="#hero">Who I am</a>
              </div>
              <div className="link">
                <a href="#hero">Services</a>
              </div>
              <div className="link" style={{marginBottom: "1rem"}}>
                <a href="#hero">fAQ</a>
              </div>
            </div>
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
            <a href="#contact">contact</a>
          </div>
        </div>
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