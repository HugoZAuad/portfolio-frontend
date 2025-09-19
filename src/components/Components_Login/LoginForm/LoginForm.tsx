import React, { useState } from 'react';
import { Box, TextField, Typography, useTheme } from '@mui/material';
import Button from '../../Common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { loginUser } from '../../../utils/authUtils';
import { validateEmail } from '../../../utils/validation';

const LoginForm: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { login } = useAuth();

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
      if (response.data.access_token) {
        login(); // atualiza contexto
        navigate('/dashboard'); // redireciona
      } else {
        setError(response.data.message || 'Erro ao fazer login');
      }
    } catch {
      setError('Erro inesperado ao conectar com o servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
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
  );
};

export default LoginForm;
