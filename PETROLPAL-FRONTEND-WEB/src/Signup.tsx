import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';

interface SignupFormData {
  full_name: string;
  email: string;
  phone: string;
  password: string;
  device_token: string;
}

interface RegisterResponse {
  acc_id?: string;
  message?: string;
  [key: string]: any;
}

const Signup: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState<SignupFormData>({
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://petropal.ontapke.com/acc/api/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: RegisterResponse = await response.json();

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
    <div className={styles.page}>
      <div className={styles.headerSection}>
        <Link 
          to="/" 
          onClick={() => window.scrollTo(0, 0)} 
          className={styles.inlineBlock}
        >
          <img 
            className={styles.headerLogo} 
            src="/images/logo__.png" 
            alt="Logo" 
          />
        </Link>
        <div className={styles.headerTitle}>Sign Up</div>
        <div className={styles.headerSubtitle}>
          Already have an Account? <Link to="/signin">Log In</Link>
        </div>
      </div>

      <div className={styles.signupCard}>
        <div className={styles.inputField}>
          <input
            type="text"
            placeholder="Enter your name"
            className={styles.textInput}
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputField}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.textInput}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputField}>
          <input
            type="text"
            placeholder="Enter your phone number"
            className={styles.textInput}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className={`${styles.inputField} ${styles.passwordField}`}>
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Password"
            className={styles.passwordInput}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <img
            src={isPasswordVisible ? '/images/eye-slash.png' : '/images/eye.png'}
            alt="Toggle Password Visibility"
            width="20"
            height="16"
            className={styles.passwordToggle}
            onClick={togglePasswordVisibility}
          />
        </div>

        {message && <p className={styles.errorMessage}>{message}</p>}

        <button className={styles.signupBtn} onClick={handleSubmit}>
          <div className={styles.signupBtnText}>Sign Up</div>
        </button>

        <div className={styles.divider}>
          <hr className={styles.line} />
          <span className={styles.dividerText}>or</span>
          <hr className={styles.line} />
        </div>

        <div className={styles.googleBtn}>
          <img src="/images/google.png" alt="Google Icon" width={24} height={24} />
          <div className={styles.googleBtnText}>Sign up with Google</div>
        </div>

        <div className={styles.termsText}>
          <span>By creating an account, you agree to the&nbsp;</span>
          Petropal Free Membership Agreement and Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default Signup;