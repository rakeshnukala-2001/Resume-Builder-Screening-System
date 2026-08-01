import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Navigation hook import
import CandidateHeader from "./CandidateHeader";
import CandidateProfile from "./CandidateProfile";
import "./CandidateDashboard.css";
import aiStar from "../assets/candidate/ai-star.png";
import resumeIconAI from "../assets/candidate/resume.png";
import cover from "../assets/candidate/cover-letter.png";
import interview from "../assets/candidate/interview-prep.png";
import salary from "../assets/candidate/salary.png";
import visibilityIcon from "../assets/candidate/ProfileVisibility-visibility.png";
import notifiedIcon from "../assets/candidate/ProfileVisibility-notified.png";
import viewsIcon from "../assets/candidate/ProfileVisibility-views.png";
import matchIcon from "../assets/candidate/ProfileVisibility-match.png";
import interviewIcon from "../assets/candidate/ProfileVisibility-interview.png";
import profileFrame from "../assets/candidate/ProfileVisibility-frame.png";
import resumeIconActivity from "../assets/candidate/RecentActivity-resume.png";
import applyIcon from "../assets/candidate/RecentActivity-apply.png";
import eyeIcon from "../assets/candidate/RecentActivity-eye.png";
import jobMatchIcon from "../assets/candidate/RecentActivity-jobmatch.png";
import skillIconActivity from "../assets/candidate/RecentActivity-skill.png";
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
import calendarIcon from "../assets/candidate/UpcomingInterview.png";
import resumeScoreImg from "../assets/candidate/resume-score.png";
import profileStrengthImg from "../assets/candidate/profileIcon.png";
import skillMatchImg from "../assets/candidate/skill.png";
import interviewImg from "../assets/candidate/interview-prep.png";
import profileViewsImg from "../assets/candidate/ProfileVisibility-views.png";
import upArrowImg from "../assets/candidate/up-arrow.png";
import welcomeImg from "../assets/candidate/ai-star.png";
import createResumeImg from "../assets/candidate/arrow.png";
import uploadResumeImg from "../assets/candidate/arrow.png";

/* ===========================================
   Data Arrays
=========================================== */
const assistantData = [
  {
    icon: resumeIconAI,
    title: "Resume Review",
    subtitle: "Resume Enhancement Hub",
  },
  {
    icon: cover,
    title: "Cover Letter Generator",
    subtitle: "Create tailored cover letters in seconds.",
  },
  {
    icon: interview,
    title: "Interview Prep",
    subtitle: "AI-powered interview practice.",
  },
  {
    icon: salary,
    title: "Salary Insights",
    subtitle: "Know your worth and market trends.",
  },
];

const scoreData = [
  { label: "Format & Structure", value: "95%", color: "#06B6D4" },
  { label: "Keywords", value: "97%", color: "#FACC15" },
  { label: "Skills & Match", value: "94%", color: "#EF4444" },
  { label: "Experience", value: "98%", color: "#22C55E" },
  { label: "Education", value: "92%", color: "#8B5CF6" },
  { label: "Readability", value: "91%", color: "#EC4899" },
];

const activitiesData = [
  {
    id: 1,
    icon: resumeIconActivity,
    title: "Resume Optimized",
    subtitle: "AI optimization completed",
    time: "10:45 AM",
  },
  {
    id: 2,
    icon: applyIcon,
    title: "Applied for Product Manager",
    subtitle: "Google India",
    time: "10:00 AM",
  },
  {
    id: 3,
    icon: eyeIcon,
    title: "Profile Viewed",
    subtitle: "By Amazon Recruiter",
    time: "14:30 PM",
  },
  {
    id: 4,
    icon: jobMatchIcon,
    title: "New Job Match Found",
    subtitle: "3 new jobs match your profile",
    time: "Yesterday",
  },
  {
    id: 5,
    icon: skillIconActivity,
    title: "Skill Assessment Completed",
    subtitle: "Data Analysis - Advanced",
    time: "July 10",
  },
];

