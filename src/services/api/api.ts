import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portfolio-backend-dqxo.onrender.com',
});

// Interceptor global de requisição
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // Se estiver enviando FormData, não sobrescreve Content-Type
    if (
      config.data instanceof FormData &&
      config.headers &&
      !config.headers['Content-Type']
    ) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor global de resposta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('isAuthenticated');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
