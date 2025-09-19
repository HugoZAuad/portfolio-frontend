import React from 'react';
import { Container, Typography, Box, Grid, LinearProgress, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: '120px 20px 80px',
  backgroundColor: theme.palette.background.default,
}));

const SkillCard = styled(Box)(({ theme }) => ({
  padding: '24px',
  borderRadius: '12px',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 8px 24px ${theme.palette.primary.main}10`,
  },
}));

const SkillsSection: React.FC = () => {
  const theme = useTheme();

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'MongoDB', level: 70 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 65 },
    { name: 'AWS', level: 60 },
    { name: 'Material-UI', level: 85 },
  ];

  const categories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Material-UI'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL'],
    },
    {
      title: 'Ferramentas',
      skills: ['Git', 'Docker', 'AWS'],
    },
  ];

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 4,
              fontWeight: 700,
              color: theme.palette.text.primary,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Habilidades Técnicas
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Tecnologias e ferramentas que domino para criar soluções inovadoras
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {categories.map((category, categoryIndex) => (
            <Grid size={{ xs: 12, md: 4 }} key={categoryIndex}>
              <SkillCard>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                    textAlign: 'center',
                  }}
                >
                  {category.title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {category.skills.map((skillName) => {
                    const skill = skills.find(s => s.name === skillName);
                    return skill ? (
                      <Box key={skillName}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 500, color: theme.palette.text.primary }}
                          >
                            {skill.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: theme.palette.text.secondary }}
                          >
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
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
                    ) : null;
                  })}
                </Box>
              </SkillCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default SkillsSection;
