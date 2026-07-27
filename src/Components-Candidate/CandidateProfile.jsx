import React, { useState, useRef } from "react";
import Header from "./Candidate-Header";
import "./CandidateProfile.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

/* ===========================================
   Image Imports (Strictly Profile-images path)
=========================================== */
import profileImg from "../assets/Candidate/Profile-images/profile.png";
import verifiedIcon from "../assets/Candidate/Profile-images/verified.png";
import locationIcon from "../assets/Candidate/Profile-images/location.png";
import phoneIcon from "../assets/Candidate/Profile-images/phone.png";
import emailIcon from "../assets/Candidate/Profile-images/email.png";
import linkedinIcon from "../assets/Candidate/Profile-images/linkedin.png";
import editIcon from "../assets/Candidate/Profile-images/edit.png";
import deleteIcon from "../assets/Candidate/Profile-images/delete.png";
import tickIcon from "../assets/Candidate/Profile-images/tick.png";

// Professional Highlights Icons
import expIcon from "../assets/Candidate/Profile-images/experience.png";
import eduIcon from "../assets/Candidate/Profile-images/education.png";
import certIcon from "../assets/Candidate/Profile-images/certifications.png";
import skillIcon from "../assets/Candidate/Profile-images/skills.png";

// Profile Highlights Section Icons
import personalInfoIcon from "../assets/Candidate/Profile-images/personal-info.png";
import highlightsExpIcon from "../assets/Candidate/Profile-images/highlight-exp.png";
import highlightsSkillIcon from "../assets/Candidate/Profile-images/highlight-skill.png";
import highlightsEduIcon from "../assets/Candidate/Profile-images/highlight-edu.png";
import highlightsLangIcon from "../assets/Candidate/Profile-images/highlight-lang.png";

// Sidebar Shared Icons
import dashboardIcon from "../assets/Candidate/Dashboard-images/dashboard.png";
import profileIconSidebar from "../assets/Candidate/Dashboard-images/profileIcon.png";
import aiReportIcon from "../assets/Candidate/Dashboard-images/ai-report.png";
import skillIconSidebar from "../assets/Candidate/Dashboard-images/skill.png";
import jobsIcon from "../assets/Candidate/Dashboard-images/jobs.png";
import savedIcon from "../assets/Candidate/Dashboard-images/saved.png";
import messageIcon from "../assets/Candidate/Dashboard-images/message.png";
import learningIcon from "../assets/Candidate/Dashboard-images/learning.png";
import crownIcon from "../assets/Candidate/Dashboard-images/crown.png";
import arrowIcon from "../assets/Candidate/Dashboard-images/arrow.png";

/* ===========================================
   Profile Strength Chart Data (Recharts)
=========================================== */
const profileStrengthData = [
  { name: "Completed", value: 85 },
  { name: "Remaining", value: 15 },
];
const STRENGTH_COLORS = ["#10b981", "#e2e8f0"];

const CandidateProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("Profile");
  const fileInputRef = useRef(null);

  const [profileData, setProfileData] = useState({
    name: "Akash",
    role: "Full Stack Developer",
    location: "Chennai, India",
    phone: "+91 8508035087",
    email: "akash123@gmail.com",
    linkedin: "linkedin.com/in/akash",
    bio: "Motivated and detail-oriented Full Stack Developer with 2+ years of experience in developing responsive web applications using JavaScript, React, Node.js. Passionate about creating efficient, scalable solutions and solving real-world problems.",
    languages: ["Tamil", "English"],
    avatar: profileImg,
  });

  const handleEditToggle = () => {
    if (isEditing) {
      alert("Profile Saved Successfully!");
    }
    setIsEditing(!isEditing);
  };

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileData((prev) => ({ ...prev, avatar: imageUrl }));
    }
  };

  const menuItems = [
    { name: "Dashboard", icon: dashboardIcon },
    { name: "Profile", icon: profileIconSidebar },
    { name: "AI Report", icon: aiReportIcon },
    { name: "Skill Matching", icon: skillIconSidebar },
    { name: "Job Matches", icon: jobsIcon },
    { name: "Saved Jobs", icon: savedIcon },
    { name: "Message", icon: messageIcon, badge: "2" },
    { name: "Learning Center", icon: learningIcon },
  ];

  return (
    <div className="dashboard-page-wrapper">
      {/* Hidden file input for camera upload */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageChange}
      />

      {/* Header with Props */}
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="dashboard-layout">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="sidebar-mobile-overlay"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`sidebar ${isSidebarOpen ? "mobile-open" : ""}`}>
          <div className="sidebar-menu-wrapper">
            <ul className="menu">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className={`${activeTab === item.name ? "active" : ""} ${
                    item.name === "Message" ? "message" : ""
                  }`}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsSidebarOpen(false);
                  }}
                >
                  <div className="left">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="sidebar-menu-icon"
                    />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && <span className="badge">{item.badge}</span>}
                </li>
              ))}
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

        {/* Main Content Area */}
        <main className="dashboard-main profile-main-content">
          {/* Top Section: Unified Large Profile Card */}
          <div className="profile-top-layout-grid">
            <div className="profile-user-strength-unified-card">
              <div className="profile-top-split-row">
                {/* Left side details */}
                <div className="user-profile-inner-col-group">
                  <div className="user-profile-inner-row">
                    <div className="avatar-wrapper" onClick={handleCameraClick}>
                      <img
                        src={profileData.avatar}
                        alt="Akash"
                        className="profile-avatar-img"
                      />
                      <span
                        className="camera-icon-badge clickable-action"
                        title="Change Profile Picture"
                        onClick={handleCameraClick}
                      >
                        📷
                      </span>
                    </div>
                    <div className="profile-meta">
                      <div className="name-row">
                        <h2>{profileData.name}</h2>
                        <img
                          src={verifiedIcon}
                          alt="Verified"
                          className="verified-badge-img"
                        />
                      </div>
                      <p className="role-text">{profileData.role}</p>
                      <div className="contact-details">
                        <p>
                          <img
                            src={locationIcon}
                            alt="Location"
                            className="contact-icon"
                          />
                          {profileData.location}
                        </p>
                        <p>
                          <img
                            src={phoneIcon}
                            alt="Phone"
                            className="contact-icon"
                          />
                          {profileData.phone}
                        </p>
                        <p>
                          <img
                            src={emailIcon}
                            alt="Email"
                            className="contact-icon"
                          />
                          {profileData.email}
                        </p>
                        <p>
                          <img
                            src={linkedinIcon}
                            alt="LinkedIn"
                            className="contact-icon"
                          />
                          {profileData.linkedin}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Edit Profile Button */}
                  <button
                    className="edit-profile-action-btn clickable-action"
                    onClick={handleEditToggle}
                  >
                    {isEditing ? "Save Profile" : "Edit Profile"}
                  </button>
                </div>

                {/* Right side Profile Strength Chart */}
                <div className="profile-strength-inner-box">
                  <div className="strength-chart-box">
                    <ResponsiveContainer width="100%" height={120}>
                      <PieChart>
                        <Pie
                          data={profileStrengthData}
                          cx="50%"
                          cy="90%"
                          startAngle={180}
                          endAngle={0}
                          innerRadius={45}
                          outerRadius={65}
                          paddingAngle={0}
                          dataKey="value"
                        >
                          {profileStrengthData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={
                                STRENGTH_COLORS[index % STRENGTH_COLORS.length]
                              }
                            />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="strength-center-text">
                      <h3>85%</h3>
                      <span>Profile Strength</span>
                    </div>
                  </div>
                  <div className="strength-status-badge">Excellent</div>
                  <p className="strength-desc">
                    Great job! Your profile is strong and well optimized.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Professional Highlights */}
            <div className="professional-highlights-container">
              <div className="prof-highlights-header">
                <h3>Professional Highlights</h3>
              </div>
              <div className="prof-highlights-grid-2x2">
                <div className="highlight-box">
                  <div className="h-icon-wrap purp">
                    <img src={expIcon} alt="Exp" />
                  </div>
                  <div>
                    <h4>2+ Years of Experience</h4>
                    <p>Built user-friendly, responsive web application.</p>
                  </div>
                </div>
                <div className="highlight-box">
                  <div className="h-icon-wrap green">
                    <img src={eduIcon} alt="Edu" />
                  </div>
                  <div>
                    <h4>B.E Computer Science</h4>
                    <p>
                      Bachelor of Engineering in Computer Science and
                      Engineering.
                    </p>
                  </div>
                </div>
                <div className="highlight-box">
                  <div className="h-icon-wrap yellow">
                    <img src={certIcon} alt="Cert" />
                  </div>
                  <div>
                    <h4>3 Certifications</h4>
                    <p>
                      Industry-recognized certifications enhancing technical
                      expertise.
                    </p>
                  </div>
                </div>
                <div className="highlight-box">
                  <div className="h-icon-wrap red">
                    <img src={skillIcon} alt="Skill" />
                  </div>
                  <div>
                    <h4>4 Skills Learned</h4>
                    <p>
                      Core-skills in Frontend development and modern
                      technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row: About Me, Profile Highlights List, Skill Competency */}
          <div className="profile-middle-grid">
            <div className="about-me-card">
              <div className="card-heading-flex">
                <h3>About Me</h3>
                <img
                  src={editIcon}
                  alt="Edit"
                  className="card-edit-icon dark-edit clickable-action"
                  onClick={handleEditToggle}
                />
              </div>
              <p>{profileData.bio}</p>

              <h4 className="languages-heading">Languages Known</h4>
              <div className="language-chips">
                {profileData.languages.map((lang, idx) => (
                  <span key={idx} className="lang-chip">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="profile-highlights-list-card">
              <h3>Profile Highlights</h3>
              <ul className="checklist-items">
                <li>
                  <div className="check-item-left">
                    <img src={personalInfoIcon} alt="" /> Personal Information
                  </div>
                  <span className="status-complete">
                    Completed <img src={tickIcon} alt="tick" />
                  </span>
                </li>
                <li>
                  <div className="check-item-left">
                    <img src={highlightsExpIcon} alt="" /> Experience
                  </div>
                  <span className="status-complete">
                    Completed <img src={tickIcon} alt="tick" />
                  </span>
                </li>
                <li>
                  <div className="check-item-left">
                    <img src={highlightsSkillIcon} alt="" /> Skills
                  </div>
                  <span className="status-complete">
                    Completed <img src={tickIcon} alt="tick" />
                  </span>
                </li>
                <li>
                  <div className="check-item-left">
                    <img src={highlightsEduIcon} alt="" /> Education
                  </div>
                  <span className="status-complete">
                    Completed <img src={tickIcon} alt="tick" />
                  </span>
                </li>
                <li>
                  <div className="check-item-left">
                    <img src={highlightsLangIcon} alt="" /> Language
                  </div>
                  <span className="status-complete">
                    Completed <img src={tickIcon} alt="tick" />
                  </span>
                </li>
              </ul>
            </div>

            <div className="skill-competency-card">
              <h3>Skill Competency</h3>
              <div className="competency-skill-item">
                <div className="skill-info-row">
                  <span>JavaScript</span>
                  <span>9.8/10</span>
                </div>
                <div className="comp-bar">
                  <div className="comp-fill" style={{ width: "98%" }}></div>
                </div>
              </div>
              <div className="competency-skill-item">
                <div className="skill-info-row">
                  <span>React</span>
                  <span>8.5/10</span>
                </div>
                <div className="comp-bar">
                  <div className="comp-fill" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="competency-skill-item">
                <div className="skill-info-row">
                  <span>Node.js</span>
                  <span>9.5/10</span>
                </div>
                <div className="comp-bar">
                  <div className="comp-fill" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="competency-skill-item">
                <div className="skill-info-row">
                  <span>Python</span>
                  <span>8.2/10</span>
                </div>
                <div className="comp-bar">
                  <div className="comp-fill" style={{ width: "82%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Experience & Education */}
          <div className="profile-bottom-grid">
            <div className="experience-timeline-card">
              <div className="section-header-with-add">
                <h3>Experience</h3>
                <button className="add-item-btn clickable-action">+ Add</button>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot-pure"></div>
                <div className="timeline-content">
                  <div className="t-header">
                    <h4>Full Stack Developer</h4>
                    <div className="timeline-actions-right">
                      <span className="location-tag">Chennai, India</span>
                      <img
                        src={editIcon}
                        alt="Edit"
                        className="action-icon-btn edit-color-icon clickable-action"
                        onClick={handleEditToggle}
                      />
                      <img
                        src={deleteIcon}
                        alt="Delete"
                        className="action-icon-btn delete-color-icon clickable-action"
                        onClick={() => alert("Delete experience clicked")}
                      />
                    </div>
                  </div>
                  <p className="company-name">Sutherland Global Services</p>
                  <p className="t-date">June 2025 - Present.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot-pure"></div>
                <div className="timeline-content">
                  <div className="t-header">
                    <h4>Front End Developer Intern</h4>
                    <div className="timeline-actions-right">
                      <span className="location-tag">Chennai, India</span>
                      <img
                        src={editIcon}
                        alt="Edit"
                        className="action-icon-btn edit-color-icon clickable-action"
                        onClick={handleEditToggle}
                      />
                      <img
                        src={deleteIcon}
                        alt="Delete"
                        className="action-icon-btn delete-color-icon clickable-action"
                        onClick={() => alert("Delete experience clicked")}
                      />
                    </div>
                  </div>
                  <p className="company-name">TechNova Solutions</p>
                  <p className="t-date">February 2025 - June 2025.</p>
                </div>
              </div>
            </div>

            <div className="education-timeline-card">
              <div className="section-header-with-add">
                <h3>Education</h3>
                <button className="add-item-btn clickable-action">+ Add</button>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot-pure"></div>
                <div className="timeline-content">
                  <div className="t-header">
                    <h4>Bachelor Of Engineering (CSE)</h4>
                    <div className="timeline-actions-right">
                      <span className="score-tag">
                        2016-2020 <strong>|</strong> 92%
                      </span>
                      <img
                        src={editIcon}
                        alt="Edit"
                        className="action-icon-btn edit-color-icon clickable-action"
                        onClick={handleEditToggle}
                      />
                      <img
                        src={deleteIcon}
                        alt="Delete"
                        className="action-icon-btn delete-color-icon clickable-action"
                        onClick={() => alert("Delete education clicked")}
                      />
                    </div>
                  </div>
                  <p className="company-name">Sethu Institute Of Technology</p>
                  <p className="t-date">CGPA: 8.5/10</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot-pure"></div>
                <div className="timeline-content">
                  <div className="t-header">
                    <h4>Higher Secondary (12th)</h4>
                    <div className="timeline-actions-right">
                      <span className="score-tag">
                        2015-2016 <strong>|</strong> 90%
                      </span>
                      <img
                        src={editIcon}
                        alt="Edit"
                        className="action-icon-btn edit-color-icon clickable-action"
                        onClick={handleEditToggle}
                      />
                      <img
                        src={deleteIcon}
                        alt="Delete"
                        className="action-icon-btn delete-color-icon clickable-action"
                        onClick={() => alert("Delete education clicked")}
                      />
                    </div>
                  </div>
                  <p className="company-name">Dav matriculation School</p>
                  <p className="t-date">State Board</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CandidateProfile;
