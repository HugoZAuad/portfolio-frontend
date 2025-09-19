import React from 'react';
import { Typography, useTheme } from '@mui/material';

const HeroSubtitle: React.FC = () => {
  const theme = useTheme();

  return (
    <Typography
      variant="h4"
      sx={{
        mb: 6,
        color: theme.palette.text.secondary,
        fontWeight: 400,
        fontSize: { xs: '1.25rem', md: '1.5rem', lg: '1.75rem' },
        lineHeight: 1.4,
      }}
    >
      Desenvolvedor Full-Stack apaixonado por criar experiências digitais
      incríveis e soluções inovadoras.
    </Typography>
  );
};

export default HeroSubtitle;
