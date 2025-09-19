import React from 'react';
import { Container, Grid } from '@mui/material';
import SectionContainer from '../components/Components_Contact/SectionContainer/SectionContainer';
import ContactHeader from '../components/Components_Contact/ContactHeader/ContactHeader';
import ContactCard from '../components/Components_Contact/ContactCard/ContactCard';
import ContactDetails from '../components/Components_Contact/ContactDetails/ContactDetails';
import ContactForm from '../components/Components_Contact/ContactForm/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <ContactHeader />

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactCard>
              <ContactDetails />
            </ContactCard>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <ContactCard>
              <ContactForm />
            </ContactCard>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default ContactSection;
