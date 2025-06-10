import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Stack } from '@mui/material';

export default function AddStudentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submit = e => {
    e.preventDefault();
    axios.post('/api/students', { name, email })
      .then(() => { setName(''); setEmail(''); })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={submit}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" value={name} onChange={e => setName(e.target.value)} />
        <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Button type="submit" variant="contained">Add</Button>
      </Stack>
    </form>
  );
}
