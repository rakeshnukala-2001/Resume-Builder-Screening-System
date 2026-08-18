import React, { useState } from "react";
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

  const [showMobileActionMenu, setShowMobileActionMenu] = useState(false);

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

  /* =========================================================
     EDUCATION 1
  ========================================================= */

  const handleEducation1Change = (e) => {
    const { name, value } = e.target;

    setEducation1((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  /* =========================================================
     EDUCATION 2
  ========================================================= */

  const handleEducation2Change = (e) => {
    const { name, value } = e.target;
    const errorKey = `education2_${name}`;

    setEducation2((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[errorKey]) {
      setErrors((prev) => ({
        ...prev,
        [errorKey]: false,
      }));
    }
  };

  /* =========================================================
     VALIDATION
  ========================================================= */

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

    if (!education2.school.trim()) {
      newErrors.education2_school = true;
    }

    if (!education2.field.trim()) {
      newErrors.education2_field = true;
    }

    if (!education2.board.trim()) {
      newErrors.education2_board = true;
    }

    if (!education2.institution.trim()) {
      newErrors.education2_institution = true;
    }

    if (!education2.location.trim()) {
      newErrors.education2_location = true;
    }

    if (!education2.startYear.trim()) {
      newErrors.education2_startYear = true;
    }

    if (!education2.endYear.trim()) {
      newErrors.education2_endYear = true;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      alert("Please fill in all mandatory fields before proceeding.");
      return false;
    }

    return true;
  };

  /* =========================================================
     STEP NAVIGATION
  ========================================================= */

  const handleStepClick = (step) => {
    const routes = {
      1: "/Resume-builder/candidate/candidate/personalinfo",
      2: "/Resume-builder/candidate/candidate/experience",
      3: "/Resume-builder/candidate/candidate/education",
      4: "/Resume-builder/candidate/candidate/skills",
      5: "/Resume-builder/candidate/candidate/summary",
      6: "/Resume-builder/candidate/candidate/review",
    };

    if (routes[step]) {
      navigate(routes[step]);
    }
  };

  /* =========================================================
     PREVIOUS / NEXT / ACTIONS
  ========================================================= */

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
  };

  const handleDownload = () => {
    alert("Download option selected.");
  };

  const handleAddEducation = () => {
    alert("Add Education option selected.");
  };

  return (
    <div className="education-page-wrapper">
      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <div className="education-top-header">
        <div className="education-title-area">
          <div>
            <h2>Create New Resume</h2>
          </div>
        </div>

        {/* Desktop buttons */}

        <div className="education-header-actions">
          <button
            type="button"
            className="education-save-btn"
            onClick={handleSave}
          >
            Save
          </button>

          <button
            type="button"
            className="education-download-btn"
            onClick={handleDownload}
          >
            Download
            <img
              src={downloadIconAsset}
              alt="download"
              className="action-asset-icon"
            />
          </button>
        </div>

        {/* Mobile */}

        <div className="education-mobile-actions">
          <button
            type="button"
            onClick={() => setShowMobileActionMenu(!showMobileActionMenu)}
          >
            ⋮
          </button>

          {showMobileActionMenu && (
            <div className="education-action-menu">
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

      {/* =================================================
          STEPPER
      ================================================= */}

      <div className="education-stepper">
        <span onClick={() => handleStepClick(1)}>1. Personal Info</span>

        <span onClick={() => handleStepClick(2)}>2. Experience</span>

        <span className="active" onClick={() => handleStepClick(3)}>
          3. Education
        </span>

        <span onClick={() => handleStepClick(4)}>4. Skills</span>

        <span onClick={() => handleStepClick(5)}>5. Summary</span>

        <span onClick={() => handleStepClick(6)}>6. Review</span>
      </div>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="education-main-layout">
        {/* =================================================
            LEFT FORM COLUMN
        ================================================= */}

        <div className="education-form-column">
          {/* =================================================
              EDUCATION CARD
          ================================================= */}

          <div className="education-form-card">
            {/* Card heading */}

            <div className="education-card-top-row">
              <h3>Education Details</h3>

              <button
                type="button"
                className="ai-suggest-btn"
                onClick={() => alert("AI Suggest option selected.")}
              >
                <img src={aiSuggestIcon} alt="AI" className="ai-icon-img" />
                AI Suggest
              </button>
            </div>

            {/* =================================================
                EDUCATION 1
            ================================================= */}

            <div className="education-section-block">
              <h4 className="education-number-title">Education #1</h4>

              <div className="education-fields-grid">
                {/* Degree */}

                <div className="education-field">
                  <label>
                    Degree/Qualification <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="degree"
                    value={education1.degree}
                    onChange={handleEducation1Change}
                    className={errors.degree ? "education-input-error" : ""}
                    placeholder="Bachelor of Computer Science"
                  />

                  {errors.degree && (
                    <small>Please enter your qualification</small>
                  )}
                </div>

                {/* Field */}

                <div className="education-field">
                  <label>
                    Field Of Study <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="field"
                    value={education1.field}
                    onChange={handleEducation1Change}
                    className={errors.field ? "education-input-error" : ""}
                    placeholder="Computer Science"
                  />
                </div>

                {/* Standing */}

                <div className="education-field">
                  <label>
                    Academic Standing <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="standing"
                    value={education1.standing}
                    onChange={handleEducation1Change}
                    className={errors.standing ? "education-input-error" : ""}
                    placeholder="First Class"
                  />
                </div>

                {/* Institution */}

                <div className="education-field education-wide-field">
                  <label>
                    Institution / University <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="institution"
                    value={education1.institution}
                    onChange={handleEducation1Change}
                    className={
                      errors.institution ? "education-input-error" : ""
                    }
                    placeholder="Sethu Institute Of Technology"
                  />
                </div>

                {/* Location */}

                <div className="education-field">
                  <label>
                    Location <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={education1.location}
                    onChange={handleEducation1Change}
                    className={errors.location ? "education-input-error" : ""}
                    placeholder="Chennai, Tamil Nadu"
                  />
                </div>

                {/* Start */}

                <div className="education-field">
                  <label>
                    Start Year <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="startYear"
                    value={education1.startYear}
                    onChange={handleEducation1Change}
                    className={errors.startYear ? "education-input-error" : ""}
                    placeholder="2016"
                  />
                </div>

                {/* End */}

                <div className="education-field">
                  <label>
                    End Year <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="endYear"
                    value={education1.endYear}
                    onChange={handleEducation1Change}
                    className={errors.endYear ? "education-input-error" : ""}
                    placeholder="2020"
                  />
                </div>

                {/* Grade */}

                <div className="education-field">
                  <label>
                    Grades/Percentage <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="grade"
                    value={education1.grade}
                    onChange={handleEducation1Change}
                    className={errors.grade ? "education-input-error" : ""}
                    placeholder="8.69 CGPA"
                  />
                </div>
              </div>

              {/* Description */}

              <div className="education-description-field">
                <label>
                  Grades/Percentage <span>(optional)</span>
                </label>

                <textarea
                  name="description"
                  value={education1.description}
                  onChange={handleEducation1Change}
                  placeholder="Add achievements, certifications, projects..."
                />
              </div>
            </div>

            <div className="education-inner-divider"></div>

            {/* =================================================
                EDUCATION 2
            ================================================= */}

            <div className="education-section-block education-two">
              <h4 className="education-number-title">Education #2</h4>

              <div className="education-fields-grid">
                {/* School */}

                <div className="education-field">
                  <label>
                    School Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="school"
                    value={education2.school}
                    onChange={handleEducation2Change}
                    className={
                      errors.education2_school ? "education-input-error" : ""
                    }
                    placeholder="Higher Secondary(12th)"
                  />
                </div>

                {/* Field */}

                <div className="education-field">
                  <label>
                    Field Of Study <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="field"
                    value={education2.field}
                    onChange={handleEducation2Change}
                    className={
                      errors.education2_field ? "education-input-error" : ""
                    }
                    placeholder="Science (PCM)"
                  />
                </div>

                {/* Board */}

                <div className="education-field">
                  <label>
                    Board <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="board"
                    value={education2.board}
                    onChange={handleEducation2Change}
                    className={
                      errors.education2_board ? "education-input-error" : ""
                    }
                    placeholder="State Board"
                  />
                </div>

                {/* Institution */}

                <div className="education-field education-wide-field">
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
                        ? "education-input-error"
                        : ""
                    }
                    placeholder="Government State Board"
                  />
                </div>

                {/* Location */}

                <div className="education-field">
                  <label>
                    Location <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={education2.location}
                    onChange={handleEducation2Change}
                    className={
                      errors.education2_location ? "education-input-error" : ""
                    }
                    placeholder="Chennai, Tamil Nadu"
                  />
                </div>

                {/* Start */}

                <div className="education-field">
                  <label>
                    Start Year <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="startYear"
                    value={education2.startYear}
                    onChange={handleEducation2Change}
                    className={
                      errors.education2_startYear ? "education-input-error" : ""
                    }
                    placeholder="2015"
                  />
                </div>

                {/* End */}

                <div className="education-field">
                  <label>
                    End Year <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="endYear"
                    value={education2.endYear}
                    onChange={handleEducation2Change}
                    className={
                      errors.education2_endYear ? "education-input-error" : ""
                    }
                    placeholder="2016"
                  />
                </div>

                {/* Add Education */}

                <div className="add-education-wrapper">
                  <button
                    type="button"
                    className="add-education-btn"
                    onClick={handleAddEducation}
                  >
                    <span>+</span>
                    Add Education
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              OVERALL COMPLETION
          ================================================= */}

          <div className="overall-completion-card">
            <h3>Overall Completion</h3>

            <div className="completion-content">
              {/* Circle */}

              <div className="completion-circle">
                <div className="completion-circle-inner">
                  <strong>35</strong>
                  <span>/100</span>
                </div>
              </div>

              {/* Message */}

              <div className="completion-message">
                <strong>Good</strong>

                <p>
                  Your resume is well-structured
                  <br />
                  can be improved further.
                </p>

                <button type="button">Improve Resume</button>
              </div>

              {/* Metrics */}

              <div className="completion-metrics">
                <div className="completion-metric">
                  <div className="metric-header">
                    <img
                      src={contentIcon}
                      alt="Content"
                      className="metric-asset-icon"
                    />
                    <strong>Content</strong>
                  </div>

                  <small>35</small>

                  <div className="metric-line">
                    <span style={{ width: "35%" }}></span>
                  </div>
                </div>

                <div className="completion-metric">
                  <div className="metric-header">
                    <img
                      src={skillsIcon}
                      alt="Skills"
                      className="metric-asset-icon"
                    />
                    <strong>Skills</strong>
                  </div>

                  <small>20%</small>

                  <div className="metric-line">
                    <span style={{ width: "20%" }}></span>
                  </div>
                </div>

                <div className="completion-metric">
                  <div className="metric-header">
                    <img
                      src={experienceIcon}
                      alt="Experience"
                      className="metric-asset-icon"
                    />
                    <strong>Experience</strong>
                  </div>

                  <small>30%</small>

                  <div className="metric-line">
                    <span style={{ width: "30%" }}></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="completion-tip">
              <img src={ideaIcon} alt="Tip" className="tip-asset-icon" />

              <p>
                Tips: Add more quantifiable achievements in your experience
                section to improve your score.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT LIVE PREVIEW
        ================================================= */}

        <div className="education-preview-column">
          {/* Toolbar */}

          <div className="preview-toolbar">
            <strong>Live Preview</strong>

            <div className="preview-toolbar-actions">
              <button type="button">−</button>
              <span>100%</span>
              <button type="button">+</button>
              <button type="button" className="toolbar-icon-btn">
                <img src={fullScreenIcon} alt="Fullscreen" />
              </button>
              <button type="button" className="toolbar-icon-btn">
                <img src={undoIcon} alt="Reset" />
              </button>
            </div>
          </div>

          {/* Preview */}

          <div className="education-preview-card">
            {/* Profile */}

            <div className="education-preview-profile">
              <div className="education-profile-image">
                <img src={ProfileImg} alt="Profile" />
              </div>

              <div className="education-profile-details">
                <h2>Ajith Akash</h2>

                <h3>Full Stack Developer</h3>

                <div className="education-contact-grid">
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

            <div className="education-preview-divider"></div>

            {/* Summary */}

            <div className="education-preview-section">
              <h4>PROFESSIONAL SUMMARY</h4>

              <p>
                Full Stack Developer with 3+ years of experience building
                responsive web applications using HTML, CSS, JavaScript and
                React. Passionate about creating intuitive user interfaces and
                optimizing performance.
              </p>
            </div>

            {/* Experience */}

            <div className="education-preview-section">
              <h4>EXPERIENCE</h4>

              <div className="education-preview-row">
                <strong>Senior Full Stack Developer</strong>

                <span>Jan 2022 - Present</span>
              </div>

              <ul>
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

            {/* Education */}

            <div className="education-preview-section">
              <h4>EDUCATION</h4>

              <div className="education-preview-row">
                <strong>
                  {education1.degree || "Bachelor of Computer Science"}
                </strong>

                <span>
                  {education1.startYear} - {education1.endYear}
                </span>
              </div>

              <p className="preview-university">
                {education1.institution || "Sethu Institute Of Technology"}
              </p>
            </div>

            {/* Skills */}

            <div className="education-preview-section">
              <h4>SKILLS</h4>

              <div className="education-skill-list">
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
        </div>
      </div>

      {/* =================================================
          BOTTOM ACTIONS
      ================================================= */}

      <div className="education-footer-actions">
        <button
          type="button"
          className="education-prev-btn"
          onClick={handlePrevious}
        >
          Previous
        </button>

        <button
          type="button"
          className="education-next-btn"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Education;
