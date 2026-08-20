import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalInfo.css";

import ProfileImg from "../assets/Create-Resume/profile.png";
import mailIcon from "../assets/Create-Resume/email.png";
import phoneIcon from "../assets/Create-Resume/phone.png";
import locationIcon from "../assets/Create-Resume/location.png";
import linkedinIcon from "../assets/Create-Resume/linkedin.png";
import downloadIconAsset from "../assets/Create-Resume/download.png";
import aiSuggestIcon from "../assets/Create-Resume/AI-suggest.png";
import fullScreenIcon from "../assets/Create-Resume/fullScreen.png";
import undoIcon from "../assets/Create-Resume/undo.png";
import contentIcon from "../assets/Create-Resume/content.png";
import skillsIcon from "../assets/Create-Resume/skills.png";
import experienceIcon from "../assets/Create-Resume/experience.png";
import ideaIcon from "../assets/Create-Resume/idea.png";

const PersonalInfo = () => {
  const navigate = useNavigate();

  const [zoomLevel, setZoomLevel] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [errors, setErrors] = useState({});

  // Mobile navigation & action dropdown state management
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("resume_personal_info");
    return savedData
      ? JSON.parse(savedData)
      : {
          fullName: "Ajith Akash",
          jobTitle: "Full stack Developer",
          email: "Ajith@email.com",
          phone: "+91 95000 40000",
          location: "Bengaluru, India",
          linkedin: "linkedin.com/in/Aman",
          summary:
            "Full Stack Developer with 3+ years of experience building responsive web applications using HTML, CSS, JavaScript and React. Passionate about creating intuitive user interfaces and optimizing performance.",
        };
  });

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

  const handleSaveData = () => {
    if (validateForm()) {
      localStorage.setItem("resume_personal_info", JSON.stringify(formData));
      alert("Personal Info Saved Successfully!");
      setIsActionMenuOpen(false);
    }
  };

  const handleStepClick = (stepNumber) => {
    if (!validateForm()) return;

    const routes = {
      1: "/Resume-builder/candidate/candidate/personalinfo",
      2: "/Resume-builder/candidate/candidate/experience",
      3: "/Resume-builder/candidate/candidate/education",
      4: "/Resume-builder/candidate/candidate/skills",
      5: "/Resume-builder/candidate/candidate/summary",
      6: "/Resume-builder/candidate/candidate/review",
    };

    if (routes[stepNumber]) {
      setIsMobileNavOpen(false);
      navigate(routes[stepNumber]);
    }
  };

  const handleNextStep = () => {
    if (validateForm()) {
      localStorage.setItem("resume_personal_info", JSON.stringify(formData));
      navigate("/Resume-builder/candidate/candidate/experience");
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleUndoZoom = () => {
    setZoomLevel(100);
  };

  const renderResumeCard = () => (
    <div
      className="resume-card-box preview-card"
      style={{
        transform: `scale(${zoomLevel / 100})`,
        transformOrigin: "top center",
      }}
    >
      <div className="preview-header">
        <img
          src={ProfileImg}
          alt="Profile Avatar"
          className="profile-img-circle"
        />
        <div className="preview-header-info">
          <h3 className="preview-name">{formData.fullName || "Ajith Akash"}</h3>
          <p className="preview-title">
            {formData.jobTitle || "Full stack Developer"}
          </p>

          <div className="preview-contacts">
            <button className="contact-asset-btn">
              <img
                src={mailIcon}
                alt="email"
                className="preview-contact-icon"
              />
              <span>{formData.email}</span>
            </button>

            <button className="contact-asset-btn">
              <img
                src={phoneIcon}
                alt="phone"
                className="preview-contact-icon"
              />
              <span>{formData.phone}</span>
            </button>

            <button className="contact-asset-btn">
              <img
                src={locationIcon}
                alt="location"
                className="preview-contact-icon"
              />
              <span>{formData.location}</span>
            </button>

            <button className="contact-asset-btn">
              <img
                src={linkedinIcon}
                alt="linkedin"
                className="preview-contact-icon"
              />
              <span>{formData.linkedin}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="preview-thick-hr"></div>

      <div className="preview-section">
        <h4 className="section-title-underlined">PROFESSIONAL SUMMARY</h4>
        <p className="preview-summary-text">{formData.summary}</p>
      </div>

      <div className="preview-section">
        <h4 className="section-title-underlined">EXPERIENCE</h4>
        <div className="item-header">
          <strong>Senior Full Stack developer</strong>
          <span className="item-date">Jan 2022 - Present</span>
        </div>
        <ul className="bullet-list">
          <li>
            Developed responsive web applications using React, Redux and
            Tailwind CSS.
          </li>
          <li>Collaborated with UX/UI designers and backend developers.</li>
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
  );

  return (
    <div className="can-personalinfo-page-wrapper">
      <div className="can-personalinfo-layout">
        <main className="can-personalinfo-main">
          <div className="resume-page-wrapper">
            <div className="resume-top-header">
              <div className="header-left-title">
                {/* Mobile Hamburger Toggle Button */}
                <button
                  className="mobile-hamburger-btn"
                  onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                >
                  ☰
                </button>
                <h2>Create a Resume</h2>
              </div>

              {/* Desktop Direct Buttons */}
              <div className="header-action-btns desktop-only-actions">
                <button className="save-btn" onClick={handleSaveData}>
                  Save
                </button>
                <button
                  className="download-btn"
                  onClick={() => alert("Downloading Resume...")}
                >
                  Download
                  <img
                    src={downloadIconAsset}
                    alt="download"
                    className="download-btn-icon"
                  />
                </button>
              </div>

              {/* Mobile 3-Dots Action Dropdown */}
              <div className="mobile-only-dropdown-wrapper">
                <button
                  className="action-dropdown-btn"
                  onClick={() => setIsActionMenuOpen(!isActionMenuOpen)}
                >
                  ⋮
                </button>

                {isActionMenuOpen && (
                  <div className="action-dropdown-menu">
                    <button onClick={handleSaveData}>Save</button>
                    <button
                      onClick={() => {
                        setIsActionMenuOpen(false);
                        alert("Downloading Resume...");
                      }}
                    >
                      Download
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Nav Drawer */}
            {isMobileNavOpen && (
              <div className="mobile-nav-drawer">
                <div
                  className="drawer-item active"
                  onClick={() => handleStepClick(1)}
                >
                  1. Personal Info
                </div>
                <div className="drawer-item" onClick={() => handleStepClick(2)}>
                  2. Experience
                </div>
                <div className="drawer-item" onClick={() => handleStepClick(3)}>
                  3. Education
                </div>
                <div className="drawer-item" onClick={() => handleStepClick(4)}>
                  4. Skills
                </div>
                <div className="drawer-item" onClick={() => handleStepClick(5)}>
                  5. Summary
                </div>
                <div className="drawer-item" onClick={() => handleStepClick(6)}>
                  6. Review
                </div>
              </div>
            )}

            {/* Desktop Stepper Bar */}
            <div className="steps-card-box desktop-only-steps">
              <div className="resume-steps-bar">
                <span
                  className="step-item active"
                  onClick={() => handleStepClick(1)}
                >
                  1. Personal Info
                </span>
                <span className="step-item" onClick={() => handleStepClick(2)}>
                  2. Experience
                </span>
                <span className="step-item" onClick={() => handleStepClick(3)}>
                  3. Education
                </span>
                <span className="step-item" onClick={() => handleStepClick(4)}>
                  4. Skills
                </span>
                <span className="step-item" onClick={() => handleStepClick(5)}>
                  5. Summary
                </span>
                <span className="step-item" onClick={() => handleStepClick(6)}>
                  6. Review
                </span>
              </div>
            </div>

            <div className="resume-grid-layout">
              <div className="left-column-wrapper">
                <div className="resume-card-box form-card">
                  <div className="form-card-header">
                    <h3>Personal details</h3>
                    <button
                      className="ai-suggest-btn"
                      onClick={() => alert("AI Suggesting improvements...")}
                    >
                      <img
                        src={aiSuggestIcon}
                        alt="AI"
                        className="ai-btn-icon"
                      />
                      AI Suggest
                    </button>
                  </div>

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

                  <div className="form-group mb-0">
                    <label>LinkedIn</label>
                    <input
                      type="text"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="resume-card-box completion-card">
                  <h4 className="completion-title">Overall Completion</h4>

                  <div className="completion-main-row">
                    <div className="completion-score-block">
                      <div className="circle-score-wrapper">
                        <svg className="progress-ring" width="80" height="80">
                          <circle
                            className="progress-ring__circle-bg"
                            stroke="#e2e8f0"
                            strokeWidth="7"
                            fill="transparent"
                            r="32"
                            cx="40"
                            cy="40"
                          />
                          <circle
                            className="progress-ring__circle"
                            stroke="#16a34a"
                            strokeWidth="7"
                            strokeDasharray="200"
                            strokeDashoffset="170"
                            strokeLinecap="round"
                            fill="transparent"
                            r="32"
                            cx="40"
                            cy="40"
                          />
                        </svg>
                        <div className="score-text">
                          <span className="score-num">15</span>
                          <span className="score-denom">/100</span>
                        </div>
                      </div>

                      <div className="completion-info">
                        <span className="status-badge">Good</span>
                        <p className="status-desc">
                          Your resume is well-structured can be improved
                          further.
                        </p>
                        <button className="improve-resume-btn">
                          Improve Resume
                        </button>
                      </div>
                    </div>

                    <div className="metrics-three-columns">
                      <div
                        className="metric-col"
                        onClick={() => handleStepClick(1)}
                      >
                        <div className="metric-col-header">
                          <img
                            src={contentIcon}
                            alt="Content"
                            className="metric-asset-img"
                          />
                          <span>Content</span>
                        </div>
                        <div className="metric-col-value">15%</div>
                        <div className="metric-bar-bg">
                          <div
                            className="metric-bar-fill green-bar"
                            style={{ width: "15%" }}
                          ></div>
                        </div>
                      </div>

                      <div
                        className="metric-col"
                        onClick={() => handleStepClick(4)}
                      >
                        <div className="metric-col-header">
                          <img
                            src={skillsIcon}
                            alt="Skills"
                            className="metric-asset-img"
                          />
                          <span>Skills</span>
                        </div>
                        <div className="metric-col-value">10%</div>
                        <div className="metric-bar-bg">
                          <div
                            className="metric-bar-fill green-bar"
                            style={{ width: "10%" }}
                          ></div>
                        </div>
                      </div>

                      <div
                        className="metric-col"
                        onClick={() => handleStepClick(2)}
                      >
                        <div className="metric-col-header">
                          <img
                            src={experienceIcon}
                            alt="Experience"
                            className="metric-asset-img"
                          />
                          <span>Experience</span>
                        </div>
                        <div className="metric-col-value">10%</div>
                        <div className="metric-bar-bg">
                          <div
                            className="metric-bar-fill green-bar"
                            style={{ width: "10%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="completion-tip-box">
                    <img src={ideaIcon} alt="Tip" className="tip-idea-icon" />
                    <p className="tip-text">
                      <strong>Tips:</strong> Add more quantifiable achievements
                      in your experience section to improve your score.
                    </p>
                  </div>
                </div>
              </div>

              <div className="preview-container-wrapper">
                <div className="preview-top-controls">
                  <span className="preview-heading">Live Preview</span>
                  <div className="zoom-controls">
                    <button
                      className="zoom-btn"
                      onClick={() => setZoomLevel((z) => Math.max(50, z - 10))}
                    >
                      –
                    </button>
                    <span className="zoom-percentage">{zoomLevel}%</span>
                    <button
                      className="zoom-btn"
                      onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
                    >
                      +
                    </button>
                    <button
                      className="control-icon-btn"
                      title="Full Screen"
                      onClick={toggleFullscreen}
                    >
                      <img
                        src={fullScreenIcon}
                        alt="Fullscreen"
                        className="control-icon-img"
                      />
                    </button>
                    <button
                      className="control-icon-btn"
                      title="Undo / Reset Zoom"
                      onClick={handleUndoZoom}
                    >
                      <img
                        src={undoIcon}
                        alt="Undo"
                        className="control-icon-img"
                      />
                    </button>
                  </div>
                </div>

                {renderResumeCard()}
              </div>
            </div>

            <div className="bottom-button-wrapper">
              <button className="center-next-btn" onClick={handleNextStep}>
                Next
              </button>
            </div>
          </div>
        </main>

        {isFullscreen && (
          <div className="preview-fullscreen-overlay">
            <div className="fullscreen-controls-bar">
              <div className="zoom-controls">
                <button
                  className="zoom-btn"
                  onClick={() => setZoomLevel((z) => Math.max(50, z - 10))}
                >
                  –
                </button>
                <span className="zoom-percentage">{zoomLevel}%</span>
                <button
                  className="zoom-btn"
                  onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
                >
                  +
                </button>
                <button
                  className="control-icon-btn"
                  title="Undo / Reset Zoom"
                  onClick={handleUndoZoom}
                >
                  <img src={undoIcon} alt="Undo" className="control-icon-img" />
                </button>
              </div>

              <button
                className="fullscreen-close-btn"
                title="Close Fullscreen"
                onClick={toggleFullscreen}
              >
                ✕ Close
              </button>
            </div>

            <div className="fullscreen-card-container">
              {renderResumeCard()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
