import React from 'react';
import './testimonials.css';
import Testomonial from './Testimonial';
import {data} from './data';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import shape from '../../../images/Polygon-1.png';
import Fade from 'react-reveal/Fade';


const LeftBtn = ({onClickHandler, label}) => {
  return (
    <div className="left-btn" aria-label="previous slide / item" onClick={onClickHandler}>
      <IoIosArrowBack />
    </div>
  )
}

const RightBtn = ({onClickHandler, label}) => {
  return (
    <div className="right-btn" aria-label="next slide / item" onClick={onClickHandler}>
      <IoIosArrowForward />
    </div>
  )
}


const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <Fade bottom>
        <div className="section-title">
          <h1 className="title">Testimonials</h1>
          <div className="underline"></div>
        </div>
        
        <div className="testimonials-container">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            swipeable={true}
            showThumbs={false}
            renderArrowPrev={(onClickHandler) => <LeftBtn onClickHandler={onClickHandler}/> }
            renderArrowNext={(onClickHandler) => <RightBtn onClickHandler={onClickHandler} />}
          >
            {
              data.map((person, index) => {
                return <Testomonial key={index} {...person} />
              })
            }
          </Carousel>
        </div>
      </Fade>

      <div className="shapes">
        <img src={shape} alt=""/>
        <div className="rectangle"></div>
      </div>
    </div>
  )
}

export default Testimonials;