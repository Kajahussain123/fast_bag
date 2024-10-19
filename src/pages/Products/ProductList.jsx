import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
  TableSortLabel,
  TablePagination,
} from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';

const ProductList = () => {
  const initialProducts = [
    { id: 1, name: 'Handmade Pouch', sku: '302012', category: 'Bag & Pouch', stock: 10, price: 121.00, status: 'Low Stock', added: '29 Dec 2022' },
    { id: 2, name: 'Smartwatch E2', sku: '302011', category: 'Watch', stock: 204, price: 590.00, status: 'Published', added: '24 Dec 2022' },
    { id: 3, name: 'Smartwatch E1', sku: '302002', category: 'Watch', stock: 48, price: 125.00, status: 'Draft', added: '12 Dec 2022' },
    { id: 4, name: 'Headphone G1 Pro', sku: '301901', category: 'Audio', stock: 401, price: 348.00, status: 'Published', added: '21 Oct 2022' },
    { id: 5, name: 'Iphone X', sku: '301900', category: 'Smartphone', stock: 120, price: 607.00, status: 'Published', added: '21 Oct 2022' }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [page, setPage] = useState(0); // State for pagination
  const [rowsPerPage, setRowsPerPage] = useState(10); // Items per page

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedProducts = [...products].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setProducts(sortedProducts);
  };

  // Handle pagination changes
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* First Row: Page Title */}
      <Box mb={3}>
        <Typography variant="h4">Products</Typography>
      </Box>

      {/* Second Row: Breadcrumb + Buttons */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        {/* Left: Breadcrumb */}
        <Typography variant="body2" color="textSecondary">
          Dashboard &gt; Product List
        </Typography>

        {/* Right: Buttons */}
        <Box display="flex" gap={2}>
          <Button variant="outlined">Export</Button>
          <Button variant="contained" color="primary">+ Add Product</Button>
        </Box>
      </Box>

      {/* Third Row: Search + Filters */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        {/* Left: Search Field */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search product..."
          sx={{ backgroundColor: '#f1f1f1', borderRadius: 2, width: '300px' }}
        />

        {/* Right: Filters */}
        <Box display="flex" gap={2}>
          <Button variant="outlined">Select Dates</Button>
          <Button variant="outlined">Filters</Button>
        </Box>
      </Box>

      {/* Product Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Checkbox /></TableCell>

              {/* Sortable Product Column */}
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === 'name'}
                  direction={sortConfig.direction === 'asc' ? 'asc' : 'desc'}
                  onClick={() => handleSort('name')}
                  hideSortIcon={false}  // Always show sort icon
                >
                  Product
                </TableSortLabel>
              </TableCell>

              <TableCell>SKU</TableCell>
              <TableCell>Category</TableCell>

              {/* Sortable Stock Column */}
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === 'stock'}
                  direction={sortConfig.direction === 'asc' ? 'asc' : 'desc'}
                  onClick={() => handleSort('stock')}
                  hideSortIcon={false}  // Always show sort icon
                >
                  Stock
                </TableSortLabel>
              </TableCell>

              {/* Sortable Price Column */}
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === 'price'}
                  direction={sortConfig.direction === 'asc' ? 'asc' : 'desc'}
                  onClick={() => handleSort('price')}
                  hideSortIcon={false}  // Always show sort icon
                >
                  Price
                </TableSortLabel>
              </TableCell>

              {/* Sortable Status Column */}
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === 'status'}
                  direction={sortConfig.direction === 'asc' ? 'asc' : 'desc'}
                  onClick={() => handleSort('status')}
                  hideSortIcon={false}  // Always show sort icon
                >
                  Status
                </TableSortLabel>
              </TableCell>

              {/* Sortable Added Column */}
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === 'added'}
                  direction={sortConfig.direction === 'asc' ? 'asc' : 'desc'}
                  onClick={() => handleSort('added')}
                  hideSortIcon={false}  // Always show sort icon
                >
                  Added
                </TableSortLabel>
              </TableCell>

              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => (
                <TableRow key={product.id}>
                  <TableCell><Checkbox /></TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.sku}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{`$${product.price.toFixed(2)}`}</TableCell>
                  <TableCell>
                    <Typography color={product.status === 'Low Stock' ? 'error' : 'green'}>
                      {product.status}
                    </Typography>
                  </TableCell>
                  <TableCell>{product.added}</TableCell>
                  <TableCell align="center">
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
        count={products.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        labelRowsPerPage="Items per page"
      />
    </Box>
  );
};

export default ProductList;
