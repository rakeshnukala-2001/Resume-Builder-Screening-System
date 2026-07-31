import React, { useState } from "react";
import "./PersonalInfo.css";

// Images Imports
import profileAvatarImg from "../assets/ai-report/profile.png";
import emailIconImg from "../assets/ai-report/email.png";
import phoneIconImg from "../assets/ai-report/phone.png";
import locationIconImg from "../assets/ai-report/location.png";
import linkedinIconImg from "../assets/ai-report/linkedin.png";
import aiSparkleIconImg from "../assets/ai-report/ai.png";
import downloadIconImg from "../assets/ai-report/download.png";

const PersonalInfo = () => {
  const [step, setStep] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActionDropdownOpen, setIsActionDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "Ajith Akash",
    jobTitle: "Full Stack Developer",
    email: "Ajith@email.com",
    phone: "+91 95000 40000",
    location: "Bengaluru, India",
    linkedin: "linkedin.com/in/aman",
    summary:
      "Full Stack Developer with 3+ years of experience building responsive web applications using HTML, CSS, JavaScript and React. Passionate about creating intuitive user interfaces and optimizing performance.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStepSelect = (stepNum) => {
    setStep(stepNum);
    setIsMenuOpen(false);
  };

  return (
    <div className="resume-page-wrapper">
      {/* Top Header Navigation */}
      <header className="resume-top-header">
        <div className="header-left-title">
          {/* Hamburger Icon */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <h2>Create a Resume</h2>
        </div>

        {/* Desktop Buttons */}
        <div className="header-action-btns desktop-only-actions">
          <button className="save-btn">Save</button>
          <button className="download-btn">
            Download
            <img
              src={downloadIconImg}
              alt="Download"
              className="download-btn-icon"
            />
          </button>
        </div>

        {/* Mobile Dropdown Button (Only 320, 375, 425px) */}
        <div className="mobile-only-dropdown-wrapper">
          <button
            className="action-dropdown-btn"
            onClick={() => setIsActionDropdownOpen(!isActionDropdownOpen)}
          >
            ▾
          </button>
          {isActionDropdownOpen && (
            <div className="action-dropdown-menu">
              <button onClick={() => setIsActionDropdownOpen(false)}>
                Save
              </button>
              <button onClick={() => setIsActionDropdownOpen(false)}>
                Download
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Nav Drawer Popup (320, 375, 425px) */}
      {isMenuOpen && (
        <div className="mobile-nav-drawer">
          <div
            className={`drawer-item ${step === 1 ? "active" : ""}`}
            onClick={() => handleStepSelect(1)}
          >
            1. Personal Info
          </div>
          <div
            className={`drawer-item ${step === 2 ? "active" : ""}`}
            onClick={() => handleStepSelect(2)}
          >
            2. Experience
          </div>
          <div
            className={`drawer-item ${step === 3 ? "active" : ""}`}
            onClick={() => handleStepSelect(3)}
          >
            3. Education
          </div>
          <div
            className={`drawer-item ${step === 4 ? "active" : ""}`}
            onClick={() => handleStepSelect(4)}
          >
            4. Skills
          </div>
          <div
            className={`drawer-item ${step === 5 ? "active" : ""}`}
            onClick={() => handleStepSelect(5)}
          >
            5. Review
          </div>
        </div>
      )}

      {/* Desktop Stepper Bar Box */}
      <div className="steps-card-box desktop-only-steps">
        <div className="resume-steps-bar">
          <div
            className={`step-item ${step === 1 ? "active" : ""}`}
            onClick={() => setStep(1)}
          >
            1. Personal Info
          </div>
          <div
            className={`step-item ${step === 2 ? "active" : ""}`}
            onClick={() => setStep(2)}
          >
            2. Experience
          </div>
          <div
            className={`step-item ${step === 3 ? "active" : ""}`}
            onClick={() => setStep(3)}
          >
            3. Education
          </div>
          <div
            className={`step-item ${step === 4 ? "active" : ""}`}
            onClick={() => setStep(4)}
          >
            4. Skills
          </div>
          <div
            className={`step-item ${step === 5 ? "active" : ""}`}
            onClick={() => setStep(5)}
          >
            5. Review
          </div>
        </div>
      </div>

      {/* Content Grid Layout */}
      <div className="resume-grid-layout">
        {/* Form Section */}
        <div className="resume-card-box form-card">
          {step === 1 && (
            <div className="form-content">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
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
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
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

              {/* AI Summary Section */}
              <div className="ai-summary-section">
                <div className="ai-summary-title">
                  <img
                    src={aiSparkleIconImg}
                    alt="AI Logo"
                    className="ai-icon"
                  />
                  <h3>AI Write My Summary</h3>
                </div>
                <label className="summary-sublabel">Professional Summary</label>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  rows="4"
                />
              </div>
            </div>
          )}

          {step > 1 && (
            <div className="placeholder-view">
              <h3>Step {step} Section</h3>
              <p>Fill details for this step.</p>
            </div>
          )}
        </div>

        {/* Resume Preview Card */}
        <div className="resume-card-box preview-card">
          <div className="preview-header">
            <img
              src={profileAvatarImg}
              alt="Avatar"
              className="profile-img-circle"
            />
            <div className="profile-details">
              <h2 className="preview-name">
                {formData.fullName || "Ajith Akash"}
              </h2>
              <p className="preview-title">
                {formData.jobTitle || "Full stack Developer"}
              </p>

              <div className="preview-contacts">
                <span>
                  <img src={emailIconImg} alt="email" /> {formData.email}
                </span>
                <span>
                  <img src={phoneIconImg} alt="phone" /> {formData.phone}
                </span>
                <span>
                  <img src={locationIconImg} alt="location" />{" "}
                  {formData.location}
                </span>
                <span>
                  <img src={linkedinIconImg} alt="linkedin" />{" "}
                  {formData.linkedin}
                </span>
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
            <div className="exp-item">
              <div className="item-header">
                <strong>Senier Full Stack developer</strong>
                <span className="item-date">Jan 2022 - Present</span>
              </div>
              <ul className="bullet-list">
                <li>
                  Developed responsive web applications using React, Redux and
                  Tailwind CSS.
                </li>
                <li>
                  Collaborated with UX/UI designers and backend developers.
                </li>
                <li>Improved website performance by 30%.</li>
              </ul>
            </div>
          </div>

          <div className="preview-section">
            <h4 className="section-title-underlined">EDUCATION</h4>
            <div className="edu-item">
              <div className="item-header">
                <strong>Bachelor of Computer Science</strong>
                <span className="item-date">2016 - 2020</span>
              </div>
              <p className="university-name">Anna University</p>
            </div>
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

      {/* Bottom Button */}
      <div className="bottom-button-wrapper">
        <button
          className="center-next-btn"
          onClick={() => setStep((prev) => Math.min(prev + 1, 5))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
