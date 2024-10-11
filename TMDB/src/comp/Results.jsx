//display all the moves
// ALL movies should display inside of a MediaCard component:
//Title of movie
//Plot (overview)
//Rating
//Poster image

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Error from './Error';

const Results = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_TOKEN}`);
        setMovies(response.data.results);
      } catch (err) {
        setError('Network error. Could not fetch movies.');
      }
    };

    fetchMovies();
  }, []);

  // Error handling or no results
  if (error) {
    return <Error message={error} />;
  }

  if (!movies || movies.length === 0) {
    return <Error message="No movies found." />;
  }

  // If there are movies, display them here
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
