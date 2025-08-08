import React from 'react';
import { Link } from 'react-router-dom';

// CSS Styles
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Lato:wght@500&family=Roboto:wght@400;500&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: #f4f4f4;
  }

  /* Header Section */
  .nav-bar {
    width: 100%;
    height: 100px;
    background-color: rgba(1,47,107,1);
    padding: 20px 45px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Top Navigation Row */
  .top-nav {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
  }

  /* Logo */
  .logo {
    width: 151.8px;
    height: 44px;
  }

  /* Category Dropdown */
  .category-dropdown {
    margin-left: 37.2px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .category-text {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    text-align: center;
    width: 76px;
    color: white;
    line-height: 17px;
    letter-spacing: -0.01em;
    font-weight: 600;
  }

  /* Search Bar */
  .search-bar {
    margin-left: 35.8px;
    display: flex;
    align-items: center;
    background: white;
    border-radius: 20px;
    border: 3px solid rgb(255,140,0);
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    height: 47px;
    width: 593px;
    position: relative;
  }
  .search-section {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }
  .search-icon {
    margin-left: 16px;
    width: 14.6px;
    height: 14.6px;
  }
  .search-placeholder {
    margin-left: 18.4px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: rgba(1,47,107,0.5);
    font-weight: 600;
    white-space: nowrap;
  }
  .divider {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 300px;
    height: 50px;
    width: 3px;
  }
  .location-section {
    display: flex;
    align-items: center;
  }
  .location-icon {
    width: 23px;
    height: 23px;
  }
  .location-text {
    margin-left: 15px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: rgba(1,47,107,0.5);
    font-weight: 600;
  }
  .search-button {
    margin-left: 30px;
    background-color: rgba(1,47,107,1);
    height: 49px;
    width: 150px;
    border-radius: 0 17px 17px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
  }
  .search-button-text {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    color: white;
    font-weight: 600;
  }

  /* Language and Profile Section */
  .user-section {
    margin-left: 30px;
    display: flex;
    align-items: center;
  }
  .language-selector {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .language-text {
    margin-left: 12px;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    color: white;
    font-weight: 500;
  }
  .dropdown-icon {
    margin-left: 12px;
    width: 11px;
    height: 9px;
  }
  .profile-section {
    margin-left: 36px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .profile-name {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    color: white;
    font-weight: 500;
    margin-right: 24px;
  }
  .profile-pic {
    width: 61px;
    height: 61px;
    border-radius: 50%;
    object-fit: cover;
  }

/* Notification Title Section */
.notification-header {
  display: flex;
  align-items: center;
  padding: 30px 0; /* Changed from 30px 45px to remove horizontal padding */
  background-color: #f4f4f4;
  justify-content: center; /* Add this to center the content */
  position: relative; /* Add this for the back button positioning */
}
.back-button {
  position: absolute; /* Position the back button absolutely */
  left: 45px; /* Keep it at the original left position */
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
}
.notification-title {
  font-family: 'Inter', sans-serif;
  font-size: 36px;
  color: rgba(0,0,0,1);
  line-height: 125%;
  letter-spacing: -0.4px;
  font-weight: 500;
  /* Remove margin: 0 auto as we're using flex centering now */
}

  /* Notification Content */
  .notification-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 45px 60px;
    height: calc(100vh - 240px);
    overflow-y: auto;
    box-sizing: border-box;
  }

  .notification-card {
    width: 1149px;
    height: 155px;
    border-radius: 10px;
    box-shadow: 0px 30px 40px 0px rgba(141, 141, 141, 0.342);
    background-color: rgba(255,255,255,1);
    display: flex;
    align-items: center;
    padding: 0 30px;
    margin-bottom: 20px;
    flex-shrink: 0;
  }

  .notification-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 6px;
    margin-left: 30px;
    flex: 1;
  }

  .notification-title-text {
    font-family: 'Inter', sans-serif;
    font-size: 21px;
    color: rgba(18,18,18,1);
    line-height: 18.5px;
    letter-spacing: -0.01em;
    font-weight: 600;
    display: flex;
    align-items: center;
  }

  .notification-description {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    color: rgba(0,0,0,0.5);
    line-height: 18.4px;
    font-weight: 600;
  }

  .notification-time {
    font-size: 14px;
    font-weight: 500;
  }

  /* Special card styles */
  .highlighted-card {
    box-shadow: 0px 30px 40px 0px rgba(212,212,212,0.35);
    background-color: rgba(241,241,255,1);
  }

  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }

  .verified-badge {
    width: 18px;
    height: 18px;
    margin-left: 8px;
  }

  .action-button {
    width: 199px;
    height: 43px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: auto;
  }

  .follow-button {
    background-color: rgba(255,140,0,1);
  }

  .view-profile-button {
    border: 2px solid rgb(255,140,0);
  }

  .button-text {
    font-family: 'Inter', sans-serif;
    font-size: 21px;
    white-space: nowrap;
    font-weight: 600;
  }

  .follow-button-text {
    color: rgba(255,255,255,1);
  }

  .view-profile-button-text {
    color: rgba(255,140,0,1);
  }

  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }
  
  .notification-card.highlighted-card .profile-image:last-child {
    border-radius: 10px; /* For the post preview image */
  }
