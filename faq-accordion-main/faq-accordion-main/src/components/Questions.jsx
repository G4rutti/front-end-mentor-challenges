import iconMinus from '/src/assets/images/icon-minus.svg';
import iconPlus from '/src/assets/images/icon-plus.svg';

import './Questions.css';
import { useEffect, useState } from 'react';

const Questions = ({ question, awnser, appearing, questionId }) => {
  const [aparecendo, setAparecendo] = useState(appearing);

  const handleAwnser = () => {
        if(aparecendo){
            setAparecendo(false)
        }else{
            setAparecendo(true)
        }
        console.log(questionId)
    };


  useEffect(() => {
    if (questionId === 1) {
        setAparecendo(true);
      }
  }, [questionId])


  return (
    <>
      <div className="question">
        <h2 onClick={handleAwnser} id={questionId}>{question}</h2>
        <span>
          <img
            id={questionId}
            onClick={handleAwnser}
            src={aparecendo ? iconMinus : iconPlus}
            alt=""
          />
        </span>
      </div>
      <div className={questionId === 4 ? 'answer' : 'answer borda'}>
        <p className={aparecendo ? 'answerOpen' : 'answerClosed'}>
          {awnser}
        </p>
      </div>
    </>
  );
};

export default Questions;