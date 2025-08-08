import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Legal = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <style>{`
        * { 
          margin:0; 
          padding:0; 
          box-sizing:border-box; 
        }
        
        body {
          font-family:'Inter', sans-serif;
          overflow:hidden;
          display:flex;
          height:100vh;
        }

        /* Sidebar */
        .sidebar {
          background-color:rgba(244,244,244,1);
          width:430px;              
          height:100vh;
          position:fixed;
          left:0; 
          top:0;
          border-right:1px solid rgba(0,0,0,0.1);
          display:flex;
          flex-direction:column;
        }
        
        .sidebar-content {
          padding:30px 20px 20px 20px;
          height:100%;
          display:flex;
          flex-direction:column;
          min-width: 0;
        }
        
        .sb-top-icon { 
          width:40px; 
          height:40px; 
        }
        
        .sb-logo {
          width:170px; 
          height:48px;
          margin:20px auto 0 auto;
          display:block;
          max-width: 100%;
        }
        
        .sb-item {
          display:flex;
          text-decoration: none;
          color: inherit;
          align-items:center;
          gap:14px;
          padding:10px;
          margin-left:40px;
          margin-top:15px;
        }
        
        .sb-item:first-of-type { 
          margin-top:25px;
        }
        
        .sb-item-icon {
          width:20px; 
          height:20px;
          flex:0 0 20px;
          display:flex; 
          align-items:center; 
          justify-content:center;
        }
        
        .sb-item-text {
          font-size:18px;
          font-weight:500;
          margin-left: 20px;
          color:rgba(25,25,25,1);
          line-height:1.1;
          white-space:nowrap;
          overflow:hidden;
          text-overflow: ellipsis;
        }
        
        .sb-item-right {
          margin-left:auto;
          display:flex; 
          align-items:center; 
          justify-content:center;
        }
        
        .sb-item-right img {
          width:38px; 
          height:35px;
          max-width: 100%;
        }
        
        .logout-btn {
          margin-top:auto;
          width:100%;
          display:flex; 
          justify-content:center; 
          align-items:center;
        }
        
        .logout-btn-inner {
          width:280px; 
          max-width: 100%;
          height:40px;
          border-radius:10px;
          background-color:rgba(255,140,0,1);
          display:flex; 
          justify-content:center; 
          align-items:center;
        }
        
        .logout-text {
          font-size:18px; 
          font-weight:600; 
          color:#fff; 
          white-space:nowrap;
          line-height:1.1;
          padding: 0 10px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Main content */
        .main-content {
          margin-left:605px;    
          margin-top: 150px;  
          flex:1;
          height:100vh;
          overflow-y:auto;
          overflow-x: hidden;
          padding:0;
          position:relative;
          min-width: 0;
        }

        /* Legal container */
        .legal-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 624px;
          margin: 20px auto;
        }

        /* Legal box */
        .legal-box {
          border-radius: 10px;
          border: 2px solid rgb(0,0,0);
          width: 624px;
          background-color: rgba(255,255,255,1);
          display: flex;
          flex-direction: column;
        }

        .legal-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 20px;
        }

        .legal-item-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .legal-item-left img {
          width: 24px;
          height: 24px;
        }

        .legal-item-left span {
          font-size: 18px;
          font-weight: 500;
          color: rgba(25, 25, 25, 1);
        }

        .legal-item-right img {
          width: 28px;
          height: 28px;
        }

        .divider {
          height: 1px;
          background-color: rgba(0,0,0,0.2);
          width: 100%;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .sidebar {
            width: 300px;
          }
          
          .main-content {
            margin-left: 300px;
          }
          
          .legal-container,
          .legal-box {
            width: 90%;
          }
          
          .legal-item-left span {
            font-size: 16px;
          }
        }
      `}</style>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-content">
          <img 
            className="sb-top-icon" 
            src="/images/back.png" 
            alt="Back"
            onClick={() => navigate(-1)}
            style={{ cursor: 'pointer' }}
          />
          <Link to="/loggedin">
            <img
              className="sb-logo" src="/images/profilelogo.png" alt="Logo"
            />
          </Link>

          <Link to="/user" className="sb-item">
            <span className="sb-item-icon">
              <img src="/images/userprofile.png" alt="Profile" />
            </span>
            <span className="sb-item-text">Profile</span>
          </Link>
          
          <Link to="/general-info" className="sb-item">
            <span className="sb-item-icon"><img src="/images/general.png" alt="General"/></span>
            <span className="sb-item-text">General Info</span>
          </Link>
          
          <Link to="/settings" className="sb-item">
            <span className="sb-item-icon"><img src="/images/settings.png" alt="Settings"/></span>
            <span className="sb-item-text">Settings</span>
          </Link>
          
          <Link to="/notifications" className="sb-item">
            <span className="sb-item-icon">
              <img src="/images/notificationn.png" alt="Notifications" />
            </span>
            <span className="sb-item-text">Notification</span>
            <span className="sb-item-right">
              <img src="/images/toggle.png" alt="Toggle" />
            </span>
          </Link>
          
          <Link to="/support" className="sb-item">
            <span className="sb-item-icon"><img src="/images/support.png" alt="Support"/></span>
            <span className="sb-item-text">Support & Help</span>
          </Link>
          
          <Link to="/legal" className="sb-item">
            <span className="sb-item-icon"><img src="/images/legal.png" alt="Legal"/></span>
            <span className="sb-item-text">Legal & Account</span>
          </Link>
          
          <Link to="" className="sb-item">
            <span className="sb-item-icon"><img src="/images/aboutt.png" alt="About"/></span>
            <span className="sb-item-text">About App</span>
          </Link>
          
          <div className="logout-btn">
            <div className="logout-btn-inner">
              <div className="logout-text">Log Out</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        <div className="legal-container">
          <div className="legal-box">
            <div className="legal-item">
              <div className="legal-item-left">
                <img src="/images/privacy.png" alt="Privacy Policy"/>
                <span>Privacy Policy</span>
              </div>
              <div className="legal-item-right">
                <img src="/images/arrow-right.png" alt="Arrow"/>
              </div>
            </div>
            <div className="divider"></div>

            <div className="legal-item">
              <div className="legal-item-left">
                <img src="/images/terms.png" alt="Terms of Use"/>
                <span>Terms of Use</span>
              </div>
              <div className="legal-item-right">
                <img src="/images/arrow-right.png" alt="Arrow"/>
              </div>
            </div>
            <div className="divider"></div>

            <div className="legal-item">
              <div className="legal-item-left">
                <img src="/images/delete.png" alt="Delete Account"/>
                <span>Delete My Account</span>
              </div>
              <div className="legal-item-right">
                <img src="/images/arrow-right.png" alt="Arrow"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;