import React, { useState } from "react";
import "./Candidate-Header.css";

import LogoImg from "../assets/Candidate-Dashboard-images/logo.png";
import searchImg from "../assets/Candidate-Dashboard-images/search.png";
import notificationImg from "../assets/Candidate-Dashboard-images/notification.png";
import settingsImg from "../assets/Candidate-Dashboard-images/settings.png";
import profileImg from "../assets/Candidate-Dashboard-images/profile.png";
import arrowImg from "../assets/Candidate-Dashboard-images/dropdownarrow.png";

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [search, setSearch] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

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
    setIsDropdownOpen(false);
  };

  // Settings
  const handleSettings = () => {
    alert("Settings Page Coming Soon");
    setIsDropdownOpen(false);
  };

  // Profile Dropdown Toggle
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Mobile Search Bar Toggle
  const toggleMobileSearch = () => {
    setIsMobileSearchOpen((prev) => !prev);
  };

  // Dropdown Actions
  const handleHelpCenter = () => {
    alert("Opening Help Center...");
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    alert("Logging out...");
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className={`dashboard-navbar ${isMobileSearchOpen ? "show-mobile-search" : ""}`}
    >
      {/* Top Row / Main Bar */}
      <div className="navbar-top-row">
        {/* Left Section (Hamburger + Logo Text) */}
        <div className="navbar-left">
          <button
            className="mobile-hamburger-btn"
            onClick={() => setIsSidebarOpen && setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Logo Section */}
          <div className="header-logo desktop-logo-wrapper">
            <img src={LogoImg} alt="Logo" className="header-logo-img" />
          </div>
          <div className="header-logo-text desktop-logo-wrapper">
            <h2>AI Resume Builder</h2>
            <p>& Screening System</p>
          </div>
        </div>

        {/* Center Section (Desktop Search Bar) */}
        <div className="navbar-center desktop-search-section">
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
          {/* Search Icon */}
          <img
            src={searchImg}
            alt="Search Toggle"
            className="nav-icon mobile-search-trigger"
            onClick={toggleMobileSearch}
          />

          {/* Desktop Notification Icon (Hidden on Mobile) */}
          <img
            src={notificationImg}
            alt="Notification"
            className="nav-icon desktop-notification-icon"
            onClick={handleNotification}
          />

          {/* Desktop Settings Icon */}
          <img
            src={settingsImg}
            alt="Settings"
            className="nav-icon desktop-settings-icon"
            onClick={handleSettings}
          />

          {/* Profile Section + Dropdown */}
          <div className="profile-dropdown-wrapper">
            <div className="profile-section" onClick={toggleDropdown}>
              <img src={profileImg} alt="Profile" className="profile-img" />
              <div className="profile-info">
                <h3>Rakesh</h3>
                <p>Candidate</p>
              </div>
              <img
                src={arrowImg}
                alt="Arrow"
                className={`arrow-icon-img ${isDropdownOpen ? "open" : ""}`}
              />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="profile-dropdown-menu">
                {/* Mobile Notification Option */}
                <button
                  className="dropdown-item mobile-notification-item"
                  onClick={handleNotification}
                >
                  <img
                    src={notificationImg}
                    alt="Notification"
                    className="dropdown-item-icon"
                  />
                  Notifications
                </button>

                {/* Mobile Settings Option */}
                <button
                  className="dropdown-item mobile-settings-item"
                  onClick={handleSettings}
                >
                  <img
                    src={settingsImg}
                    alt="Settings"
                    className="dropdown-item-icon"
                  />
                  Settings
                </button>

                <button className="dropdown-item" onClick={handleHelpCenter}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  Help Center
                </button>

                <button className="dropdown-item logout" onClick={handleLogout}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Expandable Mobile Second Line Search Bar */}
      <div className="navbar-center mobile-search-section">
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
    </nav>
  );
};

export default Header;
