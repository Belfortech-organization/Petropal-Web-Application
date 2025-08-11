import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Analytics.module.css';

interface Post {
  id: number;
  title: string;
  image: string;
  time: string;
  description: string;
  impressions: string;
}

const Analytics = () => {
  const [showDetailView, setShowDetailView] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [detailViewClosed, setDetailViewClosed] = useState(false);

  const handleViewAnalytics = (post: Post) => {
    setSelectedPost(post);
    setShowDetailView(true);
    setDetailViewClosed(false);
  };

  const posts: Post[] = [
    {
      id: 1,
      title: "SolarWave LLC",
      image: "/images/analytic.png",
      time: "posted this. 3w",
      description: "Diesel price update: Be the first to get the",
      impressions: "10 Impression"
    },
    {
      id: 2,
      title: "SolarWave LLC",
      image: "/images/analytic1.png",
      time: "posted this. 3w",
      description: "Diesel price update: Be the first to get the",
      impressions: "10 Impression"
    }
  ];

  return (
    <div className={styles.notificationsContainer}>
      {/* Header Section */}
<div className={styles.navBar} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
  
  {/* Left Section: Logo, Category, Search */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
    
    {/* Logo */}
    <Link to="/loggedin">
      <img className={styles.logo} src="/images/logo_.png" alt="Petropal Logo" />
    </Link>

    {/* Category Dropdown */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
        <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'white', fontWeight: 600 }}>
          Search by
        </span>
        <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'white', fontWeight: 600 }}>
          Category
        </span>
      </div>
      <img width="13" height="15" src="/images/dropp.png" alt="Dropdown" />
    </div>

    {/* Search Bar */}
    <div className={styles.searchContainer}>
      {/* Search Section */}
      <div className={styles.searchSection}>
        <img style={{ marginLeft: '16px' }} width="14.6" height="14.6" src="/images/search.png" alt="Search" />
        <div style={{ marginLeft: '18px', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(1,47,107,0.5)', fontWeight: 600, whiteSpace: 'nowrap' }}>
          Products & Services
        </div>
      </div>

      {/* Divider */}
      <img className={styles.searchDivider} src="/images/Line.png" alt="Divider" />

      {/* Location & Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img width="23" height="23" src="/images/location.png" alt="Location" />
        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(1,47,107,0.5)', fontWeight: 600 }}>
          Location
        </div>
        <div className={styles.searchButton}>
          <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'white', fontWeight: 600 }}>
            Search
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Right Section: Language & Profile */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '50px', marginRight: '25px' }}>
    
    {/* Language Selector */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ fontFamily: '"Lato", sans-serif', fontSize: '18px', color: 'white', fontWeight: 500 }}>
        English
      </div>
      <img width="11" height="7" src="/images/drop.png" alt="Dropdown" />
    </div>

    {/* Profile Section */}
    <Link to="/user" style={{ textDecoration: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'white', fontWeight: 500, whiteSpace: 'nowrap' }}>
          Owen I.
        </div>
        <img
          className={styles.profilePic}
          src="/images/profile.png"
          alt="Profile Picture"
        />
      </div>
    </Link>
  </div>
