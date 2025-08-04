import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import DownloadModal from './DownloadModal';
import ContactModal from './ContactModal';

const Listings = () => {
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
                <div style={{ marginLeft: '36px', display: 'flex', alignItems: 'center' }}>
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


        {/* Latest Listings Section - 4 Column Grid (20 Products) */}
        <div style={{ width: '1308px', marginTop: '72px' }}>
          {/* Section Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '45px' }}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '30px', color: 'rgba(0,0,0,1)', lineHeight: '48px', fontWeight: 600 }}>
              Latest Listings
            </div>
          </div>

          {/* First 12 Products (4x3 Grid) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 310px)', gap: '30px' }}>

            {/* Product 1 - Updated */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product1.png" alt="Diesel" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Diesel (5000L Min.)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    Aidmax Energy
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Diesel price update: Be the first to get the new KES 183/liter rate on all bulk orders
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Nairobi, Kenya
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 183/litre
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 15 min ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2 - Updated */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product2.png" alt="Gas-oil" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Gas-oil (10,000L Min.)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    Hass Petroleum
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Premium quality gas-oil with low sulfur content, ideal for industrial machinery
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Kisumu
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 183/litre
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 1h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 3 - Updated */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product3.png" alt="Kerosene" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Kerosene (50,000L Min.)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    Dalbit Petroleum
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  High-quality kerosene with clean burn properties, suitable for household and industrial use
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Mombasa
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 183/litre
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 2h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 4 - Updated */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '250px', borderRadius: '10px' }} src="/images/product4.png" alt="Solar Panels" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Solar Panels (100 Units)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    Green Energy Ltd
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  450W monocrystalline solar panels with 25-year performance warranty and high efficiency
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Nakuru
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 8,500/unit
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 3h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 5 - Updated */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product5.png" alt="Fuel Additives" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Fuel Additives (20L)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    Chemco Solutions
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Advanced fuel treatment that cleans injectors, stabilizes fuel and improves combustion
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Eldoret
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 2,400/L
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 4h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 6 - Updated */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '250px', borderRadius: '10px' }} src="/images/product6.png" alt="Lubricants" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Lubricants (200 Drums)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    OilTech Kenya
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Premium engine oils and industrial lubricants in bulk quantities with API certification
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Thika
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 5,200/drum
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 5h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 7 - Updated */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '250px', borderRadius: '10px' }} src="/images/product7.png" alt="Petrol" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Petrol (10,000L Min.)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    Prime Fuels
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  High-octane petrol with cleaning additives for better engine performance and efficiency
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Machakos
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 195/litre
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 6h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 8 - Updated */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product8.png" alt="Batteries" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Solar Batteries (50 Units)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    PowerStore Kenya
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  200Ah deep cycle solar batteries with 5-year warranty, perfect for off-grid solar systems
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Kitui
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 12,000/unit
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 7h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 9 - Updated */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product1.png" alt="Diesel Generators" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Diesel Generators (10 Units)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    GenPower Ltd
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  50kVA silent diesel generators with automatic transfer switch, ideal for commercial use
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Meru
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 350,000/unit
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 8h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 10 - Updated */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product2.png" alt="Ethanol" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Ethanol (20,000L)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    EcoFuels Africa
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  High-purity ethanol suitable for fuel blending, pharmaceutical and industrial applications
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Kisii
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 150/litre
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 9h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 11 - Updated */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product3.png" alt="LPG Gas" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                LPG Gas (100 Cylinders)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    GasConnect Ltd
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  13kg LPG cylinders with safety valves, available for bulk purchase with delivery options
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Embu
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 2,800/cylinder
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 10h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 12 - Updated */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '250px', borderRadius: '10px' }} src="/images/product4.png" alt="Wind Turbines" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Wind Turbines (5 Units)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    RenewPower Solutions
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  10kW vertical axis wind turbines with smart grid integration, ideal for rural electrification
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Nyeri
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 1.2M/unit
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 12h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Banner Section - Fixed Version */}
          <div style={{
            position: 'relative',
            width: '1312px',
            height: '243px',
            margin: '70px auto 0', // Center the banner
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

          {/* Next 8 Products (4x2 Grid) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 310px)', gap: '30px', marginTop: '70px' }}>

            {/* Product 13 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product5.png" alt="Biogas Digesters" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Biogas Digesters (10 Units)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    GreenTech Solutions
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  6m³ fixed dome biogas digesters with complete installation kit for sustainable energy
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Kakamega
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 85,000/unit
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 14h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 14 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '250px', borderRadius: '10px' }} src="/images/product6.png" alt="Inverters" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Solar Inverters (25 Units)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    PowerConvert Ltd
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  5kW pure sine wave solar inverters with MPPT charge controllers and 2-year warranty
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Kitale
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 45,000/unit
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 16h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 15 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '250px', borderRadius: '10px' }} src="/images/product7.png" alt="Biodiesel" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Biodiesel (15,000L)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    EcoDiesel Kenya
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  B100 grade biodiesel made from recycled cooking oil, meets ASTM D6751 standards
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Naivasha
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 165/litre
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 18h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 16 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product8.png" alt="Charge Controllers" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Solar Charge Controllers (50 Units)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    SolarTech Africa
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  60A MPPT solar charge controllers with LCD display and Bluetooth monitoring capability
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Kericho
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 12,500/unit
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 20h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 17 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product1.png" alt="Coal" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Coal (10 Tonnes)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    Kenya Coal Traders
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  High-quality bituminous coal with high calorific value, suitable for industrial boilers
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Kitui
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 25,000/tonne
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 22h ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 18 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product2.png" alt="Solar Water Heaters" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Solar Water Heaters (15 Units)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    SunTherm Ltd
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  200L direct solar water heating systems with evacuated tubes and stainless steel tanks
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Nakuru
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 65,000/unit
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 1d ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 19 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product3.png" alt="Charcoal" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Charcoal (100 Bags)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    EcoCharcoal Kenya
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Premium hardwood charcoal with long burn time and minimal smoke, packed in 50kg bags
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Voi
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 1,200/bag
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 1d ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 20 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '250px', borderRadius: '10px' }} src="/images/product4.png" alt="Energy Meters" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Smart Energy Meters (30 Units)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    MeterTech Africa
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
                <div style={{ marginTop: '4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(90,90,90,1)', lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Prepaid smart meters with remote monitoring and GSM connectivity for energy management
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="/images/location_.png" alt="Location" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '114px', whiteSpace: 'nowrap', color: 'rgba(25,25,25,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 400 }}>
                  Thika
                </div>
              </div>
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '97px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '100%', fontWeight: 400 }}>
                KES 15,000/unit
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '11px', width: '167px', height: '19px' }}>
                <img width={17} height={17} src="/images/clock.png" alt="Clock" />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', minWidth: '139px', whiteSpace: 'nowrap', color: 'rgba(130,130,130,1)', lineHeight: '100%', fontWeight: 400 }}>
                  Posted 2d ago
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
                <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
                <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
                <div style={{ borderRadius: '7.8px', border: '0.6px solid rgb(217,217,217)', width: '90px', height: '32px', backgroundColor: 'rgba(255,140,0,1)', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,1)', lineHeight: '14.2px', fontWeight: 600 }}>
                    Start Chat
                  </div>
                </div>
              </div>
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

export default Listings;