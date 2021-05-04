import React from 'react';
import {data} from './data';
import Service from './Service';
import './services.css';
const Services = () => {
  return (
    <div className="services" id="services">
      <div className="section-title">
        <h1 className="title">Services</h1>
        <div className="underline"></div>
      </div>

      <div className="services-container">
        {
          data.map((service, index) => {
            return <Service key={index} {...service}/>
          })
        }
      </div>

      <div className="shapes">
        <div className="circle"></div>
        <div className="rectangle"></div>
      </div>
    </div>
  )
}

export default Services;