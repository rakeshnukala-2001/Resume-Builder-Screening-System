import React, { useState } from "react";
import './RecruiterHeader.css';
import DashboardCards from "./DashboardCards";
import RecentCandidates from "./RecentCandidates";
import applicants from "../assets/recruiter/Applicants.png";
import scanner from "../assets/recruiter/Scanner.png";
import bookmark from "../assets/recruiter/Shorlisted.png";
import ats from "../assets/recruiter/ATS-score.png";
import hamburger from "../assets/recruiter/FiChevronDown.png";
import bellIcon from "../assets/recruiter/FiBell.png";
import mailIcon from "../assets/recruiter/FiMail.png";
import avatar from "../assets/recruiter/FiUser.png";
import searchIcon from "../assets/recruiter/SearchIcon.png";

import {
  FiMenu,
  FiSearch,
  FiBell,
  FiMail,
  FiUser,
  FiChevronDown,
} from "react-icons/fi";

const RecruiterHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleBellClick = () => {
    alert("Notifications");
  };

  const handleMailClick = () => {
    alert("Inbox");
  };

  return (
    <>
<header className="navbar">

  <div className="navbar-left">

    <button className="menu-btn" onClick={toggleSidebar}>
      <img src={hamburger} alt="Menu" className="menu-icon" />
    </button>

   <div className="search-box">
  <input
    type="text"
    placeholder="Search Candidates, resumes..."
  />

  <button className="search-btn" type="button">
    <img
      src={searchIcon}
      alt="Search"
      className="search-icon"
    />
  </button>
</div>

  </div>

  <div className="navbar-right">

    <div className="icon-wrapper" onClick={handleBellClick}>
      <img
        src={bellIcon}
        alt="Notification"
        className="nav-image"
      />
    </div>

    <div className="icon-wrapper" onClick={handleMailClick}>
      <img
        src={mailIcon}
        alt="Mail"
        className="nav-image"
      />
      <span className="notification-dot"></span>
    </div>

    <div className="profile">

      <img
        src={avatar}
        alt="Avatar"
        className="profile-avatar"
      />

      <div className="profile-info">
        <h4>Akhila</h4>
        <span>Recruiter</span>
      </div>

      <FiChevronDown className="dropdown-icon" />

    </div>

  </div>

</header>



      <div className="rd-dashboard">
        <div className="rd-header">
          <h1>Recruiter Dashboard</h1>
          <p>
            Manage candidates, screen resumes and hire the best talent with AI.
          </p>
        </div>

        <div className="rd-top-cards">
          <div className="rd-card">
            <img src={applicants} alt="Applicants" className="rd-icon" />

            <div className="rd-card-content">
              <h3>Total Applicants</h3>
              <h2>125</h2>
              <p>↑ 12% this month</p>
            </div>
          </div>

          <div className="rd-card">
            <img src={scanner} alt="Scanner" className="rd-icon" />

            <div className="rd-card-content">
              <h3>Scanned Candidates</h3>
              <h2>92</h2>
              <p>↑ 12% this month</p>
            </div>
          </div>

          <div className="rd-card">
            <img src={bookmark} alt="Shortlisted" className="rd-icon" />

            <div className="rd-card-content">
              <h3>Shortlisted</h3>
              <h2>48</h2>
              <p>↑ 12% this month</p>
            </div>
          </div>

          <div className="rd-card">
            <img src={ats} alt="ATS Score" className="rd-icon" />

            <div className="rd-card-content">
              <h3>Average ATS Score</h3>
              <h2>87%</h2>
              <p>↑ 12% this month</p>
            </div>
          </div>
        </div>

     
      </div>
    </>
  );
};

export default RecruiterHeader;