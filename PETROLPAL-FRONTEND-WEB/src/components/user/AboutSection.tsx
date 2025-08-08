import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../pages/User.module.css';

const AboutSection = () => (
  <div id="about" className={`${styles['content-section']} ${styles.active}`}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className={styles['about-title']}>About</div>
          <img
            width="38.2px"
            height="38.2px"
            src="/images/edit.png"
            alt="Edit About"
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className={styles['about-description']} style={{ marginTop: '8px' }}>
          SolarWave is a Verified energy supplier based in Nairobi.<br />
          We provide clean diesel, LPG and solar solutions with reliable delivery and transparent pricing
        </div>
      </div>
    </div>
    <div style={{ height: '24px' }}></div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className={styles['services-title']}>Services Provided</div>
          <img
            width="38.2px"
            height="38.2px"
            src="/images/edit.png"
            alt="Edit Services"
            style={{ cursor: 'pointer' }}
          />
        </div>
        <ul className={styles['services-list']} style={{ marginTop: '8px' }}>
          <li>Diesel & LPG Distribution</li>
          <li>Commercial Solar System Installations</li>
          <li>On-time Delivery Across Kenya</li>
          <li>Verified Metered Fuel Supply</li>
        </ul>
      </div>
    </div>
    <div style={{ height: '60px' }}></div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'rgba(0,0,0,1)', fontWeight: 500 }}>
            Analytics
          </div>
        </div>
        <Link to="/analytics" className={styles['analytics-link']}>
          <div className={styles['analytics-container']}>
            <img width="25.2px" height="20px" src="/images/private.png" alt="Private Icon" />
            <div className={styles['analytics-text']}>Private to you</div>
          </div>
        </Link>
        <div style={{ marginTop: '27px', display: 'flex', alignItems: 'flex-start', gap: '30px' }}>
          <img width="34.9px" height="30px" src="/images/3profile.png" alt="Profile Visits" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'rgba(0,0,0,1)', fontWeight: 500 }}>
              50 Profile Visits
            </div>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: 'rgba(0,0,0,0.5)' }}>
              Track how many users have viewed your profile
            </div>
          </div>
        </div>
        <div style={{ marginTop: '30px', display: 'flex', alignItems: 'flex-start', gap: '30px' }}>
          <img width="34.9px" height="30px" src="/images/3profile.png" alt="Post Analytics" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'rgba(0,0,0,1)', fontWeight: 500 }}>
              Post Analytics
            </div>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: 'rgba(0,0,0,0.5)' }}>
              Overview of engagement with your content
            </div>
          </div>
        </div>
        <div style={{ marginTop: '30px', display: 'flex', alignItems: 'flex-start', gap: '30px' }}>
          <img width="34.9px" height="30px" src="/images/3profile.png" alt="Search Appearances" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'rgba(0,0,0,1)', fontWeight: 500 }}>
              Search Appearances
            </div>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: 'rgba(0,0,0,0.5)' }}>
              Number of times your profile or listing appeared in search results.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;