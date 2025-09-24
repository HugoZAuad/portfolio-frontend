import React from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 1,
        px: 1,
        textAlign: 'center',
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant="body2" sx={{ mb: 1, color: theme.palette.text.secondary }}>
        © {new Date().getFullYear()} Desenvolvido por Hugo com 💻 e ☕
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton
          component="a"
          href="https://github.com/HugoZAuad"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon sx={{ color: theme.palette.text.primary }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/hugozauad/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon sx={{ color: theme.palette.text.primary }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
