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
        <div
        style={{width:'60%', marginLeft:'auto', marginRight: 'auto', display: 'flex', flexDirection: 'row', marginBottom: '2rem', border: '3px ridge whitesmoke'}}
        >
        <div
        style={{width: '33%', borderRight: '3px ridge whitesmoke'}}
        >
        <Badge 
        
        style={{color: 'whitesmoke', fontSize: '2rem', textWrap: 'overflow', width:'100%'}}>
                    
         {correctAnswerArray.length} Right  
        </Badge>
        </div>

        <div 
        style={{width: '33%', borderRight: '3px ridge whitesmoke', backgroundColor: '#212121'}}
        >
        <Badge 
        style={{color: 'whitesmoke', fontSize: '2rem',  textWrap: 'overflow', width:'100%'}}>
                    
       Score: {(correctAnswerArray.length /props.quizLength ) * 100}%
        </Badge>
        </div>
        
     
        <div 
        style={{width: '33%',backgroundColor: '#6e0303'}}
        >
        <Badge 
        style={{color: 'whitesmoke', fontSize: '2rem', textWrap: 'overflow', width:'100%'}}>
                    
        {wrongAnswerArray.length} Wrong 
        </Badge>
        </div>
        </div>


        <div 
        style={{overflowWrap:'break-line', overflow: 'scroll',marginLeft:'auto', marginRight:'auto', width: '80%', border: '6px ridge #6e0303',color: 'whitesmoke', height: '50vh'}}
        >
        <h1>Results</h1>
{
    (props.quizResults) 
    ? 
    props.quizResults.map((m)=>{
        return  (
            <div >
            
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
