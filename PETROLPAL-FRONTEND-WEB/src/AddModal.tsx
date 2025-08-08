import React from 'react';

interface AddModalProps {
  onClose: () => void;
  onSelectPost: () => void;
  onSelectAd: () => void;
}

const AddModal: React.FC<AddModalProps> = ({ onClose, onSelectPost, onSelectAd }) => {
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
    }} onClick={onClose}>
      <div style={{
        width: '220px',
        height: '120px',
        borderRadius: '10px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        gap: '36px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }} onClick={e => e.stopPropagation()}>
        {/* Left column with text options */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }}>
          <div 
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '20px',
              color: 'rgba(0,0,0,0.7)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onClick={onSelectPost}
          >
            Post
          </div>
          <div 
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '20px',
              color: 'rgba(0,0,0,1)',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onClick={onSelectAd}
          >
            Ad
          </div>
        </div>
        
        {/* Right column with icons */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }}>
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '25px', 
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onClick={onSelectPost}
          >
            <img width="25px" height="25px" src="/images/postt.png" alt="Post Icon" />
          </div>
          <div 
            className="add-modal-ad-icon"
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '24px', 
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onClick={onSelectAd}
          >
            <img width="26px" height="24px" src="/images/ad.png" alt="Ad Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;

/* Add this CSS to your global stylesheet or in a CSS/SCSS file imported by this component */
<style>
{`
.add-modal-ad-icon:hover {
  transform: scale(1.1);
}
`}
</style>