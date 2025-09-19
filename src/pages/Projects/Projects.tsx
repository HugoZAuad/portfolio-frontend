import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardActions, Chip, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Button from '../../components/Common/Button/Button';

const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: '120px 20px 80px',
  backgroundColor: theme.palette.background.default,
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 20px 40px ${theme.palette.primary.main}15`,
  },
}));

const ProjectsSection: React.FC = () => {
  const theme = useTheme();

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Uma plataforma completa de e-commerce construída com React, Node.js e MongoDB. Inclui sistema de pagamentos, gerenciamento de inventário e painel administrativo.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Material-UI'],
      githubUrl: 'https://github.com/username/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
    },
    {
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real, utilizando WebSockets e autenticação JWT.',
      technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL', 'JWT'],
      githubUrl: 'https://github.com/username/task-manager',
      liveUrl: 'https://taskmanager-demo.vercel.app',
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard interativo para visualização de dados meteorológicos com gráficos e previsões, integrado com APIs de clima em tempo real.',
      technologies: ['React', 'D3.js', 'OpenWeather API', 'TypeScript'],
      githubUrl: 'https://github.com/username/weather-dashboard',
      liveUrl: 'https://weather-demo.vercel.app',
    },
    {
      title: 'Portfolio Website',
      description: 'Website responsivo para portfólio pessoal com animações suaves e design moderno, construído com as melhores práticas de performance.',
      technologies: ['React', 'Material-UI', 'Framer Motion', 'Vite'],
      githubUrl: 'https://github.com/username/portfolio',
      liveUrl: '#',
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
            Projetos
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
            Aqui estão alguns dos meus projetos mais recentes. Cada projeto representa um desafio único
            e uma oportunidade de aprendizado.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <ProjectCard>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          color: theme.palette.primary.contrastText,
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Box sx={{ mr: 1 }}>
                    <Button
                      variant="secondary"
                      size="small"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <GitHubIcon sx={{ mr: 1, fontSize: '1rem' }} />
                      Código
                    </Button>
                  </Box>
                  <Button
                    variant="primary"
                    size="small"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <LaunchIcon sx={{ mr: 1, fontSize: '1rem' }} />
                    Demo
                  </Button>
                </CardActions>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default ProjectsSection;
