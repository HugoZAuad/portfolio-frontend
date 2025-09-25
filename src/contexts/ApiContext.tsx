import React, { createContext, useContext, useState } from 'react';
import axios, { type AxiosInstance } from 'axios';
import FeedbackAlert from '../components/Common/FeedbackAlert/FeedbackAlert';

interface ApiContextType {
  api: AxiosInstance;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useApi = (): AxiosInstance => {
  const context = useContext(ApiContext);
  if (!context) throw new Error('useApi must be used within ApiProvider');
  return context.api;
};

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackSeverity, setFeedbackSeverity] = useState<'success' | 'error'>('error');

  const showFeedback = (message: string, severity: 'success' | 'error') => {
    setFeedbackMessage(message);
    setFeedbackSeverity(severity);
    setFeedbackOpen(true);
  };

  const api = axios.create({
    baseURL: 'https://portfolio-backend-pr7h.onrender.com',
  });

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

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
        showFeedback('Sessão expirada. Faça login novamente.', 'error');
        localStorage.removeItem('token');
        localStorage.removeItem('isAuthenticated');
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      }
      return Promise.reject(error);
    }
  );

  return (
    <ApiContext.Provider value={{ api }}>
      {children}
      <FeedbackAlert
        open={feedbackOpen}
        message={feedbackMessage}
        severity={feedbackSeverity}
        onClose={() => setFeedbackOpen(false)}
      />
    </ApiContext.Provider>
  );
};
