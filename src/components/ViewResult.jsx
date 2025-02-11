import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import "./ViewResult.css"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ViewResult = () => {
    useEffect(()=>{
        document.body.style.backgroundColor="lightblue";
        return ()=>{document.body.style.backgroundColor=""};
        },[])
    const location=useLocation();
    const navigate=useNavigate();
    const {score}=location.state || {score:0};
  return (
    <div className='vrslt'>
        <h2>Quiz completed</h2>
        <h3>Your score is : {score} / 5</h3>
        <Link to="/quiz"><button id='restart'>Restart Quiz</button></Link>
    </div>
  )
}

export default ViewResult
