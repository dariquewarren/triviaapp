import React, { useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import QuestionCard from './Components/QuestionCard';
import QuizPage from './Components/QuizPage';
import MainHeader from './Components/MainHeader';

function App() {
  var testArray =[{
    question: ' Click Start To Begin',
    category : 'boolean',
    type :'none',
    correct_answer: 'none',
    incorrect_answers: ['nope', 'welcome', 'hello']
  }]
const [quizData, setQuizData] = useState(testArray)
const [quizAnswers, setQuizAnswers] = useState([])
const [questionsAnswered, addQuestionsAnswered] = useState(0)
const [showResultsPage, toggleShowResultsPage] = useState(false)
const [sessionToken, changeSessiontoken] = useState(0)

// at some point I want different quiz buttons to select different quizzes based on params available like difficulty, amount of questions, category and whether or not the options are strings or boolean
// suggestion: copy the dropdowns on the opendtb website in the api docs
// may have to make two seperate question Cards to accomodate new data 
// OR conditionally render necessary props into the same card (because styling is till tedious for me lol)

const grabSessionToken = () =>{
fetch('https://opentdb.com/api_token.php?command=request').then((response)=> {
 return response.json()
}).then((data)=>{
  console.log('session response', data)
  changeSessiontoken(data.token)
  return data.token
})
}
   const getTriviaData = async (amount, category,difficulty,type )=>{
      grabSessionToken()
    const customParams ={
      amount,
      category,
      difficulty,
      type,
      token: sessionToken 
    }
    const customURL = await'https://opentdb.com/api.php?' + 'amount=' + customParams.amount + '&category=' + customParams.category + '&difficulty=' + customParams.difficulty + '&type=' + customParams.type + '&token=' + customParams.token
    console.log('customParams and token', customParams, sessionToken)
    const originalURL ='https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean'
   console.log('customURL',customURL)
    fetch(customURL).then((response)=>{
      return response.json()
     }).then((data)=>{
// change testData so it adds an error key with the same value as the current question fields
       const testData = [{question: 'N/A. Modify settings and try again. TIP: Try Changing TYPE first ', correct_answer: 'nothing', incorrect_answers: ['none', 'not available', 'null']}]
       let realData = data.results
       if(data.results.length < 1){
        
        return setQuizData(testData)

       }else{
        setQuizData(realData)
        console.log('results',realData)
        return realData
       }
       
      
     })
   }

useEffect(()=>{

},[quizData])

  return (
    <div style={{backgroundColor: '#6e0303', textAlign: 'center'}} >
    <MainHeader style={{marginBottom: '0rem'}}
    getTriviaData={getTriviaData} quizData={quizData} setQuizData={setQuizData} 
    quizAnswers={quizAnswers} setQuizAnswers={setQuizAnswers} 
    questionsAnswered={questionsAnswered} addQuestionsAnswered={addQuestionsAnswered}
    showResultsPage={showResultsPage} toggleShowResultsPage={toggleShowResultsPage}
    />





   <QuizPage style={{backgroundColor: '#6e0303', textAlign: 'center'}}
   quiz={quizData} quizAnswers={quizAnswers} setQuizAnswers={setQuizAnswers}
   questionsAnswered={questionsAnswered} addQuestionsAnswered={addQuestionsAnswered}
   showResultsPage={showResultsPage} toggleShowResultsPage={toggleShowResultsPage}
   />
    </div>
  );
}

export default App;
