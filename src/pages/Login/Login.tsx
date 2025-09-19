import React from 'react';
import { Container } from '@mui/material';
import LoginContainer from '../../components/Components_Login/LoginContainer/LoginContainer';
import LoginHeader from '../../components/Components_Login/LoginHeader/LoginHeader';
import LoginForm from '../../components/Components_Login/LoginForm/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <Container maxWidth="sm">
        <LoginHeader />
        <LoginForm />
      </Container>
    </LoginContainer>
  );
};

export default LoginPage;
