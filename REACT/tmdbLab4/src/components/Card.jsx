import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import defaultPoster from '../assets/default-poster.jpg';

const MovieCard = ({ movie }) => {
  const posterPath = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` 
    : defaultPoster; // Uses default image

  return (
    <Card sx={{ width: 300, height: 500, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          alt={movie.title}
          height="250"
          image={posterPath} 
          title={movie.title}
          sx={{
            objectFit: 'contain', 
            width: '100%',        
            height: '250px',      
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 18 }}>
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Release Date: {movie.release_date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {movie.vote_average} / 10
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          {movie.overview ? `${movie.overview.substring(0, 100)}...` : "No overview available."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;


//Title :DONE
//Plot/Overview :DONE (Added additional Typography for plot)
//Rating :DONE
//PosterImage :DONE
//Go back and see if I can make the card images the same :DONE
//Where do I put the default poster image?  :DONE