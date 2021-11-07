import React, {useState, useEffect, useRef} from 'react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-bootstrap/Modal'
import {FaCogs} from 'react-icons/fa'
import { IconContext } from "react-icons"
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
        <div style={{border:'5px dashed grey'}}>
        
<h1>Quiz Whiz (by Darique Warren)</h1>
                
            <button
            onClick={()=>{
              props.setQuizData([])
              props.setQuizAnswers([])
              props.addQuestionsAnswered(0)
              props.toggleShowResultsPage(false)
             props.getTriviaData(qAmount, qCategory, qDifficulty, qType)
             console.log(props.quizData)
           }}
           style={{fontSize: '3rem', paddingRight: '2rem',backgroundColor: '#3b0161', color:'#2222222', height: '5rem', width:'5rem', borderRadius: '50%'}}
            >{(props.quizData.length < 1) ? 'QUIZ....' : 'NEW QUIZ'  }  </button>



            
            
        
        
      

            {
                (showSettings) 
                ? 
    
                <div>
           <button
           onClick={()=>{
            toggleShowAmount(!showAmount)
            toggleShowCategory(false)
            toggleShowDifficulty(false)
            toggleShowType(false)
           }}
           style={(showAmount)? {backgroundColor: '#6e0303', color: 'black'} : {backgroundColor: '#000277', color: 'whitesmoke'}}
           > {(showAmount) ? '# of Questions' : '# of Questions'} </button>


           <button
            onClick={()=>{
               fetch('https://opentdb.com/api_category.php').then((response)=>{
                   return response.json()
               }).then((data)=>{
                   setCategoryList(data)
                   console.log('data', data)
                   return data
               }).then((data)=>{
                   toggleShowCategory(!showCategory)
                   toggleShowAmount(false)
                   toggleShowDifficulty(false)
                   toggleShowType(false)

               })
           
           }}
           style={(showCategory) ? {backgroundColor: '#6e0303', color: 'black'} : {backgroundColor: '#000277', color:'whitesmoke'} }

           >
           {(showCategory)? 'Categories': 'Categories'}
           </button>       
          
           <button
           onClick={()=>{
               toggleShowDifficulty(!showDifficulty)
               toggleShowAmount(false)
            toggleShowCategory(false)
            toggleShowType(false)
            }}
            style={(showDifficulty)? {backgroundColor: '#6e0303', color: 'black'} : {backgroundColor: '#000277', color: 'whitesmoke'}}

           >{(showDifficulty) ? 'Difficulty': 'Difficulty'}</button>
           
           <button
           onClick={()=>{
               toggleShowType(!showType)
               toggleShowAmount(false)
            toggleShowCategory(false)
            toggleShowDifficulty(false)
           }}
           style={(showType)? {backgroundColor: '#6e0303', color: 'black'} : {backgroundColor: '#000277', color: 'whitesmoke'}}

           > {(showType) ? 'Type' : 'Type'}</button>
           {
            (showAmount)
            ?
            <div style={{border: '2px solid yellow', width:'50%', height:'50%', marginLeft: 'auto', marginRight: 'auto'}}>
            
            <Badge  as='button' 
            value={5}
            style={(qAmount && qAmount < 10)? {backgroundColor: '#07701d', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 
            onClick={(e)=>{
                setQAmount(e.target.value)
            }}> 5 </Badge>
            <Badge as='button' 
            value={10}
            style={(qAmount == 10)? {backgroundColor: '#07701d', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 
            onClick={(e)=>{
                setQAmount(e.target.value)
            }}> 10 </Badge>
            <Badge  as='button' 
            value={15}
            style={(qAmount > 10 && qAmount < 20)? {backgroundColor: '#07701d', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 
            onClick={(e)=>{
                setQAmount(e.target.value)
            }}> 15 </Badge>
            </div>
            
            :
            <p></p>
        }
       
       {
           (showCategory) 
           ?
           <div>               

            <div style={{border: '3px solid red',overflow: 'scroll', width: '50%', height:'6rem', marginLeft: 'auto', marginRight: 'auto'}}>
            
           
             { categoryList.trivia_categories.map((m)=>{
                return(
                   <Button 
                   key={m.id} value={m.id} 
                   style={(categoryName === m.name)? {backgroundColor: '#07701d', color: 'white'} :{backgroundColor: 'grey', color: 'black'}}
                   onClick={(e)=>{
                       e.preventDefault()
                       setQCategory(m.id)
                       setCategoryName(m.name)
                       console.log('name, value',e.target.value, m.name)
                   }}
                   
                   > {m.name}</Button>
                )
            })
              }
            </div>
            </div>

            :
           <p></p>
       }
{
(showDifficulty)
?
<div style={{border: '3px solid #07701d'}}>

<div style={{border: '2px solid yellow', width:'50%', height:'50%', marginLeft: 'auto', marginRight: 'auto'}}>
<Badge  as='button' 
value={'easy'}
style={(qDifficulty === 'easy')? {backgroundColor: '#07701d', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 
onClick={(e)=>{
setQDifficulty(e.target.value) 
}}> Easy </Badge>

<Badge as='button' 
value={'medium'}
style={(qDifficulty === 'medium')? {backgroundColor: '#07701d', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 

onClick={(e)=>{
setQDifficulty(e.target.value) 
}}> Medium </Badge>
<Badge  as='button' 
value={'hard'}
style={(qDifficulty === 'hard')? {backgroundColor: '#07701d', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 
onClick={(e)=>{
setQDifficulty(e.target.value) 
}}> Hard </Badge>
</div>

</div>
:
<p></p>
}

       {
           (showType)
           ?
           <div style={{border: '2px solid red'}}>
           <button
           value={'boolean'}
           style={(qType === 'boolean')? {backgroundColor: '#07701d', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 

           onClick={(e)=>{
               setQType(e.target.value)
           }}
           >True or False</button>
           <button
           value={'multiple'}
           style={(qType === 'multiple')? {backgroundColor: '#07701d', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 

           onClick={(e)=>{
               setQType(e.target.value)
           }}
           >Multiple Choice</button>

           </div>
           :
           <p></p>
       }

           </div>

                :
<p></p>
            }
         





             <div>
             <Badge style={{border: '2px solid #6e0303', backgroundColor: '#6e0303', color: 'whitesmoke'}} >{qAmount}</Badge>         
            <Badge style={{border: '2px solid #212121', backgroundColor: '#212121', color: 'whitesmoke'}} >{qDifficulty}</Badge>
            <Badge style={{border: '2px solid #07701d', backgroundColor: '#07701d', color: 'white'}} >{(qType === 'boolean')? 'true / false': 'multiple choice' }</Badge>
            <Badge style={{border: '2px solid #000277', backgroundColor: '#000277', color: 'white'}} >{categoryName} Questions</Badge>
            <FaCogs
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

            style={{fontSize: '2rem', paddingLeft: '2px', paddingRight: '2px', marginLeft: '2px', marginRight: '2px'}}
            />

             </div>
        </div>
    )
}

export default MainHeader
