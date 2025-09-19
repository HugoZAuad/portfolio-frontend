import React from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';
import Navbar from './components/Common/Navbar/Navbar';
import FloatingSocialMenu from './components/Common/FloatingSocialMenu/FloatingSocialMenu';
import ScrollToTopButton from './components/Common/ScrollToTopButton/ScrollToTopButton';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { theme } = useTheme();
  const isLoginRoute = location.pathname === '/login';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: theme === 'dark' ? '#0f0f23' : '#fafafa',
        transition: 'background-color 0.3s ease',
      }}
    >
      {!isLoginRoute && <Navbar />}
      {!isLoginRoute && <FloatingSocialMenu />}
      {!isLoginRoute && <ScrollToTopButton />}
      {children}
    </Box>
  );
};

export default Layout;
