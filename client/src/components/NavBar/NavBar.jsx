import * as userService from '../../utilities/users-service';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
      <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="meduim" href="/jobs">View Jobs</Button>
        <Button size="meduim" href="/jobs/new">Add Job</Button>
        <Typography
        
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
        
          sx={{ flex: 1 }}
        >
        
          BeeMaa JOBS
        </Typography>
        <Box sx={{ mr: 2 }}>
        <Typography
          variant="h7"
          color="inherit"
          >
            {user.name} 
          </Typography>
          </Box>
        <Button variant="contained" size="small" onClick={handleLogOut}>
          Login Out
        </Button>
      </Toolbar>
    </React.Fragment>
);

}