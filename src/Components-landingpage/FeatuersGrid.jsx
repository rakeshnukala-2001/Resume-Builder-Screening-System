import React from "react";
import "../Components-landingpage/FeatuersGrid.css";
import builderImg from "../assets/landingpage/f-builder.png";
import screeningImg from "../assets/landingpage/f-screening.png";
import matchingImg from "../assets/landingpage/f-matching.png";
import analyticsImg from "../assets/landingpage/f-analytics.png";
import atsImg from "../assets/landingpage/f-ats.png";
import secureImg from "../assets/landingpage/f-secure.png";
import happyUsersImg from "../assets/landingpage/stat-users.png";
import resumesCreatedImg from "../assets/landingpage/stat-resumes.png";
import companiesImg from "../assets/landingpage/stat-companies.png";
import satisfactionImg from "../assets/landingpage/stat-satisfaction.png";

const FeatuersGrid = () => {

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
      img: secureImg,
      title: "Secure & Confidential",
      desc: "We prioritize your data security and ensure complete privacy.",
      bg: "#e0f2fe",
    },
  ];

  // Dynamic Elements Matrix Schema for 4 Statistics Indicators
  const stats = [
    { img: happyUsersImg, label: "25K+", sub: "Happy Users" },
    { img: resumesCreatedImg, label: "120K+", sub: "Resumes Created" },
    { img: companiesImg, label: "2K+", sub: "Companies" },
    { img: satisfactionImg, label: "98%", sub: "Satisfaction Rate" },
  ];

  return (
    <>
      {/*  CONTAINER 1: GREY ISOLATED CARD PANEL */}
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

      {/* CONTAINER 2: INDEPENDENT BLUE STATS BANNER BLOCK */}
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
    </>
  );
}

export default FeatuersGrid;