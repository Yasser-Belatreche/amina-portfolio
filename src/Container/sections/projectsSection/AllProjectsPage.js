import React, {useEffect, useState, useRef} from 'react';
import {data} from './data';
import Project from './Project';
import logo from '../../../images/Amina-Logo.png';

import './Projects.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const ProjectsPage = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const navbar = useRef(null);

  useEffect(() => {  
    navbar.current.style.background = "white";
    navbar.current.style.boxShadow = "4px 4px 10px 0px #36453b36";
  }, [])

  return (
    <>
      <div className= {`nav-container all-projects ${isLinksOpen ? 'showLinks' : ''}`} ref={navbar}>
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
              <Link to="/">
                <a>Back home</a>
              </Link>
            </div>
          </div>
          {/* desktop nav */}
        </div>
        
        {/* phone nav */}
        <div className="nav-links">
          <div className="link">
            <Link to='/'>
              <a onClick={() => {setIsLinksOpen(false)}}> Back home</a>
            </Link>
          </div>
        </div>
        {/* phone nav bar */}
      </div>
      {/* nav bar  */}


      <div className="projects mt-20 mb-40" id="projects">
        <div className="section-title">
          <h1 className="title">All Projects</h1>
          <div className="underline" style={{width:"200px"}}></div>
        </div>

        <div className="projects-container">
          {
            data.map((project, index) => {
              return <Project key={index} {...project}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default ProjectsPage;