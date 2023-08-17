import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:10000', // Your Express server's URL
  withCredentials: true, // Set withCredentials to true
});

export default api;