import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '', // Can be email or phone
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
  
    // For development: Skip API call and go straight to logged-in page
    navigate('/loggedin');
  };


  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
          background-color: white;
          width: 100%;
          overflow-x: hidden;
        }

        .page {
          width: 100%;
          min-height: 100vh;
          position: relative;
        }

        .header-section {
          width: 100%;
          height: 300px;
          background-color: rgba(1, 47, 107, 1);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 12px;
          padding-top: 40px;
          padding-bottom: 160px;
          position: relative;
        }

        .header-logo {
          width: 180px;
          height: auto;
        }

        .header-title {
          font-size: 28px;
          font-weight: 600;
          color: white;
          white-space: nowrap;
        }

        .login-card {
          position: absolute;
          top: 170px;
          left: 50%;
          transform: translateX(-50%);
          width: 420px;
          border-radius: 10px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        .google-btn {
          width: 100%;
          height: 45px;
          border: 2px solid rgb(189, 189, 189);
          border-radius: 8px;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .divider {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin-top: 15px;
          gap: 8px;
        }

        .divider-text {
          font-size: 14px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.4);
          white-space: nowrap;
        }

        .line {
          flex-grow: 1;
          height: 1px;
          background-color: rgba(0, 0, 0, 0.2);
          border: none;
        }

        .input-field {
          width: 100%;
          height: 45px;
          border: 2px solid rgb(189, 189, 189);
          border-radius: 8px;
          background-color: white;
          display: flex;
          align-items: center;
          margin-top: 15px;
          padding: 0 12px;
        }

        .password-field {
          justify-content: space-between;
          padding-left: 12px;
          padding-right: 12px;
        }

        .options-row {
          margin-top: 12px;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .checkbox {
          width: 20px;
          height: 20px;
          border: 2px solid rgb(151, 151, 151);
          border-radius: 4px;
          background-color: white;
        }

        .remember-text {
          margin-left: 10px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.5);
        }

        .forgot-password {
          margin-left: auto;
          font-size: 14px;
          font-weight: 500;
          color: rgba(1, 47, 107, 1);
          cursor: pointer;
        }

        .login-btn {
          width: 100%;
          height: 45px;
          margin-top: 20px;
          background-color: rgba(1, 47, 107, 1);
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .login-btn-text {
          font-size: 16px;
          font-weight: 500;
          color: white;
          white-space: nowrap;
        }

        .signup-text {
          margin-top: 20px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.5);
          white-space: nowrap;
        }

        .signup-link {
          font-weight: 600;
          color: rgba(1, 47, 107, 1);
          cursor: pointer;
          text-decoration: none;
        }

        .text-input,
        .password-input {
          border: none;
          outline: none;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.8);
          background: transparent;
          width: 100%;
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <div className="page">
        <div className="header-section">
          <Link 
            to="/" 
            onClick={() => window.scrollTo(0, 0)} 
            style={{ display: 'inline-block' }}
          >
            <img 
              className="header-logo" 
              src="/images/logo__.png" 
              alt="Logo" 
              style={{ 
                transition: 'transform 0.2s ease' 
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </Link>
          <div className="header-title">Sign in to your Account</div>
        </div>

        <div className="login-card">
          <div className="google-btn">
            <img src="/images/google.png" alt="Google Icon" width={24} height={24} />
            <div style={{ fontSize: '16px', fontWeight: 600 }}>Continue with Google</div>
          </div>

          <div className="divider">
            <hr className="line" />
            <span className="divider-text">or login with</span>
            <hr className="line" />
          </div>

          <div className="input-field">
            <input
              type="text"
              placeholder="Enter your phone number or email address"
              className="text-input"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              autoComplete="username"
            />
          </div>

          <div className="input-field password-field">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Password"
              className="password-input"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
            <img
              src={isPasswordVisible ? '/images/eye-slash.png' : '/images/eye.png'}
              alt="Toggle Password Visibility"
              width="20"
              height={16}
              style={{ cursor: 'pointer' }}
              onClick={togglePasswordVisibility}
            />
          </div>

          {message && <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>}

          <div className="options-row">
            <div className="checkbox" />
            <div className="remember-text">Remember me</div>
            <div className="forgot-password">Forgot Password?</div>
          </div>

          <div
            className="login-btn"
            style={{
              transition: 'all 0.3s ease',
              backgroundColor: isHovered ? 'rgba(1, 47, 107, 0.8)' : 'rgba(1, 47, 107, 1)',
              transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleLogin}
          >
            <div className="login-btn-text">Log In</div>
          </div>

          <div className="signup-text">
            Don't have an account? <Link to="/signup/" className="signup-link">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;