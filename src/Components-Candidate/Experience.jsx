import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Experience.css";

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
import calendarIcon from "../assets/Create-Resume/calender.png";
import removeIcon from "../assets/Create-Resume/delete.png";

const ToolbarIcon = ({ type }) => {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (type) {
    case "bold":
      return (
        <svg {...common}>
          <path d="M6 4h8a4 4 0 0 1 0 8H6z" />
          <path d="M6 12h9a4 4 0 0 1 0 8H6z" />
        </svg>
      );
    case "italic":
      return (
        <svg {...common}>
          <line x1="19" y1="4" x2="10" y2="4" />
          <line x1="14" y1="20" x2="5" y2="20" />
          <line x1="15" y1="4" x2="9" y2="20" />
        </svg>
      );
    case "underline":
      return (
        <svg {...common}>
          <path d="M6 3v7a6 6 0 0 0 12 0V3" />
          <line x1="4" y1="21" x2="20" y2="21" />
        </svg>
      );
    case "list":
      return (
        <svg {...common}>
          <line x1="9" y1="6" x2="20" y2="6" />
          <line x1="9" y1="12" x2="20" y2="12" />
          <line x1="9" y1="18" x2="20" y2="18" />
          <circle cx="4" cy="6" r="1" />
          <circle cx="4" cy="12" r="1" />
          <circle cx="4" cy="18" r="1" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11.5 4.5" />
          <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07l1.42-1.42" />
        </svg>
      );
    default:
      return null;
  }
};

const emptyExperience = () => ({
  id: Date.now() + Math.random(),
  jobTitle: "",
  companyName: "",
  employmentType: "Full-Time",
  location: "",
  startDate: "2022-01",
  endDate: "",
  currentlyWorking: true,
  responsibilities:
    "<ul><li>Developed responsive web applications using HTML, CSS, JavaScript, React and Tailwind CSS.</li><li>Collaborated with UI/UX designers and backend developers.</li><li>Integrated RESTful APIs and optimized application performance.</li></ul>",
  keyAchievements:
    "<ul><li>Improved website performance by 30% through code optimization.</li><li>Reduced page load time by 40%.</li><li>Received 'Best Performer Award' for outstanding contributions.</li></ul>",
});

