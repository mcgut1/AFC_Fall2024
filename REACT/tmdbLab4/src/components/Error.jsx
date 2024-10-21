import React from 'react';
import { Box, Typography } from '@mui/material';
import errorImage from '../assets/errorimg.jpg'; 

const Error = ({ message }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', 
        textAlign: 'center',
      }}
    >
      <img src={errorImage} alt="Error" style={{ maxWidth: '300px', marginBottom: '20px' }} />
      <Typography variant="h4" color="error">
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1">
        {message}
      </Typography>
    </Box>
  );
};

export default Error;
