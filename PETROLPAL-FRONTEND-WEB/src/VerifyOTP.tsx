import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
  const { state } = useLocation();
  const { accId, email, flow } = state || {}; // flow = 'signup' or 'login'
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const response = await fetch('https://petropal.ontapke.com/acc/api/auth/verify-otp/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          acc_id: accId, 
          otp_code: otp 
        }),
      });
      
      const data = await response.json();
      
      if (data.tokens) {
        // Save tokens and user data
        localStorage.setItem('accessToken', data.tokens.access);
        localStorage.setItem('refreshToken', data.tokens.refresh);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // Redirect ALL users to /loggedin
        navigate('/loggedin'); // No need for ternary check
      } else {
        setMessage(data.message || 'Invalid OTP.');
      }
    } catch (error) {
      setMessage('Verification failed. Try again.');
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await fetch('https://petropal.ontapke.com/acc/api/auth/resend-otp/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ acc_id: accId }),
      });
      
      const data = await response.json();
      setMessage(data.message || 'OTP resent. Check your email.');
    } catch (error) {
      setMessage('Failed to resend OTP.');
    }
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '50px auto', 
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '8px'
    }}>
      <h2>Verify Your Email</h2>
      <p>We sent a 6-digit code to {email}</p>
      
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        maxLength={6}
        style={{
          width: '100%',
          padding: '12px',
          margin: '10px 0',
          fontSize: '16px',
          border: '2px solid #ddd',
          borderRadius: '4px'
        }}
      />
      
      <button
        onClick={handleVerify}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#012f6b',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          marginBottom: '10px'
        }}
      >
        Verify
      </button>
      
      <button
        onClick={handleResendOTP}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: 'transparent',
          color: '#012f6b',
          border: '1px solid #012f6b',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Resend OTP
      </button>
      
      {message && (
        <p style={{ 
          color: message.includes('success') ? 'green' : 'red',
          marginTop: '15px'
        }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default VerifyOTP;