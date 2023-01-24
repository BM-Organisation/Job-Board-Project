import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewJobPage from '../NewJobPage/NewJobPage';
import AllJobsPage from '../AllJobsPage/AllJobsPage';
import JobDetailPage from '../JobDetailPage/JobDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage'
import * as jobsAPI from '../../utilities/jobs-api';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();
  
  useEffect(function() {
    async function getJobs() {
      const allJobs = await jobsAPI.getAll();
      setJobs(allJobs);
    }
    getJobs()
  }, []);

  async function handleNewJob(jobData) {
    const updatedJobs = await jobsAPI.add(jobData);
    setJobs(updatedJobs);
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            
            <Routes>
              {/* Route components in here */}
              <Route path='/' element={<HomePage />} />
              <Route path="/jobs/new" element={<NewJobPage jobs={jobs} handleNewJob={handleNewJob} />} />
              <Route path="/jobs" element={<AllJobsPage jobs={jobs} />} />
              <Route path="/jobs/:jobId" element={<JobDetailPage setJobs={setJobs} jobs={jobs} user={user} />} />
            </Routes>
          </>
          :
            <AuthPage setUser={setUser} />
      }
    </main>
  );
}
