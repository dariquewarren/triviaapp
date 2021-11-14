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
   },[props.questionsAnswered])
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
 <h3 style={{fontSize: '1rem',backgroundColor: '#07701d', color: 'whitesmoke',fontSize: '1.5rem', marginTop: '0rem'}}> {(userGuess === 'SELECT AN ANSWER')? `` : `Your Guess: ${userGuess}`} </h3>
 
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
    const [realAnswersArray, setRealAnswersArray] = useState([])
    const [userGuess, changeUserGuess] = useState('SELECT AN ANSWER')
    const [isGuessSubmitted, changeIsGuessSubmitted] = useState(false)

const answersArray = [...new Set(props.incorrect_answers)]
    answersArray.push(props.correct_answer)

   const shuffleArray =(arr)=> {
        arr.sort(()=>{
          return  Math.random() - 0.5
        })
        const uniqueArr = [...new Set(answersArray)]
      console.log('unique array',uniqueArr);
      setRealAnswersArray(uniqueArr)
return uniqueArr
      }
      
      const qObject =  {
        question: props.question ,
        questionNumber: props.questionNumber,
        correctAnswer: props.correct_answer ,
        userGuess: userGuess ,
        isGuessCorrect: (userGuess.toLowerCase() === props.correct_answer.toLowerCase())
        
      }

useEffect(()=>{
    shuffleArray(answersArray);
    if(props.questionsAnswered === props.quizLength){
        props.toggleShowResultsPage(true)
    }else{
        return
    }
    
    
    console.log(realAnswersArray, props.correct_answer)
}, [props.questionsAnswered])


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
             changeIsGuessSubmitted(true)
             console.log('qCard props', props)
     
             }
                 }}
     >
    

<div
style={{ display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '5rem', width: '100%'}}
>
<Button 
value={realAnswersArray[0]} 
style={ {color: 'whitesmoke', backgroundColor:(userGuess === realAnswersArray[0]) ? '#07701d': '#212121', height: '100%', width: '50%', fontSize:(userGuess === realAnswersArray[0])?'2rem': '1.5rem', fontWeight:(userGuess === realAnswersArray[0])?'bold': '', textDecoration:(userGuess === realAnswersArray[0])?'underline': '', textWrap: 'overflow'}}
onClick={(e)=>{
    e.preventDefault()
    changeUserGuess(e.target.value)
    console.log('wrong answers button', e.target.value)
}}
>{realAnswersArray[0]}</Button>
<Button 
value={realAnswersArray[1]} 
style={ {color: 'whitesmoke', backgroundColor:(userGuess === realAnswersArray[1]) ? '#07701d': '#212121', height: '100%', width: '50%', fontSize:(userGuess === realAnswersArray[1])?'2rem': '1.5rem', fontWeight:(userGuess === realAnswersArray[1])?'bold': '', textDecoration:(userGuess === realAnswersArray[1])?'underline': '', textWrap: 'overflow'}}
onClick={(e)=>{
    e.preventDefault()
    changeUserGuess(e.target.value)
    console.log('wrong answers button', e.target.value)
}}
>{realAnswersArray[1]}</Button>

</div>
<div style={{display:'flex', flexDirection: 'row',alignItems: 'center', justifyContent: 'center',height:'5rem', width: '100%'}}>
<Button 
value={realAnswersArray[2]} 
style={ {color: 'whitesmoke', backgroundColor:(userGuess === realAnswersArray[2]) ? '#07701d': '#212121', height: '100%', width: '50%', fontSize:(userGuess === realAnswersArray[2])?'2rem': '1.5rem', fontWeight:(userGuess === realAnswersArray[2])?'bold': '', textDecoration:(userGuess === realAnswersArray[2])?'underline': '', textWrap: 'overflow'}}
onClick={(e)=>{
    e.preventDefault()
    changeUserGuess(e.target.value)
    console.log('wrong answers button', e.target.value)
}}
>{realAnswersArray[2]}</Button>
<Button 
value={realAnswersArray[3]} 
style={ {color: 'whitesmoke', backgroundColor:(userGuess === realAnswersArray[3]) ? '#07701d': '#212121', height: '100%', width: '50%', fontSize:(userGuess === realAnswersArray[3])?'2rem': '1.5rem', fontWeight:(userGuess === realAnswersArray[3])?'bold': '', textDecoration:(userGuess === realAnswersArray[3])?'underline': '', textWrap: 'overflow'}}
onClick={(e)=>{
    e.preventDefault()
    changeUserGuess(e.target.value)
    console.log('wrong answers button', e.target.value)
}}
>{realAnswersArray[3]}</Button>

</div>

<Card.Footer style={{
    display: 'flex', flexDirection: 'row',  marginLeft:'80%'
   }}>
     <Button 
     style={{width: '100%', height: '2rem',  marginTop:'2rem', backgroundColor: (userGuess === 'SELECT AN ANSWER')?'#212121' : '#07701d', color:'whitesmoke'}}
     disabled={(userGuess=== 'SELECT AN ANSWER') ? true : false} 
     bg='primary' type='submit'
     >{(userGuess=== 'SELECT AN ANSWER') ? 'Select Your Guess' : 'Submit'}</Button>

     </Card.Footer>
     </Form>
     </Card>
}

        
        </div>
    )
}

export default QuestionCard
