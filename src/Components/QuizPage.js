import React, { useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import QuestionCard from './QuestionCard'
function QuizPage(props) {

    const [quizAnswers, setQuizAnswers] = useState([])


    const handleQuizAnswers =(quizObject)=>{

        if(quizObject.userGuess ==='NO GUESS SELECTED'){
          return  alert('select a guess first please')
        } else {
                    // setup a way to remove duplicates from the array before displaying it

            const newAnswerArray = quizAnswers
            newAnswerArray.push(quizObject)
            setQuizAnswers(newAnswerArray)
        }
       
        console.log('quiz object from handle quiz answers',quizObject)
        console.log('quizAnswers',quizAnswers)

        }

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
                <QuestionCard key={m.question} handleQuizAnswers={handleQuizAnswers} {...m}/>
            )
          })
           :
           <p>no quiz data for the card</p>
      }
        </div> 
    ) 
}

export default QuizPage
