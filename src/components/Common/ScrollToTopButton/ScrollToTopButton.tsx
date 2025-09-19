import React, { useState, useEffect } from 'react';
import { IconButton, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={visible}>
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 10, // ⬅️ mais encostado na borda direita
          zIndex: 1300,
          width: 40,
          height: 40,
          borderRadius: '50%',
          backgroundColor: '#6366f1',
          color: '#fff',
          boxShadow: 3,
          '&:hover': {
            backgroundColor: '#4f46e5',
          },
        }}
      >
        <KeyboardArrowUpIcon fontSize="small" />
      </IconButton>
    </Zoom>
  );
};

export default ScrollToTopButton;
