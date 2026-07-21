import React, { useState } from "react";
import "./CandidateDashboard.css";

/* ===========================================
   Image Imports (Merged from all components)
=========================================== */
// AICareerAssistant Images
import aiStar from "../assets/Candidate-Dashboard-images/ai-star.png";
import resumeIconAI from "../assets/Candidate-Dashboard-images/resume.png";
import cover from "../assets/Candidate-Dashboard-images/cover-letter.png";
import interview from "../assets/Candidate-Dashboard-images/interview-prep.png";
import salary from "../assets/Candidate-Dashboard-images/salary.png";

// Header Images
import welcomeImg from "../assets/Candidate-Dashboard-images/welcome-hand.png";
import createResumeImg from "../assets/Candidate-Dashboard-images/create-resume.png";
import uploadResumeImg from "../assets/Candidate-Dashboard-images/upload-resume.png";
import upArrowImg from "../assets/Candidate-Dashboard-images/up-arrow.png";
import resumeScoreImg from "../assets/Candidate-Dashboard-images/resume-score.png";
import profileStrengthImg from "../assets/Candidate-Dashboard-images/profile-strength.png";
import skillMatchImg from "../assets/Candidate-Dashboard-images/skill-match.png";
import interviewImg from "../assets/Candidate-Dashboard-images/interview.png";
import profileViewsImg from "../assets/Candidate-Dashboard-images/profile-views.png";

// ProfileVisibility Images
import visibilityIcon from "../assets/Candidate-Dashboard-images/ProfileVisibility-visibility.png";
import notifiedIcon from "../assets/Candidate-Dashboard-images/ProfileVisibility-notified.png";
import viewsIcon from "../assets/Candidate-Dashboard-images/ProfileVisibility-views.png";
import matchIcon from "../assets/Candidate-Dashboard-images/ProfileVisibility-match.png";
import interviewIcon from "../assets/Candidate-Dashboard-images/ProfileVisibility-interview.png";
import profileFrame from "../assets/Candidate-Dashboard-images/ProfileVisibility-frame.png";

// RecentActivity Images
import resumeIconActivity from "../assets/Candidate-Dashboard-images/RecentActivity-resume.png";
import applyIcon from "../assets/Candidate-Dashboard-images/RecentActivity-apply.png";
import eyeIcon from "../assets/Candidate-Dashboard-images/RecentActivity-eye.png";
import jobMatchIcon from "../assets/Candidate-Dashboard-images/RecentActivity-jobmatch.png";
import skillIconActivity from "../assets/Candidate-Dashboard-images/RecentActivity-skill.png";

// Sidebar Images
import logo from "../assets/Candidate-Dashboard-images/logo.png";
import dashboardIcon from "../assets/Candidate-Dashboard-images/dashboard.png";
import profileIcon from "../assets/Candidate-Dashboard-images/profileIcon.png";
import aiReportIcon from "../assets/Candidate-Dashboard-images/ai-report.png";
import skillIconSidebar from "../assets/Candidate-Dashboard-images/skill.png";
import jobsIcon from "../assets/Candidate-Dashboard-images/jobs.png";
import savedIcon from "../assets/Candidate-Dashboard-images/saved.png";
import messageIcon from "../assets/Candidate-Dashboard-images/message.png";
import learningIcon from "../assets/Candidate-Dashboard-images/learning.png";
import crownIcon from "../assets/Candidate-Dashboard-images/crown.png";
import arrowIcon from "../assets/Candidate-Dashboard-images/arrow.png";
import tickIcon from "../assets/Candidate-Dashboard-images/tick.png";

