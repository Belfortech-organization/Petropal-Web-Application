import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DownloadModal from './DownloadModal';
import ContactModal from './ContactModal';
import './Home.css';

const Home = () => {
  // State for header slider
  const [headerCurrentIndex, setHeaderCurrentIndex] = useState(0);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [sliderInterval, setSliderInterval] = useState<ReturnType<typeof setInterval> | null>(null);

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

  const handleDotClick = (index: number) => {
    setCurrentSlideIndex(index);
    // Reset the interval when user manually changes slide
    if (sliderInterval) clearInterval(sliderInterval);
    const interval = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % 3);
    }, 4000);
    setSliderInterval(interval);
  };

  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [adSliderInterval, setAdSliderInterval] = useState<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // State for modals
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

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

  // Slider settings for other sliders
  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };


  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (showDownloadModal && target.id === 'downloadModalOverlay') {
        setShowDownloadModal(false);
      }
      if (showContactModal && target.id === 'contactModalOverlay') {
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
    const handleKeyDown = (e: { key: string; }) => {
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

      <div className="container">
        {/* Header Section */}
        <div className="header">
          <div className="nav-bar">
            {/* Top Navigation Row */}
            <div className="nav-links" style={{ width: '100%' }}>
              {/* Logo */}
              <Link to="">
                <img className="logo" src="/images/logo_.png" alt="Petropal Logo" />
              </Link>

              {/* Category Dropdown */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '20px' }}>
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
              <div className="searchContainer">
                {/* Search Section */}
                <div className="searchSection">
                  <img style={{ marginLeft: '16px' }} width="14.6px" height="14.6px" src="/images/search.png" alt="Search" />
                  <div style={{ marginLeft: '18.4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(1,47,107,0.5)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    Products &amp; Services
                  </div>
                </div>

                {/* Divider */}
                <img className="searchDivider" src="/images/Line.png" alt="Divider" />

                {/* Location and Search Button */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img width="23px" height="23px" src="/images/location.png" alt="Location" />
                  <div style={{ marginLeft: '15px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(1,47,107,0.5)', fontWeight: 600 }}>
                    Location
                  </div>
                  <div className="searchButton">
                    <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'white', fontWeight: 600 }}>
                      Search
                    </div>
                  </div>
                </div>
              </div>

              {/* Language and Auth Section */}
              <div style={{ marginRight: '30px', display: 'flex', alignItems: 'center' }}>
                {/* Language Selector */}
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '30px' }}>
                  <div style={{ marginRight: '10px', marginLeft: '10px', fontFamily: '"Lato", sans-serif', fontSize: '18px', color: 'white', fontWeight: 500 }}>
                    English
                  </div>
                  <img width="11px" height="7px" src="/images/drop.png" alt="Dropdown" />
                </div>

                {/* Auth Buttons */}
                <div style={{ display: 'flex', gap: '20px' }}>
                  <Link to="/signin" style={{ textDecoration: 'none' }}>
                    <div className="auth-button">
                      <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', color: 'white', fontWeight: 600 }}>Log In</div>
                    </div>
                  </Link>
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <div className="auth-button-filled">
                      <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', color: 'white', fontWeight: 600 }}>Sign Up</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Header Content Section */}
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', width: '100%' }}>
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

        {/* Featured Sellers Content - Updated Version */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px', width: '1308px', marginTop: '60px' }}>
          {/* Featured Sellers header with See All link */}
          <div style={{ marginLeft: '9px', display: 'flex', justifyContent: 'start', alignItems: 'center', height: '48px', width: '100%' }}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '30px', minWidth: '236px', whiteSpace: 'nowrap', color: 'rgba(0,0,0,1)', lineHeight: '48px', fontWeight: 600 }}>
              Featured Sellers
            </div>
            <Link
              to="/signin/"
              onClick={() => window.scrollTo(0, 0)}
              style={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                textDecoration: 'none'
              }}
            >
              <span
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '26px',
                  color: 'rgba(1,47,107,1)',
                  lineHeight: '22.4px',
                  letterSpacing: '-0.4px',
                  fontWeight: 500
                }}
              >
                See All
              </span>
              <img width="18px" height="23px" src="/images/arrow.png" alt="Arrow" />
            </Link>
          </div>
          {/* Seller logos */}
          <div style={{ marginTop: '44px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100px' }}>
            <img style={{ width: '100px', height: '100px' }} src="/images/seller1.png" alt="Seller" />
            <img style={{ width: '100px', height: '100px' }} src="/images/seller2.png" alt="Seller" />
            <img style={{ width: '100px', height: '100px' }} src="/images/seller3.png" alt="Seller" />
            <img style={{ width: '100px', height: '100px' }} src="/images/seller4.png" alt="Seller" />
            <img style={{ width: '100px', height: '100px' }} src="/images/seller5.png" alt="Seller" />
            <img style={{ width: '100px', height: '100px' }} src="/images/seller6.png" alt="Seller" />
            <img style={{ width: '100px', height: '100px' }} src="/images/seller7.png" alt="Seller" />
            <img style={{ width: '100px', height: '100px' }} src="/images/seller7.png" alt="Seller" />
          </div>
          {/* Slider Section */}
          <div className="sliderSection">
            {/* Slider container */}
            <div
              id="imageSlider"
              className="sliderContainer"
              onMouseEnter={handleSliderMouseEnter}
              onMouseLeave={handleSliderMouseLeave}
            >
              <img
                src="/images/slider1.png"
                alt="Slider 1"
                className={`sliderImage ${currentSlideIndex === 0 ? 'active' : ''}`}
              />
              <img
                src="/images/slider2.png"
                alt="Slider 2"
                className={`sliderImage ${currentSlideIndex === 1 ? 'active' : ''}`}
              />
              <img
                src="/images/slider3.png"
                alt="Slider 3"
                className={`sliderImage ${currentSlideIndex === 2 ? 'active' : ''}`}
              />

              {/* Content overlay on the left */}
              <div className="sliderContentOverlay">
                <div style={{ fontSize: '50px', color: 'white', fontWeight: 600 }}>40%</div>
                <div style={{ marginTop: '10px', fontSize: '24px', color: 'white', fontWeight: 600 }}>Today's special</div>
                <div style={{ marginTop: '10px', fontSize: '20px', color: 'white', fontWeight: 500 }}>Hurry! Grab Your Discounted Fuel Now!</div>
              </div>

              {/* Navigation dots */}
              <div className="sliderDots">
                <span
                  className={`dot ${currentSlideIndex === 0 ? 'active' : ''}`}
                  onClick={() => handleDotClick(0)}
                ></span>
                <span
                  className={`dot ${currentSlideIndex === 1 ? 'active' : ''}`}
                  onClick={() => handleDotClick(1)}
                ></span>
                <span
                  className={`dot ${currentSlideIndex === 2 ? 'active' : ''}`}
                  onClick={() => handleDotClick(2)}
                ></span>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Listings Section - 4 Column Grid (12 Products) */}
        <div style={{ width: '1308px', marginTop: '72px' }}>
          {/* Section Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '45px' }}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '30px', color: 'rgba(0,0,0,1)', lineHeight: '48px', fontWeight: 600 }}>
              Latest Listings
            </div>
            <Link
              to="/signin/"
              onClick={() => window.scrollTo(0, 0)}
              style={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                textDecoration: 'none'
              }}
            >
              <span
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '26px',
                  color: 'rgba(1,47,107,1)',
                  lineHeight: '22.4px',
                  letterSpacing: '-0.4px',
                  fontWeight: 500
                }}
              >
                See All
              </span>
              <img width="18px" height="23px" src="/images/arrow.png" alt="Arrow" />
            </Link>
          </div>
          {/* 4-Column Product Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 310px)', gap: '20px' }}>
            {/* Row 1 */}
            {/* Product 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product1.png" alt="Diesel" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Diesel (5000L Min.)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                  Aidmax Energy
                </div>
                <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/images/verified.png" width={13} height={13} alt="Verified" />
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

            {/* Product 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product2.png" alt="Gas-oil" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Gas-oil (10,000L Min.)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                  Hass Petroleum
                </div>
                <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                </div>
              </div>
              <div style={{ marginTop: '11px', display: 'flex', alignItems: 'center', gap: '8px', width: '138.3px', height: '19px' }}>
                <img width={14} height={16} src="images/location_.png" alt="Location" />
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

            {/* Product 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product3.png" alt="Kerosene" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Kerosene (50,000L Min.)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                  Dalbit Petroleum
                </div>
                <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/images/verified.png" width={13} height={13} alt="Verified" />
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

            {/* Product 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product4.png" alt="Solar Panels" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Solar Panels (100 Units)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                  Green Energy Ltd
                </div>
                <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/images/verified.png" width={13} height={13} alt="Verified" />
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

            {/* Row 2 */}
            {/* Product 5 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product5.png" alt="Fuel Additives" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Fuel Additives (20L)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                  Chemco Solutions
                </div>
                <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/images/verified.png" width={13} height={13} alt="Verified" />
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

            {/* Product 6 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product6.png" alt="Lubricants" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Lubricants (200 Drums)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                  OilTech Kenya
                </div>
                <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/images/verified.png" width={13} height={13} alt="Verified" />
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

            {/* Product 7 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product7.png" alt="Petrol" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Petrol (10,000L Min.)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                  Prime Fuels
                </div>
                <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/images/verified.png" width={13} height={13} alt="Verified" />
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

            {/* Product 8 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product8.png" alt="Batteries" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Solar Batteries (50 Units)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                  PowerStore Kenya
                </div>
                <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/images/verified.png" width={13} height={13} alt="Verified" />
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

            {/* Row 3 */}
            {/* Product 9 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product1.png" alt="Diesel Generators" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Diesel Generators (10 Units)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                  GenPower Ltd
                </div>
                <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/images/verified.png" width={13} height={13} alt="Verified" />
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

            {/* Product 10 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product2.png" alt="Ethanol" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Ethanol (20,000L)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                  EcoFuels Africa
                </div>
                <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/images/verified.png" width={13} height={13} alt="Verified" />
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

            {/* Product 11 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product3.png" alt="LPG Gas" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                LPG Gas (100 Cylinders)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                  GasConnect Ltd
                </div>
                <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/images/verified.png" width={13} height={13} alt="Verified" />
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

            {/* Product 12 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product4.png" alt="Wind Turbines" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Wind Turbines (5 Units)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                  RenewPower Solutions
                </div>
                <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/images/verified.png" width={13} height={13} alt="Verified" />
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
            onMouseEnter={() => { if (adSliderInterval) clearInterval(adSliderInterval); }}
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

        {/* Industry Updates Section */}
        <div style={{ width: '1305px', marginTop: '60px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {/* Section Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '48px' }}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '30px', color: 'rgba(0,0,0,1)', lineHeight: '48px', fontWeight: 600 }}>
              Industry Updates
            </div>
            <Link
              to="/signin/"
              onClick={() => window.scrollTo(0, 0)}
              style={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                textDecoration: 'none'
              }}
            >
              <span
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '26px',
                  color: 'rgba(1,47,107,1)',
                  lineHeight: '22.4px',
                  letterSpacing: '-0.4px',
                  fontWeight: 500
                }}
              >
                See All
              </span>
              <img width="18px" height="23px" src="/images/arrow.png" alt="Arrow" />
            </Link>
          </div>
          {/* News Grid - Row 1 */}
          <div style={{ display: 'flex', gap: '40px', width: '1301px', height: '172px' }}>
            {/* News Card 1 */}
            <div style={{ border: '1px solid black', borderRadius: '6px', width: '407px', height: '132px', display: 'flex', padding: '16px', gap: '16px' }}>
              <img style={{ width: '100px', height: '100px' }} src="/images/update2.png" alt="News" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontFamily: '"Roboto", sans-serif', fontSize: '20px', color: 'black', lineHeight: '28px', fontWeight: 500 }}>
                  New Fuel Regulations Announced
                </div>
                <div style={{ fontFamily: '"Roboto", sans-serif', fontSize: '16px', color: 'black', lineHeight: '24px', fontWeight: 400 }}>
                  Click to read more
                </div>
              </div>
            </div>
            {/* News Card 2 */}
            <div style={{ border: '1px solid black', borderRadius: '6px', width: '407px', height: '132px', display: 'flex', padding: '16px', gap: '16px' }}>
              <img style={{ width: '100px', height: '100px' }} src="/images/update1.png" alt="News" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontFamily: '"Roboto", sans-serif', fontSize: '20px', color: 'black', lineHeight: '28px', fontWeight: 500 }}>
                  Oil Price Trends Q3 2023
                </div>
                <div style={{ fontFamily: '"Roboto", sans-serif', fontSize: '16px', color: 'black', lineHeight: '24px', fontWeight: 400 }}>
                  Click to read more
                </div>
              </div>
            </div>
            {/* News Card 3 */}
            <div style={{ border: '1px solid black', borderRadius: '6px', width: '407px', height: '132px', display: 'flex', padding: '16px', gap: '16px' }}>
              <img style={{ width: '100px', height: '100px' }} src="/images/update2.png" alt="News" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontFamily: '"Roboto", sans-serif', fontSize: '20px', color: 'black', lineHeight: '28px', fontWeight: 500 }}>
                  Upcoming Trade Conference
                </div>
                <div style={{ fontFamily: '"Roboto", sans-serif', fontSize: '16px', color: 'black', lineHeight: '24px', fontWeight: 400 }}>
                  Save the date!
                </div>
              </div>
            </div>
          </div>
          {/* News Grid - Row 2 */}
          <div style={{ display: 'flex', gap: '40px', width: '1301px', height: '172px' }}>
            {/* News Card 4 */}
            <div style={{ border: '1px solid black', borderRadius: '6px', width: '407px', height: '132px', display: 'flex', padding: '16px', gap: '16px' }}>
              <img style={{ width: '100px', height: '100px' }} src="/images/update1.png" alt="News" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontFamily: '"Roboto", sans-serif', fontSize: '20px', color: 'black', lineHeight: '28px', fontWeight: 500 }}>
                  Renewable Energy Grants
                </div>
                <div style={{ fontFamily: '"Roboto", sans-serif', fontSize: '16px', color: 'black', lineHeight: '24px', fontWeight: 400 }}>
                  Click to read more
                </div>
              </div>
            </div>
            {/* News Card 5 */}
            <div style={{ border: '1px solid black', borderRadius: '6px', width: '407px', height: '132px', display: 'flex', padding: '16px', gap: '16px' }}>
              <img style={{ width: '100px', height: '100px' }} src="/images/update2.png" alt="News" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontFamily: '"Roboto", sans-serif', fontSize: '20px', color: 'black', lineHeight: '28px', fontWeight: 500 }}>
                  New Pipeline Project
                </div>
                <div style={{ fontFamily: '"Roboto", sans-serif', fontSize: '16px', color: 'black', lineHeight: '24px', fontWeight: 400 }}>
                  Click to read more
                </div>
              </div>
            </div>
            {/* News Card 6 */}
            <div style={{ border: '1px solid black', borderRadius: '6px', width: '407px', height: '132px', display: 'flex', padding: '16px', gap: '16px' }}>
              <img style={{ width: '100px', height: '100px' }} src="/images/update1.png" alt="News" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontFamily: '"Roboto", sans-serif', fontSize: '20px', color: 'black', lineHeight: '28px', fontWeight: 500 }}>
                  Industry Awards 2023
                </div>
                <div style={{ fontFamily: '"Roboto", sans-serif', fontSize: '16px', color: 'black', lineHeight: '24px', fontWeight: 400 }}>
                  Nominees announced
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          <div className="disclaimer-text">
            <div style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Disclaimer</div>
            <div style={{ fontStyle: 'italic' }}>
              Petropal 2.0 facilitates connections between buyers and sellers but does not take responsibility for the transactions or any issues that may arise. We strongly encourage all users to perform their own due diligence and verification before completing any deals.
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
            width: '100%',
            height: '48px',
            paddingRight: '20px'
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <Link
                to="/signin/"
                onClick={() => window.scrollTo(0, 0)}
                style={{
                  marginLeft: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  textDecoration: 'none'
                }}
              >
                <span
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '26px',
                    color: 'rgba(1,47,107,1)',
                    lineHeight: '22.4px',
                    letterSpacing: '-0.4px',
                    fontWeight: 500
                  }}
                >
                  See All
                </span>
                <img width="18px" height="23px" src="/images/arrow.png" alt="Arrow" />
              </Link>
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

        {/* Footer Section */}
        <div className="footer">
          {/* Top Footer Content */}
          <div className="footerContent">
            {/* Logo */}
            <Link to="">
              <img className="logo" src="/images/logo_.png" alt="Petropal Logo" />
            </Link>

            {/* Navigation Links */}
            <div className="footerNav">
              <button
                onClick={() => setShowDownloadModal(true)}
                className="footerLinks"
              >
                Download App
              </button>

              <Link
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
                className="footerLinks"
              >
                About Us
              </Link>

              <button
                onClick={() => setShowContactModal(true)}
                className="footerLinks"
              >
                Contact Us
              </button>

              <a href="#" className="footerLinks">Help Center</a>
            </div>

            {/* Social Icons */}
            <div className="socialIcons">
              <img width="26px" height="25.9px" src="/images/facebook.png" alt="Facebook" />
              <img width="27px" height="27px" src="/images/Twitter.png" alt="Twitter" />
              <img width="28px" height="25px" src="/images/Linkedin.png" alt="LinkedIn" />
              <img width="26px" height="26px" src="/images/Instagram.png" alt="Instagram" />
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footerBottom">
            <div className="copyright">© 2025 Petropal. All rights reserved.</div>
            <div className="footerLinks">Privacy Policy Term of Service</div>
          </div>
        </div>

      </div>
      {/* Render modals conditionally */}
      {showDownloadModal && <DownloadModal onClose={() => setShowDownloadModal(false)} />}
      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
    </div>
  );
};

export default Home;