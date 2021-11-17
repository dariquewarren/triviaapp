import React, {useState, useEffect, useRef} from 'react'
import {FaCogs} from 'react-icons/fa'
import QuizSettingsBlurb from './HeaderComponents/QuizSettingsBlurb'
import SettingsMenu from './HeaderComponents/SettingsMenu'
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
// for the modal

const quizThing= props.quizData
const quizDataReference = useRef(quizThing)

    // set states for the following to be used with props.gettriviadata function
        //amount, category,difficulty,type

        // consider putting the buttons in the header behond a settings menu

    useEffect(()=>{
        if(quizThing !== props.quizData){
toggleShowSettings(false)
toggleShowCategory(false)
toggleShowAmount(false)
toggleShowDifficulty(false)
toggleShowType(false)
console.log('not equal quizDataReference',quizDataReference )
        }else{
            console.log('equal quizDataReference', quizDataReference)
        }
        
    }, [showSettings,quizThing, props.quizData])
    return (
        <div style={{ backgroundColor:(showSettings)? '#212121' : '#6e0303'}}>

        <details style={{ backgroundColor: (showSettings)? '#212121' :'', border:(showSettings)? '2px solid #212121': '' }} >
        <summary style={{listStyle: 'none', textAlign: 'right', backgroundColor:(showSettings) ? '#212121' : ''}}>  
        
        <FaCogs
        style={{marginLeft: '5px',marginRight: '5px',height:(showSettings) ? '4rem':'2rem', width: (showSettings)? '4rem':'2rem', backgroundColor: (showSettings) ? '#212121':'#6e0303', color:'whitesmoke'}}            onClick={()=>{
            console.log('show/hide settings')
            if(showSettings === true){
                toggleShowDifficulty(false)
                toggleShowCategory(false)
                toggleShowType(false)
                toggleShowAmount(false)
                toggleShowSettings(false)

            } else{
                toggleShowSettings(true)

            }
        }}

          />
</summary>        
        </details>

        <h1 style={{marginLeft: '5px',marginRight: '5px', marginTop:'0rem', backgroundColor:(showSettings) ? '#212121' : '',  color: 'whitesmoke'}}>
        {(showSettings) ? 'Quiz Settings': 'Quiz Whiz'} 
       </h1>

        {
            (showSettings) 
            ? 

            <div>
            <QuizSettingsBlurb
            amount={qAmount} 
            difficulty={qDifficulty.toUpperCase()} 
            type={(qType === 'boolean')? 'TRUE / FALSE': 'MULTIPLE CHOICE' } 
            category={categoryName.toUpperCase()}
            />

            <button
            onClick={()=>{
              props.setQuizData([])
              props.setQuizAnswers([])
              props.addQuestionsAnswered(0)
              props.toggleShowResultsPage(false)
              
             props.getTriviaData(qAmount, qCategory, qDifficulty, qType)
             toggleShowSettings(false)
             console.log(props.quizData)
           }}
           style={{marginLeft: 'auto',marginRight: 'auto' ,marginBottom: '1rem',height: 'auto', width:'auto',fontSize: '1.5rem', backgroundColor: '#07701d', color:'whitesmoke'}}
            >START QUIZ </button>
            <SettingsMenu
            amount={qAmount} category={qCategory}
            difficulty={qDifficulty} type={qType}
            setQAmount={setQAmount} setQCategory={setQCategory} 
            setQDifficulty={setQDifficulty} setQType={setQType}
            showAmount={showAmount} showCategory={showCategory}
            showDifficulty={showDifficulty} showType={showType}
            setCategoryList={setCategoryList} categoryList={categoryList}
            categoryName={categoryName} setCategoryName={setCategoryName}
            toggleCategory={toggleShowCategory} toggleAmount={toggleShowAmount}
            toggleDifficulty={toggleShowDifficulty} toggleType={toggleShowType}
            />



       
   
   


  

       </div>

            :

            <button
           
            onClick={()=>{
              props.setQuizData([])
              props.setQuizAnswers([])
              props.addQuestionsAnswered(0)
              props.toggleShowResultsPage(false)
             props.getTriviaData(qAmount, qCategory, qDifficulty, qType)
             console.log(props.quizData)
           }}
           style={{marginLeft: 'auto',marginRight: 'auto' ,height: 'auto', width:'auto',fontSize: '1.5rem', backgroundColor: '#212121', color:'whitesmoke'}}
            >START QUIZ </button>
        }





        </div>
    )
}

export default MainHeader
