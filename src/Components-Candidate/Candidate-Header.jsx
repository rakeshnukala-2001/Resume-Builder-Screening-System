import { useState } from "react";
import "./Candidate-Header.css";

import LogoImg from "../assets/Candidate-Dashboard-images/logo.png";
import searchImg from "../assets/Candidate-Dashboard-images/search.png";
import notificationImg from "../assets/Candidate-Dashboard-images/notification.png";
import settingsImg from "../assets/Candidate-Dashboard-images/settings.png";
import profileImg from "../assets/Candidate-Dashboard-images/profile.png";

const Header = () => {
  const [search, setSearch] = useState("");

  // Search Validation
  const handleSearch = () => {
    if (search.trim() === "") {
      alert("Please enter role, skill or company");
      return;
    }
    alert(`Searching for: ${search}`);
  };

  // Notification
  const handleNotification = () => {
    alert("No New Notifications");
  };

  // Settings
  const handleSettings = () => {
    alert("Settings Page Coming Soon");
  };

  // Profile
  const handleProfile = () => {
    alert("Candidate Profile");
  };

  return (
    <nav className="dashboard-navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <div className="header-logo">
          <img src={LogoImg} alt="Logo" className="header-logo-img" />
        </div>
        <div className="header-logo-text">
          <h2>AI Resume Builder</h2>
          <p>& Screening System</p>
        </div>
      </div>

      {/* Center Section */}
      <div className="navbar-center">
        <div className="search-box">
          <img
            src={searchImg}
            alt="Search"
            className="search-icon"
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="Search roles, skills, or companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <img
          src={notificationImg}
          alt="Notification"
          className="nav-icon"
          onClick={handleNotification}
        />
        <img
          src={settingsImg}
          alt="Settings"
          className="nav-icon"
          onClick={handleSettings}
        />
        <div className="profile-section" onClick={handleProfile}>
          <img src={profileImg} alt="Profile" className="profile-img" />
          <div className="profile-info">
            <h3>Akash</h3>
            <p>Candidate</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
