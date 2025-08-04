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
    height: 100vh;
    overflow: hidden;
  }

  /* Main container */
  .notifications-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Fixed header section */
  .fixed-header {
    display: flex;
    flex-direction: column;
  }

  /* Navigation bar (fixed) */
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    height: 100px;
    background-color: rgba(1, 47, 107, 1);
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
    border: 3px solid rgb(255, 140, 0);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
    color: rgba(1, 47, 107, 0.5);
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
    color: rgba(1, 47, 107, 0.5);
    font-weight: 600;
  }
  .search-button {
    margin-left: 30px;
    background-color: rgba(1, 47, 107, 1);
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

  /* Notification Title Section (fixed under nav-bar) */
  .notification-header {
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: #f4f4f4;
    display: flex;
    align-items: center;
    padding: 27px 0;
    justify-content: center;
  }
  .back-button {
    position: absolute;
    left: 45px;
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
    color: rgba(0, 0, 0, 1);
    line-height: 125%;
    letter-spacing: -0.4px;
    font-weight: 500;
  }

  /* Scrollable content spacing (make sure the content is not hidden) */
  .scrollable-content {
    margin-top: 180px; /* nav-bar (100px) + notification-header (80px) */
    padding-top: 20px; /* ADD THIS to create some breathing room */
    height: calc(100vh - 180px);
    overflow-y: auto;
  }

  /* Analytics Subheader Section */
  .analytics-subheader-container {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #f4f4f4;
    padding: 0 0 20px 0;
  }
  .analytics-subheader {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    width: 213px;
    height: 93px;
  }
  .analytics-main-text {
    font-family: 'Inter', sans-serif;
    font-size: 21px;
    color: rgba(18, 18, 18, 1);
    line-height: 18.5px;
    letter-spacing: -0.01em;
    font-weight: 500;
  }
  .analytics-number {
    font-family: 'Inter', sans-serif;
    font-size: 21px;
    color: rgba(18, 18, 18, 1);
    line-height: 18.5px;
    letter-spacing: -0.01em;
    font-weight: 500;
  }
  .analytics-subtext {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    color: rgba(18, 18, 18, 0.5);
    line-height: 18.5px;
    letter-spacing: -0.01em;
    font-weight: 500;
  }

  /* Chart Container */
  .chart-container {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #f4f4f4;
    padding: 20px 0;
  }

  /* Top Performing Posts Container */
  .top-posts-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 20px 0;
    background-color: #f4f4f4;
    margin-bottom: 40px
  }
  .top-posts-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 1260px;
    padding: 0 20px;
  }
  .top-posts-title {
    font-family: 'Inter', sans-serif;
    font-size: 21px;
    color: rgba(18, 18, 18, 1);
    line-height: 18.5px;
    letter-spacing: -0.01em;
    font-weight: 500;
    margin-bottom: 7px;
  }
  .top-posts-subtitle {
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    color: rgba(18, 18, 18, 0.8);
    line-height: 31px;
    letter-spacing: -0.2px;
    font-weight: 400;
  }
  .posts-row {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 1260px;
    padding: 0 20px;
    margin-top: 28px;
  }
  .post-box {
  border-radius: 10px;
  border: 2px solid black;
  width: 100%;
  max-width: 619px;
  min-height: 234px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background: #fff;
}

.post-content {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 7px;
  width: 100%;
}

.post-left {
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 172px;
}

.post-left-title {
  margin-left: 2px;
  font-family: 'Inter', sans-serif;
  font-size: 19px;
  white-space: nowrap;
  color: rgba(18, 18, 18, 1);
  line-height: 18.5px;
  font-weight: 500;
}

.post-left img {
  width: 172px;
  height: 111px;
}

.post-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  width: calc(100% - 190px);
}

.post-right-time {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: rgba(18, 18, 18, 0.8);
  line-height: 31px;
  font-weight: 400;
}

.post-right-description {
  margin-left: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  color: rgba(18, 18, 18, 0.8);
  line-height: 22px;
  font-weight: 500;
}

