import React from 'react';
import { Box, Typography } from '@mui/material';
import Button from '../components/Common/Button/Button';
import { useAuth } from '../contexts/AuthContext';
import { useFeedback } from '../contexts/FeedbackContext';

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const { showFeedback } = useFeedback();

  const handleLogout = async () => {
    try {
      await logout();
      showFeedback('Logout realizado com sucesso!', 'success');
    } catch {
      showFeedback('Erro ao deslogar.', 'error');
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Bem-vindo ao seu painel
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Aqui você pode gerenciar seus projetos e habilidades.
      </Typography>
      <Button variant="secondary" onClick={handleLogout}>
        Sair
      </Button>
    </Box>
  );
};

export default Dashboard;
