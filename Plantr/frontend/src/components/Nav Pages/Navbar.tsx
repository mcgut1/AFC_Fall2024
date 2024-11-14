import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate between routes
    const [drawerOpen, setDrawerOpen] = useState(false); // State to manage the drawer open/close

    // Function to toggle the drawer's open state
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        // Prevent the drawer from closing if tab or shift key is pressed
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    // Define navigation links with text and path properties
    const navLinks = [
        { text: 'Home', path: '/' },
        { text: 'About Us', path: '/about' },
        { text: 'Toxicity', path: '/toxicity' },
        { text: 'Favorites', path: '/favorites' },
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ bgcolor: '#4CAF50'}}>

                {/* Navbar Green! */}
                <Toolbar>
                    {/* IconButton for the menu icon on the left side of the AppBar */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)} // Opens the drawer when clicked
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        PLANTR
                    </Typography>
                    {navLinks.map((link) => (
                        <Button
                            key={link.text}
                            sx={{ color: 'white', bgcolor: '#388E3C', '&:hover': { bgcolor: '#2e7d32' }, mx: 1 }}
                            onClick={() => navigate(link.path)} // Navigate to the link's path when clicked
                        >
                            {link.text}
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>

            {/* Drawer component for mobile navigation; slides in from the left */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                    {navLinks.map((link) => (
                        <ListItem
                            component="button"
                            key={link.text}
                            onClick={() => navigate(link.path)} // Navigate when clicked
                        >
                            <ListItemText primary={link.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

export default Navbar;
