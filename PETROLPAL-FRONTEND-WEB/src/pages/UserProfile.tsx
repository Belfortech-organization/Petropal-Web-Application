import React, { useState } from 'react';
import Sidebar from './Sidebar';
import AboutSection from '../components/user/AboutSection';
import PostsSection from '../components/user/PostsSection';
import ReviewsSection from '../components/user/ReviewsSection';
import CompanyHeaderInformation from '../components/user/CompanyHeaderInformation';
import styles from './User.module.css';

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    if (activeSection === 'about') return <AboutSection />;
    if (activeSection === 'posts') return <PostsSection />;
    if (activeSection === 'reviews') return <ReviewsSection />;
    return null;
  };

  return (
    <div className={styles['profile-container']}>
      <Sidebar />
      <div className={styles['main-content']}>
        <div className={styles.hero}>
          <img className={styles['hero-main']} src="/images/post.png" alt="Hero Image"/>
          <img className={styles['hero-left']} src="/images/seller2.png" alt="Left Icon"/>
          <img className={styles['hero-right']} src="/images/sharee.png" alt="Right Icon"/>
        </div>
        <CompanyHeaderInformation />
        {/* Navigation Tabs */}
        <div className={styles['nav-tabs-container']}>
          <div className={styles['nav-tabs']}>
            <div
              className={`${styles['nav-tab']} ${activeSection === 'about' ? styles.active : ''}`}
              onClick={() => setActiveSection('about')}
            >
              About
              <div className={styles['nav-tab-indicator']}></div>
            </div>
            <div
              className={`${styles['nav-tab']} ${activeSection === 'posts' ? styles.active : ''}`}
              onClick={() => setActiveSection('posts')}
            >
              Posts
              <div className={styles['nav-tab-indicator']}></div>
            </div>
            <div
              className={`${styles['nav-tab']} ${activeSection === 'reviews' ? styles.active : ''}`}
              onClick={() => setActiveSection('reviews')}
            >
              Reviews
              <div className={styles['nav-tab-indicator']}></div>
            </div>
          </div>
          <div className={styles['nav-tabs-line']}></div>
        </div>
        {/* Section Content */}
        {renderSection()}
      </div>
    </div>
  );
};

export default UserProfile;