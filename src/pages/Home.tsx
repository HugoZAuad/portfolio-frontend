import React from 'react';
import { Container, Typography, Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '../components/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: '120px 20px 80px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
}));

const HeroContent = styled(Box)({
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
});

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '40px',
  left: '50%',
  transform: 'translateX(-50%)',
  animation: 'bounce 2s infinite',
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateX(-50%) translateY(0)',
    },
    '40%': {
      transform: 'translateX(-50%) translateY(-10px)',
    },
    '60%': {
      transform: 'translateX(-50%) translateY(-5px)',
    },
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    fontSize: '2rem',
    cursor: 'pointer',
  },
}));

const HomeSection: React.FC = () => {
  const theme = useTheme();

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <HeroContent>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 4,
              fontWeight: 800,
              color: theme.palette.text.primary,
              fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
              lineHeight: 1.1,
            }}
          >
            Olá, eu sou{' '}
            <Box
              component="span"
              sx={{
                color: theme.palette.primary.main,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: '2px',
                },
              }}
            >
              Hugo
            </Box>
          </Typography>

          <Typography
            variant="h4"
            sx={{
              mb: 6,
              color: theme.palette.text.secondary,
              fontWeight: 400,
              fontSize: { xs: '1.25rem', md: '1.5rem', lg: '1.75rem' },
              lineHeight: 1.4,
            }}
          >
            Desenvolvedor Full-Stack apaixonado por criar experiências digitais
            incríveis e soluções inovadoras.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="large">
              Ver Meus Projetos
            </Button>
            <Button variant="secondary" size="large">
              Sobre Mim
            </Button>
          </Box>
        </HeroContent>

        <ScrollIndicator onClick={scrollToNext}>
          <KeyboardArrowDownIcon />
        </ScrollIndicator>
      </Container>
    </SectionContainer>
  );
};

export default HomeSection;
