import {Box, Container, Typography} from '@mui/material';

const Toxicity = () => {
    return (
        <Container maxWidth="md" sx={{mt: 4, mb: 4}}>
            <Box textAlign="center" mb={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Toxicity Information
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                    This section is currently under development. Our goal is to provide a comprehensive resource to help
                    identify plants that may be toxic to pets and humans.
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                    When completed, you’ll be able to explore a variety of plants and learn about their potential health
                    risks. This feature will be especially useful for pet owners, gardeners, and anyone interested in
                    plant safety.
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={2}>
                    Check back soon for updates!
                </Typography>
            </Box>
        </Container>
    );
};

export default Toxicity;
