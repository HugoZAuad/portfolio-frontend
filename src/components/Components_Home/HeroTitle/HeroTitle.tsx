import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

const HeroTitle: React.FC = () => {
  const theme = useTheme();

  return (
    <Typography
      variant="h1"
      component="h1"
      sx={{
        mb: 4,
        fontWeight: 800,
        color: theme.palette.text.primary,
        fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
        lineHeight: 1.1,
      }}
    >
      Olá, eu sou o {' '}
      <Box
        component="span"
        sx={{
          color: theme.palette.primary.main,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '4px',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '2px',
          },
        }}
      >
        Hugo
      </Box>
    </Typography>
  );
};

export default HeroTitle;
