import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function QuestionCard(props) {
   const [correctAnswer, setCorrectAnswer ] = useState(props.correctAnswer)
   const [checkboxResult, changeCheckboxResult] = useState(null)
   const [isAnswerCorrect, changeIsAnswerCorrect] = useState(false)
   const [guessTrue, changeGuessTrue] = useState(true)
   const [guessFalse, changeGuessFalse] = useState(false)
   const [realGuess, changeRealGuess] = useState('no guess')
   

   const checkAnswer= (guess)=>{
       console.log('props.question', props.question)
       console.log('props.correct answer', props.correctAnswer)
       console.log('Boolean props.correct answer', Boolean(props.correctAnswer))
    
    const rightAnswer = props.correctAnswer


     
   }

  // create function that makes and submits an object with the following Keys
  // Question, correctAnswer, guess, isGuessCorrect
  const qObject = {
    question: props.question ,
    correctAnswer:props.correctAnswer ,
    guess: realGuess ,
    isGuessCorrect: (realGuess.toLowerCase() === props.correctAnswer.toLowerCase()),
    
  }
  
    return (
        <div>
        
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
        <header> 
            <Card >
            QUESTION NUMBER {props.questionNumber + 1}
            <Card.Header>
        
            <p>{props.question}</p>
            <p>{realGuess}</p>
            <p style={(isAnswerCorrect)? {color: 'green'}:{color: 'red'} }>is the answer correct? </p>
            </Card.Header>
         
        <Form onSubmit={(e)=>{
            e.preventDefault()
            checkAnswer(checkboxResult)
            props.addQuizObject(qObject)
        }}>
 
        <Button
        onClick={(e)=>{
            e.preventDefault()
            console.log('true botton target val',e.target.value)
            changeRealGuess(e.target.value)
        }}
        value= {guessTrue}> True</Button>
        <Button
        onClick={(e)=>{
            e.preventDefault()
            console.log('false botton target val',e.target.value)
            changeRealGuess(e.target.value)
        }}
        value= {guessFalse}> False</Button>
        
        <Button variant="primary" type="submit">
    Submit Answer
  </Button>
        </Form>
            
            answer: {correctAnswer}
            </Card>
            
            </header>
        </div>
    )
}

export default QuestionCard
