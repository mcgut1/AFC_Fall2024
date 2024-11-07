import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const navLinks = [
        { text: 'Home', path: '/' },
        { text: 'About Us', path: '/about' },
        { text: 'Toxicity', path: '/toxicity' },
        { text: 'Favorites', path: '/favorites' },
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: '#4CAF50' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        PLANTR
                    </Typography>
                    {/* Desktop Nav Links */}
                    {navLinks.map((link) => (
                        <Button
                            key={link.text}
                            sx={{ color: 'white', bgcolor: '#388E3C', '&:hover': { bgcolor: '#2e7d32' }, mx: 1 }}
                            onClick={() => navigate(link.path)}
                        >
                            {link.text}
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>

            {/* Drawer component for mobile navigation */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                    {navLinks.map((link) => (
                        <ListItem button key={link.text} onClick={() => navigate(link.path)}>
                            <ListItemText primary={link.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

export default Navbar;
