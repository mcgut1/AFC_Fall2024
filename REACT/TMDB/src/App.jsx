import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './comp/NavBar'; 
import Results from './comp/Results'; 
import Error from './comp/Error';

function App() {
  const [movies, setMovies] = useState([]);

  
  const fetchNowPlaying = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_TOKEN}`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/results" element={<Results />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}

function Landing() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundImage: 'url(landing-bg.jpg)', height: '100vh' }}>
      <button onClick={() => navigate('/results')}>See Now Playing</button>
    </div>
  );
}

export default App;
