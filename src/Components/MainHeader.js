import React, {useState} from 'react'
import Badge from 'react-bootstrap/Badge'
// at some point I want different quiz buttons to select different quizzes based on params available like difficulty, amount of questions, category and whether or not the options are strings or boolean
// suggestion: copy the dropdowns on the opendtb website in the api docs
// may have to make two seperate question Cards to accomodate new data 
// OR conditionally render necessary props into the same card (because styling is till tedious for me lol)

function MainHeader(props) {
// just for the main fetch call
const [qAmount, setQAmount] = useState(10)
const [qCategory, setQCategory] = useState(9)
const [qDifficulty, setQDifficulty] = useState('easy')
const [qType, setQType] = useState('boolean')
// just for the component ui display
const [categoryName, setCategoryName] = useState('General Knowledge')
const [categoryList, setCategoryList] = useState([])
// show hide quiz parameter selection components
const [showCategory, toggleShowCategory] = useState(false)
const [showAmount, toggleShowAmount] = useState(false)
const [showDifficulty, toggleShowDifficulty] = useState(false)
const [showType, toggleShowType] = useState(false)


    // set states for the following to be used with props.gettriviadata function
        //amount, category,difficulty,type

        // consider putting the buttons in the header behond a settings menu
    return (
        <div>
            <h1>Main header</h1>
            <row>
             # Of Questions{qAmount} Category: {categoryName} Difficulty:{qDifficulty} Type: {qType}
            </row>
            <br></br>
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
            
            <button># of Questions</button>


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
            
            }}>
            {(showCategory)? 'Hide Categories': 'Show Categories'}
            </button>       

            <button
            onClick={()=>{
                toggleShowType(!showType)
            }}
            >Select Type</button>

            {
                (showType)
                ?
                <div>
                <button
                value={'boolean'}
                onClick={(e)=>{
                    setQType(e.target.value)
                }}
                >True or False</button>
                <button
                value={'multiple'}
                onClick={(e)=>{
                    setQType(e.target.value)
                }}
                >Multiple Choice</button>

                </div>
                :
                <p></p>
            }
            <button>Difficulty</button>
            
            </row>
            {
                (showCategory) 
                ?
                 <div style={{border: '3px solid black'}}>
                  <h2> Select A Category</h2>
                  { categoryList.trivia_categories.map((m)=>{
                     return(
                        
                         <button 
                         key={m.id} value={m.id} 
                         onClick={(e)=>{
                             e.preventDefault()
                             console.log('name, value',e.target.value, m.name)
                         }}
                         
                         > {m.name}</button>
                         
                     )
                 })
                   }
                 </div>:
                <p></p>
            }
        </div>
    )
}

export default MainHeader
