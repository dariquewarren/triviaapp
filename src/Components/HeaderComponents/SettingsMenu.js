import React, {useState, useEffect} from 'react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import {FaCogs, FaCheck} from 'react-icons/fa'

const SettingsMenu =  (props) => {
    
    
useEffect(()=>{
    console.log('settingsMenu prps', props)

})
    return (
        <div style={{backgroundColor: '#212121'}}>
            <div>
            <button
            onClick={()=>{
                props.toggleAmount(!props.showAmount)
                props.toggleCategory(false)
                props.toggleDifficulty(false)
                props.toggleType(false)
            }}
            style={(props.showAmount)? {backgroundColor: '#07701d', color: 'whitesmoke', width:'40%',height:'2rem', fontSize:'1rem'} : {backgroundColor: '#212121', color: 'whitesmoke', width:'20%',height:'2rem', fontSize:'1rem'}}
            > AMOUNT</button>
 
           
            <button
             onClick={()=>{
                fetch('https://opentdb.com/api_category.php').then((response)=>{
                    return response.json()
                }).then((data)=>{
                    props.setCategoryList(data)
                    console.log('data', data)
                    return data
                }).then((data)=>{
                    props.toggleCategory(!props.showCategory)
                    props.toggleDifficulty(false)
                    props.toggleAmount(false)
                    props.toggleType(false)
 
                })
            
            }}
            style={(props.showCategory) ? {backgroundColor: '#07701d', color: 'whitesmoke', width:'40%',height:'2rem', fontSize:'1rem'} : {backgroundColor: '#212121', color:'whitesmoke', width:'20%',height:'2rem', fontSize:'1rem'} }
 
            >
            TOPIC  </button>       
           
            <button
            onClick={()=>{
                props.toggleDifficulty(!props.showDifficulty)
                props.toggleCategory(false)
                props.toggleAmount(false)
                props.toggleType(false)
            }}
            style={(props.showDifficulty)? {backgroundColor: '#07701d', color: 'whitesmoke', width:'40%',height:'2rem', fontSize:'1rem'} : {backgroundColor: '#212121', color: 'whitesmoke', width:'20%',height:'2rem', fontSize:'1rem'}}
       
            >LEVEL</button>
            
            <button
            onClick={()=>{

                props.toggleType(!props.showType)
                props.toggleCategory(false)
                props.toggleDifficulty(false)
                props.toggleAmount(false)
            }}
            style={(props.showType)? {backgroundColor: '#07701d', color: 'whitesmoke', width:'40%',height:'2rem', fontSize:'1rem'} : {backgroundColor: '#212121', color: 'whitesmoke', width:'20%',height:'2rem', fontSize:'1rem'}}
       
            >TYPE</button>
 
            {(props.showAmount)
                ?
                <AmountMenu qAmount={props.amount} setQAmount={props.setQAmount} />
                :
            <p></p>
            }

            {(props.showCategory)
                ?
                <CategoryMenu 
                qCategory={props.category} 
                setQCategory={props.setQCategory} 
                categoryList={props.categoryList} 
                categoryName={props.categoryName} 
                setCategoryName={props.setCategoryName}/>
                :
            <p></p>
            }
            {(props.showDifficulty)
                ?
                <DifficultyMenu qDifficulty={props.difficulty} setQDifficulty={props.setQDifficulty} />
                :
            <p></p>
            }
            {(props.showType)
                ?
                <TypeMenu qType={props.type} setQType={props.setQType}/>
                :
            <p></p>
            }
 
            </div>
        </div>
    )
}

