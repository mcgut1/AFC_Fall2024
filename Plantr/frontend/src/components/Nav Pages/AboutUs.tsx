import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutUs: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Box textAlign="center" mb={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                    Welcome to Plantr! We're excited to introduce our plant manager,
                    with features for managing your garden or houseplants,
                    and exploring plant information.
                </Typography>
            </Box>

            <Box>
                <Typography variant="h6" gutterBottom>
                    Our Mission
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                    Our mission is to simplify your gardening experience and and
                    enhance access to plant-related details in a user-friendly interface.
                </Typography>
            </Box>

            <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                    Our Team
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                    Our team consists of 1 enthusiastic developer with a passion for creating
                    solutions that help users organize information and stay productive.
                </Typography>
            </Box>
        </Container>
    );
};

export default AboutUs;
