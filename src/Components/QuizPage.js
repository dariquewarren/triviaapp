import React from 'react'
import QuestionCard from './QuestionCard'
function QuizPage(props) {
    return (
        <div>Quiz page
            <button
            onClick={()=>{
                console.log('props', props)
            }}
            >Test Button</button>

            {
                props.quiz.map((m)=>{
                    return(
                        <QuestionCard key={m.question} question={m.question} correctAnswer={m.correct_answer} />
                    )
                })
            }

            
        </div>
    )
}

export default QuizPage
