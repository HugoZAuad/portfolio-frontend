import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const ContactHeader: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          mb: 4,
          fontWeight: 700,
          color: theme.palette.text.primary,
          fontSize: { xs: '2.5rem', md: '3.5rem' },
        }}
      >
        Vamos Conversar
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.text.secondary,
          fontWeight: 400,
          maxWidth: '800px',
          mx: 'auto',
          lineHeight: 1.6,
        }}
      >
        Estou sempre interessado em novas oportunidades e projetos interessantes.
        Vamos conversar como podemos trabalhar juntos!
      </Typography>
    </Box>
  );
};

export default ContactHeader;
