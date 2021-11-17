import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function QuestionCard(props) {
   return (
       <div>
       {
           (props.quizType === 'boolean') ? <BooleanCard {...props} /> : <MultipleChoiceCard {...props}/>
       }
       </div>
   )

}

const BooleanCard=(props)=>{
    const [userGuess, changeUserGuess] = useState('SELECT AN ANSWER')
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
     questionNumber: props.questionNumber,
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
   })
     return (
         <div style={{justifyItems: 'center', marginLeft: 'auto', marginRight: 'auto', width:'100%', marginTop: '3px', marginBottom: '3px'}}>
             
        {(isGuessSubmitted) 
         ?
 <p></p>
 
          :  
 
 <Card 
 style={
     {border: '4px solid black', marginLeft: 'auto', marginRight: 'auto', width:'65%', backgroundColor: '#6e0303', color: 'whitesmoke'}
         }>
 
 <Card.Header style={{fontSize: '1.5rem', backgroundColor:'black'}}>Q{props.questionNumber}  {decodeURI(props.question)}</Card.Header>
 <h3 style={{fontSize: '1rem',backgroundColor: '#07701d', color: 'whitesmoke', marginTop: '0rem'}}> {(userGuess === 'SELECT AN ANSWER')? `` : `Your Guess: ${userGuess}`} </h3>
 
 <Form 
 onSubmit={(e)=>{
     e.preventDefault()
     if(userGuess === 'SELECT AN ANSWER'){
       return  alert('selct a guess')
     }else{
         props.handleQuizAnswers(qObject)
         props.addQuestionsAnswered(props.questionsAnswered + 1)
         changeIsGuessSubmitted(true)
         console.log('qCard props', props)
 
         }
     
 }
 }
 >
 <Button disabled={(userGuess === 'SELECT AN ANSWER')? true: false} type='submit' style={(userGuess === 'SELECT AN ANSWER')? {borderRadius: '40%', height: '5rem', width: '5rem', backgroundColor: 'grey', color:'whitesmoke'}: {borderRadius: '40%', height: '5rem', width: '5rem', backgroundColor: '#07701d', color:'whitesmoke'} }>{(userGuess === 'SELECT AN ANSWER') ?'Select Your Guess' : 'Submit' }</Button>
 
 <h3>{(isGuessSubmitted)? 'SUBMITTED GUESS' : ''}</h3>
 <Button onClick={(e)=>{
     e.preventDefault()
     console.log('true checkbox target value',e.target.value)
     handleUserGuess(true)
 }}
  id='trueCheckbox'  value='True' 
 style={(userGuess === 'True' ) ?{backgroundColor: '#07701d', color: 'whitesmoke', fontSize: '1rem', width:'50%'} :{backgroundColor: 'black', color: 'whitesmoke', width:'25%' }}
 >True</Button>
 
 
 <Button onClick={(e)=>{
     e.preventDefault()
     console.log('true checkbox target value',e.target.value)
     handleUserGuess(false)
 
 }}  
 style={(userGuess === 'False' ) ?{backgroundColor: '#07701d', color: 'whitesmoke', fontSize: '1rem', width: '50%'} :{backgroundColor: 'black', color: 'whitesmoke', width: '25%' }}
 value='False'>False</Button>
 </Form> 
 
     
             </Card>
 }
       
 
         </div>
     )
}

const MultipleChoiceCard=(props)=>{

    const [answersArray, changeAnswersArray] = useState([...new Set(props.incorrect_answers), props.correct_answer])
const [isGuessSubmitted, changeIsGuessSubmitted] = useState(false)
    const [userGuess, changeUserGuess] = useState('SELECT AN ANSWER')
const {questionsAnswered, quizLength, toggleShowResultsPage} = props

const handleAnswerButtons =  ()=>{

    const shuffledArray =  answersArray.sort(() => Math.random() - 0.5)
    changeAnswersArray(shuffledArray)
    console.log('buttons switched')
  }

      const qObject =  {
        question: props.question ,
        questionNumber: props.questionNumber,
        correctAnswer: props.correct_answer ,
        userGuess: userGuess ,
        isGuessCorrect: (userGuess.toLowerCase() === props.correct_answer.toLowerCase())
        
      }

useEffect(()=>{
    if(questionsAnswered === quizLength){
      toggleShowResultsPage(true)
    }
    handleAnswerButtons()
    
},[answersArray,isGuessSubmitted,handleAnswerButtons,toggleShowResultsPage,questionsAnswered, quizLength])


    return (
        <div style={{marginBottom: '.5rem'}}>

{
    (isGuessSubmitted) ? 
    <p></p>
     :

     <Card
     style={
        {border: '4px solid black', marginLeft: 'auto', marginRight: 'auto', width:'65%', backgroundColor: '#6e0303', color: 'whitesmoke'}
            }
     >
     <Card.Header style={{fontSize: '1.5rem', backgroundColor:'black', marginBottom:'1rem'}}>Q{props.questionNumber} : {decodeURI(props.question)}</Card.Header>
     
     <Form
     onSubmit={(e)=>{
         e.preventDefault()
         if(userGuess === 'SELECT AN ANSWER'){
           return  alert('selct a guess')
         }else{
             props.handleQuizAnswers(qObject)
             props.addQuestionsAnswered(props.questionsAnswered + 1)
handleAnswerButtons()
    changeIsGuessSubmitted(true)
             console.log('qCard props', props)
     
             }
                 }}
     >
    

<div
>
{
    answersArray.map((m)=>{
        return(
            <Button
            key={answersArray.indexOf(m)}
            value={m}
            style={ {color: 'whitesmoke', backgroundColor:(userGuess === m) ? '#07701d': '#212121', 
            width:'100%',
            fontSize:(userGuess === m)?'2rem': '1.5rem',
             fontWeight:(userGuess === m)?'bold': '', 
            textDecoration:(userGuess === m)?'underline': '', 
            textWrap: 'overflow'}}

            onClick={(e)=>{
                e.preventDefault()
                changeUserGuess(e.target.value)
                console.log(e.target.value, m)
  
            }}

            >
            {m}
            </Button>
         


        )
    })
}



</div>


<Card.Footer style={{
    display: 'flex', flexDirection: 'row',  marginLeft:'80%'
   }}>
     <Button 
     style={{width: '100%', height: '2rem',  marginTop:'2rem', backgroundColor: (userGuess === 'SELECT AN ANSWER')?'#212121' : '#07701d', color:'whitesmoke'}}
     disabled={(userGuess=== 'SELECT AN ANSWER') ? true : false} 
     bg='primary' type='submit'
     >Submit</Button>

     </Card.Footer>
     </Form>
     </Card>
}

        
        </div>
    )
}

export default QuestionCard
