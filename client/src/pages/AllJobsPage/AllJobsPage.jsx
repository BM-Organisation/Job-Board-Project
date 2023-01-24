import JobCard from "../../components/JobCard/JobCard";
import Typography from '@mui/material/Typography';

export default function AllJobsPage(props) {
  
  return (
    <>
      <Typography
              variant="h3"
              align="center"
              color="text.primary"
              sx={{p : 4}}
            >
          All Jobs
            </Typography>
      <div>
        {props.jobs.map((job, idx) => {
          return <JobCard key={idx} job={job} />;
        })}
      </div>
    </>
  );
}