const skillsData = [
  { name: "Product Management", percent: 90 },
  { name: "SQL", percent: 85 },
  { name: "Data Analysis", percent: 80 },
  { name: "Project Planning", percent: 70 },
];

const interviewsData = [
  {
    id: 1,
    month: "May",
    day: "17",
    title: "GD Round",
    company: "Microsoft",
    time: "11:00",
  },
  {
    id: 2,
    month: "May",
    day: "20",
    title: "HR Round",
    company: "Paypal",
    time: "14:00",
  },
  {
    id: 3,
    month: "May",
    day: "11",
    title: "Aptitude Test",
    company: "Flipkart",
    time: "10:00",
  },
  {
    id: 4,
    month: "May",
    day: "13",
    title: "HR Round",
    company: "Zoho",
    time: "15:00",
  },
];

/* ===========================================
   CandidateDashboard Component
=========================================== */
const CandidateDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [activeButton, setActiveButton] = useState("create");
  const [showPopup, setShowPopup] = useState(false);

  // Sidebar Mobile Toggle State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate(); // Navigation init

  // Navigation Click Handler
  const handleNavClick = (tabName) => {
    setActiveTab(tabName);
    setIsSidebarOpen(false);
  };

  // Create Resume Redirect Handler
  const handleCreateResume = () => {
    setActiveButton("create");
    navigate("/Resume-builder/candidate/candidate/personalinfo");
  };

  const handleUploadResume = () => {
    setActiveButton("upload");
    setResumeUploaded(true);
    setTimeout(() => {
      alert("Resume Uploaded Successfully");
    }, 100);
  };

  const dashboardCards = [
    {
      id: "create",
      image: resumeScoreImg,
      title: "Resume Score (ATS)",
      value: "94%",
      status: "Excellent",
      percentage: "18%",
      timeline: "vs last week",
      valColor: "#2563eb",
      statusColor: "#16a34a",
      hasGrowth: true,
    },
    {
      id: "none_strength",
      image: profileStrengthImg,
      title: "Profile Strength",
      value: "85%",
      status: "Strong",
      percentage: "10%",
      timeline: "vs last week",
      valColor: "#16a34a",
      statusColor: "#16a34a",
      hasGrowth: true,
    },
    {
      id: "none_skill",
      image: skillMatchImg,
      title: "Skill Match Score",
      value: "87%",
      status: "Great Match",
      percentage: "14%",
      timeline: "vs last week",
      valColor: "#b45309",
      statusColor: "#16a34a",
      hasGrowth: true,
    },
    {
      id: "none_interview",
      image: interviewImg,
      title: "Interviews",
      value: "3",
      status: "This Month",
      percentage: "2",
      timeline: "vs last week",
      valColor: "#2563eb",
      statusColor: "#0f172a",
      hasGrowth: true,
    },
    {
      id: "upload",
      image: profileViewsImg,
      title: "Profile Views",
      value: "22",
      status: "This Month",
      percentage: "21%",
      timeline: "vs last week",
      valColor: "#2563eb",
      statusColor: "#0f172a",
      hasGrowth: true,
    },
  ];

  // Render logic based on active tab
  const renderMainContent = () => {
    if (activeTab === "Profile") {
      return <CandidateProfile />;
    }

    if (activeTab === "Dashboard") {
      return (
        <>
          <section id="can-dashboard-sec" className="can-dashboard-header">
            <div className="can-welcome-container">
              <div className="can-welcome-left">
                <div className="can-welcome-heading">
                  <h1>Welcome back, Akash!</h1>
                  <img
                    src={welcomeImg}
                    alt="Welcome"
                    className="can-welcome-img"
                  />
                </div>
                <p>Let's continue your journey towards your dream career.</p>
              </div>

              <div className="can-welcome-right">
                <button
                  className={`can-action-btn ${
                    activeButton === "create"
                      ? "can-active-highlight"
                      : "can-inactive-btn"
                  }`}
                  onClick={handleCreateResume}
                >
                  <div className="can-btn-content-left">
                    <span className="can-plus-symbol">+</span>
                    <span>Create Resume</span>
                  </div>
                  <img
                    src={createResumeImg}
                    alt="Chevron"
                    className={`can-btn-inner-img ${
                      activeButton === "create"
                        ? "can-img-white"
                        : "can-img-blue-arrow"
                    }`}
                  />
                </button>

                <button
                  className={`can-action-btn ${
                    activeButton === "upload"
                      ? "can-active-highlight"
                      : "can-inactive-btn"
                  }`}
                  onClick={handleUploadResume}
                >
                  <div className="can-btn-content-left">
                    <span className="can-plus-symbol">+</span>
                    <span>
                      {resumeUploaded ? "Resume Uploaded" : "Upload Resume"}
                    </span>
                  </div>
                  <img
                    src={uploadResumeImg}
                    alt="Chevron"
                    className={`can-btn-inner-img ${
                      activeButton === "upload"
                        ? "can-img-white"
                        : "can-img-blue-arrow"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="can-dashboard-cards">
              {dashboardCards.map((card, index) => {
                const isImageBlueActive = activeButton === card.id;

                return (
                  <div key={index} className="can-dashboard-card">
                    <div className="can-card-header">
                      <div
                        className="can-card-img-wrapper"
                        style={{ backgroundColor: `${card.valColor}15` }}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className={`can-card-top-icon ${
                            isImageBlueActive ? "can-card-img-active-blue" : ""
                          }`}
                        />
                      </div>
                      <h3>{card.title}</h3>
                    </div>

                    <h2 style={{ color: card.valColor }}>{card.value}</h2>
                    <h4 style={{ color: card.statusColor }}>{card.status}</h4>

                    <div className="can-card-growth-trend">
                      {card.hasGrowth && (
                        <img
                          src={upArrowImg}
                          alt="Up"
                          className="can-trend-arrow-img"
                        />
                      )}
                      <span className="can-trend-percentage">
                        {card.percentage}
                      </span>
                      <span className="can-trend-timeline">
                        {card.timeline}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Inner Content */}
          <div className="can-dashboard-content">
            <div className="can-dashboard-row-one">
              {/* ATS Score */}
              <div id="can-report-sec" className="can-ats-wrapper">
                <div className="can-ats-card">
                  <h2 className="can-ats-title">ATS Score Breakdown</h2>
                  <div className="can-ats-content">
                    <div className="can-gauge-wrapper">
                      <svg className="can-gauge" viewBox="0 0 240 150">
                        <path
                          d="M30 120 A90 90 0 0 1 210 120"
                          className="can-gauge-bg"
                          pathLength="100"
                        />
                        <path
                          d="M30 120 A90 90 0 0 1 210 120"
                          className="can-gauge-progress"
                          pathLength="100"
                        />
                      </svg>

                      <div
                        className="can-gauge-text"
                        onClick={() => setShowPopup(true)}
                      >
                        <h1>94%</h1>
                        <span>Excellent</span>
                      </div>
                    </div>

                    <div className="can-score-list">
                      {scoreData.map((item) => (
                        <div className="can-score-item" key={item.label}>
                          <div className="can-score-left">
                            <span
                              className="can-dot"
                              style={{ background: item.color }}
                            />
                            <span>{item.label}</span>
                          </div>
                          <strong>{item.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {showPopup && (
                  <div className="can-popup-overlay">
                    <div className="can-popup">
                      <button
                        className="can-close-btn"
                        onClick={() => setShowPopup(false)}
                      >
                        ×
                      </button>
                      <h2>ATS Score Breakdown</h2>
                      <div className="can-popup-score">94%</div>
                      <p className="can-status">Excellent</p>
                      <div className="can-popup-list">
                        {scoreData.map((item) => (
                          <div className="can-popup-item" key={item.label}>
                            <div className="can-popup-left">
                              <span
                                className="can-dot"
                                style={{ background: item.color }}
                              />
                              <span>{item.label}</span>
                            </div>
                            <strong>{item.value}</strong>
                          </div>
                        ))}
                      </div>
                      <button
                        className="can-popup-button"
                        onClick={() => setShowPopup(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Skill Analysis */}
              <div id="can-skill-sec" className="can-skill-analysis-wrapper">
                <div className="can-skill-card">
                  <h2>Skill Analysis</h2>
                  {skillsData.map((skill) => (
                    <div className="can-skill-box" key={skill.name}>
                      <div className="can-skill-title">
                        <span>{skill.name}</span>
                        <span>{skill.percent}%</span>
                      </div>
                      <div className="can-progress-bar">
                        <div
                          className="can-progress-fill"
                          style={{ width: `${skill.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Assistant */}
              <div id="can-learning-sec" className="can-ai-assistant-wrapper">
                <div className="can-assistant-card">
                  <div className="can-assistant-header">
                    <img src={aiStar} alt="AI Star" />
                    <div>
                      <h2>AI Career Assistant</h2>
                      <p>Navigate your career with AI.</p>
                    </div>
                  </div>
                  {assistantData.map((item, index) => (
                    <div className="can-assistant-item" key={index}>
                      <img
                        src={item.icon}
                        alt=""
                        className="can-assistant-icon"
                      />
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="can-dashboard-row-two">
              {/* Recent Activity */}
              <div id="can-message-sec" className="can-recent-activity-wrapper">
                <div className="can-recent-activity-card">
                  <h3 className="can-recent-activity-title">Recent Activity</h3>
                  <div className="can-recent-activity-list">
                    {activitiesData.map((activity) => (
                      <div
                        className="can-recent-activity-item"
                        key={activity.id}
                      >
                        <div className="can-recent-activity-left">
                          <div className="can-recent-activity-icon">
                            <img src={activity.icon} alt={activity.title} />
                          </div>
                          <div className="can-recent-activity-content">
                            <h4>{activity.title}</h4>
                            <p>{activity.subtitle}</p>
                          </div>
                        </div>
                        <span className="can-recent-activity-time">
                          {activity.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Upcoming Interviews */}
              <div
                id="can-jobs-sec"
                className="can-upcoming-interviews-wrapper"
              >
                <div className="can-upcoming-card">
                  <h3 className="can-upcoming-title">Upcoming Interviews</h3>
                  <div className="can-upcoming-list">
                    {interviewsData.map((item) => (
                      <div className="can-interview-item" key={item.id}>
                        <div className="can-date-box">
                          <span className="can-month">{item.month}</span>
                          <span className="can-day">{item.day}</span>
                        </div>
                        <div className="can-interview-details">
                          <h4>{item.title}</h4>
                          <p>{item.company}</p>
                        </div>
                        <div className="can-interview-time">
                          <span>{item.time}</span>
                          <img
                            src={calendarIcon}
                            alt="Calendar"
                            className="can-calendar-icon"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Profile Visibility */}
              <div
                id="can-profile-sec"
                className="can-profile-visibility-wrapper"
              >
                <div id="can-saved-sec" className="can-profile-card">
                  <h3 className="can-profile-title">Profile Visibility</h3>
                  <p className="can-profile-subtitle">
                    Your profile is <strong>70%</strong> visible to recruiters
                  </p>
                  <img
                    src={profileFrame}
                    alt="Profile Frame"
                    className="can-profile-frame"
                  />
                  <div className="can-profile-stats">
                    <div className="can-stat-box">
                      <img
                        src={visibilityIcon}
                        alt="visibility"
                        className="can-stat-icon"
                      />
                      <h4>70%</h4>
                      <p>Visibility</p>
                    </div>
                    <div className="can-divider"></div>
                    <div className="can-stat-box">
                      <img
                        src={notifiedIcon}
                        alt="notified"
                        className="can-stat-icon"
                      />
                      <h4>2.5X</h4>
                      <p>Most likely to get noticed</p>
                    </div>
                    <div className="can-divider"></div>
                    <div className="can-stat-box">
                      <img
                        src={viewsIcon}
                        alt="views"
                        className="can-stat-icon"
                      />
                      <h4>12</h4>
                      <p>Profile Views in last 7 days</p>
                    </div>
                  </div>

                  <h4 className="can-why-title">
                    Why profile completion matters?
                  </h4>
                  <div className="can-benefit-item">
                    <img
                      src={matchIcon}
                      alt="match"
                      className="can-benefit-icon"
                    />
                    <div className="can-benefit-item-content">
                      <h5>Better job matches</h5>
                      <p>Get matched with your ideal job.</p>
                    </div>
                  </div>
                  <div className="can-benefit-item">
                    <img
                      src={interviewIcon}
                      alt="interview"
                      className="can-benefit-icon"
                    />
                    <div className="can-benefit-item-content">
                      <h5>More interview opportunities</h5>
                      <p>Complete profile to get callbacks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

    // Default: Empty White Section for pages without content yet
    return <div className="can-empty-content" />;
  };

  return (
    <div className="can-dashboard-page-wrapper">
      {/* Dynamic Header Component */}
      <CandidateHeader
        mobileMenuOpen={isSidebarOpen}
        setMobileMenuOpen={setIsSidebarOpen}
      />

      <div className="can-dashboard-layout">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="can-sidebar-mobile-overlay"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`can-sidebar ${isSidebarOpen ? "can-mobile-open" : ""}`}
        >
          <div>
            <ul className="can-menu">
              <li
                className={activeTab === "Dashboard" ? "can-active" : ""}
                onClick={() => handleNavClick("Dashboard")}
              >
                <img src={dashboardIcon} alt="Dashboard" />
                <span>Dashboard</span>
              </li>
              <li
                className={activeTab === "Profile" ? "can-active" : ""}
                onClick={() => handleNavClick("Profile")}
              >
                <img src={profileIcon} alt="Profile" />
                <span>Profile</span>
              </li>
              <li
                className={activeTab === "AI Report" ? "can-active" : ""}
                onClick={() => handleNavClick("AI Report")}
              >
                <img src={aiReportIcon} alt="AI Report" />
                <span>AI Report</span>
              </li>
              <li
                className={activeTab === "Skill Matching" ? "can-active" : ""}
                onClick={() => handleNavClick("Skill Matching")}
              >
                <img src={skillIconSidebar} alt="Skill Matching" />
                <span>Skill Matching</span>
              </li>
              <li
                className={activeTab === "Job Matches" ? "can-active" : ""}
                onClick={() => handleNavClick("Job Matches")}
              >
                <img src={jobsIcon} alt="Job Matches" />
                <span>Job Matches</span>
              </li>
              <li
                className={activeTab === "Saved Jobs" ? "can-active" : ""}
                onClick={() => handleNavClick("Saved Jobs")}
              >
                <img src={savedIcon} alt="Saved Jobs" />
                <span>Saved Jobs</span>
              </li>
              <li
                className={`can-message ${activeTab === "Message" ? "can-active" : ""}`}
                onClick={() => handleNavClick("Message")}
              >
                <div className="can-left">
                  <img src={messageIcon} alt="Message" />
                  <span>Message</span>
                </div>
                <span className="can-badge">2</span>
              </li>
              <li
                className={activeTab === "Learning Center" ? "can-active" : ""}
                onClick={() => handleNavClick("Learning Center")}
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

        {/* Main Section Dynamic Render */}
        <main className="can-dashboard-main">{renderMainContent()}</main>
      </div>
    </div>
  );
};

export default CandidateDashboard;
