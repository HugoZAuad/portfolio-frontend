import React, { useState, useEffect } from 'react';
import { Box, IconButton, Zoom } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import CloseIcon from '@mui/icons-material/Close';

const FloatingSocialMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseSize = 40;

  const buttonStyle = {
    width: baseSize,
    height: baseSize,
    borderRadius: '50%',
    backgroundColor: '#fff',
    boxShadow: 2,
    color: '#000',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: scrolled ? 80 : 30, // sobe junto com ScrollToTopButton
        left: 1855, // ⬅️ alinhado ao lado do botão de subir
        zIndex: 1300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        transition: 'bottom 0.3s ease',
      }}
    >
      {/* Social buttons row */}
      <Zoom in={open}>
        <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
          <IconButton
            href="https://github.com/hugozauad"
            target="_blank"
            sx={{
              ...buttonStyle,
              backgroundColor: '#000',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#222',
              },
            }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/hugozauad/"
            target="_blank"
            sx={{
              ...buttonStyle,
              backgroundColor: '#0A66C2',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#084a9e',
              },
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Box>
      </Zoom>

      {/* Toggle button */}
      <IconButton onClick={toggleMenu} sx={buttonStyle}>
        {open ? <CloseIcon fontSize="small" /> : <PublicIcon fontSize="small" />}
      </IconButton>
    </Box>
  );
};

export default FloatingSocialMenu;
