import React, { useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import QuestionCard from './QuestionCard'
import ResultsPage from './ResultsPage'

function QuizPage(props) {

    
   
 
  
    const handleQuizAnswers =(quizObject)=>{

        if(quizObject.userGuess ==='NO GUESS SELECTED'){
          return  alert('select a guess first please')
        } else if(props.quizAnswers.includes(quizObject)){
          return alert('dupe detected hopefully stopped')
        } else {
                    // setup a way to remove duplicates from the array before displaying it

            const newAnswerArray = props.quizAnswers
            newAnswerArray.push(quizObject)
            props.setQuizAnswers(newAnswerArray)
            console.log('quiz object from handle quiz answers',quizObject)
            console.log('quizAnswers',props.quizAnswers)
        }
       
       

        }

        useEffect(()=>{

        },[props.quizData])


    return  (
        <div style={{backgroundColor: '#07701d', paddingBottom: '2rem'}}>
        
    
     <Badge style={{marginTop: '3px',backgroundColor: 'black', color: 'whitesmoke'}}>questions answered{props.questionsAnswered}/{(props.quiz) ? props.quiz.length : 'undefined'} <button
     onClick={()=>{
         console.log('quizpagedata props', props)
       console.log('quiz answers array', props.quizAnswers )
     }}
     >QuizPage data button</button>
 </Badge>
    
      
    
      {
          (props.quiz && props.showResultsPage === false)
           ? 
          props.quiz.map((m)=>{

            return(
                <QuestionCard 
                key={m.question} questionNumber={props.quiz.indexOf(m) + 1}
                 handleQuizAnswers={handleQuizAnswers} 
                questionsAnswered={props.questionsAnswered}
                  addQuestionsAnswered={props.addQuestionsAnswered} 
                  toggleShowResultsPage={props.toggleShowResultsPage}
                  quizLength={props.quiz.length}
                  quizType={m.type}
                 {...m}/>
            )
          })
           :
           <ResultsPage quizResults={props.quizAnswers}/>
      }

     
        </div> 
    ) 
}

export default QuizPage
