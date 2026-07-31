import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CandidateHeader from "./../Components-Candidate/CandidateHeader";
import Sidebar from "./Sidebar";
import "./PersonalInfo.css";

// Form & Resume Assets
import ProfileImg from "../assets/Create-Resume/profile.png";
import mailIcon from "../assets/Create-Resume/email.png";
import phoneIcon from "../assets/Create-Resume/phone.png";
import locationIcon from "../assets/Create-Resume/location.png";
import linkedinIcon from "../assets/Create-Resume/linkedin.png";
import aiIcon from "../assets/Create-Resume/ai.png";
import downloadIconAsset from "../assets/Create-Resume/download.png";

const PersonalInfo = () => {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(1);
  const [activeTab, setActiveTab] = useState("");
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

    if (stepNumber === 1) {
      navigate("/Resume-builder/candidate/candidate/personalinfo");
    } else if (stepNumber === 2) {
      navigate("/Resume-builder/candidate/candidate/experience");
    } else if (stepNumber === 3) {
      navigate("/Resume-builder/candidate/candidate/education");
    } else if (stepNumber === 4) {
      navigate("/Resume-builder/candidate/candidate/skills");
    } else if (stepNumber === 5) {
      navigate("/Resume-builder/candidate/candidate/review");
    }
  };

  const handleNextStep = () => {
    if (validateForm()) {
      navigate("/Resume-builder/candidate/candidate/experience");
    }
  };

  return (
    <div className="can-dashboard-page-wrapper">
      <CandidateHeader
        mobileMenuOpen={isSidebarOpen}
        setMobileMenuOpen={setIsSidebarOpen}
      />

      <div className="can-dashboard-layout">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

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
                  className={`drawer-item ${idx === 0 ? "active" : ""}`}
                  onClick={() => handleStepClick(idx + 1)}
                >
                  {stepLabel}
                </div>
              ))}
            </div>

            {/* Grid Layout Container */}
            <div className="resume-grid-layout">
              {/* Left Form */}
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

              {/* Right Live Preview */}
              <div className="resume-card-box preview-card">
                <div className="preview-header">
                  <img
                    src={ProfileImg}
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
                    <strong>Senior Full Stack developer</strong>
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
