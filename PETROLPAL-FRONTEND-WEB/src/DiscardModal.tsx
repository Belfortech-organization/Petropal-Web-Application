import React from 'react';

interface DiscardModalProps {
  onClose: () => void;
  onDiscard: () => void;
}

const DiscardModal: React.FC<DiscardModalProps> = ({ onClose, onDiscard }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 1001,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }} onClick={onClose}>
      <div style={{
        borderRadius: '10px',
        width: '934px',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
        backgroundColor: 'white',
        minHeight: '276px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }} onClick={e => e.stopPropagation()}>
        {/* Content container */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
          width: '362px',
          height: '223px'
        }}>
          {/* Title */}
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '32px',
            whiteSpace: 'nowrap',
            color: 'rgba(0,0,0,1)',
            lineHeight: '48px',
            fontWeight: 600
          }}>
            Create new post
          </div>
          
          {/* Warning message */}
          <div style={{
            marginTop: '10px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '20px',
            whiteSpace: 'nowrap',
            color: 'rgba(18,18,18,0.8)',
            lineHeight: '31px',
            fontWeight: 400
          }}>
            If you leave, your edits won't be saved.
          </div>
          
          {/* Divider line */}
          <div style={{
            width: '100%',
            height: '3px',
            backgroundColor: 'rgba(0,0,0,0.1)',
            marginTop: '20px'
          }} />
          
          {/* Discard action */}
          <div 
            style={{
              marginTop: '20px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '22px',
              whiteSpace: 'nowrap',
              color: 'rgba(219,0,0,1)',
              lineHeight: '48px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            className="discard-action"
            onClick={onDiscard}
          >
            Discard
          </div>
          
          {/* Divider line */}
          <div style={{
            width: '100%',
            height: '3px',
            backgroundColor: 'rgba(0,0,0,0.1)'
          }} />
          
          {/* Cancel action */}
          <div 
            style={{
              marginTop: '20px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '22px',
              whiteSpace: 'nowrap',
              color: 'rgba(0,0,0,1)',
              lineHeight: '48px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            className="cancel-action"
            onClick={onClose}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscardModal;

/* Add this CSS to your global stylesheet or in a CSS module:
.discard-action:hover {
  color: rgba(219,0,0,0.8);
}
.cancel-action:hover {
  color: rgba(0,0,0,0.7);
}
*/