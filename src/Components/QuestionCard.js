import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
function QuestionCard(props) {
   const [correctAnswer, setCorrectAnswer ] = useState(props.correctAnswer)
   const [checkboxResult, changeCheckboxResult] = useState(false)
    return (
        <div>
            <header> 
            <Card>
        <Form>
        <Form.Check
        type='checkbox'
        label= {`checkbox ${checkboxResult}`}
        value= {checkboxResult}
onClick={()=>{
    changeCheckboxResult(!!!checkboxResult)
    console.log(checkboxResult)
}}
        />
        </Form>
            <Card.Header>
        
            <p>{props.question}</p>
            </Card.Header>
            answer: {correctAnswer}
            </Card>
            
            </header>
        </div>
    )
}

export default QuestionCard
