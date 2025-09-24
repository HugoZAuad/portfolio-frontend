import React from 'react';
import { Typography, useTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactInfoItem from '../ContactInfoItem/ContactInfoItem';

const ContactDetails: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 600,
          color: theme.palette.text.primary,
        }}
      >
        Informações de Contato
      </Typography>

      <ContactInfoItem
        icon={<EmailIcon />}
        title="Email"
        subtitle="hugozeymer@gmail.com"
      />
      <ContactInfoItem
        icon={<LocationOnIcon />}
        title="Localização"
        subtitle="Maceió/AL, Brasil"
      />
    </>
  );
};

export default ContactDetails;
