import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DownloadModal from './DownloadModal';
import ContactModal from './ContactModal';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Inter:wght@400;500;600;700;800&family=Lato:wght@500&family=Roboto:wght@400;500&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: #f4f4f4;
    overflow-x: hidden;
  }

  /* Header Section */
  .nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100px;
  background-color: rgba(1,47,107,1);
  padding: 20px 45px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

  .top-nav {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
  }

  .logo {
    width: 151.8px;
    height: 44px;
  }

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

  /* Main Content */
  .content-container {
    max-width: 1299px;
    margin: 0 auto;
    padding: 110px 20px;
  }

  .about-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 26px;
    width: 100%;
    margin-top: 18px;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    max-width: 640px;
    margin-top: 45px;
  }

  .about-title {
    font-family: 'Merriweather', serif;
    font-size: 49px;
    color: rgba(0, 20, 45, 1);
    line-height: 100%;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .about-text {
    font-family: 'Inter', sans-serif;
    font-size: 21px;
    width: 100%;
    color: rgba(0, 0, 0, 1);
    line-height: 26px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  .feature-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 10px;
  }

  .feature-item {
  border-radius: 10px;
  width: calc(50% - 10px);
  height: 138px;
  background-color: rgba(138, 159, 187, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  gap: 5px; /* Add space between the two text elements */
}


  .feature-item-large-text {
    font-family: 'Inter', sans-serif;
    font-size: 45px;
    white-space: nowrap;
    color: rgba(255,140,0,1);
    text-align: center;
    line-height: 100%;
    font-weight: 700;
  }

  .feature-item-small-text {
    font-family: 'Inter', sans-serif;
    font-size: 21px;
    white-space: nowrap;
    color: rgba(0,0,0,1);
    line-height: 26px;
    font-weight: 500;
  }

  .single-feature {
  border-radius: 10px;
  width: 310px;
  height: 138px;
  background-color: rgba(138, 159, 187, 0.1);
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  gap: 5px;
  margin-left: 150px;
}

  .image-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 640px;
  }

  .main-image {
    width: 640px;
    height: 519px;
    border-radius: 10px;
    object-fit: cover;
  }

  .image-grid {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .image-grid-item {
    width: calc(50% - 10px);
    background-color: rgba(217,217,217,1);
    min-height: 349px;
  }

  /* Testimonials Section */
  .testimonials-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 80px;
    width: 1300px;
    height: 374px;
    margin: 80px auto;
  }

  .testimonials-title {
    font-family: 'Merriweather', serif;
    font-size: 49px;
    white-space: nowrap;
    color: rgba(0,20,45,1);
    line-height: 100%;
    font-weight: 700;
    text-align: center;
  }

  .testimonials-grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 1300px;
    height: 232px;
  }

  .testimonial-card {
    border-radius: 10px;
    width: 310px;
    background-color: rgba(138,159,187,0.1);
    min-height: 232px;
  }

  /* News Section */
  .news-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 1300px;
    margin: 80px auto;
  }

  .news-title {
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
    min-width: 520px;
    white-space: nowrap;
    color: rgba(0,0,0,1);
    line-height: 48px;
    font-weight: 700;
  }

  .news-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    width: 100%;
  }

  .news-row {
    display: flex;
    justify-content: center;
    gap: 40px;
    width: 100%;
  }

  .news-card {
    border: 1px solid black;
    border-radius: 6px;
    width: 407px;
    height: 132px;
    display: flex;
    padding: 16px;
    gap: 16px;
    background-color: white;
  }

  .news-card-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  .news-card-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .news-card-title {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: black;
    line-height: 28px;
    font-weight: 500;
  }

  .news-card-description {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: black;
    line-height: 24px;
    font-weight: 400;
  }

  .footer {
    width: 1445px;
    height: 231px;
    background-color: rgba(1,47,107,1);
    margin-top: 101px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    padding-top: 39px;
    padding-bottom: 38px;
    padding-right: 72px;
    gap: 72px;
  }
  
  .footer-content {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    width: 770px;
    height: 26px;
  }
  
  .copyright {
    font-family: 'Inter', sans-serif;
    font-size: 21px;
    color: rgba(255,255,255,1);
    line-height: 26px;
    font-weight: 500;
  }
  
  .footer-links {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    color: rgba(255,255,255,1);
    line-height: 16px;
    font-weight: 500;
  }

  @media (max-width: 1200px) {
    .testimonials-container,
    .news-container {
      width: 100%;
      padding: 0 20px;
    }

    .testimonials-grid,
    .news-row {
      flex-wrap: wrap;
    }

    .testimonial-card,
    .news-card {
      width: calc(50% - 20px);
    }
  }

  @media (max-width: 768px) {
    .testimonial-card,
    .news-card {
      width: 100%;
    }

    .news-title {
      min-width: auto;
      white-space: normal;
    }
  }
