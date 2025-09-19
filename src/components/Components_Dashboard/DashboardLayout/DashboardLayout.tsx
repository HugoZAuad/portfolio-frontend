import React from 'react';
import { Box, Container } from '@mui/material';
import { useTheme } from '../../../contexts/ThemeContext';
import DashboardNavbar from '../../Common/Navbar/DashboardNavbar';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: theme === 'dark' ? '#0f0f23' : '#fafafa',
        transition: 'background-color 0.3s ease',
      }}
    >
      <DashboardNavbar />
      <Container maxWidth="md" sx={{ py: 4 }}>
        {children}
      </Container>
    </Box>
  );
};

export default DashboardLayout;
