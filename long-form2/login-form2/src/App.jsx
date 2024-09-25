import { useState } from 'react'
import './App.css'


function App() {

//option 1
// const [fname, setFname] = useState(Tyler)
// const [age, setAge] = useState(30)
// const [pw, setShowPassword] = useState()
 

const [person, setPerson] = useState({
  fname: "Tyler",
  age: 30,
  pw: "",
})

  return (
    <form action= "/getdata" method="get">
      <label>
        First Name:
        <input type="text" name="" id="" />
        </label>
        <label>
          Age:
          <input type="text" name="" id="" />
        </label>
        <label>
          Password:
        <input type="text" name="" id="" />
        </label>
        </form>
  )}
      

export default App
