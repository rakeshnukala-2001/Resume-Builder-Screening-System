import React from "react";
import "./RecruiterProfile.css";
import EditProfileIcon from "../assets/recruiter/Rec-profiles/EditProfile.png";
import ChangePasswordIcon from "../assets/recruiter/Rec-profiles/ChangePassword.png";
import profileImg from "../assets/recruiter/Rec-profiles/profile.jpg";
import mailIcon from "../assets/recruiter/Rec-profiles/Mail.png";
import phoneIcon from "../assets/recruiter/Rec-profiles/Phone.png";
import locationIcon from "../assets/recruiter/Rec-profiles/Location.png";
import linkedinIcon from "../assets/recruiter/Rec-profiles/LinkedIn.png";
import historyIcon from "../assets/recruiter/Rec-profiles/History.png";
import verifiedIcon from "../assets/recruiter/Rec-profiles/Verified.png";
import companyIcon from "../assets/recruiter/Rec-profiles/company.png";
import TwoFactorIcon from "../assets/recruiter/Rec-profiles/RecruiterProfile-TwoFactAuth.png";
import PasswordIcon from "../assets/recruiter/Rec-profiles/RecruiterProfile-ChangePassword.png";
import LoginHistoryIcon from "../assets/recruiter/Rec-profiles/RecruiterProfile-LoginHistory.png";
import DeviceManagementIcon from "../assets/recruiter/Rec-profiles/RecruiterProfile-DeviceManagement.png";
import NotificationIcon from "../assets/recruiter/Rec-profiles/RecruiterProfile-Notification.png";
import ArrowIcon from "../assets/recruiter/Rec-profiles/RecruiterProfile-Arrow.png";
import VerificationCert from "../assets/recruiter/Rec-profiles/RecruiterProfile-VerificationCert.png";
import AuthLetter from "../assets/recruiter/Rec-profiles/RecruiterProfile-AuthLetter.png";
import IDCard from "../assets/recruiter/Rec-profiles/RecruiterProfile-ID card.png";

const hiringDomains = [
  "Software Development",
  "Data Science",
  "Cloud Computing",
  "Cyber Security",
  "DevOps",
];

const activities = [
  {
    id: 1,
    title: "Created new job post - full Stack Developer",
    time: "Today, 10:30 AM",
  },
  {
    id: 2,
    title: "Screened 35 candidates for Data Engineer role",
    time: "Today, 09:15 AM",
  },
  {
    id: 3,
    title: "Shortlisted 8 candidates for Product Manager role",
    time: "Yesterday, 04:20 PM",
  },
  {
    id: 4,
    title: "Scheduled interview with Anjali Mehta",
    time: "Yesterday, 11:40 AM",
  },
  {
    id: 5,
    title: "Generated recruitment report - May 2025",
    time: "20 May 2025, 06:30 PM",
  },
];

const securityItems = [
  {
    id: 1,
    icon: TwoFactorIcon,
    title: "Two - Factor Authentication",
    type: "badge",
    badgeText: "Enabled",
  },
  {
    id: 2,
    icon: PasswordIcon,
    title: "Change Password",
    badge: ArrowIcon,
    badgeAlt: "Arrow",
    type: "arrow",
  },
  {
    id: 3,
    icon: LoginHistoryIcon,
    title: "Login History",
    badge: ArrowIcon,
    badgeAlt: "Arrow",
    type: "arrow",
  },
  {
    id: 4,
    icon: DeviceManagementIcon,
    title: "Device Management",
    badge: ArrowIcon,
    badgeAlt: "Arrow",
    type: "device",
    detail: "3 Active Devices",
  },
  {
    id: 5,
    icon: NotificationIcon,
    title: "Notification Preferences",
    badge: ArrowIcon,
    badgeAlt: "Arrow",
    type: "arrow",
  },
];

const documentsList = [
  {
    id: 1,
    title: "Company Verification Certificate",
    date: "Uploaded on 10 Jan 2024",
    icon: VerificationCert,
  },
  {
    id: 2,
    title: "HR Authorization Letter",
    date: "Uploaded on 10 Jan 2024",
    icon: AuthLetter,
  },
  {
    id: 3,
    title: "Recruiter ID Card",
    date: "Uploaded on 10 Jan 2024",
    icon: IDCard,
  },
];

