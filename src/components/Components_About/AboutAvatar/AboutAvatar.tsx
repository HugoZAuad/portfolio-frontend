import React from 'react';
import { Box, Avatar, useTheme } from '@mui/material';

const AboutAvatar: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Avatar
        src="/avatar.png" 
        alt="Avatar"
        sx={{
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          bgcolor: theme.palette.primary.main,
          boxShadow: `0 20px 40px ${theme.palette.primary.main}20`,
        }}
      />
    </Box>
  );
};

export default AboutAvatar;
