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
        fontSize: { xs: '0.85rem', md: '1rem', lg: '1.75rem' },
        lineHeight: 1.4,
        textAlign: 'center'
      }}
    >
      Desenvolvedor Full-Stack dedicado a criar experiências digitais envolventes e soluções que fazem a diferença.
    </Typography>
  );
};

export default HeroSubtitle;