`;

const Notifications = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="notifications-container">
        {/* Header Section */}
        <div className="nav-bar">
          {/* Top Navigation Row */}
          <div className="top-nav">
            {/* Logo */}
            <Link to="/loggedin">
              <img
                style={{ width: '138px', height: '40px' }}
                src="/images/logo_.png"
                alt="Messages Logo"
              />
            </Link>

            {/* Category Dropdown */}
            <div className="category-dropdown">
              <div className="category-text">Search by Category</div>
              <img className="dropdown-icon" src="/images/dropp.png" alt="Dropdown" />
            </div>

            {/* Search Bar */}
            <div className="search-bar">
              {/* Search Section */}
              <div className="search-section">
                <img className="search-icon" src="/images/search.png" alt="Search" />
                <div className="search-placeholder">Products & Services</div>
              </div>

              {/* Divider */}
              <img className="divider" src="/images/Line.png" alt="Divider" />
              <img style={{ position: 'relative', left: '127px' }} className="divider" src="/images/Line.png" alt="Divider" />

              {/* Location and Search Button */}
              <div className="location-section">
                <img className="location-icon" src="/images/location.png" alt="Location" />
                <div className="location-text">Location</div>
                <div className="search-button">
                  <div className="search-button-text">Search</div>
                </div>
              </div>
            </div>

            {/* Language and Profile Section */}
            <div className="user-section">
              {/* Language Selector */}
              <div className="language-selector">
                <div className="language-text">English</div>
                <img className="dropdown-icon" src="/images/drop.png" alt="Dropdown" />
              </div>

              {/* Profile Section */}
              <Link to="/user" style={{ textDecoration: 'none' }}>
                <div style={{ marginLeft: '36px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'white', fontWeight: 500, marginRight: '24px' }}>
                    Owen I.
                  </div>
                  <img
                    style={{ width: '61px', height: '61px', borderRadius: '50%' }}
                    src="/images/profile.png"
                    alt="Profile Picture"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Notification Title Section */}
        <div className="notification-header">
          <button
            className="back-button"
            onClick={() => window.history.back()}
          >
            <img src="/images/back.png" alt="Back" width="24" height="24" />
          </button>
          <div className="notification-title">Notifications</div>
        </div>

        {/* Notifications Content */}
        <div className="notification-container">
          {/* Card 1 */}
          <div className="notification-card">
            <img className="profile-image" src="/images/notification1.png" alt="Special Offer" />
            <div className="notification-content">
              <div className="notification-title-text">Today's Special offers</div>
              <div className="notification-description">
                You get a special promo today!&nbsp;<span className="notification-time">1 min</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="notification-card highlighted-card">
            <img className="profile-image" src="/images/notification2.png" alt="Price Drop" />
            <div className="notification-content">
              <div className="notification-title-text">Diesel price drop</div>
              <div className="notification-description">
                Diesel just dropped by KES 2/litre.&nbsp;<span className="notification-time">10 mins</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="notification-card highlighted-card">
            <img className="profile-image" src="/images/notification3.png" alt="ExxonMobil" />
            <div className="notification-content">
              <div className="notification-title-text">
                ExxonMobil
                <img className="verified-badge" src="/images/verified1.png" alt="Verified" />
              </div>
              <div className="notification-description">
                Started Following you<span style={{ color: 'rgba(0,0,0,0.5)' }}>.</span>
                <span style={{ fontWeight: '400', color: 'rgba(0,0,0,0.5)' }}>&nbsp;</span>
                <span className="notification-time">13h</span>
              </div>
            </div>
            <div className="action-button follow-button">
              <div className="button-text follow-button-text">Follow Back</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="notification-card highlighted-card">
            <img className="profile-image" src="/images/profile1.png" alt="Dalbit Petroleum" />
            <div className="notification-content">
              <div className="notification-title-text">
                Dalbit Petroleum Depots
                <img className="verified-badge" src="/images//verified1.png" alt="Verified" />
              </div>
              <div className="notification-description">
                Liked your post.<span style={{ color: 'rgba(0,0,0,0.5)' }}></span>
                <span style={{ fontWeight: '400', color: 'rgba(0,0,0,0.5)' }}>&nbsp;</span>
                <span className="notification-time">6d</span>
              </div>
            </div>
            <img
              className="profile-image"
              style={{ marginLeft: 'auto' }}
              src="/images/update1.png"
              alt="Post Preview"
            />
          </div>

          {/* Card 5 */}
          <div className="notification-card highlighted-card">
            <img className="profile-image" src="/images/notification3.png" alt="ExxonMobil" />
            <div className="notification-content">
              <div className="notification-title-text">
                ExxonMobil
                <img className="verified-badge" src="/images/verified1.png" alt="Verified" />
              </div>
              <div className="notification-description">
                Viewed your profile.<span style={{ color: 'rgba(0,0,0,0.5)' }}></span>
                <span style={{ fontWeight: '400', color: 'rgba(0,0,0,0.5)' }}>&nbsp;</span>
                <span className="notification-time">13h</span>
              </div>
            </div>
            <a href="/profile" style={{ textDecoration: 'none' }}>
  <div className="action-button view-profile-button">
    <div className="button-text view-profile-button-text">View Profile</div>
  </div>
</a>

          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;