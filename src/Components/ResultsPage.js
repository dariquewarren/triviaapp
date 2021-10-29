import React, {useEffect} from 'react'
import ResultsCard from './ResultsCard'

function ResultsPage(props) {
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
        return (
            <ResultsCard key={props.quizResults.indexOf(m)} {...m}/>
        )
    })
    : 'no results yet'
}

           
        </div>
    )
}

export default ResultsPage
