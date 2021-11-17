import React, {useEffect} from 'react'
import ResultsCard from './ResultsCard'
import Badge from 'react-bootstrap/Badge'
function ResultsPage(props) {


let wrongAnswerArray= (props.quizResults) ? props.quizResults.filter((f)=>f.isGuessCorrect === false) : 'nothing here'
let correctAnswerArray= (props.quizResults) ? props.quizResults.filter((f)=>f.isGuessCorrect === true) : 'nothing here'
   
useEffect(()=>{
    
}, [])

    return (
        <div style={{}}>
     
        <div
        style={{color: 'whitesmoke', fontSize: '1.5rem', width:'80%',marginTop: '0rem', marginLeft:'auto', marginRight: 'auto', display: 'flex', flexDirection: 'row', marginBottom: '2rem', border: '3px ridge whitesmoke'}}
        >

        <div 
        style={{width: '33%', borderRight: '3px ridge whitesmoke'}}
        >
      
        <Badge 
        style={{ textWrap: 'overflow', width:'100%'}}>
                 
        {(correctAnswerArray.length /props.quizLength ) * 100}%
        </Badge>
        <h5>
        Score
        </h5> 
        </div>
        <div
        style={{width: '33%', borderRight: '3px ridge whitesmoke'}}
        >
    
        <Badge 
        
        style={{ textWrap: 'overflow', width:'100%'}}>
                  
         {correctAnswerArray.length}   
        </Badge>
        <h5>
        Correct
        </h5> 
        </div>        
     
        <div 
        style={{width: '33%'}}
        >
        
    
        <Badge 
        style={{ textWrap: 'overflow', width:'100%'}}>
                    
         {wrongAnswerArray.length} 
        </Badge>
        <h5>
        Incorrect
        </h5>
        </div>
        
        </div>

        <h1
        style={{color:'whitesmoke'}}
        >Results</h1>
        <div 
        style={{overflowWrap:'break-line', overflow: 'scroll',marginLeft:'auto', marginRight:'auto', width: '80%', border: '6px ridge #6e0303',color: 'whitesmoke', height: '50vh'}}
        >
        
{
    (props.quizResults) 
    ? 
    props.quizResults.map((m)=>{
        return  (
            <div >
            <br key={props.quizResults.indexOf(m)}/>
            
            <ResultsCard key={props.quizResults.indexOf(m)} {...m}/>
            </div>
        )
    })
    : 'no results yet'
}
</div>

        </div>
    )
}

export default ResultsPage
