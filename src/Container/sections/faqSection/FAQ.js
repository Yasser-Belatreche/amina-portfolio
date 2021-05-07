import React from 'react';
import './faq.css';
import {data} from './data';
import Question from './Question';
import Fade from 'react-reveal/Fade';


const FAQ = () => {
  return (
    <div className="faq" id="faq">
      <Fade bottom>
        <div className="section-title">
          <h1 className="title">FAQ</h1>
          <div className="underline"></div>
        </div>
        
        <div className="questions-container">
          {
            data.map((question, index) => {
              return <Question key={index} {...question} />
            })
          }
        </div>
      </Fade>

      <div className="shapes">
        <div className="circle"></div>
      </div>
    </div>
  )
}

export default FAQ;