import React from 'react'
import './about.css'
import image from '../../../images/marcos-paulo-prado-gKqIvUBsxEc-unsplash.jpg'

const About = () => {
  return (
    <div className="about" id="about">
      <div className="section-container">
        <div className="section-title">
          <h1 className="title">About me</h1>
        </div>

        <div className="img">
          <img src={image} alt=""/>
        </div>

        <div className="desc">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni consequatur vitae sequi nam atque. Odio voluptatem ab eveniet? Harum praesentium minima esse fugiat numquam sint itaque rerum. Iste, itaque.</p>
          <a className="btn" href="#resume">Learn More</a>
        </div>
      </div>
    </div>
  )
}

export default About;