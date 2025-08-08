import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

interface HeaderSlide {
  id: number;
  img: string;
  caption: string;
}

interface PostData {
  title: string;
  description: string;
  price?: string;
  location?: string;
  category?: string;
  tags?: string[];
  contactInfo?: {
    email: string;
    phone: string;
  };
}

interface AdData {
  title: string;
  description: string;
  budget: number;
  duration: number;
  targetAudience: string[];
  contactInfo: {
    email: string;
    phone: string;
  };
}

const Loggedin: React.FC = () => {
  // State for header slider
  const [headerCurrentIndex, setHeaderCurrentIndex] = useState<number>(0);
  // State for modals
  const [showDownloadModal, setShowDownloadModal] = useState<boolean>(false);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);
  // State for profile dropdown
  const [showProfileDropdown, setShowProfileDropdown] = useState<boolean>(false);

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [sliderInterval, setSliderInterval] = useState<NodeJS.Timeout>();

  // Modal states
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showPostCreationModal, setShowPostCreationModal] = useState<boolean>(false);
  const [showPostUploadModal, setShowPostUploadModal] = useState<boolean>(false);
  const [showPostDetailsModal, setShowPostDetailsModal] = useState<boolean>(false);
  const [showDiscardModal, setShowDiscardModal] = useState<boolean>(false);
  const [showAdCreationModal, setShowAdCreationModal] = useState<boolean>(false);
  const [showAdUploadModal, setShowAdUploadModal] = useState<boolean>(false);
  const [showAdDetailsModal, setShowAdDetailsModal] = useState<boolean>(false);
  
  // Data states
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [adImage, setAdImage] = useState<string | null>(null);

  // Handle opening the add modal
  const handleAddClick = (): void => {
    setShowAddModal(true);
  };

  // Post flow handlers
  const handleSelectPost = (): void => {
    setShowAddModal(false);
    setShowPostCreationModal(true);
  };

  const handleFileSelect = (fileDataUrl: string | ArrayBuffer | null): void => {
    if (typeof fileDataUrl === 'string') {
      setSelectedImage(fileDataUrl);
      setShowPostCreationModal(false);
      setShowPostUploadModal(true);
    }
  };

  const handlePostUploadNext = (): void => {
    setShowPostUploadModal(false);
    setShowPostDetailsModal(true);
  };

  const handlePostDetailsBack = (): void => {
    setShowPostDetailsModal(false);
    setShowPostUploadModal(true);
  };

  const handlePost = (data: { image: string | null; caption: string; title: string; location: string; price: string }): void => {
    console.log('Posting:', data);
    setShowPostDetailsModal(false);
    alert('Post created successfully!');
  };

  // Ad flow handlers
  const handleSelectAd = (): void => {
    setShowAddModal(false);
    setShowAdCreationModal(true);
  };

  const handleUploadMedia = (): void => {
    setShowAdCreationModal(false);
    setShowAdUploadModal(true);
  };

  const handleBoostContent = (): void => {
    setShowAdCreationModal(false);
    alert('Boost content functionality would be implemented here');
  };

  const handleAdUploadNext = (image: string | ArrayBuffer | null): void => {
    if (typeof image === 'string') {
      setAdImage(image);
      setShowAdUploadModal(false);
      setShowAdDetailsModal(true);
    }
  };

  const handleAdSubmit = (data: { image: string; title: string; description: string; audience: string; budget: string }): void => {
    // Transform the data to AdData type as needed
    const adData: AdData = {
      title: data.title,
      description: data.description,
      budget: Number(data.budget),
      duration: 0, // Set a default or get from elsewhere if needed
      targetAudience: [data.audience], // Convert to array if needed
      contactInfo: {
        email: '', // Set default or get from elsewhere
        phone: '', // Set default or get from elsewhere
      },
    };
    console.log('Submitting ad:', adData);
    setShowAdDetailsModal(false);
    alert('Ad created successfully!');
  };

  // Discard handlers
  const handleRequestClose = (): void => {
    setShowDiscardModal(true);
  };

  const handleDiscard = (): void => {
    setShowDiscardModal(false);
    setShowPostCreationModal(false);
    setShowPostUploadModal(false);
    setShowPostDetailsModal(false);
    setShowAdCreationModal(false);
    setShowAdUploadModal(false);
    setShowAdDetailsModal(false);
    setSelectedImage(null);
    setAdImage(null);
  };

  const handleCancelDiscard = (): void => {
    setShowDiscardModal(false);
  };

  // Close handlers for each modal
  const handleCloseAddModal = (): void => {
    setShowAddModal(false);
  };

  const handleClosePostCreationModal = (): void => {
    if (selectedImage) {
      handleRequestClose();
    } else {
      setShowPostCreationModal(false);
    }
  };

  const handleClosePostUploadModal = (): void => {
    handleRequestClose();
  };

  const handleClosePostDetailsModal = (): void => {
    handleRequestClose();
  };

  const handleCloseAdCreationModal = (): void => {
    handleRequestClose();
  };

  const handleCloseAdUploadModal = (): void => {
    setShowAdUploadModal(false);
    setShowAdCreationModal(true);
  };

  const handleCloseAdDetailsModal = (): void => {
    setShowAdDetailsModal(false);
    setShowAdUploadModal(true);
  };

  // Back navigation handlers for ad flow
  const handleAdUploadBack = (): void => {
    setShowAdUploadModal(false);
    setShowAdCreationModal(true);
  };

  const handleAdDetailsBack = (): void => {
    setShowAdDetailsModal(false);
    setShowAdUploadModal(true);
  };

  useEffect(() => {
    // Start the slider interval when component mounts
    const interval: NodeJS.Timeout = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % 3); // Assuming 3 slides
    }, 4000);
    setSliderInterval(interval);

    // Clear interval on component unmount
    return () => {
      if (sliderInterval) if (sliderInterval) clearInterval(sliderInterval);
    };
  }, []);

  // Pause on hover
  const handleSliderMouseEnter = (): void => {
    if (sliderInterval) if (sliderInterval) clearInterval(sliderInterval);
  };

  const handleSliderMouseLeave = (): void => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % 3);
    }, 4000);
    setSliderInterval(interval);
  };

  const [currentAdIndex, setCurrentAdIndex] = useState<number>(0);
  const [adSliderInterval, setAdSliderInterval] = useState<NodeJS.Timeout>();

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Header slides data
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

  // Auto-rotate header slides
  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setHeaderCurrentIndex(prev => (prev + 1) % headerSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [headerSlides.length]);

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
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
    const handleKeyDown = (e: KeyboardEvent): void => {
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
          <div className={styles.navLinks} style={{ width: '97%' }}>
            {/* Logo */}
            <Link to="">
              <img className={styles.logo} src="/images/logo_.png" alt="Petropal Logo" />
            </Link>
            
            {/* Category Dropdown */}
            <div style={{ marginLeft: '37.2px', display: 'flex', alignItems: 'center' }}>
              <div className={styles.navLink}>Search by Category</div>
              <img style={{ marginLeft: '1.8px' }} width="13px" height="15px" src="/images/dropp.png" alt="Dropdown" />
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

      {/* Featured Sellers Content */}
      <div className={styles.featuredSellers}>
        {/* Featured Sellers header with See All link */}
        <div className={styles.sellersHeader}>
          <div className={styles.sellersTitle}>Featured Sellers</div>
          <Link to="/sellers" className={styles.seeAll}>
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
        <div className={styles.featuredSection}>
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
              className={`${styles.sliderImage} ${currentSlideIndex === 0 ? 'active' : ''}`}
            />
            <img
              src="/images/slider2.png"
              alt="Slider 2"
              className={`${styles.sliderImage} ${currentSlideIndex === 1 ? 'active' : ''}`}
            />
            <img
              src="/images/slider3.png"
              alt="Slider 3"
              className={`${styles.sliderImage} ${currentSlideIndex === 2 ? 'active' : ''}`}
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
                className={`${styles.dot} ${currentSlideIndex === 0 ? 'active' : ''}`}
                onClick={() => {
                  setCurrentSlideIndex(0);
                  if (sliderInterval) clearInterval(sliderInterval);
                  const interval = setInterval(() => {
                    setCurrentSlideIndex(prev => (prev + 1) % 3);
                  }, 4000);
                  setSliderInterval(interval);
                }}
              ></span>
              <span
                className={`${styles.dot} ${currentSlideIndex === 1 ? 'active' : ''}`}
                onClick={() => {
                  setCurrentSlideIndex(1);
                  if (sliderInterval) clearInterval(sliderInterval);
                  const interval = setInterval(() => {
                    setCurrentSlideIndex(prev => (prev + 1) % 3);
                  }, 4000);
                  setSliderInterval(interval);
                }}
              ></span>
              <span
                className={`${styles.dot} ${currentSlideIndex === 2 ? 'active' : ''}`}
                onClick={() => {
                  setCurrentSlideIndex(2);
                  if (sliderInterval) clearInterval(sliderInterval);
                  const interval = setInterval(() => {
                    setCurrentSlideIndex(prev => (prev + 1) % 3);
                  }, 4000);
                  setSliderInterval(interval);
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Listings Section - 4 Column Grid (12 Products) */}
      <div style={{ width: '1308px', marginTop: '72px' }}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>Latest Listings</div>
          <Link 
            to="/listings/" 
            onClick={() => window.scrollTo(0, 0)}
            className={styles.seeAll}
          >
            <span>See All</span>
            <img width="18px" height="23px" src="/images/arrow.png" alt="Arrow" />
          </Link>
        </div>
        
        {/* 4-Column Product Grid */}
        <div className={styles.productGrid}>
          {/* Row 1 */}
          {/* Product 1 */}
          <div className={styles.productContainer}>
            <img className={styles.productImage} src="/images/product1.png" alt="Diesel" />
            <div className={styles.productTitle}>Diesel (5000L Min.)</div>
            <div className={styles.companyInfo}>
              <a href="/profile" className={styles.companyName}>Aidmax Energy</a>
              <div className={styles.verifiedBadge}>
                <img src="/images/verified.png" width={13} height={13} alt="Verified" />
              </div>
            </div>
            <div className={styles.location}>
              <img width={14} height={16} src="/images/location_.png" alt="Location" />
              <div>Nairobi, Kenya</div>
            </div>
            <div className={styles.price}>KES 183/litre</div>
            <div className={styles.timePosted}>
              <img width={17} height={17} src="/images/clock.png" alt="Clock" />
              <div>Posted 15 min ago</div>
            </div>
            <div className={styles.productActions}>
              <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
              <div className={styles.startChatBtnSmall}>
                <div className={styles.startChatText}>Start Chat</div>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className={styles.productContainer}>
            <img className={styles.productImage} src="/images/product2.png" alt="Gas-oil" />
            <div className={styles.productTitle}>Gas-oil (10,000L Min.)</div>
            <div className={styles.companyInfo}>
              <a href="/profile" className={styles.companyName}>Hass Petroleum</a>
              <div className={styles.verifiedBadge}>
                <img src="/images/verified.png" width={13} height={13} alt="Verified" />
              </div>
            </div>
            <div className={styles.location}>
              <img width={14} height={16} src="/images/location_.png" alt="Location" />
              <div>Kisumu</div>
            </div>
            <div className={styles.price}>KES 183/litre</div>
            <div className={styles.timePosted}>
              <img width={17} height={17} src="/images/clock.png" alt="Clock" />
              <div>Posted 1h ago</div>
            </div>
            <div className={styles.productActions}>
              <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
              <div className={styles.startChatBtnSmall}>
                <div className={styles.startChatText}>Start Chat</div>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className={styles.productContainer}>
            <img className={styles.productImage} src="/images/product3.png" alt="Kerosene" />
            <div className={styles.productTitle}>Kerosene (50,000L Min.)</div>
            <div className={styles.companyInfo}>
              <a href="/profile" className={styles.companyName}>Dalbit Petroleum</a>
              <div className={styles.verifiedBadge}>
                <img src="/images/verified.png" width={13} height={13} alt="Verified" />
              </div>
            </div>
            <div className={styles.location}>
              <img width={14} height={16} src="/images/location_.png" alt="Location" />
              <div>Mombasa</div>
            </div>
            <div className={styles.price}>KES 183/litre</div>
            <div className={styles.timePosted}>
              <img width={17} height={17} src="/images/clock.png" alt="Clock" />
              <div>Posted 2h ago</div>
            </div>
            <div className={styles.productActions}>
              <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
              <div className={styles.startChatBtnSmall}>
                <div className={styles.startChatText}>Start Chat</div>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className={styles.productContainer}>
            <img className={styles.productImage} src="/images/product4.png" alt="Solar Panels" />
            <div className={styles.productTitle}>Solar Panels (100 Units)</div>
            <div className={styles.companyInfo}>
              <a href="/profile" className={styles.companyName}>Green Energy Ltd</a>
              <div className={styles.verifiedBadge}>
                <img src="/images/verified.png" width={13} height={13} alt="Verified" />
              </div>
            </div>
            <div className={styles.location}>
              <img width={14} height={16} src="/images/location_.png" alt="Location" />
              <div>Nakuru</div>
            </div>
            <div className={styles.price}>KES 8,500/unit</div>
            <div className={styles.timePosted}>
              <img width={17} height={17} src="/images/clock.png" alt="Clock" />
              <div>Posted 3h ago</div>
            </div>
            <div className={styles.productActions}>
              <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
              <div className={styles.startChatBtnSmall}>
                <div className={styles.startChatText}>Start Chat</div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          {/* Product 5 */}
          <div className={styles.productContainer}>
            <img className={styles.productImage} src="/images/product5.png" alt="Fuel Additives" />
            <div className={styles.productTitle}>Fuel Additives (20L)</div>
            <div className={styles.companyInfo}>
              <a href="/profile" className={styles.companyName}>Chemco Solutions</a>
              <div className={styles.verifiedBadge}>
                <img src="/images/verified.png" width={13} height={13} alt="Verified" />
              </div>
            </div>
            <div className={styles.location}>
              <img width={14} height={16} src="/images/location_.png" alt="Location" />
              <div>Eldoret</div>
            </div>
            <div className={styles.price}>KES 2,400/L</div>
            <div className={styles.timePosted}>
              <img width={17} height={17} src="/images/clock.png" alt="Clock" />
              <div>Posted 4h ago</div>
            </div>
            <div className={styles.productActions}>
              <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
              <div className={styles.startChatBtnSmall}>
                <div className={styles.startChatText}>Start Chat</div>
              </div>
            </div>
          </div>

          {/* Product 6 */}
          <div className={styles.productContainer}>
            <img className={styles.productImage} src="/images/product6.png" alt="Lubricants" />
            <div className={styles.productTitle}>Lubricants (200 Drums)</div>
            <div className={styles.companyInfo}>
              <a href="/profile" className={styles.companyName}>OilTech Kenya</a>
              <div className={styles.verifiedBadge}>
                <img src="/images/verified.png" width={13} height={13} alt="Verified" />
              </div>
            </div>
            <div className={styles.location}>
              <img width={14} height={16} src="/images/location_.png" alt="Location" />
              <div>Thika</div>
            </div>
            <div className={styles.price}>KES 5,200/drum</div>
            <div className={styles.timePosted}>
              <img width={17} height={17} src="/images/clock.png" alt="Clock" />
              <div>Posted 5h ago</div>
            </div>
            <div className={styles.productActions}>
              <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
              <div className={styles.startChatBtnSmall}>
                <div className={styles.startChatText}>Start Chat</div>
              </div>
            </div>
          </div>

          {/* Product 7 */}
          <div className={styles.productContainer}>
            <img className={styles.productImage} src="/images/product7.png" alt="Petrol" />
            <div className={styles.productTitle}>Petrol (10,000L Min.)</div>
            <div className={styles.companyInfo}>
              <a href="/profile" className={styles.companyName}>Prime Fuels</a>
              <div className={styles.verifiedBadge}>
                <img src="/images/verified.png" width={13} height={13} alt="Verified" />
              </div>
            </div>
            <div className={styles.location}>
              <img width={14} height={16} src="/images/location_.png" alt="Location" />
              <div>Machakos</div>
            </div>
            <div className={styles.price}>KES 195/litre</div>
            <div className={styles.timePosted}>
              <img width={17} height={17} src="/images/clock.png" alt="Clock" />
              <div>Posted 6h ago</div>
            </div>
            <div className={styles.productActions}>
              <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
              <div className={styles.startChatBtnSmall}>
                <div className={styles.startChatText}>Start Chat</div>
              </div>
            </div>
          </div>

          {/* Product 8 */}
          <div className={styles.productContainer}>
            <img className={styles.productImage} src="/images/product8.png" alt="Batteries" />
            <div className={styles.productTitle}>Solar Batteries (50 Units)</div>
            <div className={styles.companyInfo}>
              <a href="/profile" className={styles.companyName}>PowerStore Kenya</a>
              <div className={styles.verifiedBadge}>
                <img src="/images/verified.png" width={13} height={13} alt="Verified" />
              </div>
            </div>
            <div className={styles.location}>
              <img width={14} height={16} src="/images/location_.png" alt="Location" />
              <div>Kitui</div>
            </div>
            <div className={styles.price}>KES 12,000/unit</div>
            <div className={styles.timePosted}>
              <img width={17} height={17} src="/images/clock.png" alt="Clock" />
              <div>Posted 7h ago</div>
            </div>
            <div className={styles.productActions}>
              <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
              <div className={styles.startChatBtnSmall}>
                <div className={styles.startChatText}>Start Chat</div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          {/* Product 9 */}
          <div className={styles.productContainer}>
            <img className={styles.productImage} src="/images/product1.png" alt="Diesel Generators" />
            <div className={styles.productTitle}>Diesel Generators (10 Units)</div>
            <div className={styles.companyInfo}>
              <a href="/profile" className={styles.companyName}>GenPower Ltd</a>
              <div className={styles.verifiedBadge}>
                <img src="/images/verified.png" width={13} height={13} alt="Verified" />
              </div>
            </div>
            <div className={styles.location}>
              <img width={14} height={16} src="/images/location_.png" alt="Location" />
              <div>Meru</div>
            </div>
            <div className={styles.price}>KES 350,000/unit</div>
            <div className={styles.timePosted}>
              <img width={17} height={17} src="/images/clock.png" alt="Clock" />
              <div>Posted 8h ago</div>
            </div>
            <div className={styles.productActions}>
              <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
              <div className={styles.startChatBtnSmall}>
                <div className={styles.startChatText}>Start Chat</div>
              </div>
            </div>
          </div>

          {/* Product 10 */}
          <div className={styles.productContainer}>
            <img className={styles.productImage} src="/images/product2.png" alt="Ethanol" />
            <div className={styles.productTitle}>Ethanol (20,000L)</div>
            <div className={styles.companyInfo}>
              <a href="/profile" className={styles.companyName}>EcoFuels Africa</a>
              <div className={styles.verifiedBadge}>
                <img src="/images/verified.png" width={13} height={13} alt="Verified" />
              </div>
            </div>
            <div className={styles.location}>
              <img width={14} height={16} src="/images/location_.png" alt="Location" />
              <div>Kisii</div>
            </div>
            <div className={styles.price}>KES 150/litre</div>
            <div className={styles.timePosted}>
              <img width={17} height={17} src="/images/clock.png" alt="Clock" />
              <div>Posted 9h ago</div>
            </div>
            <div className={styles.productActions}>
              <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
              <div className={styles.startChatBtnSmall}>
                <div className={styles.startChatText}>Start Chat</div>
              </div>
            </div>
          </div>

          {/* Product 11 */}
          <div className={styles.productContainer}>
            <img className={styles.productImage} src="/images/product3.png" alt="LPG Gas" />
            <div className={styles.productTitle}>LPG Gas (100 Cylinders)</div>
            <div className={styles.companyInfo}>
              <a href="/profile" className={styles.companyName}>GasConnect Ltd</a>
              <div className={styles.verifiedBadge}>
                <img src="/images/verified.png" width={13} height={13} alt="Verified" />
              </div>
            </div>
            <div className={styles.location}>
              <img width={14} height={16} src="/images/location_.png" alt="Location" />
              <div>Embu</div>
            </div>
            <div className={styles.price}>KES 2,800/cylinder</div>
            <div className={styles.timePosted}>
              <img width={17} height={17} src="/images/clock.png" alt="Clock" />
              <div>Posted 10h ago</div>
            </div>
            <div className={styles.productActions}>
              <img width="18.3px" height="17.1px" src="/images/like.png" alt="Like" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/message.png" alt="Share" />
              <img style={{ marginLeft: '18px' }} width="20px" height="20px" src="/images/share.png" alt="Save" />
              <div className={styles.startChatBtnSmall}>
                <div className={styles.startChatText}>Start Chat</div>
              </div>
            </div>
          </div>

          {/* Product 12 */}
          <div className={styles.productContainer}>
            <img className={styles.productImage} src="/images/product4.png" alt="Wind Turbines" />
            <div className={styles.productTitle}>Wind Turbines (5 Units)</div>
            <div className={styles.companyInfo}>
              <a href="/profile" className={styles.companyName}>RenewPower Solutions</a>
              <div className={styles.verifiedBadge}>
                <img src="/images/verified.png" width={13} height={13} alt="Verified" />
              </div>
            </div>
            <div className={styles.location}>
              <img width={14} height={16} src="/images/location_.png" alt="Location" />
              <div>Nyeri</div>
            </div>
            <div className={styles.price}>KES 1.2M/unit</div>
            <div className={styles.timePosted}>
              <img width={17} height={17} src="/images/clock.png" alt="Clock" />
              <div>Posted 12h ago</div>
            </div>
            <div className={styles.productActions}>
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

      {/* Ad Banner Section */}
      <div className={styles.adBanner}>
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
          {/* Ad Label */}
          <div className={styles.adLabel}>
            <div>ad</div>
            <img width="19px" height="16px" src="/images/X.png" alt="Close" />
          </div>

          {/* Slide 1 */}
          <img
            src="/images/slider5.png"
            alt="Ad 1"
            className={`${styles.adSlide} ${currentAdIndex === 0 ? 'active' : ''}`}
          />
          {/* Slide 2 */}
          <img
            src="/images/slider6.png"
            alt="Ad 2"
            className={`${styles.adSlide} ${currentAdIndex === 1 ? 'active' : ''}`}
          />
          {/* Slide 3 */}
          <img
            src="/images/slider7.png"
            alt="Ad 3"
            className={`${styles.adSlide} ${currentAdIndex === 2 ? 'active' : ''}`}
          />
          {/* Slide 4 */}
          <img
            src="/images/slider4.png"
            alt="Ad 4"
            className={`${styles.adSlide} ${currentAdIndex === 3 ? 'active' : ''}`}
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
          image={selectedImage ?? undefined}
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