</div>

        {/* Notification Title Section */}
        <div className={styles.notificationHeader}>
          <button
            className={styles.backButton}
            onClick={() => {
              if (showDetailView) {
                setShowDetailView(false);
                setDetailViewClosed(true);
              } else if (detailViewClosed) {
                window.history.back();
              }
            }}
          >
            <img src="/images/back.png" alt="Back" width={24} height={24} />
          </button>
          <div className={styles.notificationTitle}>Analytics</div>
        </div>
      {/* Analytics Content Section */}
      <div className={styles.scrollableContent}>
        <div className={styles.splitViewContainer}>
          {/* Left Content - Main Analytics */}
          <div className={`${styles.leftContent} ${showDetailView ? styles.leftContentWithDetail : ''}`}>
            {/* Analytics Subheader Section */}
            <div className={styles.analyticsSubheaderContainer}>
              <div className={styles.analyticsSubheader}>
                <div className={styles.analyticsMainText}>Content Performance</div>
                <div className={styles.analyticsNumber}>25</div>
                <div className={styles.analyticsSubtext}>Impressions</div>
              </div>
            </div>

            {/* Analytics Chart */}
            <div className={styles.chartContainer}>
              <div className={styles.chartWrapper}>
                <div className={styles.chartInner}>
                  <div className={styles.chartYAxis}>
                    <div className={styles.yAxisLabels}>
                      <div className={styles.yAxisLabel}>500</div>
                      <div className={styles.yAxisLabel}>400</div>
                      <div className={styles.yAxisLabel}>300</div>
                      <div className={styles.yAxisLabel}>200</div>
                      <div className={styles.yAxisLabel}>100</div>
                      <div className={styles.yAxisLabel}>0</div>
                    </div>

                    <div className={styles.chartArea}>
                      {/* SVG with line and area */}
                      <svg width="292" height="270" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
                        <path
                          d="
                            M 290.4,136
                            C 270,138 258,148 246.4,141
                            S 218,156 198.7,156
                            S 164,176 151.1,176
                            S 116,161 103.5,161
                            S 70,181 55.9,181
                            S 20,171 8.3,171
                            L 8.3,270
                            L 290.4,270
                            Z
                          "
                          fill="rgba(37, 99, 235, 0.08)"
                        />
                        <path
                          d="
                            M 290.4,136
                            C 270,138 258,148 246.4,141
                            S 218,156 198.7,156
                            S 164,176 151.1,176
                            S 116,161 103.5,161
                            S 70,181 55.9,181
                            S 20,171 8.3,171
                          "
                          fill="none"
                          stroke="#2563EB"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>

                      {/* Graph dots */}
                      <img className={styles.graphDot} style={{ bottom: '130px', left: '286.8px' }} src="/images/graphdot.png" alt="Graph Dot" />
                      <img className={styles.graphDot} style={{ bottom: '125px', left: '239.2px' }} src="/images/graphdot.png" alt="Graph Dot" />
                      <img className={styles.graphDot} style={{ bottom: '110px', left: '191.5px' }} src="/images/graphdot.png" alt="Graph Dot" />
                      <img className={styles.graphDot} style={{ bottom: '90px', left: '143.9px' }} src="/images/graphdot.png" alt="Graph Dot" />
                      <img className={styles.graphDot} style={{ bottom: '105px', left: '96.3px' }} src="/images/graphdot.png" alt="Graph Dot" />
                      <img className={styles.graphDot} style={{ bottom: '85px', left: '48.6px' }} src="/images/graphdot.png" alt="Graph Dot" />
                      <img className={styles.graphDot} style={{ bottom: '95px', left: '1px' }} src="/images/graphdot.png" alt="Graph Dot" />

                      {/* Grid lines */}
                      <img className={styles.gridLine} style={{ bottom: '54px' }} src="/images/linegraph1.png" alt="Line" />
                      <img className={styles.gridLine} style={{ bottom: '108px' }} src="/images/linegraph1.png" alt="Line" />
                      <img className={styles.gridLine} style={{ bottom: '162px' }} src="/images/linegraph1.png" alt="Line" />
                      <img className={styles.gridLine} style={{ bottom: '216px' }} src="/images/linegraph1.png" alt="Line" />
                      <img className={styles.gridLine} style={{ bottom: '270px' }} src="/images/linegraph1.png" alt="Line" />
                    </div>
                  </div>

                  <div className={styles.xAxisLabels}>
                    <div className={styles.xAxisLabel}>Jan</div>
                    <div className={styles.xAxisLabel}>Feb</div>
                    <div className={styles.xAxisLabel}>Mar</div>
                    <div className={styles.xAxisLabel}>Apr</div>
                    <div className={styles.xAxisLabel}>May</div>
                    <div className={styles.xAxisLabel}>Jun</div>
                    <div className={styles.xAxisLabel}>Jul</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Performing Posts Section */}
            <div className={`${styles.topPostsContainer} ${showDetailView ? styles.verticalLayout : ''}`}>
              <div className={styles.topPostsHeader}>
                <div className={styles.topPostsTitle}>Top Performing Posts</div>
                <div className={styles.topPostsSubtitle}>
                  Based on impressions gained from july 10/2023/2025
                </div>
              </div>
              <div className={styles.postsRow}>
                {posts.map(post => (
                  <div className={styles.postBox} key={post.id}>
                    <div className={styles.postContent}>
                      <div className={styles.postLeft}>
                        <div className={styles.postLeftTitle}>{post.title}</div>
                        <img src={post.image} alt="Post" width={172} height={111} />
                      </div>
                      <div className={styles.postRight}>
                        <div className={styles.postRightTime}>{post.time}</div>
                        <div className={styles.postRightDescription}>
                          {post.description}
                        </div>
                      </div>
                    </div>
                    <div className={styles.dividerLine}></div>
                    <div className={styles.postFooter}>
                      <div className={styles.postFooterLeft}>{post.impressions}</div>
                      <div 
                        className={styles.postFooterRight}
                        onClick={() => handleViewAnalytics(post)}
                      >
                        View analytics
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Detailed View */}
          <div className={`${styles.rightContent} ${showDetailView ? styles.rightContentWithDetail : ''}`}>
            {showDetailView && selectedPost && (
              <div className={styles.detailView}>
                <button 
                  className={styles.closeButton}
                  onClick={() => setShowDetailView(false)}
                >
                  ×
                </button>
                <div className={styles.detailTitle}>Top Performing Posts</div>
                <div className={styles.detailContent}>
                  <img 
                    className={styles.detailImage}
                    src={selectedPost.image} 
                    alt="Post" 
                    width={244}
                    height={178}
                  />
                  <div className={styles.detailText}>
                    {selectedPost.description}
                  </div>
                </div>
                <div className={styles.detailStats}>
                  This post received 1,230 views and 65 engagements over the last 25 days
                </div>
                
                <div className={styles.analyticsMainText} style={{ minWidth: "270px", marginBottom: "30px", textAlign: "center" }}>
                  Engagements Last 30 Days
                </div>
                
                <div className={styles.engagementChartContainer}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '16px', marginBottom: '10px' }}>Engagement Chart</div>
                    <div style={{ 
                      width: '400px', 
                      height: '200px', 
                      backgroundColor: '#f0f0f0', 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      borderRadius: '5px' 
                    }}>
                      Chart/Graph Visualization
                    </div>
                  </div>
                </div>
                
                <div className={styles.viewPostButton}>
                  <div className={styles.viewPostText}>View Post</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;