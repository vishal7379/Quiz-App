import React, { useRef, useState } from 'react'
import "./Quiz.css"
import { useEffect } from 'react'
import HomePage from './HomePage'
import ViewResult from './ViewResult'
import { useNavigate } from 'react-router-dom'


const Quiz = () => {
  useEffect(()=>{
    document.body.style.backgroundColor="lightblue";
    return ()=>{document.body.style.backgroundColor=""};
    },[])
  const [Questions,setQuestions]=useState([]);
  const [currentIndex,setcurrentIndex]=useState(0);
  const [selectedOption,setselectedOption]=useState(null);
  const [score,setscore]=useState(0);
  const navigate=useNavigate();

  useEffect(()=>{
    fetch("public/quiz.json")
    .then((response)=>response.json())
    .then((data)=>{
      const arr=shuffleArray(data).slice(0,5);
      setQuestions(arr);
      
    })
    .catch((error)=>console.error("Error is: ",error));
  },[]);
  const handleAnswerClick=(option)=>{
    setselectedOption(option);
    if(option===Questions[currentIndex].answer){
      setscore(score+1);
    }
  }
  const handleNextQuestion=()=>{
    if(currentIndex+1<5){
      setcurrentIndex(currentIndex+1);
      setselectedOption(null);
    }
  }
  const handleViewResult=()=>{
    navigate("/viewresult",{state:{score}})
  }
  const shuffleArray=(data)=>{
    let shuffled=[...data];
    for(let i=shuffled.length-1; i>0; i--){
      let j=Math.floor(Math.random()*(i+1));
      [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
    }
    return shuffled
  }



  return (
    <div className='ques'>
      {Questions.length>0 && Questions[currentIndex]?(
      <div>
      <p className='ques-text'><strong>Q{currentIndex+1}) {Questions[currentIndex].question}</strong></p>
      <ol className='list'>
        {Questions[currentIndex].options.map((option,index)=>
        <li key={index}>
          <button className={selectedOption===option?"selected":""} 
          onClick={()=>handleAnswerClick(option)} 
          disabled={selectedOption!==null} id='butn'>
            {option}
          </button>
          
        </li>)}
      </ol>
      {(selectedOption && currentIndex+1===5) && (<button onClick={handleViewResult} id='rslt'>View result</button>)}
      {(selectedOption && currentIndex+1<5) && (<button onClick={handleNextQuestion} id='nxtqn'>Next Question</button>)}
      </div>
    ):<p>Loading questions</p>}
    </div>


    
  )
}

export default Quiz
