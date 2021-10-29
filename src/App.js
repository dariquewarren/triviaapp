import React, { useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import QuestionCard from './Components/QuestionCard';
import QuizPage from './Components/QuizPage';
function App() {
const [quizData, setQuizData] = useState([])
const [quizAnswers, setQuizAnswers] = useState([])
const [questionsAnswered, addQuestionsAnswered] = useState(0)
   
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
   <button
  onClick={()=>{
    setQuizData([])
    setQuizAnswers([])
    addQuestionsAnswered(0)
   getTriviaData()
   console.log(quizData)
 }}
  >{(quizData) ? 'new quiz': 'start quiz' }  </button>
  
   </header>

   <QuizPage 
   quiz={quizData} quizAnswers={quizAnswers} setQuizAnswers={setQuizAnswers}
   questionsAnswered={questionsAnswered} addQuestionsAnswered={addQuestionsAnswered}
   />
    </div>
  );
}

export default App;
