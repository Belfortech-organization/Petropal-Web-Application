import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Notifications.module.css';

const Notifications = () => {
  return (
    <div className={styles.notificationsContainer}>
      {/* Header Section */}
<div className={styles.navBar} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
  
  {/* Left Section: Logo, Category, Search */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
    
    {/* Logo */}
    <Link to="/loggedin">
      <img className={styles.logo} src="/images/logo_.png" alt="Petropal Logo" />
    </Link>

    {/* Category Dropdown */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
        <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'white', fontWeight: 600 }}>
          Search by
        </span>
        <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'white', fontWeight: 600 }}>
          Category
        </span>
      </div>
      <img width="13" height="15" src="/images/dropp.png" alt="Dropdown" />
    </div>

    {/* Search Bar */}
    <div className={styles.searchContainer}>
      {/* Search Section */}
      <div className={styles.searchSection}>
        <img style={{ marginLeft: '16px' }} width="14.6" height="14.6" src="/images/search.png" alt="Search" />
        <div style={{ marginLeft: '18px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(1,47,107,0.5)', fontWeight: 600, whiteSpace: 'nowrap' }}>
          Products & Services
        </div>
      </div>

      {/* Divider */}
      <img className={styles.searchDivider} src="/images/Line.png" alt="Divider" />

      {/* Location & Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img width="23" height="23" src="/images/location.png" alt="Location" />
        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(1,47,107,0.5)', fontWeight: 600 }}>
          Location
        </div>
        <div className={styles.searchButton}>
          <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'white', fontWeight: 600 }}>
            Search
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Right Section: Language & Profile */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '50px', marginRight: '25px' }}>
    
    {/* Language Selector */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ fontFamily: '"Lato", sans-serif', fontSize: '18px', color: 'white', fontWeight: 500 }}>
        English
      </div>
      <img width="11" height="7" src="/images/drop.png" alt="Dropdown" />
    </div>

    {/* Profile Section */}
    <Link to="/user" style={{ textDecoration: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'white', fontWeight: 500, whiteSpace: 'nowrap' }}>
          Owen I.
        </div>
        <img
          className={styles.profilePic}
          src="/images/profile.png"
          alt="Profile Picture"
        />
      </div>
    </Link>
  </div>
</div>


      {/* Notification Title Section */}
      <div className={styles.notificationHeader}>
        <button
          className={styles.backButton}
          onClick={() => window.history.back()}
        >
          <img src="/images/back.png" alt="Back" width="24" height="24" />
        </button>
        <div className={styles.notificationTitle}>Notifications</div>
      </div>

      {/* Notifications Content */}
      <div className={styles.notificationContainer}>
        {/* Card 1 */}
        <div className={styles.notificationCard}>
          <img className={styles.profileImage} src="/images/notification1.png" alt="Special Offer" />
          <div className={styles.notificationContent}>
            <div className={styles.notificationTitleText}>Today's Special offers</div>
            <div className={styles.notificationDescription}>
              You get a special promo today!&nbsp;<span className={styles.notificationTime}>1 min</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={`${styles.notificationCard} ${styles.highlightedCard}`}>
          <img className={styles.profileImage} src="/images/notification2.png" alt="Price Drop" />
          <div className={styles.notificationContent}>
            <div className={styles.notificationTitleText}>Diesel price drop</div>
            <div className={styles.notificationDescription}>
              Diesel just dropped by KES 2/litre.&nbsp;<span className={styles.notificationTime}>10 mins</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={`${styles.notificationCard} ${styles.highlightedCard}`}>
          <img className={styles.profileImage} src="/images/notification3.png" alt="ExxonMobil" />
          <div className={styles.notificationContent}>
            <div className={styles.notificationTitleText}>
              ExxonMobil
              <img className={styles.verifiedBadge} src="/images/verified1.png" alt="Verified" />
            </div>
            <div className={styles.notificationDescription}>
              Started Following you<span style={{ color: 'rgba(0,0,0,0.5)' }}>.</span>
              <span style={{ fontWeight: '400', color: 'rgba(0,0,0,0.5)' }}>&nbsp;</span>
              <span className={styles.notificationTime}>13h</span>
            </div>
          </div>
          <div className={`${styles.actionButton} ${styles.followButton}`}>
            <div className={`${styles.buttonText} ${styles.followButtonText}`}>Follow Back</div>
          </div>
        </div>

        {/* Card 4 */}
        <div className={`${styles.notificationCard} ${styles.highlightedCard}`}>
          <img className={styles.profileImage} src="/images/profile1.png" alt="Dalbit Petroleum" />
          <div className={styles.notificationContent}>
            <div className={styles.notificationTitleText}>
              Dalbit Petroleum Depots
              <img className={styles.verifiedBadge} src="/images//verified1.png" alt="Verified" />
            </div>
            <div className={styles.notificationDescription}>
              Liked your post.<span style={{ color: 'rgba(0,0,0,0.5)' }}></span>
              <span style={{ fontWeight: '400', color: 'rgba(0,0,0,0.5)' }}>&nbsp;</span>
              <span className={styles.notificationTime}>6d</span>
            </div>
          </div>
          <img
            className={styles.profileImage}
            style={{ marginLeft: 'auto' }}
            src="/images/update1.png"
            alt="Post Preview"
          />
        </div>

        {/* Card 5 */}
        <div className={`${styles.notificationCard} ${styles.highlightedCard}`}>
          <img className={styles.profileImage} src="/images/notification3.png" alt="ExxonMobil" />
          <div className={styles.notificationContent}>
            <div className={styles.notificationTitleText}>
              ExxonMobil
              <img className={styles.verifiedBadge} src="/images/verified1.png" alt="Verified" />
            </div>
            <div className={styles.notificationDescription}>
              Viewed your profile.<span style={{ color: 'rgba(0,0,0,0.5)' }}></span>
              <span style={{ fontWeight: '400', color: 'rgba(0,0,0,0.5)' }}>&nbsp;</span>
              <span className={styles.notificationTime}>13h</span>
            </div>
          </div>
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <div className={`${styles.actionButton} ${styles.viewProfileButton}`}>
              <div className={`${styles.buttonText} ${styles.viewProfileButtonText}`}>View Profile</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notifications;