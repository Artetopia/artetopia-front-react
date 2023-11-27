import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, Container } from 'reactstrap';
import './styles.css'

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [loginError, setLoginError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateLogin = () => {
    if (login.trim() === '') {
      setLoginError('Login is required');
    } else {
      setLoginError('');
    }
  };

  const validateEmail = () => {
    // A simple email validation regex, you can use a more robust one as needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === '') {
      setEmailError('Email is required');
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform additional actions here, such as making an API call for authentication

    // For demonstration purposes, let's log the login and email values
    console.log('Login:', login);
    console.log('Email:', email);
  };

  return (<>
    <h1 className='tittle'>Bienvienido!</h1>
    <Container>
      <Form onSubmit={handleSubmit}>
 

        <FormGroup>
          <Label for="email" className='form_login'>Email</Label>
          <Input
            className='form_login'
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            invalid={emailError !== ''}
            style={{ borderColor: loginError !== '' ? '#E91E63 3px' : '#E91E63', outline: 'none', }}
          />
          <FormFeedback>{emailError}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="password" className='form_login'>Password</Label>
          <Input
            className='form_login'
            type="password"
            name="login"
            id="login"
            placeholder="Enter your password"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            onBlur={validateLogin}
            invalid={loginError !== ''}
            style={{ borderColor: loginError !== '' ? '#E91E63' : '#E91E63' }}
          />
          <FormFeedback>{loginError}</FormFeedback>
        </FormGroup>
        

        <div className='flex_submit_button'>
        <button className='submit_button'>Iniciar sesión</button>
        </div>
      </Form>
    </Container>
    </>
  );
};

export default LoginForm;