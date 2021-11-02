import React, {useState} from 'react'

// at some point I want different quiz buttons to select different quizzes based on params available like difficulty, amount of questions, category and whether or not the options are strings or boolean
// suggestion: copy the dropdowns on the opendtb website in the api docs
// may have to make two seperate question Cards to accomodate new data 
// OR conditionally render necessary props into the same card (because styling is till tedious for me lol)

function MainHeader(props) {
const [qAmount, setQAmount] = useState(10)
const [qCategory, setQCategory] = useState(9)
const [qDifficulty, setQDifficulty] = useState('easy')
const [qType, setQType] = useState('boolean')


    // set states for the following to be used with props.gettriviadata function
        //amount, category,difficulty,type
    return (
        <div>
            <h1>Main header</h1>
            <row>
            <button
            onClick={()=>{
              props.setQuizData([])
              props.setQuizAnswers([])
              props.addQuestionsAnswered(0)
              props.toggleShowResultsPage(false)
             props.getTriviaData(qAmount, qCategory, qDifficulty, qType)
             console.log(props.quizData)
           }}
            >{(props.quizData.length < 1) ? 'start quiz' : 'new quiz'  }  </button>
            
            <button>Category</button>
            <button># of Questions</button>
            <button>multipleChoice/boolean</button>
            <button>Difficulty</button>
            
            </row>
        </div>
    )
}

export default MainHeader
