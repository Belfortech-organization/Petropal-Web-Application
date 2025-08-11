import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DownloadModal from './DownloadModal';
import ContactModal from './ContactModal';
import styles from './About.module.css';

interface Testimonial {
  id: number;
  image: string;
  text: string;
  author: string;
}

const About: React.FC = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      image: '/images/testimonial.png',
      text: '"I found a trusted diesel supplier in minutes. The platform is fast and reliable."',
      author: 'Fuel Buyer – Nairobi'
    },
    {
      id: 2,
      image: '/images/testimonial1.png',
      text: '"Petropal helped me expand my customer base across East Africa effortlessly."',
      author: 'Supplier – Kampala'
    },
    {
      id: 3,
      image: '/images/testimonial.png',
      text: '"The verification system gave me confidence in my first cross-border transaction."',
      author: 'Trader – Lagos'
    },
    {
      id: 4,
      image: '/images/testimonial1.png',
      text: '"Saved 15% on procurement costs thanks to Petropal\'s competitive marketplace."',
      author: 'Procurement – Dar es Salaam'
    }
  ];

  const newsItems = [
    {
      id: 1,
      image: '/images/update2.png',
      title: 'New Fuel Regulations Announced',
      description: 'Click to read more'
    },
    {
      id: 2,
      image: '/images/update1.png',
      title: 'Oil Price Trends Q3 2023',
      description: 'Click to read more'
    },
    {
      id: 3,
      image: '/images/update2.png',
      title: 'Upcoming Trade Conference',
      description: 'Save the date!'
    },
    {
      id: 4,
      image: '/images/update1.png',
      title: 'Renewable Energy Grants',
      description: 'Click to read more'
    },
    {
      id: 5,
      image: '/images/update2.png',
      title: 'New Pipeline Project',
      description: 'Click to read more'
    },
    {
      id: 6,
      image: '/images/update1.png',
      title: 'Industry Awards 2023',
      description: 'Nominees announced'
    }
  ];

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
<div className={styles.navBar} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
  
  {/* Left Section: Logo, Category, Search */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
    
    {/* Logo */}
    <Link to="/loggedin">
      <img className={styles.logo} src="/images/logo_.png" alt="Petropal Logo" />
    </Link>

    {/* Category Dropdown */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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
        <img style={{ marginLeft: '16px' }} width="14.6" height="14.6" src="/images/search.png" alt="Search" />
        <div style={{ marginLeft: '18px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(1,47,107,0.5)', fontWeight: 600, whiteSpace: 'nowrap' }}>
          Products & Services
        </div>
      </div>

      {/* Divider */}
      <img className={styles.searchDivider} src="/images/Line.png" alt="Divider" />

      {/* Location & Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img width="23" height="23" src="/images/location.png" alt="Location" />
        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(1,47,107,0.5)', fontWeight: 600 }}>
          Location
        </div>
        <div className={styles.searchButton}>
          <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'white', fontWeight: 600 }}>
            Search
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Right Section: Language & Profile */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '50px', marginRight: '25px' }}>
    
    {/* Language Selector */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ fontFamily: '"Lato", sans-serif', fontSize: '18px', color: 'white', fontWeight: 500 }}>
        English
      </div>
      <img width="11" height="7" src="/images/drop.png" alt="Dropdown" />
    </div>

    {/* Profile Section */}
    <Link to="/user" style={{ textDecoration: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'white', fontWeight: 500, whiteSpace: 'nowrap' }}>
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
</div>

      {/* Content */}
      <div className={styles.contentContainer}>
        <div className={styles.aboutContainer}>
          {/* Left: Text and Features */}
          <div className={styles.textContent}>
            <div className={styles.aboutTitle}>About Petropal 2.0™</div>
            <div className={styles.aboutText}>
              Petropal 2.0 is Africa's leading digital fuel trading platform, designed
              to simplify energy trade through smart technology and trusted connections.
              We connect buyers and sellers of petroleum products with verified
              profiles, real-time search, and tools for secure offline deal closure.
            </div>
            <div className={styles.aboutText}>
              With mobile-first design, built-in analytics, and AI-ready features,
              Petropal 2.0 empowers energy businesses to trade faster, smarter, and more
              transparently across the continent.
            </div>

            <div className={styles.featureGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureItemLargeText}>185%</div>
                <div className={styles.featureItemSmallText}>Company Growth</div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureItemLargeText}>12,000</div>
                <div className={styles.featureItemSmallText}>Users Helped</div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureItemLargeText}>4.8/5+</div>
                <div className={styles.featureItemSmallText}>Customer Rating</div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureItemLargeText}>2,100+</div>
                <div className={styles.featureItemSmallText}>Verified Suppliers</div>
              </div>
            </div>

            <div className={styles.singleFeature}>
              <div className={styles.featureItemLargeText}>87%</div>
              <div className={styles.featureItemSmallText}>Transaction Success Rate</div>
            </div>
          </div>

          {/* Right: Image and Grid */}
          <div className={styles.imageContent}>
            <img className={styles.mainImage} src="/images/about.png" alt="Petropal Platform" />
            <div className={styles.imageGrid}>
              <div className={styles.imageGridItem}></div>
              <div className={styles.imageGridItem}></div>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonialsTitle}>What Our Customers Say</div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <div className={styles.testimonialCard} key={testimonial.id}>
                <img
                  className={styles.testimonialImage}
                  src={testimonial.image}
                  alt={`Testimonial ${testimonial.id}`}
                />
                <div className={styles.testimonialText}>
                  {testimonial.text}
                </div>
                <div className={styles.testimonialMeta}>
                  <div className={styles.testimonialAuthor}>
                    {testimonial.author}
                  </div>
                  <img
                    className={styles.ratings}
                    src="/images/ratings.png"
                    alt="Ratings"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* News Section */}
        <div className={styles.newsContainer}>
          <div className={styles.newsTitle}>Industry News & Events</div>
          <div className={styles.newsGrid}>
            {/* News Rows */}
            <div className={styles.newsRow}>
              {newsItems.slice(0, 3).map((item) => (
                <div className={styles.newsCard} key={item.id}>
                  <img className={styles.newsCardImage} src={item.image} alt="News" />
                  <div className={styles.newsCardContent}>
                    <div className={styles.newsCardTitle}>{item.title}</div>
                    <div className={styles.newsCardDescription}>{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.newsRow}>
              {newsItems.slice(3, 6).map((item) => (
                <div className={styles.newsCard} key={item.id}>
                  <img className={styles.newsCardImage} src={item.image} alt="News" />
                  <div className={styles.newsCardContent}>
                    <div className={styles.newsCardTitle}>{item.title}</div>
                    <div className={styles.newsCardDescription}>{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className={styles.footer}>
        {/* Top Footer Content */}
        <div className={styles.footerContent}>
          {/* Logo */}
          <Link to="/loggedin" className={styles.footerLogo}>
            <img className={styles.logo} src="/images/logo_.png" alt="Petropal Logo" onClick={() => window.scrollTo(0, 0)}/>
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

export default About;