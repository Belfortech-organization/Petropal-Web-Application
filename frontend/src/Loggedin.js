import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DownloadModal from './DownloadModal';
import ContactModal from './ContactModal';

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
  const [sliderInterval, setSliderInterval] = useState(null);

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
  const [selectedImage, setSelectedImage] = useState(null);
  const [adImage, setAdImage] = useState(null);

  // Handle opening the add modal
  const handleAddClick = () => {
    setShowAddModal(true);
  };

  // Post flow handlers
  const handleSelectPost = () => {
    setShowAddModal(false);
    setShowPostCreationModal(true);
  };

  const handleFileSelect = (imageData) => {
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

  const handlePost = (postData) => {
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

const handleAdUploadNext = (imageData) => {
  setAdImage(imageData);
  setShowAdUploadModal(false);
  setShowAdDetailsModal(true);
};

const handleAdSubmit = (adData) => {
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
  setSelectedImage(null);
  setAdImage(null);
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

// Updated ad modal close handlers
const handleCloseAdCreationModal = () => {
  // Only show discard modal when closing from AdCreationModal
  handleRequestClose();
};

const handleCloseAdUploadModal = () => {
  // Go back to AdCreationModal without showing discard modal
  setShowAdUploadModal(false);
  setShowAdCreationModal(true);
};

const handleCloseAdDetailsModal = () => {
  // Go back to AdUploadModal without showing discard modal
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
            flex-direction: row;
            justify-content: start;
            align-items: center;
            gap: 40px;
            margin-top: 33px;
            width: 1301px;
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
              <Link to="">
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
                {/* Add icon */}
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
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px', width: '1308px', marginTop: '50px' }}>
          {/* Featured Sellers header with See All link */}
          <div style={{ marginLeft: '9px', display: 'flex', justifyContent: 'start', alignItems: 'center', height: '48px', width: '100%' }}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '30px', minWidth: '236px', whiteSpace: 'nowrap', color: 'rgba(0,0,0,1)', lineHeight: '48px', fontWeight: 600 }}>
              Featured Sellers
            </div>
            <Link to="/sellers" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '26px', color: 'rgba(1,47,107,1)', lineHeight: '22.4px', letterSpacing: '-0.4px', fontWeight: 500 }}>
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
          <div style={{ position: 'relative', width: '1308px', height: '228px', marginTop: '72px', borderRadius: '10px', overflow: 'hidden' }}>
            {/* Slider container */}
            <div
              id="imageSlider"
              style={{ position: 'relative', width: '100%', height: '100%' }}
              onMouseEnter={() => clearInterval(sliderInterval)}
              onMouseLeave={() => {
                const interval = setInterval(() => {
                  setCurrentSlideIndex(prev => (prev + 1) % 3);
                }, 4000);
                setSliderInterval(interval);
              }}
            >
              <img
                src="/images/slider1.png"
                alt="Slider 1"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: currentSlideIndex === 0 ? 1 : 0,
                  transition: 'opacity 1s ease-in-out'
                }}
              />
              <img
                src="/images/slider2.png"
                alt="Slider 2"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: currentSlideIndex === 1 ? 1 : 0,
                  transition: 'opacity 1s ease-in-out'
                }}
              />
              <img
                src="/images/slider3.png"
                alt="Slider 3"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: currentSlideIndex === 2 ? 1 : 0,
                  transition: 'opacity 1s ease-in-out'
                }}
              />
            </div>

            {/* Content overlay on the left */}
            <div style={{
              position: 'absolute',
              top: '-40px',
              left: 0,
              zIndex: 50,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '40px',
              width: '400px',
              height: '100%',
              background: 'linear-gradient(to right, rgba(0,0,0,0.7), transparent)'
            }}>
              <div style={{ fontSize: '50px', color: 'white', fontWeight: 600 }}>40%</div>
              <div style={{ marginTop: '10px', fontSize: '24px', color: 'white', fontWeight: 600 }}>Today's special</div>
              <div style={{ marginTop: '10px', fontSize: '20px', color: 'white', fontWeight: 500 }}>Hurry! Grab Your Discounted Fuel Now!</div>
            </div>

            {/* Navigation dots */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '10px',
              zIndex: 60
            }}>
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: currentSlideIndex === 0 ? 'white' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onClick={() => {
                  setCurrentSlideIndex(0);
                  clearInterval(sliderInterval);
                  const interval = setInterval(() => {
                    setCurrentSlideIndex(prev => (prev + 1) % 3);
                  }, 4000);
                  setSliderInterval(interval);
                }}
              ></span>
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: currentSlideIndex === 1 ? 'white' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onClick={() => {
                  setCurrentSlideIndex(1);
                  clearInterval(sliderInterval);
                  const interval = setInterval(() => {
                    setCurrentSlideIndex(prev => (prev + 1) % 3);
                  }, 4000);
                  setSliderInterval(interval);
                }}
              ></span>
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: currentSlideIndex === 2 ? 'white' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onClick={() => {
                  setCurrentSlideIndex(2);
                  clearInterval(sliderInterval);
                  const interval = setInterval(() => {
                    setCurrentSlideIndex(prev => (prev + 1) % 3);
                  }, 4000);
                  setSliderInterval(interval);
                }}
              ></span>
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
              to="/listings/" 
              onClick={() => window.scrollTo(0, 0)}
              style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}
            >
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '26px', color: 'rgba(1,47,107,1)', lineHeight: '22.4px', letterSpacing: '-0.4px', fontWeight: 500 }}>
                See All
              </span>
              <img width="18px" height="23px" src="/images/arrow.png" alt="Arrow" />
            </Link>
          </div>
          {/* 4-Column Product Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 310px)', gap: '30px' }}>
            {/* Row 1 */}
            {/* Product 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product1.png" alt="Diesel" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Diesel (5000L Min.)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    Aidmax Energy
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
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
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    Hass Petroleum
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
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

            {/* Product 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '492px' }}>
              <img style={{ width: '310px', height: '298px', borderRadius: '10px' }} src="/images/product3.png" alt="Kerosene" />
              <div style={{ marginTop: '14px', fontFamily: '"Inter", sans-serif', fontSize: '17px', minWidth: '295px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.2px', fontWeight: 600 }}>
                Kerosene (50,000L Min.)
              </div>
              <div style={{ marginTop: '11px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', width: '247px', height: '19px' }}>
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    Dalbit Petroleum
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
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
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    Green Energy Ltd
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
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
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    Chemco Solutions
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
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
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    OilTech Kenya
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
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
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    Prime Fuels
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
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
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    PowerStore Kenya
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
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
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    GenPower Ltd
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
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
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    EcoFuels Africa
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
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
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    GasConnect Ltd
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
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
                <a href="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgba(18,18,18,1)', lineHeight: '18.5px', letterSpacing: '-0.01em', fontWeight: 500 }}>
                    RenewPower Solutions
                  </div>
                  <div style={{ borderRadius: '9.5px', width: '19px', height: '19px', backgroundColor: 'rgba(1,47,107,1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/verified.png" width={13} height={13} alt="Verified" />
                  </div>
                </a>
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
        <div style={{ width: '1305px', marginTop: '60px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {/* Section Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '48px' }}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '30px', color: 'rgba(0,0,0,1)', lineHeight: '48px', fontWeight: 600 }}>
              Industry Updates
            </div>
            <a href="/industry" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '26px', color: 'rgba(1,47,107,1)', lineHeight: '22.4px', letterSpacing: '-0.4px', fontWeight: 500 }}>
                See All
              </span>
              <img width="18px" height="23px" src="/images/arrow.png" alt="Arrow" />
            </a>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <a href="#" style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '26px',
                color: 'rgba(1,47,107,1)',
                lineHeight: '22.4px',
                letterSpacing: '-0.4px',
                fontWeight: 500,
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}>
                See All
              </a>
              <img width="18px" height="23px" src="/images/arrow.png" alt="Arrow" style={{ marginLeft: '-4px' }} />
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
            <Link to="">
                <img
                  style={{ width: '193.2px', height: '56px' }} src="/images/logo_.png" alt="Petropal Logo" />
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
          image={selectedImage}
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
          image={adImage}
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