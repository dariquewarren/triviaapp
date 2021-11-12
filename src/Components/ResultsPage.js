import React, {useEffect} from 'react'
import ResultsCard from './ResultsCard'
import Badge from 'react-bootstrap/Badge'
function ResultsPage(props) {


let wrongAnswerArray= (props.quizResults) ? props.quizResults.filter((f)=>f.isGuessCorrect === false) : 'nothing here'
let correctAnswerArray= (props.quizResults) ? props.quizResults.filter((f)=>f.isGuessCorrect === true) : 'nothing here'
   
useEffect(()=>{
    console.log('results page props', props)
    console.log('wrongAnswerAmount', wrongAnswerArray)
}, [props.quizResults])

    return (
        <div>
        

       <h2 style={{textAlign: 'left', backgroundColor: '#07701d', marginTop:'0px', textDecoration: 'underline', textDecorationColor: 'black' }}>
       <Badge style={{color: 'whitesmoke', fontSize: '2rem'}}>
            
      FinalScore {(correctAnswerArray.length /props.quizLength ) * 100}%
  </Badge>
  <br></br>
  <Badge style={{color: 'whitesmoke', fontSize: '2rem'}}>
            
  {(correctAnswerArray.length)}/{(props.quizLength) ? props.quizLength : 'undefined'} Right Answers 
      
  </Badge>
  <br></br>

  <Badge style={{color: 'whitesmoke', fontSize: '2rem'}}>
            
  {(wrongAnswerArray.length)}/{(props.quizLength) ? props.quizLength : 'undefined'} Wrong Correct
      
  </Badge>

       </h2>
       <br></br>
       
      

{
    (props.quizResults) 
    ? 
    props.quizResults.map((m)=>{
        return  (
            <div>
            
            <ResultsCard key={props.quizResults.indexOf(m)} {...m}/>
            </div>
        )
    })
    : 'no results yet'
}

           
        </div>
    )
}

export default ResultsPage
