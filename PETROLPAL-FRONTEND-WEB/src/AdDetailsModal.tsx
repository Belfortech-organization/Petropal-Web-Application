import React, { useState } from 'react';

interface AdDetailsModalProps {
  image: string;
  onClose: () => void;
  onSubmit: (data: { image: string; title: string; description: string; audience: string; budget: string }) => void;
  onBack: () => void;
}

const AdDetailsModal: React.FC<AdDetailsModalProps> = ({ image, onClose, onSubmit, onBack }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [audience, setAudience] = useState('');
  const [budget, setBudget] = useState('');

  // Check if there are any unsaved changes
  const hasUnsavedChanges = title || description || audience || budget;

  const handleClose = () => {
    if (hasUnsavedChanges) {
      onClose(); // This will trigger the DiscardModal
    } else {
      onClose(); // This will close directly
    }
  };

  const handleSubmit = () => {
    if (!title || !description || !audience || !budget) {
      alert('Please fill all fields');
      return;
    }
    onSubmit({
      image,
      title,
      description,
      audience,
      budget
    });
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
      overflow: 'auto',
      padding: '20px 0'
    }} onClick={handleClose}>  {/* Use handleClose instead of onClose */}
      <div style={{
        width: '90%',
        maxWidth: '800px',
        maxHeight: '80vh',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          flexShrink: 0
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button 
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0',
                marginRight: '15px',
                display: 'flex',
                alignItems: 'center'
              }}
              onClick={onBack}
            >
              <img 
                width="26.6px" 
                height="19.7px" 
                src="/images/backarrow.png" 
                alt="Back" 
                style={{
                  transition: 'transform 0.2s ease'
                }}
              />
            </button>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '24px',
              fontWeight: 600,
              margin: 0
            }}>
              Create New Ad
            </h2>
          </div>
          <button 
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              color: '#666',
              transition: 'all 0.2s ease'
            }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
        
        {/* Scrollable content */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          paddingRight: '10px',
          marginRight: '-10px' // Compensate for scrollbar
        }}>
          {/* Image Preview */}
          <div style={{
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img 
              id="adDetailsImagePreview" 
              src={image} 
              style={{
                maxWidth: '100%',
                maxHeight: '250px',
                borderRadius: '8px',
                objectFit: 'contain'
              }} 
              alt="Ad Preview" 
            />
          </div>
          
          {/* Ad-specific form fields */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: '#333',
                fontWeight: 500
              }}>
                Ad Title
              </label>
              <input
                type="text"
                placeholder="Enter ad title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: '#333',
                fontWeight: 500
              }}>
                Ad Description
              </label>
              <textarea
                placeholder="Enter ad description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  minHeight: '100px',
                  resize: 'vertical',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: '#333',
                fontWeight: 500
              }}>
                Target Audience
              </label>
              <input
                type="text"
                placeholder="Describe your target audience"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: '#333',
                fontWeight: 500
              }}>
                Budget
              </label>
              <input
                type="text"
                placeholder="Enter your budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Footer with submit button */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingTop: '15px',
          borderTop: '1px solid #eee',
          flexShrink: 0
        }}>
          <button 
            onClick={handleSubmit}
            style={{
              padding: '12px 24px',
              background: '#012F6B',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 600,
              transition: 'all 0.2s ease'
            }}
          >
            Submit Ad
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdDetailsModal;