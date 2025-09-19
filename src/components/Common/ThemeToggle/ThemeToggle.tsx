import React from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      sx={{
        color: theme === 'dark' ? '#00ffff' : '#ff00ff',
        '&:hover': {
          backgroundColor: theme === 'dark' ? 'rgba(0, 255, 255, 0.1)' : 'rgba(255, 0, 255, 0.1)',
        },
      }}
    >
      {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggle;
