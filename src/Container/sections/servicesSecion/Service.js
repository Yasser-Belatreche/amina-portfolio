import React from 'react';
import Fade from 'react-reveal/Fade';

const Service = ({icon, name, desc}) => {
  return (
    <Fade bottom>
      <div className="service">
        <div className="icon">{icon}</div>
        <div className="name">
          <h2>{name}</h2>
        </div>
        <div className="service-desc">
          <p>{desc}</p>
        </div>
      </div>
    </Fade>
  )
}

export default Service;