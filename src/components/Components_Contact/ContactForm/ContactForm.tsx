import React, { useState } from 'react';
import { Box, Typography, TextField, useTheme, Alert } from '@mui/material';
import Button from '../../Common/Button/Button';

const CONTACT_API_URL = 'https://portfolio-backend-pr7h.onrender.com/contact';

const ContactForm: React.FC = () => {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<'success' | 'error' | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    formData.name.trim() !== '' &&
    isEmailValid(formData.email) &&
    formData.message.trim() !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setFeedback(null);
    setIsSending(true);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFeedback('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFeedback('error');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setFeedback('error');
    } finally {
      setIsSending(false);
    }
    
    setTimeout(() => setFeedback(null), 5000);
  };

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
        Envie uma Mensagem
      </Typography>

      {feedback === 'success' && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Mensagem enviada com sucesso!
          </Alert>
      )}
      {feedback === 'error' && (
          <Alert severity="error" sx={{ mb: 2 }}>
            Ocorreu um erro ao enviar. Tente novamente ou entre em contato diretamente.
          </Alert>
      )}
      
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
          error={formData.email.length > 0 && !isEmailValid(formData.email)}
          helperText={formData.email.length > 0 && !isEmailValid(formData.email) ? 'Email inválido' : ''}
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
          rows={3}
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

        <Button
          variant="primary"
          size="large"
          type="submit"
          disabled={!isFormValid || isSending}
        >
          {isSending ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;