import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './User.module.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <div className={styles['sidebar-content']}>
        <img
          className={styles['sb-top-icon']}
          src="/images/back.png"
          alt="Back"
          onClick={() => navigate(-1)}
          style={{ cursor: 'pointer' }}
        />
        <Link to="/loggedin">
          <img
            className={styles['sb-logo']}
            src="/images/profilelogo.png"
            alt="Logo"
          />
        </Link>
        <Link to="" className={styles['sb-item']}>
          <span className={styles['sb-item-icon']}>
            <img src="/images/userprofile.png" alt="Profile" />
          </span>
          <span className={styles['sb-item-text']}>Profile</span>
        </Link>
        <Link to="/general-info" className={styles['sb-item']}>
          <span className={styles['sb-item-icon']}><img src="/images/general.png" alt="General"/></span>
          <span className={styles['sb-item-text']}>General Info</span>
        </Link>
        <Link to="/settings" className={styles['sb-item']}>
          <span className={styles['sb-item-icon']}><img src="/images/settings.png" alt="Settings"/></span>
          <span className={styles['sb-item-text']}>Settings</span>
        </Link>
        <Link to="/notifications" className={styles['sb-item']}>
          <span className={styles['sb-item-icon']}>
            <img src="/images/notificationn.png" alt="Notifications" />
          </span>
          <span className={styles['sb-item-text']}>Notification</span>
          <span className={styles['sb-item-right']}>
            <img src="/images/toggle.png" alt="Toggle" />
          </span>
        </Link>
        <Link to="/support" className={styles['sb-item']}>
          <span className={styles['sb-item-icon']}><img src="/images/support.png" alt="Support"/></span>
          <span className={styles['sb-item-text']}>Support & Help</span>
        </Link>
        <Link to="/legal" className={styles['sb-item']}>
          <span className={styles['sb-item-icon']}><img src="/images/legal.png" alt="Legal"/></span>
          <span className={styles['sb-item-text']}>Legal & Account</span>
        </Link>
        <Link to="" className={styles['sb-item']}>
          <span className={styles['sb-item-icon']}><img src="/images/aboutt.png" alt="About"/></span>
          <span className={styles['sb-item-text']}>About App</span>
        </Link>
        <div className={styles['logout-btn']}>
          <div className={styles['logout-btn-inner']}>
            <div className={styles['logout-text']}>Log Out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;