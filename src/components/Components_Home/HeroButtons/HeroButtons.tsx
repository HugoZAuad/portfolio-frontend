import React from 'react';
import { Box } from '@mui/material';
import Button from '../../Common/Button/Button';

const HeroButtons: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" size="large" onClick={() => scrollToSection('projects')}>
        Ver Meus Projetos
      </Button>
      <Button variant="secondary" size="large" onClick={() => scrollToSection('about')}>
        Sobre Mim
      </Button>
    </Box>
  );
};

export default HeroButtons;
