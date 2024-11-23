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

function CourseList() {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Hindi' },
    { id: 2, name: 'English' },
    { id: 3, name: 'Urdu' },
  ]);

  const handleDelete = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Courses
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/courses/new"
        sx={{ mb: 2 }}
      >
        Add New Course
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
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.name}</TableCell>
                <TableCell align="right">
                  <Button
                    component={Link}
                    to={`/courses/edit/${course.id}`}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    color="error"
                    onClick={() => handleDelete(course.id)}
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

export default CourseList;
