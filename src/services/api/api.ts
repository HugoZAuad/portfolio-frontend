import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ltd-margaretta-hugozeymerauad-b9e6c12d.koyeb.app/',
  withCredentials: true, 
});


api.interceptors.request.use(
  (config) => {
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