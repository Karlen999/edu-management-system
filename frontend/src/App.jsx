import React from 'react';
import { Container, Typography } from '@mui/material';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';

export default function App() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edu Management
      </Typography>
      <AddStudentForm />
      <StudentList />
    </Container>
  );
}
