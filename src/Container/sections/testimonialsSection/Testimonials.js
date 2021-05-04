import React from 'react';
import './testimonials.css';
import Testomonial from './Testimonial';
import {data} from './data';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
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
        >
          {
            data.map((person, index) => {
              return <Testomonial key={index} {...person} />
            })
          }
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials;