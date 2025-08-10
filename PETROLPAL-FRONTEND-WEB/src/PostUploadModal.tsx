import React from 'react';
import Profile from './Profile';

interface PostUploadModalProps {
  image?: string;
  onClose: () => void;
  onNext: () => void;
  onBack: () => void;
}

const PostUploadModal: React.FC<PostUploadModalProps> = ({ image, onClose, onNext, onBack }) => {
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
        display: 'flex',
        flexDirection: 'column',
        width: '564px',
        height: '522px',
        borderRadius: '10px',
        backgroundColor: 'white',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
      }} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          width: '100%',
          height: '56px',
          backgroundColor: 'rgba(217,217,217,0.46)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
          boxShadow: '0px 4px 4px rgba(0,0,0,0.13)'
        }}>
          <div 
            className="post-upload-back-btn"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '34px',
              height: '30px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onClick={onBack}
          >
            <img width="26.6px" height="19.7px" src="/images/backarrow.png" alt="Back" />
          </div>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '20px',
            color: 'rgba(0,0,0,1)',
            fontWeight: 600
          }}>
            Create new post
          </div>
          <div 
            className="post-upload-next-btn"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              color: 'rgba(1,47,107,1)',
              fontWeight: 700,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
            onClick={onNext}
          >
            Next
          </div>
        </div>
        
        {/* Image Preview Container */}
        <div 
          style={{
            flexGrow: 1,
            width: '100%',
            backgroundImage: image ? `url(${image})` : 'none',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: image ? 'transparent' : '#f5f5f5'
          }}
        />
        
        {/* Tools Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 0',
          backgroundColor: 'white',
          borderTop: '1px solid rgba(0,0,0,0.1)'
        }}>
          {/* Edit Button */}
          <div
            className="post-upload-tool-btn"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '44px',
              height: '44px',
              backgroundColor: 'rgba(83, 83, 83, 0.46)',
              borderRadius: '50%',
              cursor: 'pointer',
              margin: '0 10px',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '32px',
              height: '32px'
            }}>
              <img width="22px" height="22px" src="/images/fullscreen.png" alt="Edit" />
            </div>
          </div>
          
          {/* Filter Button */}
          <div
            className="post-upload-tool-btn"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '44px',
              height: '44px',
              backgroundColor: 'rgba(83, 83, 83, 0.46)',
              borderRadius: '50%',
              cursor: 'pointer',
              margin: '0 10px',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '28px',
              height: '28px'
            }}>
              <img width="22.8px" height="22.8px" src="/images/zoom.png" alt="Filter" />
            </div>
          </div>
          
          {/* More Options Button */}
          <div
            className="post-upload-tool-btn"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '44px',
              height: '44px',
              backgroundColor: 'rgba(83, 83, 83, 0.46)',
              borderRadius: '50%',
              cursor: 'pointer',
              margin: '0 10px',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '32px',
              height: '32px'
            }}>
              <img width="26px" height="22px" src="/images/images.png" alt="More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Add this CSS to your global stylesheet or import it in this file */
/* You can move this to a .css file and import it, or use a <style> tag in your index.html */
<style>
{`
.post-upload-back-btn:hover {
  transform: scale(1.1);
}
.post-upload-tool-btn:hover {
  background-color: rgba(83, 83, 83, 0.6);
}
.post-upload-next-btn:hover {
  color: rgba(1,47,107,0.8);
}
`}
</style>
export default PostUploadModal;