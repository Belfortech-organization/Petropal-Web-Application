import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DownloadModal from './DownloadModal';
import ContactModal from './ContactModal';
import styles from './Loggedin.module.css';


// Import the modal components
import AddModal from './AddModal';
import PostCreationModal from './PostCreationModal';
import PostUploadModal from './PostUploadModal';
import PostDetailsModal from './PostDetailsModal';
import DiscardModal from './DiscardModal';
import AdCreationModal from './AdCreationModal';
import AdUploadModal from './AdUploadModal';
import AdDetailsModal from './AdDetailsModal';

const Loggedin = () => {
  // State for header slider
  const [headerCurrentIndex, setHeaderCurrentIndex] = useState(0);
  // State for modals
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  // State for profile dropdown
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [sliderInterval, setSliderInterval] = useState<ReturnType<typeof setInterval> | null>(null);

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showPostCreationModal, setShowPostCreationModal] = useState(false);
  const [showPostUploadModal, setShowPostUploadModal] = useState(false);
  const [showPostDetailsModal, setShowPostDetailsModal] = useState(false);
  const [showDiscardModal, setShowDiscardModal] = useState(false);
  const [showAdCreationModal, setShowAdCreationModal] = useState(false);
  const [showAdUploadModal, setShowAdUploadModal] = useState(false);
  const [showAdDetailsModal, setShowAdDetailsModal] = useState(false);
  
  // Data states
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [adImage, setAdImage] = useState<string | undefined>(undefined);

  const productCardStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  height: '492px'
};

const productImageStyle: CSSProperties = {
  width: '310px',
  height: '298px',
  borderRadius: '10px'
};

const productTitleStyle: CSSProperties = {
  marginTop: '14px',
  fontFamily: '"Inter", sans-serif',
  fontSize: '17px',
  minWidth: '295px',
  whiteSpace: 'nowrap',
  color: 'rgba(18,18,18,1)',
  lineHeight: '18.5px',
  letterSpacing: '-0.2px',
  fontWeight: 600
};

const companyInfoStyle: CSSProperties = {
  marginTop: '11px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '4px',
  width: '247px',
  height: '19px'
};

const companyNameStyle: CSSProperties = {
  fontFamily: '"Inter", sans-serif',
  fontSize: '16px',
  whiteSpace: 'nowrap',
  color: 'rgba(18,18,18,1)',
  lineHeight: '18.5px',
  letterSpacing: '-0.01em',
  fontWeight: 500
};

const verifiedBadgeStyle: CSSProperties = {
  borderRadius: '9.5px',
  width: '19px',
  height: '19px',
  backgroundColor: 'rgba(1,47,107,1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const locationStyle: CSSProperties = {
  marginTop: '11px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: '138.3px',
  height: '19px'
};

const priceStyle: CSSProperties = {
  marginTop: '14px',
  fontFamily: '"Inter", sans-serif',
  fontSize: '16px',
  minWidth: '97px',
  whiteSpace: 'nowrap',
  color: 'rgba(18,18,18,1)',
  lineHeight: '100%',
  fontWeight: 400
};

const timePostedStyle: CSSProperties = {
  marginTop: '12px',
  display: 'flex',
  alignItems: 'center',
  gap: '11px',
  width: '167px',
  height: '19px'
};

const productActionsStyle: CSSProperties = {
  marginTop: '11px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%'
};

