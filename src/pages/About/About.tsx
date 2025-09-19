import React from 'react';
import { Container, Grid } from '@mui/material';
import SectionContainer from '../../components/Components_About/SectionContainer/SectionContainer';
import AboutText from '../../components/Components_About/AboutText/AboutText';
import AboutAvatar from '../../components/Components_About/AboutAvatar/AboutAvatar';

const AboutSection: React.FC = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <AboutText />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <AboutAvatar />
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default AboutSection;
