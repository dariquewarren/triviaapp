import React, { useState, useEffect} from 'react'
import QuestionCard from './QuestionCard'
function QuizPage(props) {

const [quizResponses, changeQuizResponses] = useState([])

const [questionIndexNumber, modifyQuestionNumber] = useState(0)

const changeQuestionNumber = (direction)=>{
    var newQuestionNumber = questionIndexNumber

if(direction === 'add' && questionIndexNumber <= props.quiz.length ){
  return  modifyQuestionNumber(newQuestionNumber + 1)

} else if(direction === 'subtract'  && questionIndexNumber > -1){
 return   modifyQuestionNumber(newQuestionNumber - 1)

}else{
 return   alert('error')
}


}




const currentQuestion = (theNumber) =>{
    return props.quiz.filter((f)=>{
        return props.quiz.indexOf(f) === theNumber
    })

    
}


const addQuizObject = (quizObject)=>{
const newQuizArray = quizResponses.filter((f)=>f.guess !== 'no guess')
newQuizArray.push(quizObject)
changeQuizResponses(newQuizArray)
console.log(quizResponses)
}


    return  (
        <div>
            
        
        <button
            onClick={()=>{
                console.log('current Question', currentQuestion(questionIndexNumber))

                console.log('props', props)
                console.log('quiz Array', quizResponses)
                
            }}
            >quiz page fns test</button>

            <Button onClick={()=>{
                if(props.questionNumber < 1 ){
                    return alert('too far back')
                } else{
                    props.changeQuestionNumber('subtract')
                }
                
                console.log('quiz length', props.quizLength)
                console.log('question Number', props.questionNumber)
    
            }}>
                previous
                </Button>
    
    
    
            <Button onClick={()=>{
                props.changeQuestionNumber('add')
                console.log('quiz length', props.quizLength)
                console.log('question Number', props.questionNumber)
            }}>
                next
                </Button>

{

  currentQuestion(questionIndexNumber).map((m)=>{
    
    return(
        <QuestionCard 
        key={props.quiz.indexOf(m)}
        quizLength={props.quiz.length}
        changeQuestionNumber={changeQuestionNumber}
        questionNumber={questionIndexNumber}
          
         question={m.question} 
         correctAnswer={m.correct_answer} 
         addQuizObject={addQuizObject} />
    )
})
    
}
      
        </div> 
    ) 
}

export default QuizPage
