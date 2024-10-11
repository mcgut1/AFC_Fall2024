//import { useState } from 'react'
//import './App.css'

import { useState } from "react"

function App() {
  const initPerson = {
fname:"",
lanme: "",
age: 21
  }
  const [personData, setpersonData] = useState({})
const handleChange = () => {
  setpersonData({...personData, [event.target.name]: event.target.value})
  console.log(personData);
}
const handleSubmit = (event) => {
  event.preventDefault() //this stops the page from refreshing and losing your data!!!!!
  console.log("Sending Data", personData)

}
return (
  <form onSubmit={handleSubmit}>
    <label htmlFor="fname">
      First Name:
      <input type="text"
       name="fname"
        id="fname"
        value={personData.fname}
         onChange={handleChange}
         required
         autoComplete="off"
         minLength={3} 
         maxLength={5}/>
    </label>
    <br />
    <label htmlFor="lname"> 
      Last Name:
      <input type="text"
       name="lname" 
       id="lname" 
       value={personData.lname} 
       onChange={handleChange}
       autoComplete="off"
       minLength={3}
       maxLength={5} />
    </label>
    <br />
    <label htmlFor="age"> 
      Age:
      <input type="number" 
      name="age"
       id="age" 
       value={personData.age} 
       onChange={handleChange}
       min={21}
       max={99} />
    </label>

    <button type="submit">Submit</button>
  </form>
);
}

export default App
