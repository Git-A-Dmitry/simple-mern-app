// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import InputFields from './components/InputFields';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import SearchAppBar from './components/SearchAppBar';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  // get request
  useEffect(() => {
    Axios.get('http://localhost:3001/getUsers').then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  return (
    <div className='App'>
      {/* <SearchAppBar /> */}
      <header className='App-header'>{/* <img src={logo} className='App-logo' alt='logo' /> */}</header>

      <InputFields //
        listOfUsers={listOfUsers}
        setListOfUsers={setListOfUsers}
      />

      <TableContainer //
        component={Paper}
        sx={{ width: '70%', my: '20px', mx: 'auto' }}
        elevation={4}
      >
        <Table sx={{ width: 700, my: '20px', mx: 'auto' }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {listOfUsers.map((user, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align='left'>{user.name}</TableCell>
                  <TableCell align='left'>{user.age}</TableCell>
                  <TableCell align='left'>{user.notes}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
