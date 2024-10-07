import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) //intializing at 0


useEffect(()=>{
  if (count < 5){
    setCount(count + 1)
  }
})

  return (
    <>
    <h1>My Counter Demo with use effect </h1>
    COUNT: {count}
   
    </>
  )
}

export default App
