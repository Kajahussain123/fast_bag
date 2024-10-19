import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  IconButton,
  Grid,
  Paper,
} from '@mui/material';
import { CloudUploadOutlined } from '@mui/icons-material';

const AddCategory = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <Box sx={{ padding: 4 }}>
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Add Category
      </Typography>
      {/* Breadcrumbs */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="body2" color="textSecondary">
          Dashboard &gt; Categories &gt; Add Category
        </Typography>

        {/* Buttons */}
        <Box display="flex" gap={2}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained" color="primary">
            + Add Category
          </Button>
        </Box>
      </Box>

      {/* Main Form */}
      <Grid container spacing={3}>
        {/* Left: Thumbnail Section */}
        <Grid item xs={12} sm={4}>
          <Paper sx={{ padding: 3, backgroundColor: '#f5faf5' }}>
            <Typography variant="h6" gutterBottom>
              Thumbnail
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Photo
            </Typography>
            <Box
              sx={{
                border: '2px dashed #d4d4d4',
                borderRadius: 2,
                textAlign: 'center',
                padding: 4,
                cursor: 'pointer',
              }}
              onClick={() => document.getElementById('image-upload').click()}
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Thumbnail"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              ) : (
                <>
                  <CloudUploadOutlined sx={{ fontSize: 50, color: '#a0a0a0' }} />
                  <Typography>Drag and drop image here, or click add image</Typography>
                </>
              )}
            </Box>
            <input
              id="image-upload"
              type="file"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
            <Button variant="contained" fullWidth sx={{ mt: 2 }}>
              Add Image
            </Button>
          </Paper>
        </Grid>

        {/* Right: General Information Section */}
        <Grid item xs={12} sm={8}>
          <Paper sx={{ padding: 3, backgroundColor: '#f5faf5' }}>
            <Typography variant="h6" gutterBottom>
              General Information
            </Typography>
            <TextField
              label="Category Name"
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 3 }}
              placeholder="Type category name here..."
            />
            <TextField
              label="Description"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              placeholder="Type category description here..."
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddCategory;
