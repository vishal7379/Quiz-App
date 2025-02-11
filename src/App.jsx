import {React} from "react"
import './App.css'
import Quiz from './components/Quiz'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from "./components/HomePage"
import ViewResult from "./components/ViewResult"



function App() {
  const router=createBrowserRouter(
    [ {
        path:"/",
        element:<HomePage />
      },
      {
        path:"/quiz",
        element:<Quiz />
      },
      {
        path:"/viewresult",
        element:<ViewResult />
      }
    ]
  )
  return (
    <div>
        <RouterProvider router={router} />
    </div>
 
  )
}

export default App