import React, {useState} from 'react'
import Badge from 'react-bootstrap/Badge'
// at some point I want different quiz buttons to select different quizzes based on params available like difficulty, amount of questions, category and whether or not the options are strings or boolean
// suggestion: copy the dropdowns on the opendtb website in the api docs
// may have to make two seperate question Cards to accomodate new data 
// OR conditionally render necessary props into the same card (because styling is till tedious for me lol)

function MainHeader(props) {
const [qAmount, setQAmount] = useState(10)
const [qCategory, setQCategory] = useState(9)
const [qDifficulty, setQDifficulty] = useState('easy')
const [qType, setQType] = useState('boolean')
const [showCategory, toggleShowCategory] = useState(false)
const [categoryList, setCategoryList] = useState([])

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
            
            <button onClick={()=>{
                fetch('https://opentdb.com/api_category.php').then((response)=>{
                    return response.json()
                }).then((data)=>{
                    setCategoryList(data)
                    console.log('data', data)
                    return data
                }).then((data)=>{
                    toggleShowCategory(!showCategory)

                })
            
            }}>{(showCategory)? 'Hide Categories': 'Show Categories'}</button>
            {
                
            }
           {
               (showCategory) 
               ?
               categoryList.trivia_categories.map((m)=>{
                return(
                    <button key={m.id} value={m.id}> {m.name}</button>
                )
            })
                :
               <p></p>
           }

            <button>
           

            # of Questions</button>
            <button>multipleChoice/boolean</button>
            <button>Difficulty</button>
            
            </row>
        </div>
    )
}

export default MainHeader
