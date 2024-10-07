import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Button from '@mui/material/Button';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function App() {
  const VITE_TMDB_API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;
  const [movies, setMovies] = useState([]);
  const baseURL = "https://api.themoviedb.org/3";

  const handleClick = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `${baseURL}/movie/now_playing`,
        params: { language: 'en-US', page: '1' },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODhhODQyNzUxYjhhMzYzYzkyMjVhYzdjZmU3YzQxMSIsIm5iZiI6MTcyNzg4MzAwOS4yOTc4NjcsInN1YiI6IjY2ZjU3ZWNjZTE0YTNjOGU2MjczZmQ4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ELJs3cChteQMS6PvGGMZpKuhDG6ObF_8JIvKkFhbj5c'
        }
      });
      
      // Update the movies state 
      setMovies(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Router>
      <div className='App'>
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <hr/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* Button to trigger API call */}
          <Button variant="contained" onClick={handleClick}>Fetch Now Playing Movies</Button>

          {/* Display the fetched movies as cards */}
          <Grid container spacing={3} style={{ marginTop: '20px' }}>
            {movies.length > 0 ? (
              movies.map((movie) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt={movie.title}
                      height="400"
                      image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  // Movie poster image
                      title={movie.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Release Date: {movie.release_date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Rating: {movie.vote_average} / 10
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="h6" component="p">
                No movies fetched yet.
              </Typography>
            )}
          </Grid>
        </div>
      </div>
    </Router>
  );
}

export default App;
