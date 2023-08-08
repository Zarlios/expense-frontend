import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5050', // Your Express server's URL
  withCredentials: true, // Set withCredentials to true
});

export default api;