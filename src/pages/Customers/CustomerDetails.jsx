import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Paper, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TablePagination, Chip } from '@mui/material';
import { Email, Phone, LocationOn, Person, CalendarToday, FilterList, AccountBalanceWallet, ShoppingCart, Star } from '@mui/icons-material';

const transactions = [
  { id: '#302012', product: 'Handmade Pouch', total: 121.00, status: 'Processing', date: '12 Dec 2023' },
  { id: '#302011', product: 'Smartwatch E2', total: 590.00, status: 'Processing', date: '1 Dec 2023' },
  { id: '#302006', product: 'Smartwatch E1', total: 125.00, status: 'Shipped', date: '10 Nov 2023' },
  { id: '#302001', product: 'Headphone G1 Pro', total: 348.00, status: 'Shipped', date: '2 Nov 2023' },
  { id: '#301998', product: 'Iphone X', total: 607.00, status: 'Delivered', date: '7 Sep 2023' }
];

const CustomerDetails = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Customer Details
      </Typography>

      {/* Breadcrumb */}
      <Typography variant="body2" color="textSecondary">
        Dashboard &gt; Customer List &gt; Customer Details
      </Typography>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {/* Left Side: Customer Profile */}
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3 }}>
            <Avatar
              sx={{ width: 100, height: 100, mx: 'auto', bgcolor: 'purple' }}
            />
            <Typography variant="h6" align="center" sx={{ mt: 2 }}>Linda Blair</Typography>
            <Typography variant="body2" align="center" color="primary">Premium</Typography>
            <Typography variant="body2" align="center" sx={{ mb: 2 }} color="textSecondary">@linda_blair321</Typography>

            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Person sx={{ mr: 1 }} />
                <Typography variant="body2">User ID: ID-011221</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Email sx={{ mr: 1 }} />
                <Typography variant="body2">Billing Email: lindablair@mail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone sx={{ mr: 1 }} />
                <Typography variant="body2">Phone Number: 050 414 8778</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOn sx={{ mr: 1 }} />
                <Typography variant="body2">Delivery Address: 1833 Bel Meadow Drive, Fontana, California 92335, USA</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CalendarToday sx={{ mr: 1 }} />
                <Typography variant="body2">Latest Transaction: 12 December 2022</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Right Side: Stats and Transactions */}
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            {/* Stats Cards */}
            <Grid item xs={4}>
              <Paper sx={{ p: 2 }}>
                <Box display="flex" alignItems="center">
                  
                  <Box>
                  <AccountBalanceWallet sx={{ fontSize: 30, mr: 1 }} />
                    <Typography variant="subtitle1">Total Balance</Typography>
                    <Typography variant="h6" color="primary">$723.00</Typography>
                    <Typography variant="caption" color="error">-25%</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper sx={{ p: 2 }}>
                <Box display="flex" alignItems="center">
                 
                  <Box>
                  <ShoppingCart sx={{ fontSize: 30, mr: 1 }} />
                    <Typography variant="subtitle1">Total Orders</Typography>
                    <Typography variant="h6" color="primary">1,296</Typography>
                    <Typography variant="caption" color="success">+10%</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper sx={{ p: 2 }}>
                <Box display="flex" alignItems="center">
                  
                  <Box>
                  <Star sx={{ fontSize: 30, mr: 1 }} />
                    <Typography variant="subtitle1">Rewards Point</Typography>
                    <Typography variant="h6" color="primary">1,400</Typography>
                    <Typography variant="caption" color="success">+10%</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* Transaction History */}
          <Box sx={{ mt: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6">Transaction History</Typography>
              <Box>
                <Button variant="outlined" startIcon={<CalendarToday />} sx={{ mr: 1 }}>Select Date</Button>
                <Button variant="outlined" startIcon={<FilterList />}>Filters</Button>
              </Box>
            </Box>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((transaction, index) => (
                    <TableRow key={index}>
                      <TableCell>{transaction.id}</TableCell>
                      <TableCell>{transaction.product}</TableCell>
                      <TableCell>${transaction.total.toFixed(2)}</TableCell>
                      <TableCell>
                        <Chip 
                          label={transaction.status} 
                          color={transaction.status === 'Delivered' ? 'success' : transaction.status === 'Shipped' ? 'info' : 'warning'} 
                        />
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Pagination */}
            <TablePagination
              component="div"
              count={transactions.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 15]}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerDetails;
