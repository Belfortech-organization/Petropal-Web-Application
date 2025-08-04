import React, { useRef } from 'react';

const PostCreationModal = ({ onClose, onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        onFileSelect(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
        width: '540px',
        height: '491px',
        borderRadius: '10px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
      }} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          width: '68%',
          height: '85px',
          backgroundColor: 'rgba(217,217,217,0.46)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 26px 0 148px',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          boxShadow: '0px 4px 4px rgba(0,0,0,0.13)'
        }}>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '27px',
            color: 'rgba(0,0,0,1)',
            fontWeight: 600
          }}>
            Create new post
          </div>
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
        </div>
        
        {/* Image Upload Area */}
        <div style={{
          marginTop: '69px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          flex: 1
        }}>
          {/* Image Placeholder */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '139px',
            height: '139px'
          }}>
            <img width="112.9px" height="100px" src="/images/uploadicon.png" alt="Upload Icon" />
          </div>
          
          {/* "Drag photos here" text */}
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '22px',
            color: 'rgba(18,18,18,1)',
            fontWeight: 400
          }}>
            Drag photos here
          </div>
        </div>
        
        {/* Upload Button */}
        <div 
          style={{
            borderRadius: '10px',
            width: '263px',
            height: '56px',
            backgroundColor: 'rgba(1,47,107,1)',
            margin: '40px auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            ':hover': { backgroundColor: 'rgba(1,47,107,0.9)' }
          }}
          onClick={handleUploadClick}
        >
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '19px',
            color: 'rgba(255,255,255,1)',
            fontWeight: 600
          }}>
            Select from computer
          </div>
        </div>
        
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default PostCreationModal;