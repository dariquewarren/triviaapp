import React, {useEffect} from 'react'
import ResultsCard from './ResultsCard'

function ResultsPage(props) {

// write function to remove duplicates from quiz results array and return a mappable array
// check if necessary aka do this way later in the construction progress lol

    useEffect(()=>{
    
}, [props.quizResults])

    return (
        <div>
<button
onClick={()=>{
    console.log('results page props', props)
}}
>results page quiz answers</button>
{
    (props.quizResults) 
    ? 
    props.quizResults.map((m)=>{
        return !m.isCorrectAnswer && (
            <ResultsCard key={props.quizResults.indexOf(m)} {...m}/>
        )
    })
    : 'no results yet'
}

           
        </div>
    )
}

export default ResultsPage
