import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '40px',
  left: '50%',
  transform: 'translateX(-50%)',
  animation: 'bounce 2s infinite',
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateX(-50%) translateY(0)',
    },
    '40%': {
      transform: 'translateX(-50%) translateY(-10px)',
    },
    '60%': {
      transform: 'translateX(-50%) translateY(-5px)',
    },
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    fontSize: '2rem',
    cursor: 'pointer',
  },
}));

const ScrollIndicator: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledScrollIndicator onClick={scrollToNext}>
      <KeyboardArrowDownIcon />
    </StyledScrollIndicator>
  );
};

export default ScrollIndicator;