const RecruiterProfile = () => {
  return (
    <div className="recruiter-page">
      {/* Page Header Section */}
      <div className="recruiter-page-header">
        <div className="header-left">
          <h1>Recruiter Profile</h1>
          <div className="breadcrumb-nav">
            <span>Dashboard</span>
            <span className="separator"> › </span>
            <span>Recruiter Profile</span>
          </div>
        </div>
        <div className="header-actions">
          <button className="btn-change-password">
            <img
              src={ChangePasswordIcon}
              alt="Change Password"
              className="header-btn-icon"
            />
            <span>Change Password</span>
          </button>
          <button className="btn-edit-profile">
            <img
              src={EditProfileIcon}
              alt="Edit Profile"
              className="header-btn-icon"
            />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      <div className="recruiter-profile-container">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="status">
            <img src={historyIcon} alt="Status" className="status-icon" />
            <span>Active</span>
          </div>

          <img src={profileImg} alt="Recruiter" className="profile-image" />

          <div className="profile-name-row">
            <h2>Rohith Sharma</h2>
            <img src={verifiedIcon} alt="Verified" className="verified-icon" />
          </div>

          <p className="designation">Senior HR Recruiter</p>
          <p className="company">TalentAcme Solutions Pvt. Ltd.</p>

          <button className="recruiter-id">Recruiter ID : REC-2024-0187</button>

          <hr />

          <div className="contact-list">
            <div className="contact-item">
              <img src={mailIcon} alt="Mail" />
              <div className="contact-text">
                <span>rohithsharma@talentacme.com</span>
              </div>
            </div>

            <div className="contact-item">
              <img src={phoneIcon} alt="Phone" />
              <span>+91 90080 37635</span>
            </div>

            <div className="contact-item">
              <img src={locationIcon} alt="Location" />
              <span>Bengaluru, Karnataka, India</span>
            </div>

            <div className="contact-item">
              <img src={linkedinIcon} alt="LinkedIn" />
              <a
                href="https://linkedin.com/in/rohithsharma"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/rohithsharma
              </a>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="company-card">
          <h3>Company Information</h3>

          <div className="company-content">
            <div className="company-logo">
              <img
                src={companyIcon}
                alt="Company"
                className="company-logo-image"
              />
            </div>

            <div className="company-details">
              <h2>TalentAcme Solutions Pvt. Ltd.</h2>
              <p>
                <strong>Industry:</strong> Information Technology
              </p>
              <p>
                <strong>Company Size:</strong> 501 - 1000 Employees
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a href="/" onClick={(e) => e.preventDefault()}>
                  www.talentacme.com
                </a>
              </p>
              <p>
                <strong>Headquarters:</strong> Bengaluru, Karnataka, India
              </p>
            </div>
          </div>

          <hr />

          <div className="about-company">
            <h4>About Company</h4>
            <p>
              TalentAcme Solutions is a fast-growing IT services company
              specializing in digital transformation, cloud solutions,
              consulting, and product engineering.
            </p>
          </div>
        </div>

        {/* Professional Information */}
        <div className="professional-card">
          <h3>Professional Information</h3>

          <div className="info-row">
            <span>Department</span>
            <strong>Human Resources</strong>
          </div>

          <div className="info-row">
            <span>Role</span>
            <strong>Recruiter</strong>
          </div>

          <div className="info-row">
            <span>Years of Experience</span>
            <strong>6+ Years</strong>
          </div>

          <div className="info-row">
            <span>Specialization</span>
            <strong>IT Recruitment</strong>
          </div>

          <h4 className="domain-title">Hiring Domains</h4>

          <div className="domain-tags">
            {hiringDomains.map((domain, index) => (
              <span key={index}>{domain}</span>
            ))}
          </div>

          <div className="location">
            <h4>Preferred Locations</h4>
            <p>Bengaluru, Pune, Hyderabad, Remote</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity-card">
          <h2 className="recent-activity-title">Recent Activity</h2>

          <div className="recent-activity-content">
            <div className="activity-list">
              {activities.map((activity) => (
                <div className="activity-item" key={activity.id}>
                  <div className="timeline-dot" />
                  <div className="activity-header">
                    <h4>{activity.title}</h4>
                  </div>
                  <p>{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security & Account Settings */}
        <div className="security-card">
          <h2 className="security-title">Security &amp; Account Settings</h2>

          <div className="security-list">
            {securityItems.map((item) => (
              <div className="security-item" key={item.id}>
                <div className="security-left">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="security-icon"
                  />
                  <span className="security-text">{item.title}</span>
                </div>

                {item.type === "badge" && (
                  <span className="enabled-badge">{item.badgeText}</span>
                )}

                {item.type === "arrow" && (
                  <img
                    src={item.badge}
                    alt={item.badgeAlt}
                    className="arrow-icon"
                  />
                )}

                {item.type === "device" && (
                  <div className="security-right">
                    <span className="active-device-text">{item.detail}</span>
                    <img
                      src={item.badge}
                      alt={item.badgeAlt}
                      className="arrow-icon"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="documents-card">
          <h2 className="documents-title">Documents</h2>

          <div className="documents-list">
            {documentsList.map((doc) => (
              <div className="document-item" key={doc.id}>
                <div className="document-left">
                  <div className="document-icon-box">
                    <img
                      src={doc.icon}
                      alt={doc.title}
                      className="document-icon"
                    />
                  </div>

                  <div className="document-info">
                    <h4>{doc.title}</h4>
                    <span>{doc.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterProfile;
