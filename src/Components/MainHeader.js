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
const [showSettings, toggleShowSettings] = useState(false)



    // set states for the following to be used with props.gettriviadata function
        //amount, category,difficulty,type

        // consider putting the buttons in the header behond a settings menu
    return (
        <div style={{border:'5px dashed grey'}}>
       

            <h1>Main header
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


            </h1>
           
            
            <h2>
            Quiz settings: 
            <Badge style={{border: '2px solid red', backgroundColor: 'red', color: 'whitesmoke'}} >{qAmount}</Badge>         
            <Badge style={{border: '2px solid black', backgroundColor: 'black', color: 'whitesmoke'}} >{qDifficulty}</Badge>
            <Badge style={{border: '2px solid green', backgroundColor: 'green', color: 'white'}} >{(qType === 'boolean')? 'true / false': qType}</Badge>
            <Badge style={{border: '2px solid blue', backgroundColor: 'blue', color: 'white'}} >{categoryName}</Badge>
 
            Questions</h2>
            <button

            style={(showSettings) ? {backgroundColor: 'blue', color: 'black'} : {backgroundColor: 'red', color:'whitesmoke'} }

            onClick={()=>{
                console.log('show/hide settings')
                if(showSettings){
                    toggleShowDifficulty(false)
                    toggleShowCategory(false)
                    toggleShowType(false)
                    toggleShowAmount(false)
                    toggleShowSettings(!showSettings)

                } else{
                    toggleShowSettings(!showSettings)

                }
            }}
            > {(showSettings) ? 'CLOSE QUIZ SETTINGS' : 'OPEN QUIZ SETTINGS'} </button>


            

            {
                (showSettings) 
                ? 
                   
           <row>
            
           <button
           onClick={()=>toggleShowAmount(!showAmount)}
           > {(showAmount) ? 'hide # of Questions' : 'show # of Questions'} </button>


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
               toggleShowDifficulty(!showDifficulty)
            }}
            
           >{(showDifficulty) ? 'hide Difficulty Options': 'show Difficulty Options'}</button>
           
           <button
           onClick={()=>{
               toggleShowType(!showType)
           }}
           > {(showType) ? 'Hide Question Type' : 'show Question Type'}</button>

           </row>

                :
<p></p>
            }
         





             {
                 (showAmount)
                 ?
                 <div style={{border: '2px solid yellow'}}>
                 <h2> Select Amount</h2>
                 <button
                 value={5}
                onClick={(e)=>{
                    setQAmount(e.target.value)
                }}
                 >5 (five)</button>
                 <button
                 value={10}
                 onClick={(e)=>{
                     setQAmount(e.target.value)
                 }}
                 >10 (ten)</button>
                 <button
                 value={15}
                 onClick={(e)=>{
                     setQAmount(e.target.value)
                 }}
                 >15 (Fifteen)</button>

                 </div>
                 :
                 <p></p>
             }
            
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
                             setQCategory(m.id)
                             setCategoryName(m.name)
                             console.log('name, value',e.target.value, m.name)
                         }}
                         
                         > {m.name}</button>
                         
                     )
                 })
                   }
                 </div>:
                <p></p>
            }
{
    (showDifficulty)
    ?
<div style={{border: '3px solid green'}}>
<h2> Select A Difficulty</h2>
<button
value={'easy'}
onClick={(e)=>{
   setQDifficulty(e.target.value) 
}}
>easy</button>
<button
value={'medium'}
onClick={(e)=>{
    setQDifficulty(e.target.value) 
 }} 
>medium</button>
<button
value={'hard'}
onClick={(e)=>{
    setQDifficulty(e.target.value) 
 }}
 
>hard</button>

</div>
    :
    <p></p>
}

            {
                (showType)
                ?
                <div style={{border: '2px solid red'}}>
                <h2> Select A Type</h2>
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

        </div>
    )
}

export default MainHeader
