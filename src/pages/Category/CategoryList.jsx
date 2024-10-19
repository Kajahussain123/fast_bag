import React, { useState } from 'react';
import { Box, Typography, Button, TextField, IconButton, Grid, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select, TablePagination } from '@mui/material';
import { Search, Visibility, Edit, Delete, FilterList } from '@mui/icons-material';

const categories = [
  { name: 'Bag & Pouch', description: 'Great fashion, great selections, great prices.', sales: 15020, stock: 901, added: '29 Dec 2022' },
  { name: 'Watch', description: 'Our range of watches are perfect whether you\'re looking to upgrade.', sales: 4901, stock: 451, added: '24 Dec 2022' },
  { name: 'Audio', description: 'Our big range of audio devices makes it easy to upgrade your device at a great price.', sales: 10405, stock: 400, added: '12 Dec 2022' },
  { name: 'Smartphone', description: 'Our smartphone include all the big brands.', sales: 3245, stock: 132, added: '21 Oct 2022' },
  { name: 'Shoes', description: 'Whatever your activity needs are, we\'ve got you covered.', sales: 11092, stock: 1201, added: '11 Oct 2022' }
];

const CategoryPage = () => {
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
        Categories
      </Typography>
      
      {/* Top Section: Breadcrumb and Buttons */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        {/* Breadcrumb */}
        <Typography variant="body2" color="textSecondary">
          Dashboard &gt; Categories
        </Typography>

        {/* Top-right Buttons */}
        <Box display="flex" gap={2}>
        
          <Button variant="outlined">Export</Button>
          <Button variant="contained" color="primary">+ Add Category</Button>
        </Box>
      </Box>

      {/* Search and Filter Row */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        {/* Search Field */}
        <TextField 
          variant="outlined" 
          placeholder="Search category..."
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
              <TableCell>Category</TableCell>
              <TableCell>Sales</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Added</TableCell>
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
                  <Typography variant="body2" color="textSecondary">{category.description}</Typography>
                </TableCell>
                <TableCell>{category.sales}</TableCell>
                <TableCell>{category.stock}</TableCell>
                <TableCell>{category.added}</TableCell>
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

export default CategoryPage;
