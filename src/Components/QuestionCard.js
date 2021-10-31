import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function QuestionCard(props) {
   
   const [userGuess, changeUserGuess] = useState('NO GUESS SELECTED')
   const [isGuessSubmitted, changeIsGuessSubmitted] = useState(false)
   
   
// when the form is submitted i want to do the following
// 1 check if the amount of questions answered is equal to the quiz length
// 2 if amount is not equal to quiz lenght:
        // ---add quiz object yes
        // -- add 1 to amount of questions answrred yes
        // -change guess submissiion to true yes
    // if amount is equal to quiz length:
    // ---add quiz object yes
        // -- add 1 to amount of questions answrred yes
        // -change guess submissiion to true yes
        // --- LASTLY... set the show results page state to true

       
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
  useEffect(()=>{
if(props.questionsAnswered === props.quizLength){
    props.toggleShowResultsPage(true)
}else{
    return
}
  },[props.questionsAnswered])
    return (
        <div >
               
          
         
{(isGuessSubmitted) ? <h3 style={{backgroundColor: 'grey', border: '4px solid green'}}>Guess submitted</h3> :  
<Card style={{border: '4px solid black'}}>
<Form 
onSubmit={(e)=>{
    e.preventDefault()
    if(userGuess === 'NO GUESS SELECTED'){
      return  alert('selct a guess')
    }else{
        props.handleQuizAnswers(qObject)
        props.addQuestionsAnswered(props.questionsAnswered + 1)
        changeIsGuessSubmitted(true)
        }
    
}
}
>
<Card.Header>{props.question}</Card.Header>
<h3>Your Guess: {userGuess}</h3>
<h3>{(isGuessSubmitted)? 'SUBMITTED GUESS' : ''}</h3>
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

    <button
    onClick={(e)=>{
        e.preventDefault()
        console.log('qCard props', props)
    }}
    >
    qCard Data
    </button>
            </Card>
}


        </div>
    )
}

export default QuestionCard