const startChatBtnStyle: CSSProperties = {
  borderRadius: '7.8px',
  border: '0.6px solid rgb(217,217,217)',
  width: '90px',
  height: '32px',
  backgroundColor: 'rgba(255,140,0,1)',
  marginLeft: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const startChatTextStyle: CSSProperties = {
  fontFamily: '"Inter", sans-serif',
  fontSize: '13px',
  color: 'rgba(255,255,255,1)',
  lineHeight: '14.2px',
  fontWeight: 600
};

  const handleDotClick = (index: number) => {
  setCurrentSlideIndex(index);
  if (sliderInterval) clearInterval(sliderInterval);
  const interval = setInterval(() => {
    setCurrentSlideIndex(prev => (prev + 1) % 3);
  }, 4000);
  setSliderInterval(interval);
};

  // Handle opening the add modal
  const handleAddClick = () => {
    setShowAddModal(true);
  };

  // Post flow handlers
  const handleSelectPost = () => {
    setShowAddModal(false);
    setShowPostCreationModal(true);
  };

  const handleFileSelect = (imageData: any) => {
    setSelectedImage(imageData);
    setShowPostCreationModal(false);
    setShowPostUploadModal(true);
  };

  const handlePostUploadNext = () => {
    setShowPostUploadModal(false);
    setShowPostDetailsModal(true);
  };

  const handlePostDetailsBack = () => {
    setShowPostDetailsModal(false);
    setShowPostUploadModal(true);
  };

  const handlePost = (postData: any) => {
    console.log('Posting:', postData);
    setShowPostDetailsModal(false);
    alert('Post created successfully!');
  };

  // Ad flow handlers
  const handleSelectAd = () => {
    setShowAddModal(false);
    setShowAdCreationModal(true);
  };

  const handleUploadMedia = () => {
    setShowAdCreationModal(false);
    setShowAdUploadModal(true);
  };

  const handleBoostContent = () => {
    setShowAdCreationModal(false);
    alert('Boost content functionality would be implemented here');
  };

  const handleAdUploadNext = (imageData: any) => {
    setAdImage(imageData);
    setShowAdUploadModal(false);
    setShowAdDetailsModal(true);
  };

  const handleAdSubmit = (adData: any) => {
    console.log('Submitting ad:', adData);
    setShowAdDetailsModal(false);
    alert('Ad created successfully!');
  };

  // Discard handlers
  const handleRequestClose = () => {
    setShowDiscardModal(true);
  };

  const handleDiscard = () => {
    setShowDiscardModal(false);
    setShowPostCreationModal(false);
    setShowPostUploadModal(false);
    setShowPostDetailsModal(false);
    setShowAdCreationModal(false);
    setShowAdUploadModal(false);
    setShowAdDetailsModal(false);
    setSelectedImage(undefined);
    setAdImage(undefined);
  };

  const handleCancelDiscard = () => {
    setShowDiscardModal(false);
  };

  // Close handlers for each modal
  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleClosePostCreationModal = () => {
    if (selectedImage) {
      handleRequestClose();
    } else {
      setShowPostCreationModal(false);
    }
  };

  const handleClosePostUploadModal = () => {
    handleRequestClose();
  };

  const handleClosePostDetailsModal = () => {
    handleRequestClose();
  };

  const handleCloseAdCreationModal = () => {
    handleRequestClose();
  };

  const handleCloseAdUploadModal = () => {
    setShowAdUploadModal(false);
    setShowAdCreationModal(true);
  };

  const handleCloseAdDetailsModal = () => {
    setShowAdDetailsModal(false);
    setShowAdUploadModal(true);
  };

  // Back navigation handlers for ad flow
  const handleAdUploadBack = () => {
    setShowAdUploadModal(false);
    setShowAdCreationModal(true);
  };

  const handleAdDetailsBack = () => {
    setShowAdDetailsModal(false);
    setShowAdUploadModal(true);
  };

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
const [currentAdIndex, setCurrentAdIndex] = useState(0);
// Use undefined instead of null for better type compatibility with clearInterval
const [adSliderInterval, setAdSliderInterval] = useState<NodeJS.Timeout | undefined>(undefined);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentAdIndex(prev => (prev + 1) % 4);
  }, 4000);

  setAdSliderInterval(interval);

  return () => {
    clearInterval(interval);
  };
}, []);

