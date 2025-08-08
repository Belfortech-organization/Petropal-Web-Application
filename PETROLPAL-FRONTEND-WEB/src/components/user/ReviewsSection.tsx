import React from 'react';
import styles from '../../pages/User.module.css';

const ReviewsSection = () => (
  <div id="reviews" className={`${styles['content-section']} ${styles.active}`}>
    <div className={styles['ratings-container']}>
      <div className={styles['rating-summary']}>
        <div className={styles['rating-title']}>Ratings and Review</div>
        <div className={styles['rating-value']}>4.8</div>
        <div className={styles['stars-container']}>
          <img className={styles.star} src="/images/review.png" alt="Star" />
          <img className={styles.star} src="/images/review.png" alt="Star" />
          <img className={styles.star} src="/images/review.png" alt="Star" />
          <img className={styles.star} src="/images/review.png" alt="Star" />
          <img className={styles.star} src="/images/review.png" alt="Star" />
        </div>
        <div className={styles['reviews-count']}>26 Reviews</div>
      </div>
      <div className={styles['ratings-distribution']}>
        <div className={styles['rating-row']}>
          <div className={styles['rating-number']}>5</div>
          <div className={styles['rating-bar-container']}>
            <div className={`${styles['rating-bar']} ${styles['bar-5']}`}></div>
          </div>
        </div>
        <div className={styles['rating-row']}>
          <div className={styles['rating-number']}>4</div>
          <div className={styles['rating-bar-container']}>
            <div className={`${styles['rating-bar']} ${styles['bar-4']}`}></div>
          </div>
        </div>
        <div className={styles['rating-row']}>
          <div className={styles['rating-number']}>3</div>
          <div className={styles['rating-bar-container']}>
            <div className={`${styles['rating-bar']} ${styles['bar-3']}`}></div>
          </div>
        </div>
        <div className={styles['rating-row']}>
          <div className={styles['rating-number']}>2</div>
          <div className={styles['rating-bar-container']}>
            <div className={`${styles['rating-bar']} ${styles['bar-2']}`}></div>
          </div>
        </div>
        <div className={styles['rating-row']}>
          <div className={styles['rating-number']}>1</div>
          <div className={styles['rating-bar-container']}>
            <div className={`${styles['rating-bar']} ${styles['bar-1']}`}></div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(0,0,0,0.1)', margin: '40px 0' }}></div>
    {/* Review 1 */}
    <div style={{ marginTop: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '43px', width: '572px', height: '144px' }}>
        <img
          style={{ width: '65px', height: '65px' }}
          src="/images/review1.png"
          alt="Image Asset 1"
          width="65px"
          height="65px"
        />
        <div
          style={{
            marginTop: '2px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'start',
            gap: '9px',
            width: '464px',
            height: '142px'
          }}
        >
          <div
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '23px',
              minWidth: '98px',
              whiteSpace: 'nowrap',
              color: 'rgba(0,0,0,1)',
              lineHeight: '48px',
              fontWeight: 600
            }}
          >
            Daniel K
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'start',
              height: '23px'
            }}
          >
            <img width="20px" height="20.8px" src="/images/review.png" alt="Svg Asset 5" />
            <img style={{ marginLeft: '11px' }} width="20px" height="20.8px" src="/images/review.png" alt="Svg Asset 4" />
            <img style={{ marginLeft: '11px' }} width="20px" height="20.8px" src="/images/review.png" alt="Svg Asset 3" />
            <img style={{ marginLeft: '11px' }} width="20px" height="20.8px" src="/images/review.png" alt="Svg Asset 2" />
            <img style={{ marginLeft: '11px' }} width="19px" height="20.8px" src="/images/review.png" alt="Svg Asset 1" />
            <div style={{
              marginTop: '1px',
              marginLeft: '18px',
              fontFamily: '"Inter", sans-serif',
              fontSize: '16px',
              minWidth: '76px',
              whiteSpace: 'nowrap',
              color: 'rgba(0,0,0,0.5)',
              lineHeight: '20px',
              fontWeight: 500
            }}>
              2025-1-1
            </div>
          </div>
          <div
            style={{
              marginLeft: '4px',
              fontFamily: '"Inter", sans-serif',
              fontSize: '15px',
              width: '460px',
              color: 'rgba(0,0,0,0.5)',
              lineHeight: '20px',
              fontWeight: 400
            }}
          >
            An exceptional experience! Although there was a slight delay in initial
            communication, the diesel arrived right on schedule and perfectly met the
            specifications. Highly recommend this verified supplier!
          </div>
        </div>
      </div>
    </div>
    {/* Review 2 */}
    <div style={{ marginTop: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '43px', width: '572px', height: '144px' }}>
        <img
          style={{ width: '65px', height: '65px' }}
          src="/images/review2.png"
          alt="Image Asset 2"
          width="65px"
          height="65px"
        />
        <div
          style={{
            marginTop: '2px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'start',
            gap: '9px',
            width: '464px',
            height: '142px'
          }}
        >
          <div
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '23px',
              minWidth: '98px',
              whiteSpace: 'nowrap',
              color: 'rgba(0,0,0,1)',
              lineHeight: '48px',
              fontWeight: 600
            }}
          >
            Sarah M
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'start',
              height: '23px'
            }}
          >
            <img width="20px" height="20.8px" src="/images/review.png" alt="Svg Asset 5" />
            <img style={{ marginLeft: '11px' }} width="20px" height="20.8px" src="/images/review.png" alt="Svg Asset 4" />
            <img style={{ marginLeft: '11px' }} width="20px" height="20.8px" src="/images/review.png" alt="Svg Asset 3" />
            <img style={{ marginLeft: '11px' }} width="20px" height="20.8px" src="/images/review.png" alt="Svg Asset 2" />
            <img style={{ marginLeft: '11px' }} width="19px" height="20.8px" src="/images/review.png" alt="Svg Asset 1" />
            <div style={{
              marginTop: '1px',
              marginLeft: '18px',
              fontFamily: '"Inter", sans-serif',
              fontSize: '16px',
              minWidth: '76px',
              whiteSpace: 'nowrap',
              color: 'rgba(0,0,0,0.5)',
              lineHeight: '20px',
              fontWeight: 500
            }}>
              2025-1-15
            </div>
          </div>
          <div
            style={{
              marginLeft: '4px',
              fontFamily: '"Inter", sans-serif',
              fontSize: '15px',
              width: '460px',
              color: 'rgba(0,0,0,0.5)',
              lineHeight: '20px',
              fontWeight: 400
            }}
          >
            Reliable service with excellent communication. The solar panels were installed exactly as promised and have been working perfectly. Would definitely use SolarWave again for future projects.
          </div>
        </div>
      </div>
    </div>
    {/* Review 3 */}
    <div style={{ marginTop: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '43px', width: '572px', height: '144px' }}>
        <img
          style={{ width: '65px', height: '65px' }}
          src="/images/review3.png"
          alt="Image Asset 3"
          width="65px"
          height="65px"
        />
        <div
          style={{
            marginTop: '2px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'start',
            gap: '9px',
            width: '464px',
            height: '142px'
          }}
        >
          <div
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '23px',
              minWidth: '98px',
              whiteSpace: 'nowrap',
              color: 'rgba(0,0,0,1)',
              lineHeight: '48px',
              fontWeight: 600
            }}
          >
            James T
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'start',
              height: '23px'
            }}
          >
            <img width="20px" height="20.8px" src="/images/review.png" alt="Svg Asset 5" />
            <img style={{ marginLeft: '11px' }} width="20px" height="20.8px" src="/images/review.png" alt="Svg Asset 4" />
            <img style={{ marginLeft: '11px' }} width="20px" height="20.8px" src="/images/review.png" alt="Svg Asset 3" />
            <img style={{ marginLeft: '11px' }} width="20px" height="20.8px" src="/images/review.png" alt="Svg Asset 2" />
            <img style={{ marginLeft: '11px' }} width="19px" height="20.8px" src="/images/review.png" alt="Svg Asset 1" />
            <div style={{
              marginTop: '1px',
              marginLeft: '18px',
              fontFamily: '"Inter", sans-serif',
              fontSize: '16px',
              minWidth: '76px',
              whiteSpace: 'nowrap',
              color: 'rgba(0,0,0,0.5)',
              lineHeight: '20px',
              fontWeight: 500
            }}>
              2025-2-3
            </div>
          </div>
          <div
            style={{
              marginLeft: '4px',
              fontFamily: '"Inter", sans-serif',
              fontSize: '15px',
              width: '460px',
              color: 'rgba(0,0,0,0.5)',
              lineHeight: '20px',
              fontWeight: 400
            }}
          >
            The LPG delivery was prompt and the pricing was competitive. The customer service team was very responsive to all my questions. Will be ordering again soon!
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ReviewsSection;