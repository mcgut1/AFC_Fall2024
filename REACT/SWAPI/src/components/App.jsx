import { useState } from 'react';
import React from 'react';
import '../App.css';
import axios from 'axios';
import TableComponent from './table.jsx';

//show/hide on reset
function App() {
  const [people, setPeople] = useState(([]));
  const [showTable, setShowTable] = useState(false); 

//api request:
const handleSubmit = async () => {
  try{ 
     const response = await axios.get('https://swapi.dev/api/people');
     setPeople(response.data.results);
    setShowTable(true)  }
   catch (error) {
    console.error('Error')
  }
  }
  const handleReset = () => {
    setShowTable(false); //Hide table
    setPeople([]) //clear table
  }

  return (
    // Header for website
    <div className='background-container'>
      <h1> SWAPI</h1>
      <h2>The Star Wars API</h2>

      
<button id='submit' onClick={handleSubmit}>Show</button>
<button id='reset' onClick={handleReset}>Reset</button>

{showTable && <TableComponent people={people}/>}
    </div>
  

  )

}

export default App


// App must run with no errors - no errors
// Must use at least one style sheet with CSS - have app.css
// Must use a background image stored in the assets folder - complete
// Must have a components folder with your Table component - complete
// Must use axios for the HTTP request - complete, added asynch
// Must have two buttons- complete
// One button is for triggering the HTTP request resulting in the Table component being shown in the App.jsx -complete 
// Second button is a reset button that removes the Table component from the App.jsx - complete w/hide on reset
// You will have two functions triggered based on which button is clicked - complete
// handleSubmit() triggers the request and displays the Table -complete
// handleReset() removes the Table - complete
// Use useEffect() to prevent infinite re-rendering - does not infinitely rerender
// Table component data MUST match the screenshot below  - hair, height, hair color, gender: complete
// NOTE: Styling is up to you - complete