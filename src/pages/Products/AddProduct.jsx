import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('Draft');
  const [price, setPrice] = useState('');
  const [discountType, setDiscountType] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [sku, setSku] = useState('');
  const [barcode, setBarcode] = useState('');
  const [quantity, setQuantity] = useState('');

  const productCompletion = 0;

  const handleSaveProduct = () => {
    // Logic to handle saving the product
  };

  return (
    <Box sx={{ padding: 4 }}>
      {/* Title Section */}
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Add Product
      </Typography>

      {/* Breadcrumb and Action Buttons */}
      <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: '20px' }}>
        <Grid item>
          <Typography variant="body1">
            Dashboard &gt; Product List &gt; Add Product
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" sx={{ marginRight: '10px' }} onClick={() => console.log('Cancel')}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSaveProduct}>
            Add Product
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {/* Left Section: General Info, Media, Pricing, Inventory */}
        <Grid item xs={12} md={8}>
          {/* General Information */}
          <Box mb={4} sx={{ backgroundColor: '#ECF4EE', padding: 2, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>General Information</Typography>
            <TextField
              fullWidth
              label="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              variant="outlined"
              sx={{ mb: 2, backgroundColor: 'white' }} // White background for input
            />
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              multiline
              rows={3}
              variant="outlined"
              sx={{ backgroundColor: 'white' }} // White background for input
            />
          </Box>

          {/* Media Section */}
          <Box mb={4} sx={{ backgroundColor: '#ECF4EE', padding: 2, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>Media</Typography>
            <Box sx={{ border: '1px dashed #ccc', padding: 2, mb: 2, textAlign: 'center' }}>
              <Typography>Drag and drop image here, or click to add image</Typography>
              <Button variant="contained" sx={{ mt: 2 }}>Add Image</Button>
            </Box>
            <Box sx={{ border: '1px dashed #ccc', padding: 2, textAlign: 'center' }}>
              <Typography>Drag and drop video here, or click to add video</Typography>
              <Button variant="contained" sx={{ mt: 2 }}>Add Video</Button>
            </Box>
          </Box>

          {/* Pricing Section */}
          <Box mb={4} sx={{ backgroundColor: '#ECF4EE', padding: 2, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>Pricing</Typography>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Base Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  variant="outlined"
                  sx={{ backgroundColor: 'white' }} // White background for input
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Discount Type</InputLabel>
                  <Select
                    value={discountType}
                    onChange={(e) => setDiscountType(e.target.value)}
                    label="Discount Type"
                    sx={{ backgroundColor: 'white' }} // White background for input
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="percentage">Percentage</MenuItem>
                    <MenuItem value="fixed">Fixed Amount</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Discount Percentage (%)"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  variant="outlined"
                  sx={{ backgroundColor: 'white' }} // White background for input
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Tax Class</InputLabel>
                  <Select
                    value={discountType}
                    onChange={(e) => setDiscountType(e.target.value)}
                    label="Tax Class"
                    sx={{ backgroundColor: 'white' }} // White background for input
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="percentage">Percentage</MenuItem>
                    <MenuItem value="fixed">Fixed Amount</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="VAT Amount (%)"
                  value={discountPercentage}
                  onChange={(e) => setDiscountPercentage(e.target.value)}
                  variant="outlined"
                  sx={{ backgroundColor: 'white' }} // White background for input
                />
              </Grid>
            </Grid>
          </Box>

          {/* Inventory Section */}
          <Box mb={4} sx={{ backgroundColor: '#ECF4EE', padding: 2, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>Inventory</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="SKU"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  variant="outlined"
                  sx={{ backgroundColor: 'white' }} // White background for input
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Barcode"
                  value={barcode}
                  onChange={(e) => setBarcode(e.target.value)}
                  variant="outlined"
                  sx={{ backgroundColor: 'white' }} // White background for input
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  variant="outlined"
                  sx={{ backgroundColor: 'white' }} // White background for input
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Right Sidebar: Category and Status */}
        <Grid item xs={12} md={4}>
          <Box mb={4} sx={{ padding: 2, backgroundColor: '#ECF4EE', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>Category</Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Product Category</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Product Category"
                sx={{ backgroundColor: 'white' }} // White background for input
              >
                <MenuItem value="">Select Category</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="fashion">Fashion</MenuItem>
                {/* Add more categories as needed */}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Product Tags"
              variant="outlined"
              sx={{ backgroundColor: 'white', mb: 2 }} // White background for input
            />
          </Box>

          <Box sx={{ padding: 2, backgroundColor: '#ECF4EE', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>Status</Typography>
            <FormControl fullWidth>
              <InputLabel>Product Status</InputLabel>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                label="Product Status"
                sx={{ backgroundColor: 'white' }} // White background for input
              >
                <MenuItem value="Draft">Draft</MenuItem>
                <MenuItem value="Published">Published</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 4, backgroundColor: '#ECF4EE', padding: 2 }}>
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            Product Completion
          </Typography>
          <Typography variant="body1" sx={{ color: 'red', fontWeight: 'bold' }}>
            {productCompletion}%
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" sx={{ marginRight: '10px' }} onClick={() => console.log('Cancel')}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSaveProduct}>
            Add Product
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AddProduct;
