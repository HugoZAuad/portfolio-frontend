import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portfolio-backend-pr7h.onrender.com',
  withCredentials: true,
});

export default api;
