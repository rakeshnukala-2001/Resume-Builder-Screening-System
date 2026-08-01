import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RecruiterHeader.css";
import FiUser from "../assets/recruiter/FiUser.png";
import SearchIcon from "../assets/recruiter/SearchIcon.png";
import FiBell from "../assets/recruiter/FiBell.png";
import settings from "../assets/recruiter/settings.png";
import FiChevronDown from "../assets/candidate/dropdownarrow.png";
import logor from "../assets/candidate/logor.png";

const RecruiterHeader = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  // Search
  const handleSearch = () => {
    if (search.trim() === "") {
      alert("Please enter role, skill or candidate");
      return;
    }
    alert(`Searching for: ${search}`);
  };

  // Mobile Search Toggle
  const toggleMobileSearch = () => {
    setMobileSearchOpen((prev) => !prev);
  };

  // Notification
  const handleNotification = () => {
    alert("No New Notifications");
    setDropdownOpen(false);
  };

  // Settings
  const handleSettings = () => {
    alert("Settings Page Coming Soon");
    setDropdownOpen(false);
  };

  // 3. Updated Logout Handler with Redirection
  const handleLogout = () => {
    console.log("Logging out...");
    setDropdownOpen(false);

    // Recruiter Login route redirection
    navigate("/Resume-builder/login/recruiter");
  };

  const handleHelp = () => {
    console.log("Opening help...");
    setDropdownOpen(false);
  };

  return (
    <header
      className={`rec-top-header ${mobileSearchOpen ? "show-mobile-search" : ""}`}
    >
      <div className="rec-header-left">
        <button
          className={`rec-mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Logo Image */}
        <img src={logor} alt="Logo" className="rec-logo-img" />

        {/* Title & Subtitle Container */}
        <div className="rec-title-container">
          <h3 className="rec-dashboard-title-top">AI Resume Builder</h3>
          <p className="rec-dashboard-subtitle">& Screening System</p>
        </div>
      </div>

      <div className="rec-search-wrapper">
        <img
          src={SearchIcon}
          width={18}
          height={18}
          alt="Search"
          className="rec-search-icon"
          onClick={handleSearch}
        />
        <input
          type="text"
          placeholder="Search roles, skills, or candidates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>

      <div className="rec-user-profile">
        {/* Mobile search trigger */}
        <div
          className="rec-header-icon rec-mobile-search-trigger"
          onClick={toggleMobileSearch}
        >
          <img src={SearchIcon} width={20} height={20} alt="Search Toggle" />
        </div>

        <div className="rec-header-icon" onClick={handleNotification}>
          <img src={FiBell} width={20} height={20} alt="Notifications" />
        </div>
        <div className="rec-header-icon" onClick={handleSettings}>
          <img src={settings} width={20} height={20} alt="Settings" />
        </div>

        {/* User Avatar with Dropdown */}
        <div className="rec-avatar-dropdown-wrapper" ref={dropdownRef}>
          <div
            className="rec-avatar-wrapper"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src={FiUser}
              width={32}
              height={32}
              alt="User Avatar"
              className="rec-top-avatar"
            />
            <div className="rec-user-info">
              <h4>Akash</h4>
              <p>Recruiter</p>
            </div>
            <img
              src={FiChevronDown}
              width={14}
              height={14}
              alt="Dropdown"
              className={`rec-dropdown-arrow ${dropdownOpen ? "open" : ""}`}
            />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="rec-user-dropdown-menu">
              <button
                className="rec-dropdown-item rec-help-btn"
                onClick={handleHelp}
              >
                Help
              </button>
              <div className="rec-dropdown-divider"></div>
              <button
                className="rec-dropdown-item rec-logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Expandable mobile search bar */}
      <div className="rec-search-wrapper rec-mobile-search-section">
        <img
          src={SearchIcon}
          width={18}
          height={18}
          alt="Search"
          className="rec-search-icon"
          onClick={handleSearch}
        />
        <input
          type="text"
          placeholder="Search roles, skills, or candidates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
    </header>
  );
};

export default RecruiterHeader;
