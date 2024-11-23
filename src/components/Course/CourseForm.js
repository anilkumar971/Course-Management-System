import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Box,
  Typography
} from '@mui/material';

function CourseForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    if (id) {
      // Fetch course data if editing
      setName('Sample Course');
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    navigate('/courses');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {id ? 'Edit Course' : 'New Course'}
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Course Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
        />

        <Box sx={{ mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ mr: 1 }}
          >
            Save
          </Button>
          <Button
            onClick={() => navigate('/courses')}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default CourseForm;
