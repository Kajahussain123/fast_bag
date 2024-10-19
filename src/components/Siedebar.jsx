import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Badge, Box, Collapse } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BarChartIcon from '@mui/icons-material/BarChart';
import StoreIcon from '@mui/icons-material/Store';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CategoryIcon from '@mui/icons-material/Category';
import ListAltIcon from '@mui/icons-material/ListAlt';

const Sidebar = () => {
    const location = useLocation();
    const [openProducts, setOpenProducts] = useState(false);

    const handleProductsClick = () => {
        setOpenProducts(!openProducts);
    };

    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
        {
            text: 'Products',
            icon: <StoreIcon />,
            subItems: [
                { text: 'Product List', icon: <ListAltIcon />, path: '/product-list' },
                { text: 'Category', icon: <CategoryIcon />, path: '/category-list' },
            ],
        },
        { text: 'Orders', icon: <Badge badgeContent={2} color="error"><ShoppingCartIcon /></Badge>, path: '/order-list' },
        { text: 'Customers', icon: <PeopleIcon />, path: '/customers-list' },
        { text: 'Restaurants', icon: <RestaurantIcon />, path: '/restaurants' },
        { text: 'Analytics', icon: <BarChartIcon />, path: '/analytics' },
        { text: 'Grocery Shops', icon: <StoreIcon />, path: '/grocery-shops' },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                    backgroundColor: '#f6f8fa',
                },
            }}
        >
            <Box sx={{ padding: '16px', textAlign: 'center' }}>
                <img
                    src="https://i.postimg.cc/qqhWvvN2/6f05cef92da77e8f946c303920fa8a7e.png"
                    alt="Logo"
                    style={{ width: '100%', maxWidth: '150px' }}
                />
            </Box>
            <List>
                {menuItems.map((item, index) => (
                    item.subItems ? (
                        <React.Fragment key={item.text}>
                            <ListItem
                                button
                                onClick={handleProductsClick}
                                sx={{
                                    borderRadius: '8px',
                                    backgroundColor: location.pathname.startsWith('/product') ? '#4f46e5' : 'transparent', // Highlight Products if any sub-item is selected
                                    color: location.pathname.startsWith('/product') ? 'white' : 'inherit',
                                    '&:hover': {
                                        backgroundColor: '#4f46e5',
                                        color: 'white',
                                    },
                                    padding: '8px 16px',
                                }}
                            >
                                <ListItemIcon sx={{ color: location.pathname.startsWith('/product') ? 'white' : 'inherit' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                                {openProducts ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={openProducts} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.subItems.map((subItem) => (
                                        <ListItem
                                            button
                                            component={Link}
                                            to={subItem.path}
                                            key={subItem.text}
                                            selected={location.pathname === subItem.path}
                                            sx={{
                                                paddingLeft: '32px',
                                                borderRadius: '8px',
                                                backgroundColor: location.pathname === subItem.path ? '#4f46e5' : 'transparent', // Highlight sub-item if selected
                                                color: location.pathname === subItem.path ? 'white' : 'inherit',
                                                '&:hover': {
                                                    backgroundColor: '#4f46e5',
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            <ListItemIcon sx={{ color: location.pathname === subItem.path ? 'white' : 'inherit' }}>
                                                {subItem.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={subItem.text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </React.Fragment>
                    ) : (
                        <ListItem
                            button
                            component={Link}
                            to={item.path}
                            key={item.text}
                            selected={location.pathname === item.path}
                            sx={{
                                borderRadius: '8px',
                                backgroundColor: location.pathname === item.path ? '#4f46e5' : 'transparent',
                                color: location.pathname === item.path ? 'white' : 'inherit',
                                '&:hover': {
                                    backgroundColor: '#4f46e5',
                                    color: 'white',
                                },
                                padding: '8px 16px',
                            }}
                        >
                            <ListItemIcon sx={{ color: location.pathname === item.path ? 'white' : 'inherit' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    )
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
