import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  return (
    <main>
      <CssBaseline />
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
          Welcome To <br></br>BeeMaa Jobs!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            This place for you to Post and Find Jobs.

            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="outlined"  href="/jobs">View Jobs</Button>
              <Button variant="contained"  href="/jobs/new">Add Job</Button>
            </Stack>
          </Container>  
          </Box>
    </main>
  );
}