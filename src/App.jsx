import { useState } from "react"
import Form from "./components/Form"
import './css/App.css'

function App() {
  const [info, setInfo] = useState({})
 

  const handleCallback = (childData) => {
    setInfo(childData)
  }

 
  
 console.log(info)
  return (
    <div className="App">
     <h1>CountCaloria</h1>
     <Form parentCallback={handleCallback} />

     <p>Total Calories: {info.length > 0 && (
       info.map(item => item.calories)
     )}</p>
    </div>
  )
}

export default App
