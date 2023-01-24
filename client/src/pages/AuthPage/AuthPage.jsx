import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <Box sx={{
      pb: 4,
    }}>
      <CssBaseline />
        <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 4,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h2"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >Welcome To <br></br>BeeMaa Jobs!
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                This place for you to Post and Find Jobs.
              </Typography>
            </Container>  
          </Box>
          { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
      <Link href="#" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign Up"}</Link>
      
    </Box>
  );
}