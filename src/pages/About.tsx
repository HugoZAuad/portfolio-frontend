import React from 'react';
import { Container, Typography, Box, Grid, Avatar, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';

const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: '120px 20px 80px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
}));

const AboutSection: React.FC = () => {
  const theme = useTheme();

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Sobre Mim
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: theme.palette.text.secondary,
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                Desenvolvedor Full Stack & UI/UX Designer
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                }}
              >
                Sou um desenvolvedor apaixonado por criar soluções inovadoras e experiências digitais incríveis.
                Com experiência em tecnologias modernas como React, Node.js, TypeScript e design systems,
                busco sempre entregar produtos de alta qualidade que fazem a diferença na vida das pessoas.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                }}
              >
                Minha abordagem combina criatividade técnica com foco em usabilidade e performance,
                sempre buscando as melhores práticas e tecnologias emergentes do mercado.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  bgcolor: theme.palette.primary.main,
                  boxShadow: `0 20px 40px ${theme.palette.primary.main}20`,
                }}
              >
                <PersonIcon sx={{ fontSize: { xs: 80, md: 120 } }} />
              </Avatar>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default AboutSection;
