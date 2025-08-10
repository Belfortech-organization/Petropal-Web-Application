import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sellers.module.css';

const Sellers = () => {
  return (
    <div className={styles.sellersPage}>
      {/* Sticky Header */}
      <div className={styles.headerContainer}>
        <div 
          className={styles.backIcon} 
          onClick={() => window.history.back()}
        >
          <img
            width="25"
            height="25"
            src="/images/backk.png"
            alt="Back Icon"
          />
        </div>
        <div className={styles.headerContent}>
          <div className={styles.headerTitle}>
            Featured Sellers
          </div>
          <div className={styles.headerSearch}>
            <div className={styles.searchIcon}>
              <img
                src="/images/searchseller.png"
                alt="Search Icon"
              />
            </div>
            <input 
              type="text" 
              className={styles.searchInput} 
              placeholder="Search Featured Sellers" 
            />
          </div>
        </div>
      </div>

      {/* Scrollable Sellers List */}
      <div className={styles.sellersContainer}>
        {/* Seller 1 */}
        <div className={styles.sellerRow}>
          <img className={styles.sellerImage} src="/images/profile1.png" alt="SolarWave LLC" />
          <div className={styles.sellerInfo}>
            <div className={styles.sellerNameRow}>
              <div className={styles.sellerName}>SolarWave LLC</div>
              <img className={styles.verifiedBadge} src="/images/verified1.png" alt="Verified Badge" />
            </div>
            <div className={styles.sellerLocation}>Mombasa</div>
          </div>
        </div>
        <hr className={styles.sellerDivider} />

        {/* Seller 2 */}
        <div className={styles.sellerRow}>
          <img className={styles.sellerImage} src="/images/profile2.png" alt="EcoBright Ltd" />
          <div className={styles.sellerInfo}>
            <div className={styles.sellerNameRow}>
              <div className={styles.sellerName}>EcoBright Ltd</div>
              <img className={styles.verifiedBadge} src="/images/verified1.png" alt="Verified Badge" />
            </div>
            <div className={styles.sellerLocation}>Nairobi</div>
          </div>
        </div>
        <hr className={styles.sellerDivider} />

        {/* Seller 3 */}
        <div className={styles.sellerRow}>
          <img className={styles.sellerImage} src="/images/profile3.png" alt="SunPower Inc" />
          <div className={styles.sellerInfo}>
            <div className={styles.sellerNameRow}>
              <div className={styles.sellerName}>SunPower Inc</div>
              <img className={styles.verifiedBadge} src="/images/verified1.png" alt="Verified Badge" />
            </div>
            <div className={styles.sellerLocation}>Kisumu</div>
          </div>
        </div>
        <hr className={styles.sellerDivider} />

        {/* Seller 4 */}
        <div className={styles.sellerRow}>
          <img className={styles.sellerImage} src="/images/profile4.png" alt="BrightFuture Co" />
          <div className={styles.sellerInfo}>
            <div className={styles.sellerNameRow}>
              <div className={styles.sellerName}>BrightFuture Co</div>
              <img className={styles.verifiedBadge} src="/images/verified1.png" alt="Verified Badge" />
            </div>
            <div className={styles.sellerLocation}>Nakuru</div>
          </div>
        </div>
        <hr className={styles.sellerDivider} />

        {/* Additional sellers */}
        <div className={styles.sellerRow}>
          <img className={styles.sellerImage} src="/images/profile1.png" alt="GreenEnergy Solutions" />
          <div className={styles.sellerInfo}>
            <div className={styles.sellerNameRow}>
              <div className={styles.sellerName}>GreenEnergy Solutions</div>
              <img className={styles.verifiedBadge} src="/images/verified1.png" alt="Verified Badge" />
            </div>
            <div className={styles.sellerLocation}>Eldoret</div>
          </div>
        </div>
        <hr className={styles.sellerDivider} />

        <div className={styles.sellerRow}>
          <img className={styles.sellerImage} src="/images/profile2.png" alt="PowerTech Kenya" />
          <div className={styles.sellerInfo}>
            <div className={styles.sellerNameRow}>
              <div className={styles.sellerName}>PowerTech Kenya</div>
              <img className={styles.verifiedBadge} src="/images/verified1.png" alt="Verified Badge" />
            </div>
            <div className={styles.sellerLocation}>Thika</div>
          </div>
        </div>
        <hr className={styles.sellerDivider} />
      </div>
    </div>
  );
};

export default Sellers;