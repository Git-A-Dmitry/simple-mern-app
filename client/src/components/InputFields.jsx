import React, { useState, useRef } from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';
import Axios from 'axios';

export default function InputFields(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [notes, setNotes] = useState('');

  const { listOfUsers, setListOfUsers } = props;
  // const ref = useRef(null);

  const createUser = () => {
    Axios.post('http://localhost:3001/createUser', {
      name,
      age,
      notes,
    }).then((response) => {
      // alert('The new user has been created');
      const newUser = { name, age, notes };
      setListOfUsers([...listOfUsers, newUser]);
      // ref.current.value = '';
      setName(null);
      setAge(null);
      setNotes(null);
    });
  };

  return (
    <Stack spacing={4}>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField //
          id='standard-basic'
          label='Name'
          variant='standard'
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name || ''}
        />

        <TextField //
          id='standard-basic'
          label='Age'
          variant='standard'
          onChange={(event) => {
            setAge(event.target.value);
          }}
          value={age || ''}
        />
        <TextField //
          id='standard-basic'
          label='Notes'
          variant='standard'
          onChange={(event) => {
            setNotes(event.target.value);
          }}
          value={notes || ''}
        />
      </Box>
      <Box>
        <Button //
          variant='contained'
          type='submit'
          color='primary'
          onClick={createUser}
          sx={{ px: '50px' }}
        >
          Create User
        </Button>
      </Box>
    </Stack>
  );
}
