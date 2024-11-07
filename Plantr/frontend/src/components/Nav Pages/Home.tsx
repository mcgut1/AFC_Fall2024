import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Home: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Box textAlign="center" mb={4}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Welcome to Our Plant Manager!
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                    This application allows you to manage your garden efficiently and explore valuable plant information.
                    Start by adding your current plants, and edit/update/delete information as your garden changes!
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
