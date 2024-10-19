import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Badge, Avatar, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from 'react';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #E0E0E0' }}>
            <Toolbar>
                {/* Menu Button (for toggling the sidebar) */}
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>

                {/* Search Icon */}
                <IconButton color="inherit">
                    <SearchIcon />
                </IconButton>

                <Box sx={{ flexGrow: 1 }} />

                {/* Notification Icons */}
               
                <IconButton color="inherit">               
                        <CalendarMonthIcon />
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={3} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={64} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>

                {/* User Profile */}
                <Typography variant="body1" sx={{ mx: 2 }}>
                    Samad
                </Typography>
                <Avatar
                    alt="Admin"
                    src="/profile-picture.png" // Replace with actual profile image path
                    onClick={handleMenu}
                    sx={{ cursor: 'pointer' }}
                />

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
