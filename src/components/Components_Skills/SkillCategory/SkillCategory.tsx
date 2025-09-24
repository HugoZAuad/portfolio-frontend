import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import SkillCard from '../SkillCard/SkillCard';
import { motion } from 'framer-motion';
import type { Skill } from '../../../services/skillService/skillService';

interface Props {
  title: string;
  skills: Skill[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SkillCategory: React.FC<Props> = ({ title, skills }) => {
  const theme = useTheme();

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          padding: '24px',
          borderRadius: '12px',
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: `0 8px 24px ${theme.palette.primary.main}10`,
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            fontWeight: 600,
            color: theme.palette.primary.main,
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

export default SkillCategory;
