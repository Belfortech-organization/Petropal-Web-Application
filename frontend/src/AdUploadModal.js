import React, { useRef } from 'react';

const AdUploadModal = ({ onClose, onNext, onBack }) => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    if (selectedImage) {
      onNext(selectedImage);
    } else {
      alert('Please select an image first');
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
    }}> {/* Remove onClick handler here */}
      <div style={{
        width: '564px',
        height: '522px',
        borderRadius: '10px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
      }} onClick={e => e.stopPropagation()}>
        {/* Header - Only back arrow, no close button */}
        <div style={{
          width: '100%',
          height: '56px',
          backgroundColor: 'rgba(217,217,217,0.46)',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 0px',
          boxShadow: '0px 4px 4px rgba(0,0,0,0.13)'
        }}>
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '34px',
              height: '30px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              ':hover': { transform: 'scale(1.1)' }
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
            Create new ad
          </div>
          <div 
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              color: 'rgba(1,47,107,1)',
              fontWeight: 700,
              cursor: 'pointer',
              marginRight: '10px',
              transition: 'all 0.2s ease',
              ':hover': { color: 'rgba(1,47,107,0.8)' }
            }}
            onClick={handleNext}
          >
            Next
          </div>
        </div>
        
        {/* Image Upload Area */}
        <div style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          backgroundImage: selectedImage ? `url(${selectedImage})` : 'none',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}>
          {!selectedImage && (
            <>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '139px',
                height: '139px'
              }}>
                <img width="112.9px" height="120px" src="/images/uploadicon.png" alt="Upload Icon" />
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '22px',
                color: 'rgba(18,18,18,1)',
                fontWeight: 400
              }}>
                Drag photos here
              </div>
            </>
          )}
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
          onClick={handleFileSelect}
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

export default AdUploadModal;