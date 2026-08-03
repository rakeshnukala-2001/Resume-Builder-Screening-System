import React, { useState, useRef } from "react";
import "./CandidateProfile.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

/* ===========================================
   Image Imports
=========================================== */
import profileImg from "../assets/Candidate/Profile-images/profile.png";
import verifiedIcon from "../assets/Candidate/Profile-images/verified.png";
import cameraIcon from "../assets/Candidate/Profile-images/camera.png";
import locationIcon from "../assets/Candidate/Profile-images/location.png";
import phoneIcon from "../assets/Candidate/Profile-images/phone.png";
import emailIcon from "../assets/Candidate/Profile-images/email.png";
import linkedinIcon from "../assets/Candidate/Profile-images/linkedin.png";
import editIcon from "../assets/Candidate/Profile-images/edit.png";
import deleteIcon from "../assets/Candidate/Profile-images/delete.png";
import tickIcon from "../assets/Candidate/Profile-images/tick.png";

// Professional Highlights Icons
import expIcon from "../assets/Candidate/Profile-images/experience.png";
import eduIcon from "../assets/Candidate/Profile-images/education.png";
import certIcon from "../assets/Candidate/Profile-images/certifications.png";
import skillIcon from "../assets/Candidate/Profile-images/skills.png";

// Profile Highlights Section Icons
import personalInfoIcon from "../assets/Candidate/Profile-images/personal-info.png";
import highlightsExpIcon from "../assets/Candidate/Profile-images/highlight-exp.png";
import highlightsSkillIcon from "../assets/Candidate/Profile-images/highlight-skill.png";
import highlightsEduIcon from "../assets/Candidate/Profile-images/highlight-edu.png";
import highlightsLangIcon from "../assets/Candidate/Profile-images/highlight-lang.png";

/* ===========================================
   Profile Strength Chart Data (Recharts)
=========================================== */
const profileStrengthData = [
  { name: "Completed", value: 85 },
  { name: "Remaining", value: 15 },
];
const STRENGTH_COLORS = ["#10b981", "#e2e8f0"];

