import React, { useState, useEffect} from 'react'
import QuestionCard from './QuestionCard'
function QuizPage(props) {

const [quizResponses, changeQuizResponses] = useState([])

const quizLengthArray = Array(props.quizLength)
const [questionNumber, modifyQuestionNumber] = useState(0)

const changeQuestionNumber = (direction)=>{
    var newQuestionNumber = questionNumber

if(direction === 'add'){
  return  modifyQuestionNumber(newQuestionNumber + 1)

} else if(direction === 'subtract'){
 return   modifyQuestionNumber(newQuestionNumber - 1)

}else{
 return   alert('error')
}


}




const currentQuestion = (theNumber) =>{
    const theQuestion = props.quiz.filter((f)=>{
        return props.quiz.indexOf(f) === theNumber
    })
return theQuestion
}

const correctSpot = (questionNumber < props.quizLength) 
const addQuizObject = (quizObject)=>{
const newQuizArray = quizResponses
newQuizArray.push(quizObject)
changeQuizResponses(newQuizArray)
console.log(quizResponses)
}


    return (correctSpot) ? (
        <div>Quiz page
            
        
        <button
            onClick={()=>{
                console.log('current Question', currentQuestion(0))

                console.log('props', props)
                console.log('quiz Array', quizResponses)
                console.log('quiz length Array', quizLengthArray)

            }}
            >quiz page fns test</button>

{


    currentQuestion(questionNumber).map((m)=>{
    
        return(
            <QuestionCard 
            key={props.quiz.indexOf(m)}
            quizLength={props.quiz.length}
            changeQuestionNumber={changeQuestionNumber}
            questionNumber={questionNumber}
              
             question={m.question} 
             correctAnswer={m.correct_answer} 
             addQuizObject={addQuizObject} />
        )
    })
}
      
        </div> 
    ) : (
         <div>
         <button onClick={(e)=>{
             e.preventDefault()
             const placeNumber = props.quizLength -1
             modifyQuestionNumber(placeNumber)
             console.log(questionNumber)
         }}>go back</button>

         <button>get results</button>
        </div>)
}

export default QuizPage
