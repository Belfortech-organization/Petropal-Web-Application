import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const User = () => {
  const [activeSection, setActiveSection] = useState('about');
  const navigate = useNavigate();

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="profile-container">
      <style jsx>{`
        * { 
          margin:0; 
          padding:0; 
          box-sizing:border-box; 
        }
        
        body {
          font-family:'Inter', sans-serif;
          overflow:hidden;
          display:flex;
          height:100vh;
        }

        /* Sidebar */
        .sidebar {
          background-color:rgba(244,244,244,1);
          width:430px;              
          height:100vh;
          position:fixed;
          left:0; 
          top:0;
          border-right:1px solid rgba(0,0,0,0.1);
          display:flex;
          flex-direction:column;
        }
        
        .sidebar-content {
          padding:30px 20px 20px 20px;
          height:100%;
          display:flex;
          flex-direction:column;
          min-width: 0;
        }
        
        .sb-top-icon { 
          width:40px; 
          height:40px; 
        }
        
        .sb-logo {
          width:170px; 
          height:48px;
          margin:20px auto 0 auto;
          display:block;
          max-width: 100%;
        }
        
        .sb-item {
          display:flex;
          text-decoration: none;
          color: inherit;
          align-items:center;
          gap:14px;
          padding:10px;
          margin-left:40px;
          margin-top:15px;
        }
        
        .sb-item:first-of-type { 
          margin-top:25px;
        }
        
        .sb-item-icon {
          width:20px; 
          height:20px;
          flex:0 0 20px;
          display:flex; 
          align-items:center; 
          justify-content:center;
        }
        
        .sb-item-text {
          font-size:18px;
          font-weight:500;
          margin-left: 20px;
          color:rgba(25,25,25,1);
          line-height:1.1;
          white-space:nowrap;
          overflow:hidden;
          text-overflow: ellipsis;
        }
        
        .sb-item-right {
          margin-left:auto;
          display:flex; 
          align-items:center; 
          justify-content:center;
        }
        
        .sb-item-right img {
          width:38px; 
          height:35px;
          max-width: 100%;
        }
        
        .logout-btn {
          margin-top:auto;
          width:100%;
          display:flex; 
          justify-content:center; 
          align-items:center;
        }
        
        .logout-btn-inner {
          width:280px; 
          max-width: 100%;
          height:40px;
          border-radius:10px;
          background-color:rgba(255,140,0,1);
          display:flex; 
          justify-content:center; 
          align-items:center;
        }
        
        .logout-text {
          font-size:18px; 
          font-weight:600; 
          color:#fff; 
          white-space:nowrap;
          line-height:1.1;
          padding: 0 10px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Main content */
        .main-content {
          margin-left:430px;        
          flex:1;
          height:100vh;
          overflow-y:auto;
          overflow-x: hidden;
          padding:0;
          position:relative;
          min-width: 0;
        }

        /* Hero area */
        .hero {
          position: relative;
          height: 400px;
          width: 935px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hero-main {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
          display: block;
        }
        
        .hero-left, .hero-right {
          position: absolute;
          top: 85%;
          transform: translateY(-50%);
          width: 60px;          
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 0px solid #fff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          cursor: pointer;
          z-index: 2;
        }
        
        .hero-left {
          left: 20px;
          width: 90px;
          height: 90px;
          top: 85%;
        }
        
        .hero-right {
          right: 20px;
        }

        /* Name line styles */
        .name-line {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .company-name {
          font-family: 'Inter', sans-serif;
          font-size: 24px;
          white-space: nowrap;
          color: rgba(0,0,0,1);
          line-height: 100%;
          font-weight: 600;
        }

        .verified img {
          width: 25px;
          height: 27px;
        }

        /* Content sections */
        .content-section {
          display: none;
          width: 800px;
          margin: 20px auto;
          padding: 20px;
          font-family: 'Inter', sans-serif;
        }
        
        .content-section.active {
          display: block;
        }

        .posts-grid {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
          margin-top: 20px;
        }
        
        .post-card {
          width: 310px;
          display: flex;
          flex-direction: column;
        }
        
        .post-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 14px;
        }
        
        .profile-image {
          width: 74px;
          height: 74px;
          border-radius: 50%;
          object-fit: cover;
        }
        
        .profile-info {
          display: flex;
          flex-direction: column;
        }
        
        .profile-name {
          font-family: 'Inter', sans-serif;
          font-size: 25px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .rating-container {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 7px;
        }
        
        .rating-text {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          color: rgba(25,25,25,0.5);
        }
        
        .post-description {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: rgba(0,0,0,0.5);
          line-height: 20px;
          margin-bottom: 14px;
        }
        
        .post-image {
          width: 310px;
          height: 298px;
          border-radius: 10px;
          object-fit: cover;
          margin-bottom: 14px;
        }
        
        .post-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }
        
        .location-info {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 19px;
          font-weight: 500;
        }
        
        .price-info {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
        }
        
        .time-info {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 21px;
        }
        
        .time-text {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          color: rgba(130,130,130,1);
        }
        
        .post-actions {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        
        .start-chat-btn-small {
          border-radius: 7.1px;
          border: 0.6px solid #d9d9d9;
          width: 82px;
          height: 29px;
          background-color: rgba(255,140,0,1);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: auto;
        }
        
        .start-chat-text {
          font-family: 'Inter', sans-serif;
          font-size: 10.4px;
          color: white;
          font-weight: 600;
        }

        .analytics-link {
  text-decoration: none;
}

.analytics-container {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 18px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.analytics-container:hover {
  transform: scale(1.05);
}

.analytics-text {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
}


        /* About section specific styles */
        .about-title {
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          min-width: 64px;
          white-space: nowrap;
          color: rgba(0,0,0,1);
          line-height: 48px;
          font-weight: 500;
        }
        
        .about-description {
          margin-top: 17px;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          width: 460px;
          color: rgba(0,0,0,0.5);
          line-height: 20px;
          font-weight: 400;
        }
        
        .services-title {
          margin-top: 26px;
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          min-width: 175px;
          white-space: nowrap;
          color: rgba(0,0,0,1);
          line-height: 48px;
          font-weight: 500;
        }
        
        .services-list {
          margin-top: 16px;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          width: 305px;
          color: rgba(0,0,0,0.5);
          line-height: 20px;
          font-weight: 400;
          padding-left: 20px;
        }

        /* Navigation tabs */
        .nav-tabs-container {
          width: 800px;
          margin: 40px auto 0;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        
        .nav-tabs {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 250px;
          width: 100%;
          height: 48px;
        }
        
        .nav-tab {
          font-family: 'Inter', sans-serif;
          font-size: 22px;
          white-space: nowrap;
          line-height: 48px;
          font-weight: 400;
          color: rgba(0,0,0,0.5);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 137px;
          position: relative;
        }
        
        .nav-tab.active {
          font-weight: 500;
          color: rgba(0,0,0,1);
        }
        
        .nav-tab-indicator {
          width: 137px;
          height: 6px;
          background-color: rgba(255,140,0,1);
          border-radius: 3px;
          display: none;
          position: absolute;
          bottom: -6px;
        }
        
        .nav-tab.active .nav-tab-indicator {
          display: block;
        }
        
        .nav-tabs-line {
          width: 100%;
          height: 1px;
          background-color: rgba(0,0,0,0.1);
          position: absolute;
          bottom: 0;
        }

        /* Reviews section styles */
        .ratings-container {
          display: flex;
          gap: 60px;
          margin-bottom: 40px;
          align-items: flex-start;
        }
        
        .rating-summary {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 220px;
          min-width: 220px;
        }
        
        .rating-title {
          font-family: 'Inter', sans-serif;
          font-size: 23px;
          color: rgba(0,0,0,1);
          font-weight: 500;
          margin-bottom: 10px;
          white-space: nowrap;
        }
        
        .rating-value {
          font-family: 'Inter', sans-serif;
          font-size: 74px;
          color: rgba(0,0,0,0.8);
          font-weight: 700;
          margin: 10px 0;
          line-height: 1;
        }
        
        .stars-container {
          display: flex;
          gap: 5px;
          margin: 15px 0;
        }
        
        .star {
          width: 20px;
          height: 20px;
        }
        
        .reviews-count {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          color: rgba(0,0,0,0.5);
          font-weight: 600;
          margin-top: 5px;
        }
        
        .ratings-distribution {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding-top: 0;
          width: 100%;
        }
        
        .rating-row {
          display: flex;
          align-items: center;
          gap: 15px;
          width: 100%;
        }
        
        .rating-number {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          color: rgba(0,0,0,0.8);
          font-weight: 600;
          width: 20px;
          text-align: right;
        }
        
        .rating-bar-container {
          flex: 1;
          height: 14px;
          background-color: rgba(217,217,217,0.5);
          border-radius: 7px;
          overflow: hidden;
          min-width: 200px;
        }
        
        .rating-bar {
          height: 100%;
          background-color: rgba(255,140,0,1);
          border-radius: 7px;
        }
        
        .bar-5 { width: 90%; }
        .bar-4 { width: 70%; }
        .bar-3 { width: 50%; }
        .bar-2 { width: 30%; }
        .bar-1 { width: 10%; }

        /* Posts Section Grid Layout */
        .posts-grid {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        /* Post Card Styling */
        .post-card {
          width: calc(50% - 15px); /* Two items per row */
          padding: 20px;
          border-radius: 10px;
         
          margin-bottom: 30px;
        }

        /* Post Header */
        .post-header {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }

        /* Profile Image */
        .profile-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 15px;
        }

        /* Profile Info */
        .profile-info {
          display: flex;
          flex-direction: column;
        }

        /* Post Image */
        .post-image {
          width: 100%;
          height: 200px;
          border-radius: 8px;
          object-fit: cover;
          margin-bottom: 10px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .sidebar {
            width: 300px;
          }
          
          .main-content {
            margin-left: 300px;
          }
          
          .sb-item-text {
            font-size: 16px;
          }
          
          .start-chat-btn {
            width: 90%;
            font-size: 22px;
          }
          
          .nav-tabs-container {
            width: 90%;
          }
          
          .nav-tabs {
            gap: 20px;
          }
          
          .nav-tab {
            width: auto;
            font-size: 18px;
          }
          
          .nav-tab-indicator {
            width: 100%;
          }
          
          .content-section {
            width: 90%;
          }
          
          .about-description,
          .services-list {
            width: 100%;
          }
          
          .post-card {
            width: 100%; /* Single column on small screens */
          }
          
          .ratings-container {
            flex-direction: column;
            align-items: flex-start;
          }
          .rating-numbers,
          .rating-bars {
            margin-left: 0;
            margin-top: 20px;
          }
          .rating-bar-container {
            width: 100%;
          }
        }
      `}</style>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-content">
          <img 
            className="sb-top-icon" 
            src="/images/back.png" 
            alt="Back"
            onClick={() => navigate(-1)}
            style={{ cursor: 'pointer' }}
          />
          <Link to="/loggedin">
            <img
              className="sb-logo" src="/images/profilelogo.png" alt="Logo"
            />
          </Link>

          {/* Profile item linking back to Profile page */}
          <Link to="" className="sb-item">
            <span className="sb-item-icon">
              <img src="/images/userprofile.png" alt="Profile" />
            </span>
            <span className="sb-item-text">Profile</span>
          </Link>
          
          <Link to="/general-info" className="sb-item">
            <span className="sb-item-icon"><img src="/images/general.png" alt="General"/></span>
            <span className="sb-item-text">General Info</span>
          </Link>
          <Link to="/settings" className="sb-item">
            <span className="sb-item-icon"><img src="/images/settings.png" alt="Settings"/></span>
            <span className="sb-item-text">Settings</span>
          </Link>
          <Link to="/notifications" className="sb-item">
            <span className="sb-item-icon">
              <img src="/images/notificationn.png" alt="Notifications" />
            </span>
            <span className="sb-item-text">Notification</span>
            <span className="sb-item-right">
              <img src="/images/toggle.png" alt="Toggle" />
            </span>
          </Link>
          <Link to="/support" className="sb-item">
            <span className="sb-item-icon"><img src="/images/support.png" alt="Support"/></span>
            <span className="sb-item-text">Support & Help</span>
          </Link>
          <Link to="/legal" className="sb-item">
            <span className="sb-item-icon"><img src="/images/legal.png" alt="Legal"/></span>
            <span className="sb-item-text">Legal & Account</span>
          </Link>
          
          <Link to="" className="sb-item">
            <span className="sb-item-icon"><img src="/images/aboutt.png" alt="About"/></span>
            <span className="sb-item-text">About App</span>
          </Link>
          <div className="logout-btn">
            <div className="logout-btn-inner">
              <div className="logout-text">Log Out</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        <div className="hero">
          <img className="hero-main" src="/images/post.png" alt="Hero Image"/>
          <img className="hero-left" src="/images/seller2.png" alt="Left Icon"/>
          <img className="hero-right" src="/images/sharee.png" alt="Right Icon"/>
        </div>

        {/* Updated block */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '300px', width: '800px', height: '131px', margin: '20px auto 0' }}>
          <div style={{ marginTop: '9px', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', width: '218px', height: '122px' }}>
            <div className="name-line">
              <div className="company-name">SolarWave LLC</div>
              <div className="verified">
                <img src="/images/verified1.png" alt="Verified Badge"/>
              </div>
            </div>
            <div style={{ marginTop: '21px', display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '10px', width: '215px', height: '70px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start', gap: '20px', width: '26px', height: '70px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '26px', height: '26px' }}>
                  <img width="22px" height="24px" src="/images/profilelocation.png" alt="Svg Asset 2" />
                </div>
                <img width="22px" height="21.7px" src="/images/review.png" alt="Svg Asset 1" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start', gap: '0px', width: '200px', height: '65px' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', minWidth: '0px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                  Nairobi
                </div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', minWidth: '140px', whiteSpace: 'nowrap', color: 'rgba(0,0,0,0.8)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  4.8 (26 Reviews)
                </div>
              </div>
            </div>
          </div>
          {/* Orange button updated */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '26px', width: '325px', height: '94px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '47px', height: '47px' }}>
              <img width="38.2px" height="38.2px" src="/images/edit.png" alt="Edit" />
            </div>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 600 }}>
              5.2K Followers
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="nav-tabs-container">
          <div className="nav-tabs">
            <div className={`nav-tab ${activeSection === 'about' ? 'active' : ''}`} onClick={() => showSection('about')}>
              About
              <div className="nav-tab-indicator"></div>
            </div>
            <div className={`nav-tab ${activeSection === 'posts' ? 'active' : ''}`} onClick={() => showSection('posts')}>
              Posts
              <div className="nav-tab-indicator"></div>
            </div>
            <div className={`nav-tab ${activeSection === 'reviews' ? 'active' : ''}`} onClick={() => showSection('reviews')}>
              Reviews
              <div className="nav-tab-indicator"></div>
            </div>
          </div>
          <div className="nav-tabs-line"></div>
        </div>

        {/* Content Sections */}
        <div id="about" className={`content-section ${activeSection === 'about' ? 'active' : ''}`}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="about-title">About</div>
                <img 
                  width="38.2px" 
                  height="38.2px" 
                  src="/images/edit.png" 
                  alt="Edit About" 
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="about-description" style={{ marginTop: '8px' }}>
                SolarWave is a Verified energy supplier based in Nairobi.<br />
                We provide clean diesel, LPG and solar solutions with reliable delivery and transparent pricing
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div style={{ height: '24px' }}></div>

          {/* Services Section */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="services-title">Services Provided</div>
                <img 
                  width="38.2px" 
                  height="38.2px" 
                  src="/images/edit.png" 
                  alt="Edit Services" 
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <ul className="services-list" style={{ marginTop: '8px' }}>
                <li>Diesel & LPG Distribution</li>
                <li>Commercial Solar System Installations</li>
                <li>On-time Delivery Across Kenya</li>
                <li>Verified Metered Fuel Supply</li>
              </ul>
            </div>
          </div>

          {/* Spacer */}
          <div style={{ height: '60px' }}></div>

          {/* Analytics Section */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'rgba(0,0,0,1)', fontWeight: 500 }}>
                  Analytics
                </div>
              </div>

              {/* Private Info */}
              <Link to="/analytics" className="analytics-link">
                <div className="analytics-container">
                  <img width="25.2px" height="20px" src="/images/private.png" alt="Private Icon" />
                  <div className="analytics-text">Private to you</div>
                </div>
              </Link>
              {/* Profile Visits */}
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

              {/* Post Analytics */}
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

              {/* Search Appearances */}
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

        <div id="posts" className={`content-section ${activeSection === 'posts' ? 'active' : ''}`}>
  <div className="posts-grid">
    {/* Post 1 */}
    <div className="post-card">
      <div className="post-header">
        <img className="profile-image" src="/images/seller2.png" alt="Profile" />
        <div className="profile-info">
          <div className="profile-name">
            SolarWave LLC
            <img src="/images/verified1.png" width="25" height="27" alt="Verified" />
          </div>
          <div className="rating-container">
            <img width="18.1" height="19" src="/images/review.png" alt="Rating" />
            <div className="rating-text">4.8</div>
          </div>
        </div>
      </div>
      <div className="post-description">
        Diesel price update: Be the first to get the new KES 183/litre rate on all bulk orders
      </div>
      <img className="post-image" src="/images/product1.png" alt="Post" />
      <div className="post-meta">
        <div className="location-info">
          <img width="14" height="16" src="/images/location_.png" alt="Location" />
          <span>Nairobi, Kenya</span>
        </div>
        <div className="price-info">KES 183/litre</div>
      </div>
      <div className="time-info">
        <img width="17" height="17" src="/images/clock.png" alt="Clock" />
        <span>Posted 15 min ago</span>
      </div>
      <div className="post-actions">
        <img width="18.3" height="17.1" src="/images/like.png" alt="Like" />
        <img width="20" height="20" src="/images/message.png" alt="Comment" />
        <img width="20" height="20" src="/images/share.png" alt="Share" />
        <div className="start-chat-btn-small">
          <div className="start-chat-text">Start Chat</div>
        </div>
      </div>
    </div>

    {/* Post 2 */}
    <div className="post-card">
      <div className="post-header">
        <img className="profile-image" src="/images/seller1.png" alt="Profile" />
        <div className="profile-info">
          <div className="profile-name">
            Hass Petroleum
            <img src="/images/verified1.png" width="25" height="27" alt="Verified" />
          </div>
          <div className="rating-container">
            <img width="18.1" height="19" src="/images/review.png" alt="Rating" />
            <div className="rating-text">4.6</div>
          </div>
        </div>
      </div>
      <div className="post-description">
        Gas-oil special offer: 10,000L minimum order at KES 183/litre
      </div>
      <img className="post-image" src="/images/product2.png" alt="Post" />
      <div className="post-meta">
        <div className="location-info">
          <img width="14" height="16" src="/images/location_.png" alt="Location" />
          <span>Kisumu</span>
        </div>
        <div className="price-info">KES 183/litre</div>
      </div>
      <div className="time-info">
        <img width="17" height="17" src="/images/clock.png" alt="Clock" />
        <span>Posted 1h ago</span>
      </div>
      <div className="post-actions">
        <img width="18.3" height="17.1" src="/images/like.png" alt="Like" />
        <img width="20" height="20" src="/images/message.png" alt="Comment" />
        <img width="20" height="20" src="/images/share.png" alt="Share" />
        <div className="start-chat-btn-small">
          <div className="start-chat-text">Start Chat</div>
        </div>
      </div>
    </div>
  </div>
</div>

        <div id="reviews" className={`content-section ${activeSection === 'reviews' ? 'active' : ''}`}>
          <div className="ratings-container">
            <div className="rating-summary">
              <div className="rating-title">Ratings and Review</div>
              <div className="rating-value">4.8</div>
              <div className="stars-container">
                <img className="star" src="/images/review.png" alt="Star" />
                <img className="star" src="/images/review.png" alt="Star" />
                <img className="star" src="/images/review.png" alt="Star" />
                <img className="star" src="/images/review.png" alt="Star" />
                <img className="star" src="/images/review.png" alt="Star" />
              </div>
              <div className="reviews-count">26 Reviews</div>
            </div>
            
            <div className="ratings-distribution">
              {/* Rating 5 */}
              <div className="rating-row">
                <div className="rating-number">5</div>
                <div className="rating-bar-container">
                  <div className="rating-bar bar-5"></div>
                </div>
              </div>
              
              {/* Rating 4 */}
              <div className="rating-row">
                <div className="rating-number">4</div>
                <div className="rating-bar-container">
                  <div className="rating-bar bar-4"></div>
                </div>
              </div>
              
              {/* Rating 3 */}
              <div className="rating-row">
                <div className="rating-number">3</div>
                <div className="rating-bar-container">
                  <div className="rating-bar bar-3"></div>
                </div>
              </div>
              
              {/* Rating 2 */}
              <div className="rating-row">
                <div className="rating-number">2</div>
                <div className="rating-bar-container">
                  <div className="rating-bar bar-2"></div>
                </div>
              </div>
              
              {/* Rating 1 */}
              <div className="rating-row">
                <div className="rating-number">1</div>
                <div className="rating-bar-container">
                  <div className="rating-bar bar-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Thin separator line */}
          <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(0,0,0,0.1)', margin: '40px 0' }}></div>

          {/* Review 1 */}
          <div style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '43px', width: '572px', height: '144px' }}>
              <img
                style={{ width: '65px', height: '65px' }}
                src="/images/review1.png"
                alt="Image Asset 1"
                width="65px"
                height="65px" />
              <div
                style={{ marginTop: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start', gap: '9px', width: '464px', height: '142px' }}>
                <div
                  style={{ fontFamily: '"Inter", sans-serif', fontSize: '23px', minWidth: '98px', whiteSpace: 'nowrap', color: 'rgba(0,0,0,1)', lineHeight: '48px', fontWeight: 600 }}>
                  Daniel K
                </div>
                <div
                  style={{ display: 'flex', justifyContent: 'start', alignItems: 'start', height: '23px' }}>
                  <img
                    width="20px"
                    height="20.8px"
                    src="/images/review.png"
                    alt="Svg Asset 5" /><img
                    style={{ marginLeft: '11px' }}
                    width="20px"
                    height="20.8px"
                    src="/images/review.png"
                    alt="Svg Asset 4" /><img
                    style={{ marginLeft: '11px' }}
                    width="20px"
                    height="20.8px"
                    src="/images/review.png"
                    alt="Svg Asset 3" /><img
                    style={{ marginLeft: '11px' }}
                    width="20px"
                    height="20.8px"
                    src="/images/review.png"
                    alt="Svg Asset 2" /><img
                    style={{ marginLeft: '11px' }}
                    width="19px"
                    height="20.8px"
                    src="/images/review.png"
                    alt="Svg Asset 1" />
                  <div
                    style={{ marginTop: '1px', marginLeft: '18px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '76px', whiteSpace: 'nowrap', color: 'rgba(0,0,0,0.5)', lineHeight: '20px', fontWeight: 500 }}>
                    2025-1-1
                  </div>
                </div>
                <div
                  style={{ marginLeft: '4px', fontFamily: '"Inter", sans-serif', fontSize: '15px', width: '460px', color: 'rgba(0,0,0,0.5)', lineHeight: '20px', fontWeight: 400 }}>
                  An exceptional experience! Although there was a slight delay in initial
                  communication, the diesel arrived right on schedule and perfectly met the
                  specifications. Highly recommend this verified supplier!
                </div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '43px', width: '572px', height: '144px' }}>
              <img
                style={{ width: '65px', height: '65px' }}
                src="/images/review2.png"
                alt="Image Asset 2"
                width="65px"
                height="65px" />
              <div
                style={{ marginTop: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start', gap: '9px', width: '464px', height: '142px' }}>
                <div
                  style={{ fontFamily: '"Inter", sans-serif', fontSize: '23px', minWidth: '98px', whiteSpace: 'nowrap', color: 'rgba(0,0,0,1)', lineHeight: '48px', fontWeight: 600 }}>
                  Sarah M
                </div>
                <div
                  style={{ display: 'flex', justifyContent: 'start', alignItems: 'start', height: '23px' }}>
                  <img
                    width="20px"
                    height="20.8px"
                    src="/images/review.png"
                    alt="Svg Asset 5" /><img
                    style={{ marginLeft: '11px' }}
                    width="20px"
                    height="20.8px"
                    src="/images/review.png"
                    alt="Svg Asset 4" /><img
                    style={{ marginLeft: '11px' }}
                    width="20px"
                    height="20.8px"
                    src="/images/review.png"
                    alt="Svg Asset 3" /><img
                    style={{ marginLeft: '11px' }}
                    width="20px"
                    height="20.8px"
                    src="/images/review.png"
                    alt="Svg Asset 2" /><img
                    style={{ marginLeft: '11px' }}
                    width="19px"
                    height="20.8px"
                    src="/images/review.png"
                    alt="Svg Asset 1" />
                  <div
                    style={{ marginTop: '1px', marginLeft: '18px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '76px', whiteSpace: 'nowrap', color: 'rgba(0,0,0,0.5)', lineHeight: '20px', fontWeight: 500 }}>
                    2025-1-15
                  </div>
                </div>
                <div
                  style={{ marginLeft: '4px', fontFamily: '"Inter", sans-serif', fontSize: '15px', width: '460px', color: 'rgba(0,0,0,0.5)', lineHeight: '20px', fontWeight: 400 }}>
                  Reliable service with excellent communication. The solar panels were installed exactly as promised and have been working perfectly. Would definitely use SolarWave again for future projects.
                </div>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '43px', width: '572px', height: '144px' }}>
              <img
                style={{ width: '65px', height: '65px' }}
                src="/images/review3.png"
                alt="Image Asset 3"
                width="65px"
                height="65px" />
              <div
                style={{ marginTop: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start', gap: '9px', width: '464px', height: '142px' }}>
                <div
                  style={{ fontFamily: '"Inter", sans-serif', fontSize: '23px', minWidth: '98px', whiteSpace: 'nowrap', color: 'rgba(0,0,0,1)', lineHeight: '48px', fontWeight: 600 }}>
                  James T
                </div>
                <div
                  style={{ display: 'flex', justifyContent: 'start', alignItems: 'start', height: '23px' }}>
                  <img
                    width="20px"
                    height="20.8px"
                    src="/images/review.png"
                    alt="Svg Asset 5" /><img
                    style={{ marginLeft: '11px' }}
                    width="20px"
                    height="20.8px"
                    src="/images/review.png"
                    alt="Svg Asset 4" /><img
                    style={{ marginLeft: '11px' }}
                    width="20px"
                    height="20.8px"
                    src="/images/review.png"
                    alt="Svg Asset 3" /><img
                    style={{ marginLeft: '11px' }}
                    width="20px"
                    height="20.8px"
                    src="/images/review.png"
                    alt="Svg Asset 2" /><img
                    style={{ marginLeft: '11px' }}
                    width="19px"
                    height="20.8px"
                    src="/images/review.png"
                    alt="Svg Asset 1" />
                  <div
                    style={{ marginTop: '1px', marginLeft: '18px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '76px', whiteSpace: 'nowrap', color: 'rgba(0,0,0,0.5)', lineHeight: '20px', fontWeight: 500 }}>
                    2025-2-3
                  </div>
                </div>
                <div
                  style={{ marginLeft: '4px', fontFamily: '"Inter", sans-serif', fontSize: '15px', width: '460px', color: 'rgba(0,0,0,0.5)', lineHeight: '20px', fontWeight: 400 }}>
                  The LPG delivery was prompt and the pricing was competitive. The customer service team was very responsive to all my questions. Will be ordering again soon!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;