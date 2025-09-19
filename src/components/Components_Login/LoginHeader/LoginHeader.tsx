import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

const LoginHeader: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, color: theme.palette.text.primary, mb: 1 }}
      >
        Bem-vindo de volta
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: theme.palette.text.secondary }}
      >
        Faça login para gerenciar seus projetos e habilidades
      </Typography>
    </Box>
  );
};

export default LoginHeader;
