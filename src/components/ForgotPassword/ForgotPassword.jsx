import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMessage('A password reset link has been sent to your email.');
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="forgot-password-container">
      {/* Logo at the top-left */}
      <img src="./img/logo.gif" alt="Logo" className="forgot-password-logo" />

      <div className="forgot-password-card">
        <h2 className="forgot-password-title">Forgot Password?</h2>
        <p className="forgot-password-text">Enter your email to reset your password.</p>
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your email address"
            required
            className="forgot-password-input"
          />
          <button type="submit" disabled={isSubmitting} className="forgot-password-button">
            {isSubmitting ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
        {message && <p className="forgot-password-message">{message}</p>}

        <button onClick={handleBackToHome} className="back-to-home-button">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
