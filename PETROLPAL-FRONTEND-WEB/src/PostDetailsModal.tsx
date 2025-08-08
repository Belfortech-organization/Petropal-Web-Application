import React, { useState } from 'react';

interface PostDetailsModalProps {
  image: string;
  onClose: () => void;
  onPost: (data: { image: string; caption: string; title: string; location: string; price: string }) => void;
  onBack: () => void;
}

const PostDetailsModal: React.FC<PostDetailsModalProps> = ({ image, onClose, onPost, onBack }) => {
  const [caption, setCaption] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  interface CaptionChangeEvent extends React.ChangeEvent<HTMLTextAreaElement> {}

  const handleCaptionChange = (e: CaptionChangeEvent): void => {
    setCaption(e.target.value);
  };

  const toggleAdvancedSettings = () => {
    setShowAdvanced(!showAdvanced);
  };

  const handlePost = () => {
    if (!caption || caption.length > 50) {
      alert('Please enter a caption (max 50 characters)');
      return;
    }
    onPost({
      image,
      caption,
      title: (document.getElementById('postTitle') as HTMLInputElement | null)?.value || '',
      location: (document.getElementById('postLocation') as HTMLInputElement | null)?.value || '',
      price: (document.getElementById('postPrice') as HTMLInputElement | null)?.value || ''
    });
  };

  // CSS styles with the animation included
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
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
          width: '1104px',
          height: '531px',
          backgroundColor: 'white',
          borderRadius: '10px',
          position: 'relative',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }} onClick={e => e.stopPropagation()}>
          {/* Header */}
          <div style={{
            width: '100%',
            height: '56px',
            backgroundColor: 'rgba(217,217,217,0.46)',
            position: 'absolute',
            zIndex: 20,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px 0 5px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
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
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '21px',
                color: 'rgba(1,47,107,1)',
                fontWeight: 700,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
              onClick={handlePost}
            >
              Post
            </div>
          </div>
          
          {/* Main Content */}
          <div style={{
            borderRadius: '10px',
            width: '100%',
            height: '527px',
            boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
            backgroundColor: 'white',
            position: 'absolute',
            top: '4px',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingRight: '27px',
            gap: '33px'
          }}>
            {/* Left Side - Image Preview */}
            <img 
              src={image}
              style={{
                width: '564px',
                height: '473px',
                boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
                objectFit: 'contain',
                marginLeft: '27px',
                marginTop: '54px'
              }}
              alt="Selected Image"
            />
            
            {/* Right Side - Form */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              width: '480px',
              height: '473px',
              padding: '10px',
              boxSizing: 'border-box',
              overflowY: 'auto',
              overflowX: 'hidden',
              marginTop: '54px'
            }}>
              {/* User Info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px'
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '20px',
                    fontWeight: 600
                  }}
                >
                  Kimberly M
                </div>
                <img
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                  src="/images/profile.png"
                  alt="Profile"
                />
              </div>
              
              {/* Caption Textarea */}
              <div style={{
                borderRadius: '10px',
                border: '2px solid rgb(217,217,217)',
                marginBottom: '22px'
              }}>
                <textarea
                  id="postCaption"
                  style={{
                    width: '100%',
                    minHeight: '120px',
                    border: 'none',
                    resize: 'none',
                    padding: '10px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px',
                    boxSizing: 'border-box',
                    outline: 'none'
                  }}
                  placeholder="Write a caption..."
                  value={caption}
                  onChange={handleCaptionChange}
                  maxLength={50}
                />
                <div style={{
                  textAlign: 'right',
                  padding: '5px 10px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px',
                  color: caption.length > 45 ? 'red' : 'rgba(130,130,130,0.63)'
                }}>
                  <span>{caption.length}</span>/50
                </div>
              </div>
              
              {/* Title Input */}
              <div style={{ marginBottom: '18px' }}>
                <input
                  type="text"
                  id="postTitle"
                  style={{
                    width: '100%',
                    border: 'none',
                    borderBottom: '0px solid rgba(25,25,25,0.5)',
                    padding: '5px 0',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '17px',
                    color: 'rgba(25,25,25,0.5)',
                    outline: 'none'
                  }}
                  placeholder="Add Title"
                />
              </div>
              
              {/* Location Input */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '22px'
              }}>
                <input
                  type="text"
                  id="postLocation"
                  style={{
                    flex: 1,
                    border: 'none',
                    borderBottom: '0px solid rgba(25,25,25,0.5)',
                    padding: '5px 0',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '17px',
                    color: 'rgba(25,25,25,0.5)',
                    outline: 'none'
                  }}
                  placeholder="Add location"
                />
                <img 
                  width="30px" 
                  height="30px" 
                  src="/images/postlocation.png" 
                  alt="Location" 
                  style={{ 
                    cursor: 'pointer', 
                    marginLeft: '10px',
                    transition: 'transform 0.2s ease'
                  }} 
                />
              </div>
              
              {/* Price Input */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '22px'
              }}>
                <div>
                  <input
                    type="text"
                    id="postPrice"
                    style={{
                      width: '100%',
                      border: 'none',
                      borderBottom: '0px solid rgba(25,25,25,0.5)',
                      padding: '5px 0',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '17px',
                      color: 'rgba(25,25,25,0.5)',
                      outline: 'none',
                    }}
                    placeholder="Add Price"
                  />
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '11px',
                    color: 'rgba(0,0,0,0.3)',
                    cursor: 'pointer'
                  }}>
                    Hide the Price
                  </div>
                </div>
                <div style={{ cursor: 'pointer' }}>
                  <img 
                    width="45px" 
                    height="40px" 
                    src="/images/postprice.png" 
                    alt="Currency" 
                    style={{
                      transition: 'transform 0.2s ease'
                    }}
                  />
                </div>
              </div>
              
              {/* Enhanced Advanced Settings Toggle */}
              <div 
                id="advancedSettingsToggle"
                onClick={toggleAdvancedSettings}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  margin: '22px 0',
                  padding: '12px 15px',
                  borderRadius: '8px',
                  backgroundColor: showAdvanced ? 'rgba(1,47,107,0.1)' : 'transparent',
                  border: showAdvanced ? '1px solid rgba(1,47,107,0.3)' : '1px solid rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '17px',
                  color: showAdvanced ? 'rgba(1,47,107,1)' : 'rgba(25,25,25,0.9)',
                  fontWeight: 500,
                  transition: 'all 0.3s ease'
                }}>
                  Advanced Settings
                </div>
                <img 
                  id="advancedSettingsIcon" 
                  width="19.5px" 
                  height="19.5px" 
                  src={showAdvanced ? "/images/advancedup.png" : "/images/advanced.png"} 
                  alt="Settings" 
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: showAdvanced ? 'rotate(180deg)' : 'none'
                  }}
                />
              </div>
              
              {/* Enhanced Advanced Settings Content */}
              {showAdvanced && (
                <div 
                  id="advancedSettingsContent" 
                  style={{ 
                    marginBottom: '20px',
                    animation: 'slideDown 0.4s ease-out',
                    borderLeft: '3px solid rgba(1,47,107,0.5)',
                    paddingLeft: '15px',
                    borderRadius: '4px'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    gap: '20px',
                    width: '100%'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div style={{
                        marginTop: '10px',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '16px',
                        width: '271px',
                        color: 'rgba(25,25,25,0.9)',
                        lineHeight: '18.5px',
                        fontWeight: 400
                      }}>
                        Hide like and view counts on this post
                      </div>
                      <div style={{
                        marginTop: '10px',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '12px',
                        width: '371px',
                        color: 'rgba(0,0,0,0.3)',
                        lineHeight: '20px',
                        fontWeight: 400
                      }}>
                        Only you will see the total number of likes and views on this post. You
                        can change this later by going to the ··· menu at the top of the post. To
                        hide like counts on other people's posts, go to your account
                        settings.
                      </div>
                      <div style={{
                        marginTop: '25px',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '16px',
                        color: 'rgba(25,25,25,0.9)',
                        lineHeight: '18.5px',
                        fontWeight: 400
                      }}>
                        Turn off commenting
                      </div>
                      <div style={{
                        marginTop: '12px',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '12px',
                        width: '371px',
                        color: 'rgba(0,0,0,0.3)',
                        lineHeight: '20px',
                        fontWeight: 400
                      }}>
                        You can change this later by going to the ··· menu at the top of your
                        post.
                      </div>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'start', 
                      alignItems: 'start', 
                      width: '56px', 
                      height: '222px'
                    }}>
                      <div style={{
                        marginTop: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '43px'
                      }}>
                        <img width="45px" height="40px" src="/images/toggle.png" alt="Toggle" />
                      </div>
                      <div style={{
                        marginTop: '60px',
                        marginLeft: '1px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '43px'
                      }}>
                        <img width="45px" height="40px" src="/images/toggle.png" alt="Toggle" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetailsModal;