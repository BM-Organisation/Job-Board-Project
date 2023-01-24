import Job from '../../models/job.js';


export const create = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    const jobs = await Job.find({});
    res.json(jobs);
  } catch(err) {
    res.status(400).json(err);
  }
}

export const index = async (req, res) => {
    try {
    const allJobs = await Job.find({});
    res.json(allJobs);
  } catch(err) {
    res.status(400).json(err);
  }
}

export const show = async (req, res) => {
   console.log('Show Initiated')
   try {
     const job = await Job.findById(req.params.id);
     res.json(job);
     console.log(job);
   } catch (err) {
     res.status(400).json(err);
   }
 }