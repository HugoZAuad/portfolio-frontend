import React from 'react';
import { Typography, Box } from '@mui/material';

interface Props {
  title: string;
}

const SectionHeader: React.FC<Props> = ({ title }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h4" sx={{ fontWeight: 700 }}>
      {title}
    </Typography>
  </Box>
);

export default SectionHeader;
