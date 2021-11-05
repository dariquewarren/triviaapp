import React, {useState, useEffect} from 'react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-bootstrap/Modal'
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


    // set states for the following to be used with props.gettriviadata function
        //amount, category,difficulty,type

        // consider putting the buttons in the header behond a settings menu

    useEffect(()=>{
        
    }, [show])
    return (
        <div style={{border:'5px dashed grey'}}>
        

    <br></br>
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
            <button

            style={(showSettings)? {backgroundColor: 'red', color: 'black'} : {backgroundColor: 'blue', color: 'whitesmoke'}}

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
    
                <div>
           <button
           onClick={()=>{
            toggleShowAmount(!showAmount)
            toggleShowCategory(false)
            toggleShowDifficulty(false)
            toggleShowType(false)
           }}
           style={(showAmount)? {backgroundColor: 'red', color: 'black'} : {backgroundColor: 'blue', color: 'whitesmoke'}}
           > {(showAmount) ? 'hide # of Questions' : 'show # of Questions'} </button>


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
           style={(showCategory) ? {backgroundColor: 'red', color: 'black'} : {backgroundColor: 'blue', color:'whitesmoke'} }

           >
           {(showCategory)? 'Hide Categories': 'Show Categories'}
           </button>       
          
           <button
           onClick={()=>{
               toggleShowDifficulty(!showDifficulty)
               toggleShowAmount(false)
            toggleShowCategory(false)
            toggleShowType(false)
            }}
            style={(showDifficulty)? {backgroundColor: 'red', color: 'black'} : {backgroundColor: 'blue', color: 'whitesmoke'}}

           >{(showDifficulty) ? 'hide Difficulty Options': 'show Difficulty Options'}</button>
           
           <button
           onClick={()=>{
               toggleShowType(!showType)
               toggleShowAmount(false)
            toggleShowCategory(false)
            toggleShowDifficulty(false)
           }}
           style={(showType)? {backgroundColor: 'red', color: 'black'} : {backgroundColor: 'blue', color: 'whitesmoke'}}

           > {(showType) ? 'Hide Question Type' : 'show Question Type'}</button>
           {
            (showAmount)
            ?
            <div style={{border: '2px solid yellow', width:'50%', height:'50%', marginLeft: 'auto', marginRight: 'auto'}}>
            <h2> Select Amount</h2>
            <Badge  as='button' 
            value={5}
            style={(qAmount && qAmount < 10)? {backgroundColor: 'green', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 
            onClick={(e)=>{
                setQAmount(e.target.value)
            }}> 5 </Badge>
            <Badge as='button' 
            value={10}
            style={(qAmount == 10)? {backgroundColor: 'green', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 
            onClick={(e)=>{
                setQAmount(e.target.value)
            }}> 10 </Badge>
            <Badge  as='button' 
            value={15}
            style={(qAmount > 10 && qAmount < 20)? {backgroundColor: 'green', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 
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
           <div>                 <h2> Select A Category</h2>

            <div style={{border: '3px solid red',overflow: 'scroll', width: '50%', height:'6rem', marginLeft: 'auto', marginRight: 'auto'}}>
            
           
             { categoryList.trivia_categories.map((m)=>{
                return(
                   <Button 
                   key={m.id} value={m.id} 
                   style={(categoryName === m.name)? {backgroundColor: 'green', color: 'white'} :{backgroundColor: 'grey', color: 'black'}}
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
<div style={{border: '3px solid green'}}>

<div style={{border: '2px solid yellow', width:'50%', height:'50%', marginLeft: 'auto', marginRight: 'auto'}}>
<h2> Select Difficulty</h2>
<Badge  as='button' 
value={'easy'}
style={(qDifficulty === 'easy')? {backgroundColor: 'green', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 
onClick={(e)=>{
setQDifficulty(e.target.value) 
}}> Easy </Badge>

<Badge as='button' 
value={'medium'}
style={(qDifficulty === 'medium')? {backgroundColor: 'green', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 

onClick={(e)=>{
setQDifficulty(e.target.value) 
}}> Medium </Badge>
<Badge  as='button' 
value={'hard'}
style={(qDifficulty === 'hard')? {backgroundColor: 'green', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 
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
           <h2> Select A Type</h2>
           <button
           value={'boolean'}
           style={(qType === 'boolean')? {backgroundColor: 'green', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 

           onClick={(e)=>{
               setQType(e.target.value)
           }}
           >True or False</button>
           <button
           value={'multiple'}
           style={(qType === 'multiple')? {backgroundColor: 'green', color: 'white'} :{backgroundColor: 'grey', color: 'black'}} 

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
         





             
            <h2>
            Quiz settings: 
            <Badge style={{border: '2px solid red', backgroundColor: 'red', color: 'whitesmoke'}} >{qAmount}</Badge>         
            <Badge style={{border: '2px solid black', backgroundColor: 'black', color: 'whitesmoke'}} >{qDifficulty}</Badge>
            <Badge style={{border: '2px solid green', backgroundColor: 'green', color: 'white'}} >{(qType === 'boolean')? 'true / false': qType}</Badge>
            <Badge style={{border: '2px solid blue', backgroundColor: 'blue', color: 'white'}} >{categoryName}</Badge>
 
            Questions</h2>
        </div>
    )
}

export default MainHeader
