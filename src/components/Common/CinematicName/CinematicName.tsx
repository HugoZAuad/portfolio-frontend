import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const CinematicName: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullName = 'Zeymer Auad';

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (hovered && typedText.length < fullName.length) {
      timeout = setTimeout(() => {
        setTypedText(fullName.slice(0, typedText.length + 1));
      }, 100); // velocidade da digitação
    } else if (!hovered && typedText.length > 0) {
      timeout = setTimeout(() => {
        setTypedText('');
      }, 300); // tempo para apagar ao sair do hover
    }
    return () => clearTimeout(timeout);
  }, [hovered, typedText]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a
        href="https://www.linkedin.com/in/hugozauad/"
        target="_blank"
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: '#6366f1',
            mr: 1,
            transition: 'color 0.3s ease',
          }}
        >
          Hugo
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'monospace',
            color: '#a1a1aa',
            letterSpacing: '0.05em',
            minWidth: '1px',
            transition: 'opacity 0.3s ease',
          }}
        >
          {typedText}
        </Typography>
      </a>
    </Box>
  );
};

export default CinematicName;
