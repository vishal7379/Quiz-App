import React from 'react'
import "./HomePage.css"
import { Link } from "react-router-dom"
import Quiz from './Quiz'
import { useEffect } from "react"

const HomePage = () => {

    useEffect(()=>{
      document.body.style.backgroundColor="lightgreen";
      return ()=>{document.body.style.backgroundColor=""}
  },[])

  return (
    <div className='home-page'>
        <h1>The Quiz App</h1>
        <div className='start'>
            <p style={{"fontSize":"25px"}}>Welcome to our Quiz app....</p>
            <Link to="/quiz"><button id='startbtn'>Start Quiz</button></Link>
        </div> 
    </div>
  )
}

export default HomePage