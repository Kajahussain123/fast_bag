import React, { useState } from 'react';
import { Box, Typography, Button, TextField, IconButton, Grid, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select, TablePagination } from '@mui/material';
import { Search, Visibility, Edit, Delete, FilterList } from '@mui/icons-material';

const categories = [
  { name: 'John ',email:"john@gmail.com", phone: '23224223', orders: 123, Balance: 901,status:'Blocked', Created: '29 Dec 2022' },
  { name: 'Smith ',email:"smith@gmail.com", phone: '0772728292', orders: 123, Balance: 901,status:'Blocked', Created: '29 Dec 2022' },
  { name: 'David ',email:"david@gmail.com", phone: '9223382', orders: 123, Balance: 901,status:'Blocked', Created: '29 Dec 2022' },
  { name: 'Amal ',email:"amal@gmail.com", phone: '073428292', orders: 123, Balance: 901,status:'Blocked', Created: '29 Dec 2022' },
  { name: 'Rahul ',email:"rahul@gmail.com", phone: '32318919', orders: 123, Balance: 901,status:'Blocked', Created: '29 Dec 2022' },
 
];

const CustomersList = () => {
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
        Customers
      </Typography>
      
      {/* Top Section: Breadcrumb and Buttons */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        {/* Breadcrumb */}
        <Typography variant="body2" color="textSecondary">
          Dashboard &gt; Customers List
        </Typography>

        {/* Top-right Buttons */}
        <Box display="flex" gap={2}>
        
          <Button variant="outlined">Export</Button>
          <Button variant="contained" color="primary">+ Add Customer</Button>
        </Box>
      </Box>

      {/* Search and Filter Row */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        {/* Search Field */}
        <TextField 
          variant="outlined" 
          placeholder="Search customer..."
          size="small"
          sx={{ width: '300px' }}
          InputProps={{
            startAdornment: <Search sx={{ mr: 1 }} />
          }}
        />

        {/* Filter Button */}
        <Button variant="outlined" startIcon={<FilterList />}>Filters</Button>
      </Box>

      {/* Categories Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Orders</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((category, index) => (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">{category.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{category.email}</Typography>
                </TableCell>
                <TableCell>{category.phone}</TableCell>
                <TableCell>{category.orders}</TableCell>

                <TableCell>{category.Balance}</TableCell>
                <TableCell>{category.status}</TableCell>
                <TableCell>{category.Created}</TableCell>
               
                <TableCell>
                  <IconButton><Visibility /></IconButton>
                  <IconButton><Edit /></IconButton>
                  <IconButton><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={categories.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
      />
    </Box>
  );
};

export default CustomersList;
