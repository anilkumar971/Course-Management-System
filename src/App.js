import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// Import components
import CourseTypeList from './components/CourseType/CourseTypeList';
import CourseTypeForm from './components/CourseType/CourseTypeForm';
import CourseList from './components/Course/CourseList';
import CourseForm from './components/Course/CourseForm';
import CourseTypeMappingList from './components/CourseTypeMapping/CourseTypeMappingList';
import CourseTypeMappingForm from './components/CourseTypeMapping/CourseTypeMappingForm';
import RegistrationList from './components/Registration/RegistrationList';
import RegistrationForm from './components/Registration/RegistrationForm';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Course Management System
          </Typography>
          <Button color="inherit" component={Link} to="/course-types">Course Types</Button>
          <Button color="inherit" component={Link} to="/courses">Courses</Button>
          <Button color="inherit" component={Link} to="/course-type-mappings">Course Type Mappings</Button>
          <Button color="inherit" component={Link} to="/registrations">Registrations</Button>
        </Toolbar>
      </AppBar>
      
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/course-types" element={<CourseTypeList />} />
          <Route path="/course-types/new" element={<CourseTypeForm />} />
          <Route path="/course-types/edit/:id" element={<CourseTypeForm />} />
          
          <Route path="/courses" element={<CourseList />} />
          <Route path="/courses/new" element={<CourseForm />} />
          <Route path="/courses/edit/:id" element={<CourseForm />} />
          
          <Route path="/course-type-mappings" element={<CourseTypeMappingList />} />
          <Route path="/course-type-mappings/new" element={<CourseTypeMappingForm />} />
          <Route path="/course-type-mappings/edit/:id" element={<CourseTypeMappingForm />} />
          
          <Route path="/registrations" element={<RegistrationList />} />
          <Route path="/registrations/new" element={<RegistrationForm />} />
          <Route path="/registrations/edit/:id" element={<RegistrationForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
