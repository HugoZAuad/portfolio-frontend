import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portfolio-backend-dqxo.onrender.com',
  withCredentials: true,
});

export default api;
