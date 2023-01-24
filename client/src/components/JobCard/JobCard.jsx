import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Container } from "@mui/material";


export default function JobCard({job}) {
  return(
    <Container align="center">
    <Box align="center" sx={{ maxWidth: 400 }}>
      <Card variant="outlined" align="center">
      <CardContent>
      
      <Typography align="center" variant="h3" component="div" sx={{ pb: 3 }}>
      {job.title}
      </Typography>
      
      <Typography align="center" variant="body2" sx={{ pb: 3 }}>
      {job.company}       
        <br />
      </Typography>
    </CardContent>
    <Box align="center" sx={{ pb: 3 }} >
        
      <Button
      href={`/jobs/${job._id}`}
      
      variant="contained"
          size="small"
          color="primary"
          sx={{ fontWeight: 600 }}
        >
          Explore
        </Button>
        </Box>
      </Card>
    </Box>
    </Container>

      );
} 