const Experience = () => {
  const navigate = useNavigate();

  const [showMobileActionMenu, setShowMobileActionMenu] = useState(false);
  const [showMobileNavDrawer, setShowMobileNavDrawer] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [errors, setErrors] = useState({});

  const [personalInfo] = useState(() => {
    const saved = localStorage.getItem("resume_personal_info");
    return saved
      ? JSON.parse(saved)
      : {
          fullName: "Ajith Akash",
          jobTitle: "Full Stack Developer",
          email: "Ajith@email.com",
          phone: "+91 95000 40000",
          location: "Bengaluru, India",
          linkedin: "linkedin.com/in/Aman",
          summary:
            "Full Stack Developer with 3+ years of experience building responsive web applications using HTML, CSS, JavaScript and React. Passionate about creating intuitive user interfaces and optimizing performance.",
        };
  });

  const [experiences, setExperiences] = useState(() => {
    const saved = localStorage.getItem("resume_experience");
    return saved ? JSON.parse(saved) : [emptyExperience()];
  });

  const editorRefs = useRef({});

  const handleChange = (id, field, value) => {
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    );
    if (errors[`${id}-${field}`]) {
      setErrors((prev) => ({ ...prev, [`${id}-${field}`]: false }));
    }
  };

  const handleEditorInput = (id, field, e) => {
    handleChange(id, field, e.currentTarget.innerHTML);
  };

  const applyFormat = (id, field, command) => {
    const key = `${id}-${field}`;
    editorRefs.current[key]?.focus();
    if (command === "createLink") {
      const url = window.prompt("Enter URL:");
      if (!url) return;
      document.execCommand(command, false, url);
    } else {
      document.execCommand(command);
    }
    const el = editorRefs.current[key];
    if (el) handleChange(id, field, el.innerHTML);
  };

  const validateForm = () => {
    const newErrors = {};
    experiences.forEach((exp) => {
      if (!exp.jobTitle.trim()) newErrors[`${exp.id}-jobTitle`] = true;
      if (!exp.companyName.trim()) newErrors[`${exp.id}-companyName`] = true;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddExperience = () => {
    setExperiences((prev) => [...prev, emptyExperience()]);
  };

  const handleRemoveExperience = (id) => {
    setExperiences((prev) =>
      prev.length > 1 ? prev.filter((exp) => exp.id !== id) : prev,
    );
  };

  const handleSaveData = () => {
    if (validateForm()) {
      localStorage.setItem("resume_experience", JSON.stringify(experiences));
      alert("Experience Saved Successfully!");
    }
  };

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
      setShowMobileNavDrawer(false);
      navigate(routes[stepNumber]);
    }
  };

  const handleNextStep = () => {
    if (validateForm()) {
      localStorage.setItem("resume_experience", JSON.stringify(experiences));
      navigate("/Resume-builder/candidate/candidate/education");
    }
  };

  const handlePreviousStep = () => {
    localStorage.setItem("resume_experience", JSON.stringify(experiences));
    navigate("/Resume-builder/candidate/candidate/personalinfo");
  };

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);
  const handleUndoZoom = () => setZoomLevel(100);

  const formatDateLabel = (val, currentlyWorking, isEnd) => {
    if (isEnd && currentlyWorking) return "Present";
    if (!val) return "—";
    const [year, month] = val.split("-");
    if (!year || !month) return val;
    const dateObj = new Date(year, month - 1);
    return dateObj.toLocaleString("en-US", { month: "short", year: "numeric" });
  };

  const renderResumeCard = () => (
    <div
      className="exp-resume-card-box exp-preview-card"
      style={{
        transform: `scale(${zoomLevel / 100})`,
        transformOrigin: "top center",
      }}
    >
      <div className="exp-preview-header">
        <img
          src={ProfileImg}
          alt="Profile"
          className="exp-profile-img-circle"
        />
        <div className="exp-preview-header-info">
          <h3 className="exp-preview-name">
            {personalInfo.fullName || "Ajith Akash"}
          </h3>
          <p className="exp-preview-title">
            {personalInfo.jobTitle || "Full Stack Developer"}
          </p>
          <div className="exp-preview-contacts">
            <button className="exp-contact-asset-btn">
              <img
                src={mailIcon}
                alt="email"
                className="exp-preview-contact-icon"
              />
              <span>{personalInfo.email}</span>
            </button>
            <button className="exp-contact-asset-btn">
              <img
                src={phoneIcon}
                alt="phone"
                className="exp-preview-contact-icon"
              />
              <span>{personalInfo.phone}</span>
            </button>
            <button className="exp-contact-asset-btn">
              <img
                src={locationIcon}
                alt="location"
                className="exp-preview-contact-icon"
              />
              <span>{personalInfo.location}</span>
            </button>
            <button className="exp-contact-asset-btn">
              <img
                src={linkedinIcon}
                alt="linkedin"
                className="exp-preview-contact-icon"
              />
              <span>{personalInfo.linkedin}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="exp-preview-thick-hr"></div>

      <div className="exp-preview-section">
        <h4 className="exp-section-title-underlined">PROFESSIONAL SUMMARY</h4>
        <p className="exp-preview-summary-text">{personalInfo.summary}</p>
      </div>

      <div className="exp-preview-section">
        <h4 className="exp-section-title-underlined">EXPERIENCE</h4>
        {experiences.map((exp) => (
          <div key={exp.id} className="exp-preview-experience-block">
            <div className="exp-item-header">
              <strong>
                {exp.jobTitle || "Senior Full Stack developer"}
                {exp.companyName ? ` · ${exp.companyName}` : ""}
              </strong>
              <span className="exp-item-date">
                {formatDateLabel(exp.startDate)} -{" "}
                {formatDateLabel(exp.endDate, exp.currentlyWorking, true)}
              </span>
            </div>
            {exp.location && (
              <p className="exp-preview-exp-location">{exp.location}</p>
            )}
            <div
              className="exp-bullet-list"
              dangerouslySetInnerHTML={{ __html: exp.responsibilities }}
            />
            {exp.keyAchievements && (
              <div
                className="exp-bullet-list exp-achievements"
                dangerouslySetInnerHTML={{ __html: exp.keyAchievements }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="exp-preview-section">
        <h4 className="exp-section-title-underlined">EDUCATION</h4>
        <div className="exp-item-header">
          <strong>Bachelor of Computer Science</strong>
          <span className="exp-item-date">2016 - 2020</span>
        </div>
        <p className="exp-university-name">Anna University</p>
      </div>

      <div className="exp-preview-section">
        <h4 className="exp-section-title-underlined">SKILLS</h4>
        <div className="exp-skills-badge-list">
          <span className="exp-skill-chip">HTML</span>
          <span className="exp-skill-chip">CSS</span>
          <span className="exp-skill-chip">JavaScript</span>
          <span className="exp-skill-chip">React</span>
          <span className="exp-skill-chip">Tailwind CSS</span>
          <span className="exp-skill-chip">Git</span>
          <span className="exp-skill-chip">GitHub</span>
          <span className="exp-skill-chip">REST API</span>
          <span className="exp-skill-chip">Python</span>
        </div>
      </div>
    </div>
  );

  const renderEditor = (exp, field, label) => {
    const key = `${exp.id}-${field}`;
    return (
      <div className="exp-form-group exp-mb-0">
        <label>{label}</label>
        <div className="exp-richtext-box">
          <div className="exp-richtext-toolbar">
            <button
              type="button"
              onClick={() => applyFormat(exp.id, field, "bold")}
            >
              <ToolbarIcon type="bold" />
            </button>
            <button
              type="button"
              onClick={() => applyFormat(exp.id, field, "italic")}
            >
              <ToolbarIcon type="italic" />
            </button>
            <button
              type="button"
              onClick={() => applyFormat(exp.id, field, "underline")}
            >
              <ToolbarIcon type="underline" />
            </button>
            <button
              type="button"
              onClick={() => applyFormat(exp.id, field, "insertUnorderedList")}
            >
              <ToolbarIcon type="list" />
            </button>
            <button
              type="button"
              onClick={() => applyFormat(exp.id, field, "createLink")}
            >
              <ToolbarIcon type="link" />
            </button>
          </div>
          <div
            ref={(el) => (editorRefs.current[key] = el)}
            className="exp-richtext-editable"
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => handleEditorInput(exp.id, field, e)}
            dangerouslySetInnerHTML={{ __html: exp[field] }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="exp-page-wrapper">
      <div className="exp-layout">
        <main className="exp-main">
          <div className="exp-resume-wrapper">
            <div className="exp-top-header">
              <div className="exp-header-title">
                <button
                  className="exp-mobile-hamburger"
                  onClick={() => setShowMobileNavDrawer(!showMobileNavDrawer)}
                >
                  ☰
                </button>
                <h2>Create New Resume</h2>
              </div>

              <div className="exp-action-btns exp-desktop-actions">
                <button className="exp-save-btn" onClick={handleSaveData}>
                  Save
                </button>
                <button
                  className="exp-download-btn"
                  onClick={() => alert("Downloading Resume...")}
                >
                  Download
                  <img
                    src={downloadIconAsset}
                    alt="download"
                    className="exp-download-icon"
                  />
                </button>
              </div>

              <div className="exp-mobile-dropdown-wrapper">
                <button
                  className="exp-action-dropdown-btn"
                  onClick={() => setShowMobileActionMenu(!showMobileActionMenu)}
                >
                  ⋮
                </button>
                {showMobileActionMenu && (
                  <div className="exp-action-dropdown-menu">
                    <button
                      onClick={() => {
                        setShowMobileActionMenu(false);
                        handleSaveData();
                      }}
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setShowMobileActionMenu(false);
                        alert("Downloading...");
                      }}
                    >
                      Download
                    </button>
                  </div>
                )}
              </div>
            </div>

            {showMobileNavDrawer && (
              <div className="exp-mobile-nav-drawer">
                {[
                  "1. Personal Info",
                  "2. Experience",
                  "3. Education",
                  "4. Skills",
                  "5. Summary",
                  "6. Review",
                ].map((stepLabel, idx) => (
                  <div
                    key={idx}
                    className={`exp-drawer-item ${idx === 1 ? "active" : ""}`}
                    onClick={() => handleStepClick(idx + 1)}
                  >
                    {stepLabel}
                  </div>
                ))}
              </div>
            )}

            <div className="exp-steps-card-box exp-desktop-steps">
              <div className="exp-steps-bar">
                <span
                  className="exp-step-item"
                  onClick={() => handleStepClick(1)}
                >
                  1. Personal Info
                </span>
                <span
                  className="exp-step-item active"
                  onClick={() => handleStepClick(2)}
                >
                  2. Experience
                </span>
                <span
                  className="exp-step-item"
                  onClick={() => handleStepClick(3)}
                >
                  3. Education
                </span>
                <span
                  className="exp-step-item"
                  onClick={() => handleStepClick(4)}
                >
                  4. Skills
                </span>
                <span
                  className="exp-step-item"
                  onClick={() => handleStepClick(5)}
                >
                  5. Summary
                </span>
                <span
                  className="exp-step-item"
                  onClick={() => handleStepClick(6)}
                >
                  6. Review
                </span>
              </div>
            </div>

            <div className="exp-grid-layout">
              {/* LEFT COLUMN */}
              <div className="exp-left-column">
                <div className="exp-resume-card-box exp-form-card">
                  <div className="exp-form-card-header">
                    <h3>Experience Details</h3>
                    <button
                      className="exp-ai-suggest-btn"
                      onClick={() => alert("AI Suggesting improvements...")}
                    >
                      <img
                        src={aiSuggestIcon}
                        alt="AI"
                        className="exp-ai-btn-icon"
                      />{" "}
                      AI Suggest
                    </button>
                  </div>

                  {experiences.map((exp, idx) => (
                    <div className="exp-experience-block" key={exp.id}>
                      <h4 className="exp-experience-block-title">
                        Work Experience #{idx + 1}
                      </h4>

                      <div className="exp-form-group">
                        <label>Job Title</label>
                        <input
                          type="text"
                          placeholder="e.g., Frontend Developer"
                          className={
                            errors[`${exp.id}-jobTitle`]
                              ? "exp-input-error"
                              : ""
                          }
                          value={exp.jobTitle}
                          onChange={(e) =>
                            handleChange(exp.id, "jobTitle", e.target.value)
                          }
                        />
                      </div>

                      <div className="exp-form-group">
                        <label>Company Name</label>
                        <input
                          type="text"
                          placeholder="e.g., Google"
                          className={
                            errors[`${exp.id}-companyName`]
                              ? "exp-input-error"
                              : ""
                          }
                          value={exp.companyName}
                          onChange={(e) =>
                            handleChange(exp.id, "companyName", e.target.value)
                          }
                        />
                      </div>

                      <div className="exp-form-row-two">
                        <div className="exp-form-group">
                          <label>Employment Type</label>
                          <select
                            value={exp.employmentType}
                            onChange={(e) =>
                              handleChange(
                                exp.id,
                                "employmentType",
                                e.target.value,
                              )
                            }
                          >
                            <option>Full-Time</option>
                            <option>Part-Time</option>
                            <option>Internship</option>
                            <option>Contract</option>
                            <option>Freelance</option>
                          </select>
                        </div>
                        <div className="exp-form-group">
                          <label>Location</label>
                          <input
                            type="text"
                            placeholder="Bengaluru, India"
                            value={exp.location}
                            onChange={(e) =>
                              handleChange(exp.id, "location", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="exp-date-checkbox-wrapper">
                        <div className="exp-dates-grid">
                          <div className="exp-form-group exp-date-field">
                            <label>Start Date</label>
                            <div className="exp-date-input-wrapper">
                              <img
                                src={calendarIcon}
                                alt=""
                                className="exp-calendar-icon"
                              />
                              <input
                                type="month"
                                value={exp.startDate || "2022-01"}
                                onChange={(e) =>
                                  handleChange(
                                    exp.id,
                                    "startDate",
                                    e.target.value,
                                  )
                                }
                              />
                            </div>
                          </div>

                          <div className="exp-form-group exp-date-field">
                            <label>End Date</label>
                            {exp.currentlyWorking ? (
                              <div className="exp-date-input-wrapper exp-present-field">
                                <span className="exp-present-text">
                                  Present
                                </span>
                                <img
                                  src={calendarIcon}
                                  alt=""
                                  className="exp-calendar-icon exp-right-side"
                                />
                              </div>
                            ) : (
                              <div className="exp-date-input-wrapper">
                                <img
                                  src={calendarIcon}
                                  alt=""
                                  className="exp-calendar-icon"
                                />
                                <input
                                  type="month"
                                  value={exp.endDate}
                                  onChange={(e) =>
                                    handleChange(
                                      exp.id,
                                      "endDate",
                                      e.target.value,
                                    )
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        <label className="exp-currently-working-check">
                          <input
                            type="checkbox"
                            checked={exp.currentlyWorking}
                            onChange={(e) =>
                              handleChange(
                                exp.id,
                                "currentlyWorking",
                                e.target.checked,
                              )
                            }
                          />
                          <span>I currently work here</span>
                        </label>
                      </div>

                      {renderEditor(
                        exp,
                        "responsibilities",
                        "Responsibilities",
                      )}
                      <div className="exp-editor-spacer" />
                      {renderEditor(exp, "keyAchievements", "Key Achievements")}
                    </div>
                  ))}

                  <div className="exp-actions-row">
                    <button
                      className="exp-add-btn"
                      onClick={handleAddExperience}
                    >
                      + Add Another Experience
                    </button>
                    <button
                      className="exp-remove-btn"
                      onClick={() =>
                        handleRemoveExperience(
                          experiences[experiences.length - 1].id,
                        )
                      }
                      disabled={experiences.length <= 1}
                    >
                      <img
                        src={removeIcon}
                        alt=""
                        className="exp-remove-icon"
                      />
                      <span>Remove Experience</span>
                    </button>
                  </div>
                </div>

                {/* EXP OVERALL COMPLETION CARD (EXACT VALUES & MATCHED STYLES) */}
                <div className="exp-completion-card">
                  <h4 className="exp-completion-title">Overall Completion</h4>

                  <div className="exp-completion-main-row">
                    <div className="exp-completion-score-block">
                      <div className="exp-circle-score-wrapper">
                        <svg className="exp-progress-ring" viewBox="0 0 90 90">
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
                            strokeDashoffset="104"
                            strokeLinecap="round"
                            fill="transparent"
                            r="38"
                            cx="45"
                            cy="45"
                          />
                        </svg>
                        <div className="exp-score-text">
                          <span className="exp-score-num">56</span>
                          <span className="exp-score-denom">/100</span>
                        </div>
                      </div>

                      <div className="exp-completion-info">
                        <p className="exp-status-badge">Good</p>
                        <p className="exp-status-desc">
                          Your resume is well-structured can be improved
                          further.
                        </p>
                        <button className="exp-improve-resume-btn">
                          Improve Resume
                        </button>
                      </div>
                    </div>

                    <div className="exp-metrics-three-columns">
                      <div
                        className="exp-metric-col"
                        onClick={() => handleStepClick(1)}
                      >
                        <div className="exp-metric-col-header">
                          <img
                            src={contentIcon}
                            alt="Content"
                            className="exp-metric-asset-img"
                          />
                          <span>Content</span>
                        </div>
                        <div className="exp-metric-col-value">55%</div>
                        <div className="exp-metric-bar-bg">
                          <div
                            className="exp-metric-bar-fill exp-green-bar"
                            style={{ width: "55%" }}
                          ></div>
                        </div>
                      </div>

                      <div
                        className="exp-metric-col"
                        onClick={() => handleStepClick(4)}
                      >
                        <div className="exp-metric-col-header">
                          <img
                            src={skillsIcon}
                            alt="Skills"
                            className="exp-metric-asset-img"
                          />
                          <span>Skills</span>
                        </div>
                        <div className="exp-metric-col-value">40%</div>
                        <div className="exp-metric-bar-bg">
                          <div
                            className="exp-metric-bar-fill exp-green-bar"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                      </div>

                      <div
                        className="exp-metric-col"
                        onClick={() => handleStepClick(2)}
                      >
                        <div className="exp-metric-col-header">
                          <img
                            src={experienceIcon}
                            alt="Experience"
                            className="exp-metric-asset-img"
                          />
                          <span>Experience</span>
                        </div>
                        <div className="exp-metric-col-value">82%</div>
                        <div className="exp-metric-bar-bg">
                          <div
                            className="exp-metric-bar-fill exp-green-bar"
                            style={{ width: "82%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="exp-completion-tip-box">
                    <img
                      src={ideaIcon}
                      alt="Tip"
                      className="exp-tip-idea-icon"
                    />
                    <p className="exp-tip-text">
                      <strong>Tips:</strong> Add more quantifiable achievements
                      in your experience section to improve your score.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="exp-preview-container">
                <div className="exp-preview-top-controls">
                  <span className="exp-preview-heading">Live Preview</span>
                  <div className="exp-zoom-controls">
                    <button
                      className="exp-zoom-btn"
                      onClick={() => setZoomLevel((z) => Math.max(50, z - 10))}
                    >
                      –
                    </button>
                    <span className="exp-zoom-percentage">{zoomLevel}%</span>
                    <button
                      className="exp-zoom-btn"
                      onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
                    >
                      +
                    </button>
                    <button
                      className="exp-control-icon-btn"
                      title="Full Screen"
                      onClick={toggleFullscreen}
                    >
                      <img
                        src={fullScreenIcon}
                        alt="Fullscreen"
                        className="exp-control-icon-img"
                      />
                    </button>
                    <button
                      className="exp-control-icon-btn"
                      title="Undo"
                      onClick={handleUndoZoom}
                    >
                      <img
                        src={undoIcon}
                        alt="Undo"
                        className="exp-control-icon-img"
                      />
                    </button>
                  </div>
                </div>

                {renderResumeCard()}
              </div>
            </div>

            <div className="exp-bottom-btn-wrapper">
              <button
                className="exp-center-prev-btn"
                onClick={handlePreviousStep}
              >
                Previous
              </button>
              <button className="exp-center-next-btn" onClick={handleNextStep}>
                Next
              </button>
            </div>
          </div>
        </main>

        {isFullscreen && (
          <div className="exp-fullscreen-overlay">
            <div className="exp-fullscreen-controls">
              <div className="exp-zoom-controls">
                <button
                  className="exp-zoom-btn"
                  onClick={() => setZoomLevel((z) => Math.max(50, z - 10))}
                >
                  –
                </button>
                <span className="exp-zoom-percentage">{zoomLevel}%</span>
                <button
                  className="exp-zoom-btn"
                  onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
                >
                  +
                </button>
                <button
                  className="exp-control-icon-btn"
                  title="Undo"
                  onClick={handleUndoZoom}
                >
                  <img
                    src={undoIcon}
                    alt="Undo"
                    className="exp-control-icon-img"
                  />
                </button>
              </div>
              <button
                className="exp-fullscreen-close-btn"
                onClick={toggleFullscreen}
              >
                ✕ Close
              </button>
            </div>
            <div className="exp-fullscreen-card-container">
              {renderResumeCard()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
