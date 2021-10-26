import React, { useState} from 'react'
import logo from './logo.svg';
import './App.css';
import QuestionCard from './Components/QuestionCard';
import QuizPage from './Components/QuizPage';
function App() {
const [quizData, setQuizData] = useState([])
   const getTriviaData =()=>{
     fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean').then((response)=>{
      return response.json()
     }).then((data)=>{
       const realData = data.results
      console.log('results',data.results)
      
      setQuizData(realData)
      console.log('quizData',quizData)
     })
   }
  return (
    <div className="App">
   <header>
   <button
   onClick={()=>{
     
    getTriviaData()
    
  }}
   > Test Data Button</button>
   </header>
<QuizPage quiz={quizData} quizLength={quizData.length}/>

    </div>
  );
}

export default App;
