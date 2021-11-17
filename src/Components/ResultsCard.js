import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
function ResultsCard(props) {
    return (
        <div
        style={
            {backgroundColor: (props.isGuessCorrect)? '#07701d': '#6e0303',color: 'whitesmoke', border: '8px ridge whitesmoke', marginLeft: 'auto', marginRight: 'auto', 
            width:'90%', fontSize: '1.5rem', marginBottom: '.5rem'}}
        >
            <Card >
            <Card.Header style={{fontSize: '2rem', fontWeight: 'bold',marginLeft: 'auto', marginRight:'auto', width: 'auto'}}># {props.questionNumber} : {props.question}</Card.Header>
           
            <Card.Header >
           <Badge pill style={{color:'whitesmoke', paddingLeft: '1px', paddingRight: '1px', paddingBottom: '1px'}}>
           Correct Answer:
           </Badge> <br></br> {props.correctAnswer}
            </Card.Header>

            <Card.Header style={
                (props.isGuessCorrect) ? {fontSize: '1.5rem', backgroundColor: 'black', color: '#07701d', marginLeft: 'auto', marginRight: 'auto', 
                } : {fontSize: '1.5rem', backgroundColor: 'black', color: '#6e0303', marginLeft: 'auto', marginRight: 'auto', 
               }
            }>
            <Badge pill style={{color:'whitesmoke', paddingLeft: '1px', paddingRight: '1px', paddingBottom: '1px'}}>
            Your Guess :
            </Badge>
            <br></br>
            {props.userGuess}</Card.Header>

        
            </Card>
        </div>
    )
}

export default ResultsCard
