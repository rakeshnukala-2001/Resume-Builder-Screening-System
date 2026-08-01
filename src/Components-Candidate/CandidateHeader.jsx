import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CandidateHeader.css";

import FiUser from "../assets/candidate/profile.png";
import SearchIcon from "../assets/candidate/search.png";
import FiBell from "../assets/candidate/notification.png";
import settings from "../assets/candidate/settings.png";
import FiChevronDown from "../assets/candidate/dropdownarrow.png";
import logor from "../assets/candidate/logor.png";

const CandidateHeader = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate(); // Router navigation init

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
    setDropdownOpen(false);
  };

  // Settings
  const handleSettings = () => {
    alert("Settings Page Coming Soon");
    setDropdownOpen(false);
  };

  // Mobile Search Toggle
  const toggleMobileSearch = () => {
    setMobileSearchOpen((prev) => !prev);
  };

  const handleHelp = () => {
    console.log("Opening help...");
    setDropdownOpen(false);
  };

  // Exact Path Redirection on Logout
  const handleLogout = () => {
    console.log("Logging out...");
    setDropdownOpen(false);

    // Clear saved candidate session
    localStorage.clear();
    sessionStorage.clear();

    // Redirection to Candidate Login Page
    navigate("/Resume-builder/login/candidate");
  };

  return (
    <header
      className={`can-top-header ${mobileSearchOpen ? "show-mobile-search" : ""}`}
    >
      <div className="can-header-left">
        <button
          className={`can-mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <img src={logor} alt="Logo" className="can-logo-img" />

        <div className="can-title-container">
          <h3 className="can-dashboard-title-top">AI Resume Builder</h3>
          <p className="can-dashboard-subtitle">& Screening System</p>
        </div>
      </div>

      <div className="can-search-wrapper">
        <img
          src={SearchIcon}
          width={18}
          height={18}
          alt="Search"
          className="can-search-icon"
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

      <div className="can-user-profile">
        {/* Mobile search trigger */}
        <div
          className="can-header-icon can-mobile-search-trigger"
          onClick={toggleMobileSearch}
        >
          <img src={SearchIcon} width={20} height={20} alt="Search Toggle" />
        </div>

        <div className="can-header-icon" onClick={handleNotification}>
          <img src={FiBell} width={20} height={20} alt="Notifications" />
        </div>
        <div className="can-header-icon" onClick={handleSettings}>
          <img src={settings} width={20} height={20} alt="Settings" />
        </div>

        {/* User Avatar with Dropdown */}
        <div className="can-avatar-dropdown-wrapper" ref={dropdownRef}>
          <div
            className="can-avatar-wrapper"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={FiUser}
              width={32}
              height={32}
              alt="User Avatar"
              className="can-top-avatar"
            />
            <div className="can-user-info">
              <h4>Akash</h4>
              <p>candidate</p>
            </div>
            <img
              src={FiChevronDown}
              width={14}
              height={14}
              alt="Dropdown"
              className={`can-dropdown-arrow ${dropdownOpen ? "open" : ""}`}
            />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="can-user-dropdown-menu">
              <button
                className="can-dropdown-item can-help-btn"
                onClick={handleHelp}
              >
                Help
              </button>

              <div className="can-dropdown-divider"></div>

              {/* Logout Button */}
              <button
                className="can-dropdown-item can-logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Expandable mobile search bar */}
      <div className="can-search-wrapper can-mobile-search-section">
        <img
          src={SearchIcon}
          width={18}
          height={18}
          alt="Search"
          className="can-search-icon"
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
    </header>
  );
};

export default CandidateHeader;
