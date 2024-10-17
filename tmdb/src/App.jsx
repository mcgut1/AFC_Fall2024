import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar';
import axios from 'axios';
import Results from './components/Results';
import Error from './components/Error';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);
  const VITE_TMDB_API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;
  const baseURL = "https://api.themoviedb.org/3";

  // Now playing function and axios request: GET /movie/now_playing
  const handleNowPlayingClick = async () => {
    const token = VITE_TMDB_API_TOKEN;

    if (!token) {
      console.error("API Token is missing or invalid");
      setError("API Token is missing or invalid");
      return;
    }

    try {
      const response = await axios.get(`${baseURL}/movie/now_playing`, {
        //const response = await axios.get(`${baseURL}/movie/invalid_endpoint`, 
        //(Tested to confirm error message displays for "now playing")
        params: {
          language: 'en-US',
          page: 1,
        },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`, // Token
        },
      });

      setMovies(response.data.results);
      setIsSearching(false);
      setError(null); 
    } catch (error) {
      console.error("Error fetching now playing movies:", error.response ? error.response.data : error.message);
      setError("Could not fetch now playing movies. Please try again later."); 
    }
  };

  // Search function and axios request: GET /search/movie
  const handleSearchChange = async (event) => {
    const searchTerm = event.target.value;
    if (searchTerm.length > 2) {
      try {
        const response = await axios.get(`${baseURL}/search/movie`, {
          //const response = await axios.get(`${baseURL}/movie/invalid_endpoint`,
           //(Tested to confirm error message displays)
          params: { query: searchTerm, language: 'en-US', page: 1 },
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`,
          },
        });
        setSearchResults(response.data.results);
        setIsSearching(true);
        setError(null);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setError("Could not fetch search results. Please try again later."); // Set error message
      }
    }
  };

  return (
    <Router>
      <div className="App">
        <NavBar 
          onNowPlayingClick={handleNowPlayingClick} 
          onSearchChange={handleSearchChange} 
        />
        <div className="container">
          {error ? (
            <Error message={error} /> 
          ) : (
            <Results movies={isSearching ? searchResults : movies} />
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;



// Ty's to do list:
// Is theme working? Need to import palette to at least one comp to see styling - Done: Imported globally
//Completed:
// Must have a folder inside components called “ui” - DONE
// Inside ui component, must have Theme component - DONE
// Inside the Theme component, must have at least one palette- DONE
// Error page needs to display image - img added to assets... need to figure out why I can't get it to display??? - DONE: Tested with faulty end points for search and now playing functions
// Add defualt poster if not supplied by API - Complete with boring default poster - DONE
// Make sure movie cards are below the navbar upon clicking "Now Playing" - DONE
// Fix background image, it's not taking up the entire page after displaying movies -DONE