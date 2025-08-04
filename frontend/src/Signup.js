import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    password: '',
    device_token: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://petropal.ontapke.com/acc/api/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.acc_id) {
        // Success! OTP sent to email.
        navigate('/verify-otp', { 
          state: { 
            accId: data.acc_id, 
            email: formData.email,
            flow: 'signup',
          },
        });
      } else {
        setMessage(data.message || 'Registration failed.');
      }
    } catch (error) {
      setMessage('Network error. Try again.');
    }
  };

  return (
    <>
      <style jsx global>{`
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
          height: 300px; /* Reduced height */
          background-color: rgba(1, 47, 107, 1);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 50px 0;
          padding-bottom: 200px
        }

        .header-logo {
          width: 180px; /* Smaller logo */
          height: auto;
        }

        .header-title {
          font-size: 28px; /* Reduced */
          font-weight: 600;
          color: white; /* Original color */
        }

        .header-subtitle {
          font-size: 14px; /* Reduced */
          font-weight: 500;
          color: white;
        }

        .header-subtitle a {
          text-decoration: underline;
          cursor: pointer;
          color: white;
        }

        .signup-card {
          position: absolute;
          top: 150px;
          left: 50%;
          transform: translateX(-50%);
          width: 420px; /* Reduced width */
          border-radius: 10px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        .input-field {
          width: 100%;
          height: 45px; /* Reduced */
          border: 2px solid rgb(189, 189, 189);
          border-radius: 8px;
          background-color: white;
          display: flex;
          align-items: center;
          margin-top: 15px;
          padding: 0 12px;
        }

        .signup-btn {
          width: 100%;
          height: 45px; /* Reduced */
          margin-top: 20px;
          background-color: rgba(1, 47, 107, 1);
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .signup-btn-text {
          font-size: 16px; /* Reduced */
          font-weight: 500;
          color: white; /* Original color */
        }

        .divider {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 10px 0;
          gap: 8px;
        }

        .divider-text {
          font-size: 14px; /* Reduced */
          font-weight: 500;
          color: rgba(0, 0, 0, 0.4);
        }

        .line {
          flex-grow: 1;
          height: 1px;
          background-color: rgba(0, 0, 0, 0.2);
        }

        .google-btn {
          width: 100%;
          height: 45px; /* Reduced */
          border: 2px solid rgb(189, 189, 189);
          border-radius: 8px;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          margin-top: 10px;
        }

        .google-btn-text {
          font-size: 16px; /* Reduced */
          font-weight: 600;
          color: black; /* Original color */
        }

        .terms-text {
          margin-top: 10px;
          font-size: 12px; /* Reduced */
          width: 100%;
          color: rgba(1, 47, 107, 1);
          line-height: 18px;
          font-weight: 500;
          text-align: center;
        }

        .terms-text span {
          color: rgba(0, 0, 0, 0.5);
        }

        .text-input,
        .password-input {
          border: none;
          outline: none;
          font-size: 14px; /* Reduced */
          color: rgba(0, 0, 0, 0.8); /* Original color */
          background: transparent;
          width: 100%;
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
          <div className="header-title">Sign Up</div>
          <div className="header-subtitle">
            Already have an Account? <Link to="/signin">Log In</Link>
          </div>
        </div>

        <div className="signup-card">
          <div className="input-field">
            <input
              type="text"
              placeholder="Enter your name"
              className="text-input"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
            />
          </div>

          <div className="input-field">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-field">
            <input
              type="text"
              placeholder="Enter your phone number"
              className="text-input"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-field password-field">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Password"
              className="password-input"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <img
              src={isPasswordVisible ? '/images/eye-slash.png' : '/images/eye.png'}
              alt="Toggle Password Visibility"
              width="20"
              height="16"
              style={{ cursor: 'pointer' }}
              onClick={togglePasswordVisibility}
            />
          </div>

          {message && <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>}

          <div
            className="signup-btn"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              backgroundColor: isHovered ? 'rgba(1, 47, 107, 0.8)' : 'rgba(1, 47, 107, 1)',
              transform: isHovered ? 'scale(1.02)' : 'scale(1)',
              transition: 'all 0.3s ease',
            }}
            onClick={handleSubmit}
          >
            <div className="signup-btn-text">Sign Up</div>
          </div>

          <div className="divider">
            <hr className="line" />
            <span className="divider-text">or</span>
            <hr className="line" />
          </div>

          <div className="google-btn">
            <img src="/images/google.png" alt="Google Icon" width={24} height={24} />
            <div className="google-btn-text">Sign up with Google</div>
          </div>

          <div className="terms-text">
            <span>By creating an account, you agree to the&nbsp;</span>
            Petropal Free Membership Agreement and Privacy Policy
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;