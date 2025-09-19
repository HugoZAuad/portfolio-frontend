import React from 'react';
import { Box, Typography } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Common/Button/Button'

const Dashboard: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Bem-vindo ao seu painel
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Aqui você pode gerenciar seus projetos e habilidades.
      </Typography>
      <Button variant="secondary" onClick={logout}>
        Sair
      </Button>
    </Box>
  );
};

export default Dashboard;
