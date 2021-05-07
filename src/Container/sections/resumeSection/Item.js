import React from 'react';
import {FaGraduationCap} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';


const Item = ({periode, desc}) => {
  return (
    <Fade right>
      <div className="single-item">
        <div className="icon">
          <FaGraduationCap />
        </div>
        <div className="item-content">
          <div className="periode">
            <p>{periode}</p>
          </div>
          <div className="desc">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Item;