import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const GeneralInfo = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="profile-container">
      <style jsx>{`
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
          margin-left:430px;        
          flex:1;
          height:100vh;
          overflow-y:auto;
          overflow-x: hidden;
          padding:40px 20px;
          position:relative;
          min-width: 950px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        
        .main-content h1 {
          margin-bottom: 20px;
          font-size: 24px;
          font-weight: 600;
        }

        /* Form styles */
        .form-container {
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:20px;
          width:100%;
          max-width: 700px;
          padding: 20px 0;
        }
        
        .form-group {
          display:flex;
          align-items:center;
          justify-content:space-between;
          background:#fff;
          border:2px solid #000;
          border-radius:10px;
          height:60px;
          width:100%;
          padding:0 20px;
        }
        
        .form-group span {
          font-size:18px;
          color:rgba(0,0,0,0.3);
        }
        
        .form-group img {
          height:20px;
        }
        
        .form-row {
          display:flex;
          gap:20px;
          width:100%;
        }
        
        .form-row .form-group {
          flex:1;
        }
        
        .password-container {
          display: flex;
          align-items: center;
          width: 100%;
        }
        
        .password-container input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 18px;
          color: rgba(0,0,0,0.7);
          background: transparent;
        }
        
        .save-btn {
          background-color:rgba(255,140,0,1);
          border-radius:10px;
          height:50px;
          width:100%;
          display:flex;
          justify-content:center;
          align-items:center;
          margin-top:30px;
          cursor:pointer;
          border: none;
        }
        
        .save-btn span {
          font-size:20px;
          color:#fff;
          font-weight:600;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .sidebar {
            width: 300px;
          }
          
          .main-content {
            margin-left: 300px;
            padding: 20px 10px;
          }
          
          .form-container {
            gap: 15px;
          }
          
          .form-group {
            height: 50px;
          }
          
          .form-group span {
            font-size: 16px;
          }
          
          .form-row {
            flex-direction: column;
            gap: 15px;
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

      {/* Main content - Updated form content */}
      <div className="main-content">
        <div className="form-container">
          <div className="form-group">
            <span>Choose your city or region</span>
            <img style={{ width: '20px', height: '25px' }} src="/images/drope.png" alt="Dropdown" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <span>First Name</span>
            </div>
            <div className="form-group">
              <span>Last Name</span>
            </div>
          </div>
          <div className="form-group">
            <span>Company Name</span>
          </div>
          <div className="form-group">
            <span>Company Website (Optional)</span>
          </div>
          <div className="form-group">
            <span>Email Address (Business Email Preferred)</span>
          </div>
          <div className="form-group">
            <div className="password-container">
              <input
                type={isPasswordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                style={{ fontSize: '18px', color: 'rgba(0,0,0,0.7)' }}
              />
            </div>
            <img
              onClick={togglePasswordVisibility}
              src={isPasswordVisible ? "/images/eye-slash.png" : "/images/eye.png"}
              alt="Toggle Password Visibility"
              width="27.7"
              height="22"
              style={{ cursor: 'pointer', marginLeft: '10px' }}
            />
          </div>
          <button className="save-btn">
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;