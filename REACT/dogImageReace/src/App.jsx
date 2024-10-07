import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import DogImageCard from './components/DogImageCard'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const App = () => {
  const [dogImage, setDogImage] = useState("")
  const endpoint = 'https://dog.ceo/api/breeds/image/random'


  const fetchDogImage = () => {
    axios.get(endpoint)
      .then(response => setDogImage(response.data.message))
      .catch(error => {
        console.log("Error fetching image: ", error.message)
      })
  }


  useEffect(() => {
    fetchDogImage()
  }, [])

  
  const handleClick = () => {
    fetchDogImage()
  }

  return (
    <>
      <h1 align="center>">Random Dog Image Generator</h1>
      <button onClick={handleClick}>Click me for a new dog image!</button>
    <DogImageCard imagePath={dogImage}/>
    <Stack direction="row" spacing={2}>
      <Button variant='string' color="error" size='large'>Self Destruct Dog</Button>
      <Button variant="outlined" color="success" size='small'>
        Success
      </Button>
      <Button variant="outlined" color="error" size='small'>
        Error
      </Button>
    </Stack>
    </>
  )
}

export default App
