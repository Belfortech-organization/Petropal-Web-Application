import React from 'react';

interface DownloadModalProps {
  onClose: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ onClose }) => {
  return (
    <div id="downloadModalOverlay" style={{
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
      transition: 'background-color 0.3s ease'
    }}>
      <div id="downloadModal" style={{
        width: '430px',
        height: '223px',
        borderRadius: '10px',
        boxShadow: '0px 4px 108px 0px rgba(0,0,0,0.25)',
        backgroundColor: 'rgba(255,255,255,1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        paddingTop: '18px',
        paddingRight: '21px',
        paddingLeft: '144px',
        gap: '91px',
        position: 'relative',
        animation: 'fadeIn 0.3s ease'
      }}>
        <div style={{
          marginTop: '22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '49px',
          width: '324px',
          height: '116px'
        }}>
          <div style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '19px',
            whiteSpace: 'nowrap',
            color: 'rgba(0,0,0,1)',
            lineHeight: '20px',
            fontWeight: 800
          }}>
            Do you want to install the app?
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '58px',
            width: '324px',
            height: '47px'
          }}>
            <img style={{
              borderRadius: '10px',
              width: '133px',
              height: '47px',
              overflow: 'hidden'
            }} src="/images/playstore.png" alt="Play Store" width="133px" height="47px" />
            <img style={{
              borderRadius: '10px',
              width: '133px',
              height: '47px',
              overflow: 'hidden'
            }} src="/images/appstore.png" alt="App Store" width="133px" height="47px" />
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '32px',
          height: '32px',
          position: 'absolute',
          top: '18px',
          right: '21px',
          cursor: 'pointer'
        }} onClick={onClose}>
          <img width="21px" height="21px" src="/images/close.png" alt="Close" />
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;