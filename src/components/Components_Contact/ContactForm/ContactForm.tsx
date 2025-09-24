import React, { useState } from 'react';
import { Box, Typography, TextField, useTheme, Alert } from '@mui/material';
import Button from '../../Common/Button/Button';

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

    setIsSending(true);
    setFeedback(null);

    try {
      const response = await fetch('https://portfolio-backend-dqxo.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

        {feedback === 'success' && (
          <Alert severity="success" sx={{ mt: 3 }}>
            Mensagem enviada com sucesso!
          </Alert>
        )}
        {feedback === 'error' && (
          <Alert severity="error" sx={{ mt: 3 }}>
            Ocorreu um erro ao enviar. Tente novamente.
          </Alert>
        )}
      </Box>
    </>
  );
};

export default ContactForm;
