import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 3,
        '& .MuiSvgIcon-root': {
          color: theme.palette.primary.main,
          mr: 2,
          fontSize: '1.5rem',
        },
      }}
    >
      {icon}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 500, color: theme.palette.text.primary }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactInfoItem;
