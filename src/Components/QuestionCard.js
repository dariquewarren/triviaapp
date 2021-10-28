import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function QuestionCard(props) {
   
   const [userGuess, changeUserGuess] = useState('NO GUESS SELECTED')
   const [isGuessSubmitted, changeIsGuessSubmitted] = useState(false)
   


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
  const qObject =  {
    question: props.question ,
    correctAnswer: props.correct_answer ,
    userGuess: userGuess ,
    isGuessCorrect: (userGuess.toLowerCase() === props.correct_answer.toLowerCase())
    
  }
  
    return (
        <div >
        

        <header> 
        <button
        onClick={()=>{
            props.handleQuizAnswers(qObject)
        }}
        >
        handleQuizAnswers
        </button>

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
<h3>Conditionally render the form based on isGuessSubmitted {(isGuessSubmitted)? 'yuppppp' : 'nope'}</h3>
{(isGuessSubmitted) ? 'guess Submitted' :  <Form 
onSubmit={(e)=>{
    e.preventDefault()
    if(userGuess === 'NO GUESS SELECTED'){
      return  alert('selct a guess')
    }else{
        props.handleQuizAnswers(qObject)
        changeIsGuessSubmitted(true)
    }
    
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
</Form> }
           
            </Card>
        </div>
    )
}

export default QuestionCard
