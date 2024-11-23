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
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box
} from '@mui/material';
import { Link } from 'react-router-dom';

function RegistrationList() {
  const [registrations, setRegistrations] = useState([
    { id: 1, studentName: 'John Doe', courseType: 'Individual', course: 'English' },
    { id: 2, studentName: 'Jane Smith', courseType: 'Group', course: 'Hindi' },
  ]);

  const [filterCourseType, setFilterCourseType] = useState('');

  const courseTypes = [
    { id: 1, name: 'Individual' },
    { id: 2, name: 'Group' },
    { id: 3, name: 'Special' },
  ];

  const handleDelete = (id) => {
    setRegistrations(registrations.filter(reg => reg.id !== id));
  };

  const filteredRegistrations = filterCourseType
    ? registrations.filter(reg => reg.courseType === courseTypes.find(ct => ct.id === filterCourseType)?.name)
    : registrations;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Student Registrations
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Button
          variant="contained"
          component={Link}
          to="/registrations/new"
        >
          Add New Registration
        </Button>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Filter by Course Type</InputLabel>
          <Select
            value={filterCourseType}
            onChange={(e) => setFilterCourseType(e.target.value)}
            label="Filter by Course Type"
          >
            <MenuItem value="">All</MenuItem>
            {courseTypes.map((type) => (
              <MenuItem key={type.id} value={type.id}>
                {type.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Course Type</TableCell>
              <TableCell>Course</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRegistrations.map((registration) => (
              <TableRow key={registration.id}>
                <TableCell>{registration.studentName}</TableCell>
                <TableCell>{registration.courseType}</TableCell>
                <TableCell>{registration.course}</TableCell>
                <TableCell align="right">
                  <Button
                    component={Link}
                    to={`/registrations/edit/${registration.id}`}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    color="error"
                    onClick={() => handleDelete(registration.id)}
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

export default RegistrationList;
