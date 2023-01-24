import React from 'react';
import JobForm from '../../components/JobForm/JobForm';


export default function NewJobPage({jobs, handleNewJob}) {
  
  return (
    <div>
      <h1>Add a New Job Posting</h1>
      <JobForm jobs={jobs} handleNewJob={handleNewJob} />
    </div>
  );
}
