// Components
import Questions from './components/Questions.jsx'

import { useState } from 'react'

//images
import backgroundPC from '/src/assets/images/background-pattern-desktop.svg'
import backgroundMobile from '/src/assets/images/background-pattern-mobile.svg'
import iconStar from '/src/assets/images/icon-star.svg'



import './App.css'

function App() {
  const [question, setQuestion] = useState([
    {id:1,question: "What is Frontend Mentor, and how will it help me?",
    answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."},
    {id:2,question: "Is Frontend Mentor free?",
    answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."},
    {id:3,question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."},
    {id:4,question: "How can I get help if I'm stuck on a challenge?",
    answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."},
  ])
  return (
    <>
      <div className="mainContent">
        <img src={backgroundPC} alt="" className='imgPc' />
        <img src={backgroundMobile} alt="" className='imgCelular' />
        <div className="card">
          <div className="upper">
            <img src={iconStar} alt="Estrela" />
            <h1>FAQs</h1>
          </div>
          <div className="topic">
            {question.map((question) => (
              <Questions key={question.id} questionId={question.id} question={question.question} awnser={question.answer} appearing={false}/>
            ))}
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.linkedin.com/in/davigarutti/" target='_blank'>Davi Garutti Diniz</a>.
      </div>
    </>
  )
}

export default App
