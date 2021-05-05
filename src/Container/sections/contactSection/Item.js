import React from 'react';

const Item = ({icon, contact, name}) => {
  return (
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
  )
}

export default Item;