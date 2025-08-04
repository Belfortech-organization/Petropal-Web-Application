import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DownloadModal from './DownloadModal';
import ContactModal from './ContactModal';

const Industry = () => {
  // State for header slider
  const [headerCurrentIndex, setHeaderCurrentIndex] = useState(0);
  // State for modals
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  // State for profile dropdown
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [sliderInterval, setSliderInterval] = useState(null);

  useEffect(() => {
    // Start the slider interval when component mounts
    const interval = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % 3); // Assuming 3 slides
    }, 4000);
    setSliderInterval(interval);

    // Clear interval on component unmount
    return () => {
      if (sliderInterval) clearInterval(sliderInterval);
    };
  }, []);

  // Pause on hover
  const handleSliderMouseEnter = () => {
    if (sliderInterval) clearInterval(sliderInterval);
  };

  const handleSliderMouseLeave = () => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % 3);
    }, 4000);
    setSliderInterval(interval);
  };

  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [adSliderInterval, setAdSliderInterval] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Header slides data
  const headerSlides = [
    [
      { id: 1, img: "/images/headerimage1.png", caption: "Automotive Fuels" },
      { id: 2, img: "/images/headerimage2.png", caption: "Industrial Fuels" },
      { id: 3, img: "/images/headerimage3.png", caption: "Solar Systems" },
      { id: 4, img: "/images/headerimage4.png", caption: "Renewable Energy" }
    ],
    [
      { id: 2, img: "/images/headerimage2.png", caption: "Industrial Fuels" },
      { id: 3, img: "/images/headerimage3.png", caption: "Solar Systems" },
      { id: 4, img: "/images/headerimage4.png", caption: "Renewable Energy" },
      { id: 1, img: "/images/headerimage1.png", caption: "Automotive Fuels" }
    ],
    [
      { id: 3, img: "/images/headerimage3.png", caption: "Solar Systems" },
      { id: 4, img: "/images/headerimage4.png", caption: "Renewable Energy" },
      { id: 1, img: "/images/headerimage1.png", caption: "Automotive Fuels" },
      { id: 2, img: "/images/headerimage2.png", caption: "Industrial Fuels" }
    ]
  ];

  // Auto-rotate header slides
  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderCurrentIndex(prev => (prev + 1) % headerSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [headerSlides.length]);

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
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Petropal - Trade Fuel, Solar &amp; Energy Products with Confidence</title>
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Lato:wght@500&family=Roboto:wght@400;500&display=swap');
        
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }
        
        .container {
            background-color: rgba(244,244,244,1);
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            min-height: 100vh;
        }
        
        .header {
            position: relative;
            width: 1441px;
            height: 313px;
        }
        
        .search-bar {
            border-radius: 10px;
            border: 3px solid rgb(255,140,0);
            width: 1048px;
            height: 68px;
            box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
            background-color: rgba(255,255,255,1);
            position: absolute;
            top: 225px;
            left: 197px;
            z-index: 20;
            display: flex;
            justify-content: start;
            align-items: center;
            padding-left: 52px;
        }
        
        .nav-bar {
            width: 1350px;
            height: 315px;
            background-color: rgba(1,47,107,1);
            position: absolute;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: start;
            padding-top: 16px;
            padding-bottom: 20px;
            padding-left: 68px;
            gap: 35px;
        }
        
        .logo {
            width: 120px;
            height: 40px;
        }
        
        .nav-links {
            display: flex;
            align-items: center;
            gap: 23px;
        }
        
        .nav-link {
            font-family: 'Inter', sans-serif;
            font-size: 18px;
            color: rgba(255,255,255,1);
            font-weight: 700;
            text-decoration: none;
        }
        
        .social-icons {
            display: flex;
            gap: 15px;
        }
        
        .section-title {
            font-family: 'Inter', sans-serif;
            font-size: 30px;
            color: rgba(0,0,0,1);
            font-weight: 600;
            margin-top: 66px;
        }
        
        .see-all {
            display: flex;
            align-items: center;
            gap: 14px;
            color: rgba(1,47,107,1);
            font-size: 26px;
            font-weight: 500;
            text-decoration: none;
        }
        
        .featured-section {
            margin-top: 44px;
            position: relative;
            width: 1443px;
            height: 535px;
        }
        
        .product-grid {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            margin-top: 45px;
            width: 1300px;
        }
        
        .product-card {
            width: 310px;
            height: 298px;
            border-radius: 10px;
            overflow: hidden;
        }
        
        .product-info {
            margin-top: 14px;
        }
        
        .product-title {
            font-family: 'Inter', sans-serif;
            font-size: 17px;
            color: rgba(18,18,18,1);
            font-weight: 600;
            line-height: 18.5px;
            letter-spacing: -0.2px;
        }
        
        .company-info {
            display: flex;
            align-items: center;
            gap: 4px;
            margin-top: 11px;
        }
        
        .company-name {
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            color: rgba(18,18,18,1);
            font-weight: 500;
            line-height: 18.5px;
            letter-spacing: -0.01em;
        }
        
        .verified-badge {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 19px;
            height: 19px;
            border-radius: 9.5px;
            background-color: rgba(1,47,107,1);
        }
        
        .location {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 11px;
        }
        
        .price {
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            color: rgba(18,18,18,1);
            font-weight: 400;
            line-height: 100%;
            margin-top: 13px;
        }
        
        .time-posted {
            display: flex;
            align-items: center;
            gap: 11px;
            margin-top: 12px;
        }
        
        .ad-banner {
            border-radius: 10px;
            width: 1298px;
            height: 243px;
            background-color: rgba(255,219,176,0.93);
            margin-top: 64px;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: end;
            padding-top: 10px;
            padding-right: 37px;
        }
        
        .news-card {
            border-radius: 6px;
            border: 1px solid rgb(0,0,0);
            width: 407px;
            height: 132px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: start;
            gap: 16px;
            padding: 16px;
        }
        
        .news-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 20px;
            margin-top: 33px;
            width: 100%;
            max-width: 1300px;
        }
        
        .events-section {
            margin-top: 56px;
            display: flex;
            justify-content: start;
            align-items: center;
            width: 1370px;
        }
        
        .event-image {
            border-radius: 20px;
            width: 639px;
            height: 365px;
            overflow: hidden;
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
        
        .disclaimer {
            width: 1440px;
            height: 202px;
            background-color: rgba(138,159,187,0.37);
            margin-top: 67px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .disclaimer-text {
            font-family: 'Inter', sans-serif;
            font-size: 18px;
            text-align: center;
            width: 923px;
            color: rgba(0,0,0,1);
            line-height: 24px;
            font-weight: 300;
        }

        /* Header slider styles */
        .header-slider-container {
            position: relative;
            display: flex;
            gap: 70px;
            margin-left: 80px;
        }
        
        .header-slide {
            display: flex;
            gap: 70px;
            transition: opacity 1s ease-in-out;
        }
        
        .header-slide-group {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .header-slide-img {
            width: 120px;
            height: 100px;
        }
        
        .header-slide-caption {
            margin-top: 10px;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            color: white;
            font-weight: 700;
            text-align: center;
        }
        
        .header-slider-indicators {
            display: flex;
            align-items: center;
            position: absolute;
            bottom: -50px;
            left: 0;
            padding: 10px;
        }
        
        .header-indicator {
            width: 7px;
            height: 7px;
            background-color: rgba(255,255,255,0.5);
            border-radius: 50%;
            margin: 0 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .header-indicator:first-child {
            border-radius: 10px;
            width: 7px;
            height: 7px;
            margin-left: 0;
        }
        
        .header-indicator.active {
            background-color: white;
        }
        
        .header-indicator:first-child.active {
            width: 7px;
            height: 7px;
            border-radius: 10px;
        }

        /* Profile dropdown styles */
        .profile-dropdown {
            position: relative;
            display: inline-block;
        }
        
        .profile-button {
            display: flex;
            align-items: center;
            gap: 8px;
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            font-size: 17px;
            font-weight: 600;
        }
        
        .profile-pic {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            object-fit: cover;
        }
        
        .dropdown-content {
            display: ${showProfileDropdown ? 'block' : 'none'};
            position: absolute;
            right: 0;
            background-color: white;
            min-width: 200px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 100;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .dropdown-item {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
        }
        
        .dropdown-item:hover {
            background-color: #f1f1f1;
        }
        
        .dropdown-divider {
            height: 1px;
            background-color: #e1e1e1;
            margin: 0;
        }

        /* News card styles */
        .news-card-container {
            width: 30%;
            margin-bottom: 30px;
        }
        
        .news-card-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
        }
        
        .news-card-title {
            font-size: 16px;
            margin-top: 10px;
            font-weight: 500;
        }
        
        .news-card-meta {
            display: flex;
            align-items: center;
            margin-top: 10px;
            font-size: 14px;
            color: #555;
        }
        
        .news-card-time {
            display: flex;
            align-items: center;
            margin-top: 5px;
            font-size: 14px;
            color: #777;
        }
      `}} />
      <style dangerouslySetInnerHTML={{
        __html: `
    .slider-image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }
    
    .slider-image.active {
        opacity: 1;
    }
    
    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(255,255,255,0.5);
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
    .dot.active, .dot:hover {
        background-color: white;
    }
`}} />
      <style dangerouslySetInnerHTML={{
        __html: `
    .ad-slide {
        transition: opacity 0.5s ease-in-out;
    }
    .ad-slide.active {
        opacity: 1 !important;
    }
    .ad-dot.active {
        background-color: #012F6B !important;
        transform: scale(1.2);
    }
        @keyframes scrollLeft {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.scroll-container {
  display: flex;
  width: fit-content;
  animation: scrollLeft 30s linear infinite;
}
.scroll-wrapper {
  overflow: hidden;
  width: 100%;
}
`}} />
      <div className="container">
        {/* Header Section */}
        <div className="header">
          <div className="nav-bar">
            {/* Top Navigation Row */}
            <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '97%' }}>
              {/* Logo */}
              <Link to="/loggedin">
                <img
                  style={{ width: '151.8px', height: '44px' }} src="/images/logo_.png" alt="Petropal Logo"
                />
              </Link>
              {/* Category Dropdown */}
              <div style={{ marginLeft: '37.2px', display: 'flex', alignItems: 'center' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', textAlign: 'center', width: '76px', color: 'white', lineHeight: '17px', letterSpacing: '-0.01em', fontWeight: 600 }}>
                  Search by Category
                </div>
                <img style={{ marginLeft: '1.8px' }} width="13px" height="15px" src="/images/dropp.png" alt="Dropdown" />
              </div>
              {/* Search Bar */}
              <div style={{ marginLeft: '35.8px', display: 'flex', alignItems: 'center', background: 'white', borderRadius: '20px', border: '3px solid rgb(255,140,0)', boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)', height: '47px', width: '593px', position: 'relative' }}>
                {/* Search Section */}
                <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                  <img style={{ marginLeft: '16px' }} width="14.6px" height="14.6px" src="/images/search.png" alt="Search" />
                  <div style={{ marginLeft: '18.4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(1,47,107,0.5)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    Products &amp; Services
                  </div>
                </div>
                {/* Divider positioned at start of blue search rectangle */}
                <img style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '300px', height: '50px', width: '3px' }} src="/images/Line.png" alt="Divider" />
                {/* Location and Search Button */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img width="23px" height="23px" src="/images/location.png" alt="Location" />
                  <div style={{ marginLeft: '15px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(1,47,107,0.5)', fontWeight: 600 }}>
                    Location
                  </div>
                  <div style={{ marginLeft: '30px', backgroundColor: 'rgba(1,47,107,1)', height: '49px', width: '150px', borderRadius: '0 17px 17px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                    <img style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '150px', height: '50px', width: '3px' }} src="/images/Line.png" alt="Divider" />
                    <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'white', fontWeight: 600 }}>
                      Search
                    </div>
                  </div>
                </div>
              </div>
              {/* Language and Profile Section */}
              <div style={{ marginLeft: '30px', display: 'flex', alignItems: 'center' }}>
                {/* Language Selector */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginLeft: '12px', fontFamily: '"Lato", sans-serif', fontSize: '18px', color: 'white', fontWeight: 500 }}>
                    English
                  </div>
                  <img style={{ marginLeft: '12px' }} width="11px" height="7px" src="/images/drop.png" alt="Dropdown" />
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
              {/* Icons Container */}
              <div style={{
                position: 'absolute',
                top: '110px',
                right: '110px',
                display: 'flex',
                gap: '60px'
              }}>
                {/* Add icon - keeping as is since no route specified */}
                <img
                  style={{
                    width: '24px',
                    height: '24px',
                    cursor: 'pointer',
                    position: 'relative',
                    top: '0px',
                    transition: 'transform 0.2s ease-in-out',
                    ':hover': {
                      transform: 'scale(1.2)'
                    }
                  }}
                  src="/images/add.png"
                  alt="Add"
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Chat icon - link to Messages */}
                <Link to="/messages">
                  <img
                    style={{
                      width: '24px',
                      height: '24px',
                      cursor: 'pointer',
                      position: 'relative',
                      top: '0px',
                      transition: 'transform 0.2s ease-in-out'
                    }}
                    src="/images/chat.png"
                    alt="Chat"
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </Link>

                {/* Notification icon - link to Notifications */}
                <Link to="/notifications">
                  <img
                    style={{
                      width: '24px',
                      height: '24px',
                      cursor: 'pointer',
                      position: 'relative',
                      top: '0px',
                      transition: 'transform 0.2s ease-in-out'
                    }}
                    src="/images/notification.png"
                    alt="Notification"
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </Link>
              </div>
            </div>
            {/* Header Content Section */}
            <div style={{ marginTop: '45px', display: 'flex', flexDirection: 'column', width: '100%' }}>
              {/* Text and Images Row */}
              <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                {/* Header Text */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '16px', width: '453px', height: '75px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '27px', color: 'white', fontWeight: 800, marginBottom: '10px' }}>
                    East Africa's Energy Marketplace
                  </div>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '21px', color: 'white', fontWeight: 400 }}>
                    East Africa's Energy Marketplace
                  </div>
                </div>
                {/* Product Images Slider Container */}
                <div className="header-slider-container">
                  {/* Current Slide */}
                  <div className="header-slide" style={{ opacity: 1 }}>
                    {headerSlides[headerCurrentIndex].map((item) => (
                      <div className="header-slide-group" key={item.id}>
                        <img className="header-slide-img" src={item.img} alt={item.caption} />
                        <div className="header-slide-caption">{item.caption}</div>
                      </div>
                    ))}
                  </div>

                  {/* Slider Indicators */}
                  <div className="header-slider-indicators">
                    {headerSlides.map((_, index) => (
                      <div
                        key={index}
                        className={`header-indicator ${index === 0 ? 'first' : ''} ${index === headerCurrentIndex ? 'active' : ''}`}
                        onClick={() => setHeaderCurrentIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Navigation Arrows (Bottom Right) */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px', width: '90%' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <img
                    style={{ width: '25px', height: '25px', cursor: 'pointer' }}
                    src="/images/goleft.png"
                    alt="Previous"
                    onClick={() => setHeaderCurrentIndex(prev => (prev - 1 + headerSlides.length) % headerSlides.length)}
                  />
                  <img
                    style={{ width: '25px', height: '25px', cursor: 'pointer' }}
                    src="/images/goright.png"
                    alt="Next"
                    onClick={() => setHeaderCurrentIndex(prev => (prev + 1) % headerSlides.length)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* First 6 News Cards */}
        <div style={{ width: '100%', maxWidth: '1300px', marginTop: '60px' }}>
          {/* Section Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '30px', color: 'rgba(0,0,0,1)', fontWeight: 600 }}>
              Industry Updates
            </div>
          </div>
          
          {/* News Grid */}
          <div className="news-grid">
            {/* Row 1 */}
            {/* News Card 1 */}
            <div className="news-card-container">
              <img className="news-card-image" src="/images/update2.png" alt="News" />
              <div className="news-card-title">Kenya allocates $12.90mn to revive stalled Turkana oil project</div>
              <div className="news-card-meta">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#012F6B', borderRadius: '50%', marginRight: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '10px' }}>L</div>
                  <span>IntelliNews</span>
                </div>
              </div>
              <div className="news-card-time">
                <img width="15px" height="15px" src="/images/clock.png" alt="Posted Time" style={{ marginRight: '5px' }} />
                Posted 1h ago
              </div>
            </div>

            {/* News Card 2 */}
            <div className="news-card-container">
              <img className="news-card-image" src="/images/update1.png" alt="News" />
              <div className="news-card-title">Oil Price Trends Q3 2023</div>
              <div className="news-card-meta">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#012F6B', borderRadius: '50%', marginRight: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '10px' }}>L</div>
                  <span>IntelliNews</span>
                </div>
              </div>
              <div className="news-card-time">
                <img width="15px" height="15px" src="/images/clock.png" alt="Posted Time" style={{ marginRight: '5px' }} />
                Posted 2h ago
              </div>
            </div>

            {/* News Card 3 */}
            <div className="news-card-container">
              <img className="news-card-image" src="/images/update2.png" alt="News" />
              <div className="news-card-title">Upcoming Trade Conference</div>
              <div className="news-card-meta">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#012F6B', borderRadius: '50%', marginRight: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '10px' }}>L</div>
                  <span>IntelliNews</span>
                </div>
              </div>
              <div className="news-card-time">
                <img width="15px" height="15px" src="/images/clock.png" alt="Posted Time" style={{ marginRight: '5px' }} />
                Posted 3h ago
              </div>
            </div>

            {/* Row 2 */}
            {/* News Card 4 */}
            <div className="news-card-container">
              <img className="news-card-image" src="/images/update1.png" alt="News" />
              <div className="news-card-title">Renewable Energy Grants</div>
              <div className="news-card-meta">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#012F6B', borderRadius: '50%', marginRight: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '10px' }}>L</div>
                  <span>IntelliNews</span>
                </div>
              </div>
              <div className="news-card-time">
                <img width="15px" height="15px" src="/images/clock.png" alt="Posted Time" style={{ marginRight: '5px' }} />
                Posted 4h ago
              </div>
            </div>

            {/* News Card 5 */}
            <div className="news-card-container">
              <img className="news-card-image" src="/images/update2.png" alt="News" />
              <div className="news-card-title">New Pipeline Project</div>
              <div className="news-card-meta">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#012F6B', borderRadius: '50%', marginRight: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '10px' }}>L</div>
                  <span>IntelliNews</span>
                </div>
              </div>
              <div className="news-card-time">
                <img width="15px" height="15px" src="/images/clock.png" alt="Posted Time" style={{ marginRight: '5px' }} />
                Posted 5h ago
              </div>
            </div>

            {/* News Card 6 */}
            <div className="news-card-container">
              <img className="news-card-image" src="/images/update1.png" alt="News" />
              <div className="news-card-title">Industry Awards 2023</div>
              <div className="news-card-meta">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#012F6B', borderRadius: '50%', marginRight: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '10px' }}>L</div>
                  <span>IntelliNews</span>
                </div>
              </div>
              <div className="news-card-time">
                <img width="15px" height="15px" src="/images/clock.png" alt="Posted Time" style={{ marginRight: '5px' }} />
                Posted 6h ago
              </div>
            </div>
          </div>
        </div>

        {/* Ad Banner Section */}
        <div style={{
          position: 'relative',
          width: '1312px',
          height: '243px',
          margin: '70px auto 0',
          borderRadius: '10px',
          overflow: 'hidden',
        }}>
          {/* Ad Slides Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
            onMouseEnter={() => clearInterval(adSliderInterval)}
            onMouseLeave={() => {
              const interval = setInterval(() => {
                setCurrentAdIndex(prev => (prev + 1) % 4);
              }, 4000);
              setAdSliderInterval(interval);
            }}
          >
            {/* Ad Label - Positioned absolutely at top right */}
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '37px',
              zIndex: 60,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              gap: '6px',
              width: '41px',
              height: '18px'
            }}>
              <div style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '15px',
                minWidth: '18px',
                whiteSpace: 'nowrap',
                color: 'rgba(255,255,255,1)',
                lineHeight: '100%',
                fontWeight: 500
              }}>
                ad
              </div>
              <img width="19px" height="16px" src="/images/X.png" alt="Close" />
            </div>

            {/* Slide 1 */}
            <img
              src="/images/slider5.png"
              alt="Ad 1"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: currentAdIndex === 0 ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
            />
            {/* Slide 2 */}
            <img
              src="/images/slider6.png"
              alt="Ad 2"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: currentAdIndex === 1 ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
            />
            {/* Slide 3 */}
            <img
              src="/images/slider7.png"
              alt="Ad 3"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: currentAdIndex === 2 ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
            />
            {/* Slide 4 */}
            <img
              src="/images/slider4.png"
              alt="Ad 4"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: currentAdIndex === 3 ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
            />
          </div>
        </div>

        {/* Second 6 News Cards */}
        <div style={{ width: '100%', maxWidth: '1300px', marginTop: '70px' }}>
          {/* News Grid */}
          <div className="news-grid">
            {/* Row 1 */}
            {/* News Card 7 */}
            <div className="news-card-container">
              <img className="news-card-image" src="/images/update1.png" alt="News" />
              <div className="news-card-title">Solar Energy Subsidies Announced</div>
              <div className="news-card-meta">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#012F6B', borderRadius: '50%', marginRight: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '10px' }}>L</div>
                  <span>IntelliNews</span>
                </div>
              </div>
              <div className="news-card-time">
                <img width="15px" height="15px" src="/images/clock.png" alt="Posted Time" style={{ marginRight: '5px' }} />
                Posted 7h ago
              </div>
            </div>

            {/* News Card 8 */}
            <div className="news-card-container">
              <img className="news-card-image" src="/images/update2.png" alt="News" />
              <div className="news-card-title">Fuel Price Adjustments</div>
              <div className="news-card-meta">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#012F6B', borderRadius: '50%', marginRight: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '10px' }}>L</div>
                  <span>IntelliNews</span>
                </div>
              </div>
              <div className="news-card-time">
                <img width="15px" height="15px" src="/images/clock.png" alt="Posted Time" style={{ marginRight: '5px' }} />
                Posted 8h ago
              </div>
            </div>

            {/* News Card 9 */}
            <div className="news-card-container">
              <img className="news-card-image" src="/images/update1.png" alt="News" />
              <div className="news-card-title">New Refinery Construction</div>
              <div className="news-card-meta">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#012F6B', borderRadius: '50%', marginRight: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '10px' }}>L</div>
                  <span>IntelliNews</span>
                </div>
              </div>
              <div className="news-card-time">
                <img width="15px" height="15px" src="/images/clock.png" alt="Posted Time" style={{ marginRight: '5px' }} />
                Posted 9h ago
              </div>
            </div>

            {/* Row 2 */}
            {/* News Card 10 */}
            <div className="news-card-container">
              <img className="news-card-image" src="/images/update2.png" alt="News" />
              <div className="news-card-title">Energy Storage Breakthrough</div>
              <div className="news-card-meta">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#012F6B', borderRadius: '50%', marginRight: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '10px' }}>L</div>
                  <span>IntelliNews</span>
                </div>
              </div>
              <div className="news-card-time">
                <img width="15px" height="15px" src="/images/clock.png" alt="Posted Time" style={{ marginRight: '5px' }} />
                Posted 10h ago
              </div>
            </div>

            {/* News Card 11 */}
            <div className="news-card-container">
              <img className="news-card-image" src="/images/update1.png" alt="News" />
              <div className="news-card-title">Wind Farm Expansion</div>
              <div className="news-card-meta">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#012F6B', borderRadius: '50%', marginRight: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '10px' }}>L</div>
                  <span>IntelliNews</span>
                </div>
              </div>
              <div className="news-card-time">
                <img width="15px" height="15px" src="/images/clock.png" alt="Posted Time" style={{ marginRight: '5px' }} />
                Posted 11h ago
              </div>
            </div>

            {/* News Card 12 */}
            <div className="news-card-container">
              <img className="news-card-image" src="/images/update2.png" alt="News" />
              <div className="news-card-title">Government Energy Policy Update</div>
              <div className="news-card-meta">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#012F6B', borderRadius: '50%', marginRight: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '10px' }}>L</div>
                  <span>IntelliNews</span>
                </div>
              </div>
              <div className="news-card-time">
                <img width="15px" height="15px" src="/images/clock.png" alt="Posted Time" style={{ marginRight: '5px' }} />
                Posted 12h ago
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div style={{
          width: '100%',
          maxWidth: '1955px',
          marginTop: '66px',
          display: 'flex',
          flexDirection: 'column',
          gap: '56px',
          paddingLeft: '20px'
        }}>
          {/* Section Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '97%',
            height: '48px',
            paddingRight: '30px'
          }}>
            <div style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '30px',
              color: 'rgba(0,0,0,1)',
              lineHeight: '48px',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              marginLeft: '20px',
            }}>
              Upcoming Events
            </div>
          </div>

          {/* Scrolling Events */}
          <div className="scroll-wrapper">
            <div className="scroll-container">
              {/* Duplicate image set twice for seamless scroll */}
              {[1, 2].map((set) => (
                <React.Fragment key={set}>
                  <img
                    style={{
                      borderRadius: '20px',
                      width: '639px',
                      height: '365px',
                      objectFit: 'cover',
                      marginRight: '19px'
                    }}
                    src="/images/upcoming1.png"
                    alt="Energy Conference"
                  />
                  <img
                    style={{
                      borderRadius: '20px',
                      width: '639px',
                      height: '365px',
                      objectFit: 'cover',
                      marginRight: '19px'
                    }}
                    src="/images/upcoming2.png"
                    alt="Trade Summit"
                  />
                  <img
                    style={{
                      borderRadius: '20px',
                      width: '639px',
                      height: '365px',
                      objectFit: 'cover',
                      marginRight: '19px'
                    }}
                    src="/images/upcoming3.png"
                    alt="Industry Expo"
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section - Last Section */}
        <div style={{ width: '1445px', height: '154px', backgroundColor: 'rgba(1,47,107,1)', marginTop: '101px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '39px 0 38px 0', gap: '72px' }}>
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
              onClick={() => window.scrollTo(0, 0)}
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
      </div>

      {/* Render modals conditionally */}
      {showDownloadModal && <DownloadModal onClose={() => setShowDownloadModal(false)} />}
      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
    </div>
  );
};

export default Industry;