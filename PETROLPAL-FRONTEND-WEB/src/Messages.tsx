import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Messages.module.css';

const Messages = () => {
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [unreadMessages, setUnreadMessages] = useState<string[]>(['dalbit1', 'dalbit2']);
  const [hoveredMessage, setHoveredMessage] = useState<string | null>(null);

  const showChat = (chatId: string) => {
    setActiveChat(chatId);
    setUnreadMessages(unreadMessages.filter(id => id !== chatId));
  };

  const hideChat = () => {
    setActiveChat(null);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerBar}>
        <div className={styles.headerContent}>
          <Link to="/loggedin">
            <img
              className={styles.logo}
              src="/images/Messageslogo.png"
              alt="Messages Logo"
            />
          </Link>

          <div className={styles.languageSelector}>English</div>
          <img className={styles.dropdownIcon} src="/images/drop.png" alt="Dropdown" />
          <Link to="/user" className={styles.userProfile}>
            <div className={styles.userName}>Owen I.</div>
            <img
              className={styles.profilePic}
              src="/images/profile.png"
              alt="Profile Picture"
            />
          </Link>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>Messenger</div>

          <div className={styles.searchBar}>
            <img className={styles.searchIcon} src="/images/messagesearch.png" alt="Search" />
            <div className={styles.searchText}>Search suppliers</div>
          </div>

          <div className={styles.sidebarMessages}>
            <div
              className={`${styles.messageContainer} ${activeChat === 'solarwave' ? styles.active : ''} ${hoveredMessage === 'solarwave' ? styles.hovered : ''}`}
              onClick={() => showChat('solarwave')}
              onMouseEnter={() => setHoveredMessage('solarwave')}
              onMouseLeave={() => setHoveredMessage(null)}
            >
              <div className={styles.messageLeft}>
                <img className={styles.messageAvatar} src="/images/profile1.png" alt="SolarWave" />
                <div className={styles.messageInfo}>
                  <div className={styles.nameLine}>
                    <div className={styles.companyName}>SolarWave LLC</div>
                    <div className={styles.verified}>
                      <img className={styles.verifiedIcon} src="/images/verified1.png" alt="Verified" />
                    </div>
                  </div>
                  <div className={styles.lastMessage}>
                    Hi, I'm interested in buying dies...
                  </div>
                  <div className={styles.timeStamp}>
                    <span>2.04</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${styles.messageContainer} ${activeChat === 'exxon' ? styles.active : ''} ${hoveredMessage === 'exxon' ? styles.hovered : ''}`}
              onClick={() => showChat('exxon')}
              onMouseEnter={() => setHoveredMessage('exxon')}
              onMouseLeave={() => setHoveredMessage(null)}
            >
              <div className={styles.messageLeft}>
                <img className={styles.messageAvatar} src="/images/profile2.png" alt="ExxonMobil" />
                <div className={styles.messageInfo}>
                  <div className={styles.nameLine}>
                    <div className={styles.companyName}>ExxonMobil</div>
                    <div className={styles.verified}>
                      <img className={styles.verifiedIcon} src="/images/verified1.png" alt="Verified" />
                    </div>
                  </div>
                  <div className={styles.lastMessage}>
                    Hi, I'm interested in buying dies...
                  </div>
                  <div className={styles.timeStamp}>
                    <span>4.34</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${styles.messageContainer} ${activeChat === 'hass' ? styles.active : ''} ${hoveredMessage === 'hass' ? styles.hovered : ''}`}
              onClick={() => showChat('hass')}
              onMouseEnter={() => setHoveredMessage('hass')}
              onMouseLeave={() => setHoveredMessage(null)}
            >
              <div className={styles.messageLeft}>
                <img className={styles.messageAvatar} src="/images/profile3.png" alt="Hass Petroleum" />
                <div className={styles.messageInfo}>
                  <div className={styles.nameLine}>
                    <div className={styles.companyName}>Hass Petroleum</div>
                    <div className={styles.verified}>
                      <img className={styles.verifiedIcon} src="/images/verified1.png" alt="Verified" />
                    </div>
                  </div>
                  <div className={styles.lastMessage}>
                    Hi, I'm interested in buying dies...
                  </div>
                  <div className={styles.timeStamp}>
                    <span>4.04</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${styles.messageContainer} ${unreadMessages.includes('dalbit1') ? styles.unread : ''} ${activeChat === 'dalbit1' ? styles.active : ''} ${hoveredMessage === 'dalbit1' ? styles.hovered : ''}`}
              onClick={() => showChat('dalbit1')}
              onMouseEnter={() => setHoveredMessage('dalbit1')}
              onMouseLeave={() => setHoveredMessage(null)}
            >
              {unreadMessages.includes('dalbit1') && (
                <img className={styles.unreadDot} src="/images/orange.png" alt="Unread" />
              )}
              <div className={styles.messageLeft}>
                <img className={styles.messageAvatar} src="/images/profile4.png" alt="Dalbit Petroleum" />
                <div className={styles.messageInfo}>
                  <div className={styles.nameLine}>
                    <div className={styles.companyName}>Dalbit Petroleum Depots</div>
                    <div className={styles.verified}>
                      <img className={styles.verifiedIcon} src="/images/verified1.png" alt="Verified" />
                    </div>
                  </div>
                  <div className={styles.lastMessage}>
                    Hi, Are you still interested in buying dies...
                  </div>
                  <div className={styles.timeStamp}>
                    <span>1day ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${styles.messageContainer} ${unreadMessages.includes('dalbit2') ? styles.unread : ''} ${activeChat === 'dalbit2' ? styles.active : ''} ${hoveredMessage === 'dalbit2' ? styles.hovered : ''}`}
              onClick={() => showChat('dalbit2')}
              onMouseEnter={() => setHoveredMessage('dalbit2')}
              onMouseLeave={() => setHoveredMessage(null)}
            >
              {unreadMessages.includes('dalbit2') && (
                <img className={styles.unreadDot} src="/images/orange.png" alt="Unread" />
              )}
              <div className={styles.messageLeft}>
                <img className={styles.messageAvatar} src="/images/profile5.png" alt="Dalbit Petroleum" />
                <div className={styles.messageInfo}>
                  <div className={styles.nameLine}>
                    <div className={styles.companyName}>Dalbit Petroleum Depots</div>
                    <div className={styles.verified}>
                      <img className={styles.verifiedIcon} src="/images/verified1.png" alt="Verified" />
                    </div>
                  </div>
                  <div className={styles.lastMessage}>
                    Hi, Are you still interested in buying dies...
                  </div>
                  <div className={styles.timeStamp}>
                    <span>1day ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {!activeChat && (
          <div className={styles.emptyMessageState}>
            <div className={styles.messageContent}>
              <div className={styles.messageIcon}>
                <img className={styles.chatIcon} src="/images/chatboard.png" alt="Chat" />
              </div>
              <div className={styles.messageTitle}>Your messages</div>
              <div className={styles.messageSubtitle}>Send a message to start a chat.</div>
            </div>
          </div>
        )}

        {activeChat && (
          <div className={styles.activeChat}>
            {activeChat === 'solarwave' && (
              <>
                <div className={styles.chatHeader}>
                  <img className={styles.chatBack} src="/images/back.png" alt="Back" onClick={hideChat} />
                  <img className={styles.chatAvatar} src="/images/profile1.png" alt="SolarWave" />
                  <div className={styles.chatHeaderInfo}>
                    <div className={styles.chatNameRow}>
                      <span className={styles.chatName}>SolarWave LLC</span>
                      <img className={styles.verifiedBadge} src="/images/verified1.png" alt="Verified" />
                    </div>
                    <div className={styles.chatStatus}>Active 1hr ago</div>
                  </div>
                  <div className={styles.chatActions}>
                    <button className={styles.chatActionBtn}>
                      <img className={styles.phoneIcon} src="/images/phone.png" alt="Call" />
                    </button>
                    <button className={styles.chatActionBtn}>
                      <img className={styles.optionsIcon} src="/images/options.png" alt="Options" />
                    </button>
                  </div>
                </div>
                <div className={styles.chatMessagesContainer}>
                  <div className={styles.chatMessages}>
                    <div className={styles.welcomeMessage}>
                      <span>Start your conversation</span>
                    </div>
                    <div className={styles.messageDay}>Monday</div>

                    <div className={`${styles.messageWrapper} ${styles.sent}`}>
                      <div className={`${styles.messageBubble} ${styles.sent}`}>Hi, l'm interested in buying diesel. l saw your listing at KES 183/litre</div>
                      <div className={styles.sentTime}>4:23PM</div>
                    </div>

                    <div className={styles.messageWrapper}>
                      <div className={`${styles.messageBubble} ${styles.received}`}>Hello! We have several options available. What quantity are you looking for?</div>
                      <div className={styles.receivedTime}>1 min ago</div>
                    </div>

                    <div className={`${styles.messageWrapper} ${styles.sent}`}>
                      <div className={`${styles.messageBubble} ${styles.sent}`}>I need about 10,000 liters per week</div>
                      <div className={styles.sentTime}>4:25PM</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeChat === 'exxon' && (
              <>
                <div className={styles.chatHeader}>
                  <img className={styles.chatBack} src="/images/back.png" alt="Back" onClick={hideChat} />
                  <img className={styles.chatAvatar} src="/images/profile2.png" alt="ExxonMobil" />
                  <div className={styles.chatHeaderInfo}>
                    <div className={styles.chatNameRow}>
                      <span className={styles.chatName}>ExxonMobil</span>
                      <img className={styles.verifiedBadge} src="/images/verified1.png" alt="Verified" />
                    </div>
                    <div className={styles.chatStatus}>Online</div>
                  </div>
                  <div className={styles.chatActions}>
                    <button className={styles.chatActionBtn}>
                      <img className={styles.phoneIcon} src="/images/phone.png" alt="Call" />
                    </button>
                    <button className={styles.chatActionBtn}>
                      <img className={styles.optionsIcon} src="/images/options.png" alt="Options" />
                    </button>
                  </div>
                </div>
                <div className={styles.chatMessagesContainer}>
                  <div className={styles.chatMessages}>
                    <div className={styles.welcomeMessage}>
                      <span>Start your conversation</span>
                    </div>
                    <div className={styles.messageDay}>Monday</div>

                    <div className={`${styles.messageWrapper} ${styles.sent}`}>
                      <div className={`${styles.messageBubble} ${styles.sent}`}>Hi, l'm interested in buying diesel. l saw your listing at KES 183/litre</div>
                      <div className={styles.sentTime}>4:23PM</div>
                    </div>

                    <div className={styles.messageWrapper}>
                      <div className={`${styles.messageBubble} ${styles.received}`}>Hello! We have several options available. What quantity are you looking for?</div>
                      <div className={styles.receivedTime}>1 min ago</div>
                    </div>

                    <div className={`${styles.messageWrapper} ${styles.sent}`}>
                      <div className={`${styles.messageBubble} ${styles.sent}`}>I need about 10,000 liters per week</div>
                      <div className={styles.sentTime}>4:25PM</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeChat === 'hass' && (
              <>
                <div className={styles.chatHeader}>
                  <img className={styles.chatBack} src="/images/back.png" alt="Back" onClick={hideChat} />
                  <img className={styles.chatAvatar} src="/images/profile3.png" alt="Hass Petroleum" />
                  <div className={styles.chatHeaderInfo}>
                    <div className={styles.chatNameRow}>
                      <span className={styles.chatName}>Hass Petroleum</span>
                      <img className={styles.verifiedBadge} src="/images/verified1.png" alt="Verified" />
                    </div>
                    <div className={styles.chatStatus}>Online</div>
                  </div>
                  <div className={styles.chatActions}>
                    <button className={styles.chatActionBtn}>
                      <img className={styles.phoneIcon} src="/images/phone.png" alt="Call" />
                    </button>
                    <button className={styles.chatActionBtn}>
                      <img className={styles.optionsIcon} src="/images/options.png" alt="Options" />
                    </button>
                  </div>
                </div>
                <div className={styles.chatMessagesContainer}>
                  <div className={styles.chatMessages}>
                    <div className={styles.welcomeMessage}>
                      <span>Start your conversation</span>
                    </div>
                    <div className={styles.messageDay}>Monday</div>

                    <div className={`${styles.messageWrapper} ${styles.sent}`}>
                      <div className={`${styles.messageBubble} ${styles.sent}`}>Hi, l'm interested in buying diesel. l saw your listing at KES 183/litre</div>
                      <div className={styles.sentTime}>4:23PM</div>
                    </div>

                    <div className={styles.messageWrapper}>
                      <div className={`${styles.messageBubble} ${styles.received}`}>Hello! We have several options available. What quantity are you looking for?</div>
                      <div className={styles.receivedTime}>1 min ago</div>
                    </div>

                    <div className={`${styles.messageWrapper} ${styles.sent}`}>
                      <div className={`${styles.messageBubble} ${styles.sent}`}>I need about 10,000 liters per week</div>
                      <div className={styles.sentTime}>4:25PM</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeChat === 'dalbit1' && (
              <>
                <div className={styles.chatHeader}>
                  <img className={styles.chatBack} src="/images/back.png" alt="Back" onClick={hideChat} />
                  <img className={styles.chatAvatar} src="/images/profile4.png" alt="Dalbit" />
                  <div className={styles.chatHeaderInfo}>
                    <div className={styles.chatNameRow}>
                      <span className={styles.chatName}>Dalbit Petroleum Depots</span>
                      <img className={styles.verifiedBadge} src="/images/verified1.png" alt="Verified" />
                    </div>
                    <div className={styles.chatStatus}>Active 1day ago</div>
                  </div>
                  <div className={styles.chatActions}>
                    <button className={styles.chatActionBtn}>
                      <img className={styles.phoneIcon} src="/images/phone.png" alt="Call" />
                    </button>
                    <button className={styles.chatActionBtn}>
                      <img className={styles.optionsIcon} src="/images/options.png" alt="Options" />
                    </button>
                  </div>
                </div>
                <div className={styles.chatMessagesContainer}>
                  <div className={styles.chatMessages}>
                    <div className={styles.welcomeMessage}>
                      <span>Start your conversation</span>
                    </div>
                    <div className={styles.messageDay}>Monday</div>

                    <div className={`${styles.messageWrapper} ${styles.sent}`}>
                      <div className={`${styles.messageBubble} ${styles.sent}`}>Hi, l'm interested in buying diesel. l saw your listing at KES 183/litre</div>
                      <div className={styles.sentTime}>4:23PM</div>
                    </div>

                    <div className={styles.messageWrapper}>
                      <div className={`${styles.messageBubble} ${styles.received}`}>Hello! We have several options available. What quantity are you looking for?</div>
                      <div className={styles.receivedTime}>1 min ago</div>
                    </div>

                    <div className={`${styles.messageWrapper} ${styles.sent}`}>
                      <div className={`${styles.messageBubble} ${styles.sent}`}>I need about 10,000 liters per week</div>
                      <div className={styles.sentTime}>4:25PM</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeChat === 'dalbit2' && (
              <>
                <div className={styles.chatHeader}>
                  <img className={styles.chatBack} src="/images/back.png" alt="Back" onClick={hideChat} />
                  <img className={styles.chatAvatar} src="/images/profile5.png" alt="Dalbit" />
                  <div className={styles.chatHeaderInfo}>
                    <div className={styles.chatNameRow}>
                      <span className={styles.chatName}>Dalbit Petroleum Depots</span>
                      <img className={styles.verifiedBadge} src="/images/verified1.png" alt="Verified" />
                    </div>
                    <div className={styles.chatStatus}>Active 1day ago</div>
                  </div>
                  <div className={styles.chatActions}>
                    <button className={styles.chatActionBtn}>
                      <img className={styles.phoneIcon} src="/images/phone.png" alt="Call" />
                    </button>
                    <button className={styles.chatActionBtn}>
                      <img className={styles.optionsIcon} src="/images/options.png" alt="Options" />
                    </button>
                  </div>
                </div>
                <div className={styles.chatMessagesContainer}>
                  <div className={styles.chatMessages}>
                    <div className={styles.welcomeMessage}>
                      <span>Start your conversation</span>
                    </div>
                    <div className={styles.messageDay}>Monday</div>

                    <div className={`${styles.messageWrapper} ${styles.sent}`}>
                      <div className={`${styles.messageBubble} ${styles.sent}`}>Hi, l'm interested in buying diesel. l saw your listing at KES 183/litre</div>
                      <div className={styles.sentTime}>4:23PM</div>
                    </div>

                    <div className={styles.messageWrapper}>
                      <div className={`${styles.messageBubble} ${styles.received}`}>Hello! We have several options available. What quantity are you looking for?</div>
                      <div className={styles.receivedTime}>1 min ago</div>
                    </div>

                    <div className={`${styles.messageWrapper} ${styles.sent}`}>
                      <div className={`${styles.messageBubble} ${styles.sent}`}>I need about 10,000 liters per week</div>
                      <div className={styles.sentTime}>4:25PM</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className={styles.messageInputContainer}>
              <div className={styles.messageInputBar}>
                <img className={styles.clipIcon} src="/images/clip.png" alt="Attachment" />
                <input type="text" className={styles.messageInput} placeholder="Type your message..." />
                <button className={styles.messageSendBtn}>
                  <img className={styles.sendIcon} src="/images/send.png" alt="Emoji" />
                  <img className={styles.micIcon} src="/images/mic.png" alt="Send" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;