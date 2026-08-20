import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Education.css";

// Assets
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

const Education = () => {
  const navigate = useNavigate();

  const [showThreeDotsMenu, setShowThreeDotsMenu] = useState(false);
  const [showMobileStepperDrawer, setShowMobileStepperDrawer] = useState(false);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);

  const [education1, setEducation1] = useState({
    degree: "Bachelor of Computer Science",
    field: "Computer Science",
    standing: "First Class",
    institution: "Sethu Institute Of Technology",
    location: "Chennai, Tamil Nadu",
    startYear: "2016",
    endYear: "2020",
    grade: "8.69 CGPA",
    description:
      "• Secured distinction in Web Technologies and Database Management.\n• Participated in National Level Hackathon 2021.",
  });

  const [education2, setEducation2] = useState({
    school: "Higher Secondary(12th)",
    field: "Science (PCM)",
    board: "State Board",
    institution: "Government State Board",
    location: "Chennai, Tamil Nadu",
    startYear: "2015",
    endYear: "2016",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isFullScreen) {
        setIsFullScreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullScreen]);

  const handleEducation1Change = (e) => {
    const { name, value } = e.target;
    setEducation1((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleEducation2Change = (e) => {
    const { name, value } = e.target;
    const errorKey = `education2_${name}`;
    setEducation2((prev) => ({ ...prev, [name]: value }));
    if (errors[errorKey]) {
      setErrors((prev) => ({ ...prev, [errorKey]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!education1.degree.trim()) newErrors.degree = true;
    if (!education1.field.trim()) newErrors.field = true;
    if (!education1.standing.trim()) newErrors.standing = true;
    if (!education1.institution.trim()) newErrors.institution = true;
    if (!education1.location.trim()) newErrors.location = true;
    if (!education1.startYear.trim()) newErrors.startYear = true;
    if (!education1.endYear.trim()) newErrors.endYear = true;
    if (!education1.grade.trim()) newErrors.grade = true;

    if (!education2.school.trim()) newErrors.education2_school = true;
    if (!education2.field.trim()) newErrors.education2_field = true;
    if (!education2.board.trim()) newErrors.education2_board = true;
    if (!education2.institution.trim()) newErrors.education2_institution = true;
    if (!education2.location.trim()) newErrors.education2_location = true;
    if (!education2.startYear.trim()) newErrors.startYear = true;
    if (!education2.endYear.trim()) newErrors.endYear = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      alert("Please fill in all mandatory fields before proceeding.");
      return false;
    }
    return true;
  };

  const handleStepClick = (step) => {
    const routes = {
      1: "/Resume-builder/candidate/candidate/personalinfo",
      2: "/Resume-builder/candidate/candidate/experience",
      3: "/Resume-builder/candidate/candidate/education",
      4: "/Resume-builder/candidate/candidate/skills",
      5: "/Resume-builder/candidate/candidate/summary",
      6: "/Resume-builder/candidate/candidate/review",
    };
    if (routes[step]) navigate(routes[step]);
    setShowMobileStepperDrawer(false);
  };

  const handlePrevious = () => {
    navigate("/Resume-builder/candidate/candidate/experience");
  };

  const handleNext = () => {
    if (validateForm()) {
      navigate("/Resume-builder/candidate/candidate/skills");
    }
  };

  const handleSave = () => {
    alert("Education details saved successfully.");
    setShowThreeDotsMenu(false);
  };

  const handleDownload = () => {
    alert("Download option selected.");
    setShowThreeDotsMenu(false);
  };

  const handleAddEducation = () => {
    alert("Add Education option selected.");
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 10, 150));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 10, 50));
  const handleResetZoom = () => setZoomLevel(100);

  const renderPreviewCard = () => (
    <div
      className="edu-sec-preview-card"
      style={{
        transform: `scale(${zoomLevel / 100})`,
        transformOrigin: "top center",
      }}
    >
      <div className="edu-sec-preview-profile">
        <div className="edu-sec-profile-image">
          <img src={ProfileImg} alt="Profile" />
        </div>
        <div className="edu-sec-profile-details">
          <h2>Ajith Akash</h2>
          <h3>Full stack Developer</h3>
          <div className="edu-sec-contact-grid">
            <span>
              <img src={mailIcon} alt="" />
              Ajith@email.com
            </span>
            <span>
              <img src={phoneIcon} alt="" />
              +91 95000 40000
            </span>
            <span>
              <img src={locationIcon} alt="" />
              Bengaluru, India
            </span>
            <span>
              <img src={linkedinIcon} alt="" />
              linkedin.com/in/Aman
            </span>
          </div>
        </div>
      </div>

      <div className="edu-sec-preview-divider"></div>

      <div className="edu-sec-preview-section">
        <h4>PROFESSIONAL SUMMARY</h4>
        <p>
          Full Stack Developer with 3+ years of experience building responsive
          web applications using HTML, CSS, JavaScript and React. Passionate
          about creating intuitive user interfaces and optimizing performance.
        </p>
      </div>

      <div className="edu-sec-preview-section">
        <h4>EXPERIENCE</h4>
        <div className="edu-sec-preview-row">
          <strong>Senier Full Stack developer</strong>
          <span>Jan 2022 - Present</span>
        </div>
        <ul>
          <li>
            Developed responsive web applications using React, Redux and
            Tailwind CSS.
          </li>
          <li>Collaborated with UX/UI designers and backend developers.</li>
          <li>Improved website performance by 30%.</li>
        </ul>
      </div>

      <div className="edu-sec-preview-section">
        <h4>EDUCATION</h4>
        <div className="edu-sec-preview-row">
          <strong>{education1.degree || "Bachelor of Computer Science"}</strong>
          <span>
            {education1.startYear || "2016"} - {education1.endYear || "2020"}
          </span>
        </div>
        <p className="edu-sec-university">
          {education1.institution || "Anna University"}
        </p>
      </div>

      <div className="edu-sec-preview-section">
        <h4>SKILLS</h4>
        <div className="edu-sec-skill-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Tailwind CSS</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>REST API</span>
          <span>Python</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="edu-sec-page-wrapper">
      <div className="edu-sec-resume-wrapper">
        {/* TOP BAR ACTION HEADER */}
        <div className="edu-sec-top-header">
          <div className="edu-sec-title-area">
            <button
              type="button"
              className="edu-sec-mobile-toggle-btn"
              onClick={() =>
                setShowMobileStepperDrawer(!showMobileStepperDrawer)
              }
            >
              ☰
            </button>
            <h2>Create New Resume</h2>
          </div>

          <div className="edu-sec-header-actions">
            <button
              type="button"
              className="edu-sec-save-btn"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="edu-sec-download-btn"
              onClick={handleDownload}
            >
              Download
              <img
                src={downloadIconAsset}
                alt="download"
                className="edu-sec-action-icon"
              />
            </button>
          </div>

          <div className="edu-sec-dropdown-wrapper">
            <button
              type="button"
              className="edu-sec-dropdown-btn"
              onClick={() => setShowThreeDotsMenu(!showThreeDotsMenu)}
            >
              ⋮
            </button>

            {showThreeDotsMenu && (
              <div className="edu-sec-dropdown-menu">
                <button type="button" onClick={handleSave}>
                  Save
                </button>
                <button type="button" onClick={handleDownload}>
                  Download
                </button>
              </div>
            )}
          </div>
        </div>

        {/* STEPPER */}
        <div className="edu-sec-stepper">
          <span onClick={() => handleStepClick(1)}>1. Personal Info</span>
          <span onClick={() => handleStepClick(2)}>2. Experience</span>
          <span className="active" onClick={() => handleStepClick(3)}>
            3. Education
          </span>
          <span onClick={() => handleStepClick(4)}>4. Skills</span>
          <span onClick={() => handleStepClick(5)}>5. Summary</span>
          <span onClick={() => handleStepClick(6)}>6. Review</span>
        </div>

        {showMobileStepperDrawer && (
          <div className="edu-sec-drawer">
            <div
              className="edu-sec-drawer-item"
              onClick={() => handleStepClick(1)}
            >
              1. Personal Info
            </div>
            <div
              className="edu-sec-drawer-item"
              onClick={() => handleStepClick(2)}
            >
              2. Experience
            </div>
            <div
              className="edu-sec-drawer-item active"
              onClick={() => handleStepClick(3)}
            >
              3. Education
            </div>
            <div
              className="edu-sec-drawer-item"
              onClick={() => handleStepClick(4)}
            >
              4. Skills
            </div>
            <div
              className="edu-sec-drawer-item"
              onClick={() => handleStepClick(5)}
            >
              5. Summary
            </div>
            <div
              className="edu-sec-drawer-item"
              onClick={() => handleStepClick(6)}
            >
              6. Review
            </div>
          </div>
        )}

        {/* MAIN CONTENT LAYOUT */}
        <div className="edu-sec-main-layout">
          {/* LEFT FORM COLUMN */}
          <div className="edu-sec-form-column">
            {/* TOP SECTION: EDUCATION DETAILS FORM */}
            <div className="edu-sec-form-card">
              <div className="edu-sec-card-top-row">
                <h3>Education Details</h3>
                <button
                  type="button"
                  className="edu-sec-ai-btn"
                  onClick={() => alert("AI Suggest option selected.")}
                >
                  <img
                    src={aiSuggestIcon}
                    alt="AI"
                    className="edu-sec-ai-icon"
                  />
                  AI Suggest
                </button>
              </div>

              {/* EDUCATION 1 */}
              <div className="edu-sec-block">
                <h4 className="edu-sec-block-title">Education #1</h4>
                <div className="edu-sec-grid">
                  <div className="edu-sec-field">
                    <label>
                      Degree/Qualification <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="degree"
                      value={education1.degree}
                      onChange={handleEducation1Change}
                      className={errors.degree ? "edu-sec-input-error" : ""}
                      placeholder="Bachelor of Computer Science"
                    />
                  </div>

                  <div className="edu-sec-field">
                    <label>
                      Field Of Study <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="field"
                      value={education1.field}
                      onChange={handleEducation1Change}
                      className={errors.field ? "edu-sec-input-error" : ""}
                      placeholder="Computer Science"
                    />
                  </div>

                  <div className="edu-sec-field">
                    <label>
                      Academic Standing <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="standing"
                      value={education1.standing}
                      onChange={handleEducation1Change}
                      className={errors.standing ? "edu-sec-input-error" : ""}
                      placeholder="First Class"
                    />
                  </div>

                  <div className="edu-sec-field edu-sec-wide-field">
                    <label>
                      Institution / University <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="institution"
                      value={education1.institution}
                      onChange={handleEducation1Change}
                      className={
                        errors.institution ? "edu-sec-input-error" : ""
                      }
                      placeholder="Sethu Institute Of Technology"
                    />
                  </div>

                  <div className="edu-sec-field">
                    <label>
                      Location <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={education1.location}
                      onChange={handleEducation1Change}
                      className={errors.location ? "edu-sec-input-error" : ""}
                      placeholder="Chennai, Tamil Nadu"
                    />
                  </div>

                  <div className="edu-sec-field">
                    <label>
                      Start Year <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="startYear"
                      value={education1.startYear}
                      onChange={handleEducation1Change}
                      className={errors.startYear ? "edu-sec-input-error" : ""}
                      placeholder="2016"
                    />
                  </div>

                  <div className="edu-sec-field">
                    <label>
                      End Year <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="endYear"
                      value={education1.endYear}
                      onChange={handleEducation1Change}
                      className={errors.endYear ? "edu-sec-input-error" : ""}
                      placeholder="2020"
                    />
                  </div>

                  <div className="edu-sec-field">
                    <label>
                      Grades/Percentage <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="grade"
                      value={education1.grade}
                      onChange={handleEducation1Change}
                      className={errors.grade ? "edu-sec-input-error" : ""}
                      placeholder="8.69 CGPA"
                    />
                  </div>
                </div>

                <div className="edu-sec-textarea-field">
                  <label>
                    Grades/Percentage <span>(optional)</span>
                  </label>
                  <textarea
                    name="description"
                    value={education1.description}
                    onChange={handleEducation1Change}
                    placeholder="Add achievements..."
                  />
                </div>
              </div>

              <div className="edu-sec-divider"></div>

              {/* EDUCATION 2 */}
              <div className="edu-sec-block">
                <h4 className="edu-sec-block-title">Education #2</h4>
                <div className="edu-sec-grid">
                  <div className="edu-sec-field">
                    <label>
                      School Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="school"
                      value={education2.school}
                      onChange={handleEducation2Change}
                      className={
                        errors.education2_school ? "edu-sec-input-error" : ""
                      }
                      placeholder="Higher Secondary(12th)"
                    />
                  </div>

                  <div className="edu-sec-field">
                    <label>
                      Field Of Study <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="field"
                      value={education2.field}
                      onChange={handleEducation2Change}
                      className={
                        errors.education2_field ? "edu-sec-input-error" : ""
                      }
                      placeholder="Science (PCM)"
                    />
                  </div>

                  <div className="edu-sec-field">
                    <label>
                      Board <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="board"
                      value={education2.board}
                      onChange={handleEducation2Change}
                      className={
                        errors.education2_board ? "edu-sec-input-error" : ""
                      }
                      placeholder="State Board"
                    />
                  </div>

                  <div className="edu-sec-field edu-sec-wide-field">
                    <label>
                      Institution / Board <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="institution"
                      value={education2.institution}
                      onChange={handleEducation2Change}
                      className={
                        errors.education2_institution
                          ? "edu-sec-input-error"
                          : ""
                      }
                      placeholder="Government State Board"
                    />
                  </div>

                  <div className="edu-sec-field">
                    <label>
                      Location <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={education2.location}
                      onChange={handleEducation2Change}
                      className={
                        errors.education2_location ? "edu-sec-input-error" : ""
                      }
                      placeholder="Chennai, Tamil Nadu"
                    />
                  </div>

                  <div className="edu-sec-field">
                    <label>
                      Start Year <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="startYear"
                      value={education2.startYear}
                      onChange={handleEducation2Change}
                      className={
                        errors.education2_startYear ? "edu-sec-input-error" : ""
                      }
                      placeholder="2015"
                    />
                  </div>

                  <div className="edu-sec-field">
                    <label>
                      End Year <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="endYear"
                      value={education2.endYear}
                      onChange={handleEducation2Change}
                      className={
                        errors.education2_endYear ? "edu-sec-input-error" : ""
                      }
                      placeholder="2016"
                    />
                  </div>

                  <div className="edu-sec-add-wrapper">
                    <button
                      type="button"
                      className="edu-sec-add-btn"
                      onClick={handleAddEducation}
                    >
                      <span>+</span> Add Education
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM SECTION: OVERALL COMPLETION CARD */}
            <div className="edu-sec-comp-card">
              <h3 className="edu-sec-comp-title">Overall Completion</h3>

              <div className="edu-sec-comp-main-row">
                <div className="edu-sec-comp-score-block">
                  <div className="edu-sec-comp-circle-wrapper">
                    <svg className="edu-sec-comp-ring" viewBox="0 0 36 36">
                      <path
                        className="edu-sec-comp-circle-bg"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="edu-sec-comp-circle-stroke"
                        strokeDasharray="35, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="edu-sec-comp-score-text">
                      <span className="edu-sec-comp-num">35</span>
                      <span className="edu-sec-comp-denom">/100</span>
                    </div>
                  </div>

                  <div className="edu-sec-comp-info">
                    <h4 className="edu-sec-comp-badge">Good</h4>
                    <p className="edu-sec-comp-desc">
                      Your resume is well-structured and can be improved
                      further.
                    </p>
                    <button type="button" className="edu-sec-comp-btn">
                      Improve Resume
                    </button>
                  </div>
                </div>

                <div className="edu-sec-comp-metrics-row">
                  <div className="edu-sec-comp-metric-col">
                    <div className="edu-sec-comp-metric-header">
                      <img
                        src={contentIcon}
                        alt="Content"
                        className="edu-sec-comp-asset-img"
                      />
                      <span>Content</span>
                    </div>
                    <span className="edu-sec-comp-metric-val">35%</span>
                    <div className="edu-sec-comp-bar-bg">
                      <div
                        className="edu-sec-comp-bar-fill"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="edu-sec-comp-metric-col">
                    <div className="edu-sec-comp-metric-header">
                      <img
                        src={skillsIcon}
                        alt="Skills"
                        className="edu-sec-comp-asset-img"
                      />
                      <span>Skills</span>
                    </div>
                    <span className="edu-sec-comp-metric-val">20%</span>
                    <div className="edu-sec-comp-bar-bg">
                      <div
                        className="edu-sec-comp-bar-fill"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="edu-sec-comp-metric-col">
                    <div className="edu-sec-comp-metric-header">
                      <img
                        src={experienceIcon}
                        alt="Experience"
                        className="edu-sec-comp-asset-img"
                      />
                      <span>Experience</span>
                    </div>
                    <span className="edu-sec-comp-metric-val">30%</span>
                    <div className="edu-sec-comp-bar-bg">
                      <div
                        className="edu-sec-comp-bar-fill"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="edu-sec-comp-tip-box">
                <img
                  src={ideaIcon}
                  alt="Tip"
                  className="edu-sec-comp-tip-icon"
                />
                <p className="edu-sec-comp-tip-text">
                  Tips: Add more quantifiable achievements in your experience
                  section to improve your score.
                </p>
              </div>
            </div>
          </div>

          {/* PREVIEW COLUMN */}
          <div className="edu-sec-preview-column">
            <div className="edu-sec-preview-toolbar">
              <strong>Live Preview</strong>
              <div className="edu-sec-preview-actions">
                <button type="button" onClick={handleZoomOut}>
                  −
                </button>
                <span>{zoomLevel}%</span>
                <button type="button" onClick={handleZoomIn}>
                  +
                </button>
                <button
                  type="button"
                  className="edu-sec-toolbar-icon"
                  onClick={() => setIsFullScreen(true)}
                >
                  <img src={fullScreenIcon} alt="Fullscreen" />
                </button>
                <button
                  type="button"
                  className="edu-sec-toolbar-icon"
                  onClick={handleResetZoom}
                >
                  <img src={undoIcon} alt="Reset" />
                </button>
              </div>
            </div>

            {renderPreviewCard()}
          </div>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="edu-sec-footer-actions">
          <button
            type="button"
            className="edu-sec-prev-btn"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            type="button"
            className="edu-sec-next-btn"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>

      {/* FULL SCREEN MODAL */}
      {isFullScreen && (
        <div
          className="edu-sec-modal-overlay"
          onClick={() => setIsFullScreen(false)}
        >
          <div
            className="edu-sec-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="edu-sec-modal-header">
              <h3>Live Preview</h3>
              <button
                type="button"
                className="edu-sec-modal-close"
                onClick={() => setIsFullScreen(false)}
              >
                ✕
              </button>
            </div>
            <div className="edu-sec-modal-body">{renderPreviewCard()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
