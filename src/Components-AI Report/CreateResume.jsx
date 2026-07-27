import { useState } from "react";
import "./ResumeBuilder.css";

import profileImg from "../assets/ai-report/profile.png";
import emailImg from "../assets/ai-report/email.png";
import phoneImg from "../assets/ai-report/phone.png";
import locationImg from "../assets/ai-report/location.png";
import linkedinImg from "../assets/ai-report/linkedin.png";
import aiImg from "../assets/ai-report/ai.png";
import saveImg from "../assets/ai-report/save.png";
import downloadImg from "../assets/ai-report/download.png";

const ResumeBuilder = () => {
  const [activeStep, setActiveStep] = useState(1);

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

  const steps = [
    "Personal Info",
    "Experience",
    "Education",
    "Skills",
    "Review",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (activeStep < 5) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleSave = () => {
    alert("Resume Saved Successfully");
  };

  const handleDownload = () => {
    alert("Resume Download Started");
  };

  return (
    <div className="resume-builder-page">
      {/* Header */}

      <div className="resume-header">
        <h1>Create a Resume</h1>

        <div className="resume-header-buttons">
          <button className="save-btn" onClick={handleSave}>
            <img src={saveImg} alt="" />
            Save
          </button>

          <button className="download-btn" onClick={handleDownload}>
            <img src={downloadImg} alt="" />
            Download
          </button>
        </div>
      </div>

      {/* Step Navigation */}

      <div className="resume-steps">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`step-btn ${
              activeStep === index + 1 ? "active-step" : ""
            }`}
            onClick={() => setActiveStep(index + 1)}
          >
            {index + 1}. {step}
          </button>
        ))}
      </div>
      {/* Main Container */}

      <div className="resume-main-container">
        {/* Left Section */}

        <div className="resume-left-card">
          {/* Full Name */}

          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
            />
          </div>

          {/* Job Title */}

          <div className="input-group">
            <label>Job Title</label>

            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Enter Job Title"
            />
          </div>

          {/* Email & Phone */}

          <div className="double-input-row">
            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Phone</label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Location */}

          <div className="input-group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          {/* LinkedIn */}

          <div className="input-group">
            <label>LinkedIn</label>

            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>

          {/* AI Summary */}

          <div className="ai-summary-card">
            <div className="ai-title">
              <img src={aiImg} alt="AI" />

              <h3>AI Write My Summary</h3>
            </div>

            <label>Professional Summary</label>

            <textarea
              rows="7"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Right Section - Resume Preview */}

        <div className="resume-preview-card">
          {/* Top Profile */}

          <div className="resume-profile-header">
            <img
              src={profileImg}
              alt="Profile"
              className="resume-profile-image"
            />

            <div className="resume-profile-details">
              <h2>{formData.fullName}</h2>

              <h4>{formData.jobTitle}</h4>

              <div className="resume-contact-grid">
                <div className="contact-item">
                  <img src={emailImg} alt="Email" />
                  <span>{formData.email}</span>
                </div>

                <div className="contact-item">
                  <img src={phoneImg} alt="Phone" />
                  <span>{formData.phone}</span>
                </div>

                <div className="contact-item">
                  <img src={locationImg} alt="Location" />
                  <span>{formData.location}</span>
                </div>

                <div className="contact-item">
                  <img src={linkedinImg} alt="LinkedIn" />
                  <span>{formData.linkedin}</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="resume-divider" />

          {/* Professional Summary */}

          <div className="resume-section">
            <h3>PROFESSIONAL SUMMARY</h3>

            <p>{formData.summary}</p>
          </div>

          {/* Experience */}

          <div className="resume-section">
            <h3>EXPERIENCE</h3>

            <div className="resume-title-row">
              <h4>Senior Full Stack Developer</h4>

              <span>Jan 2022 - Present</span>
            </div>

            <ul>
              <li>
                Developed responsive web applications using React, Redux and
                Tailwind CSS.
              </li>

              <li>Collaborated with UI/UX designers and backend developers.</li>

              <li>Improved website performance by 30%.</li>
            </ul>
          </div>

          {/* Education */}

          <div className="resume-section">
            <h3>EDUCATION</h3>

            <div className="resume-title-row">
              <div>
                <h4>Bachelor of Computer Science</h4>

                <p>Anna University</p>
              </div>

              <span>2016 - 2020</span>
            </div>
          </div>

          {/* Skills */}

          <div className="resume-section">
            <h3>SKILLS</h3>

            <div className="skills-wrapper">
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

      {/* Bottom Button */}

      <div className="resume-footer">
        <button className="next-btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ResumeBuilder;
