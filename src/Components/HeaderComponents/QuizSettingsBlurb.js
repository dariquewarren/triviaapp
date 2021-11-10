import React, {useState, useEffect} from 'react'
import Badge from 'react-bootstrap/Badge'

function QuizSettingsBlurb(props) {


useEffect(()=>{
    console.log('quizSettingsBlurb prps', props)
}, [props])
    return (
      
        <div style={{color:'whitesmoke',fontSize: '2rem', width: '80%', paddingTop: '1rem', paddingBottom: '2rem', marginLeft: 'auto', marginRight : 'auto'}}>
        Quiz has:<br/>                                   
        <Badge style={{marginLeft: '1px', marginRight:'1px', backgroundColor: '#cf8f03', color: 'whitesmoke', paddingLeft: '2px', paddingRight: '2px', width: 'auto'}} >{props.amount}</Badge>         
        <Badge style={{marginLeft: '1px', marginRight:'1px', backgroundColor: '#212121', color: 'whitesmoke', paddingLeft: '2px', paddingRight: '2px', width: 'auto'}} >{props.difficulty.toUpperCase()}</Badge>
        <Badge style={{marginLeft: '1px', marginRight:'1px', backgroundColor: '#07701d', color: 'whitesmoke', paddingLeft: '2px', paddingRight: '2px', width: 'auto'}} >{(props.type === 'boolean')? 'TRUE / FALSE': 'MULTIPLE CHOICE' }</Badge>
        <Badge style={{ marginLeft: '1px', marginRight:'1px',backgroundColor: '#e41811e1', color: 'whitesmoke', paddingLeft: '2px', paddingRight: '2px', width: 'auto'}} >{props.category.toUpperCase()} </Badge> Questions
        </div>
    )
}

export default QuizSettingsBlurb
