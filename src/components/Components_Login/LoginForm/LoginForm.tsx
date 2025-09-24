import React, { useState } from 'react';
import { Box, TextField, Typography, useTheme } from '@mui/material';
import Button from '../../Common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { useFeedback } from '../../../contexts/FeedbackContext';
import { loginUser } from '../../../utils/authUtils';
import { validateEmail } from '../../../utils/validation';

const LoginForm: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showFeedback } = useFeedback();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!validateEmail(formData.email)) {
      setError('Email inválido');
      setLoading(false);
      return;
    }

    try {
      const response = await loginUser(formData.email, formData.password);

      const token = response.data?.access_token;
      if (token) {
        // ✅ Salva o token e estado de autenticação
        localStorage.setItem('token', token);
        localStorage.setItem('isAuthenticated', 'true');

        login(); // atualiza contexto se necessário
        showFeedback('Login realizado com sucesso!', 'success');
        navigate('/dashboard');
      } else {
        showFeedback(response.data?.message || 'Erro ao fazer login', 'error');
      }
    } catch {
      showFeedback('Erro inesperado ao conectar com o servidor', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Botão fixo no canto superior esquerdo */}
      <Box
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 1000,
        }}
      >
        <Button variant="secondary" size="small" onClick={() => navigate('/')}>
          Voltar para o site
        </Button>
      </Box>

      {/* Formulário de login */}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 10 }}>
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
              backgroundColor: theme.palette.background.paper,
            },
          }}
        />

        <TextField
          fullWidth
          label="Senha"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          required
          sx={{
            mb: 3,
            '& .MuiOutlinedInput-root': {
              backgroundColor: theme.palette.background.paper,
            },
          }}
        />

        {error && (
          <Typography variant="body2" sx={{ color: theme.palette.error.main, mb: 2 }}>
            {error}
          </Typography>
        )}

        <Button type="submit" variant="primary" size="large" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </Button>
      </Box>
    </>
  );
};

export default LoginForm;
