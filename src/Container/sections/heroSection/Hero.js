import React, {useState, useEffect, useRef} from 'react';
import './hero.css';
import logo from '../../../images/Amina-Logo.png';
import {IoIosArrowDown} from 'react-icons/io';
import { init } from 'ityped';


const Hero = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isSubLinksOpen, setIsSubLinksOpen] = useState(false);
  const navbar = useRef(null);
  

  const scrollTo = (section) => {
    let target = document.getElementById(section);
    let topOffset = target.offsetTop;
    window.scrollTo(0,topOffset - 80);
    console.log(topOffset, section, target);
  }

  useEffect(() => {
    const container = document.querySelector('.role span');
    init(container,{
            showCursor: true,
            strings: ['Translator', 'Content Writer', 'Teacher', 'Freelancer'],
            typeSpeed:  150,
         });
         
    document.addEventListener('scroll', (e) => {
      if (window.scrollY > 50) {
        navbar.current.style.background = "white";
        navbar.current.style.boxShadow = "4px 4px 10px 0px #36453b36";
      }else {
        navbar.current.style.background = "transparent";
        navbar.current.style.boxShadow = "none";
      }
    })
  }, [])

  return (
    <>
      <div className= {`nav-container ${isLinksOpen ? 'showLinks' : ''}`} ref={navbar}>
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
              <a onClick={() => scrollTo("hero")}>home</a>
            </div>
            <div className="link">
              <a  onClick={() => scrollTo("about")}>about</a>
            </div>
            <div className="link">
              <a onClick={() => scrollTo("services")}>Services</a>
            </div>
            <div className="link">
              <a onClick={() => scrollTo("projects")}>projects</a>
            </div>
            <div className="link">
              <a onClick={() => scrollTo("resume")}>resume</a>
            </div>
            <div className="link">
              <a onClick={() => scrollTo("testimonials")}>testimonials</a>
            </div>
            <div className="link">
              <a onClick={() => scrollTo("faq")}>fAQ</a>
            </div>
            <div className="link">
              <a onClick={() => scrollTo("contact")}>contact</a>
            </div>
          </div>
          {/* desktop nav */}
        </div>
        
        {/* phone nav */}
        <div className="nav-links">
          <div className="link">
            <a onClick={() => {setIsLinksOpen(false);scrollTo("hero");}}>home</a>
          </div>
          <div className="link relative">
            <a className="about-link flex items-center cursor-pointer" onClick={() => setIsSubLinksOpen(!isSubLinksOpen)} >
              about
              <IoIosArrowDown className="ml-1" style={{zIndex:'-5'}} className={`${isSubLinksOpen ? "rotate" : ""}`} style={{transition:".5s"}}/>
            </a>

            <div className= {`sub-links ${isSubLinksOpen ? "showSubLinks" : ""}`}>
              <div className="link">
                <a onClick={() => {setIsLinksOpen(false);scrollTo("about")}}>- Who I am</a>
              </div>
              <div className="link">
                <a onClick={() => {setIsLinksOpen(false);scrollTo("services")}}>- Services</a>
              </div>
              <div className="link">
                <a onClick={() => {setIsLinksOpen(false);scrollTo("faq")}}>- fAQ</a>
              </div>
            </div>
          </div>
          <div className="link">
            <a onClick={() => {setIsLinksOpen(false);scrollTo("projects")}}>projects</a>
          </div>
          <div className="link">
            <a onClick={() => {setIsLinksOpen(false);scrollTo("resume")}} >resume</a>
          </div>
          <div className="link">
            <a onClick={() => {setIsLinksOpen(false);scrollTo("testimonials")}} >testimonials</a>
          </div>
          <div className="link">
            <a onClick={() => {setIsLinksOpen(false);scrollTo("contact")}} >contact</a>
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