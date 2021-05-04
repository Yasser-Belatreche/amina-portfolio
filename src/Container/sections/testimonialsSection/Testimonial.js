import React from 'react';

const Testimonials = ({name, text, image}) => {
  return (
    <div className="testimonial">
      <div className="img">
        <img src={image} alt=""/>
      </div>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Testimonials;