import React from 'react';
import styles from '../../pages/User.module.css';

const CompanyHeaderInformation = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    gap: '300px',
    width: '800px',
    height: '131px',
    margin: '20px auto 0'
  }}>
    <div style={{
      marginTop: '9px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
      width: '218px',
      height: '122px'
    }}>
      <div className={styles['name-line']}>
        <div className={styles['company-name']}>SolarWave LLC</div>
        <div className={styles.verified}>
          <img src="/images/verified1.png" alt="Verified Badge" />
        </div>
      </div>
      <div style={{
        marginTop: '21px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
        gap: '10px',
        width: '215px',
        height: '70px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'start',
          gap: '20px',
          width: '26px',
          height: '70px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '26px',
            height: '26px'
          }}>
            <img width="22px" height="24px" src="/images/profilelocation.png" alt="Svg Asset 2" />
          </div>
          <img width="22px" height="21.7px" src="/images/review.png" alt="Svg Asset 1" />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'start',
          gap: '0px',
          width: '200px',
          height: '65px'
        }}>
          <div style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '20px',
            minWidth: '0px',
            whiteSpace: 'nowrap',
            color: 'rgba(25,25,25,1)',
            lineHeight: '18.5px',
            letterSpacing: '-0.01em',
            fontWeight: 500
          }}>
            Nairobi
          </div>
          <div style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '18px',
            minWidth: '140px',
            whiteSpace: 'nowrap',
            color: 'rgba(0,0,0,0.8)',
            lineHeight: '18.5px',
            letterSpacing: '-0.01em',
            fontWeight: 400
          }}>
            4.8 (26 Reviews)
          </div>
        </div>
      </div>
    </div>
    {/* Orange button updated */}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '26px',
      width: '325px',
      height: '94px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '47px',
        height: '47px'
      }}>
        <img width="38.2px" height="38.2px" src="/images/edit.png" alt="Edit" />
      </div>
      <div style={{
        fontFamily: '"Inter", sans-serif',
        fontSize: '20px',
        whiteSpace: 'nowrap',
        color: 'rgba(25,25,25,1)',
        lineHeight: '18.5px',
        letterSpacing: '-0.01em',
        fontWeight: 600
      }}>
        5.2K Followers
      </div>
    </div>
  </div>
);

export default CompanyHeaderInformation;