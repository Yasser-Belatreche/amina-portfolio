import React, {useState, useEffect, useRef} from 'react';
import {IoIosArrowDown} from 'react-icons/io';

const Question = ({question, responses}) => {
  const [isAnswersOpen, setIsAnswersOpen] = useState(false);
  const questionContainer = useRef(null);
  const questionHead = useRef(null);
  const answers = useRef(null);

  
  const handleArrowClick = () => {

    setIsAnswersOpen(() => !isAnswersOpen);

    if (!isAnswersOpen) {
      const headHeight = questionHead.current.clientHeight;
      const answersHeight = answers.current.clientHeight;
      questionContainer.current.style.height = headHeight + answersHeight + "px";
    }else {
      const headHeight = questionHead.current.clientHeight;
      questionContainer.current.style.height = headHeight - 2 + "px";
    }
  }

  useEffect(() => {
    if (!isAnswersOpen) {
      const headHeight = questionHead.current.clientHeight;
      questionContainer.current.style.height = headHeight - 2 + "px";
    }
  }, [])


  return (
    <div className={`question-container ${isAnswersOpen ? 'showAnswers' : ''}`} ref={questionContainer}>
      <div className="question-header" ref={questionHead}>
        <div className="question">
          <p>{question}</p>
        </div>
        <div className="icon" onClick={handleArrowClick}>
          <IoIosArrowDown/>
        </div>
      </div>

      <div className="answers" ref={answers}>
        <ul>
          {
            responses.map((answer, index) => {
              return <li key={index}>{answer}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Question;