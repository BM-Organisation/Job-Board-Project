import mongoose from "mongoose";

const jobSchema = new mongoose.Schema ({
  title: {
    type: String, 
    required: true
  },
  company: {
    type: String, 
    required: true
  },
  location: {
    type: String, 
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  responcibilities: {
    type: String, 
    required: true
  },
  skills: {
    type: String, 
    required: true
  },
  benifets: {
    type: String, 
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
});

const Job = mongoose.model('Job', jobSchema);
export default Job;