import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Education.css";
import CandidateHeader from "./../Components-Candidate/CandidateHeader";
import Sidebar from "../Components-CreateResume/Sidebar";

// Asset Imports
import profileUserImg from "../assets/Create-Resume/profile.png";
import educationIcon from "../assets/Create-Resume/education.png";
import locationPinIcon from "../assets/Create-Resume/location.png";
import emailIcon from "../assets/Create-Resume/email.png";
import phoneIcon from "../assets/Create-Resume/phone.png";
import linkedinIcon from "../assets/Create-Resume/linkedin.png";
import schoolImg from "../assets/Create-Resume/school.png";
import schooleducationIcon from "../assets/Create-Resume/school-education.png";
import degreeIcon from "../assets/Create-Resume/degree.png";
import schoolIcon from "../assets/Create-Resume/12th-school.png";

const Education = () => {
  const navigate = useNavigate();

  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Profile");

  // Degree / Qualification State
  const [degreeData, setDegreeData] = useState({
    degree: "Bachelor of Computer Science",
    fieldOfStudy: "Computer Science",
    academicStanding: "First Class",
    location: "Chennai, Tamil Nadu, India",
    university: "Anna University",
    backlogs: "Cleared",
    startYear: "2016",
    endYear: "2020",
    cgpa: "8.4 / 10",
  });

  // 10th Standard State
  const [tenthData, setTenthData] = useState({
    qualification: "10th Standard",
    schoolName: "Anusha Vidyalaya Matric School.",
    board: "State Board",
    yearOfPassing: "2014",
    percentage: "92.02%",
    location: "Madurai, Tamil Nadu.",
  });

  // 12th Standard State
  const [twelfthData, setTwelfthData] = useState({
    qualification: "12th Standard",
    schoolName: "Anusha Vidyalaya Matric School.",
    board: "State Board",
    yearOfPassing: "2016",
    percentage: "89.14%",
    location: "Madurai, Tamil Nadu.",
  });

  // Errors State for Validation
  const [errors, setErrors] = useState({});

  const handleDegreeChange = (e) => {
    const { name, value } = e.target;
    setDegreeData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleTenthChange = (e) => {
    const { name, value } = e.target;
    setTenthData((prev) => ({ ...prev, [name]: value }));
    if (errors[`tenth_${name}`])
      setErrors((prev) => ({ ...prev, [`tenth_${name}`]: "" }));
  };

  const handleTwelfthChange = (e) => {
    const { name, value } = e.target;
    setTwelfthData((prev) => ({ ...prev, [name]: value }));
    if (errors[`twelfth_${name}`])
      setErrors((prev) => ({ ...prev, [`twelfth_${name}`]: "" }));
  };

  // Validation Logic for Next Button
  const validateForm = () => {
    let newErrors = {};

    // Degree Validations
    if (!degreeData.degree.trim()) newErrors.degree = "Degree is required";
    if (!degreeData.fieldOfStudy.trim())
      newErrors.fieldOfStudy = "Field of Study is required";
    if (!degreeData.university.trim())
      newErrors.university = "University is required";
    if (!degreeData.startYear.trim())
      newErrors.startYear = "Start year is required";
    if (!degreeData.endYear.trim()) newErrors.endYear = "End year is required";

    // 10th Validations
    if (!tenthData.schoolName.trim())
      newErrors.tenth_schoolName = "School name is required";
    if (!tenthData.yearOfPassing.trim())
      newErrors.tenth_yearOfPassing = "Passing year is required";

    // 12th Validations
    if (!twelfthData.schoolName.trim())
      newErrors.twelfth_schoolName = "School name is required";
    if (!twelfthData.yearOfPassing.trim())
      newErrors.twelfth_yearOfPassing = "Passing year is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      navigate("/Resume-builder/candidate/candidate/skills");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    navigate("/Resume-builder/candidate/candidate/personalinfo");
  };

  return (
    <div className="edu-page-wrapper-with-sidebar">
      {/* Candidate Header */}
      <CandidateHeader
        mobileMenuOpen={isSidebarOpen}
        setMobileMenuOpen={setIsSidebarOpen}
      />

      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content */}
      <div className="edu-main-content">
        <div className="edu-page-container">
          {/* Top Header */}
          <div className="edu-header-section">
            <div className="edu-title-wrapper">
              <img
                src={educationIcon}
                alt="Education Header"
                className="edu-header-icon"
              />
              <h2>Education</h2>
            </div>
            <p>
              Add both your academic qualifications and school education
              details.
            </p>
          </div>

          {/* Main Grid Layout */}
          <div className="edu-main-grid">
            {/* Left Side Inputs Form */}
            <div className="edu-form-column">
              {/* Degree / Qualification Card */}
              <div className="edu-card">
                <div className="edu-card-title-box">
                  <img
                    src={degreeIcon}
                    alt="Degree Icon"
                    className="edu-card-icon"
                  />
                  <div>
                    <h3>Degree / Qualification</h3>
                    <p>Add your graduation details</p>
                  </div>
                </div>

                <div className="edu-form-grid-3">
                  <div className="edu-input-group">
                    <label>
                      Degree / Qualification<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="degree"
                      className={errors.degree ? "input-error" : ""}
                      value={degreeData.degree}
                      onChange={handleDegreeChange}
                      placeholder="Bachelor of Computer Science"
                    />
                    {errors.degree && (
                      <span className="error-text">{errors.degree}</span>
                    )}
                  </div>

                  <div className="edu-input-group">
                    <label>
                      Field Of Study<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="fieldOfStudy"
                      className={errors.fieldOfStudy ? "input-error" : ""}
                      value={degreeData.fieldOfStudy}
                      onChange={handleDegreeChange}
                      placeholder="Computer Science"
                    />
                    {errors.fieldOfStudy && (
                      <span className="error-text">{errors.fieldOfStudy}</span>
                    )}
                  </div>

                  <div className="edu-input-group">
                    <label>
                      Academic Standing<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="academicStanding"
                      value={degreeData.academicStanding}
                      onChange={handleDegreeChange}
                      placeholder="First Class"
                    />
                  </div>

                  <div className="edu-input-group">
                    <label>
                      Location<sup>*</sup>
                    </label>
                    <div className="input-with-icon">
                      <input
                        type="text"
                        name="location"
                        value={degreeData.location}
                        onChange={handleDegreeChange}
                        placeholder="Chennai, Tamil Nadu, India"
                      />
                      <img
                        src={locationPinIcon}
                        alt="Location"
                        className="field-icon"
                      />
                    </div>
                  </div>

                  <div className="edu-input-group">
                    <label>
                      University / College<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="university"
                      className={errors.university ? "input-error" : ""}
                      value={degreeData.university}
                      onChange={handleDegreeChange}
                      placeholder="Anna University"
                    />
                    {errors.university && (
                      <span className="error-text">{errors.university}</span>
                    )}
                  </div>

                  <div className="edu-input-group">
                    <label>
                      Backlogs History<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="backlogs"
                      value={degreeData.backlogs}
                      onChange={handleDegreeChange}
                      placeholder="Cleared"
                    />
                  </div>

                  <div className="edu-input-group">
                    <label>
                      Start Year<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="startYear"
                      className={errors.startYear ? "input-error" : ""}
                      value={degreeData.startYear}
                      onChange={handleDegreeChange}
                      placeholder="2016"
                    />
                    {errors.startYear && (
                      <span className="error-text">{errors.startYear}</span>
                    )}
                  </div>

                  <div className="edu-input-group">
                    <label>
                      End Year<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="endYear"
                      className={errors.endYear ? "input-error" : ""}
                      value={degreeData.endYear}
                      onChange={handleDegreeChange}
                      placeholder="2020"
                    />
                    {errors.endYear && (
                      <span className="error-text">{errors.endYear}</span>
                    )}
                  </div>

                  <div className="edu-input-group">
                    <label>
                      CGPA / Percentage<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="cgpa"
                      value={degreeData.cgpa}
                      onChange={handleDegreeChange}
                      placeholder="8.4 / 10"
                    />
                  </div>
                </div>
              </div>

              {/* School Education Card */}
              <div className="edu-card">
                <div className="edu-card-title-box">
                  <img
                    src={schooleducationIcon}
                    alt="School Education Icon"
                    className="edu-card-icon"
                  />
                  <div>
                    <h3>School Education</h3>
                    <p>Complete your school education information.</p>
                  </div>
                </div>

                {/* 10th Standard Nested Card */}
                <div className="edu-nested-card">
                  <div className="edu-nested-header">
                    <img
                      src={schoolImg}
                      alt="10th Icon"
                      className="edu-nested-icon"
                    />
                    <h4>10th Standard</h4>
                  </div>

                  <div className="edu-form-grid-3">
                    <div className="edu-input-group">
                      <label>
                        Qualification<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="qualification"
                        value={tenthData.qualification}
                        onChange={handleTenthChange}
                        placeholder="10th Standard"
                      />
                    </div>

                    <div className="edu-input-group">
                      <label>
                        School Name<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="schoolName"
                        className={errors.tenth_schoolName ? "input-error" : ""}
                        value={tenthData.schoolName}
                        onChange={handleTenthChange}
                        placeholder="Anusha Vidyalaya Matric School."
                      />
                      {errors.tenth_schoolName && (
                        <span className="error-text">
                          {errors.tenth_schoolName}
                        </span>
                      )}
                    </div>

                    <div className="edu-input-group">
                      <label>
                        Board<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="board"
                        value={tenthData.board}
                        onChange={handleTenthChange}
                        placeholder="State Board"
                      />
                    </div>

                    <div className="edu-input-group">
                      <label>
                        Year Of Passing<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="yearOfPassing"
                        className={
                          errors.tenth_yearOfPassing ? "input-error" : ""
                        }
                        value={tenthData.yearOfPassing}
                        onChange={handleTenthChange}
                        placeholder="2014"
                      />
                      {errors.tenth_yearOfPassing && (
                        <span className="error-text">
                          {errors.tenth_yearOfPassing}
                        </span>
                      )}
                    </div>

                    <div className="edu-input-group">
                      <label>
                        percentage<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="percentage"
                        value={tenthData.percentage}
                        onChange={handleTenthChange}
                        placeholder="92.02%"
                      />
                    </div>

                    <div className="edu-input-group">
                      <label>
                        Location<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={tenthData.location}
                        onChange={handleTenthChange}
                        placeholder="Madurai, Tamil Nadu."
                      />
                    </div>
                  </div>
                </div>

                {/* 12th Standard Nested Card */}
                <div className="edu-nested-card">
                  <div className="edu-nested-header">
                    <img
                      src={schoolIcon}
                      alt="12th Icon"
                      className="edu-nested-icon"
                    />
                    <h4>12th Standard</h4>
                  </div>

                  <div className="edu-form-grid-3">
                    <div className="edu-input-group">
                      <label>
                        Qualification<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="qualification"
                        value={twelfthData.qualification}
                        onChange={handleTwelfthChange}
                        placeholder="12th Standard"
                      />
                    </div>

                    <div className="edu-input-group">
                      <label>
                        School Name<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="schoolName"
                        className={
                          errors.twelfth_schoolName ? "input-error" : ""
                        }
                        value={twelfthData.schoolName}
                        onChange={handleTwelfthChange}
                        placeholder="Anusha Vidyalaya Matric School."
                      />
                      {errors.twelfth_schoolName && (
                        <span className="error-text">
                          {errors.twelfth_schoolName}
                        </span>
                      )}
                    </div>

                    <div className="edu-input-group">
                      <label>
                        Board<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="board"
                        value={twelfthData.board}
                        onChange={handleTwelfthChange}
                        placeholder="State Board"
                      />
                    </div>

                    <div className="edu-input-group">
                      <label>
                        Year Of Passing<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="yearOfPassing"
                        className={
                          errors.twelfth_yearOfPassing ? "input-error" : ""
                        }
                        value={twelfthData.yearOfPassing}
                        onChange={handleTwelfthChange}
                        placeholder="2016"
                      />
                      {errors.twelfth_yearOfPassing && (
                        <span className="error-text">
                          {errors.twelfth_yearOfPassing}
                        </span>
                      )}
                    </div>

                    <div className="edu-input-group">
                      <label>
                        percentage<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="percentage"
                        value={twelfthData.percentage}
                        onChange={handleTwelfthChange}
                        placeholder="89.14%"
                      />
                    </div>

                    <div className="edu-input-group">
                      <label>
                        Location<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={twelfthData.location}
                        onChange={handleTwelfthChange}
                        placeholder="Madurai, Tamil Nadu."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Live Resume Preview */}
            <div className="edu-preview-column">
              <div className="edu-preview-card">
                <div className="preview-profile-header">
                  <div className="profile-avatar-wrapper">
                    <img
                      src={profileUserImg}
                      alt="Ajith Akash"
                      className="profile-avatar"
                    />
                  </div>
                  <div className="profile-details-wrapper">
                    <h2 className="candidate-name">Ajith Akash</h2>
                    <h4 className="candidate-role">Full stack Developer</h4>
                    <div className="profile-contact-grid">
                      <span>
                        <img src={emailIcon} alt="Email" /> Ajith@email.com
                      </span>
                      <span>
                        <img src={phoneIcon} alt="Phone" /> +91 95000 40000
                      </span>
                      <span>
                        <img src={locationPinIcon} alt="Location" /> Bengaluru,
                        India
                      </span>
                      <span>
                        <img src={linkedinIcon} alt="LinkedIn" />{" "}
                        linkedin.com/in/Aman
                      </span>
                    </div>
                  </div>
                </div>

                <hr className="preview-divider" />

                <div className="preview-section">
                  <h5 className="preview-section-title">
                    PROFESSIONAL SUMMARY
                  </h5>
                  <p className="preview-text">
                    Full Stack Developer with 3+ years of experience building
                    responsive web applications using HTML, CSS, JavaScript and
                    React. Passionate about creating intuitive user interfaces
                    and optimizing performance.
                  </p>
                </div>

                <div className="preview-section">
                  <h5 className="preview-section-title">EXPERIENCE</h5>
                  <div className="preview-job-item">
                    <div className="preview-item-row">
                      <strong className="preview-job-title">
                        Senier Full Stack developer
                      </strong>
                      <span className="preview-job-date">
                        Jan 2022 - Present
                      </span>
                    </div>
                    <ul className="preview-bullets">
                      <li>
                        Developed responsive web applications using React, Redux
                        and Tailwind CSS.
                      </li>
                      <li>
                        Collaborated with UX/UI designers and backend
                        developers.
                      </li>
                      <li>Improved website performance by 30%.</li>
                    </ul>
                  </div>
                </div>

                <div className="preview-section">
                  <h5 className="preview-section-title">EDUCATION</h5>
                  <div className="preview-item-row">
                    <div>
                      <strong className="preview-job-title">
                        {degreeData.degree || "Bachelor of Computer Science"}
                      </strong>
                      <p className="preview-subtext">
                        {degreeData.university || "Anna University"}
                      </p>
                    </div>
                    <span className="preview-job-date">
                      {degreeData.startYear || "2016"} -{" "}
                      {degreeData.endYear || "2020"}
                    </span>
                  </div>
                </div>

                <div className="preview-section">
                  <h5 className="preview-section-title">SKILLS</h5>
                  <div className="skills-badge-list">
                    <span className="skill-tag">HTML</span>
                    <span className="skill-tag">CSS</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Tailwind CSS</span>
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">GitHub</span>
                    <span className="skill-tag">REST API</span>
                    <span className="skill-tag">Python</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer Buttons */}
          <div className="edu-footer-actions">
            <button className="edu-btn-prev" onClick={handlePrevious}>
              previous
            </button>
            <button className="edu-btn-next" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
