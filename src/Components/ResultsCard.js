import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
function ResultsCard(props) {
    return (
        <div
        style={
            {backgroundColor: (props.isGuessCorrect)? 'green': 'red', border: (props.isGuessCorrect)?'4px solid green' :'4px solid red', marginLeft: 'auto', marginRight: 'auto', 
            width:'65%', color: 'whitesmoke'}}
        >
            <Card >
            <Card.Header style={{fontSize: '2rem',backgroundColor: 'black', color: 'whitesmoke'}}>question # {props.questionNumber} : {props.question}</Card.Header>
           
            <Card.Header style={
                (props.isGuessCorrect) ? { fontSize: '1.5rem', backgroundColor: 'black', color: 'green', marginLeft: 'auto', marginRight: 'auto', 
                width:'65%'} : {fontSize: '1.5rem', backgroundColor: 'black', color: 'red', marginLeft: 'auto', marginRight: 'auto', 
                width:'65%'}
            }>
           <Badge pill style={{color:'whitesmoke', paddingLeft: '1px', paddingRight: '1px', paddingBottom: '1px'}}>
           Correct Answer:
           </Badge> <br></br> {props.correctAnswer}
            </Card.Header>

            <Card.Header style={
                (props.isGuessCorrect) ? {fontSize: '1.5rem', backgroundColor: 'black', color: 'green', marginLeft: 'auto', marginRight: 'auto', 
                width:'65%'} : {fontSize: '1.5rem', backgroundColor: 'black', color: 'red', marginLeft: 'auto', marginRight: 'auto', 
                width:'65%'}
            }>
            <Badge pill style={{color:'whitesmoke', paddingLeft: '1px', paddingRight: '1px', paddingBottom: '1px'}}>
            Your Selection :
            </Badge>
            <br></br>
            {props.userGuess}</Card.Header>

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
