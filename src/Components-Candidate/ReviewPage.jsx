import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReviewPage.css";

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

import greenTickIcon from "../assets/Create-Resume/greenTick.png";
import personalInfoIcon from "../assets/Create-Resume/personalInfo.png";
import educationIcon from "../assets/Create-Resume/education.png";
import ResumesectionIcon from "../assets/Create-Resume/ResumeSection.png";
import ATSSummaryIcon from "../assets/Create-Resume/ATS.png";
import experienceShowIcon from "../assets/Create-Resume/expShow.png";
import skillsRelatedIcon from "../assets/Create-Resume/skillsRelated.png";
import profileStrengthIcon from "../assets/Create-Resume/profileStrength.png";

const ReviewPage = () => {
  const navigate = useNavigate();

  const [zoomLevel, setZoomLevel] = useState(100);
  const [activeStep, setActiveStep] = useState(6); // Step 6 is Review
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMobileStepperOpen, setIsMobileStepperOpen] = useState(false);
  const [isMobileActionsOpen, setIsMobileActionsOpen] = useState(false);

  const stepsList = [
    { id: 1, label: "1. Personal Info" },
    { id: 2, label: "2. Experience" },
    { id: 3, label: "3. Education" },
    { id: 4, label: "4. Skills" },
    { id: 5, label: "5. Summary" },
    { id: 6, label: "6. Review" },
  ];

  const checklistData = [
    {
      title: "Personal Information",
      desc: "Name, Contact, Location and Links.",
      badge: "Completed",
      icon: personalInfoIcon,
    },
    {
      title: "Experience",
      desc: "1 experience added",
      badge: "Completed",
      icon: experienceIcon,
    },
    {
      title: "Education",
      desc: "2 education added",
      badge: "Completed",
      icon: educationIcon,
    },
    {
      title: "Skills",
      desc: "9 skills added",
      badge: "Completed",
      icon: skillsIcon,
    },
    {
      title: "Summary",
      desc: "Professional summary added",
      badge: "Completed",
      icon: contentIcon,
    },
    {
      title: "Resume sections",
      desc: "All important section included",
      badge: "Completed",
      icon: ResumesectionIcon,
    },
    {
      title: "ATS Compatibility",
      desc: "Your resume is ATS friendly",
      badge: "Good",
      icon: ATSSummaryIcon,
      isGood: true,
    },
  ];

  const suggestionsData = [
    {
      text: "Add more metrics in your experience to show impact.",
      icon: experienceShowIcon,
    },
    {
      text: "Add a few more skills related to your domain.",
      icon: skillsRelatedIcon,
    },
    {
      text: "Include a certification section to strength your profile.",
      icon: profileStrengthIcon,
    },
  ];

  const handleStepClick = (stepNumber) => {
    const routes = {
      1: "/Resume-builder/candidate/candidate/personalinfo",
      2: "/Resume-builder/candidate/candidate/experience",
      3: "/Resume-builder/candidate/candidate/education",
      4: "/Resume-builder/candidate/candidate/skills",
      5: "/Resume-builder/candidate/candidate/summary",
      6: "/Resume-builder/candidate/candidate/review",
    };

    if (routes[stepNumber]) {
      setIsMobileStepperOpen(false);
      navigate(routes[stepNumber]);
    }
  };

  const handlePreviousStep = () => {
    navigate("/Resume-builder/candidate/candidate/summary");
  };

  const handleSaveData = () => {
    alert("Resume Saved Successfully!");
  };

  const renderDocumentContent = () => (
    <div className="rp-document">
      {/* Profile Header */}
      <div className="rp-doc-top">
        <img src={ProfileImg} alt="Profile" className="rp-doc-avatar-img" />
        <div className="rp-doc-info">
          <h3 className="rp-doc-name">Ajith Akash</h3>
          <p className="rp-doc-role">Full stack Developer</p>

          {/* UPDATED CONTACT ROWS: Mail + Phone in Row 1, Location + LinkedIn in Row 2 */}
          <div className="rp-doc-contacts">
            <div className="rp-doc-contacts-row-1">
              <span>
                <img
                  src={mailIcon}
                  alt="Email"
                  className="rp-contact-img-icon"
                />{" "}
                Ajith@email.com
              </span>
              <span>
                <img
                  src={phoneIcon}
                  alt="Phone"
                  className="rp-contact-img-icon"
                />{" "}
                +91 95000 40000
              </span>
            </div>
            <div className="rp-doc-contacts-row-2">
              <span>
                <img
                  src={locationIcon}
                  alt="Location"
                  className="rp-contact-img-icon"
                />{" "}
                Bengaluru, India
              </span>
              <span>
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="rp-contact-img-icon"
                />{" "}
                linkedin.com/in/Aman
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="rp-doc-sec">
        <h4 className="rp-doc-sec-title">PROFESSIONAL SUMMARY</h4>
        <p className="rp-doc-p">
          Full Stack Developer with 3+ years of experience building responsive
          web applications using HTML, CSS, JavaScript and React.
        </p>
      </div>

      {/* Experience */}
      <div className="rp-doc-sec">
        <h4 className="rp-doc-sec-title">EXPERIENCE</h4>
        <div className="rp-doc-exp-head">
          <strong>Senior Full Stack developer</strong>
          <span>Jan 2022 - Present</span>
        </div>
        <ul className="rp-doc-ul">
          <li>
            Developed responsive web applications using React, Redux and
            Tailwind CSS.
          </li>
          <li>Collaborated with UX/UI designers and backend developers.</li>
          <li>Improved website performance by 30%.</li>
        </ul>
      </div>

      {/* Education */}
      <div className="rp-doc-sec">
        <h4 className="rp-doc-sec-title">EDUCATION</h4>
        <div className="rp-doc-exp-head">
          <strong>Bachelor of Computer Science</strong>
          <span>2016 - 2020</span>
        </div>
        <p className="rp-doc-p">Anna University</p>
      </div>

      {/* Skills */}
      <div className="rp-doc-sec">
        <h4 className="rp-doc-sec-title">SKILLS</h4>
        <div className="rp-doc-chips">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Git",
            "GitHub",
            "REST API",
            "Python",
          ].map((s, i) => (
            <span key={i} className="rp-chip-item">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="rp-wrapper">
      {/* ---------- Top Header ---------- */}
      <header className="rp-header">
        <div className="rp-header-title">
          <button
            className="rp-mobile-hamburger"
            onClick={() => setIsMobileStepperOpen(!isMobileStepperOpen)}
          >
            ☰
          </button>
          <h1 className="rp-page-title">Create New Resume</h1>
        </div>

        {/* Desktop Header Actions */}
        <div className="rp-header-actions rp-desktop-actions">
          <button className="rp-btn-save" onClick={handleSaveData}>
            Save
          </button>
          <button
            className="rp-btn-download"
            onClick={() => alert("Downloading...")}
          >
            Download
            <img
              src={downloadIconAsset}
              alt="Download"
              className="rp-action-img-icon"
            />
          </button>
        </div>

        {/* Mobile Three-Dots Action Menu */}
        <div className="rp-mobile-actions-wrapper">
          <button
            className="rp-three-dots-btn"
            onClick={() => setIsMobileActionsOpen(!isMobileActionsOpen)}
          >
            ⋮
          </button>
          {isMobileActionsOpen && (
            <div className="rp-mobile-actions-menu">
              <button
                onClick={() => {
                  setIsMobileActionsOpen(false);
                  handleSaveData();
                }}
              >
                Save
              </button>
              <button
                onClick={() => {
                  setIsMobileActionsOpen(false);
                  alert("Downloading...");
                }}
              >
                Download
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileStepperOpen && (
        <div className="rp-mobile-nav-drawer">
          {stepsList.map((step) => (
            <div
              key={step.id}
              className={`rp-drawer-item ${step.id === 6 ? "active" : ""}`}
              onClick={() => handleStepClick(step.id)}
            >
              {step.label}
            </div>
          ))}
        </div>
      )}

      {/* ---------- Stepper Nav (Desktop) ---------- */}
      <div className="rp-stepper-container rp-desktop-steps">
        <nav className="rp-stepper">
          {stepsList.map((step) => (
            <span
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              className={`rp-step-btn ${activeStep === step.id ? "rp-step-active" : ""}`}
            >
              {step.label}
            </span>
          ))}
        </nav>
      </div>

      {/* ---------- Main Layout ---------- */}
      <div className="rp-layout-grid">
        {/* Left Column */}
        <div className="rp-left-col">
          <div className="rp-title-block">
            <div>
              <h2 className="rp-main-heading">Review Your Resume</h2>
              <p className="rp-sub-heading">
                Review the details and finalize your resume.
              </p>
            </div>
            <button className="rp-btn-ai">
              <img
                src={aiSuggestIcon}
                alt="AI Suggest"
                className="rp-ai-img-icon"
              />
              AI Suggest
            </button>
          </div>

          {/* Resume Quality Score Card */}
          <div className="rp-card">
            <h3 className="rp-card-title">Resume Quality Score</h3>
            <div className="rp-quality-row">
              <div className="rp-gauge-wrapper">
                <div className="rp-gauge-circle">
                  <span className="rp-gauge-num">92</span>
                </div>
                <span className="rp-gauge-label">Excellent</span>
              </div>
              <p className="rp-card-desc">
                Great job! Your resume is strong and well-structured. Follow the
                suggestions below to make it even better.
              </p>
            </div>
          </div>

          {/* Review Checklist Card */}
          <div className="rp-card">
            <h3 className="rp-card-title">Review Checklist</h3>
            <div className="rp-checklist">
              {checklistData.map((item, idx) => (
                <div key={idx} className="rp-checklist-row">
                  <div className="rp-item-left">
                    <div className="rp-icon-box">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="rp-box-img-icon"
                      />
                    </div>
                    <div>
                      <strong className="rp-item-title">{item.title}</strong>
                      <p className="rp-item-desc">{item.desc}</p>
                    </div>
                  </div>
                  <span
                    className={
                      item.isGood
                        ? "rp-badge rp-badge-good"
                        : "rp-badge rp-badge-completed"
                    }
                  >
                    {item.badge}
                    {!item.isGood && (
                      <img
                        src={greenTickIcon}
                        alt="Tick"
                        className="rp-tick-img-icon"
                      />
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Suggestions to Improve Card */}
          <div className="rp-card">
            <h3 className="rp-card-title">Suggestions to Improve</h3>
            <div className="rp-suggestions">
              {suggestionsData.map((item, idx) => (
                <div key={idx} className="rp-suggestion-row">
                  <div className="rp-item-left">
                    <div className="rp-icon-box rp-box-warning">
                      <img
                        src={item.icon}
                        alt="Suggestion"
                        className="rp-box-img-icon"
                      />
                    </div>
                    <span className="rp-suggestion-text">{item.text}</span>
                  </div>
                  <button className="rp-btn-improve">Improve</button>
                </div>
              ))}
            </div>
          </div>

          {/* Overall Completion Card */}
          <div className="rp-card rp-completion-card">
            <h3 className="rp-card-title">Overall Completion</h3>
            <div className="rp-completion-main-row">
              <div className="rp-completion-score-block">
                <div className="rp-circle-score-wrapper">
                  <svg className="rp-progress-ring" viewBox="0 0 90 90">
                    <circle
                      stroke="#10b981"
                      strokeWidth="6"
                      fill="transparent"
                      opacity="0.2"
                      r="38"
                      cx="45"
                      cy="45"
                    />
                    <circle
                      stroke="#10b981"
                      strokeWidth="6"
                      strokeDasharray="238"
                      strokeDashoffset="20"
                      strokeLinecap="round"
                      fill="transparent"
                      r="38"
                      cx="45"
                      cy="45"
                    />
                  </svg>
                  <div className="rp-score-text">
                    <span className="rp-score-num">92</span>
                    <span className="rp-score-denom">/100</span>
                  </div>
                </div>

                <div className="rp-completion-info">
                  <p className="rp-status-badge">Good</p>
                  <p className="rp-status-desc">
                    Your resume is well-structured can be improved further.
                  </p>
                  <button className="rp-improve-resume-btn">
                    Improve Resume
                  </button>
                </div>
              </div>

              {/* Metric Cards Matched Structure */}
              <div className="rp-metrics-three-columns">
                <div
                  className="rp-metric-col"
                  onClick={() => handleStepClick(1)}
                >
                  <div className="rp-metric-col-header">
                    <img
                      src={contentIcon}
                      alt="Content"
                      className="rp-metric-asset-img"
                    />
                    <span>Content</span>
                  </div>
                  <div className="rp-metric-col-value">85%</div>
                  <div className="rp-metric-bar-bg">
                    <div
                      className="rp-metric-bar-fill rp-green-bar"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div
                  className="rp-metric-col"
                  onClick={() => handleStepClick(4)}
                >
                  <div className="rp-metric-col-header">
                    <img
                      src={skillsIcon}
                      alt="Skills"
                      className="rp-metric-asset-img"
                    />
                    <span>Skills</span>
                  </div>
                  <div className="rp-metric-col-value">78%</div>
                  <div className="rp-metric-bar-bg">
                    <div
                      className="rp-metric-bar-fill rp-green-bar"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>

                <div
                  className="rp-metric-col"
                  onClick={() => handleStepClick(2)}
                >
                  <div className="rp-metric-col-header">
                    <img
                      src={experienceIcon}
                      alt="Experience"
                      className="rp-metric-asset-img"
                    />
                    <span>Experience</span>
                  </div>
                  <div className="rp-metric-col-value">82%</div>
                  <div className="rp-metric-bar-bg">
                    <div
                      className="rp-metric-bar-fill rp-green-bar"
                      style={{ width: "82%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip Box */}
            <div className="rp-completion-tip-box">
              <img src={ideaIcon} alt="Tip" className="rp-tip-idea-icon" />
              <p className="rp-tip-text">
                <strong>Tips:</strong> Add more quantifiable achievements in
                your experience section to improve your score.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Live Preview */}
        <div className="rp-right-col">
          <div className="rp-preview-card">
            <div className="rp-preview-header">
              <h2 className="rp-preview-title">Live Preview</h2>
              <div className="rp-preview-toolbar">
                <button
                  className="rp-tool-btn"
                  onClick={() => setZoomLevel((z) => Math.max(z - 10, 50))}
                >
                  –
                </button>
                <span className="rp-zoom-val">{zoomLevel}%</span>
                <button
                  className="rp-tool-btn"
                  onClick={() => setZoomLevel((z) => Math.min(z + 10, 150))}
                >
                  +
                </button>
                <button
                  className="rp-tool-btn"
                  title="Fullscreen"
                  onClick={() => setIsFullScreen(true)}
                >
                  <img
                    src={fullScreenIcon}
                    alt="Fullscreen"
                    className="rp-tool-img-icon"
                  />
                </button>
                <button
                  className="rp-tool-btn"
                  onClick={() => setZoomLevel(100)}
                  title="Reset"
                >
                  <img
                    src={undoIcon}
                    alt="Reset"
                    className="rp-tool-img-icon"
                  />
                </button>
              </div>
            </div>

            <div className="rp-preview-body">
              <div
                className="rp-document-wrapper"
                style={{ transform: `scale(${zoomLevel / 100})` }}
              >
                {renderDocumentContent()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Fullscreen Modal View ---------- */}
      {isFullScreen && (
        <div className="rp-fullscreen-overlay">
          <div className="rp-fullscreen-header">
            <h3>Live Preview - Fullscreen</h3>
            <button
              className="rp-fullscreen-close-btn"
              onClick={() => setIsFullScreen(false)}
            >
              ✕ Close
            </button>
          </div>
          <div className="rp-fullscreen-body">
            <div className="rp-fullscreen-document-container">
              {renderDocumentContent()}
            </div>
          </div>
        </div>
      )}

      {/* ---------- Footer ---------- */}
      <footer className="rp-footer">
        <button className="rp-btn-prev" onClick={handlePreviousStep}>
          Previous
        </button>
      </footer>
    </div>
  );
};

export default ReviewPage;
