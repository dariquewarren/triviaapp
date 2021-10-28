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
        </div> 
    ) 
}

export default QuizPage
