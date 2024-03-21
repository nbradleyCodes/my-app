import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchUser } from './userService'
import { Button, CircularProgress, Typography } from '@mui/material';

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)

  const getUsers = async () => {
    setLoading('true');
    const userData = await fetchUser(setLoading);
    setMessage(userData.message);
  };

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div className="App">
      <Typography variant='h1'>DOGS!!!</Typography>
      <div>
        <img src={message} alt="Dog" height={700}/>
        <br/>
        <Button 
          variant='contained' 
          onClick={getUsers}
        >
          {loading ? <CircularProgress color='error' /> : 'GIMME MORE DOGS'}
        </Button>
      </div>
    </div>
  )
}

export default App;