`;

const About = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showDownloadModal && e.target.id === 'downloadModalOverlay') {
        setShowDownloadModal(false);
      }
      if (showContactModal && e.target.id === 'contactModalOverlay') {
        setShowContactModal(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDownloadModal, showContactModal]);

  // Close modals with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowDownloadModal(false);
        setShowContactModal(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="notifications-container">
        {/* Header */}
        <div className="nav-bar">
          <div className="top-nav">
            <Link to="/loggedin">
              <img
                style={{ width: '138px', height: '40px' }}
                src="/images/logo_.png"
                alt="Messages Logo"
              />
            </Link>

            <div className="category-dropdown">
              <div className="category-text">Search by Category</div>
              <img className="dropdown-icon" src="/images/dropp.png" alt="Dropdown" />
            </div>

            <div className="search-bar">
              <div className="search-section">
                <img className="search-icon" src="/images/search.png" alt="Search" />
                <div className="search-placeholder">Products & Services</div>
              </div>
              <img className="divider" src="/images/Line.png" alt="Divider" />
              <img style={{ position: 'relative', left: '127px' }} className="divider" src="/images/Line.png" alt="Divider" />

              <div className="location-section">
                <img className="location-icon" src="/images/location.png" alt="Location" />
                <div className="location-text">Location</div>
                <div className="search-button">
                  <div className="search-button-text">Search</div>
                </div>
              </div>
            </div>

            <div className="user-section">
              <div className="language-selector">
                <div className="language-text">English</div>
                <img className="dropdown-icon" src="/images/drop.png" alt="Dropdown" />
              </div>
              <div className="profile-section">
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
        </div>

        {/* Content */}
        <div className="content-container">
          <div className="about-container">
            {/* Left: Text and Features */}
            <div className="text-content">
              <div className="about-title">About Petropal 2.0™</div>
              <div className="about-text">
                Petropal 2.0 is Africa's leading digital fuel trading platform, designed
                to simplify energy trade through smart technology and trusted connections.
                We connect buyers and sellers of petroleum products with verified
                profiles, real-time search, and tools for secure offline deal closure.
              </div>
              <div className="about-text">
                With mobile-first design, built-in analytics, and AI-ready features,
                Petropal 2.0 empowers energy businesses to trade faster, smarter, and more
                transparently across the continent.
              </div>

              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-item-large-text">185%</div>
                  <div className="feature-item-small-text">Company Growth</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-large-text">12,000</div>
                  <div className="feature-item-small-text">Users Helped</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-large-text">4.8/5+</div>
                  <div className="feature-item-small-text">Customer Rating</div>
                </div>
                <div className="feature-item">
                  <div className="feature-item-large-text">2,100+</div>
                  <div className="feature-item-small-text">Verified Suppliers</div>
                </div>
              </div>

              <div className="single-feature">
                <div className="feature-item-large-text">87%</div>
                <div className="feature-item-small-text">Transaction Success Rate</div>
              </div>
            </div>

            {/* Right: Image and Grid */}
            <div className="image-content">
              <img className="main-image" src="/images/about.png" alt="Petropal Platform" />
              <div className="image-grid">
                <div className="image-grid-item"></div>
                <div className="image-grid-item"></div>
              </div>
            </div>
          </div>
          
          {/* Testimonials Section */}
<div className="testimonials-container">
  <div className="testimonials-title">What Our Customers Say</div>
  <div className="testimonials-grid">
    <div className="testimonial-card">
      <div style={{ width: '310px', height: '232px', borderRadius: '10px', backgroundColor: 'rgba(138,159,187,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', paddingTop: '14px' }}>
        <img
          style={{ width: '51px', height: '51px' }}
          src="/images/testimonial.png"
          alt="Image Asset 1"
          width="51px"
          height="51px" />
        <div
          style={{ marginTop: '48px', fontFamily: "'Inter', sans-serif", fontSize: '16px', textAlign: 'center', width: '261px', color: 'rgba(0,20,45,1)', lineHeight: '24px', fontWeight: 300, fontStyle: 'italic' }}>
          "I found a trusted diesel supplier in minutes. The platform is fast and reliable."
        </div>
        <div
          style={{ marginTop: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '70px', width: '261.3px', height: '24px' }}>
          <div
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', minWidth: '133px', whiteSpace: 'nowrap', color: 'rgba(0,20,45,1)', lineHeight: '24px', fontWeight: 500 }}>
            Fuel Buyer – Nairobi
          </div>
          <img
            width="58.3px"
            height="9.8px"
            src="/images/ratings.png"
            alt="Svg Asset 1" />
        </div>
      </div>
    </div>
    <div className="testimonial-card">
      <div style={{ width: '310px', height: '232px', borderRadius: '10px', backgroundColor: 'rgba(138,159,187,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', paddingTop: '14px' }}>
        <img
          style={{ width: '51px', height: '51px' }}
          src="/images/testimonial1.png"
          alt="Image Asset 2"
          width="51px"
          height="51px" />
        <div
          style={{ marginTop: '48px', fontFamily: "'Inter', sans-serif", fontSize: '16px', textAlign: 'center', width: '261px', color: 'rgba(0,20,45,1)', lineHeight: '24px', fontWeight: 300, fontStyle: 'italic' }}>
          "Petropal helped me expand my customer base across East Africa effortlessly."
        </div>
        <div
          style={{ marginTop: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '70px', width: '261.3px', height: '24px' }}>
          <div
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', minWidth: '133px', whiteSpace: 'nowrap', color: 'rgba(0,20,45,1)', lineHeight: '24px', fontWeight: 500 }}>
            Supplier – Kampala
          </div>
          <img
            width="58.3px"
            height="9.8px"
            src="/images/ratings.png"
            alt="Svg Asset 1" />
        </div>
      </div>
    </div>
    <div className="testimonial-card">
      <div style={{ width: '310px', height: '232px', borderRadius: '10px', backgroundColor: 'rgba(138,159,187,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', paddingTop: '14px' }}>
        <img
          style={{ width: '51px', height: '51px' }}
          src="/images/testimonial.png"
          alt="Image Asset 3"
          width="51px"
          height="51px" />
        <div
          style={{ marginTop: '48px', fontFamily: "'Inter', sans-serif", fontSize: '16px', textAlign: 'center', width: '261px', color: 'rgba(0,20,45,1)', lineHeight: '24px', fontWeight: 300, fontStyle: 'italic' }}>
          "The verification system gave me confidence in my first cross-border transaction."
        </div>
        <div
          style={{ marginTop: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '70px', width: '261.3px', height: '24px' }}>
          <div
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', minWidth: '133px', whiteSpace: 'nowrap', color: 'rgba(0,20,45,1)', lineHeight: '24px', fontWeight: 500 }}>
            Trader – Lagos
          </div>
          <img
            width="58.3px"
            height="9.8px"
            src="/images/ratings.png"
            alt="Svg Asset 1" />
        </div>
      </div>
    </div>
    <div className="testimonial-card">
      <div style={{ width: '310px', height: '232px', borderRadius: '10px', backgroundColor: 'rgba(138,159,187,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', paddingTop: '14px' }}>
        <img
          style={{ width: '51px', height: '51px' }}
          src="/images/testimonial1.png"
          alt="Image Asset 4"
          width="51px"
          height="51px" />
        <div
          style={{ marginTop: '48px', fontFamily: "'Inter', sans-serif", fontSize: '16px', textAlign: 'center', width: '261px', color: 'rgba(0,20,45,1)', lineHeight: '24px', fontWeight: 300, fontStyle: 'italic' }}>
          "Saved 15% on procurement costs thanks to Petropal's competitive marketplace."
        </div>
        <div
          style={{ marginTop: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '70px', width: '261.3px', height: '24px' }}>
          <div
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', minWidth: '133px', whiteSpace: 'nowrap', color: 'rgba(0,20,45,1)', lineHeight: '24px', fontWeight: 500 }}>
            Procurement – Dar es Salaam
          </div>
          <img
            width="58.3px"
            height="9.8px"
            src="/images/ratings.png"
            alt="Svg Asset 1" />
        </div>
      </div>
    </div>
  </div>
</div>

          {/* News Section */}
          <div className="news-container">
            <div className="news-title">Industry News & Events</div>
            <div className="news-grid">
              {/* News Row 1 */}
              <div className="news-row">
                <div className="news-card">
                  <img className="news-card-image" src="/images/update2.png" alt="News" />
                  <div className="news-card-content">
                    <div className="news-card-title">New Fuel Regulations Announced</div>
                    <div className="news-card-description">Click to read more</div>
                  </div>
                </div>
                <div className="news-card">
                  <img className="news-card-image" src="/images/update1.png" alt="News" />
                  <div className="news-card-content">
                    <div className="news-card-title">Oil Price Trends Q3 2023</div>
                    <div className="news-card-description">Click to read more</div>
                  </div>
                </div>
                <div className="news-card">
                  <img className="news-card-image" src="/images/update2.png" alt="News" />
                  <div className="news-card-content">
                    <div className="news-card-title">Upcoming Trade Conference</div>
                    <div className="news-card-description">Save the date!</div>
                  </div>
                </div>
              </div>
              {/* News Row 2 */}
              <div className="news-row">
                <div className="news-card">
                  <img className="news-card-image" src="/images/update1.png" alt="News" />
                  <div className="news-card-content">
                    <div className="news-card-title">Renewable Energy Grants</div>
                    <div className="news-card-description">Click to read more</div>
                  </div>
                </div>
                <div className="news-card">
                  <img className="news-card-image" src="/images/update2.png" alt="News" />
                  <div className="news-card-content">
                    <div className="news-card-title">New Pipeline Project</div>
                    <div className="news-card-description">Click to read more</div>
                  </div>
                </div>
                <div className="news-card">
                  <img className="news-card-image" src="/images/update1.png" alt="News" />
                  <div className="news-card-content">
                    <div className="news-card-title">Industry Awards 2023</div>
                    <div className="news-card-description">Nominees announced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div style={{ width: '1360px', height: '154px', backgroundColor: 'rgba(1,47,107,1)', marginTop: '101px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '39px 0 38px 0', gap: '72px' }}>
          {/* Top Footer Content */}
          <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '1292px' }}>
            {/* Logo */}
            <Link 
              to="/loggedin" 
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                style={{ width: '193.2px', height: '56px' }}
                src="/images/logo_.png"
                alt="Petropal Logo"
              />
            </Link>
            {/* Navigation Links */}
            <button
              onClick={() => setShowDownloadModal(true)}
              style={{
                marginLeft: '179.8px',
                fontFamily: '"Inter", sans-serif',
                fontSize: '18px',
                minWidth: '153px',
                whiteSpace: 'nowrap',
                color: 'white',
                lineHeight: '26px',
                fontWeight: 700,
                textDecoration: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Download App
            </button>
  
            <Link 
              to="/about"
              style={{ 
                marginLeft: '23px', 
                fontFamily: '"Inter", sans-serif', 
                fontSize: '18px', 
                minWidth: '96px', 
                whiteSpace: 'nowrap', 
                color: 'white', 
                lineHeight: '26px', 
                fontWeight: 700, 
                textDecoration: 'none' 
              }}
            >
              About Us
            </Link>
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                marginLeft: '23px',
                fontFamily: '"Inter", sans-serif',
                fontSize: '18px',
                minWidth: '96px',
                whiteSpace: 'nowrap',
                color: 'white',
                lineHeight: '26px',
                fontWeight: 700,
                textDecoration: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Contact Us
            </button>
            <a href="#" style={{ marginLeft: '23px', fontFamily: '"Inter", sans-serif', fontSize: '18px', minWidth: '136px', whiteSpace: 'nowrap', color: 'white', lineHeight: '40px', fontWeight: 700, textDecoration: 'none' }}>Help Center</a>
            {/* Social Icons */}
            <div style={{ marginLeft: '193px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px' }}>
              <img width="26px" height="25.9px" src="/images/facebook.png" alt="Facebook" />
            </div>
            <div style={{ marginLeft: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '32px' }}>
              <img width="27px" height="27px" src="/images/Twitter.png" alt="Twitter" />
            </div>
            <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '32px' }}>
              <img width="28px" height="25px" src="/images/Linkedin.png" alt="LinkedIn" />
            </div>
            <div style={{ marginLeft: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px' }}>
              <img width="26px" height="26px" src="/images/Instagram.png" alt="Instagram" />
            </div>
          </div>
          {/* Footer Bottom */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '100px', width: '770px', height: '26px' }}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '21px', minWidth: '367px', whiteSpace: 'nowrap', color: 'white', lineHeight: '26px', fontWeight: 500 }}>
              © 2025 Petropal. All rights reserved.
            </div>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', minWidth: '303px', whiteSpace: 'nowrap', color: 'white', lineHeight: '16px', fontWeight: 500 }}>
              Privacy Policy Term of Service
            </div>
          </div>
        </div>

        {/* Render modals conditionally */}
        {showDownloadModal && <DownloadModal onClose={() => setShowDownloadModal(false)} />}
        {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
      </div>
    </>
  );
};

export default About;