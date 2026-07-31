import React, { useState } from "react";
import "./CandidateDashboard.css";
import aiStar from "../assets/candidate/Dashboard-images/ai-star.png";
import resumeIconAI from "../assets/candidate/Dashboard-images/resume.png";
import cover from "../assets/candidate/Dashboard-images/cover-letter.png";
import interview from "../assets/candidate/Dashboard-images/interview-prep.png";
import salary from "../assets/candidate/Dashboard-images/salary.png";
import visibilityIcon from "../assets/candidate/Dashboard-images/ProfileVisibility-visibility.png";
import notifiedIcon from "../assets/candidate/Dashboard-images/ProfileVisibility-notified.png";
import viewsIcon from "../assets/candidate/Dashboard-images/ProfileVisibility-views.png";
import matchIcon from "../assets/candidate/Dashboard-images/ProfileVisibility-match.png";
import interviewIcon from "../assets/candidate/Dashboard-images/ProfileVisibility-interview.png";
import profileFrame from "../assets/candidate/Dashboard-images/ProfileVisibility-frame.png";
import resumeIconActivity from "../assets/candidate/Dashboard-images/RecentActivity-resume.png";
import applyIcon from "../assets/candidate/Dashboard-images/RecentActivity-apply.png";
import eyeIcon from "../assets/candidate/Dashboard-images/RecentActivity-eye.png";
import jobMatchIcon from "../assets/candidate/Dashboard-images/RecentActivity-jobmatch.png";
import skillIconActivity from "../assets/candidate/Dashboard-images/RecentActivity-skill.png";
import dashboardIcon from "../assets/candidate/Dashboard-images/dashboard.png";
import profileIcon from "../assets/candidate/Dashboard-images/profileIcon.png";
import aiReportIcon from "../assets/candidate/Dashboard-images/ai-report.png";
import skillIconSidebar from "../assets/candidate/Dashboard-images/skill.png";
import jobsIcon from "../assets/candidate/Dashboard-images/jobs.png";
import savedIcon from "../assets/candidate/Dashboard-images/saved.png";
import messageIcon from "../assets/candidate/Dashboard-images/message.png";
import learningIcon from "../assets/candidate/Dashboard-images/learning.png";
import crownIcon from "../assets/candidate/Dashboard-images/crown.png";
import arrowIcon from "../assets/candidate/Dashboard-images/arrow.png";
import tickIcon from "../assets/candidate/Dashboard-images/tick.png";
import calendarIcon from "../assets/candidate/Dashboard-images/UpcomingInterview.png";
import resumeScoreImg from "../assets/recruiter/resume.png";
import profileStrengthImg from "../assets/candidate/Dashboard-images/profileIcon.png";
import skillMatchImg from "../assets/candidate/Dashboard-images/skill.png";
import interviewImg from "../assets/candidate/Dashboard-images/interview-prep.png";
import profileViewsImg from "../assets/candidate/Dashboard-images/ProfileVisibility-views.png";
import upArrowImg from "../assets/candidate/Dashboard-images/arrow.png";
import welcomeImg from "../assets/candidate/Dashboard-images/ai-star.png";
import createResumeImg from "../assets/candidate/Dashboard-images/arrow.png";
import uploadResumeImg from "../assets/candidate/Dashboard-images/arrow.png";
import CandidateHeader from "./Candidate-Header";

const CandidateDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [activeButton, setActiveButton] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sidebar Menu Items using imported icons
  const menuItems = [
    { name: "Dashboard", icon: dashboardIcon },
    { name: "Profile", icon: profileIcon },
    { name: "AI Report", icon: aiReportIcon },
    { name: "Skill Matching", icon: skillIconSidebar },
    { name: "Job Matches", icon: jobsIcon },
    { name: "Saved Jobs", icon: savedIcon },
    { name: "Message", icon: messageIcon, badge: 2 },
    { name: "Learning Center", icon: learningIcon },
  ];

  // Stat Cards Data
  const statCards = [
    {
      id: 1,
      title: "Resume Score (ATS)",
      score: "94%",
      rating: "Excellent",
      trend: "18% vs last week",
      color: "#2563eb",
      icon: resumeScoreImg,
    },
    {
      id: 2,
      title: "Profile Strength",
      score: "85%",
      rating: "Strong",
      trend: "10% vs last week",
      color: "#16a34a",
      icon: profileStrengthImg,
    },
    {
      id: 3,
      title: "Skill Match Score",
      score: "87%",
      rating: "Great Match",
      trend: "14% vs last week",
      color: "#d97706",
      icon: skillMatchImg,
    },
    {
      id: 4,
      title: "Interviews",
      score: "3",
      rating: "This Month",
      trend: "2 vs last week",
      color: "#2563eb",
      icon: interviewImg,
    },
    {
      id: 5,
      title: "Profile Views",
      score: "22",
      rating: "This Month",
      trend: "21 vs last week",
      color: "#dc2626",
      icon: profileViewsImg,
    },
  ];

  const atsBreakdown = [
    { label: "Format & Structure", value: "95%", color: "#0d9488" },
    { label: "Keywords", value: "97%", color: "#ca8a04" },
    { label: "Skills & Match", value: "94%", color: "#dc2626" },
    { label: "Experience", value: "98%", color: "#06b6d4" },
    { label: "Education", value: "92%", color: "#9333ea" },
    { label: "Readability", value: "91%", color: "#db2777" },
  ];

  const skillsData = [
    { name: "Product management", value: 90 },
    { name: "SQL", value: 85 },
    { name: "Data Analysis", value: 80 },
    { name: "Project Planning", value: 70 },
  ];

  const assistantTools = [
    {
      title: "Resume Review",
      desc: "Resume Enhancement Hub",
      icon: resumeIconAI,
    },
    {
      title: "Cover Letter Generator",
      desc: "Create tailored cover letters in seconds.",
      icon: cover,
    },
    {
      title: "Interview Prep",
      desc: "AI-powered interview practice.",
      icon: interview,
    },
    {
      title: "Salary Insights",
      desc: "Know your worth and market trends.",
      icon: salary,
    },
  ];

  const recentActivities = [
    {
      title: "Resume Optimized",
      sub: "AI optimization completed",
      time: "10:45Am",
      icon: resumeIconActivity,
    },
    {
      title: "Applied for product manager",
      sub: "Google India",
      time: "10:00Am",
      icon: applyIcon,
    },
    {
      title: "Profile Viewed",
      sub: "By Amazon Recruiter",
      time: "14:30PM",
      icon: eyeIcon,
    },
    {
      title: "New Job match found",
      sub: "3 new jobs match your profile",
      time: "Yesterday",
      icon: jobMatchIcon,
    },
    {
      title: "Skill assessment completed",
      sub: "Data Analysis- Advanced",
      time: "July 10",
      icon: skillIconActivity,
    },
  ];

  const upcomingInterviews = [
    {
      month: "May",
      day: "17",
      title: "GD Round",
      company: "Microsoft",
      time: "11:00",
    },
    {
      month: "May",
      day: "20",
      title: "HR Round",
      company: "Paypal",
      time: "14:00",
    },
    {
      month: "May",
      day: "11",
      title: "Aptitude Test",
      company: "Flipkart",
      time: "10:00",
    },
    {
      month: "May",
      day: "13",
      title: "HR Round",
      company: "Zoho",
      time: "15:00",
    },
  ];

  return (
    <div className="cand-dashboard-layout">
      <CandidateHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="cand-main-layout-wrapper">
        <div
          className={`cand-sidebar-backdrop ${mobileMenuOpen ? "cand-sidebar-open" : ""}`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <aside
          className={`cand-sidebar ${mobileMenuOpen ? "cand-sidebar-open" : ""}`}
        >
          <ul className="cand-menu">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className={activeMenu === item.name ? "cand-active" : ""}
                onClick={() => setActiveMenu(item.name)}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="cand-nav-icon"
                />
                <span className="cand-menu-text">{item.name}</span>
                {item.badge && <span className="cand-badge">{item.badge}</span>}
              </li>
            ))}
          </ul>

          <div className="cand-upgrade-card">
            <div className="cand-upgrade-title">
              <img src={crownIcon} alt="Crown" />
              <span>Upgrade to Pro</span>
            </div>
            <p>Unlock Premium tools and grow your career faster</p>
            <ul className="cand-features">
              <li>
                <img
                  src={tickIcon}
                  alt="Check"
                  className="cand-feature-check-img"
                />{" "}
                Advanced AI Insights
              </li>
              <li>
                <img
                  src={tickIcon}
                  alt="Check"
                  className="cand-feature-check-img"
                />{" "}
                Unlimited Resumes
              </li>
              <li>
                <img
                  src={tickIcon}
                  alt="Check"
                  className="cand-feature-check-img"
                />{" "}
                Priority Support
              </li>
              <li>
                <img
                  src={tickIcon}
                  alt="Check"
                  className="cand-feature-check-img"
                />{" "}
                Job Match Boost
              </li>
            </ul>
            <button className="cand-upgrade-btn">
              Upgrade Now
              <img src={arrowIcon} alt="Arrow" />
            </button>
          </div>
        </aside>

        {/* Dashboard Content Area */}
        <main className="cand-dashboard-main">
          <div className="cand-scrollable-body">
            {/* Welcome Banner */}
            <div className="cand-welcome-container">
              <div className="cand-welcome-left">
                <div className="cand-welcome-heading">
                  <h1>Welcome back, Akash!</h1>
                  <img
                    src={welcomeImg}
                    alt="Wave"
                    className="cand-welcome-img"
                  />
                </div>
                <p>Let's continue your journey towards your dream career.</p>
              </div>
              <div className="cand-welcome-right">
                <button
                  className={`cand-action-btn ${
                    activeButton === "create"
                      ? "cand-active-highlight"
                      : "cand-inactive-btn"
                  }`}
                  onClick={() => setActiveButton("create")}
                >
                  <div className="cand-btn-content-left">
                    <span>+ Create Resume</span>
                  </div>
                  <img
                    src={createResumeImg}
                    alt="Dropdown"
                    className="cand-btn-inner-img"
                  />
                </button>

                <button
                  className={`cand-action-btn ${
                    activeButton === "upload"
                      ? "cand-active-highlight"
                      : "cand-inactive-btn"
                  }`}
                  onClick={() => setActiveButton("upload")}
                >
                  <div className="cand-btn-content-left">
                    <span>+ Upload Resume</span>
                  </div>
                  <img
                    src={uploadResumeImg}
                    alt="Dropdown"
                    className="cand-btn-inner-img"
                  />
                </button>
              </div>
            </div>

            {/* Stat Cards */}
            <div className="cand-dashboard-cards">
              {statCards.map((card) => (
                <div key={card.id} className="cand-dashboard-card">
                  <div className="cand-card-header">
                    <div
                      className="cand-card-img-wrapper"
                      style={{ backgroundColor: `${card.color}15` }}
                    >
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="cand-card-top-icon"
                      />
                    </div>
                    <h3>{card.title}</h3>
                  </div>
                  <h2 style={{ color: card.color }}>{card.score}</h2>
                  <h4 style={{ color: card.color }}>{card.rating}</h4>
                  <div className="cand-card-growth-trend">
                    <img
                      src={upArrowImg}
                      alt="Up"
                      className="cand-trend-arrow-img"
                    />
                    <span>{card.trend}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 1 Grid */}
            <div className="cand-dashboard-row-one">
              {/* ATS Gauge Card */}
              <div className="cand-ats-card">
                <h2 className="cand-ats-title">ATS Score Breakdown</h2>
                <div className="cand-ats-content">
                  <div
                    className="cand-gauge-wrapper"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <svg className="cand-gauge" viewBox="0 0 100 100">
                      <circle
                        className="cand-gauge-bg"
                        cx="50"
                        cy="50"
                        r="40"
                      />
                      <circle
                        className="cand-gauge-progress"
                        cx="50"
                        cy="50"
                        r="40"
                      />
                    </svg>
                    <div className="cand-gauge-text">
                      <h1>94%</h1>
                      <span style={{ color: "#16a34a", fontWeight: 600 }}>
                        Excellent
                      </span>
                    </div>
                  </div>

                  <div className="cand-score-list">
                    {atsBreakdown.map((item, index) => (
                      <div className="cand-score-item" key={index}>
                        <div className="cand-score-left">
                          <span
                            className="cand-dot"
                            style={{ backgroundColor: item.color }}
                          ></span>
                          <span>{item.label}</span>
                        </div>
                        <strong>{item.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skill Analysis Card */}
              <div className="cand-skill-card">
                <h2>Skill Analysis</h2>
                {skillsData.map((skill, idx) => (
                  <div className="cand-skill-box" key={idx}>
                    <div className="cand-skill-title">
                      <span>{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="cand-progress-bar">
                      <div
                        className="cand-progress-fill"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Assistant Card */}
              <div className="cand-assistant-card">
                <div className="cand-assistant-header">
                  <img src={aiStar} alt="AI Sparkle" />
                  <div>
                    <h2>AI Career Assistant</h2>
                    <p>Navigate your career with AI.</p>
                  </div>
                </div>
                {assistantTools.map((tool, index) => (
                  <div className="cand-assistant-item" key={index}>
                    <img
                      src={tool.icon}
                      alt={tool.title}
                      className="cand-assistant-icon"
                    />
                    <div>
                      <h4>{tool.title}</h4>
                      <p>{tool.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 Grid */}
            <div className="cand-dashboard-row-two">
              {/* Activity Log */}
              <div className="cand-recent-activity-card">
                <h3 className="cand-recent-activity-title">Recent Activity</h3>
                <div className="cand-recent-activity-list">
                  {recentActivities.map((act, index) => (
                    <div key={index} className="cand-recent-activity-item">
                      <div className="cand-recent-activity-left">
                        <div className="cand-recent-activity-icon">
                          <img src={act.icon} alt="Activity" />
                        </div>
                        <div className="cand-recent-activity-content">
                          <h4>{act.title}</h4>
                          <p>{act.sub}</p>
                        </div>
                      </div>
                      <span className="cand-recent-activity-time">
                        {act.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Interviews */}
              <div className="cand-upcoming-card">
                <h3 className="cand-upcoming-title">Upcoming Interviews</h3>
                <div className="cand-upcoming-list">
                  {upcomingInterviews.map((item, index) => (
                    <div key={index} className="cand-interview-item">
                      <div className="cand-date-box">
                        <span className="cand-month">{item.month}</span>
                        <span className="cand-day">{item.day}</span>
                      </div>
                      <div className="cand-interview-details">
                        <h4>{item.title}</h4>
                        <p>{item.company}</p>
                      </div>
                      <div className="cand-interview-time">
                        <span>{item.time}</span>
                        <img
                          src={calendarIcon}
                          alt="Calendar"
                          className="cand-calendar-icon"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Profile Visibility Card */}
              <div className="cand-profile-card">
                <h3 className="cand-profile-title">Profile Visibility</h3>
                <p className="cand-profile-subtitle">
                  Your profile is <strong>70%</strong> visible to recruiters
                </p>

                <div
                  className="cand-progress-bar"
                  style={{ marginBottom: "16px" }}
                >
                  <div
                    className="cand-progress-fill"
                    style={{ width: "70%" }}
                  ></div>
                </div>

                <div className="cand-profile-stats">
                  <div className="cand-stat-box">
                    <img
                      src={visibilityIcon}
                      alt="Eye"
                      className="cand-stat-icon"
                    />
                    <h4>70%</h4>
                    <p>Visibility</p>
                  </div>
                  <div className="cand-divider"></div>
                  <div className="cand-stat-box">
                    <img
                      src={notifiedIcon}
                      alt="Rocket"
                      className="cand-stat-icon"
                    />
                    <h4>2.5X</h4>
                    <p>Most likely to get noticed</p>
                  </div>
                  <div className="cand-divider"></div>
                  <div className="cand-stat-box">
                    <img
                      src={viewsIcon}
                      alt="Views"
                      className="cand-stat-icon"
                    />
                    <h4>12</h4>
                    <p>Profile Views in last 7 days</p>
                  </div>
                </div>

                <h4 className="cand-why-title">
                  Why profile completion matters?
                </h4>
                <div className="cand-benefit-item">
                  <img
                    src={matchIcon}
                    alt="Matches"
                    className="cand-benefit-icon"
                  />
                  <div>
                    <h5>Better job matches</h5>
                    <p>Get matched with your ideal job.</p>
                  </div>
                </div>
                <div className="cand-benefit-item">
                  <img
                    src={interviewIcon}
                    alt="Target"
                    className="cand-benefit-icon"
                  />
                  <div>
                    <h5>More interview opportunities.</h5>
                    <p>Complete profile to get callbacks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="cand-popup-overlay">
          <div className="cand-popup">
            <button
              className="cand-close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <h2>ATS Breakdown Details</h2>
            <div className="cand-popup-score">94%</div>
            <p className="cand-status">Excellent Rating</p>
            <button
              className="cand-popup-button"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateDashboard;
