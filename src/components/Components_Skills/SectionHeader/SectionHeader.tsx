import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

const SectionHeader: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <Typography
        variant="h2"
        sx={{
          mb: 4,
          fontWeight: 700,
          color: theme.palette.text.primary,
          fontSize: { xs: '2.5rem', md: '3.5rem' },
        }}
      >
        Habilidades Técnicas
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.text.secondary,
          fontWeight: 400,
          maxWidth: '600px',
          mx: 'auto',
          lineHeight: 1.6,
          textAlign: 'center'
        }}
      >
        Tecnologias e ferramentas que domino para criar soluções inovadoras
      </Typography>
    </Box>
  );
};

export default SectionHeader;
