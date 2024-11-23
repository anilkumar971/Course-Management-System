import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

function CourseTypeMappingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCourseType, setSelectedCourseType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const courseTypes = [
    { id: 1, name: 'Individual' },
    { id: 2, name: 'Group' },
    { id: 3, name: 'Special' },
  ];

  const courses = [
    { id: 1, name: 'Hindi' },
    { id: 2, name: 'English' },
    { id: 3, name: 'Urdu' },
  ];

  useEffect(() => {
    if (id) {
      // Fetch mapping data if editing
      setSelectedCourseType('1');
      setSelectedCourse('1');
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    navigate('/course-type-mappings');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {id ? 'Edit Course Type Mapping' : 'New Course Type Mapping'}
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Course Type</InputLabel>
          <Select
            value={selectedCourseType}
            onChange={(e) => setSelectedCourseType(e.target.value)}
            required
          >
            {courseTypes.map((type) => (
              <MenuItem key={type.id} value={type.id}>
                {type.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Course</InputLabel>
          <Select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            required
          >
            {courses.map((course) => (
              <MenuItem key={course.id} value={course.id}>
                {course.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ mr: 1 }}
          >
            Save
          </Button>
          <Button
            onClick={() => navigate('/course-type-mappings')}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default CourseTypeMappingForm;
