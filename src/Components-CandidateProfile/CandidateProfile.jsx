import React, { useState } from "react";
import Header from "./Profile-Header";
import "./CandidateProfile.css";

// ─── Inline Icon SVGs ────────────────────────────────────────────────────────
const IconDashboard = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

const IconProfile = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconReport = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const IconSkill = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>
);

const IconJobs = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const IconSaved = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const IconMessage = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconLearning = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const IconEdit = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const IconTrash = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

const IconPlus = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconLocation = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconPhone = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconMail = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const IconCamera = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const IconVerified = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#2563eb">
    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const IconExperience = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8b5cf6"
    strokeWidth="2"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const IconEducation = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#22c55e"
    strokeWidth="2"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const IconCertification = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#eab308"
    strokeWidth="2"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const IconSkillStar = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f43f5e"
    strokeWidth="2"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconUserSmall = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#22c55e"
    strokeWidth="2"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconBriefcaseSmall = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8b5cf6"
    strokeWidth="2"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const IconCodeSmall = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f97316"
    strokeWidth="2"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconCapSmall = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#10b981"
    strokeWidth="2"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
  </svg>
);

const IconGlobeSmall = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3b82f6"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);

const IconCheckCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981">
    <circle cx="12" cy="12" r="10" fill="#10b981" />
    <path
      d="M9 12l2 2 4-4"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// ─── Donut Chart Component ───────────────────────────────────────────────────
const ProfileStrengthDonut = ({ strength = 85 }) => {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const progress = (strength / 100) * circ;

  return (
    <div className="cp-donut-wrap">
      <svg width="130" height="130" viewBox="0 0 140 140">
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="#f1f5f9"
          strokeWidth="11"
        />
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="url(#cpGrad)"
          strokeWidth="11"
          strokeDasharray={`${progress} ${circ}`}
          strokeLinecap="round"
          transform="rotate(-90 70 70)"
          style={{ transition: "stroke-dasharray 1s ease" }}
        />
        <defs>
          <linearGradient id="cpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <text
          x="70"
          y="62"
          textAnchor="middle"
          fontSize="20"
          fontWeight="700"
          fill="#0f172a"
        >
          {strength}%
        </text>
        <text
          x="70"
          y="78"
          textAnchor="middle"
          fontSize="10.5"
          fontWeight="600"
          fill="#64748b"
        >
          Profile Strength
        </text>
      </svg>
      <span className="cp-excellent-badge">Excellent</span>
      <p className="cp-donut-caption">
        Great job! Your profile
        <br />
        is strong and well optimized.
      </p>
    </div>
  );
};

// ─── Skill Competency Bar Component ──────────────────────────────────────────
const SkillBar = ({ name, score }) => (
  <div className="cp-skill-bar-row">
    <div className="cp-skill-meta">
      <span className="cp-skill-name">{name}</span>
      <span className="cp-skill-score">{score}/10</span>
    </div>
    <div className="cp-skill-track">
      <div
        className="cp-skill-fill"
        style={{ width: `${(score / 10) * 100}%` }}
      />
    </div>
  </div>
);

// ─── Candidate Profile Main Component ────────────────────────────────────────
const CandidateProfile = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: <IconDashboard /> },
    { name: "Profile", icon: <IconProfile /> },
    { name: "AI Report", icon: <IconReport /> },
    { name: "Skill Matching", icon: <IconSkill /> },
    { name: "Job Matches", icon: <IconJobs /> },
    { name: "Saved Jobs", icon: <IconSaved /> },
    { name: "Message", icon: <IconMessage />, badge: 2 },
    { name: "Learning Center", icon: <IconLearning /> },
  ];

  const highlights = [
    {
      icon: <IconExperience />,
      accentColor: "#8b5cf6",
      num: "2+",
      label: "Years of Experience",
      desc: "Built user-friendly, responsive web application.",
    },
    {
      icon: <IconEducation />,
      accentColor: "#22c55e",
      num: "B.E",
      label: "Computer Science",
      desc: "Bachelor of Engineering in Computer Science.",
    },
    {
      icon: <IconCertification />,
      accentColor: "#eab308",
      num: "3",
      label: "Certifications",
      desc: "Industry-recognized certifications.",
    },
    {
      icon: <IconSkillStar />,
      accentColor: "#f43f5e",
      num: "4",
      label: "Skills Learned",
      desc: "Core-skills in Frontend & backend tech.",
    },
  ];

  const profileCompleteness = [
    {
      label: "Personal Information",
      icon: <IconUserSmall />,
      iconBg: "#dcfce7",
    },
    { label: "Experience", icon: <IconBriefcaseSmall />, iconBg: "#f3e8ff" },
    { label: "Skills", icon: <IconCodeSmall />, iconBg: "#ffedd5" },
    { label: "Education", icon: <IconCapSmall />, iconBg: "#d1fae5" },
    { label: "Language", icon: <IconGlobeSmall />, iconBg: "#dbeafe" },
  ];

  const skills = [
    { name: "JavaScript", score: 9.8 },
    { name: "React", score: 8.5 },
    { name: "Node.js", score: 9.5 },
    { name: "Python", score: 8.2 },
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Sutherland Global Services",
      period: "June 2025 - Present.",
      location: "Chennai, India",
    },
    {
      title: "Front End Developer Intern",
      company: "TechNova Solutions",
      period: "February 2025 - June 2025.",
      location: "Chennai, India",
    },
  ];

  const education = [
    {
      degree: "Bachelor Of Engineering (CSE)",
      institution: "Sethu Institute Of Technology",
      period: "2016-2020",
      grade: "92%",
      cgpa: "CGPA: 8.5/10",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Dav matriculation School",
      period: "2015-2016",
      grade: "90%",
      cgpa: "",
    },
  ];

  return (
    <div className="cp-root">
      {/* Dynamic Header Integration */}
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="cp-body">
        {/* BACKDROP OVERLAY FOR MOBILE SIDEBAR */}
        {isSidebarOpen && (
          <div
            className="cp-sidebar-overlay"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* SIDEBAR WITH SCROLL SUPPORT */}
        <aside
          className={`cp-sidebar ${isSidebarOpen ? "cp-sidebar--open" : ""}`}
        >
          <nav className="cp-nav">
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`cp-nav-item ${activeTab === item.name ? "cp-nav-item--active" : ""}`}
                onClick={() => {
                  setActiveTab(item.name);
                  setIsSidebarOpen(false);
                }}
              >
                <span className="cp-nav-icon">{item.icon}</span>
                <span className="cp-nav-label">{item.name}</span>
                {item.badge && (
                  <span className="cp-nav-badge">{item.badge}</span>
                )}
              </button>
            ))}
          </nav>

          {/* UPGRADE PRO BOX */}
          <div className="cp-upgrade-box">
            <div className="cp-upgrade-header">
              <span className="cp-crown">👑</span>
              <span>Upgrade to Pro</span>
            </div>
            <p>Unlock Premium tools and grow your career faster</p>
            <ul>
              <li>
                <span className="cp-check-icon">✓</span> Advanced AI Insights
              </li>
              <li>
                <span className="cp-check-icon">✓</span> Unlimited Resumes
              </li>
            </ul>
            <button className="cp-upgrade-btn">Upgrade Now</button>
          </div>
        </aside>

        {/* MAIN PROFILE CONTENT */}
        <main className="cp-main">
          <div className="cp-scroll">
            {/* ROW 1: Profile Summary Card & Highlights Grid */}
            <section className="cp-top-row">
              <div className="cp-profile-card">
                <div className="cp-profile-left">
                  <div className="cp-avatar-wrap">
                    <img
                      src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=180&h=180&fit=crop&crop=face"
                      alt="Akash"
                      className="cp-profile-photo"
                    />
                    <button className="cp-camera-btn">
                      <IconCamera />
                    </button>
                  </div>

                  <div className="cp-profile-info">
                    <h2 className="cp-profile-name">
                      Akash <IconVerified />
                    </h2>
                    <p className="cp-profile-title">Full Stack Developer</p>

                    <div className="cp-contact-list">
                      <span>
                        <IconLocation /> Chennai, India
                      </span>
                      <span>
                        <IconPhone /> +91 8508035087
                      </span>
                      <span>
                        <IconMail /> akash123@gmail.com
                      </span>
                      <span>
                        <IconLinkedIn /> linkedin.com/in/akash
                      </span>
                    </div>

                    <button className="cp-edit-profile-btn">
                      Edit Profile
                    </button>
                  </div>
                </div>

                <ProfileStrengthDonut strength={85} />
              </div>

              {/* Highlights Grid */}
              <div className="cp-highlights-card">
                <h3 className="cp-card-title">Professional Highlights</h3>
                <div className="cp-highlights-grid">
                  {highlights.map((h, i) => (
                    <div
                      key={i}
                      className="cp-highlight-item"
                      style={{ borderLeftColor: h.accentColor }}
                    >
                      <div className="cp-highlight-icon-wrap">{h.icon}</div>
                      <div className="cp-highlight-text">
                        <span className="cp-highlight-num">{h.num}</span>
                        <span className="cp-highlight-label">{h.label}</span>
                        <span className="cp-highlight-desc">{h.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ROW 2: About Me | Profile Highlights | Skill Competency */}
            <section className="cp-mid-row">
              <div className="cp-card cp-about-card">
                <div className="cp-card-header">
                  <h3 className="cp-card-title">About Me</h3>
                  <button className="cp-icon-action">
                    <IconEdit />
                  </button>
                </div>
                <p className="cp-about-text">
                  Motivated and detail-oriented Full Stack Developer with 2+
                  years of experience in developing responsive web applications
                  using JavaScript, React, Node.js. Passionate about creating
                  efficient, scalable solutions and solving real-world problems.
                </p>
                <div className="cp-languages">
                  <span className="cp-languages-label">Languages Known</span>
                  <div className="cp-lang-tags">
                    <span>Tamil</span>
                    <span>English</span>
                  </div>
                </div>
              </div>

              <div className="cp-card cp-completeness-card">
                <h3 className="cp-card-title">Profile Highlights</h3>
                <ul className="cp-completeness-list">
                  {profileCompleteness.map((item, i) => (
                    <li key={i} className="cp-completeness-item">
                      <div className="cp-completeness-left">
                        <div
                          className="cp-completeness-icon"
                          style={{ backgroundColor: item.iconBg }}
                        >
                          {item.icon}
                        </div>
                        <span className="cp-completeness-label">
                          {item.label}
                        </span>
                      </div>
                      <div className="cp-completeness-right">
                        <span className="cp-completeness-status">
                          Completed
                        </span>
                        <IconCheckCircle />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cp-card cp-skills-card">
                <h3 className="cp-card-title">Skill Competency</h3>
                <div className="cp-skill-bars">
                  {skills.map((s, i) => (
                    <SkillBar key={i} name={s.name} score={s.score} />
                  ))}
                </div>
              </div>
            </section>

            {/* ROW 3: Experience & Education */}
            <section className="cp-bottom-row">
              {/* Experience Card */}
              <div className="cp-card cp-exp-card">
                <div className="cp-card-header">
                  <h3 className="cp-card-title">Experience</h3>
                  <button className="cp-add-btn">
                    <IconPlus /> Add
                  </button>
                </div>
                <div className="cp-timeline">
                  {experiences.map((exp, i) => (
                    <div key={i} className="cp-timeline-item">
                      <div className="cp-timeline-dot" />
                      <div className="cp-timeline-content">
                        <div className="cp-timeline-main">
                          <h4 className="cp-exp-title">{exp.title}</h4>
                          <p className="cp-exp-company">{exp.company}</p>
                          <p className="cp-exp-period">{exp.period}</p>
                        </div>
                        <div className="cp-timeline-meta">
                          <span className="cp-exp-location">
                            {exp.location}
                          </span>
                          <div className="cp-action-btns">
                            <button className="cp-action-btn">
                              <IconEdit />
                            </button>
                            <button className="cp-action-btn cp-action-btn--del">
                              <IconTrash />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Card */}
              <div className="cp-card cp-edu-card">
                <div className="cp-card-header">
                  <h3 className="cp-card-title">Education</h3>
                  <button className="cp-add-btn">
                    <IconPlus /> Add
                  </button>
                </div>
                <div className="cp-timeline">
                  {education.map((edu, i) => (
                    <div key={i} className="cp-timeline-item">
                      <div className="cp-timeline-dot" />
                      <div className="cp-timeline-content">
                        <div className="cp-timeline-main">
                          <h4 className="cp-exp-title">{edu.degree}</h4>
                          <p className="cp-exp-company">{edu.institution}</p>
                          {edu.cgpa && (
                            <p className="cp-exp-period">{edu.cgpa}</p>
                          )}
                        </div>
                        <div className="cp-timeline-meta">
                          <span className="cp-edu-period">
                            {edu.period} &nbsp;|&nbsp; {edu.grade}
                          </span>
                          <div className="cp-action-btns">
                            <button className="cp-action-btn">
                              <IconEdit />
                            </button>
                            <button className="cp-action-btn cp-action-btn--del">
                              <IconTrash />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CandidateProfile;
