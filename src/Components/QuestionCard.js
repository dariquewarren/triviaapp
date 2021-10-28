import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function QuestionCard(props) {
   
   const [realGuess, changeRealGuess] = useState('no guess')
   

   

  // create  an object with the following Keys
  // Question, correctAnswer, guess, isGuessCorrect
  const qObject = {
    question: props.question ,
    correctAnswer:props.correctAnswer ,
    guess: realGuess ,
    isGuessCorrect: (realGuess.toLowerCase() === props.correctAnswer.toLowerCase()),
    
  }
  
    return (
        <div>
        

        <header> 
            <button
            onClick={()=>{
                console.log('qCard props', props)
            }}
            >
            qCard Data
            </button>
            </header>
        </div>
    )
}

export default QuestionCard
