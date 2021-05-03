import React from 'react'

const Service = ({icon, name, desc}) => {
  return (
    <div className="service">
      <div className="icon">{icon}</div>
      <div className="name">
        <h2>{name}</h2>
      </div>
      <div className="service-desc">
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Service;