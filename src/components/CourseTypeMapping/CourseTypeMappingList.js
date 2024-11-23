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

function CourseTypeMappingList() {
  const [mappings, setMappings] = useState([
    { id: 1, courseType: 'Individual', course: 'English' },
    { id: 2, courseType: 'Group', course: 'Hindi' },
    { id: 3, courseType: 'Individual', course: 'Urdu' },
  ]);

  const handleDelete = (id) => {
    setMappings(mappings.filter(mapping => mapping.id !== id));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Course Type Mappings
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/course-type-mappings/new"
        sx={{ mb: 2 }}
      >
        Add New Mapping
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course Type</TableCell>
              <TableCell>Course</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mappings.map((mapping) => (
              <TableRow key={mapping.id}>
                <TableCell>{mapping.courseType}</TableCell>
                <TableCell>{mapping.course}</TableCell>
                <TableCell align="right">
                  <Button
                    component={Link}
                    to={`/course-type-mappings/edit/${mapping.id}`}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    color="error"
                    onClick={() => handleDelete(mapping.id)}
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

export default CourseTypeMappingList;