const handleSliderMouseLeave = () => {
  const interval = setInterval(() => {
    setCurrentAdIndex(prev => (prev + 1) % 4);
  }, 4000);
  setAdSliderInterval(interval);
};

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
    const handleKeyDown = (e: KeyboardEvent) => {
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
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.navBar}>
          {/* Top Navigation Row */}
          <div className={styles.navLinks} style={{ width: '96%' }}>
            {/* Logo */}
            <Link to="">
              <img className={styles.logo} src="/images/logo_.png" alt="Petropal Logo" />
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
            <div className={styles.searchContainer}>
              {/* Search Section */}
              <div className={styles.searchSection}>
                <img style={{ marginLeft: '16px' }} width="14.6px" height="14.6px" src="/images/search.png" alt="Search" />
                <div style={{ marginLeft: '18.4px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(1,47,107,0.5)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  Products & Services
                </div>
              </div>
              
              {/* Divider */}
              <img className={styles.searchDivider} src="/images/Line.png" alt="Divider" />
              
              {/* Location and Search Button */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img width="23px" height="23px" src="/images/location.png" alt="Location" />
                <div style={{ marginLeft: '15px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(1,47,107,0.5)', fontWeight: 600 }}>
                  Location
                </div>
                <div className={styles.searchButton}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'white', fontWeight: 600 }}>
                    Search
                  </div>
                </div>
              </div>
            </div>
            
            {/* Language and Profile Section */}
            <div style={{ marginRight: '30px', display: 'flex', alignItems: 'center' }}>
              {/* Language Selector */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '15px', fontFamily: '"Lato", sans-serif', fontSize: '18px', color: 'white', fontWeight: 500 }}>
                  English
                </div>
                <img style={{ marginRight: '50px' }} width="11px" height="7px" src="/images/drop.png" alt="Dropdown" />
              </div>
              
              {/* Profile Section */}
              <Link to="/user" style={{ textDecoration: 'none' }}>
                <div style={{ marginRight: '36px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'white', fontWeight: 500, marginRight: '24px' }}>
                    Owen I.
                  </div>
                  <img
                    className={styles.profilePic}
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
              {/* Add icon */}
              <img
                style={{
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  position: 'relative',
                  top: '0px',
                  transition: 'transform 0.2s ease-in-out',
                }}
                src="/images/add.png"
                alt="Add"
                onClick={handleAddClick}
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
              <div className={styles.headerSliderContainer}>
                {/* Current Slide */}
                <div className={styles.headerSlide} style={{ opacity: 1 }}>
                  {headerSlides[headerCurrentIndex].map((item) => (
                    <div className={styles.headerSlideGroup} key={item.id}>
                      <img className={styles.headerSlideImg} src={item.img} alt={item.caption} />
                      <div className={styles.headerSlideCaption}>{item.caption}</div>
                    </div>
                  ))}
                </div>

                {/* Slider Indicators */}
                <div className={styles.headerSliderIndicators}>
                  {headerSlides.map((_, index) => (
                    <div
                      key={index}
                      className={`${styles.headerIndicator} ${index === headerCurrentIndex ? 'active' : ''}`}
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

      {/* Featured Sellers Section */}
<div className={styles.featuredSellers}>
  {/* Featured Sellers header with See All link */}
  <div className={styles.sellersHeader}>
    <div className={styles.sellersTitle}>Featured Sellers</div>
    <Link 
      to="/sellers/" 
      onClick={() => window.scrollTo(0, 0)}
      className={styles.seeAll}
    >
      <span>See All</span>
      <img width="18px" height="23px" src="/images/arrow.png" alt="Arrow" />
    </Link>
  </div>
  
  {/* Seller logos */}
  <div className={styles.sellersLogos}>
    <img className={styles.sellerLogo} src="/images/seller1.png" alt="Seller" />
    <img className={styles.sellerLogo} src="/images/seller2.png" alt="Seller" />
    <img className={styles.sellerLogo} src="/images/seller3.png" alt="Seller" />
    <img className={styles.sellerLogo} src="/images/seller4.png" alt="Seller" />
    <img className={styles.sellerLogo} src="/images/seller5.png" alt="Seller" />
    <img className={styles.sellerLogo} src="/images/seller6.png" alt="Seller" />
    <img className={styles.sellerLogo} src="/images/seller7.png" alt="Seller" />
    <img className={styles.sellerLogo} src="/images/seller7.png" alt="Seller" />
  </div>
  
  {/* Slider Section */}
  <div className={styles.sliderSection}>
    {/* Slider container */}
    <div
      id="imageSlider"
      className={styles.sliderContainer}
      onMouseEnter={handleSliderMouseEnter}
      onMouseLeave={handleSliderMouseLeave}
    >
      <img
        src="/images/slider1.png"
        alt="Slider 1"
        className={`${styles.sliderImage} ${currentSlideIndex === 0 ? styles.active : ''}`}
      />
      <img
        src="/images/slider2.png"
        alt="Slider 2"
        className={`${styles.sliderImage} ${currentSlideIndex === 1 ? styles.active : ''}`}
      />
      <img
        src="/images/slider3.png"
        alt="Slider 3"
        className={`${styles.sliderImage} ${currentSlideIndex === 2 ? styles.active : ''}`}
      />

      {/* Content overlay on the left */}
      <div className={styles.sliderContentOverlay}>
        <div style={{ fontSize: '50px', color: 'white', fontWeight: 600 }}>40%</div>
        <div style={{ marginTop: '10px', fontSize: '24px', color: 'white', fontWeight: 600 }}>Today's special</div>
        <div style={{ marginTop: '10px', fontSize: '20px', color: 'white', fontWeight: 500 }}>Hurry! Grab Your Discounted Fuel Now!</div>
      </div>

      {/* Navigation dots */}
      <div className={styles.sliderDots}>
        <span
          className={`${styles.dot} ${currentSlideIndex === 0 ? styles.active : ''}`}
          onClick={() => handleDotClick(0)}
        ></span>
        <span
          className={`${styles.dot} ${currentSlideIndex === 1 ? styles.active : ''}`}
          onClick={() => handleDotClick(1)}
        ></span>
        <span
          className={`${styles.dot} ${currentSlideIndex === 2 ? styles.active : ''}`}
          onClick={() => handleDotClick(2)}
        ></span>
      </div>
    </div>
  </div>
</div>

{/* Latest Listings Section - 4 Column Grid (12 Products) */}
<div style={{width: '1308px', marginTop: '72px'}}>
  {/* Section Header */}
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '45px'}}>
    <div style={{fontFamily: '"Inter", sans-serif', fontSize: '30px', color: 'rgba(0,0,0,1)', lineHeight: '48px', fontWeight: 600}}>
      Latest Listings
    </div>
    <Link 
      to="/listings/" 
      onClick={() => window.scrollTo(0, 0)}
      style={{
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
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    width: '100%'
  }}>
    {/* Row 1 */}
    <div style={productCardStyle}>
      <img style={productImageStyle} src="/images/product1.png" alt="Diesel" />
      <div style={productTitleStyle}>Diesel (5000L Min.)</div>
      <div style={companyInfoStyle}>
        <a href="/profile" style={{ ...companyNameStyle, textDecoration: 'none' }}>Aidmax Energy</a>
        <div style={verifiedBadgeStyle}>
          <img src="/images/verified.png" width={13} height={13} alt="Verified" />
        </div>
      </div>
      <div style={locationStyle}>
        <img width={14} height={16} src="/images/location_.png" alt="Location" />
        <div>Nairobi, Kenya</div>
      </div>
      <div style={priceStyle}>KES 183/litre</div>
      <div style={timePostedStyle}>
        <img width={17} height={17} src="/images/clock.png" alt="Clock" />
        <div>Posted 15 min ago</div>
      </div>
      <div style={productActionsStyle}>
        <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/message.png" alt="Share" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/share.png" alt="Save" />
        <div style={startChatBtnStyle}>
          <div style={startChatTextStyle}>Start Chat</div>
        </div>
      </div>
    </div>
    
    {/* Product 2 */}
    <div style={productCardStyle}>
      <img style={productImageStyle} src="/images/product2.png" alt="Gas-oil" />
      <div style={productTitleStyle}>Gas-oil (10,000L Min.)</div>
      <div style={companyInfoStyle}>
        <a href="/profile" style={{ ...companyNameStyle, textDecoration: 'none' }}>Hass Petroleum</a>
        <div style={verifiedBadgeStyle}>
          <img src="/images/verified.png" width={13} height={13} alt="Verified" />
        </div>
      </div>
      <div style={locationStyle}>
        <img width={14} height={16} src="/images/location_.png" alt="Location" />
        <div>Kisumu</div>
      </div>
      <div style={priceStyle}>KES 183/litre</div>
      <div style={timePostedStyle}>
        <img width={17} height={17} src="/images/clock.png" alt="Clock" />
        <div>Posted 1h ago</div>
      </div>
      <div style={productActionsStyle}>
        <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/message.png" alt="Share" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/share.png" alt="Save" />
        <div style={startChatBtnStyle}>
          <div style={startChatTextStyle}>Start Chat</div>
        </div>
      </div>
    </div>
    
    {/* Product 3 */}
    <div style={productCardStyle}>
      <img style={productImageStyle} src="/images/product3.png" alt="Kerosene" />
      <div style={productTitleStyle}>Kerosene (50,000L Min.)</div>
      <div style={companyInfoStyle}>
        <a href="/profile" style={{ ...companyNameStyle, textDecoration: 'none' }}>Dalbit Petroleum</a>
        <div style={verifiedBadgeStyle}>
          <img src="/images/verified.png" width={13} height={13} alt="Verified" />
        </div>
      </div>
      <div style={locationStyle}>
        <img width={14} height={16} src="/images/location_.png" alt="Location" />
        <div>Mombasa</div>
      </div>
      <div style={priceStyle}>KES 183/litre</div>
      <div style={timePostedStyle}>
        <img width={17} height={17} src="/images/clock.png" alt="Clock" />
        <div>Posted 2h ago</div>
      </div>
      <div style={productActionsStyle}>
        <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/message.png" alt="Share" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/share.png" alt="Save" />
        <div style={startChatBtnStyle}>
          <div style={startChatTextStyle}>Start Chat</div>
        </div>
      </div>
    </div>
    
    {/* Product 4 */}
    <div style={productCardStyle}>
      <img style={productImageStyle} src="/images/product4.png" alt="Solar Panels" />
      <div style={productTitleStyle}>Solar Panels (100 Units)</div>
      <div style={companyInfoStyle}>
        <a href="/profile" style={{ ...companyNameStyle, textDecoration: 'none' }}>Green Energy Ltd</a>
        <div style={verifiedBadgeStyle}>
          <img src="/images/verified.png" width={13} height={13} alt="Verified" />
        </div>
      </div>
      <div style={locationStyle}>
        <img width={14} height={16} src="/images/location_.png" alt="Location" />
        <div>Nakuru</div>
      </div>
      <div style={priceStyle}>KES 8,500/unit</div>
      <div style={timePostedStyle}>
        <img width={17} height={17} src="/images/clock.png" alt="Clock" />
        <div>Posted 3h ago</div>
      </div>
      <div style={productActionsStyle}>
        <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/message.png" alt="Share" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/share.png" alt="Save" />
        <div style={startChatBtnStyle}>
          <div style={startChatTextStyle}>Start Chat</div>
        </div>
      </div>
    </div>
    
    {/* Row 2 */}
    {/* Product 5 */}
    <div style={productCardStyle}>
      <img style={productImageStyle} src="/images/product5.png" alt="Fuel Additives" />
      <div style={productTitleStyle}>Fuel Additives (20L)</div>
      <div style={companyInfoStyle}>
        <a href="/profile" style={{ ...companyNameStyle, textDecoration: 'none' }}>Chemco Solutions</a>
        <div style={verifiedBadgeStyle}>
          <img src="/images/verified.png" width={13} height={13} alt="Verified" />
        </div>
      </div>
      <div style={locationStyle}>
        <img width={14} height={16} src="/images/location_.png" alt="Location" />
        <div>Eldoret</div>
      </div>
      <div style={priceStyle}>KES 2,400/L</div>
      <div style={timePostedStyle}>
        <img width={17} height={17} src="/images/clock.png" alt="Clock" />
        <div>Posted 4h ago</div>
      </div>
      <div style={productActionsStyle}>
        <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/message.png" alt="Share" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/share.png" alt="Save" />
        <div style={startChatBtnStyle}>
          <div style={startChatTextStyle}>Start Chat</div>
        </div>
      </div>
    </div>
    
    {/* Product 6 */}
    <div style={productCardStyle}>
      <img style={productImageStyle} src="/images/product6.png" alt="Lubricants" />
      <div style={productTitleStyle}>Lubricants (200 Drums)</div>
      <div style={companyInfoStyle}>
        <a href="/profile" style={{ ...companyNameStyle, textDecoration: 'none' }}>OilTech Kenya</a>
        <div style={verifiedBadgeStyle}>
          <img src="/images/verified.png" width={13} height={13} alt="Verified" />
        </div>
      </div>
      <div style={locationStyle}>
        <img width={14} height={16} src="/images/location_.png" alt="Location" />
        <div>Thika</div>
      </div>
      <div style={priceStyle}>KES 5,200/drum</div>
      <div style={timePostedStyle}>
        <img width={17} height={17} src="/images/clock.png" alt="Clock" />
        <div>Posted 5h ago</div>
      </div>
      <div style={productActionsStyle}>
        <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/message.png" alt="Share" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/share.png" alt="Save" />
        <div style={startChatBtnStyle}>
          <div style={startChatTextStyle}>Start Chat</div>
        </div>
      </div>
    </div>
    
    {/* Product 7 */}
    <div style={productCardStyle}>
      <img style={productImageStyle} src="/images/product7.png" alt="Petrol" />
      <div style={productTitleStyle}>Petrol (10,000L Min.)</div>
      <div style={companyInfoStyle}>
        <a href="/profile" style={{ ...companyNameStyle, textDecoration: 'none' }}>Prime Fuels</a>
        <div style={verifiedBadgeStyle}>
          <img src="/images/verified.png" width={13} height={13} alt="Verified" />
        </div>
      </div>
      <div style={locationStyle}>
        <img width={14} height={16} src="/images/location_.png" alt="Location" />
        <div>Machakos</div>
      </div>
      <div style={priceStyle}>KES 195/litre</div>
      <div style={timePostedStyle}>
        <img width={17} height={17} src="/images/clock.png" alt="Clock" />
        <div>Posted 6h ago</div>
      </div>
      <div style={productActionsStyle}>
        <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/message.png" alt="Share" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/share.png" alt="Save" />
        <div style={startChatBtnStyle}>
          <div style={startChatTextStyle}>Start Chat</div>
        </div>
      </div>
    </div>
    
    {/* Product 8 */}
    <div style={productCardStyle}>
      <img style={productImageStyle} src="/images/product8.png" alt="Batteries" />
      <div style={productTitleStyle}>Solar Batteries (50 Units)</div>
      <div style={companyInfoStyle}>
        <a href="/profile" style={{ ...companyNameStyle, textDecoration: 'none' }}>PowerStore Kenya</a>
        <div style={verifiedBadgeStyle}>
          <img src="/images/verified.png" width={13} height={13} alt="Verified" />
        </div>
      </div>
      <div style={locationStyle}>
        <img width={14} height={16} src="/images/location_.png" alt="Location" />
        <div>Kitui</div>
      </div>
      <div style={priceStyle}>KES 12,000/unit</div>
      <div style={timePostedStyle}>
        <img width={17} height={17} src="/images/clock.png" alt="Clock" />
        <div>Posted 7h ago</div>
      </div>
      <div style={productActionsStyle}>
        <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/message.png" alt="Share" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/share.png" alt="Save" />
        <div style={startChatBtnStyle}>
          <div style={startChatTextStyle}>Start Chat</div>
        </div>
      </div>
    </div>
    
    {/* Row 3 */}
    {/* Product 9 */}
    <div style={productCardStyle}>
      <img style={productImageStyle} src="/images/product1.png" alt="Diesel Generators" />
      <div style={productTitleStyle}>Diesel Generators (10 Units)</div>
      <div style={companyInfoStyle}>
        <a href="/profile" style={{ ...companyNameStyle, textDecoration: 'none' }}>GenPower Ltd</a>
        <div style={verifiedBadgeStyle}>
          <img src="/images/verified.png" width={13} height={13} alt="Verified" />
        </div>
      </div>
      <div style={locationStyle}>
        <img width={14} height={16} src="/images/location_.png" alt="Location" />
        <div>Meru</div>
      </div>
      <div style={priceStyle}>KES 350,000/unit</div>
      <div style={timePostedStyle}>
        <img width={17} height={17} src="/images/clock.png" alt="Clock" />
        <div>Posted 8h ago</div>
      </div>
      <div style={productActionsStyle}>
        <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/message.png" alt="Share" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/share.png" alt="Save" />
        <div style={startChatBtnStyle}>
          <div style={startChatTextStyle}>Start Chat</div>
        </div>
      </div>
    </div>
    
    {/* Product 10 */}
    <div style={productCardStyle}>
      <img style={productImageStyle} src="/images/product2.png" alt="Ethanol" />
      <div style={productTitleStyle}>Ethanol (20,000L)</div>
      <div style={companyInfoStyle}>
        <a href="/profile" style={{ ...companyNameStyle, textDecoration: 'none' }}>EcoFuels Africa</a>
        <div style={verifiedBadgeStyle}>
          <img src="/images/verified.png" width={13} height={13} alt="Verified" />
        </div>
      </div>
      <div style={locationStyle}>
        <img width={14} height={16} src="/images/location_.png" alt="Location" />
        <div>Kisii</div>
      </div>
      <div style={priceStyle}>KES 150/litre</div>
      <div style={timePostedStyle}>
        <img width={17} height={17} src="/images/clock.png" alt="Clock" />
        <div>Posted 9h ago</div>
      </div>
      <div style={productActionsStyle}>
        <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/message.png" alt="Share" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/share.png" alt="Save" />
        <div style={startChatBtnStyle}>
          <div style={startChatTextStyle}>Start Chat</div>
        </div>
      </div>
    </div>
    
    {/* Product 11 */}
    <div style={productCardStyle}>
      <img style={productImageStyle} src="/images/product3.png" alt="LPG Gas" />
      <div style={productTitleStyle}>LPG Gas (100 Cylinders)</div>
      <div style={companyInfoStyle}>
        <a href="/profile" style={{ ...companyNameStyle, textDecoration: 'none' }}>GasConnect Ltd</a>
        <div style={verifiedBadgeStyle}>
          <img src="/images/verified.png" width={13} height={13} alt="Verified" />
        </div>
      </div>
      <div style={locationStyle}>
        <img width={14} height={16} src="/images/location_.png" alt="Location" />
        <div>Embu</div>
      </div>
      <div style={priceStyle}>KES 2,800/cylinder</div>
      <div style={timePostedStyle}>
        <img width={17} height={17} src="/images/clock.png" alt="Clock" />
        <div>Posted 10h ago</div>
      </div>
      <div style={productActionsStyle}>
        <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/message.png" alt="Share" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/share.png" alt="Save" />
        <div style={startChatBtnStyle}>
          <div style={startChatTextStyle}>Start Chat</div>
        </div>
      </div>
    </div>
    
    {/* Product 12 */}
    <div style={productCardStyle}>
      <img style={productImageStyle} src="/images/product4.png" alt="Wind Turbines" />
      <div style={productTitleStyle}>Wind Turbines (5 Units)</div>
      <div style={companyInfoStyle}>
        <a href="/profile" style={{ ...companyNameStyle, textDecoration: 'none' }}>RenewPower Solutions</a>
        <div style={verifiedBadgeStyle}>
          <img src="/images/verified.png" width={13} height={13} alt="Verified" />
        </div>
      </div>
      <div style={locationStyle}>
        <img width={14} height={16} src="/images/location_.png" alt="Location" />
        <div>Nyeri</div>
      </div>
      <div style={priceStyle}>KES 1.2M/unit</div>
      <div style={timePostedStyle}>
        <img width={17} height={17} src="/images/clock.png" alt="Clock" />
        <div>Posted 12h ago</div>
      </div>
      <div style={productActionsStyle}>
        <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/message.png" alt="Share" />
        <img style={{marginLeft: '18px'}} width="20px" height="20px" src="/images/share.png" alt="Save" />
        <div style={startChatBtnStyle}>
          <div style={startChatTextStyle}>Start Chat</div>
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

      {/* Industry Updates Section */}
      <div className={styles.industryUpdates}>
        {/* Section Header */}
        <div className={styles.updatesHeader}>
          <div className={styles.updatesTitle}>Industry Updates</div>
          <a href="/industry" className={styles.seeAll}>
            <span>See All</span>
            <img width="18px" height="23px" src="/images/arrow.png" alt="Arrow" />
          </a>
        </div>
        
        {/* News Grid - Row 1 */}
        <div className={styles.updatesGrid}>
          {/* News Card 1 */}
          <div className={styles.updateCard}>
            <img className={styles.updateImage} src="/images/update2.png" alt="News" />
            <div className={styles.updateContent}>
              <div className={styles.updateTitle}>New Fuel Regulations Announced</div>
              <div className={styles.updateDescription}>Click to read more</div>
            </div>
          </div>
          
          {/* News Card 2 */}
          <div className={styles.updateCard}>
            <img className={styles.updateImage} src="/images/update1.png" alt="News" />
            <div className={styles.updateContent}>
              <div className={styles.updateTitle}>Oil Price Trends Q3 2023</div>
              <div className={styles.updateDescription}>Click to read more</div>
            </div>
          </div>
          
          {/* News Card 3 */}
          <div className={styles.updateCard}>
            <img className={styles.updateImage} src="/images/update2.png" alt="News" />
            <div className={styles.updateContent}>
              <div className={styles.updateTitle}>Upcoming Trade Conference</div>
              <div className={styles.updateDescription}>Save the date!</div>
            </div>
          </div>
        </div>
        
        {/* News Grid - Row 2 */}
        <div className={styles.updatesGrid}>
          {/* News Card 4 */}
          <div className={styles.updateCard}>
            <img className={styles.updateImage} src="/images/update1.png" alt="News" />
            <div className={styles.updateContent}>
              <div className={styles.updateTitle}>Renewable Energy Grants</div>
              <div className={styles.updateDescription}>Click to read more</div>
            </div>
          </div>
          
          {/* News Card 5 */}
          <div className={styles.updateCard}>
            <img className={styles.updateImage} src="/images/update2.png" alt="News" />
            <div className={styles.updateContent}>
              <div className={styles.updateTitle}>New Pipeline Project</div>
              <div className={styles.updateDescription}>Click to read more</div>
            </div>
          </div>
          
          {/* News Card 6 */}
          <div className={styles.updateCard}>
            <img className={styles.updateImage} src="/images/update1.png" alt="News" />
            <div className={styles.updateContent}>
              <div className={styles.updateTitle}>Industry Awards 2023</div>
              <div className={styles.updateDescription}>Nominees announced</div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className={styles.disclaimer}>
        <div className={styles.disclaimerText}>
          <div style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Disclaimer</div>
          <div style={{ fontStyle: 'italic' }}>
            Petropal 2.0 facilitates connections between buyers and sellers but does not take responsibility for the transactions or any issues that may arise. We strongly encourage all users to perform their own due diligence and verification before completing any deals.
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className={styles.upcomingEvents}>
        {/* Section Header */}
        <div className={styles.eventsHeader}>
          <div className={styles.eventsTitle}>Upcoming Events</div>
          <div className={styles.seeAll}>
            <span>See All</span>
            <img width="18px" height="23px" src="/images/arrow.png" alt="Arrow" style={{ marginLeft: '-4px' }} />
          </div>
        </div>

        {/* Scrolling Events */}
        <div className={styles.scrollWrapper}>
          <div className={styles.scrollContainer}>
            {/* Duplicate image set twice for seamless scroll */}
            {[1, 2].map((set) => (
              <React.Fragment key={set}>
                <img
                  className={styles.eventImageScroll}
                  src="/images/upcoming1.png"
                  alt="Energy Conference"
                />
                <img
                  className={styles.eventImageScroll}
                  src="/images/upcoming2.png"
                  alt="Trade Summit"
                />
                <img
                  className={styles.eventImageScroll}
                  src="/images/upcoming3.png"
                  alt="Industry Expo"
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className={styles.footer}>
        {/* Top Footer Content */}
        <div className={styles.footerContent}>
  {/* Logo */}
  <Link to="">
    <img className={styles.logo} src="/images/logo_.png" alt="Petropal Logo" />
  </Link>

  {/* Navigation Links */}
  <div className={styles.footerNav}>
    <button
      onClick={() => setShowDownloadModal(true)}
      className={styles.footerLinks}
    >
      Download App
    </button>

    <Link 
      to="/about"
      onClick={() => window.scrollTo(0, 0)}
      className={styles.footerLinks}
    >
      About Us
    </Link>

    <button
      onClick={() => setShowContactModal(true)}
      className={styles.footerLinks}
    >
      Contact Us
    </button>

    <a href="#" className={styles.footerLinks}>Help Center</a>
  </div>

  {/* Social Icons */}
  <div className={styles.socialIcons}>
    <img width="26px" height="25.9px" src="/images/facebook.png" alt="Facebook" />
    <img width="27px" height="27px" src="/images/Twitter.png" alt="Twitter" />
    <img width="28px" height="25px" src="/images/Linkedin.png" alt="LinkedIn" />
    <img width="26px" height="26px" src="/images/Instagram.png" alt="Instagram" />
  </div>
</div>

        
        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>© 2025 Petropal. All rights reserved.</div>
          <div className={styles.footerLinks}>Privacy Policy Term of Service</div>
        </div>
      </div>

      {/* Render modals */}
      {showAddModal && (
        <AddModal 
          onClose={handleCloseAddModal}
          onSelectPost={handleSelectPost}
          onSelectAd={handleSelectAd}
        />
      )}

      {showPostCreationModal && (
        <PostCreationModal 
          onClose={handleClosePostCreationModal}
          onFileSelect={handleFileSelect}
        />
      )}

      {showPostUploadModal && (
        <PostUploadModal 
          image={selectedImage}
          onClose={handleClosePostUploadModal}
          onNext={handlePostUploadNext}
          onBack={() => {
            setShowPostUploadModal(false);
            setShowPostCreationModal(true);
          }}
        />
      )}

      {showPostDetailsModal && (
        <PostDetailsModal 
          image={selectedImage ?? ""}
          onClose={handleClosePostDetailsModal}
          onPost={handlePost}
          onBack={handlePostDetailsBack}
        />
      )}

      {showDiscardModal && (
        <DiscardModal 
          onClose={handleCancelDiscard}
          onDiscard={handleDiscard}
        />
      )}

      {showAdCreationModal && (
        <AdCreationModal 
          onClose={handleCloseAdCreationModal}
          onUploadMedia={handleUploadMedia}
          onBoostContent={handleBoostContent}
        />
      )}

      {showAdUploadModal && (
        <AdUploadModal 
          onClose={handleCloseAdUploadModal}
          onNext={handleAdUploadNext}
          onBack={handleAdUploadBack}
        />
      )}

      {showAdDetailsModal && (
        <AdDetailsModal 
          image={adImage ?? ""}
          onClose={handleCloseAdDetailsModal}
          onSubmit={handleAdSubmit}
          onBack={handleAdDetailsBack}
        />
      )}

      {/* Render modals conditionally */}
      {showDownloadModal && <DownloadModal onClose={() => setShowDownloadModal(false)} />}
      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
    </div>
  );
};

export default Loggedin;