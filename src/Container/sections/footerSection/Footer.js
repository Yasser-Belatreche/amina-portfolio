import React from 'react'
import './footer.css'
import {FaFacebook,FaInstagram,FaTwitter,FaQuora} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-links">
        <div className="section-title">
          <h1 className="title">Social Links</h1>
          <div className="underline"></div>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, mollitia!</p>
        <div className="icons">
          <div className="icon">
            <a href=""><FaFacebook /></a>
          </div>
          <div className="icon">
            <a href=""><FaInstagram /></a>
          </div>
          <div className="icon">
            <a href=""><AiFillLinkedin /></a>
          </div>
          <div className="icon">
            <a href=""><FaTwitter /></a>
          </div>
          <div className="icon">
            <a href=""><FaQuora /></a>
          </div>
        </div>
      </div>

      <div className="btns-container">
        <div>
          <a href="\" className="btn">Download CV</a>
        </div>
        <div>
          <a href="\" className="btn">Let’s Talk</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;