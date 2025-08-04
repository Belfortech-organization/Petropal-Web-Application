import React from 'react';

const AdCreationModal = ({ onClose, onUploadMedia, onBoostContent }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }} onClick={onClose}> {/* This will trigger DiscardModal through handleRequestClose */}
      <div style={{
        position: 'relative',
        width: '802px',
        height: '328px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
      }} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          width: '100%',
          height: '70px',
          backgroundColor: 'rgba(217,217,217,0.46)',
          position: 'absolute',
          top: '1px',
          zIndex: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 0px',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          boxShadow: '0px 4px 4px rgba(0,0,0,0.13)'
        }}>
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '32px',
              height: '32px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              ':hover': { transform: 'scale(1.1)' }
            }}
            onClick={onClose}
          >
            <img width="21px" height="21px" src="/images/close.png" alt="Close" />
          </div>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '24px',
            color: 'rgba(0,0,0,1)',
            lineHeight: '48px',
            fontWeight: 600,
            marginRight: '310px'
          }}>
            Create new ad
          </div>
        </div>
        
        {/* Main Content */}
        <div style={{
          borderRadius: '10px',
          width: '100%',
          height: '328px',
          boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
          backgroundColor: 'white',
          position: 'absolute',
          left: '1px',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '85px',
          paddingBottom: '37px',
          gap: '24px'
        }}>
          {/* Upload Media Option */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              cursor: 'pointer',
              width: '90%',
              transition: 'all 0.2s ease',
              ':hover': { transform: 'translateX(5px)' }
            }}
            onClick={onUploadMedia}
          >
            <div style={{
              borderRadius: '10px',
              border: '2px solid rgb(0,0,0)',
              width: '106px',
              height: '86px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '52px',
                height: '52px'
              }}>
                <img width="43.9px" height="47px" src="/images/uploadicon.png" alt="Upload" />
              </div>
            </div>
            <div style={{
              marginLeft: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'start',
              gap: '17px',
              width: '209px',
              height: '61px'
            }}>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '24px',
                color: 'rgba(0,0,0,1)',
                lineHeight: '35px',
                fontWeight: 600
              }}>
                Upload media
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '19px',
                color: 'rgba(0,0,0,0.5)',
                lineHeight: '0px',
                fontWeight: 400
              }}>
                Add photos for your ad
              </div>
            </div>
            <div style={{
              marginLeft: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '36px',
              height: '36px'
            }}>
              <img width="24px" height="26px" src="/images/arrowright.png" alt="Arrow" />
            </div>
          </div>
          
          {/* Boost Content Option */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              cursor: 'pointer',
              width: '90%',
              transition: 'all 0.2s ease',
              ':hover': { transform: 'translateX(5px)' }
            }}
            onClick={onBoostContent}
          >
            <div style={{
              borderRadius: '10px',
              border: '2px solid rgb(0,0,0)',
              width: '106px',
              height: '86px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '47px',
                height: '47px'
              }}>
                <img width="40px" height="40px" src="/images/boost.png" alt="Boost" />
              </div>
            </div>
            <div style={{
              marginLeft: '39px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'start',
              gap: '17px',
              width: '335px',
              height: '61px'
            }}>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '24px',
                color: 'rgba(0,0,0,1)',
                lineHeight: '35px',
                fontWeight: 600
              }}>
                Boost content from profile
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '19px',
                color: 'rgba(0,0,0,0.5)',
                lineHeight: '0px',
                fontWeight: 400
              }}>
                Turn a post from your grid into an ad
              </div>
            </div>
            <div style={{
              marginLeft: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '36px',
              height: '36px'
            }}>
              <img width="24px" height="26px" src="/images/arrow-right.png" alt="Arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCreationModal;