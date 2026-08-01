import React from "react";
import "./AboutUs.css";
import aboutImage from "../assets/landingpage/about-image.png";
import visionIcon from "../assets/landingpage/vision.png";
import innovationIcon from "../assets/landingpage/innovation.png";
import peopleIcon from "../assets/landingpage/people.png";
import trustIcon from "../assets/landingpage/trust.png";
import impactIcon from "../assets/landingpage/impact.png";
import member1 from "../assets/landingpage/member1.png";
import member2 from "../assets/landingpage/member2.png";
import member3 from "../assets/landingpage/member3.png";
import member4 from "../assets/landingpage/member4.png";
import member5 from "../assets/landingpage/member5.png";
import usersIcon from "../assets/landingpage/users.png";
import resumeIcon from "../assets/landingpage/resume.png";
import companyIcon from "../assets/landingpage/company.png";
import rateIcon from "../assets/landingpage/rate.png";
import Header from "./Header";

const values = [
  {
    icon: innovationIcon,
    title: "Innovation",
    description: "Continuously improving hiring through intelligent technology.",
  },
  {
    icon: peopleIcon,
    title: "People First",
    description: "Building meaningful connections between talent and recruiters.",
  },
  {
    icon: trustIcon,
    title: "Trust & Transparency",
    description: "Secure hiring with fairness and complete transparency.",
  },
  {
    icon: impactIcon,
    title: "Impact",
    description: "Helping organizations recruit smarter and faster.",
  },
];

const team = [
  {
    image: member1,
    name: "Arjun Prakash",
    role: "CEO",
  },
  {
    image: member2,
    name: "Meera Nair",
    role: "CTO",
  },
  {
    image: member3,
    name: "Vikram Shah",
    role: "Product Lead",
  },
  {
    image: member4,
    name: "Sneha Iyer",
    role: "HR Head",
  },
  {
    image: member5,
    name: "Karthik Reddy",
    role: "Developer",
  },
];

const AboutUs = () => {
  return (
    <>
    <Header />
    <section className="about-page">

      {/*================ HERO =================*/}

      <div className="about-top">

        <div className="about-left">

          <h1>About ResumeAI</h1>

          <h5>Empowering Careers. Enabling Better Hiring.</h5>

          <p>
            ResumeAI is an AI-powered platform that helps job seekers build
            winning resumes and enables recruiters to find the right talent
            faster. Our mission is to simplify hiring with intelligent
            technology while making career growth accessible for everyone.
          </p>

        </div>

        <div className="about-right">
          <img src={aboutImage} alt="About ResumeAI" />
        </div>

      </div>

      {/*================ MISSION =================*/}

      <div className="about-content">

        <div className="vision-card">

          <div className="vision-icon">
            <img src={visionIcon} alt="" />
          </div>

          <h3>Our Vision</h3>

          <p>
            To bridge the gap between talented professionals and organizations
            through AI-driven recruitment while empowering every individual to
            build a successful career.
          </p>

        </div>

        <div className="values-section">

          <h3>Our Values</h3>

          <div className="values-grid">

            {values.map((item, index) => (

              <div className="value-card" key={index}>

                <img src={item.icon} alt="" />

                <div>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

<div className="impact-card">

  <div className="impact-left">

    <h3>Our Impact So Far</h3>

    <p>
      Numbers that reflect our commitment to better careers and smarter hiring.
    </p>

  </div>

  <div className="impact-right">

    <div className="impact-item">
      <img src={usersIcon} alt="Users" />
      <div>
        <h2>25K+</h2>
        <span>Happy Users</span>
      </div>
    </div>

    <div className="impact-item">
      <img src={resumeIcon} alt="Resume" />
      <div>
        <h2>120K+</h2>
        <span>Resumes Created</span>
      </div>
    </div>

    <div className="impact-item">
      <img src={companyIcon} alt="Company" />
      <div>
        <h2>2K+</h2>
        <span>Companies Trust Us</span>
      </div>
    </div>

    <div className="impact-item">
      <img src={rateIcon} alt="Rate" />
      <div>
        <h2>98%</h2>
        <span>Satisfaction Rate</span>
      </div>
    </div>

  </div>

</div>

     

      <div className="team-section">

        <h2>Meet the Team</h2>

        <p>
          A passionate team dedicated to building exceptional hiring solutions.
        </p>

        <div className="team-grid">

          {team.map((member, index) => (

            <div className="team-card" key={index}>

              <img src={member.image} alt={member.name} />

              <h4>{member.name}</h4>

              <span>{member.role}</span>

            </div>

          ))}

        </div>

      </div>


      <footer className="about-footer">

        © 2026 ResumeAI. All Rights Reserved.

      </footer>

    </section>
    </>
  );
};

export default AboutUs;