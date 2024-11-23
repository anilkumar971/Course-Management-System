import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  TextField, 
  Button, 
  Box, 
  Typography 
} from '@mui/material';

function CourseTypeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    if (id) {
      // Fetch course type data if editing
      // This is where you'd normally make an API call
      setName('Sample Course Type');
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // This is where you'd normally make an API call
    navigate('/course-types');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {id ? 'Edit Course Type' : 'New Course Type'}
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Course Type Name"
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
            onClick={() => navigate('/course-types')}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default CourseTypeForm;
