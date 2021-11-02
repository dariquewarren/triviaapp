import React, { useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import QuestionCard from './Components/QuestionCard';
import QuizPage from './Components/QuizPage';
import MainHeader from './Components/MainHeader';

function App() {
const [quizData, setQuizData] = useState([])
const [quizAnswers, setQuizAnswers] = useState([])
const [questionsAnswered, addQuestionsAnswered] = useState(0)
const [showResultsPage, toggleShowResultsPage] = useState(false)

// at some point I want different quiz buttons to select different quizzes based on params available like difficulty, amount of questions, category and whether or not the options are strings or boolean
// suggestion: copy the dropdowns on the opendtb website in the api docs
// may have to make two seperate question Cards to accomodate new data 
// OR conditionally render necessary props into the same card (because styling is till tedious for me lol)
   const getTriviaData =()=>{
     fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean').then((response)=>{
      return response.json()
     }).then((data)=>{
       const realData = data.results
       setQuizData(data.results)
      console.log('results',data.results)
      return realData
      
     })
   }

useEffect(()=>{

},[quizData])

  return (
    <div className="App">
   <header>
  
   </header>
<MainHeader 
getTriviaData={getTriviaData} quizData={quizData} setQuizData={setQuizData} 
quizAnswers={quizAnswers} setQuizAnswers={setQuizAnswers} 
questionsAnswered={questionsAnswered} addQuestionsAnswered={addQuestionsAnswered}
showResultsPage={showResultsPage} toggleShowResultsPage={toggleShowResultsPage}
/>




   <QuizPage 
   quiz={quizData} quizAnswers={quizAnswers} setQuizAnswers={setQuizAnswers}
   questionsAnswered={questionsAnswered} addQuestionsAnswered={addQuestionsAnswered}
   showResultsPage={showResultsPage} toggleShowResultsPage={toggleShowResultsPage}
   />
    </div>
  );
}

export default App;
