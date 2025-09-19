import React from 'react';
import { Box } from '@mui/material';
import Button from '../../Common/Button/Button';

const HeroButtons: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" size="large">
        Ver Meus Projetos
      </Button>
      <Button variant="secondary" size="large">
        Sobre Mim
      </Button>
    </Box>
  );
};

export default HeroButtons;
