import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function QuestionCard(props) {
   
   const [userGuess, changeUserGuess] = useState('NO GUESS SELECTED')
   const [guessTrue, changeGuessTrue] = useState(false)
   const [guessFalse, changeGuessFalse] = useState(false)


   const handleUserGuess=(guess)=>{
       console.log('log the guess', guess)
   }

  // create  an object with the following Keys
  // Question, correctAnswer, guess, isGuessCorrect
//   const qObject = {
//     question: props.question ,
//     correctAnswer:props.correctAnswer ,
//     guess: realGuess ,
//     isGuessCorrect: (realGuess.toLowerCase() === props.correctAnswer.toLowerCase()),
    
//   }
  
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
                console.log('form e target', e.target.trueCheckBox)
            }
            }
            >
            <Form.Check onClick={(e)=>{
                console.log('true checkbox target value',e.target.value)
                changeUserGuess(e.target.value)
                handleUserGuess(e.target.value)
            }} id='trueCheckbox' type='checkbox' label='True' value='True'/>
            <Form.Check onClick={(e)=>{
                console.log('true checkbox target value',e.target.value)
                changeUserGuess(e.target.value)
            }} style={(userGuess === 'False' ? {display: 'block'} : {display: 'none'} )} type='checkbox' label='False' value='False'/>
            <Button type='submit'> Submit/ data test</Button>
            </Form>
            </Card>
        </div>
    )
}

export default QuestionCard
