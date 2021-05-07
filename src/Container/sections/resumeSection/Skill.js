import React, {useRef, useEffect} from 'react';



const Skill = ({percentage, name}) => {


  return (
    <div className="skill">
      <div className="skill-head">
        <div className="name">
          <h1>{name}</h1>
        </div>
        <div className="percentage">
          <p>{percentage}</p>
        </div>
      </div>
      <div className="skill-rectangle" >
        <div className="skill-amount" style={{width:`${percentage}`}}></div>
      </div>
    </div>
  )
}

export default Skill;