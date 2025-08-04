import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Messages = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [unreadMessages, setUnreadMessages] = useState(['dalbit1', 'dalbit2']);
  const [hoveredMessage, setHoveredMessage] = useState(null);

  const showChat = (chatId) => {
    setActiveChat(chatId);
    setUnreadMessages(unreadMessages.filter(id => id !== chatId));
  };

  const hideChat = () => {
    setActiveChat(null);
  };

  return (
    <div className="page-container">
      <div className="header-bar">
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }}>
          <Link to="/loggedin">
            <img
              style={{ width: '138px', height: '40px' }}
              src="/images/Messageslogo.png"
              alt="Messages Logo"
            />
          </Link>

          <div style={{ marginLeft: '810px', fontFamily: "'Lato', sans-serif", fontSize: '18px', minWidth: '57px', whiteSpace: 'nowrap', color: 'rgba(255,255,255,1)', lineHeight: '20px', fontWeight: 500 }}>
            English
          </div>
          <img style={{ marginLeft: '12px' }} width="9.4px" height="5.4px" src="/images/drop.png" alt="Dropdown" />
          <Link to="/user" style={{ textDecoration: 'none' }}>
            <div style={{ marginLeft: '36px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'white', fontWeight: 500, marginRight: '24px' }}>
                Owen I.
              </div>
              <img
                style={{ width: '61px', height: '61px', borderRadius: '50%' }}
                src="/images/profile.png"
                alt="Profile Picture"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="main-content">
        <div className="sidebar">
          <div className="sidebar-header">
            <span style={{ letterSpacing: '-0.40799999237060547px' }}>Messenger</span>
          </div>

          <div className="search-bar">
            <img width="24px" height="24px" src="/images/messagesearch.png" alt="Search" />
            <div style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '14.21px', minWidth: '215px', whiteSpace: 'nowrap', color: 'rgba(0,0,0,0.4)', lineHeight: '100%', fontWeight: 400 }}>
              <span>Search suppliers</span>
            </div>
          </div>

          <div className="sidebar-messages">
            <div 
              className={`message-container ${activeChat === 'solarwave' ? 'active' : ''} ${hoveredMessage === 'solarwave' ? 'hovered' : ''}`}
              onClick={() => showChat('solarwave')}
              onMouseEnter={() => setHoveredMessage('solarwave')}
              onMouseLeave={() => setHoveredMessage(null)}
            >
              <div className="message-left">
                <img className="message-avatar" src="/images/profile1.png" alt="SolarWave" />
                <div className="message-info">
                  <div className="name-line">
                    <div className="company-name">SolarWave LLC</div>
                    <div className="verified">
                      <img width="17.5px" height="17.5px" src="/images/verified1.png" alt="Verified" />
                    </div>
                  </div>
                  <div className="last-message">
                    Hi, I'm interested in buying dies...
                  </div>
                  <div className="time-stamp">
                    <span style={{ fontSize: '12.277227401733398px' }}>2.04</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={`message-container ${activeChat === 'exxon' ? 'active' : ''} ${hoveredMessage === 'exxon' ? 'hovered' : ''}`}
              onClick={() => showChat('exxon')}
              onMouseEnter={() => setHoveredMessage('exxon')}
              onMouseLeave={() => setHoveredMessage(null)}
            >
              <div className="message-left">
                <img className="message-avatar" src="/images/profile2.png" alt="ExxonMobil" />
                <div className="message-info">
                  <div className="name-line">
                    <div className="company-name">ExxonMobil</div>
                    <div className="verified">
                      <img width="17.5px" height="17.5px" src="/images/verified1.png" alt="Verified" />
                    </div>
                  </div>
                  <div className="last-message">
                    Hi, I'm interested in buying dies...
                  </div>
                  <div className="time-stamp">
                    <span style={{ fontSize: '12.277227401733398px' }}>4.34</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={`message-container ${activeChat === 'hass' ? 'active' : ''} ${hoveredMessage === 'hass' ? 'hovered' : ''}`}
              onClick={() => showChat('hass')}
              onMouseEnter={() => setHoveredMessage('hass')}
              onMouseLeave={() => setHoveredMessage(null)}
            >
              <div className="message-left">
                <img className="message-avatar" src="/images/profile3.png" alt="Hass Petroleum" />
                <div className="message-info">
                  <div className="name-line" style={{ width: '166px' }}>
                    <div className="company-name">Hass Petroleum</div>
                    <div className="verified">
                      <img width="17.5px" height="17.5px" src="/images/verified1.png" alt="Verified" />
                    </div>
                  </div>
                  <div className="last-message">
                    Hi, I'm interested in buying dies...
                  </div>
                  <div className="time-stamp">
                    <span style={{ fontSize: '12.277227401733398px' }}>4.04</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={`message-container ${unreadMessages.includes('dalbit1') ? 'unread' : ''} ${activeChat === 'dalbit1' ? 'active' : ''} ${hoveredMessage === 'dalbit1' ? 'hovered' : ''}`}
              onClick={() => showChat('dalbit1')}
              onMouseEnter={() => setHoveredMessage('dalbit1')}
              onMouseLeave={() => setHoveredMessage(null)}
            >
              {unreadMessages.includes('dalbit1') && (
                <img className="unread-dot" src="/images/orange.png" alt="Unread" />
              )}
              <div className="message-left">
                <img className="message-avatar" src="/images/profile4.png" alt="Dalbit Petroleum" />
                <div className="message-info" style={{ width: '258px' }}>
                  <div className="name-line" style={{ width: '234px' }}>
                    <div className="company-name" style={{ minWidth: '196px' }}>Dalbit Petroleum Depots</div>
                    <div className="verified">
                      <img width="17.5px" height="17.5px" src="/images/verified1.png" alt="Verified" />
                    </div>
                  </div>
                  <div className="last-message" style={{ minWidth: '257px', marginTop: '4px' }}>
                    Hi, Are you still interested in buying dies...
                  </div>
                  <div className="time-stamp" style={{ marginTop: '8px' }}>
                    <span style={{ fontSize: '12.277227401733398px' }}>1day ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={`message-container ${unreadMessages.includes('dalbit2') ? 'unread' : ''} ${activeChat === 'dalbit2' ? 'active' : ''} ${hoveredMessage === 'dalbit2' ? 'hovered' : ''}`}
              onClick={() => showChat('dalbit2')}
              onMouseEnter={() => setHoveredMessage('dalbit2')}
              onMouseLeave={() => setHoveredMessage(null)}
            >
              {unreadMessages.includes('dalbit2') && (
                <img className="unread-dot" src="/images/orange.png" alt="Unread" />
              )}
              <div className="message-left">
                <img className="message-avatar" src="/images/profile5.png" alt="Dalbit Petroleum" />
                <div className="message-info" style={{ width: '257px' }}>
                  <div className="name-line" style={{ width: '235px' }}>
                    <div className="company-name" style={{ minWidth: '196px' }}>Dalbit Petroleum Depots</div>
                    <div className="verified">
                      <img width="17.5px" height="17.5px" src="/images/verified1.png" alt="Verified" />
                    </div>
                  </div>
                  <div className="last-message" style={{ minWidth: '257px' }}>
                    Hi, Are you still interested in buying dies...
                  </div>
                  <div className="time-stamp">
                    <span style={{ fontSize: '12.277227401733398px' }}>1day ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {!activeChat && (
          <div className="empty-message-state">
            <div className="message-content">
              <div className="message-icon">
                <img width="120.3px" height="120.3px" src="/images/chatboard.png" alt="Chat" />
              </div>
              <div className="message-title">Your messages</div>
              <div className="message-subtitle">Send a message to start a chat.</div>
            </div>
          </div>
        )}

        {activeChat && (
          <div className="active-chat">
            {activeChat === 'solarwave' && (
              <>
                <div className="chat-header">
                  <img className="chat-back" src="/images/back.png" alt="Back" onClick={hideChat} />
                  <img className="chat-avatar" src="/images/profile1.png" alt="SolarWave" />
                  <div className="chat-header-info">
                    <div className="chat-name-row">
                      <span className="chat-name">SolarWave LLC</span>
                      <img className="verified-badge" src="/images/verified1.png" alt="Verified" />
                    </div>
                    <div className="chat-status">Active 1hr ago</div>
                  </div>
                  <div className="chat-actions">
                    <button className="chat-action-btn">
                      <img width="36" height="43" src="/images/phone.png" alt="Call" />
                    </button>
                    <button className="chat-action-btn">
                      <img width="35" height="32.9" src="/images/options.png" alt="Options" />
                    </button>
                  </div>
                </div>
                <div className="chat-messages-container">
                  <div className="chat-messages">
                    <div className="welcome-message">
                      <span>Start your conversation</span>
                    </div>
                    <div className="message-day">Monday</div>
                    
                    <div className="message-wrapper sent">
                      <div className="message-bubble sent">Hi, l'm interested in buying diesel. l saw your listing at KES 183/litre</div>
                      <div className="sent-time">4:23PM</div>
                    </div>
                    
                    <div className="message-wrapper">
                      <div className="message-bubble received">Hello! We have several options available. What quantity are you looking for?</div>
                      <div className="received-time">1 min ago</div>
                    </div>
                    
                    <div className="message-wrapper sent">
                      <div className="message-bubble sent">I need about 10,000 liters per week</div>
                      <div className="sent-time">4:25PM</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeChat === 'exxon' && (
              <>
                <div className="chat-header">
                  <img className="chat-back" src="/images/back.png" alt="Back" onClick={hideChat} />
                  <img className="chat-avatar" src="/images/profile2.png" alt="ExxonMobil" />
                  <div className="chat-header-info">
                    <div className="chat-name-row">
                      <span className="chat-name">ExxonMobil</span>
                      <img className="verified-badge" src="/images/verified1.png" alt="Verified" />
                    </div>
                    <div className="chat-status">Online</div>
                  </div>
                  <div className="chat-actions">
                    <button className="chat-action-btn">
                      <img width="36" height="43" src="/images/phone.png" alt="Call" />
                    </button>
                    <button className="chat-action-btn">
                      <img width="35" height="32.9" src="/images/options.png" alt="Options" />
                    </button>
                  </div>
                </div>
                <div className="chat-messages-container">
                  <div className="chat-messages">
                    <div className="welcome-message">
                      <span>Start your conversation</span>
                    </div>
                    <div className="message-day">Monday</div>
                    
                    <div className="message-wrapper sent">
                      <div className="message-bubble sent">Hi, l'm interested in buying diesel. l saw your listing at KES 183/litre</div>
                      <div className="sent-time">4:23PM</div>
                    </div>
                    
                    <div className="message-wrapper">
                      <div className="message-bubble received">Hello! We have several options available. What quantity are you looking for?</div>
                      <div className="received-time">1 min ago</div>
                    </div>
                    
                    <div className="message-wrapper sent">
                      <div className="message-bubble sent">I need about 10,000 liters per week</div>
                      <div className="sent-time">4:25PM</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeChat === 'hass' && (
              <>
                <div className="chat-header">
                  <img className="chat-back" src="/images/back.png" alt="Back" onClick={hideChat} />
                  <img className="chat-avatar" src="/images/profile3.png" alt="Hass Petroleum" />
                  <div className="chat-header-info">
                    <div className="chat-name-row">
                      <span className="chat-name">Hass Petroleum</span>
                      <img className="verified-badge" src="/images/verified1.png" alt="Verified" />
                    </div>
                    <div className="chat-status">Online</div>
                  </div>
                  <div className="chat-actions">
                    <button className="chat-action-btn">
                      <img width="36" height="43" src="/images/phone.png" alt="Call" />
                    </button>
                    <button className="chat-action-btn">
                      <img width="35" height="32.9" src="/images/options.png" alt="Options" />
                    </button>
                  </div>
                </div>
                <div className="chat-messages-container">
                  <div className="chat-messages">
                    <div className="welcome-message">
                      <span>Start your conversation</span>
                    </div>
                    <div className="message-day">Monday</div>
                    
                    <div className="message-wrapper sent">
                      <div className="message-bubble sent">Hi, l'm interested in buying diesel. l saw your listing at KES 183/litre</div>
                      <div className="sent-time">4:23PM</div>
                    </div>
                    
                    <div className="message-wrapper">
                      <div className="message-bubble received">Hello! We have several options available. What quantity are you looking for?</div>
                      <div className="received-time">1 min ago</div>
                    </div>
                    
                    <div className="message-wrapper sent">
                      <div className="message-bubble sent">I need about 10,000 liters per week</div>
                      <div className="sent-time">4:25PM</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeChat === 'dalbit1' && (
              <>
                <div className="chat-header">
                  <img className="chat-back" src="/images/back.png" alt="Back" onClick={hideChat} />
                  <img className="chat-avatar" src="/images/profile4.png" alt="Dalbit" />
                  <div className="chat-header-info">
                    <div className="chat-name-row">
                      <span className="chat-name">Dalbit Petroleum Depots</span>
                      <img className="verified-badge" src="/images/verified1.png" alt="Verified" />
                    </div>
                    <div className="chat-status">Active 1day ago</div>
                  </div>
                  <div className="chat-actions">
                    <button className="chat-action-btn">
                      <img width="36" height="43" src="/images/phone.png" alt="Call" />
                    </button>
                    <button className="chat-action-btn">
                      <img width="35" height="32.9" src="/images/options.png" alt="Options" />
                    </button>
                  </div>
                </div>
                <div className="chat-messages-container">
                  <div className="chat-messages">
                    <div className="welcome-message">
                      <span>Start your conversation</span>
                    </div>
                    <div className="message-day">Monday</div>
                    
                    <div className="message-wrapper sent">
                      <div className="message-bubble sent">Hi, l'm interested in buying diesel. l saw your listing at KES 183/litre</div>
                      <div className="sent-time">4:23PM</div>
                    </div>
                    
                    <div className="message-wrapper">
                      <div className="message-bubble received">Hello! We have several options available. What quantity are you looking for?</div>
                      <div className="received-time">1 min ago</div>
                    </div>
                    
                    <div className="message-wrapper sent">
                      <div className="message-bubble sent">I need about 10,000 liters per week</div>
                      <div className="sent-time">4:25PM</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeChat === 'dalbit2' && (
              <>
                <div className="chat-header">
                  <img className="chat-back" src="/images/back.png" alt="Back" onClick={hideChat} />
                  <img className="chat-avatar" src="/images/profile5.png" alt="Dalbit" />
                  <div className="chat-header-info">
                    <div className="chat-name-row">
                      <span className="chat-name">Dalbit Petroleum Depots</span>
                      <img className="verified-badge" src="/images/verified1.png" alt="Verified" />
                    </div>
                    <div className="chat-status">Active 1day ago</div>
                  </div>
                  <div className="chat-actions">
                    <button className="chat-action-btn">
                      <img width="36" height="43" src="/images/phone.png" alt="Call" />
                    </button>
                    <button className="chat-action-btn">
                      <img width="35" height="32.9" src="/images/options.png" alt="Options" />
                    </button>
                  </div>
                </div>
                <div className="chat-messages-container">
                  <div className="chat-messages">
                    <div className="welcome-message">
                      <span>Start your conversation</span>
                    </div>
                    <div className="message-day">Monday</div>
                    
                    <div className="message-wrapper sent">
                      <div className="message-bubble sent">Hi, l'm interested in buying diesel. l saw your listing at KES 183/litre</div>
                      <div className="sent-time">4:23PM</div>
                    </div>
                    
                    <div className="message-wrapper">
                      <div className="message-bubble received">Hello! We have several options available. What quantity are you looking for?</div>
                      <div className="received-time">1 min ago</div>
                    </div>
                    
                    <div className="message-wrapper sent">
                      <div className="message-bubble sent">I need about 10,000 liters per week</div>
                      <div className="sent-time">4:25PM</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="message-input-container">
              <div className="message-input-bar">
                <img width="25px" height="23.9px" src="/images/clip.png" alt="Attachment" />
                <input type="text" className="message-input" placeholder="Type your message..." />
                <button className="message-send-btn">
                  <img width="25px" height="25px" src="/images/send.png" alt="Emoji" style={{ marginRight: '10px' }} />
                  <img width="25px" height="29.2px" src="/images/mic.png" alt="Send" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          font-family: 'Inter', sans-serif;
          background-color: #f4f4f4;
          overflow: hidden;
        }
      `}</style>

      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100vh;
          background-color: #f4f4f4;
          overflow: hidden;
        }

        .header-bar {
          width: 100%;
          background-color: rgba(1, 47, 107, 1);
          height: 80px;
          display: flex;
          align-items: center;
          padding: 0 30px;
          box-sizing: border-box;
          flex-shrink: 0;
        }

        .main-content {
          display: flex;
          width: 100%;
          height: calc(100vh - 80px);
          overflow: hidden;
        }

        .sidebar {
          width: 459px;
          background-color: rgba(250, 250, 250, 1);
          display: flex;
          flex-direction: column;
          padding-top: 23px;
          box-sizing: border-box;
          box-shadow: 2px 0 8px rgba(0,0,0,0.1);
          height: 100%;
          overflow: hidden;
        }

        .sidebar-header {
          font-size: 24px;
          color: rgba(1,47,107,0.5);
          font-weight: 600;
          padding-left: 70px;
          box-sizing: border-box;
          flex-shrink: 0;
        }

        .search-bar {
          border-radius: 10px;
          border: 2px solid rgb(1,47,107);
          width: 310px;
          height: 51px;
          background-color: rgba(255,255,255,1);
          margin-top: 24px;
          margin-left: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 22px;
          box-sizing: border-box;
          flex-shrink: 0;
        }

        .sidebar-messages {
          margin-top: 60px;
          flex: 1;
          overflow-y: auto;
          padding-bottom: 20px;
          box-sizing: border-box;
        }

        .sidebar-messages::-webkit-scrollbar {
          width: 8px;
        }
        .sidebar-messages::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 4px;
        }

        .message-container {
          width: 100%;
          height: 131px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          padding: 12px 80px 12px 70px;
          cursor: pointer;
          transition: background-color 0.15s ease;
          background-color: transparent;
          position: relative;
        }

        .message-container:hover,
        .message-container.hovered {
          background-color: rgba(0,0,0,0.1);
        }

        .message-container.active {
          background-color: rgba(0,0,0,0.1);
        }

        .message-left {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .message-avatar {
          width: 73px;
          height: 73px;
          border-radius: 50%;
          flex: 0 0 73px;
        }

        .message-info {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: start;
          width: 205px;
        }

        .name-line {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 15px;
          width: 40%;
          height: 20px;
        }

        .company-name {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          white-space: nowrap;
          color: rgba(18,18,18,1);
          line-height: 18.5px;
          letter-spacing: -0.01em;
          font-weight: 600;
        }

        .verified {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 20px;
        }

        .last-message {
          margin-top: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          white-space: nowrap;
          color: rgba(130,130,130,1);
          line-height: 18.4px;
          font-weight: 400;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .time-stamp {
          margin-top: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 12.3px;
          white-space: nowrap;
          color: rgba(130,130,130,1);
          text-align: right;
          line-height: 100%;
          font-weight: 400;
        }

        .unread-dot {
          position: absolute;
          top: 10px;
          right: 15px;
          width: 14px;
          height: 14px;
          display: none;
        }

        .message-container.unread .unread-dot {
          display: block;
        }

        .empty-message-state {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ffffff;
          overflow: hidden;
        }

        .active-chat {
          flex: 1;
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .message-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          width: 332px;
          height: 236px;
          text-align: center;
        }

        .message-icon {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 151px;
          height: 151px;
        }

        .message-title {
          font-family: 'Inter', sans-serif;
          font-size: 25px;
          white-space: nowrap;
          color: rgba(0,0,0,0.5);
          line-height: 48px;
          font-weight: 600;
        }

        .message-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 22px;
          white-space: nowrap;
          color: rgba(0,0,0,0.5);
          line-height: 48px;
          font-weight: 400;
        }

        .chat-header {
          display: flex;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid #eee;
          height: 80px;
          box-sizing: border-box;
          flex-shrink: 0;
        }

        .chat-back {
          width: 33px;
          height: 33px;
          margin-right: 16px;
          cursor: pointer;
          flex: 0 0 33px;
        }

        .chat-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 15px;
          flex: 0 0 50px;
        }

        .chat-header-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          gap: 3px;
          width: 100%;
          max-width: 260px;
        }

        .chat-name-row {
          display: flex;
          align-items: center;
          gap: 6px;
          line-height: 18.5px;
        }

        .chat-name {
          font-size: 19px;
          color: rgba(18,18,18,1);
          letter-spacing: -0.01em;
          font-weight: 600;
          white-space: nowrap;
        }

        .verified-badge {
          width: 17.5px;
          height: 17.5px;
        }

        .chat-status {
          font-size: 13px;
          color: rgba(130,130,130,1);
          line-height: 18.4px;
          font-weight: 400;
          white-space: nowrap;
        }

        .chat-actions {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .chat-action-btn {
          width: 39px;
          height: 39px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .chat-action-btn img {
          display: block;
        }

        .chat-messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          padding-bottom: 100px;
        }

        .chat-messages {
          display: flex;
          flex-direction: column;
        }

        .message-day {
          align-self: center;
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          color: rgba(0,0,0,0.5);
          line-height: 100%;
          font-weight: 500;
          margin: 20px 0;
        }

        .welcome-message {
          align-self: center;
          border-radius: 10px;
          width: 315px;
          height: 63px;
          background-color: rgba(240,240,240,1);
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px 0;
        }

        .welcome-message span {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          color: rgba(0,0,0,0.7);
          line-height: 100%;
          font-weight: 400;
        }

        .message-wrapper {
          display: flex;
          flex-direction: column;
          max-width: 315px;
          margin: 10px 0;
        }

        .message-wrapper.sent {
          align-self: flex-end;
          position: relative;
        }

        .message-bubble {
          max-width: 315px;
          padding: 15px;
          border-radius: 10px;
          font-size: 17px;
          line-height: 1.4;
        }

        .received {
          background-color: rgba(240,240,240,1);
          color: rgba(0,0,0,0.7);
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 10px;
        }

        .received-time {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: rgba(0,0,0,0.5);
          line-height: 100%;
          font-weight: 400;
          margin-top: 5px;
          margin-left: 10px;
        }

        .sent {
          background-color: rgba(1, 47, 107, 1);
          color: rgba(255,255,255,1);
          border-top-right-radius: 10px;
          border-bottom-left-radius: 10px;
          border-top-left-radius: 10px;
        }

        .sent-time {
          position: absolute;
          bottom: -18px;
          right: 0;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: rgba(0,0,0,0.5);
          line-height: 100%;
          font-weight: 400;
        }

        .message-input-container {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: white;
          border-top: 1px solid #eee;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          flex-shrink: 0;
        }

        .message-input-bar {
          width: 100%;
          max-width: 904px;
          height: 63px;
          border-radius: 20px;
          border: 2px solid #dfdfdf;
          box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.05);
          background-color: #fff;
          display: flex;
          align-items: center;
          padding-left: 41px;
        }

        .message-input {
          flex: 1;
          border: none;
          outline: none;
          font-family: 'Work Sans', sans-serif;
          font-size: 21px;
          color: rgba(0,0,0,0.4);
          margin-left: 20px;
        }

        .message-send-btn {
          margin-left: auto;
          margin-right: 20px;
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Messages;