import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '../../../../contexts/ThemeContext';
import Navbar from '../../Navbar/PublicNavbar';
import FloatingSocialMenu from '../../FloatingSocialMenu/FloatingSocialMenu';
import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: theme === 'dark' ? '#0f0f23' : '#fafafa',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Navbar />
      <FloatingSocialMenu />
      <ScrollToTopButton />
      {children}
    </Box>
  );
};

export default PublicLayout;