// UpcomingInterviews Images
import calendarIcon from "../assets/Candidate-Dashboard-images/UpcomingInterview.png";

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
  {
    label: "Format & Structure",
    value: "95%",
    color: "#06B6D4",
  },
  {
    label: "Keywords",
    value: "97%",
    color: "#FACC15",
  },
  {
    label: "Skills & Match",
    value: "94%",
    color: "#EF4444",
  },
  {
    label: "Experience",
    value: "98%",
    color: "#22C55E",
  },
  {
    label: "Education",
    value: "92%",
    color: "#8B5CF6",
  },
  {
    label: "Readability",
    value: "91%",
    color: "#EC4899",
  },
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
  {
    name: "Product Management",
    percent: 90,
  },
  {
    name: "SQL",
    percent: 85,
  },
  {
    name: "Data Analysis",
    percent: 80,
  },
  {
    name: "Project Planning",
    percent: 70,
  },
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
const CandidtateDashboard = () => {
  // Header State
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [activeButton, setActiveButton] = useState("create");

  // ATS Score Breakdown State
  const [showPopup, setShowPopup] = useState(false);

  const handleCreateResume = () => {
    setActiveButton("create");
    setTimeout(() => {
      alert("Resume Builder Opened Successfully");
    }, 100);
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

  return (
    <div className="dashboard-layout">
      {/* ===========================================
         Sidebar
      =========================================== */}
      <aside className="sidebar">
        <div>
          <ul className="menu">
            <li className="active">
              <img src={dashboardIcon} alt="Dashboard" />
              <span>Dashboard</span>
            </li>

            <li>
              <img src={profileIcon} alt="Profile" />
              <span>Profile</span>
            </li>

            <li>
              <img src={aiReportIcon} alt="AI Report" />
              <span>AI Report</span>
            </li>

            <li>
              <img src={skillIconSidebar} alt="Skill Matching" />
              <span>Skill Matching</span>
            </li>

            <li>
              <img src={jobsIcon} alt="Job Matches" />
              <span>Job Matches</span>
            </li>

            <li>
              <img src={savedIcon} alt="Saved Jobs" />
              <span>Saved Jobs</span>
            </li>

            <li className="message">
              <div className="left">
                <img src={messageIcon} alt="Message" />
                <span>Message</span>
              </div>

              <span className="badge">2</span>
            </li>

            <li>
              <img src={learningIcon} alt="Learning Center" />
              <span>Learning Center</span>
            </li>
          </ul>
        </div>

        <div className="upgrade-card">
          <div className="upgrade-title">
            <img src={crownIcon} alt="Crown" />
            <span>Upgrade to Pro</span>
          </div>

          <p>Unlock Premium tools and grow your career faster</p>

          <ul className="features">
            <li>
              <img src={tickIcon} alt="Tick" className="feature-check-img" />
              <span>Advanced AI Insights</span>
            </li>

            <li>
              <img src={tickIcon} alt="Tick" className="feature-check-img" />
              <span>Unlimited Resumes</span>
            </li>

            <li>
              <img src={tickIcon} alt="Tick" className="feature-check-img" />
              <span>Priority Support</span>
            </li>

            <li>
              <img src={tickIcon} alt="Tick" className="feature-check-img" />
              <span>Job Match Boost</span>
            </li>
          </ul>

          <button className="upgrade-btn">
            Upgrade Now
            <img src={arrowIcon} alt="Arrow" />
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        {/* ===========================================
           Navbar (Placeholder/Container as per structure)
        =========================================== */}

        {/* ===========================================
           Header
        =========================================== */}
        <section className="dashboard-header">
          <div className="welcome-container">
            <div className="welcome-left">
              <div className="welcome-heading">
                <h1>Welcome back, Rakesh!</h1>
                <img src={welcomeImg} alt="Welcome" className="welcome-img" />
              </div>
              <p>Let's continue your journey towards your dream career.</p>
            </div>

            <div className="welcome-right">
              <button
                className={`action-btn ${
                  activeButton === "create"
                    ? "active-highlight"
                    : "inactive-btn"
                }`}
                onClick={handleCreateResume}
              >
                <div className="btn-content-left">
                  <span className="plus-symbol">+</span>
                  <span>Create Resume</span>
                </div>
                <img
                  src={createResumeImg}
                  alt="Dropdown Chevron"
                  className={`btn-inner-img ${
                    activeButton === "create" ? "img-white" : "img-blue-arrow"
                  }`}
                />
              </button>

              <button
                className={`action-btn ${
                  activeButton === "upload"
                    ? "active-highlight"
                    : "inactive-btn"
                }`}
                onClick={handleUploadResume}
              >
                <div className="btn-content-left">
                  <span className="plus-symbol">+</span>
                  <span>
                    {resumeUploaded ? "Resume Uploaded" : "Upload Resume"}
                  </span>
                </div>
                <img
                  src={uploadResumeImg}
                  alt="Dropdown Chevron"
                  className={`btn-inner-img ${
                    activeButton === "upload" ? "img-white" : "img-blue-arrow"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="dashboard-cards">
            {dashboardCards.map((card, index) => {
              const isImageBlueActive = activeButton === card.id;

              return (
                <div key={index} className="dashboard-card">
                  <div className="card-header">
                    <div
                      className="card-img-wrapper"
                      style={{ backgroundColor: `${card.valColor}15` }}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className={`card-top-icon ${
                          isImageBlueActive ? "card-img-active-blue" : ""
                        }`}
                      />
                    </div>
                    <h3>{card.title}</h3>
                  </div>

                  <h2 style={{ color: card.valColor }}>{card.value}</h2>
                  <h4 style={{ color: card.statusColor }}>{card.status}</h4>

                  <div className="card-growth-trend">
                    {card.hasGrowth && (
                      <img
                        src={upArrowImg}
                        alt="Up"
                        className="trend-arrow-img"
                      />
                    )}
                    <span className="trend-percentage">{card.percentage}</span>
                    <span className="trend-timeline">{card.timeline}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===========================================
           Dashboard Content
        =========================================== */}
        <div className="dashboard-content">
          <div className="dashboard-row-one">
            {/* ===========================================
               Candidate ATS Score Breakdown
            =========================================== */}
            <div className="ats-wrapper">
              <>
                <div className="ats-card">
                  <h2 className="ats-title">ATS Score Breakdown</h2>

                  <div className="ats-content">
                    <div className="gauge-wrapper">
                      <svg className="gauge" viewBox="0 0 240 150">
                        <path
                          d="M30 120 A90 90 0 0 1 210 120"
                          className="gauge-bg"
                          pathLength="100"
                        />

                        <path
                          d="M30 120 A90 90 0 0 1 210 120"
                          className="gauge-progress"
                          pathLength="100"
                        />
                      </svg>

                      <div
                        className="gauge-text"
                        onClick={() => setShowPopup(true)}
                      >
                        <h1>94%</h1>

                        <span>Excellent</span>
                      </div>
                    </div>

                    <div className="score-list">
                      {scoreData.map((item) => (
                        <div className="score-item" key={item.label}>
                          <div className="score-left">
                            <span
                              className="dot"
                              style={{
                                background: item.color,
                              }}
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
                  <div className="popup-overlay">
                    <div className="popup">
                      <button
                        className="close-btn"
                        onClick={() => setShowPopup(false)}
                      >
                        ×
                      </button>

                      <h2>ATS Score Breakdown</h2>

                      <div className="popup-score">94%</div>

                      <p className="status">Excellent</p>

                      <div className="popup-list">
                        {scoreData.map((item) => (
                          <div className="popup-item" key={item.label}>
                            <div className="popup-left">
                              <span
                                className="dot"
                                style={{
                                  background: item.color,
                                }}
                              />

                              <span>{item.label}</span>
                            </div>

                            <strong>{item.value}</strong>
                          </div>
                        ))}
                      </div>

                      <button
                        className="popup-button"
                        onClick={() => setShowPopup(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </>
            </div>

            {/* ===========================================
               Skill Analysis
            =========================================== */}
            <div className="skill-analysis-wrapper">
              <div className="skill-card">
                <h2>Skill Analysis</h2>

                {skillsData.map((skill) => (
                  <div className="skill-box" key={skill.name}>
                    <div className="skill-title">
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </div>

                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${skill.percent}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===========================================
               AI Career Assistant
            =========================================== */}
            <div className="ai-assistant-wrapper">
              <div className="assistant-card">
                <div className="assistant-header">
                  <img src={aiStar} alt="" />

                  <div>
                    <h2>AI Career Assistant</h2>
                    <p>Navigate your career with AI.</p>
                  </div>
                </div>

                {assistantData.map((item, index) => (
                  <div className="assistant-item" key={index}>
                    <img src={item.icon} alt="" className="assistant-icon" />

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="dashboard-row-two">
            {/* ===========================================
               Recent Activity
            =========================================== */}
            <div className="recent-activity-wrapper">
              <div className="recent-activity-card">
                <h3 className="recent-activity-title">Recent Activity</h3>

                <div className="recent-activity-list">
                  {activitiesData.map((activity) => (
                    <div className="recent-activity-item" key={activity.id}>
                      <div className="recent-activity-left">
                        <div className="recent-activity-icon">
                          <img src={activity.icon} alt={activity.title} />
                        </div>

                        <div className="recent-activity-content">
                          <h4>{activity.title}</h4>
                          <p>{activity.subtitle}</p>
                        </div>
                      </div>

                      <span className="recent-activity-time">
                        {activity.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===========================================
               Upcoming Interviews
            =========================================== */}
            <div className="upcoming-interviews-wrapper">
              <div className="upcoming-card">
                <h3 className="upcoming-title">Upcoming Interviews</h3>

                <div className="upcoming-list">
                  {interviewsData.map((item) => (
                    <div className="interview-item" key={item.id}>
                      <div className="date-box">
                        <span className="month">{item.month}</span>

                        <span className="day">{item.day}</span>
                      </div>

                      <div className="interview-details">
                        <h4>{item.title}</h4>
                        <p>{item.company}</p>
                      </div>

                      <div className="interview-time">
                        <span>{item.time}</span>

                        <img
                          src={calendarIcon}
                          alt="Calendar"
                          className="calendar-icon"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===========================================
               Profile Visibility
            =========================================== */}
            <div className="profile-visibility-wrapper">
              <div className="profile-card">
                <h3 className="profile-title">Profile Visibility</h3>

                <p className="profile-subtitle">
                  Your profile is <strong>70%</strong> visible to recruiters
                </p>

                <img
                  src={profileFrame}
                  alt="Profile Frame"
                  className="profile-frame"
                />

                <div className="profile-stats">
                  <div className="stat-box">
                    <img
                      src={visibilityIcon}
                      alt="visibility"
                      className="stat-icon"
                    />
                    <h4>70%</h4>
                    <p>Visibility</p>
                  </div>

                  <div className="divider"></div>

                  <div className="stat-box">
                    <img
                      src={notifiedIcon}
                      alt="notified"
                      className="stat-icon"
                    />
                    <h4>2.5X</h4>
                    <p>Most likely to get noticed</p>
                  </div>

                  <div className="divider"></div>

                  <div className="stat-box">
                    <img src={viewsIcon} alt="views" className="stat-icon" />
                    <h4>12</h4>
                    <p>Profile Views in last 7 days</p>
                  </div>
                </div>

                <h4 className="why-title">Why profile completion matters?</h4>

                <div className="benefit-item">
                  <img src={matchIcon} alt="match" className="benefit-icon" />

                  <div>
                    <h5>Better job matches</h5>
                    <p>Get matched with your ideal job.</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <img
                    src={interviewIcon}
                    alt="interview"
                    className="benefit-icon"
                  />

                  <div>
                    <h5>More interview opportunities</h5>
                    <p>Complete profile to get callbacks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CandidtateDashboard;
