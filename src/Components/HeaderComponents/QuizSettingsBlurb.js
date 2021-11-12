import React, {useState, useEffect} from 'react'
import Badge from 'react-bootstrap/Badge'

function QuizSettingsBlurb(props) {
    useEffect(()=>{

    console.log('quizSettingsBlurb prps', props)

}, [props.amount])
    return (
      
        <div style={{backgroundColor:'#212121', color:'whitesmoke',fontSize: '2rem', width: '100%', paddingTop: '1rem', paddingBottom: '2rem', marginLeft: 'auto', marginRight : 'auto'}}>
       
        <Badge style={{marginLeft: '1px', marginRight:'1px', paddingLeft: '2px', paddingRight: '2px', width: 'auto'}} >{props.amount}</Badge>         
        <Badge style={{marginLeft: '1px', marginRight:'1px', paddingLeft: '2px', paddingRight: '2px', width: 'auto'}} >{props.difficulty.toUpperCase()}</Badge>
        <Badge style={{marginLeft: '1px', marginRight:'1px', paddingLeft: '2px', paddingRight: '2px', width: 'auto'}} >{props.type}</Badge>
        <Badge style={{ marginLeft: '1px', marginRight:'1px',paddingLeft: '2px', paddingRight: '2px', width: 'auto'}} >{props.category.toUpperCase()} </Badge> Questions
        </div>
    )
}

export default QuizSettingsBlurb
