import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


export default function JobDetailPage({ setJobs, jobs, user }) {
  
  const [curJob, setCurJob] = useState(null);
  let { jobId } = useParams();

  useEffect(function() {
      let job = jobs.find((j) => j._id === jobId);
      setCurJob(job);
  }, [jobs]);

  if (!curJob) return null;


  return (
    <div>
      <div>
        <h1>{curJob.title}</h1>
        <h3>Company: {curJob.company}</h3>
      </div>
      <div>
        <h4>Location:</h4>
        <p>{curJob.location}</p>
      </div>
      <div>
        <h4>Description:</h4>
        <p>{curJob.description}</p>
      </div>
      <div>
        <h4>Responsibilities:</h4>
        <p>{curJob.responcibilities}</p>
      </div>
      <div>
        <h4>Skills:</h4>
        <p>{curJob.skills}</p>
      </div>
      <div>
        <h4>Benefits:</h4>
        <p>{curJob.benifets}</p>
      </div>

    </div>
 );
}