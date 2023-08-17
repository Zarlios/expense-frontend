import axios from 'axios';

const api = axios.create({
  baseURL: 'https://expense-backend-7vd9.onrender.com',

  withCredentials: true, // Set withCredentials to true
});

export default api;