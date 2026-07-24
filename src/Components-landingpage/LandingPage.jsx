import React, { useState } from "react";
import Header from "./Header";
import "./LandingPage.css";

/* --- ASSETS IMPORTS --- */
import heroImage from "../assets/landingpage/header-image.png";
import resumeIcon from "../assets/landingpage/resume-icon.png";
import recruiterIcon from "../assets/landingpage/recruiter-icon.png";
import aiImage from "../assets/landingpage/ai-powered.png";
import atsImage from "../assets/landingpage/ats-friendly.png";
import secureImage from "../assets/landingpage/secure-private.png";

import googleLogo from "../assets/google.png";
import infosysLogo from "../assets/landingpage/infosys.png";
import microsoftLogo from "../assets/landingpage/microsoft.png";
import hclLogo from "../assets/landingpage/hcl.png";
import tcsLogo from "../assets/landingpage/tcs.png";

import builderImg from "../assets/landingpage/f-builder.png";
import screeningImg from "../assets/landingpage/f-screening.png";
import matchingImg from "../assets/landingpage/f-matching.png";
import analyticsImg from "../assets/landingpage/f-analytics.png";
import atsImg from "../assets/landingpage/f-ats.png";
import secureImg2 from "../assets/landingpage/f-secure.png";

import happyUsersImg from "../assets/landingpage/stat-users.png";
import resumesCreatedImg from "../assets/landingpage/stat-resumes.png";
import companiesImg from "../assets/landingpage/stat-companies.png";
import satisfactionImg from "../assets/landingpage/stat-satisfaction.png";

const LandingPage = () => {
  const [selectedRole, setSelectedRole] = useState("resume");

  const handleFeatureClick = (featureName) => {
    alert(`${featureName} feature clicked!`);
  };

  const logos = [googleLogo, infosysLogo, microsoftLogo, hclLogo, tcsLogo];

  const features = [
    {
      img: builderImg,
      title: "AI Resume Builder",
      desc: "Build a professional resume with AI suggestions and industry-specific templates.",
      bg: "#f3e8ff",
    },
    {
      img: screeningImg,
      title: "AI Screening",
      desc: "Automated resume screening to find the best candidates faster and smarter.",
      bg: "#dcfce7",
    },
    {
      img: matchingImg,
      title: "Smart Matching",
      desc: "Match resumes with job descriptions using advanced AI algorithms.",
      bg: "#dbeafe",
    },
    {
      img: analyticsImg,
      title: "Analytics Dashboard",
      desc: "Get insights on applications, shortlists, and hiring.",
      bg: "#fef3c7",
    },
    {
      img: atsImg,
      title: "ATS Optimization",
      desc: "Resumes are optimized to pass ATS and reach human recruiters.",
      bg: "#fee2e2",
    },
    {
      img: secureImg2,
      title: "Secure & Confidential",
      desc: "We prioritize your data security and ensure complete privacy.",
      bg: "#e0f2fe",
    },
  ];

  const stats = [
    { img: happyUsersImg, label: "25K+", sub: "Happy Users" },
    { img: resumesCreatedImg, label: "120K+", sub: "Resumes Created" },
    { img: companiesImg, label: "2K+", sub: "Companies" },
    { img: satisfactionImg, label: "98%", sub: "Satisfaction Rate" },
  ];

  return (
    <div className="landing-page-wrapper">
      <Header />

      {/* 1. MAIN HERO SECTION */}
      <section className="lp-main-hero-section">
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

          <div className="lp-main-features">
            <div
              className="lp-main-feature-card"
              onClick={() => handleFeatureClick("AI Powered")}
            >
              <img src={aiImage} alt="AI Powered" />
              <div>
                <h4>AI Powered</h4>
                <p>Smart suggestions that stand out</p>
              </div>
            </div>

            <div
              className="lp-main-feature-card"
              onClick={() => handleFeatureClick("ATS Friendly")}
            >
              <img src={atsImage} alt="ATS Friendly" />
              <div>
                <h4>ATS Friendly</h4>
                <p>Resumes optimized for ATS systems</p>
              </div>
            </div>

            <div
              className="lp-main-feature-card"
              onClick={() => handleFeatureClick("Secure & Private")}
            >
              <img src={secureImage} alt="Secure" />
              <div>
                <h4>Secure & Private</h4>
                <p>Your data is safe with us</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lp-main-hero-right">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>

      {/* 2. TRUSTED COMPANIES SECTION */}
      <section className="trusted-section">
        <p className="trusted-title">
          TRUSTED BY PROFESSIONALS & RECRUITERS FROM TOP COMPANIES
        </p>
        <div className="tc-logos-container">
          {logos.map((logo, index) => (
            <div key={index} className="tc-logo-wrapper">
              <img src={logo} alt={`Company Logo ${index}`} />
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURES & STATS SECTION */}
      <section className="features-section">
        <div className="features-inner-container">
          <h2 className="section-main-title">Powerful Features for Everyone</h2>

          <div className="features-grid-layout">
            {features.map((item, idx) => (
              <div key={idx} className="feature-grid-card">
                <div
                  className="icon-box-wrapper"
                  style={{ backgroundColor: item.bg }}
                >
                  <img src={item.img} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="stats-wrapper-block">
        <div className="stats-row-container">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item-block">
              <div className="stat-icon-holder-circle">
                <img
                  src={stat.img}
                  alt={stat.sub}
                  className="stat-inline-img"
                />
              </div>
              <div className="stat-text-meta">
                <h3>{stat.label}</h3>
                <p>{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CALL TO ACTION (CTA) SECTION */}
      <section className="cta-wrapper-section">
        <div className="cta-blue-card">
          <div className="cta-content-left">
            <h2>Ready to build your future?</h2>
            <p>
              Join thousands of professionals and recruiters using AI to
              transform hiring.
            </p>
          </div>
          <div className="cta-action-holder">
            <button
              className="cta-action-btn"
              onClick={() => (window.location.href = "#/register")}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
