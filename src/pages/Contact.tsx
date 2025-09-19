import React, { useState } from 'react';
import { Container, Typography, Box, Grid, TextField, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '../components/Common/Button/Button';

const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: '120px 20px 80px',
  backgroundColor: theme.palette.background.default,
}));

const ContactCard = styled(Box)(({ theme }) => ({
  padding: '32px',
  borderRadius: '16px',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 20px ${theme.palette.primary.main}08`,
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '24px',
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    marginRight: '16px',
    fontSize: '1.5rem',
  },
}));

const ContactSection: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
            Vamos Conversar
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
            Estou sempre interessado em novas oportunidades e projetos interessantes.
            Vamos discutir como podemos trabalhar juntos!
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactCard>
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

              <ContactInfo>
                <EmailIcon />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, color: theme.palette.text.primary }}
                  >
                    Email
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    seu.email@exemplo.com
                  </Typography>
                </Box>
              </ContactInfo>

              <ContactInfo>
                <PhoneIcon />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, color: theme.palette.text.primary }}
                  >
                    Telefone
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    +55 (11) 99999-9999
                  </Typography>
                </Box>
              </ContactInfo>

              <ContactInfo>
                <LocationOnIcon />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, color: theme.palette.text.primary }}
                  >
                    Localização
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    São Paulo, Brasil
                  </Typography>
                </Box>
              </ContactInfo>
            </ContactCard>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <ContactCard>
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                Envie uma Mensagem
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Nome"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: theme.palette.background.default,
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: theme.palette.background.default,
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Mensagem"
                  name="message"
                  multiline
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  required
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: theme.palette.background.default,
                    },
                  }}
                />

                <Button variant="primary" size="large">
                  Enviar Mensagem
                </Button>
              </Box>
            </ContactCard>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default ContactSection;
