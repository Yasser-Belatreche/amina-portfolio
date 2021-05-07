import React from 'react';
import Fade from 'react-reveal/Fade';


const Item = ({icon, contact, name}) => {
  return (
    <Fade bottom>
      <div className="single-contact">
        <div className="icon">
          {icon}
        </div>
        <div className="name">
          <p>{name}</p>
        </div>
        <div className="content">
          <p>{contact}</p>
        </div>
      </div>
    </Fade>
  )
}

export default Item;