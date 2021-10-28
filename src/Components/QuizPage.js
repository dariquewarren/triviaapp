import React, { useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import QuestionCard from './QuestionCard'
function QuizPage(props) {


    return  (
        <div>
      <button
      onClick={()=>{
          console.log('props', props)
      }}
      >QuizPage data button</button>
      {
          (props.quiz)
           ? 
          props.quiz.map((m)=>{
              
            return(
                <QuestionCard key={m.question} {...m}/>
            )
          })
           :
           <p>no quiz data for the card</p>
      }
        </div> 
    ) 
}

export default QuizPage
