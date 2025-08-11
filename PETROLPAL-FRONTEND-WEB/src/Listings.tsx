import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DownloadModal from './DownloadModal';
import ContactModal from './ContactModal';
import styles from './Listings.module.css';


// Import the modal components
import AddModal from './AddModal';
import PostCreationModal from './PostCreationModal';
import PostUploadModal from './PostUploadModal';
import PostDetailsModal from './PostDetailsModal';
import DiscardModal from './DiscardModal';
import AdCreationModal from './AdCreationModal';
import AdUploadModal from './AdUploadModal';
import AdDetailsModal from './AdDetailsModal';

const Listings = () => {
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
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Petropal - Trade Fuel, Solar &amp; Energy Products with Confidence</title>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.navBar}>
            {/* Top Navigation Row */}
            <div className={styles.navLinks} style={{ width: '96%' }}>
              {/* Logo */}
              <Link to="/loggedin">
                <img className={styles.logo} src="/images/logo_.png" alt="Petropal Logo" onClick={() => window.scrollTo(0, 0)} />
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

        {/* Latest Listings Section */}
        <div className={styles.latestListings}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>
              Latest Listings
            </div>
          </div>

          {/* First 12 Products (4x3 Grid) */}
          <div className={styles.productGrid4Col}>
            {/* Product 1 */}
            <div className={styles.productContainer}>
              <img className={styles.productImage} src="/images/product1.png" alt="Diesel" />
              <div className={styles.productTitle}>
                Diesel (5000L Min.)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      Aidmax Energy
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  Diesel price update: Be the first to get the new KES 183/liter rate on all bulk orders
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Nairobi, Kenya
                </div>
              </div>
              <div className={styles.price}>
                KES 183/litre
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 15 min ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className={styles.productContainer}>
              <img className={styles.productImage} src="/images/product2.png" alt="Gas-oil" />
              <div className={styles.productTitle}>
                Gas-oil (10,000L Min.)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      Hass Petroleum
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  Premium quality gas-oil with low sulfur content, ideal for industrial machinery
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Kisumu
                </div>
              </div>
              <div className={styles.price}>
                KES 183/litre
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 1h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className={styles.productContainer}>
              <img className={styles.productImage} src="/images/product3.png" alt="Kerosene" />
              <div className={styles.productTitle}>
                Kerosene (50,000L Min.)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      Dalbit Petroleum
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  High-quality kerosene with clean burn properties, suitable for household and industrial use
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Mombasa
                </div>
              </div>
              <div className={styles.price}>
                KES 183/litre
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 2h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className={styles.productContainer}>
              <img className={styles.productSmallImage} src="/images/product4.png" alt="Solar Panels" />
              <div className={styles.productTitle}>
                Solar Panels (100 Units)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      Green Energy Ltd
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  450W monocrystalline solar panels with 25-year performance warranty and high efficiency
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Nakuru
                </div>
              </div>
              <div className={styles.price}>
                KES 8,500/unit
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 3h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className={styles.productContainer}>
              <img className={styles.productImage} src="/images/product5.png" alt="Fuel Additives" />
              <div className={styles.productTitle}>
                Fuel Additives (20L)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      Chemco Solutions
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  Advanced fuel treatment that cleans injectors, stabilizes fuel and improves combustion
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Eldoret
                </div>
              </div>
              <div className={styles.price}>
                KES 2,400/L
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 4h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 6 */}
            <div className={styles.productContainer}>
              <img className={styles.productSmallImage} src="/images/product6.png" alt="Lubricants" />
              <div className={styles.productTitle}>
                Lubricants (200 Drums)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      OilTech Kenya
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  Premium engine oils and industrial lubricants in bulk quantities with API certification
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Thika
                </div>
              </div>
              <div className={styles.price}>
                KES 5,200/drum
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 5h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 7 */}
            <div className={styles.productContainer}>
              <img className={styles.productSmallImage} src="/images/product7.png" alt="Petrol" />
              <div className={styles.productTitle}>
                Petrol (10,000L Min.)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      Prime Fuels
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  High-octane petrol with cleaning additives for better engine performance and efficiency
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Machakos
                </div>
              </div>
              <div className={styles.price}>
                KES 195/litre
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 6h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 8 */}
            <div className={styles.productContainer}>
              <img className={styles.productImage} src="/images/product8.png" alt="Batteries" />
              <div className={styles.productTitle}>
                Solar Batteries (50 Units)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      PowerStore Kenya
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  200Ah deep cycle solar batteries with 5-year warranty, perfect for off-grid solar systems
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Kitui
                </div>
              </div>
              <div className={styles.price}>
                KES 12,000/unit
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 7h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 9 */}
            <div className={styles.productContainer}>
              <img className={styles.productImage} src="/images/product1.png" alt="Diesel Generators" />
              <div className={styles.productTitle}>
                Diesel Generators (10 Units)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      GenPower Ltd
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  50kVA silent diesel generators with automatic transfer switch, ideal for commercial use
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Meru
                </div>
              </div>
              <div className={styles.price}>
                KES 350,000/unit
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 8h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 10 */}
            <div className={styles.productContainer}>
              <img className={styles.productImage} src="/images/product2.png" alt="Ethanol" />
              <div className={styles.productTitle}>
                Ethanol (20,000L)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      EcoFuels Africa
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  High-purity ethanol suitable for fuel blending, pharmaceutical and industrial applications
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Kisii
                </div>
              </div>
              <div className={styles.price}>
                KES 150/litre
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 9h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 11 */}
            <div className={styles.productContainer}>
              <img className={styles.productImage} src="/images/product3.png" alt="LPG Gas" />
              <div className={styles.productTitle}>
                LPG Gas (100 Cylinders)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      GasConnect Ltd
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  13kg LPG cylinders with safety valves, available for bulk purchase with delivery options
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Embu
                </div>
              </div>
              <div className={styles.price}>
                KES 2,800/cylinder
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 10h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 12 */}
            <div className={styles.productContainer}>
              <img className={styles.productSmallImage} src="/images/product4.png" alt="Wind Turbines" />
              <div className={styles.productTitle}>
                Wind Turbines (5 Units)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      RenewPower Solutions
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  10kW vertical axis wind turbines with smart grid integration, ideal for rural electrification
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Nyeri
                </div>
              </div>
              <div className={styles.price}>
                KES 1.2M/unit
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 12h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
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
          <div className={styles.productGrid4Col} style={{ marginTop: '70px' }}>
            {/* Product 13 */}
            <div className={styles.productContainer}>
              <img className={styles.productImage} src="/images/product5.png" alt="Biogas Digesters" />
              <div className={styles.productTitle}>
                Biogas Digesters (10 Units)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      GreenTech Solutions
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  6m³ fixed dome biogas digesters with complete installation kit for sustainable energy
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Kakamega
                </div>
              </div>
              <div className={styles.price}>
                KES 85,000/unit
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 14h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 14 */}
            <div className={styles.productContainer}>
              <img className={styles.productSmallImage} src="/images/product6.png" alt="Inverters" />
              <div className={styles.productTitle}>
                Solar Inverters (25 Units)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      PowerConvert Ltd
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  5kW pure sine wave solar inverters with MPPT charge controllers and 2-year warranty
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Kitale
                </div>
              </div>
              <div className={styles.price}>
                KES 45,000/unit
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 16h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 15 */}
            <div className={styles.productContainer}>
              <img className={styles.productSmallImage} src="/images/product7.png" alt="Biodiesel" />
              <div className={styles.productTitle}>
                Biodiesel (15,000L)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      EcoDiesel Kenya
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  B100 grade biodiesel made from recycled cooking oil, meets ASTM D6751 standards
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Naivasha
                </div>
              </div>
              <div className={styles.price}>
                KES 165/litre
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 18h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 16 */}
            <div className={styles.productContainer}>
              <img className={styles.productImage} src="/images/product8.png" alt="Charge Controllers" />
              <div className={styles.productTitle}>
                Solar Charge Controllers (50 Units)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      SolarTech Africa
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  60A MPPT solar charge controllers with LCD display and Bluetooth monitoring capability
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Kericho
                </div>
              </div>
              <div className={styles.price}>
                KES 12,500/unit
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 20h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 17 */}
            <div className={styles.productContainer}>
              <img className={styles.productImage} src="/images/product1.png" alt="Coal" />
              <div className={styles.productTitle}>
                Coal (10 Tonnes)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      Kenya Coal Traders
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  High-quality bituminous coal with high calorific value, suitable for industrial boilers
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Kitui
                </div>
              </div>
              <div className={styles.price}>
                KES 25,000/tonne
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 22h ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 18 */}
            <div className={styles.productContainer}>
              <img className={styles.productImage} src="/images/product2.png" alt="Solar Water Heaters" />
              <div className={styles.productTitle}>
                Solar Water Heaters (15 Units)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      SunTherm Ltd
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  200L direct solar water heating systems with evacuated tubes and stainless steel tanks
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Nakuru
                </div>
              </div>
              <div className={styles.price}>
                KES 65,000/unit
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 1d ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 19 */}
            <div className={styles.productContainer}>
              <img className={styles.productImage} src="/images/product3.png" alt="Charcoal" />
              <div className={styles.productTitle}>
                Charcoal (100 Bags)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      EcoCharcoal Kenya
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  Premium hardwood charcoal with long burn time and minimal smoke, packed in 50kg bags
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Voi
                </div>
              </div>
              <div className={styles.price}>
                KES 1,200/bag
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 1d ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Product 20 */}
            <div className={styles.productContainer}>
              <img className={styles.productSmallImage} src="/images/product4.png" alt="Energy Meters" />
              <div className={styles.productTitle}>
                Smart Energy Meters (30 Units)
              </div>
              <div className={styles.productDetails}>
                <a href="/profile" className={styles.companyLink}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>
                      MeterTech Africa
                    </div>
                    <div className={styles.verifiedBadge}>
                      <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                    </div>
                  </div>
                </a>
                <div className={styles.productDescription}>
                  Prepaid smart meters with remote monitoring and GSM connectivity for energy management
                </div>
              </div>
              <div className={styles.locationContainer}>
                <img className={styles.locationIcon} src="/images/location_.png" alt="Location" />
                <div className={styles.locationText}>
                  Thika
                </div>
              </div>
              <div className={styles.price}>
                KES 15,000/unit
              </div>
              <div className={styles.timeContainer}>
                <img className={styles.clockIcon} src="/images/clock.png" alt="Clock" />
                <div className={styles.timeText}>
                  Posted 2d ago
                </div>
              </div>
              <div className={styles.productActions}>
                <img className={styles.actionIcon} src="/images/like.png" alt="Like" />
                <img className={styles.messageIcon} src="/images/message.png" alt="Share" />
                <img className={styles.shareIcon} src="/images/share.png" alt="Save" />
                <div className={styles.startChatButton}>
                  <div className={styles.chatText}>
                    Start Chat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className={styles.footer}>
          {/* Top Footer Content */}
          <div className={styles.footerContent}>
            {/* Logo */}
            <Link to="/loggedin">
              <img className={styles.logo} src="/images/logo_.png" alt="Petropal Logo" onClick={() => window.scrollTo(0, 0)} />
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
    </div>
  );
};

export default Listings;