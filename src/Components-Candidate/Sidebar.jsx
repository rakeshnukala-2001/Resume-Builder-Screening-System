import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

import logoIcon from "../assets/sidebar/logo.png";
import dashboardIcon from "../assets/sidebar/dashboard.png";
import profileIcon from "../assets/sidebar/profile.png";
import myResumesIcon from "../assets/sidebar/resumes.png";
import resumeBuilderIcon from "../assets/sidebar/builder.png";
import templatesIcon from "../assets/sidebar/templates.png";
import aiOptimizationIcon from "../assets/sidebar/optimization.png";
import documentsIcon from "../assets/sidebar/documents.png";
import skillAnalysisIcon from "../assets/sidebar/analysis.png";
import jobMatchesIcon from "../assets/sidebar/matches.png";
import savedJobsIcon from "../assets/sidebar/saved.png";
import careerInsightsIcon from "../assets/sidebar/insights.png";
import applicationsIcon from "../assets/sidebar/applications.png";
import interviewsIcon from "../assets/sidebar/interviews.png";
import notificationsIcon from "../assets/sidebar/notifications.png";
import upgradeProIcon from "../assets/sidebar/upgrade.png";
import settingsIcon from "../assets/sidebar/settings.png";
import logoutIcon from "../assets/sidebar/logout.png";

const topMenuItems = [
  { id: "dashboard", label: "Dashboard", icon: dashboardIcon },
  { id: "profile", label: "Profile", icon: profileIcon },
  { id: "my-resumes", label: "My Resumes", icon: myResumesIcon },
];

const toolMenuItems = [
  { id: "resume-builder", label: "Resume Builder", icon: resumeBuilderIcon },
  { id: "templates", label: "Templates", icon: templatesIcon },
  { id: "ai-optimization", label: "AI Optimization", icon: aiOptimizationIcon },
  { id: "documents", label: "Documents", icon: documentsIcon },
  { id: "skill-analysis", label: "Skill Analysis", icon: skillAnalysisIcon },
  { id: "job-matches", label: "Job Matches", icon: jobMatchesIcon },
  { id: "saved-jobs", label: "Saved Jobs", icon: savedJobsIcon },
  { id: "career-insights", label: "Career Insights", icon: careerInsightsIcon },
  { id: "applications", label: "Applications", icon: applicationsIcon },
  { id: "interviews", label: "Interviews", icon: interviewsIcon },
  { id: "notifications", label: "Notifications", icon: notificationsIcon },
];

const Sidebar = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState("resume-builder");
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    setActiveItem(id);
    // Exact path structure: /Resume-builder/candidate/id
    navigate(`/Resume-builder/candidate/${id}`);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    localStorage.clear();
    sessionStorage.clear();
    navigate("/Resume-builder/login/candidate");
  };

  const renderMenuItem = (item) => (
    <li
      key={item.id}
      className={`sidebar-menu-item ${
        activeItem === item.id ? "sidebar-menu-item--active" : ""
      }`}
      onClick={() => handleItemClick(item.id)}
    >
      <img src={item.icon} alt={item.label} className="sidebar-menu-icon" />
      <span className="sidebar-menu-label">{item.label}</span>
    </li>
  );

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Logo / Header */}
      <div className="sidebar-header">
        <div className="sidebar-logo-box">
          <img src={logoIcon} alt="Logo" className="sidebar-logo-icon" />
        </div>
        <div className="sidebar-header-text">
          <h1 className="sidebar-title">AI Resume Builder</h1>
          <p className="sidebar-subtitle">&amp; Screening System</p>
        </div>
      </div>

      {/* Top menu items */}
      <ul className="sidebar-menu">{topMenuItems.map(renderMenuItem)}</ul>

      {/* AI Resume Tool section */}
      <p className="sidebar-section-label">AI Resume Tool</p>
      <ul className="sidebar-menu">{toolMenuItems.map(renderMenuItem)}</ul>

      {/* Bottom section */}
      <div className="sidebar-footer">
        <ul className="sidebar-menu">
          <li
            className="sidebar-menu-item"
            onClick={() => handleItemClick("upgrade-pro")}
          >
            <img
              src={upgradeProIcon}
              alt="Upgrade to PRO"
              className="sidebar-menu-icon"
            />
            <span className="sidebar-menu-label">Upgrade to PRO</span>
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleItemClick("settings")}
          >
            <img
              src={settingsIcon}
              alt="Settings"
              className="sidebar-menu-icon"
            />
            <span className="sidebar-menu-label">Settings</span>
          </li>
          <li
            className="sidebar-menu-item sidebar-menu-item--logout"
            onClick={handleLogout}
          >
            <img src={logoutIcon} alt="Logout" className="sidebar-menu-icon" />
            <span className="sidebar-menu-label">Logout</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
