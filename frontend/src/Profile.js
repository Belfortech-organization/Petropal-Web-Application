import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Profile = () => {
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
          margin-top:15px; /* Adjusted from 22px to 15px */
        }
        
        .sb-item:first-of-type { 
          margin-top:25px; /* Adjusted from 32px to 25px */
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

        .content-wrapper {
          padding:0px;
          border-top: 1px solid #eee;
        }

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

        /* Start Chat Button */
        .start-chat-btn {
          width: 800px;
          height: 68px;
          border-radius: 10px;
          background-color: rgba(255,140,0,1);
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 25px auto;
          gap: 15px;
          cursor: pointer;
        }
        
        .start-chat-btn img {
          width: 32px;
          height: 30px;
        }
        
        .start-chat-btn div {
          font-family: 'Inter', sans-serif;
          font-size: 27px;
          white-space: nowrap;
          color: #fff;
          font-weight: 600;
          line-height: 18.5px;
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

        /* About section specific styles */
        .about-content {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: start;
        }
        
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

        /* Recent Posts section */
        .posts-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 45px 0 25px 0;
        }
        
        .posts-title {
          font-family: 'Inter', sans-serif;
          font-size: 30px;
          color: rgba(0,0,0,1);
          line-height: 48px;
          font-weight: 600;
        }
        
        .see-all-link {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
        }
        
        .see-all-text {
          font-family: 'Inter', sans-serif;
          font-size: 26px;
          color: rgba(1,47,107,1);
          line-height: 22.4px;
          letter-spacing: -0.4px;
          font-weight: 500;
        }
        
        .posts-grid {
          display: flex;
          gap: 140px;
          flex-wrap: wrap;
        }
        
        .post-card {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: start;
          width: 310px;
        }
        
        .post-image {
          width: 310px;
          height: 298px;
          border-radius: 10px;
          object-fit: cover;
        }
        
        .post-title {
          margin-top: 14px;
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          white-space: nowrap;
          color: rgba(18,18,18,1);
          line-height: 18.5px;
          letter-spacing: -0.2px;
          font-weight: 600;
        }
        
        .post-company {
          margin-top: 11px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 4px;
          width: 247px;
          height: 19px;
        }
        
        .post-company-name {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          white-space: nowrap;
          color: rgba(18,18,18,1);
          line-height: 18.5px;
          letter-spacing: -0.01em;
          font-weight: 500;
        }
        
        .verified-badge {
          border-radius: 9.5px;
          width: 19px;
          height: 19px;
          background-color: rgba(1,47,107,1);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .location-info {
          margin-top: 11px;
          display: flex;
          align-items: center;
          gap: 8px;
          width: 138.3px;
          height: 19px;
        }
        
        .price-info {
          margin-top: 14px;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          white-space: nowrap;
          color: rgba(18,18,18,1);
          line-height: 100%;
          font-weight: 400;
        }
        
        .time-info {
          margin-top: 12px;
          display: flex;
          align-items: center;
          gap: 11px;
          width: 167px;
          height: 19px;
        }
        
        .post-actions {
          margin-top: 11px;
          display: flex;
          justify-content: start;
          align-items: center;
          width: 100%;
        }
        
        .start-chat-btn-small {
          border-radius: 7.8px;
          border: 0.6px solid rgb(217,217,217);
          width: 90px;
          height: 32px;
          background-color: rgba(255,140,0,1);
          margin-left: auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .start-chat-text {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,1);
          line-height: 14.2px;
          font-weight: 600;
        }

        /* Posts section specific styles */
        .post-container {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: start;
          width: 440px;
          margin-bottom: 40px;
        }
        
        .post-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          width: 288px;
          height: 74px;
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
          justify-content: space-between;
          align-items: start;
          gap: 7px;
          width: 182px;
          height: 58px;
        }
        
        .profile-name {
          font-family: 'Inter', sans-serif;
          font-size: 25px;
          white-space: nowrap;
          color: rgba(0,0,0,1);
          line-height: 100%;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .rating-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 7px;
          width: 53px;
          height: 21px;
        }
        
        .rating-text {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          white-space: nowrap;
          color: rgba(25,25,25,0.5);
          line-height: 18.5px;
          letter-spacing: -0.01em;
          font-weight: 400;
        }
        
        .post-description {
          margin-top: 47px;
          margin-left: 3px;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          width: 437px;
          color: rgba(0,0,0,0.5);
          line-height: 20px;
          font-weight: 400;
        }
        
        .post-image-large {
          border-radius: 10px;
          width: 437px;
          height: 298px;
          overflow: hidden;
          margin-top: 56px;
          margin-left: 3px;
          object-fit: cover;
        }
        
        .post-location {
          margin-top: 14px;
          margin-left: 3px;
          font-family: 'Inter', sans-serif;
          font-size: 19px;
          white-space: nowrap;
          color: rgba(18,18,18,1);
          line-height: 18.5px;
          letter-spacing: -0.2px;
          font-weight: 500;
        }
        
        .post-time {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 13px;
          width: 192px;
          height: 22px;
        }
        
        .time-text {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          white-space: nowrap;
          color: rgba(130,130,130,1);
          line-height: 100%;
          font-weight: 400;
        }
        
        .post-actions-new {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-top: 21px;
        }
        
        .action-icons {
          display: flex;
          gap: 18px;
        }
        
        .start-chat-btn-new {
          border-radius: 7.1px;
          border: 0.6px solid rgb(217,217,217);
          width: 82px;
          height: 29px;
          background-color: rgba(255,140,0,1);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .start-chat-text-new {
          font-family: 'Inter', sans-serif;
          font-size: 10.4px;
          white-space: nowrap;
          color: rgba(255,255,255,1);
          line-height: 14.2px;
          font-weight: 600;
        }
        
        .posts-grid-new {
          display: flex;
          flex-direction: column;
          gap: 40px;
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
          
          /* Posts Section Grid Layout */
          #posts .posts-grid {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
            margin-top: 20px;
          }
          
          /* Post Card Styling */
          #posts .post-card {
            width: calc(50% - 15px);
            padding: 20px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 30px;
          }
          
          /* Post Header */
          #posts .post-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
          }
          
          /* Profile Image */
          #posts .profile-image {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 15px;
          }
          
          /* Profile Info */
          #posts .profile-info {
            display: flex;
            flex-direction: column;
          }
          
          /* Post Image */
          #posts .post-image {
            width: 100%;
            height: 200px;
            border-radius: 8px;
            object-fit: cover;
            margin-bottom: 10px;
          }
          
          /* Responsive Adjustments */
          @media (max-width: 768px) {
            #posts .post-card {
              width: 100%;
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

          {/* Added Profile item */}
          <Link to="/user" className="sb-item">
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
            <div style={{ width: '325px', height: '49px', borderRadius: '10px', backgroundColor: 'rgba(255,140,0,1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '81px', paddingLeft: '84px', gap: '34px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '32px' }}>
                <img width="30.5px" height="30px" src="/images/connect.png" alt="Svg Asset 1" />
              </div>
              <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '23px', minWidth: '94px', whiteSpace: 'nowrap', color: 'rgba(255,255,255,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 600 }}>
                Connect
              </div>
            </div>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 600 }}>
              5.2K Followers
            </div>
          </div>
        </div>

        {/* Start Chat Button */}
        <div className="start-chat-btn">
          <img src="/images/startchat.png" alt="Chat Icon" />
          <div>Start Chat</div>
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
          <div className="about-content">
            <div className="about-title">About</div>
            <div className="about-description">
              SolarWave is a Verified energy supplier based in Nairobi.<br />
              We provide clean diesel, LPG and solar solutions with reliable delivery and transparent pricing
            </div>
            <div className="services-title">Services Provided</div>
            <ul className="services-list">
              <li>Diesel & LPG Distribution</li>
              <li>Commercial Solar System Installations</li>
              <li>On-time Delivery Across Kenya</li>
              <li>Verified Metered Fuel Supply</li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className="posts-header">
            <div className="posts-title">Recent Posts</div>
            <a href="#" className="see-all-link">
              <span className="see-all-text">See All</span>
              <img width="18px" height="23px" src="/images/arrow.png" alt="Arrow" />
            </a>
          </div>

          <div className="posts-grid">
            {/* Product 1 */}
            <div className="post-card">
              <img className="post-image" src="/images/product1.png" alt="Diesel" />
              <div className="post-title">Diesel (5000L Min.)</div>
              <div className="post-company" style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <a href="#" style={{ textDecoration: 'none' }}>
                  <div className="post-company-name">Aidmax Energy</div>
                </a>
                <div className="verified-badge" style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                  <img src="/images/verified.png" width="13" height="13" alt="Verified" />
                </div>
              </div>
              <div className="location-info">
                <img width="14" height="16" src="/images/location_.png" alt="Location" />
                <div>Nairobi, Kenya</div>
              </div>
              <div className="price-info">KES 183/litre</div>
              <div className="time-info">
                <img width="17" height="17" src="/images/clock.png" alt="Clock" />
                <div>Posted 15 min ago</div>
              </div>
              <div className="post-actions">
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div className="start-chat-btn-small">
                  <div className="start-chat-text">Start Chat</div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="post-card">
              <img className="post-image" src="/images/product2.png" alt="Gas-oil" />
              <div className="post-title">Gas-oil (10,000L Min.)</div>
              <div className="post-company" style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <div className="post-company-name">Hass Petroleum</div>
                <div className="verified-badge" style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/images/verified.png" width="13" height="13" alt="Verified" />
                </div>
              </div>
              <div className="location-info">
                <img width="14" height="16" src="/images/location_.png" alt="Location" />
                <div>Kisumu</div>
              </div>
              <div className="price-info">KES 183/litre</div>
              <div className="time-info">
                <img width="17" height="17" src="/images/clock.png" alt="Clock" />
                <div>Posted 1h ago</div>
              </div>
              <div className="post-actions">
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div className="start-chat-btn-small">
                  <div className="start-chat-text">Start Chat</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="posts" className={`content-section ${activeSection === 'posts' ? 'active' : ''}`}>
          <div className="posts-grid">
            {/* Post 1 - Description before image */}
            <div className="post-card">
              <div className="post-header">
                <img className="profile-image" src="/images/seller2.png" alt="Profile Image" />
                <div className="profile-info">
                  <div className="profile-name">
                    SolarWave LLC
                    <img src="/images/verified1.png" width="25" height="27" alt="Verified" />
                  </div>
                  <div className="rating-container">
                    <img width="18.1px" height="19px" src="/images/review.png" alt="Rating" />
                    <div className="rating-text">4.8</div>
                  </div>
                </div>
              </div>
              <div className="post-description" style={{ margin: '10px 0', width: '100%' }}>
                Diesel price update: Be the first to get the new KES 183/litre rate on all bulk orders
              </div>
              <img className="post-image" src="/images/product1.png" alt="Post Image" />
              <div className="location-info" style={{ marginTop: '10px' }}>
                <img width="14" height="16" src="/images/location_.png" alt="Location" />
                <div>Nairobi, Kenya</div>
              </div>
              <div className="time-info" style={{ marginTop: '10px' }}>
                <img width="17" height="17" src="/images/clock.png" alt="Clock" />
                <div className="time-text">Posted 15 min ago</div>
              </div>
              <div className="post-actions" style={{ marginTop: '15px' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Comment" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Share" />
                <div className="start-chat-btn-small" style={{ marginLeft: 'auto' }}>
                  <div className="start-chat-text">Start Chat</div>
                </div>
              </div>
            </div>

            {/* Post 2 - Description before image */}
            <div className="post-card">
              <div className="post-header">
                <img className="profile-image" src="/images/seller1.png" alt="Profile Image" />
                <div className="profile-info">
                  <div className="profile-name">
                    Hass Petroleum
                    <img src="/images/verified1.png" width="25" height="27" alt="Verified" />
                  </div>
                  <div className="rating-container">
                    <img width="18.1px" height="19px" src="/images/review.png" alt="Rating" />
                    <div className="rating-text">4.6</div>
                  </div>
                </div>
              </div>
              <div className="post-description" style={{ margin: '10px 0', width: '100%' }}>
                Gas-oil special offer: 10,000L minimum order at KES 183/litre
              </div>
              <img className="post-image" src="/images/product2.png" alt="Post Image" />
              <div className="location-info" style={{ marginTop: '10px' }}>
                <img width="14" height="16" src="/images/location_.png" alt="Location" />
                <div>Kisumu</div>
              </div>
              <div className="time-info" style={{ marginTop: '10px' }}>
                <img width="17" height="17" src="/images/clock.png" alt="Clock" />
                <div className="time-text">Posted 1h ago</div>
              </div>
              <div className="post-actions" style={{ marginTop: '15px' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Comment" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Share" />
                <div className="start-chat-btn-small" style={{ marginLeft: 'auto' }}>
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

export default Profile;