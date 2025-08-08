import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('about');
  const navigate = useNavigate();

  const showSection = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className={styles.profileContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <img 
            className={styles.sbTopIcon} 
            src="/images/back.png" 
            alt="Back"
            onClick={() => navigate(-1)}
            style={{ cursor: 'pointer' }}
          />
          <Link to="/loggedin">
            <img
              className={styles.sbLogo} 
              src="/images/profilelogo.png" 
              alt="Logo"
            />
          </Link>

          {/* Added Profile item */}
          <Link to="/user" className={styles.sbItem}>
            <span className={styles.sbItemIcon}>
              <img src="/images/userprofile.png" alt="Profile" />
            </span>
            <span className={styles.sbItemText}>Profile</span>
          </Link>
          
          <Link to="/general-info" className={styles.sbItem}>
            <span className={styles.sbItemIcon}>
              <img src="/images/general.png" alt="General"/>
            </span>
            <span className={styles.sbItemText}>General Info</span>
          </Link>
          <Link to="/settings" className={styles.sbItem}>
            <span className={styles.sbItemIcon}>
              <img src="/images/settings.png" alt="Settings"/>
            </span>
            <span className={styles.sbItemText}>Settings</span>
          </Link>
          <Link to="/notifications" className={styles.sbItem}>
            <span className={styles.sbItemIcon}>
              <img src="/images/notificationn.png" alt="Notifications" />
            </span>
            <span className={styles.sbItemText}>Notification</span>
            <span className={styles.sbItemRight}>
              <img src="/images/toggle.png" alt="Toggle" />
            </span>
          </Link>
          <Link to="/support" className={styles.sbItem}>
            <span className={styles.sbItemIcon}>
              <img src="/images/support.png" alt="Support"/>
            </span>
            <span className={styles.sbItemText}>Support & Help</span>
          </Link>
          <Link to="/legal" className={styles.sbItem}>
            <span className={styles.sbItemIcon}>
              <img src="/images/legal.png" alt="Legal"/>
            </span>
            <span className={styles.sbItemText}>Legal & Account</span>
          </Link>
          <Link to="" className={styles.sbItem}>
            <span className={styles.sbItemIcon}>
              <img src="/images/aboutt.png" alt="About"/>
            </span>
            <span className={styles.sbItemText}>About App</span>
          </Link>
          <div className={styles.logoutBtn}>
            <div className={styles.logoutBtnInner}>
              <div className={styles.logoutText}>Log Out</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={styles.mainContent}>
        <div className={styles.hero}>
          <img className={styles.heroMain} src="/images/post.png" alt="Hero Image"/>
          <img className={styles.heroLeft} src="/images/seller2.png" alt="Left Icon"/>
          <img className={styles.heroRight} src="/images/sharee.png" alt="Right Icon"/>
        </div>

        {/* Updated block */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '300px', width: '800px', height: '131px', margin: '20px auto 0' }}>
          <div style={{ marginTop: '9px', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', width: '218px', height: '122px' }}>
            <div className={styles.nameLine}>
              <div className={styles.companyName}>SolarWave LLC</div>
              <div className={styles.verified}>
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
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '16px', width: '325px', height: '120px' }}>
            <div style={{ width: '100%', height: '49px', borderRadius: '10px', backgroundColor: 'rgba(255,140,0,1)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px', gap: '12px' }}>
              <img src="/images/connect.png" alt="Connect Icon" style={{ width: '30px', height: '30px' }} />
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'white', fontWeight: 600, lineHeight: '1', whiteSpace: 'nowrap' }}>
                Connect</span>
            </div>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', color: 'rgba(25,25,25,1)', fontWeight: 600, whiteSpace: 'nowrap' }}>
              5.2K Followers</div>
          </div>
        </div>

        {/* Start Chat Button */}
        <div className={styles.startChatBtn}>
          <img src="/images/startchat.png" alt="Chat Icon" />
          <div>Start Chat</div>
        </div>

        {/* Navigation Tabs */}
        <div className={styles.navTabsContainer}>
          <div className={styles.navTabs}>
            <div 
              className={`${styles.navTab} ${activeSection === 'about' ? styles.navTabActive : ''}`} 
              onClick={() => showSection('about')}
            >
              About
              <div className={styles.navTabIndicator}></div>
            </div>
            <div 
              className={`${styles.navTab} ${activeSection === 'posts' ? styles.navTabActive : ''}`} 
              onClick={() => showSection('posts')}
            >
              Posts
              <div className={styles.navTabIndicator}></div>
            </div>
            <div 
              className={`${styles.navTab} ${activeSection === 'reviews' ? styles.navTabActive : ''}`} 
              onClick={() => showSection('reviews')}
            >
              Reviews
              <div className={styles.navTabIndicator}></div>
            </div>
          </div>
          <div className={styles.navTabsLine}></div>
        </div>

        {/* Content Sections */}
        <div id="about" className={`${styles.contentSection} ${activeSection === 'about' ? styles.contentSectionActive : ''}`}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutTitle}>About</div>
            <div className={styles.aboutDescription}>
              SolarWave is a Verified energy supplier based in Nairobi.<br />
              We provide clean diesel, LPG and solar solutions with reliable delivery and transparent pricing
            </div>
            <div className={styles.servicesTitle}>Services Provided</div>
            <ul className={styles.servicesList}>
              <li>Diesel & LPG Distribution</li>
              <li>Commercial Solar System Installations</li>
              <li>On-time Delivery Across Kenya</li>
              <li>Verified Metered Fuel Supply</li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className={styles.postsHeader}>
            <div className={styles.postsTitle}>Recent Posts</div>
            <a href="#" className={styles.seeAllLink}>
              <span className={styles.seeAllText}>See All</span>
              <img width="18px" height="23px" src="/images/arrow.png" alt="Arrow" />
            </a>
          </div>

          <div className={styles.postsGrid}>
            {/* Product 1 */}
            <div className={styles.postCard}>
              <img className={styles.postImage} src="/images/product1.png" alt="Diesel" />
              <div className={styles.postTitle}>Diesel (5000L Min.)</div>
              <div className={styles.postCompany} style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <a href="#" style={{ textDecoration: 'none' }}>
                  <div className={styles.postCompanyName}>Aidmax Energy</div>
                </a>
                <div className={styles.verifiedBadge} style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                  <img src="/images/verified.png" width="13" height="13" alt="Verified" />
                </div>
              </div>
              <div className={styles.locationInfo}>
                <img width="14" height="16" src="/images/location_.png" alt="Location" />
                <div>Nairobi, Kenya</div>
              </div>
              <div className={styles.priceInfo}>KES 183/litre</div>
              <div className={styles.timeInfo}>
                <img width="17" height="17" src="/images/clock.png" alt="Clock" />
                <div>Posted 15 min ago</div>
              </div>
              <div className={styles.postActions}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div className={styles.startChatBtnSmall}>
                  <div className={styles.startChatText}>Start Chat</div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className={styles.postCard}>
              <img className={styles.postImage} src="/images/product2.png" alt="Gas-oil" />
              <div className={styles.postTitle}>Gas-oil (10,000L Min.)</div>
              <div className={styles.postCompany} style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <div className={styles.postCompanyName}>Hass Petroleum</div>
                <div className={styles.verifiedBadge} style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/images/verified.png" width="13" height="13" alt="Verified" />
                </div>
              </div>
              <div className={styles.locationInfo}>
                <img width="14" height="16" src="/images/location_.png" alt="Location" />
                <div>Kisumu</div>
              </div>
              <div className={styles.priceInfo}>KES 183/litre</div>
              <div className={styles.timeInfo}>
                <img width="17" height="17" src="/images/clock.png" alt="Clock" />
                <div>Posted 1h ago</div>
              </div>
              <div className={styles.postActions}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div className={styles.startChatBtnSmall}>
                  <div className={styles.startChatText}>Start Chat</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="posts" className={`${styles.contentSection} ${activeSection === 'posts' ? styles.contentSectionActive : ''}`}>
          <div className={styles.postsGrid}>
            {/* Post 1 - Description before image */}
            <div className={styles.postCard}>
              <div className={styles.postHeader}>
                <img className={styles.profileImage} src="/images/seller2.png" alt="Profile Image" />
                <div className={styles.profileInfo}>
                  <div className={styles.profileName}>
                    SolarWave LLC
                    <img src="/images/verified1.png" width="25" height="27" alt="Verified" />
                  </div>
                  <div className={styles.ratingContainer}>
                    <img width="18.1px" height="19px" src="/images/review.png" alt="Rating" />
                    <div className={styles.ratingText}>4.8</div>
                  </div>
                </div>
              </div>
              <div className={styles.postDescription} style={{ margin: '10px 0', width: '100%' }}>
                Diesel price update: Be the first to get the new KES 183/litre rate on all bulk orders
              </div>
              <img className={styles.postImage} src="/images/product1.png" alt="Post Image" />
              <div className={styles.locationInfo} style={{ marginTop: '10px' }}>
                <img width="14" height="16" src="/images/location_.png" alt="Location" />
                <div>Nairobi, Kenya</div>
              </div>
              <div className={styles.timeInfo} style={{ marginTop: '10px' }}>
                <img width="17" height="17" src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>Posted 15 min ago</div>
              </div>
              <div className={styles.postActions} style={{ marginTop: '15px' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Comment" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Share" />
                <div className={styles.startChatBtnSmall} style={{ marginLeft: 'auto' }}>
                  <div className={styles.startChatText}>Start Chat</div>
                </div>
              </div>
            </div>

            {/* Post 2 - Description before image */}
            <div className={styles.postCard}>
              <div className={styles.postHeader}>
                <img className={styles.profileImage} src="/images/seller1.png" alt="Profile Image" />
                <div className={styles.profileInfo}>
                  <div className={styles.profileName}>
                    Hass Petroleum
                    <img src="/images/verified1.png" width="25" height="27" alt="Verified" />
                  </div>
                  <div className={styles.ratingContainer}>
                    <img width="18.1px" height="19px" src="/images/review.png" alt="Rating" />
                    <div className={styles.ratingText}>4.6</div>
                  </div>
                </div>
              </div>
              <div className={styles.postDescription} style={{ margin: '10px 0', width: '100%' }}>
                Gas-oil special offer: 10,000L minimum order at KES 183/litre
              </div>
              <img className={styles.postImage} src="/images/product2.png" alt="Post Image" />
              <div className={styles.locationInfo} style={{ marginTop: '10px' }}>
                <img width="14" height="16" src="/images/location_.png" alt="Location" />
                <div>Kisumu</div>
              </div>
              <div className={styles.timeInfo} style={{ marginTop: '10px' }}>
                <img width="17" height="17" src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>Posted 1h ago</div>
              </div>
              <div className={styles.postActions} style={{ marginTop: '15px' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Comment" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Share" />
                <div className={styles.startChatBtnSmall} style={{ marginLeft: 'auto' }}>
                  <div className={styles.startChatText}>Start Chat</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="reviews" className={`${styles.contentSection} ${activeSection === 'reviews' ? styles.contentSectionActive : ''}`}>
          <div className={styles.ratingsContainer}>
            <div className={styles.ratingSummary}>
              <div className={styles.ratingTitle}>Ratings and Review</div>
              <div className={styles.ratingValue}>4.8</div>
              <div className={styles.starsContainer}>
                <img className={styles.star} src="/images/review.png" alt="Star" />
                <img className={styles.star} src="/images/review.png" alt="Star" />
                <img className={styles.star} src="/images/review.png" alt="Star" />
                <img className={styles.star} src="/images/review.png" alt="Star" />
                <img className={styles.star} src="/images/review.png" alt="Star" />
              </div>
              <div className={styles.reviewsCount}>26 Reviews</div>
            </div>
            
            <div className={styles.ratingsDistribution}>
              {/* Rating 5 */}
              <div className={styles.ratingRow}>
                <div className={styles.ratingNumber}>5</div>
                <div className={styles.ratingBarContainer}>
                  <div className={`${styles.ratingBar} ${styles.bar5}`}></div>
                </div>
              </div>
              
              {/* Rating 4 */}
              <div className={styles.ratingRow}>
                <div className={styles.ratingNumber}>4</div>
                <div className={styles.ratingBarContainer}>
                  <div className={`${styles.ratingBar} ${styles.bar4}`}></div>
                </div>
              </div>
              
              {/* Rating 3 */}
              <div className={styles.ratingRow}>
                <div className={styles.ratingNumber}>3</div>
                <div className={styles.ratingBarContainer}>
                  <div className={`${styles.ratingBar} ${styles.bar3}`}></div>
                </div>
              </div>
              
              {/* Rating 2 */}
              <div className={styles.ratingRow}>
                <div className={styles.ratingNumber}>2</div>
                <div className={styles.ratingBarContainer}>
                  <div className={`${styles.ratingBar} ${styles.bar2}`}></div>
                </div>
              </div>
              
              {/* Rating 1 */}
              <div className={styles.ratingRow}>
                <div className={styles.ratingNumber}>1</div>
                <div className={styles.ratingBarContainer}>
                  <div className={`${styles.ratingBar} ${styles.bar1}`}></div>
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