import React from 'react';
import { Container } from '@mui/material';
import SectionContainer from '../../components/Components_Home/SectionContainer/SectionContainer';
import HeroContent from '../../components/Components_Home/HeroContent/HeroContent';
import HeroTitle from '../../components/Components_Home/HeroTitle/HeroTitle';
import HeroSubtitle from '../../components/Components_Home/HeroSubtitle/HeroSubtitle';
import HeroButtons from '../../components/Components_Home/HeroButtons/HeroButtons';
import ScrollIndicator from '../../components/Components_Home/ScrollIndicator/ScrollIndicator';

const Home: React.FC = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <HeroContent>
          <HeroTitle />
          <HeroSubtitle />
          <HeroButtons />
        </HeroContent>
        <ScrollIndicator />
      </Container>
    </SectionContainer>
  );
};

export default Home;
