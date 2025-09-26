import React from 'react';
import { Box, Typography, LinearProgress, useTheme } from '@mui/material';

interface SkillProps {
  name: string;
  level: string;
  value: number; 
}

const SkillCard: React.FC<SkillProps> = ({ name, level, value }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper, 
        borderRadius: '15px',
        padding: theme.spacing(2),
        boxShadow: theme.shadows[1],
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: `0 15px 30px ${theme.palette.primary.main}50`, 
          cursor: 'pointer', 
        },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ mb: 1 }}>
        <Typography 
            variant="h6"
            sx={{ 
                fontWeight: 600, 
                color: theme.palette.text.primary,
            }}
        >
          {name}
        </Typography>
        <Typography 
            variant="caption"
            sx={{ 
                color: theme.palette.text.secondary, 
            }}
        >
          Nível: {level}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: theme.palette.grey[700], 
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