const CandidateProfile = () => {
  const fileInputRef = useRef(null);

  // Main Profile State
  const [profileData, setProfileData] = useState({
    name: "Akash",
    role: "Full Stack Developer",
    location: "Chennai, India",
    phone: "+91 8508035087",
    email: "akash123@gmail.com",
    linkedin: "linkedin.com/in/akash",
    bio: "Motivated and detail-oriented Full Stack Developer with 2+ years of experience in developing responsive web applications using JavaScript, React, Node.js. Passionate about creating efficient, scalable solutions and solving real-world problems.",
    languages: ["Tamil", "English"],
    avatar: profileImg,
  });

  // Dynamic Lists
  const [experienceList, setExperienceList] = useState([
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Sutherland Global Services",
      date: "June 2025 - Present.",
      location: "Chennai, India",
    },
    {
      id: 2,
      role: "Front End Developer Intern",
      company: "TechNova Solutions",
      date: "February 2025 - June 2025.",
      location: "Chennai, India",
    },
  ]);

  const [educationList, setEducationList] = useState([
    {
      id: 1,
      degree: "Bachelor Of Engineering (CSE)",
      institution: "Sethu Institute Of Technology",
      year: "2016-2020",
      percentage: "92%",
      cgpa: "CGPA: 8.5/10",
    },
    {
      id: 2,
      degree: "Higher Secondary (12th)",
      institution: "Dav matriculation School",
      year: "2015-2016",
      percentage: "90%",
      cgpa: "State Board",
    },
  ]);

  // Modal / Form States
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showExpModal, setShowExpModal] = useState(false);
  const [showEduModal, setShowEduModal] = useState(false);

  // Edit Trackers
  const [editExpId, setEditExpId] = useState(null);
  const [editEduId, setEditEduId] = useState(null);

  // Form Input Bindings
  const [tempProfile, setTempProfile] = useState({ ...profileData });
  const [expForm, setExpForm] = useState({
    role: "",
    company: "",
    date: "",
    location: "",
  });
  const [eduForm, setEduForm] = useState({
    degree: "",
    institution: "",
    year: "",
    percentage: "",
    cgpa: "",
  });

  /* ===========================================
     Handy Validation & Handler Functions
  =========================================== */
  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileData((prev) => ({ ...prev, avatar: imageUrl }));
    }
  };

  // 1. Profile Save Validation
  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (
      !tempProfile.name.trim() ||
      !tempProfile.role.trim() ||
      !tempProfile.email.trim()
    ) {
      alert("Name, Role, and Email are mandatory!");
      return;
    }
    setProfileData(tempProfile);
    setShowProfileModal(false);
    alert("Profile info updated successfully!");
  };

  // 2. About Me Save Validation
  const handleSaveAbout = (e) => {
    e.preventDefault();
    if (!tempProfile.bio.trim()) {
      alert("Bio cannot be empty!");
      return;
    }
    setProfileData((prev) => ({
      ...prev,
      bio: tempProfile.bio,
      languages: Array.isArray(tempProfile.languages)
        ? tempProfile.languages
        : tempProfile.languages.split(",").map((l) => l.trim()),
    }));
    setShowAboutModal(false);
    alert("About Me updated!");
  };

  // 3. Experience CRUD
  const handleOpenExpModal = (exp = null) => {
    if (exp) {
      setEditExpId(exp.id);
      setExpForm({
        role: exp.role,
        company: exp.company,
        date: exp.date,
        location: exp.location,
      });
    } else {
      setEditExpId(null);
      setExpForm({ role: "", company: "", date: "", location: "" });
    }
    setShowExpModal(true);
  };

  const handleSaveExp = (e) => {
    e.preventDefault();
    if (!expForm.role.trim() || !expForm.company.trim()) {
      alert("Role and Company are required!");
      return;
    }

    if (editExpId) {
      setExperienceList((prev) =>
        prev.map((item) =>
          item.id === editExpId ? { ...item, ...expForm } : item,
        ),
      );
    } else {
      setExperienceList((prev) => [...prev, { id: Date.now(), ...expForm }]);
    }
    setShowExpModal(false);
  };

  const handleDeleteExp = (id) => {
    if (window.confirm("Are you sure you want to delete this experience?")) {
      setExperienceList((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // 4. Education CRUD
  const handleOpenEduModal = (edu = null) => {
    if (edu) {
      setEditEduId(edu.id);
      setEduForm({
        degree: edu.degree,
        institution: edu.institution,
        year: edu.year,
        percentage: edu.percentage,
        cgpa: edu.cgpa,
      });
    } else {
      setEditEduId(null);
      setEduForm({
        degree: "",
        institution: "",
        year: "",
        percentage: "",
        cgpa: "",
      });
    }
    setShowEduModal(true);
  };

  const handleSaveEdu = (e) => {
    e.preventDefault();
    if (!eduForm.degree.trim() || !eduForm.institution.trim()) {
      alert("Degree and Institution are required!");
      return;
    }

    if (editEduId) {
      setEducationList((prev) =>
        prev.map((item) =>
          item.id === editEduId ? { ...item, ...eduForm } : item,
        ),
      );
    } else {
      setEducationList((prev) => [...prev, { id: Date.now(), ...eduForm }]);
    }
    setShowEduModal(false);
  };

  const handleDeleteEdu = (id) => {
    if (
      window.confirm("Are you sure you want to delete this education entry?")
    ) {
      setEducationList((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="dashboard-page-wrapper">
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageChange}
      />

      <div className="dashboard-layout full-width-layout">
        <main className="dashboard-main profile-main-content">
          {/* Top Section: Profile Card & Professional Highlights */}
          <div className="profile-top-layout-grid">
            <div className="profile-user-strength-unified-card">
              <div className="profile-top-split-row">
                <div className="user-profile-inner-col-group">
                  <div className="user-profile-inner-row">
                    <div className="avatar-wrapper">
                      <img
                        src={profileData.avatar}
                        alt="Akash"
                        className="profile-avatar-img"
                      />
                      <button
                        type="button"
                        className="camera-icon-badge clickable-action"
                        title="Change Profile Picture"
                        onClick={handleCameraClick}
                      >
                        <img
                          src={cameraIcon}
                          alt="Camera"
                          className="camera-icon-img"
                        />
                      </button>
                    </div>

                    <div className="profile-meta">
                      <div className="name-row">
                        <h2>{profileData.name}</h2>
                        <img
                          src={verifiedIcon}
                          alt="Verified"
                          className="verified-badge-img"
                        />
                      </div>
                      <p className="role-text">{profileData.role}</p>

                      <div className="contact-details">
                        <p>
                          <img
                            src={locationIcon}
                            alt="Loc"
                            className="contact-icon"
                          />
                          {profileData.location}
                        </p>
                        <p>
                          <img
                            src={phoneIcon}
                            alt="Phone"
                            className="contact-icon"
                          />
                          {profileData.phone}
                        </p>
                        <p>
                          <img
                            src={emailIcon}
                            alt="Email"
                            className="contact-icon"
                          />
                          {profileData.email}
                        </p>
                        <p>
                          <img
                            src={linkedinIcon}
                            alt="LinkedIn"
                            className="contact-icon"
                          />
                          {profileData.linkedin}
                        </p>
                      </div>

                      {/* Edit Profile button nested directly under contact info */}
                      <button
                        className="edit-profile-action-btn clickable-action"
                        onClick={() => {
                          setTempProfile({ ...profileData });
                          setShowProfileModal(true);
                        }}
                      >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Profile Strength Chart */}
                <div className="profile-strength-inner-box">
                  <div className="strength-chart-box">
                    <ResponsiveContainer width="100%" height={120}>
                      <PieChart>
                        <Pie
                          data={profileStrengthData}
                          cx="50%"
                          cy="90%"
                          startAngle={180}
                          endAngle={0}
                          innerRadius={45}
                          outerRadius={65}
                          paddingAngle={0}
                          dataKey="value"
                        >
                          {profileStrengthData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={
                                STRENGTH_COLORS[index % STRENGTH_COLORS.length]
                              }
                            />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="strength-center-text">
                      <h3>85%</h3>
                      <span>Profile Strength</span>
                    </div>
                  </div>
                  <div className="strength-status-badge">Excellent</div>
                  <p className="strength-desc">
                    Great job! Your profile is strong and well optimized.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Highlights Card */}
            <div className="professional-highlights-container">
              <div className="prof-highlights-header">
                <h3>Professional Highlights</h3>
              </div>
              <div className="prof-highlights-grid-2x2">
                <div className="highlight-box purple-accent">
                  <div className="h-icon-wrap purp">
                    <img src={expIcon} alt="Exp" />
                  </div>
                  <div>
                    <h4>
                      <span className="num-bold">2+</span> Years of Experience
                    </h4>
                    <p>Built user-friendly, responsive web application.</p>
                  </div>
                </div>
                <div className="highlight-box green-accent">
                  <div className="h-icon-wrap green">
                    <img src={eduIcon} alt="Edu" />
                  </div>
                  <div>
                    <h4>
                      <span className="num-bold">B.E</span> Computer Science
                    </h4>
                    <p>
                      Bachelor of Engineering in Computer Science and
                      Engineering.
                    </p>
                  </div>
                </div>
                <div className="highlight-box yellow-accent">
                  <div className="h-icon-wrap yellow">
                    <img src={certIcon} alt="Cert" />
                  </div>
                  <div>
                    <h4>
                      <span className="num-bold">3</span> Certifications
                    </h4>
                    <p>
                      Industry-recognized certifications enhancing technical
                      expertise.
                    </p>
                  </div>
                </div>
                <div className="highlight-box red-accent">
                  <div className="h-icon-wrap red">
                    <img src={skillIcon} alt="Skill" />
                  </div>
                  <div>
                    <h4>
                      <span className="num-bold">4</span> Skills Learned
                    </h4>
                    <p>
                      Core-skills in Frontend development and modern
                      technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row */}
          <div className="profile-middle-grid">
            <div className="about-me-card">
              <div className="card-heading-flex">
                <h3>About Me</h3>
                <img
                  src={editIcon}
                  alt="Edit"
                  className="card-edit-icon dark-edit clickable-action"
                  onClick={() => {
                    setTempProfile({ ...profileData });
                    setShowAboutModal(true);
                  }}
                />
              </div>
              <p>{profileData.bio}</p>

              <h4 className="languages-heading">Languages Known</h4>
              <div className="language-chips">
                {profileData.languages.map((lang, idx) => (
                  <span key={idx} className="lang-chip">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="profile-highlights-list-card">
              <h3>Profile Highlights</h3>
              <ul className="checklist-items">
                <li>
                  <div className="check-item-left">
                    <img src={personalInfoIcon} alt="" /> Personal Information
                  </div>
                  <span className="status-complete">
                    Completed <img src={tickIcon} alt="tick" />
                  </span>
                </li>
                <li>
                  <div className="check-item-left">
                    <img src={highlightsExpIcon} alt="" /> Experience
                  </div>
                  <span className="status-complete">
                    Completed <img src={tickIcon} alt="tick" />
                  </span>
                </li>
                <li>
                  <div className="check-item-left">
                    <img src={highlightsSkillIcon} alt="" /> Skills
                  </div>
                  <span className="status-complete">
                    Completed <img src={tickIcon} alt="tick" />
                  </span>
                </li>
                <li>
                  <div className="check-item-left">
                    <img src={highlightsEduIcon} alt="" /> Education
                  </div>
                  <span className="status-complete">
                    Completed <img src={tickIcon} alt="tick" />
                  </span>
                </li>
                <li>
                  <div className="check-item-left">
                    <img src={highlightsLangIcon} alt="" /> Language
                  </div>
                  <span className="status-complete">
                    Completed <img src={tickIcon} alt="tick" />
                  </span>
                </li>
              </ul>
            </div>

            <div className="skill-competency-card">
              <h3>Skill Competency</h3>
              <div className="competency-skill-item">
                <div className="skill-info-row">
                  <span>JavaScript</span>
                  <span>9.8/10</span>
                </div>
                <div className="comp-bar">
                  <div className="comp-fill" style={{ width: "98%" }}></div>
                </div>
              </div>
              <div className="competency-skill-item">
                <div className="skill-info-row">
                  <span>React</span>
                  <span>8.5/10</span>
                </div>
                <div className="comp-bar">
                  <div className="comp-fill" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="competency-skill-item">
                <div className="skill-info-row">
                  <span>Node.js</span>
                  <span>9.5/10</span>
                </div>
                <div className="comp-bar">
                  <div className="comp-fill" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="competency-skill-item">
                <div className="skill-info-row">
                  <span>Python</span>
                  <span>8.2/10</span>
                </div>
                <div className="comp-bar">
                  <div className="comp-fill" style={{ width: "82%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="profile-bottom-grid">
            {/* Experience Timeline */}
            <div className="experience-timeline-card">
              <div className="section-header-with-add">
                <h3>Experience</h3>
                <button
                  className="add-item-btn clickable-action"
                  onClick={() => handleOpenExpModal()}
                >
                  + Add
                </button>
              </div>

              <div className="timeline-items-wrapper">
                {experienceList.map((exp) => (
                  <div className="timeline-item" key={exp.id}>
                    <div className="timeline-dot-pure"></div>
                    <div className="timeline-content">
                      <div className="t-header">
                        <h4>{exp.role}</h4>
                        <div className="timeline-actions-right">
                          <span className="location-tag">{exp.location}</span>
                          <img
                            src={editIcon}
                            alt="Edit"
                            className="action-icon-btn edit-color-icon clickable-action"
                            onClick={() => handleOpenExpModal(exp)}
                          />
                          <img
                            src={deleteIcon}
                            alt="Delete"
                            className="action-icon-btn delete-color-icon clickable-action"
                            onClick={() => handleDeleteExp(exp.id)}
                          />
                        </div>
                      </div>
                      <p className="company-name">{exp.company}</p>
                      <p className="t-date">{exp.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div className="education-timeline-card">
              <div className="section-header-with-add">
                <h3>Education</h3>
                <button
                  className="add-item-btn clickable-action"
                  onClick={() => handleOpenEduModal()}
                >
                  + Add
                </button>
              </div>

              <div className="timeline-items-wrapper">
                {educationList.map((edu) => (
                  <div className="timeline-item" key={edu.id}>
                    <div className="timeline-dot-pure"></div>
                    <div className="timeline-content">
                      <div className="t-header">
                        <h4>{edu.degree}</h4>
                        <div className="timeline-actions-right">
                          <span className="score-tag">
                            {edu.year} <strong>|</strong> {edu.percentage}
                          </span>
                          <img
                            src={editIcon}
                            alt="Edit"
                            className="action-icon-btn edit-color-icon clickable-action"
                            onClick={() => handleOpenEduModal(edu)}
                          />
                          <img
                            src={deleteIcon}
                            alt="Delete"
                            className="action-icon-btn delete-color-icon clickable-action"
                            onClick={() => handleDeleteEdu(edu.id)}
                          />
                        </div>
                      </div>
                      <p className="company-name">{edu.institution}</p>
                      <p className="t-date">{edu.cgpa}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Validation Popups / Modals */}
      {showProfileModal && (
        <div className="profile-modal-overlay">
          <div className="profile-modal-content">
            <h3>Edit Profile Details</h3>
            <form onSubmit={handleSaveProfile}>
              <div className="form-field">
                <label>Full Name *</label>
                <input
                  type="text"
                  value={tempProfile.name}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, name: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label>Job Title *</label>
                <input
                  type="text"
                  value={tempProfile.role}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, role: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label>Location</label>
                <input
                  type="text"
                  value={tempProfile.location}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, location: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label>Phone Number</label>
                <input
                  type="text"
                  value={tempProfile.phone}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, phone: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label>Email *</label>
                <input
                  type="email"
                  value={tempProfile.email}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, email: e.target.value })
                  }
                />
              </div>
              <div className="modal-btn-row">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowProfileModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAboutModal && (
        <div className="profile-modal-overlay">
          <div className="profile-modal-content">
            <h3>Edit About Me</h3>
            <form onSubmit={handleSaveAbout}>
              <div className="form-field">
                <label>Bio *</label>
                <textarea
                  rows="4"
                  value={tempProfile.bio}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, bio: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label>Languages (comma separated)</label>
                <input
                  type="text"
                  value={
                    Array.isArray(tempProfile.languages)
                      ? tempProfile.languages.join(", ")
                      : tempProfile.languages
                  }
                  onChange={(e) =>
                    setTempProfile({
                      ...tempProfile,
                      languages: e.target.value,
                    })
                  }
                />
              </div>
              <div className="modal-btn-row">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowAboutModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showExpModal && (
        <div className="profile-modal-overlay">
          <div className="profile-modal-content">
            <h3>{editExpId ? "Edit Experience" : "Add Experience"}</h3>
            <form onSubmit={handleSaveExp}>
              <div className="form-field">
                <label>Role *</label>
                <input
                  type="text"
                  value={expForm.role}
                  onChange={(e) =>
                    setExpForm({ ...expForm, role: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label>Company *</label>
                <input
                  type="text"
                  value={expForm.company}
                  onChange={(e) =>
                    setExpForm({ ...expForm, company: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label>Duration / Date</label>
                <input
                  type="text"
                  value={expForm.date}
                  onChange={(e) =>
                    setExpForm({ ...expForm, date: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label>Location</label>
                <input
                  type="text"
                  value={expForm.location}
                  onChange={(e) =>
                    setExpForm({ ...expForm, location: e.target.value })
                  }
                />
              </div>
              <div className="modal-btn-row">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowExpModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showEduModal && (
        <div className="profile-modal-overlay">
          <div className="profile-modal-content">
            <h3>{editEduId ? "Edit Education" : "Add Education"}</h3>
            <form onSubmit={handleSaveEdu}>
              <div className="form-field">
                <label>Degree / Qualification *</label>
                <input
                  type="text"
                  value={eduForm.degree}
                  onChange={(e) =>
                    setEduForm({ ...eduForm, degree: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label>School / University *</label>
                <input
                  type="text"
                  value={eduForm.institution}
                  onChange={(e) =>
                    setEduForm({ ...eduForm, institution: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label>Year Batch (e.g. 2016-2020)</label>
                <input
                  type="text"
                  value={eduForm.year}
                  onChange={(e) =>
                    setEduForm({ ...eduForm, year: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label>Percentage / Score</label>
                <input
                  type="text"
                  value={eduForm.percentage}
                  onChange={(e) =>
                    setEduForm({ ...eduForm, percentage: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label>CGPA or Stream Info</label>
                <input
                  type="text"
                  value={eduForm.cgpa}
                  onChange={(e) =>
                    setEduForm({ ...eduForm, cgpa: e.target.value })
                  }
                />
              </div>
              <div className="modal-btn-row">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowEduModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateProfile;
