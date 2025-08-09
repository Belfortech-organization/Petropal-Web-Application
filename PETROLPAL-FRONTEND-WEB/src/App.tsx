import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Loggedin from './Loggedin';
import Signin from './Signin';
import Signup from './Signup';
import VerifyOTP from './VerifyOTP';
import Messages from './Messages';
import Notifications from './Notifications';
import Sellers from './Sellers';
import Profile from './Profile';
import User from './pages/UserProfile'; // Correct import for User component in pages folder
import GeneralInfo from './GeneralInfo';
import Settings from './Settings';
import Support from './Support';
import Legal from './Legal';
import Listings from './Listings';
import Industry from './Industry';
import About from './About';
import Analytics from './Analytics';
import './App.module.css';
import { ReactElement } from 'react';

const isAuthenticated = () => {
  return localStorage.getItem('accessToken') !== null;
};



const ProtectedRoute = ({ element }: { element: ReactElement }) => {
  return isAuthenticated() ? element : <Navigate to="/signin" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/about" element={<About />} />
        <Route path="/analytics" element={<ProtectedRoute element={<Analytics />} />} />
        <Route path="/loggedin" element={<ProtectedRoute element={<Loggedin />} />} />
        <Route path="/messages" element={<ProtectedRoute element={<Messages />} />} />
        <Route path="/notifications" element={<ProtectedRoute element={<Notifications />} />} />
        <Route path="/sellers" element={<ProtectedRoute element={<Sellers />} />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/user" element={<ProtectedRoute element={<User />} />} />
        <Route path="/general-info" element={<ProtectedRoute element={<GeneralInfo />} />} />
        <Route path="/settings" element={<ProtectedRoute element={<Settings />} />} />
        <Route path="/support" element={<ProtectedRoute element={<Support />} />} />
        <Route path="/legal" element={<ProtectedRoute element={<Legal />} />} />
        <Route path="/listings" element={<ProtectedRoute element={<Listings />} />} />
        <Route path="/industry" element={<ProtectedRoute element={<Industry />} />} />
      </Routes>
    </Router>
  );
}

export default App;