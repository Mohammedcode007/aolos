import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'; // Assuming you're using React Bootstrap
import Button from 'react-bootstrap/Button'; // Assuming you're using React Bootstrap
import styles from './ForgotPassword.module.css'; // Assuming the correct path to your CSS module
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
    const navigate = useNavigate()
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here, such as sending reset link to the provided email
    console.log('Forgot password email submitted:', email);
    navigate('otp-verification')
  };

  return (
    <div className={styles.forgotPasswordContainer}>
      <h2>Forgot Password</h2>
      <p>Please enter your email address to reset your password.</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className={styles.submitButtonWrapper}>
          <Button variant="primary" type="submit" className={styles.submitButton}>
            Reset Password
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ForgotPassword;
