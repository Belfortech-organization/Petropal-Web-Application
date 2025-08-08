// Sellers.js
import React from 'react';
import { Link } from 'react-router-dom';

// CSS Styles
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  .sellers-page {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Header Section */
  .header-container {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    width: 100%;
    max-width: 100%;
    padding: 40px 40px 15px;
    background-color: #ffffff;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  .back-icon {
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .header-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
  }

  .header-title {
    font-size: 22px;
    font-weight: 600;
    color: #000;
  }

  .header-search {
    border-radius: 12px;
    border: 1px solid #afafaf;
    padding: 10px 20px;
    background-color: #fff;
    margin-top: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    box-sizing: border-box;
  }

  .search-icon img {
    width: 24px;
    height: 24px;
  }

  .search-input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 16px;
    color: #343330;
    font-family: 'Inter', sans-serif;
  }

  /* Sellers List */
  .sellers-container {
    flex: 1;
    overflow-y: auto;
    padding: 20px 85px 40px;
    box-sizing: border-box;
  }

  .seller-row {
    display: flex;
    align-items: center;
    padding: 20px 0;
  }

  .seller-image {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    object-fit: cover;
  }

  .seller-info {
    margin-left: 47px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }

  .seller-name-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .seller-name {
    font-size: 20px;
    color: rgba(18,18,18,1);
    line-height: 18.5px;
    letter-spacing: -0.01em;
    font-weight: 500;
    white-space: nowrap;
  }

  .verified-badge {
    width: 17px;
    height: 17px;
  }

  .seller-location {
    font-size: 20px;
    color: rgba(18,18,18,0.5);
    line-height: 18.5px;
    letter-spacing: -0.01em;
    font-weight: 500;
    white-space: nowrap;
  }

  /* Divider line */
  .seller-divider {
    border: 0;
    height: 3px;
    background: #dddddd;
    margin: 0;
    width: 100%;
  }
`;

const Sellers = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="sellers-page">
        {/* Sticky Header */}
        <div className="header-container">
          <div 
            className="back-icon" 
            onClick={() => window.history.back()}
          >
            <img
              width="25px"
              height="25px"
              src="/images/backk.png"
              alt="Back Icon"
            />
          </div>
          <div className="header-content">
            <div className="header-title">
              Featured Sellers
            </div>
            <div className="header-search">
              <div className="search-icon">
                <img
                  src="/images/searchseller.png"
                  alt="Search Icon"
                />
              </div>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search Featured Sellers" 
              />
            </div>
          </div>
        </div>

        {/* Scrollable Sellers List */}
        <div className="sellers-container">
          {/* Seller 1 */}
          <div className="seller-row">
            <img className="seller-image" src="/images/profile1.png" alt="SolarWave LLC" />
            <div className="seller-info">
              <div className="seller-name-row">
                <div className="seller-name">SolarWave LLC</div>
                <img className="verified-badge" src="/images/verified1.png" alt="Verified Badge" />
              </div>
              <div className="seller-location">Mombasa</div>
            </div>
          </div>
          <hr className="seller-divider" />

          {/* Seller 2 */}
          <div className="seller-row">
            <img className="seller-image" src="/images/profile2.png" alt="EcoBright Ltd" />
            <div className="seller-info">
              <div className="seller-name-row">
                <div className="seller-name">EcoBright Ltd</div>
                <img className="verified-badge" src="/images/verified1.png" alt="Verified Badge" />
              </div>
              <div className="seller-location">Nairobi</div>
            </div>
          </div>
          <hr className="seller-divider" />

          {/* Seller 3 */}
          <div className="seller-row">
            <img className="seller-image" src="/images/profile3.png" alt="SunPower Inc" />
            <div className="seller-info">
              <div className="seller-name-row">
                <div className="seller-name">SunPower Inc</div>
                <img className="verified-badge" src="/images/verified1.png" alt="Verified Badge" />
              </div>
              <div className="seller-location">Kisumu</div>
            </div>
          </div>
          <hr className="seller-divider" />

          {/* Seller 4 */}
          <div className="seller-row">
            <img className="seller-image" src="/images/profile4.png" alt="BrightFuture Co" />
            <div className="seller-info">
              <div className="seller-name-row">
                <div className="seller-name">BrightFuture Co</div>
                <img className="verified-badge" src="/images/verified1.png" alt="Verified Badge" />
              </div>
              <div className="seller-location">Nakuru</div>
            </div>
          </div>
          <hr className="seller-divider" />

          {/* Additional sellers can be added here */}
          <div className="seller-row">
            <img className="seller-image" src="/images/profile1.png" alt="GreenEnergy Solutions" />
            <div className="seller-info">
              <div className="seller-name-row">
                <div className="seller-name">GreenEnergy Solutions</div>
                <img className="verified-badge" src="/images/verified1.png" alt="Verified Badge" />
              </div>
              <div className="seller-location">Eldoret</div>
            </div>
          </div>
          <hr className="seller-divider" />

          <div className="seller-row">
            <img className="seller-image" src="/images/profile2.png" alt="PowerTech Kenya" />
            <div className="seller-info">
              <div className="seller-name-row">
                <div className="seller-name">PowerTech Kenya</div>
                <img className="verified-badge" src="/images/verified1.png" alt="Verified Badge" />
              </div>
              <div className="seller-location">Thika</div>
            </div>
          </div>
          <hr className="seller-divider" />
        </div>
      </div>
    </>
  );
};

export default Sellers;