import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CandidateHeader from "./../Components-Candidate/CandidateHeader";
import "./PersonalInfo.css";

// Assets Imports
import mailIcon from "../assets/Create-Resume/email.png";
import phoneIcon from "../assets/Create-Resume/phone.png";
import locationIcon from "../assets/Create-Resume/location.png";
import linkedinIcon from "../assets/Create-Resume/linkedin.png";
import aiIcon from "../assets/Create-Resume/ai.png";
import downloadIconAsset from "../assets/Create-Resume/download.png";

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

const PersonalInfo = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Profile");
  const [activeStep, setActiveStep] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMobileActionMenu, setShowMobileActionMenu] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "Ajith Akash",
    jobTitle: "Full Stack Developer",
    email: "Ajith@email.com",
    phone: "+91 95000 40000",
    location: "Bengaluru, India",
    linkedin: "linkedin.com/in/aman",
    summary:
      "Frontend Developer with 3+ years of experience building responsive web applications using HTML, CSS, JavaScript and React. Passionate about creating intuitive user interfaces and optimizing performance.",
  });

  // Dynamic Router mapping for ALL Sidebar Items
  const handleNavClick = (tabName, routePath) => {
    setActiveTab(tabName);
    setIsSidebarOpen(false);
    if (routePath) {
      navigate(routePath);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = true;
    if (!formData.jobTitle.trim()) newErrors.jobTitle = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      alert("Please fill in all mandatory fields before proceeding.");
      return false;
    }
    return true;
  };

  const handleStepClick = (stepNumber) => {
    if (!validateForm()) return;

    if (stepNumber === 3) {
      // Direct redirect to Education keeping full routing intact
      navigate("/Resume-builder/candidate/candidate/education");
    } else {
      setActiveStep(stepNumber);
    }
  };

  const handleNextStep = () => {
    if (validateForm()) {
      if (activeStep === 1) {
        setActiveStep(2);
      } else if (activeStep === 2) {
        navigate("/Resume-builder/candidate/candidate/education");
      } else if (activeStep < 5) {
        setActiveStep((prev) => prev + 1);
      } else {
        alert("Resume creation complete!");
      }
    }
  };

  return (
    <div className="can-dashboard-page-wrapper">
      <CandidateHeader
        mobileMenuOpen={isSidebarOpen}
        setMobileMenuOpen={setIsSidebarOpen}
      />

      <div className="can-dashboard-layout">
        {isSidebarOpen && (
          <div
            className="can-sidebar-mobile-overlay"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Dynamic Nav Sidebar Menu */}
        <aside
          className={`can-sidebar ${isSidebarOpen ? "can-mobile-open" : ""}`}
        >
          <div>
            <ul className="can-menu">
              <li
                className={activeTab === "Dashboard" ? "can-active" : ""}
                onClick={() =>
                  handleNavClick(
                    "Dashboard",
                    "/Resume-builder/candidate/candidate/dashboard",
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

        {/* Main Work Area */}
        <main className="can-dashboard-main">
          <div className="resume-page-wrapper">
            <div className="resume-top-header">
              <div className="header-left-title">
                <button
                  className="mobile-hamburger-btn"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  ☰
                </button>
                <h2>Create a Resume</h2>
              </div>

              <div className="header-action-btns desktop-only-actions">
                <button className="save-btn">Save</button>
                <button className="download-btn">
                  Download
                  <img
                    src={downloadIconAsset}
                    alt="download"
                    className="download-btn-icon"
                  />
                </button>
              </div>

              <div className="mobile-only-dropdown-wrapper">
                <button
                  className="action-dropdown-btn"
                  onClick={() => setShowMobileActionMenu(!showMobileActionMenu)}
                >
                  ⋮
                </button>
                {showMobileActionMenu && (
                  <div className="action-dropdown-menu">
                    <button onClick={() => setShowMobileActionMenu(false)}>
                      Save
                    </button>
                    <button onClick={() => setShowMobileActionMenu(false)}>
                      Download
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Stepper Navigation */}
            <div className="steps-card-box desktop-only-steps">
              <div className="resume-steps-bar">
                <span
                  className={`step-item ${activeStep === 1 ? "active" : ""}`}
                  onClick={() => handleStepClick(1)}
                >
                  1. Personal Info
                </span>
                <span
                  className={`step-item ${activeStep === 2 ? "active" : ""}`}
                  onClick={() => handleStepClick(2)}
                >
                  2. Experience
                </span>
                <span
                  className={`step-item ${activeStep === 3 ? "active" : ""}`}
                  onClick={() => handleStepClick(3)}
                >
                  3. Education
                </span>
                <span
                  className={`step-item ${activeStep === 4 ? "active" : ""}`}
                  onClick={() => handleStepClick(4)}
                >
                  4. Skills
                </span>
                <span
                  className={`step-item ${activeStep === 5 ? "active" : ""}`}
                  onClick={() => handleStepClick(5)}
                >
                  5. Review
                </span>
              </div>
            </div>

            <div className="mobile-nav-drawer">
              {[
                "1. Personal Info",
                "2. Experience",
                "3. Education",
                "4. Skills",
                "5. Review",
              ].map((stepLabel, idx) => (
                <div
                  key={idx}
                  className={`drawer-item ${activeStep === idx + 1 ? "active" : ""}`}
                  onClick={() => handleStepClick(idx + 1)}
                >
                  {stepLabel}
                </div>
              ))}
            </div>

            {/* Grid Layout Container */}
            <div className="resume-grid-layout">
              <div className="resume-card-box form-card">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className={errors.fullName ? "input-error" : ""}
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    className={errors.jobTitle ? "input-error" : ""}
                    value={formData.jobTitle}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row-two">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      className={errors.email ? "input-error" : ""}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className={errors.phone ? "input-error" : ""}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>LinkedIn</label>
                  <input
                    type="text"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />
                </div>

                <div className="ai-summary-section">
                  <div className="ai-summary-title">
                    <img src={aiIcon} alt="AI Icon" className="ai-icon" />
                    <h3>AI Write My Summary</h3>
                  </div>
                  <span className="summary-sublabel">Professional Summary</span>
                  <textarea
                    name="summary"
                    rows="4"
                    value={formData.summary}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="resume-card-box preview-card">
                <div className="preview-header">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"
                    alt="Profile Avatar"
                    className="profile-img-circle"
                  />
                  <div>
                    <h3 className="preview-name">
                      {formData.fullName || "Ajith Akash"}
                    </h3>
                    <p className="preview-title">
                      {formData.jobTitle || "Full stack Developer"}
                    </p>
                    <div className="preview-contacts">
                      <span>
                        <img src={mailIcon} alt="email" /> {formData.email}
                      </span>
                      <span>
                        <img src={phoneIcon} alt="phone" /> {formData.phone}
                      </span>
                      <span>
                        <img src={locationIcon} alt="location" />{" "}
                        {formData.location}
                      </span>
                      <span>
                        <img src={linkedinIcon} alt="linkedin" />{" "}
                        {formData.linkedin}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="preview-thick-hr"></div>

                <div className="preview-section">
                  <h4 className="section-title-underlined">
                    PROFESSIONAL SUMMARY
                  </h4>
                  <p className="preview-summary-text">{formData.summary}</p>
                </div>

                <div className="preview-section">
                  <h4 className="section-title-underlined">EXPERIENCE</h4>
                  <div className="item-header">
                    <strong>Senier Full Stack developer</strong>
                    <span className="item-date">Jan 2022 - Present</span>
                  </div>
                  <ul className="bullet-list">
                    <li>
                      Developed responsive web applications using React, Redux
                      and Tailwind CSS.
                    </li>
                    <li>
                      Collaborated with UX/UI designers and backend developers.
                    </li>
                    <li>Improved website performance by 30%.</li>
                  </ul>
                </div>

                <div className="preview-section">
                  <h4 className="section-title-underlined">EDUCATION</h4>
                  <div className="item-header">
                    <strong>Bachelor of Computer Science</strong>
                    <span className="item-date">2016 - 2020</span>
                  </div>
                  <p className="university-name">Anna University</p>
                </div>

                <div className="preview-section">
                  <h4 className="section-title-underlined">SKILLS</h4>
                  <div className="skills-badge-list">
                    <span className="skill-chip">HTML</span>
                    <span className="skill-chip">CSS</span>
                    <span className="skill-chip">JavaScript</span>
                    <span className="skill-chip">React</span>
                    <span className="skill-chip">Tailwind CSS</span>
                    <span className="skill-chip">Git</span>
                    <span className="skill-chip">GitHub</span>
                    <span className="skill-chip">REST API</span>
                    <span className="skill-chip">Python</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-button-wrapper">
              <button className="center-next-btn" onClick={handleNextStep}>
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PersonalInfo;
