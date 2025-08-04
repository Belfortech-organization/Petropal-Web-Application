import React from 'react';

const ContactModal = ({ onClose }) => {
  return (
    <div id="contactModalOverlay" style={{
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 1000,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div id="contactModal" style={{
        width: '90%',
        maxWidth: '740px',
        minWidth: '300px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0px 4px 108px 0px rgba(0,0,0,0.25)',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '30px',
        position: 'relative',
        animation: 'fadeIn 0.3s ease'
      }}>
        {/* Top Content Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          {/* Title Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <div style={{ 
                fontFamily: '"Inter", sans-serif', 
                fontSize: 'clamp(24px, 5vw, 49px)', 
                color: 'rgba(0,20,45,1)', 
                fontWeight: 700 
              }}>
                Contact Us
              </div>
            </div>
            <div style={{ cursor: 'pointer' }} onClick={onClose}>
              <img src="/images/close.png" alt="Close" style={{ width: '21px', height: '21px' }} />
            </div>
          </div>

          {/* Email Input */}
          <div style={{ marginTop: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              borderRadius: '10px', 
              border: '2px solid rgb(1,47,107)', 
              width: '85%', 
              height: '50px', 
              backgroundColor: 'rgba(1,47,107,0.1)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <div style={{ 
                fontFamily: '"Inter", sans-serif', 
                fontSize: '16px', 
                color: 'rgba(1,47,107,0.3)', 
                fontWeight: 600 
              }}>
                Enter your email
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div style={{ marginTop: '15px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              borderRadius: '10px', 
              border: '2px solid rgb(1,47,107)', 
              width: '85%', 
              height: '120px', 
              backgroundColor: 'rgba(1,47,107,0.1)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <div style={{ 
                fontFamily: '"Inter", sans-serif', 
                fontSize: '16px', 
                color: 'rgba(1,47,107,0.2)', 
                fontWeight: 600 
              }}>
                Message
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ marginTop: '25px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              borderRadius: '10px', 
              width: '200px', 
              height: '60px', 
              backgroundColor: 'rgba(1,47,107,1)', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              cursor: 'pointer' 
            }}>
              <div style={{ 
                fontFamily: '"Inter", sans-serif', 
                fontSize: '24px', 
                color: 'white', 
                fontWeight: 700 
              }}>
                SUBMIT
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%', flexWrap: 'wrap' }}>
          {/* Email Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%', minWidth: '150px' }}>
            <img style={{ width: '39px', height: '30px' }} src="/images/email.png" alt="Email" />
            <div style={{ 
              fontFamily: '"Inter", sans-serif', 
              fontSize: '15px', 
              textAlign: 'center', 
              color: 'rgba(0,20,45,1)', 
              lineHeight: '1.5', 
              fontWeight: 500, 
              marginTop: '10px' 
            }}>
              <a href="mailto:info@petropal.africa" style={{ textDecoration: 'underline' }}>info@petropal.africa</a>
            </div>
          </div>

          {/* Location Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%', minWidth: '150px' }}>
            <img style={{ width: '33px', height: '38px' }} src="/images/locatione.png" alt="Location" />
            <div style={{ 
              fontFamily: '"Inter", sans-serif', 
              fontSize: '15px', 
              textAlign: 'center', 
              color: 'rgba(0,20,45,1)', 
              lineHeight: '1.5', 
              fontWeight: 500, 
              marginTop: '10px' 
            }}>
              Ikigai, 117, Lower Kabete Road,<br />Nairobi, Kenya
            </div>
          </div>

          {/* Phone Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%', minWidth: '150px' }}>
            <img style={{ width: '33px', height: '39px' }} src="/images/call.png" alt="Phone" />
            <div style={{ 
              fontFamily: '"Inter", sans-serif', 
              fontSize: '13.2px', 
              textAlign: 'center', 
              color: 'rgba(0,20,45,1)', 
              lineHeight: '1.5', 
              fontWeight: 500, 
              marginTop: '10px' 
            }}>
              +254721935704 / +254736036370 / +254721442887
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;