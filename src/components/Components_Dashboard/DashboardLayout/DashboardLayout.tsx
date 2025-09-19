  import React from 'react';
import { Box, Container } from '@mui/material';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 20 }}>
        {children}
      </Box>
    </Container>
  );
};

export default DashboardLayout;
