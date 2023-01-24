import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function JobForm({handleNewJob}) {
  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    responcibilities: '',
    skills: '',
    benifets: ''
  });
  
  function handleChange(evt) {
    setNewJob({...newJob, [evt.target.name]: evt.target.value});
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleNewJob(newJob);
    setNewJob({
    title: '',
    company: '',
    location: '',
    description: '',
    responcibilities: '',
    skills: '',
    benifets: ''
    });
  }
 
  return (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="title"
                  required
                  fullWidth
                  type="text"
                  id="Jobtitle"
                  label="Job Title"
                  autoFocus
                  value={newJob.title} 
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="CompanyName"
                  label="Company Name"
                  name="company"
                  value={newJob.company} 
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Location"
                  label="Location"
                  name="location"
                  value={newJob.location}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  id="Description"
                  value={newJob.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="responcibilities"
                  label="Responcibilities"
                  id="Responcibilities"
                  value={newJob.responcibilities}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="skills"
                  label="Skills Required"
                  id="Skills"
                  value={newJob.skills}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="benifets"
                  label="Benifets"
                  id="Benifets"
                  value={newJob.benifets}
                  onChange={handleChange}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Job
            </Button>
        </Box>
 );
}