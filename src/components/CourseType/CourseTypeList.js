import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';

function CourseTypeList() {
  const [courseTypes, setCourseTypes] = useState([
    { id: 1, name: 'Individual' },
    { id: 2, name: 'Group' },
    { id: 3, name: 'Special' },
  ]);

  const handleDelete = (id) => {
    setCourseTypes(courseTypes.filter(type => type.id !== id));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Course Types
      </Typography>
      <Button 
        variant="contained" 
        component={Link} 
        to="/course-types/new"
        sx={{ mb: 2 }}
      >
        Add New Course Type
      </Button>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courseTypes.map((type) => (
              <TableRow key={type.id}>
                <TableCell>{type.name}</TableCell>
                <TableCell align="right">
                  <Button 
                    component={Link} 
                    to={`/course-types/edit/${type.id}`}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button 
                    color="error"
                    onClick={() => handleDelete(type.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CourseTypeList;
