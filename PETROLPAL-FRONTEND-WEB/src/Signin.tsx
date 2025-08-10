import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Signin.module.css';

interface Credentials {
  username: string;
  password: string;
}

const Signin: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [credentials, setCredentials] = useState<Credentials>({
    username: '', // Can be email or phone
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // For development: Skip API call and go straight to logged-in page
    navigate('/loggedin');
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
        <div className={styles.headerTitle}>Sign in to your Account</div>
      </div>

      <div className={styles.loginCard}>
        <div className={styles.googleBtn}>
          <img src="/images/google.png" alt="Google Icon" width={24} height={24} />
          <div className={styles.googleBtnText}>Continue with Google</div>
        </div>

        <div className={styles.divider}>
          <hr className={styles.line} />
          <span className={styles.dividerText}>or login with</span>
          <hr className={styles.line} />
        </div>

        <div className={styles.inputField}>
          <input
            type="text"
            placeholder="Enter your phone number or email address"
            className={styles.textInput}
            name="username"
            value={credentials.username}
            onChange={handleChange}
            autoComplete="username"
          />
        </div>

        <div className={`${styles.inputField} ${styles.passwordField}`}>
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Password"
            className={styles.passwordInput}
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

        {message && <p className={styles.errorMessage}>{message}</p>}

        <div className={styles.optionsRow}>
          <div className={styles.checkbox} />
          <div className={styles.rememberText}>Remember me</div>
          <div className={styles.forgotPassword}>Forgot Password?</div>
        </div>

        <button className={styles.loginBtn} onClick={handleLogin}>
          <div className={styles.loginBtnText}>Log In</div>
        </button>

        <div className={styles.signupText}>
          Don't have an account? <Link to="/signup/" className={styles.signupLink}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;