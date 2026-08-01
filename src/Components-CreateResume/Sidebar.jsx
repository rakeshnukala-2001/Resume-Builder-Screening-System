import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

// Sidebar Assets
import dashboardIcon from "../assets/candidate/dashboard.png";
import profileIcon from "../assets/candidate/profileIcon.png";
import aiReportIcon from "../assets/candidate/ai-report.png";
import skillIconSidebar from "../assets/candidate/skill.png";
import jobsIcon from "../assets/candidate/jobs.png";
import savedIcon from "../assets/candidate/saved.png";
import messageIcon from "../assets/candidate/message.png";
import learningIcon from "../assets/candidate/learning.png";
import crownIcon from "../assets/candidate/crown.png";
import arrowIcon from "../assets/candidate/arrow.png";
import tickIcon from "../assets/candidate/tick.png";

const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handleNavClick = (tabName, routePath) => {
    if (setActiveTab) setActiveTab(tabName);
    if (setIsOpen) setIsOpen(false);

    if (routePath) {
      navigate(routePath);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="can-sidebar-mobile-overlay"
          onClick={() => setIsOpen && setIsOpen(false)}
        />
      )}

      <aside className={`can-sidebar ${isOpen ? "can-mobile-open" : ""}`}>
        <div>
          <ul className="can-menu">
            <li
              className={activeTab === "Dashboard" ? "can-active" : ""}
              onClick={() =>
                handleNavClick(
                  "Dashboard",
                  "/Resume-builder/dashboard/candidate",
                )
              }
            >
              <img src={dashboardIcon} alt="Dashboard" />
              <span>Dashboard</span>
            </li>
            <li
              className={activeTab === "Profile" ? "can-active" : ""}
              onClick={() =>
                handleNavClick(
                  "Profile",
                  "/Resume-builder/candidate/candidate/profile",
                )
              }
            >
              <img src={profileIcon} alt="Profile" />
              <span>Profile</span>
            </li>
            <li
              className={activeTab === "AI Report" ? "can-active" : ""}
              onClick={() =>
                handleNavClick(
                  "AI Report",
                  "/Resume-builder/candidate/candidate/ai-report",
                )
              }
            >
              <img src={aiReportIcon} alt="AI Report" />
              <span>AI Report</span>
            </li>
            <li
              className={activeTab === "Skill Matching" ? "can-active" : ""}
              onClick={() =>
                handleNavClick(
                  "Skill Matching",
                  "/Resume-builder/candidate/candidate/skill-matching",
                )
              }
            >
              <img src={skillIconSidebar} alt="Skill Matching" />
              <span>Skill Matching</span>
            </li>
            <li
              className={activeTab === "Job Matches" ? "can-active" : ""}
              onClick={() =>
                handleNavClick(
                  "Job Matches",
                  "/Resume-builder/candidate/candidate/job-matches",
                )
              }
            >
              <img src={jobsIcon} alt="Job Matches" />
              <span>Job Matches</span>
            </li>
            <li
              className={activeTab === "Saved Jobs" ? "can-active" : ""}
              onClick={() =>
                handleNavClick(
                  "Saved Jobs",
                  "/Resume-builder/candidate/candidate/saved-jobs",
                )
              }
            >
              <img src={savedIcon} alt="Saved Jobs" />
              <span>Saved Jobs</span>
            </li>
            <li
              className={`can-message ${activeTab === "Message" ? "can-active" : ""}`}
              onClick={() =>
                handleNavClick(
                  "Message",
                  "/Resume-builder/candidate/candidate/messages",
                )
              }
            >
              <div className="can-left">
                <img src={messageIcon} alt="Message" />
                <span>Message</span>
              </div>
              <span className="can-badge">2</span>
            </li>
            <li
              className={activeTab === "Learning Center" ? "can-active" : ""}
              onClick={() =>
                handleNavClick(
                  "Learning Center",
                  "/Resume-builder/candidate/candidate/learning-center",
                )
              }
            >
              <img src={learningIcon} alt="Learning Center" />
              <span>Learning Center</span>
            </li>
          </ul>
        </div>

        <div className="can-upgrade-card">
          <div className="can-upgrade-title">
            <img src={crownIcon} alt="Crown" />
            <span>Upgrade to Pro</span>
          </div>
          <p>Unlock Premium tools and grow your career faster</p>
          <ul className="can-features">
            <li>
              <img
                src={tickIcon}
                alt="Tick"
                className="can-feature-check-img"
              />
              <span>Advanced AI Insights</span>
            </li>
            <li>
              <img
                src={tickIcon}
                alt="Tick"
                className="can-feature-check-img"
              />
              <span>Unlimited Resumes</span>
            </li>
            <li>
              <img
                src={tickIcon}
                alt="Tick"
                className="can-feature-check-img"
              />
              <span>Priority Support</span>
            </li>
            <li>
              <img
                src={tickIcon}
                alt="Tick"
                className="can-feature-check-img"
              />
              <span>Job Match Boost</span>
            </li>
          </ul>
          <button className="can-upgrade-btn">
            Upgrade Now
            <img src={arrowIcon} alt="Arrow" />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
