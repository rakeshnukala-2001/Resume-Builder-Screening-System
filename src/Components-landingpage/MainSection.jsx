import { useState } from "react";
import "../Components-landingpage/MainSection.css";
import heroImage from "../assets/landingpage/header-image.png";
import resumeIcon from "../assets/landingpage/resume-icon.png";
import recruiterIcon from "../assets/landingpage/recruiter-icon.png";
import aiImage from "../assets/landingpage/ai-powered.png";
import atsImage from "../assets/landingpage/ats-friendly.png";
import secureImage from "../assets/landingpage/secure-private.png";
 
const MainSection = () => {
  const [selectedRole, setSelectedRole] = useState("resume");
 
  const handleContinue = () => {
    if (selectedRole === "resume") {
      alert("Resume Builder Selected");
    } else {
      alert("Recruiter Selected");
    }
  };
 
  return (
    <section className="lp-main-hero-section">
      {/* Left Side */}
      <div className="lp-main-hero-left">
        <h1>
          AI Resume Builder &
          <br />
          <span>Screening system</span>
        </h1>
 
        <p>
          Create job-winning resumes in minutes and help recruiters find the
          perfect talent with AI-powered screening.
        </p>
 
        {/* Buttons */}
        <div className="lp-main-hero-buttons">
          <button
            className={`lp-main-hero-btn ${
              selectedRole === "resume" ? "lp-main-active-btn" : ""
            }`}
            onClick={() => setSelectedRole("resume")}
          >
            <img src={resumeIcon} alt="resume" />
            <span>Create My Resume</span>
          </button>
 
          <button
            className={`lp-main-hero-btn ${
              selectedRole === "recruiter" ? "lp-main-active-btn" : ""
            }`}
            onClick={() => setSelectedRole("recruiter")}
          >
            <img src={recruiterIcon} alt="recruiter" />
            <span>I'm a Recruiter</span>
          </button>
        </div>
        {/* Feature Cards */}
        <div className="lp-main-features">
          <div className="lp-main-feature-card">
            <img src={aiImage} alt="AI Powered" />
            <div>
              <h4>AI Powered</h4>
              <p>Smart suggestions that stand out</p>
            </div>
          </div>
 
          <div className="lp-main-feature-card">
            <img src={atsImage} alt="ATS Friendly" />
            <div>
              <h4>ATS Friendly</h4>
              <p>Resumes optimized for ATS systems</p>
            </div>
          </div>
 
          <div className="lp-main-feature-card">
            <img src={secureImage} alt="Secure" />
            <div>
              <h4>Secure & Private</h4>
              <p>Your data is safe with us</p>
            </div>
          </div>
        </div>
      </div>
 
      {/* Right Side */}
      <div className="lp-main-hero-right">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};
 
export default MainSection;