import React from 'react';
import LoginForm from '../modules/auth/components/LoginForm';

const LoginPage = ({ onLoginSuccess }) => {
  return (
    <div className="page-container">
      <LoginForm onLoginSuccess={onLoginSuccess} />
    </div>
  );
};

export default LoginPage;
