import sendRequest from "./send-request";

const BASE_URL = 'http://localhost:3001/api/jobs';


export function getById(id) {
  console.log('jobId', id);
  return sendRequest(`${BASE_URL}/${id}`);
}

export function add(jobData) {
  return sendRequest(BASE_URL, 'POST', jobData);
}

export function getAll() {
  return sendRequest(BASE_URL);
}