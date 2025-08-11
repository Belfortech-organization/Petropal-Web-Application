import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DownloadModal from './DownloadModal';
import ContactModal from './ContactModal';
import styles from './Industry.module.css';

interface HeaderSlide {
  id: number;
  img: string;
  caption: string;
}

const Industry = () => {
  const [headerCurrentIndex, setHeaderCurrentIndex] = useState(0);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  const sliderIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const adSliderIntervalRef = useRef<NodeJS.Timeout | null>(null);

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

  const headerSlides: HeaderSlide[][] = [
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

  useEffect(() => {
    sliderIntervalRef.current = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % 3);
    }, 4000);

    return () => {
      if (sliderIntervalRef.current) clearInterval(sliderIntervalRef.current);
    };
  }, []);

  const handleSliderMouseEnter = () => {
    if (sliderIntervalRef.current) clearInterval(sliderIntervalRef.current);
  };

  const handleSliderMouseLeave = () => {
    if (sliderIntervalRef.current) clearInterval(sliderIntervalRef.current);
    sliderIntervalRef.current = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % 3);
    }, 4000);
  };

  useEffect(() => {
    adSliderIntervalRef.current = setInterval(() => {
      setCurrentAdIndex(prev => (prev + 1) % 4);
    }, 4000);

    return () => {
      if (adSliderIntervalRef.current) clearInterval(adSliderIntervalRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderCurrentIndex(prev => (prev + 1) % headerSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [headerSlides.length]);

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
            <Link to="/loggedin">
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

      {/* First 6 News Cards */}
      <div className={styles.newsSection}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            Industry Updates
          </div>
        </div>

        {/* News Grid */}
        <div className={styles.newsGrid}>
          {/* News Cards 1-6 */}
          {[1, 2, 3, 4, 5, 6].map((card) => (
            <div className={styles.newsCardContainer} key={card}>
              <img
                className={styles.newsCardImage}
                src={`/images/update${card % 2 === 0 ? '2' : '1'}.png`}
                alt="News"
              />
              <div className={styles.newsCardTitle}>
                {[
                  "Kenya allocates $12.90mn to revive stalled Turkana oil project",
                  "Oil Price Trends Q3 2023",
                  "Upcoming Trade Conference",
                  "Renewable Energy Grants",
                  "New Pipeline Project",
                  "Industry Awards 2023"
                ][card - 1]}
              </div>
              <div className={styles.newsCardMeta}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "18px",
                    width: "170px",
                    height: "48px",
                  }}
                >
                  <div
                    style={{
                      backgroundImage: "url('/images/logo.png ')",
                      backgroundSize: "cover",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "48px",
                      height: "48px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        whiteSpace: "nowrap",
                        color: "rgba(0,0,0,1)",
                        lineHeight: "18.5px",
                        letterSpacing: "-0.01em",
                        fontWeight: "400",
                      }}
                    >
                      Logo
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "20px",
                      minWidth: "104px",
                      whiteSpace: "nowrap",
                      color: "rgba(1,47,107,1)",
                      lineHeight: "18.5px",
                      letterSpacing: "-0.01em",
                      fontWeight: "500",
                    }}
                  >
                    IntelliNews
                  </div>
                </div>
              </div>

              <div className={styles.newsCardTime}>
                <img
                  className={styles.clockIcon}
                  src="/images/clock.png"
                  alt="Posted Time"
                />
                Posted {card}h ago
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Ad Banner Section */}
      <div className={styles.adBannerContainer}>
        <div
          className={styles.adSlidesContainer}
          onMouseEnter={() => {
            if (adSliderIntervalRef.current) clearInterval(adSliderIntervalRef.current);
          }}
          onMouseLeave={() => {
            const interval = setInterval(() => {
              setCurrentAdIndex(prev => (prev + 1) % 4);
            }, 4000);
            adSliderIntervalRef.current = interval;
          }}
        >
          {/* Ad Label */}
          <div className={styles.adLabel}>
            <div className={styles.adText}>ad</div>
            <img className={styles.closeIcon} src="/images/X.png" alt="Close" />
          </div>

          {/* Ad Slides */}
          {[1, 2, 3, 4].map((slide) => (
            <img
              key={slide}
              src={`/images/slider${slide + 3}.png`}
              alt={`Ad ${slide}`}
              className={`${styles.sliderImage} ${currentAdIndex === slide - 1 ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Second 6 News Cards */}
      <div className={styles.newsSection} style={{ marginTop: '70px' }}>
        {/* News Grid */}
        <div className={styles.newsGrid}>
          {/* News Cards 7-12 */}
          {[7, 8, 9, 10, 11, 12].map((card) => (
            <div className={styles.newsCardContainer} key={card}>
              <img
                className={styles.newsCardImage}
                src={`/images/update${card % 2 === 0 ? '2' : '1'}.png`}
                alt="News"
              />
              <div className={styles.newsCardTitle}>
                {[
                  "Solar Energy Subsidies Announced",
                  "Fuel Price Adjustments",
                  "New Refinery Construction",
                  "Energy Storage Breakthrough",
                  "Wind Farm Expansion",
                  "Government Energy Policy Update"
                ][card - 7]}
              </div>
              <div className={styles.newsCardMeta}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "18px",
                    width: "170px",
                    height: "48px",
                  }}
                >
                  <div
                    style={{
                      backgroundImage: "url('/images/logo.png ')",
                      backgroundSize: "cover",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "48px",
                      height: "48px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        whiteSpace: "nowrap",
                        color: "rgba(0,0,0,1)",
                        lineHeight: "18.5px",
                        letterSpacing: "-0.01em",
                        fontWeight: "400",
                      }}
                    >
                      Logo
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "20px",
                      minWidth: "104px",
                      whiteSpace: "nowrap",
                      color: "rgba(1,47,107,1)",
                      lineHeight: "18.5px",
                      letterSpacing: "-0.01em",
                      fontWeight: "500",
                    }}
                  >
                    IntelliNews
                  </div>
                </div>
              </div>

              <div className={styles.newsCardTime}>
                <img
                  className={styles.clockIcon}
                  src="/images/clock.png"
                  alt="Posted Time"
                />
                Posted {card}h ago
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className={styles.upcomingEvents}>
        {/* Section Header */}
        <div className={styles.eventsHeader}>
          <div className={styles.eventsTitle}>
            Upcoming Events
          </div>
        </div>

        {/* Scrolling Events */}
        <div className={styles.scrollWrapper}>
          <div className={styles.scrollContainer}>
            {/* Duplicate image set twice for seamless scroll */}
            {[1, 2].map((set) => (
              <React.Fragment key={set}>
                <img
                  className={styles.eventImage}
                  src="/images/upcoming1.png"
                  alt="Energy Conference"
                />
                <img
                  className={styles.eventImage}
                  src="/images/upcoming2.png"
                  alt="Trade Summit"
                />
                <img
                  className={styles.eventImage}
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
          <Link to="/loggedin" className={styles.footerLogo}>
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

      {/* Render modals conditionally */}
      {showDownloadModal && <DownloadModal onClose={() => setShowDownloadModal(false)} />}
      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
    </div>
  );
};

export default Industry;