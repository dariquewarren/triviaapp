import React from 'react'
import Card from 'react-bootstrap/Card'
function ResultsCard(props) {
    return (
        <div>
            <Card style={(props.isGuessCorrect) ? {backgroundColor: 'green', border: '3px solid black'}:{backgroundColor: 'yellow', border: '3px solid red'}}>
            <Card.Header>question{props.question}</Card.Header>
            <Card.Header>correct answer{props.correctAnswer}</Card.Header>
            <Card.Header>your answer{props.userGuess}</Card.Header>

            <button
            onClick={()=>{
                console.log('results card props', props)
            }}
            >results card data button</button>
            </Card>
        </div>
    )
}

export default ResultsCard
