import React from 'react';
import styles from '../../pages/User.module.css';

const PostsSection = () => (
  <div id="posts" className={`${styles['content-section']} ${styles.active}`}>
    <div className={styles['posts-grid']}>
      {/* Post 1 */}
      <div className={styles['post-card']}>
        <div className={styles['post-header']}>
          <img className={styles['profile-image']} src="/images/seller2.png" alt="Profile" />
          <div className={styles['profile-info']}>
            <div className={styles['profile-name']}>
              SolarWave LLC
              <img src="/images/verified1.png" width="25" height="27" alt="Verified" />
            </div>
            <div className={styles['rating-container']}>
              <img width="18.1" height="19" src="/images/review.png" alt="Rating" />
              <div className={styles['rating-text']}>4.8</div>
            </div>
          </div>
        </div>
        <div className={styles['post-description']}>
          Diesel price update: Be the first to get the new KES 183/litre rate on all bulk orders
        </div>
        <img className={styles['post-image']} src="/images/product1.png" alt="Post" />
        <div className={styles['post-meta']}>
          <div className={styles['location-info']}>
            <img width="14" height="16" src="/images/location_.png" alt="Location" />
            <span>Nairobi, Kenya</span>
          </div>
          <div className={styles['price-info']}>KES 183/litre</div>
        </div>
        <div className={styles['time-info']}>
          <img width="17" height="17" src="/images/clock.png" alt="Clock" />
          <span>Posted 15 min ago</span>
        </div>
        <div className={styles['post-actions']}>
          <img width="18.3" height="17.1" src="/images/like.png" alt="Like" />
          <img width="20" height="20" src="/images/message.png" alt="Comment" />
          <img width="20" height="20" src="/images/share.png" alt="Share" />
          <div className={styles['start-chat-btn-small']}>
            <div className={styles['start-chat-text']}>Start Chat</div>
          </div>
        </div>
      </div>

      {/* Post 2 */}
      <div className={styles['post-card']}>
        <div className={styles['post-header']}>
          <img className={styles['profile-image']} src="/images/seller1.png" alt="Profile" />
          <div className={styles['profile-info']}>
            <div className={styles['profile-name']}>
              Hass Petroleum
              <img src="/images/verified1.png" width="25" height="27" alt="Verified" />
            </div>
            <div className={styles['rating-container']}>
              <img width="18.1" height="19" src="/images/review.png" alt="Rating" />
              <div className={styles['rating-text']}>4.6</div>
            </div>
          </div>
        </div>
        <div className={styles['post-description']}>
          Gas-oil special offer: 10,000L minimum order at KES 183/litre
        </div>
        <img className={styles['post-image']} src="/images/product2.png" alt="Post" />
        <div className={styles['post-meta']}>
          <div className={styles['location-info']}>
            <img width="14" height="16" src="/images/location_.png" alt="Location" />
            <span>Kisumu</span>
          </div>
          <div className={styles['price-info']}>KES 183/litre</div>
        </div>
        <div className={styles['time-info']}>
          <img width="17" height="17" src="/images/clock.png" alt="Clock" />
          <span>Posted 1h ago</span>
        </div>
        <div className={styles['post-actions']}>
          <img width="18.3" height="17.1" src="/images/like.png" alt="Like" />
          <img width="20" height="20" src="/images/message.png" alt="Comment" />
          <img width="20" height="20" src="/images/share.png" alt="Share" />
          <div className={styles['start-chat-btn-small']}>
            <div className={styles['start-chat-text']}>Start Chat</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PostsSection;