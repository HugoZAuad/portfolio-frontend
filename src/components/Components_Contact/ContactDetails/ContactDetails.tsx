import React from 'react';
import { Typography, useTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
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
        subtitle="seu.email@exemplo.com"
      />
      <ContactInfoItem
        icon={<PhoneIcon />}
        title="Telefone"
        subtitle="+55 (11) 99999-9999"
      />
      <ContactInfoItem
        icon={<LocationOnIcon />}
        title="Localização"
        subtitle="São Paulo, Brasil"
      />
    </>
  );
};

export default ContactDetails;