function AmountMenu(props){
    useEffect(()=>{
        console.log('amount prps', props)
    }, [props])
    return(
        <div>
        <h2 style={{ color: 'whitesmoke',width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        Select # Of Questions 
        </h2>
         <div style={{ width:'90%', height:'50%', marginLeft: 'auto', marginRight: 'auto'}}>
                     
        
         
         <Badge  as='button' 
         value={5}
         style={(props.qAmount && props.qAmount < 10)? 
         {backgroundColor: '#07701d', color: 'whitesmoke', marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: '3rem', fontSize: '1.5rem'} 
         :
         {backgroundColor: '#212121', color: 'whitesmoke',  marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: '3rem', fontSize: '1.5rem'}} 
         onClick={(e)=>{
            props.setQAmount(e.target.value)
         }}> 5 </Badge>
         
         <Badge as='button' 
         value={10}
         style={(props.qAmount == 10)? 
             {backgroundColor: '#07701d', color: 'whitesmoke', marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: '3rem', fontSize: '1.5rem'} 
             :
             {backgroundColor: '#212121', color: 'whitesmoke',  marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: '3rem', fontSize: '1.5rem'}} 
         onClick={(e)=>{
            props.setQAmount(e.target.value)
         }}> 10 </Badge>
         
         <Badge  as='button' 
         value={15}
         style={(props.qAmount > 10 && props.qAmount < 20)? 
             {backgroundColor: '#07701d', color: 'whitesmoke',  marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: '3rem', fontSize: '1.5rem'} 
             :
             {backgroundColor: '#212121', color: 'whitesmoke',  marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: '3rem', fontSize: '1.5rem'}} 
         onClick={(e)=>{
            props.setQAmount(e.target.value)
         }}> 15 </Badge>
         
      
        </div>
        </div>

    )
}

function CategoryMenu(props){
    useEffect(()=>{
        console.log('vtgry prps', props)
    }, [props])
    return(
        <div>
        <h2 style={{ color: 'whitesmoke',width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        Pick A Category (scrollable)
        </h2>
         <div style={{border: '4px groove grey ', paddingTop: '4px',paddingBottom: '4px', overflow: 'scroll', width: '75%', height:'6rem', marginLeft: 'auto', marginRight: 'auto'}}>
         
        
          { (props.categoryList && props) ? props.categoryList.trivia_categories.map((m)=>{
             return(
                <Button 
                key={m.id} value={m.id} 
           
                style={(props.categoryName === m.name)? 
                 {border: '3px solid #212121', backgroundColor: '#07701d', color: 'whitesmoke',height: 'auto', width: 'auto', fontSize: '1.5rem'} 
                :
                {backgroundColor: '#212121', color: 'grey', height: 'auto', width: 'auto', fontSize: '1.5rem'}}
                onClick={(e)=>{
                    e.preventDefault()
                    props.setQCategory(m.id)
                    props.setCategoryName(m.name)
                    console.log('name, value',e.target.value, m.name)
                }}
                
                >{(props.categoryName === m.name) ? <p> {m.name} <FaCheck/></p> :`${m.name}`}</Button>
             )
         }):
         <p> retrieveing list</p>
           }
           </div>
        </div>
    )
}
function DifficultyMenu(props){
    useEffect(()=>{
        console.log('difficty prps', props)
    }, [props])
    return(
        <div >
            
        <h2 style={{ color: 'whitesmoke',width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
         Difficulty Level
        </h2>
        
        <div style={{ width:'50%', height:'50%', marginLeft: 'auto', marginRight: 'auto'}}>
        <Badge  as='button' 
        value={'easy'}
        style={(props.qDifficulty === 'easy')? 
        {backgroundColor: '#07701d', color: 'whitesmoke', marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: 'auto', fontSize: '1.5rem'} 
        :
        {backgroundColor: '#212121', color: 'whitesmoke',  marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: 'auto', fontSize: '1.5rem'}} 
        onClick={(e)=>{
            props.setQDifficulty(e.target.value) 
        }}> Easy </Badge>
        
        <Badge as='button' 
        value={'medium'}
        style={(props.qDifficulty === 'medium')? 
        {backgroundColor: '#07701d', color: 'whitesmoke', marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: 'auto', fontSize: '1.5rem'} 
        :
        {backgroundColor: '#212121', color: 'whitesmoke',  marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: 'auto', fontSize: '1.5rem'}} 
        
        onClick={(e)=>{
            props.setQDifficulty(e.target.value) 
        }}> Medium </Badge>
        <Badge  as='button' 
        value={'hard'}
        style={(props.qDifficulty === 'hard')? 
        {backgroundColor: '#07701d', color: 'whitesmoke', marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: 'auto', fontSize: '1.5rem'} 
        :
        {backgroundColor: '#212121', color: 'whitesmoke',  marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: 'auto', fontSize: '1.5rem'}} 
        onClick={(e)=>{
        props.setQDifficulty(e.target.value) 
        }}> Hard </Badge>
        </div>
        
        </div>
    )
}

function TypeMenu(props){
    useEffect(()=>{
        console.log('type prps', props)
    }, [props])
    return(
        <div >
                       
        <h2 style={{ color: 'whitesmoke',width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        Change Question Type
        </h2>
 
        <button
        value={'boolean'}
        style={(props.qType === 'boolean')? 
        {backgroundColor: '#07701d', color: 'whitesmoke', marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: 'auto', fontSize: '1.5rem'} 
        :
        {backgroundColor: '#212121', color: 'whitesmoke',  marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: 'auto', fontSize: '1.5rem'}} 
         onClick={(e)=>{
            props.setQType('boolean')
        }}
        >True or False</button>
        <button
        value={'multiple'}
        style={(props.qType === 'multiple')?
        {backgroundColor: '#07701d', color: 'whitesmoke', marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: 'auto', fontSize: '1.5rem'} 
        :
        {backgroundColor: '#212121', color: 'whitesmoke',  marginLeft: '1.5rem', marginRight:'1.5rem', height: '3rem', width: 'auto', fontSize: '1.5rem'}} 
            onClick={(e)=>{
            props.setQType('multiple')
        }}
        >Multiple Choice</button>

        </div>
      
    )
}

export default SettingsMenu
