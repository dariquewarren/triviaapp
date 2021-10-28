import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function QuestionCard(props) {
   
   const [userGuess, changeUserGuess] = useState('NO GUESS SELECTED')
   const [guessTrue, changeGuessTrue] = useState(false)
   const [guessFalse, changeGuessFalse] = useState(false)


   const handleUserGuess=(guess)=>{
       if(guess){
           console.log('HUG...guess is true')
           changeUserGuess('True')
       }else{
           console.log('HUG...guess is not true')
           changeUserGuess('False')

       }
       console.log('log the guess', guess)
   }

  // create  an object with the following Keys
  // Question, correctAnswer, guess, isGuessCorrect
  const qObject = {
    question: props.question ,
    correctAnswer:props.correctAnswer ,
    userGuess: userGuess ,
    isGuessCorrect: (userGuess.toLowerCase() === props.correct_answer.toLowerCase())
    
  }
  
    return (
        <div >
        

        <header> 
            <button
            onClick={()=>{
                console.log('qCard props', props)
            }}
            >
            qCard Data
            </button>
            </header>
            <Card>
            <Card.Header>{props.question}</Card.Header>
            <h3>Your Guess: {userGuess}</h3>
            <Form 
            onSubmit={(e)=>{
                e.preventDefault()
                console.log('fquestion object', qObject)
            }
            }
            >
            <Button onClick={(e)=>{
                e.preventDefault()
                console.log('true checkbox target value',e.target.value)
                handleUserGuess(true)
            }}
             id='trueCheckbox'  value='True' 
            style={(userGuess === 'True' ) ?{backgroundColor: 'blue'} :{backgroundColor: 'grey', }}
            >True</Button>
            <Button onClick={(e)=>{
                e.preventDefault()
                console.log('true checkbox target value',e.target.value)
                handleUserGuess(false)

            }}  
            style={(userGuess === 'False' ) ?{backgroundColor: 'blue'} :{backgroundColor: 'grey', }}
            value='False'>False</Button>
            <Button type='submit'> Submit/ data test</Button>
            </Form>
            </Card>
        </div>
    )
}

export default QuestionCard