.divider-line {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin: 10px 0;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-footer-left,
.post-footer-right {
  font-family: 'Inter', sans-serif;
  font-size: 19px;
  color: rgba(255, 140, 0, 1);
  font-weight: 600;
}

`;

const Analytics = () => {
    return (
        <>
            <style>{styles}</style>
            <div className="notifications-container">
                {/* Fixed Header Section */}
                <div className="fixed-header">
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
                        <div className="notification-title">Analytics</div>
                    </div>

                    {/* Analytics Content Section (Scrollable) */}
                    <div className="scrollable-content">
                        {/* Analytics Subheader Section */}
                        <div className="analytics-subheader-container">
                            <div className="analytics-subheader">
                                <div className="analytics-main-text">Content Performance</div>
                                <div className="analytics-number">25</div>
                                <div className="analytics-subtext">Impressions</div>
                            </div>
                        </div>

                        {/* Analytics Chart */}
                        <div className="chart-container">
                            <div style={{ borderRadius: '10px', width: '337px', minHeight: '386px', padding: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '314px', height: '330px', margin: 'auto' }}>
                                    <div style={{ marginTop: '0px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '3px', width: '313px', height: '270px' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', width: '18px', height: '270px' }}>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px', color: 'rgba(130,136,152,1)', fontWeight: '400' }}>500</div>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px', color: 'rgba(130,136,152,1)', fontWeight: '400' }}>400</div>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px', color: 'rgba(130,136,152,1)', fontWeight: '400' }}>300</div>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px', color: 'rgba(130,136,152,1)', fontWeight: '400' }}>200</div>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px', color: 'rgba(130,136,152,1)', fontWeight: '400' }}>100</div>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px', color: 'rgba(130,136,152,1)', fontWeight: '400' }}>0</div>
                                        </div>

                                        <div style={{ position: 'relative', width: '292px', height: '270px', borderLeft: '2px solid #D9D9D9', borderBottom: '2px solid #D9D9D9', backgroundColor: 'transparent' }}>
                                            {/* SVG with line and area */}
                                            <svg width="292" height="270" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
                                                <path
                                                    d="
                  M 290.4,136
                  C 270,138 258,148 246.4,141
                  S 218,156 198.7,156
                  S 164,176 151.1,176
                  S 116,161 103.5,161
                  S 70,181 55.9,181
                  S 20,171 8.3,171
                  L 8.3,270
                  L 290.4,270
                  Z
                "
                                                    fill="rgba(37, 99, 235, 0.08)"
                                                />
                                                <path
                                                    d="
                  M 290.4,136
                  C 270,138 258,148 246.4,141
                  S 218,156 198.7,156
                  S 164,176 151.1,176
                  S 116,161 103.5,161
                  S 70,181 55.9,181
                  S 20,171 8.3,171
                "
                                                    fill="none"
                                                    stroke="#2563EB"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>

                                            {/* Graph dots */}
                                            <img style={{ position: 'absolute', bottom: '130px', left: '286.8px', zIndex: 2 }} width="7.2px" height="8px" src="/images/graphdot.png" alt="Graph Dot" />
                                            <img style={{ position: 'absolute', bottom: '125px', left: '239.2px', zIndex: 2 }} width="7.2px" height="8px" src="/images/graphdot.png" alt="Graph Dot" />
                                            <img style={{ position: 'absolute', bottom: '110px', left: '191.5px', zIndex: 2 }} width="7.2px" height="8px" src="/images/graphdot.png" alt="Graph Dot" />
                                            <img style={{ position: 'absolute', bottom: '90px', left: '143.9px', zIndex: 2 }} width="7.2px" height="8px" src="/images/graphdot.png" alt="Graph Dot" />
                                            <img style={{ position: 'absolute', bottom: '105px', left: '96.3px', zIndex: 2 }} width="7.2px" height="8px" src="/images/graphdot.png" alt="Graph Dot" />
                                            <img style={{ position: 'absolute', bottom: '85px', left: '48.6px', zIndex: 2 }} width="7.2px" height="8px" src="/images/graphdot.png" alt="Graph Dot" />
                                            <img style={{ position: 'absolute', bottom: '95px', left: '1px', zIndex: 2 }} width="7.2px" height="8px" src="/images/graphdot.png" alt="Graph Dot" />

                                            {/* Grid lines */}
                                            <img style={{ position: 'absolute', bottom: '54px', left: '0' }} width="292px" height="1px" src="/images/linegraph1.png" alt="Line" />
                                            <img style={{ position: 'absolute', bottom: '108px', left: '0' }} width="292px" height="1px" src="/images/linegraph1.png" alt="Line" />
                                            <img style={{ position: 'absolute', bottom: '162px', left: '0' }} width="292px" height="1px" src="/images/linegraph1.png" alt="Line" />
                                            <img style={{ position: 'absolute', bottom: '216px', left: '0' }} width="292px" height="1px" src="/images/linegraph1.png" alt="Line" />
                                            <img style={{ position: 'absolute', bottom: '270px', left: '0' }} width="292px" height="1px" src="/images/linegraph1.png" alt="Line" />
                                        </div>
                                    </div>

                                    <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', width: '292px' }}>
                                        <div style={{ fontSize: '9px', color: '#828898' }}>Jan</div>
                                        <div style={{ fontSize: '9px', color: '#828898' }}>Feb</div>
                                        <div style={{ fontSize: '9px', color: '#828898' }}>Mar</div>
                                        <div style={{ fontSize: '9px', color: '#828898' }}>Apr</div>
                                        <div style={{ fontSize: '9px', color: '#828898' }}>May</div>
                                        <div style={{ fontSize: '9px', color: '#828898' }}>Jun</div>
                                        <div style={{ fontSize: '9px', color: '#828898' }}>Jul</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Top Performing Posts Section */}
                        <div className="top-posts-container">
                            <div className="top-posts-header">
                                <div className="top-posts-title">Top Performing Posts</div>
                                <div className="top-posts-subtitle">
                                    Based on impressions gained from july 10/2023/2025
                                </div>
                            </div>
                            <div className="posts-row">
                            <div className="post-box">
                              <div className="post-content">
                                <div className="post-left">
                                  <div className="post-left-title">SolarWave LLC</div>
                                  <img src="/images/analytic.png" alt="Image Asset 1" />
                                </div>
                                <div className="post-right">
                                  <div className="post-right-time">posted this. 3w</div>
                                  <div className="post-right-description">
                                    Diesel price update: Be the first to get the
                                  </div>
                                </div>
                              </div>
                              <div className="divider-line"></div>
                              <div className="post-footer">
                                <div className="post-footer-left">10 Impression</div>
                                <div className="post-footer-right">View analytics</div>
                              </div>
                            </div>
                          
                            <div className="post-box">
                              <div className="post-content">
                                <div className="post-left">
                                  <div className="post-left-title">SolarWave LLC</div>
                                  <img src="/images/analytic1.png" alt="Image Asset 1" />
                                </div>
                                <div className="post-right">
                                  <div className="post-right-time">posted this. 3w</div>
                                  <div className="post-right-description">
                                    Diesel price update: Be the first to get the
                                  </div>
                                </div>
                              </div>
                              <div className="divider-line"></div>
                              <div className="post-footer">
                                <div className="post-footer-left">10 Impression</div>
                                <div className="post-footer-right">View analytics</div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Analytics;