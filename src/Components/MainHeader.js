import React, {useState, useEffect, useRef} from 'react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-bootstrap/Modal'
import {FaCogs, FaCheck} from 'react-icons/fa'

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
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [quizThing, changeQuizThing] = useState(props.quizData)
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
        
    }, [show, props.quizData])
    return (
        <div style={{border:'5px solid #6e0303', backgroundColor: '#6e0303'}}>
        
<h1 style={{color: 'whitesmoke', textDecoration:(showSettings) ?'none': 'underline', textDecorationColor:(showSettings)? 'none' : '#212121'}}>

<button
            onClick={()=>{
              props.setQuizData([])
              props.setQuizAnswers([])
              props.addQuestionsAnswered(0)
              props.toggleShowResultsPage(false)
             props.getTriviaData(qAmount, qCategory, qDifficulty, qType)
             console.log(props.quizData)
           }}
           style={{marginLeft: '5px',marginRight: '5px', marginTop:'0rem' , marginBottom: '0rem', height: 'auto', width:'8rem',fontSize: '1.5rem', paddingLeft: '1rem', paddingRight: '2rem',  backgroundColor: '#212121', color:'whitesmoke'}}
            >START  </button>

            <p style={{marginLeft: '5px',marginRight: '5px', marginTop:'0rem', color:'whitesmoke'}}>
             {(showSettings) ? 'Quiz Settings': 'Quiz Whiz'}
            <FaCogs
            style={(showSettings)? 
                {marginLeft: '5px',marginRight: '5px',height: '4rem', width:'4rem', backgroundColor: '#6e0303', color:'#212121'}
                : 
                {marginLeft: '5px',marginRight: '5px',height: '2rem', width:'2rem', backgroundColor: '#6e0303', color:'whitesmoke'}
                }            onClick={()=>{
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

              />


            </p>


         
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
<p></p>
            }
         





            
        </div>
    )
}

export default MainHeader
