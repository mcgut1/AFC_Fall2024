import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MovieCard from './Card';

const Results = ({ movies }) => {
  return (
    <Grid container spacing={3} style={{ marginTop: '20px' }}>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))
      ) : (
        <Typography variant="h6" component="p">
          No movies fetched yet.
        </Typography>
      )}
    </Grid>
  );
};

export default Results;
