import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const AboutText: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          mb: 3,
          fontWeight: 700,
          color: theme.palette.text.primary,
          fontSize: { xs: '2.5rem', md: '3.5rem' },
        }}
      >
        Sobre Mim
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          color: theme.palette.text.secondary,
          fontWeight: 400,
          lineHeight: 1.6,
        }}
      >
        Desenvolvedor Full Stack & UI/UX Designer
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          color: theme.palette.text.secondary,
          lineHeight: 1.8,
          fontSize: '1.1rem',
        }}
      >
        Sou um desenvolvedor apaixonado por criar soluções inovadoras e experiências digitais incríveis.
        Com experiência em tecnologias modernas como React, Node.js, TypeScript e design systems,
        busco sempre entregar produtos de alta qualidade que fazem a diferença na vida das pessoas.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.text.secondary,
          lineHeight: 1.8,
          fontSize: '1.1rem',
        }}
      >
        Minha abordagem combina criatividade técnica com foco em usabilidade e performance,
        sempre buscando as melhores práticas e tecnologias emergentes do mercado.
      </Typography>
    </Box>
  );
};

export default AboutText;
