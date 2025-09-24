import React from 'react';
import { Box, Typography, LinearProgress, useTheme } from '@mui/material';

interface SkillProps {
  name: string;
  level: number;
}

const SkillCard: React.FC<SkillProps> = ({ name, level }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 500, color: theme.palette.text.primary }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          {level}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={level}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: theme.palette.grey[300],
          '& .MuiLinearProgress-bar': {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 4,
          },
        }}
      />
    </Box>
  );
};

export default SkillCard;
