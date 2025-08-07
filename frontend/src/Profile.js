import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('about');
  const navigate = useNavigate();

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="profile-container">
      

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