import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Summary.css";

/* =========================================================
   ASSETS
   ========================================================= */

import profileUserImg from "../assets/Create-Resume/profile.png";
import emailIcon from "../assets/Create-Resume/email.png";
import phoneIcon from "../assets/Create-Resume/phone.png";
import locationPinIcon from "../assets/Create-Resume/location.png";
import linkedinIcon from "../assets/Create-Resume/linkedin.png";

import aiSuggestIcon from "../assets/Create-Resume/Ai suggest.png";
import downloadIcon from "../assets/Create-Resume/download.png";
import tickIcon from "../assets/Create-Resume/tick.png";
import boldIcon from "../assets/Create-Resume/bold.png";
import italicIcon from "../assets/Create-Resume/italic-outline.png";
import underlineIcon from "../assets/Create-Resume/underline-outline.png";
import listIcon from "../assets/Create-Resume/list.png";
import linkIcon from "../assets/Create-Resume/link.png";
import generateIcon from "../assets/Create-Resume/AI-generate.png";
import regenerateIcon from "../assets/Create-Resume/regenerate.png";

import contentIcon from "../assets/Create-Resume/content.png";
import skillsIcon from "../assets/Create-Resume/skills.png";
import experienceIcon from "../assets/Create-Resume/experience.png";
import ideaIcon from "../assets/Create-Resume/idea.png";
import screenSizeIcon from "../assets/Create-Resume/fullScreen.png";
import refreshIcon from "../assets/Create-Resume/undo.png";

/* =========================================================
   RESUME DATA
   ========================================================= */

const SUMMARY =
  "Full Stack Developer with 3+ years of experience building responsive web applications using HTML, CSS, JavaScript and React. Passionate about creating intuitive user interfaces and optimizing performance.";

const GENERATED_SUMMARIES = [
  "Frontend Developer with 3+ years of experience in designing and developing responsive web applications using HTML, CSS, JavaScript, React and Tailwind CSS.",
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST API",
  "Python",
];

const steps = [
  "1.Personal Info",
  "2.Experience",
  "3.Education",
  "4.Skills",
  "5.Summary",
  "6.Review",
];

const stepRoutes = [
  "/Resume-builder/candidate/candidate/personal-info",
  "/Resume-builder/candidate/candidate/experience",
  "/Resume-builder/candidate/candidate/education",
  "/Resume-builder/candidate/candidate/skills",
  null,
  "/Resume-builder/candidate/candidate/review",
];

const MAX_SUMMARY_LENGTH = 500;
const MIN_ZOOM = 50;
const MAX_ZOOM = 150;

/* =========================================================
   SMALL HELPERS
   ========================================================= */

function getTextLength(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent.length;
}

function cleanEditorHtml(html) {
  return html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");
}

function isValidUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

/* =========================================================
   REUSABLE ICON BUTTON
   ========================================================= */

function IconButton({ src, alt, onClick, className = "" }) {
  return (
    <button
      type="button"
      className={`sum-icon-button ${className}`}
      onClick={onClick}
      aria-label={alt}
    >
      <img src={src} alt="" />
    </button>
  );
}

/* =========================================================
   LIVE PREVIEW TOOLBAR
   ========================================================= */

function PreviewToolbar({ zoom, setZoom, isFullScreen, setIsFullScreen }) {
  const decreaseZoom = () => {
    setZoom((currentZoom) => Math.max(MIN_ZOOM, currentZoom - 10));
  };

  const increaseZoom = () => {
    setZoom((currentZoom) => Math.min(MAX_ZOOM, currentZoom + 10));
  };

  const handleScreenSize = () => {
    setIsFullScreen((currentValue) => !currentValue);
  };

  const handleRefresh = () => {
    setZoom(100);
    setIsFullScreen(false);
  };

  return (
    <div className="sum-preview-toolbar">
      <button
        type="button"
        className="sum-zoom-button"
        aria-label="Zoom out"
        onClick={decreaseZoom}
        disabled={zoom <= MIN_ZOOM}
      >
        −
      </button>

      <span className="sum-zoom-value">{zoom}%</span>

      <button
        type="button"
        className="sum-zoom-button"
        aria-label="Zoom in"
        onClick={increaseZoom}
        disabled={zoom >= MAX_ZOOM}
      >
        +
      </button>

      <IconButton
        src={screenSizeIcon}
        alt={isFullScreen ? "Close full screen preview" : "Full screen preview"}
        className="sum-toolbar-small"
        onClick={handleScreenSize}
      />

      <IconButton
        src={refreshIcon}
        alt="Refresh preview"
        className="sum-toolbar-small"
        onClick={handleRefresh}
      />
    </div>
  );
}

/* =========================================================
   LIVE RESUME PREVIEW
   ========================================================= */

function ResumePreview({ summary }) {
  const [zoom, setZoom] = useState(100);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const previewCardStyle = {
    ...(isFullScreen
      ? {
          position: "fixed",
          top: "50%",
          left: "50%",
          width: "min(900px, 90vw)",
          maxHeight: "90vh",
          transform: "translate(-50%, -50%)",
          zIndex: 1001,
          background: "#ffffff",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
        }
      : {}),
    overflowY: isFullScreen || zoom !== 100 ? "auto" : "hidden",
  };

  const previewSummary = summary.trim()
    ? summary
    : "<p>No professional summary added yet.</p>";

  return (
    <section className="sum-preview-section">
      <div className="sum-preview-title-row">
        <h2>Live Preview</h2>

        <PreviewToolbar
          zoom={zoom}
          setZoom={setZoom}
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
        />
      </div>

      {isFullScreen && (
        <div
          className="sum-preview-fullscreen-overlay"
          onClick={() => setIsFullScreen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.55)",
            zIndex: 1000,
          }}
        />
      )}

      <div
        className={`sum-preview-card ${
          isFullScreen ? "sum-preview-card-fullscreen" : ""
        }`}
        style={previewCardStyle}
      >
        <div
          className="sum-resume-preview-inner"
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: "top left",
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
          }}
        >
          <div className="sum-resume-header">
            <img
              className="sum-resume-profile"
              src={profileUserImg}
              alt="Ajith Akash"
            />

            <div className="sum-resume-identity">
              <h1>Ajith Akash</h1>
              <p>Full stack Developer</p>

              <div className="sum-resume-contact">
                <div>
                  <img src={emailIcon} alt="" />
                  <span>Ajith@email.com</span>
                </div>

                <div>
                  <img src={phoneIcon} alt="" />
                  <span>+91 95000 40000</span>
                </div>

                <div>
                  <img src={locationPinIcon} alt="" />
                  <span>Bengaluru, India</span>
                </div>

                <div>
                  <img src={linkedinIcon} alt="" />
                  <span>linkedin.com/in/Ajith</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sum-resume-section">
            <h3>PROFESSIONAL SUMMARY</h3>
            <div dangerouslySetInnerHTML={{ __html: previewSummary }} />
          </div>

          <div className="sum-resume-section">
            <h3>EXPERIENCE</h3>

            <div className="sum-resume-section-heading">
              <strong>Senior Full Stack developer</strong>
              <span>Jan 2022 - Present</span>
            </div>

            <p className="sum-company-name">Tech Company</p>

            <ul>
              <li>
                Developed responsive web applications using React, Redux and
                Tailwind CSS.
              </li>
              <li>Collaborated with UX/UI designers and backend developers.</li>
              <li>Improved website performance by 30%.</li>
            </ul>
          </div>

          <div className="sum-resume-section">
            <h3>EDUCATION</h3>

            <div className="sum-resume-section-heading">
              <strong>Bachelor of Computer Science</strong>
              <span>2018 - 2020</span>
            </div>

            <p className="sum-company-name">Anna University</p>
          </div>

          <div className="sum-resume-section sum-resume-skills">
            <h3>SKILLS</h3>

            <div className="sum-resume-skill-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROFESSIONAL SUMMARY EDITOR
   ========================================================= */

function SummaryEditor({ summary, setSummary }) {
  const [selectedSummary, setSelectedSummary] = useState(
    GENERATED_SUMMARIES[0],
  );
  const [job, setJob] = useState("");
  const [editorError, setEditorError] = useState("");

  const characterCount = getTextLength(summary);

  const applyFormatting = (command) => {
    document.execCommand(command, false, null);
  };

  const applyLink = () => {
    const url = window.prompt("Enter URL:");

    if (!url) {
      return;
    }

    if (!isValidUrl(url.trim())) {
      setEditorError(
        "Please enter a valid URL starting with http:// or https://.",
      );
      return;
    }

    setEditorError("");
    document.execCommand("createLink", false, url.trim());
  };

  const handleEditorInput = (event) => {
    const html = cleanEditorHtml(event.currentTarget.innerHTML);
    const textLength = getTextLength(html);

    if (textLength > MAX_SUMMARY_LENGTH) {
      setEditorError(`Summary cannot exceed ${MAX_SUMMARY_LENGTH} characters.`);
      return;
    }

    setEditorError("");
    setSummary(html);
  };

  const applyGeneratedSummary = () => {
    if (!selectedSummary) {
      setEditorError("Please select a summary first.");
      return;
    }

    if (selectedSummary.length > MAX_SUMMARY_LENGTH) {
      setEditorError("The selected summary is too long.");
      return;
    }

    setEditorError("");
    setSummary(selectedSummary);
  };

  const customizeSummary = () => {
    const jobTitle = job.trim();

    if (!jobTitle) {
      setEditorError("Please enter a job title or keyword.");
      return;
    }

    if (jobTitle.length > 100) {
      setEditorError("Job title or keywords cannot exceed 100 characters.");
      return;
    }

    const customizedSummary = `Frontend Developer focused on ${jobTitle}, building responsive web applications with React, JavaScript and modern CSS while delivering intuitive and high-quality user experiences.`;

    if (customizedSummary.length > MAX_SUMMARY_LENGTH) {
      setEditorError("The customized summary is too long.");
      return;
    }

    setEditorError("");
    setSummary(customizedSummary);
  };

  const handleToolbarMouseDown = (event, command) => {
    event.preventDefault();
    applyFormatting(command);
  };

  return (
    <section className="sum-editor-card">
      <div className="sum-editor-heading">
        <div className="sum-editor-heading-content">
          <h2>Professional Summary</h2>
          <p>
            Write a professional summary that highlights your key strengths and
            value.
          </p>
        </div>

        <button
          type="button"
          className="sum-ai-suggest-button"
          aria-label="AI Suggest"
          onClick={applyGeneratedSummary}
        >
          <img src={aiSuggestIcon} alt="" />
        </button>
      </div>

      <div className="sum-tips-card">
        <h3>Summary Tips</h3>

        <div className="sum-tip-row">
          <img src={tickIcon} alt="" />
          <span>Keep it concise and impactful (3-5 lines).</span>
        </div>

        <div className="sum-tip-row">
          <img src={tickIcon} alt="" />
          <span>Highlight your experience, Key skills and achievements.</span>
        </div>

        <div className="sum-tip-row">
          <img src={tickIcon} alt="" />
          <span>Tailor it to the job you're applying for.</span>
        </div>
      </div>

      <div className="sum-field">
        <label htmlFor="sum-summary-text">Write Your Summary</label>

        <div className="sum-editor-box">
          <div className="sum-editor-toolbar">
            <button
              type="button"
              aria-label="Bold"
              onMouseDown={(event) => handleToolbarMouseDown(event, "bold")}
            >
              <img src={boldIcon} alt="" />
            </button>

            <button
              type="button"
              aria-label="Italic"
              onMouseDown={(event) => handleToolbarMouseDown(event, "italic")}
            >
              <img src={italicIcon} alt="" />
            </button>

            <button
              type="button"
              aria-label="Underline"
              onMouseDown={(event) =>
                handleToolbarMouseDown(event, "underline")
              }
            >
              <img src={underlineIcon} alt="" />
            </button>

            <button
              type="button"
              aria-label="List"
              onMouseDown={(event) =>
                handleToolbarMouseDown(event, "insertUnorderedList")
              }
            >
              <img src={listIcon} alt="" />
            </button>

            <button
              type="button"
              aria-label="Link"
              onMouseDown={(event) => {
                event.preventDefault();
                applyLink();
              }}
            >
              <img src={linkIcon} alt="" />
            </button>
          </div>

          <div
            id="sum-summary-text"
            className="sum-textarea"
            contentEditable
            suppressContentEditableWarning
            onInput={handleEditorInput}
            dangerouslySetInnerHTML={{ __html: summary }}
          />

          <span className="sum-character-count">
            {characterCount}/{MAX_SUMMARY_LENGTH} characters
          </span>
        </div>

        {editorError && (
          <p className="sum-editor-error" role="alert">
            {editorError}
          </p>
        )}
      </div>

      <div className="sum-generated-section">
        <div className="sum-generated-heading">
          <div className="sum-generated-title">
            <img src={generateIcon} alt="" />
            <h3>AI Generated Summaries</h3>
          </div>

          <p>Choose a customized or summary generated for you.</p>
        </div>

        {GENERATED_SUMMARIES.map((item) => (
          <button
            type="button"
            className={`sum-generated-summary ${
              selectedSummary === item ? "sum-selected" : ""
            }`}
            key={item}
            onClick={() => {
              setSelectedSummary(item);
              setEditorError("");
            }}
          >
            <span className="sum-radio-dot" />
            <span>{item}</span>
          </button>
        ))}

        <button
          type="button"
          className="sum-generate-button"
          onClick={applyGeneratedSummary}
        >
          <img src={regenerateIcon} alt="" />
          <span>Generate more Summaries</span>
        </button>
      </div>

      <div className="sum-personalize-card">
        <h3>Personalize for Job (Optional)</h3>
        <p>Enter job title or keywords to tailor your summary</p>

        <div className="sum-personalize-row">
          <input
            value={job}
            maxLength={100}
            onChange={(event) => setJob(event.target.value)}
            placeholder="e.g. Frontend Developer, React, UI Developer"
          />

          <button type="button" onClick={customizeSummary}>
            Customize
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   OVERALL COMPLETION
   ========================================================= */

function CompletionCard() {
  const metrics = [
    { label: "Content", value: 85, icon: contentIcon },
    { label: "Skills", value: 78, icon: skillsIcon },
    { label: "Experience", value: 82, icon: experienceIcon },
  ];

  return (
    <section className="sum-completion-card">
      <h2>Overall Completion</h2>

      <div className="sum-completion-content">
        <div className="sum-score-area">
          <div className="sum-score-circle">
            <strong>92</strong>
            <span>/100</span>
          </div>

          <div className="sum-score-info">
            <strong>Good</strong>
            <p>Your resume is well-structured and can be improved further.</p>
            <button type="button">Improve Resume</button>
          </div>
        </div>

        <div className="sum-metric-area">
          {metrics.map((metric) => (
            <div className="sum-metric" key={metric.label}>
              <div className="sum-metric-title">
                <img src={metric.icon} alt="" />
                <span>{metric.label}</span>
              </div>

              <strong>{metric.value}%</strong>

              <div className="sum-metric-track">
                <span style={{ width: `${metric.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sum-completion-tip">
        <img src={ideaIcon} alt="" />
        <span>
          Tips: Add more quantifiable achievements in your experience section to
          improve your score.
        </span>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN SUMMARY PAGE
   ========================================================= */

export default function Summary() {
  const navigate = useNavigate();

  const [summary, setSummary] = useState(SUMMARY);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const goPrevious = () => {
    navigate("/Resume-builder/candidate/candidate/skills");
  };

  const goNext = () => {
    navigate("/Resume-builder/candidate/candidate/review");
  };

  const saveResume = () => {
    localStorage.setItem("resume-summary", summary);
    setMoreOpen(false);
  };

  const downloadResume = () => {
    setMoreOpen(false);
    window.print();
  };

  const handleStepNavigation = (index) => {
    const route = stepRoutes[index];
    setMenuOpen(false);
    if (route) {
      navigate(route);
    }
  };

  const handleMenuClick = () => {
    setMenuOpen((previous) => !previous);
    setMoreOpen(false);
  };

  const handleMoreClick = () => {
    setMoreOpen((previous) => !previous);
    setMenuOpen(false);
  };

  return (
    <main className="sum-page">
      <div className="sum-container">
        {/* HEADER */}
        <header className="sum-header">
          <button
            type="button"
            className={`sum-mobile-menu-button ${
              menuOpen ? "sum-is-open" : ""
            }`}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={handleMenuClick}
          >
            <span />
            <span />
            <span />
          </button>

          <h1 className="sum-header-title">Create New Resume</h1>

          <div className="sum-header-actions">
            <button
              type="button"
              className="sum-save-button"
              onClick={saveResume}
            >
              Save
            </button>

            <button
              type="button"
              className="sum-download-button"
              onClick={downloadResume}
            >
              <span>Download</span>
              <img src={downloadIcon} alt="" />
            </button>
          </div>

          <button
            type="button"
            className={`sum-mobile-more-button ${
              moreOpen ? "sum-is-open" : ""
            }`}
            aria-label="Open more options"
            aria-expanded={moreOpen}
            onClick={handleMoreClick}
          >
            <span />
            <span />
            <span />
          </button>

          {menuOpen && (
            <nav
              className="sum-mobile-navigation-menu"
              aria-label="Resume navigation"
            >
              {steps.map((step, index) => (
                <button
                  type="button"
                  key={step}
                  className={index === 4 ? "sum-active" : ""}
                  onClick={() => handleStepNavigation(index)}
                >
                  {step}
                </button>
              ))}
            </nav>
          )}

          {moreOpen && (
            <div className="sum-mobile-actions-menu" role="menu">
              <button type="button" role="menuitem" onClick={saveResume}>
                <span>Save</span>
              </button>

              <button type="button" role="menuitem" onClick={downloadResume}>
                <span>Download</span>
                <img src={downloadIcon} alt="" />
              </button>
            </div>
          )}
        </header>

        {/* DESKTOP STEP NAVIGATION */}
        <nav className="sum-steps" aria-label="Resume steps">
          {steps.map((step, index) => (
            <button
              type="button"
              key={step}
              className={index === 4 ? "sum-active" : ""}
              onClick={() => handleStepNavigation(index)}
            >
              {step}
            </button>
          ))}
        </nav>

        {/* MAIN CONTENT */}
        <div className="sum-layout">
          <SummaryEditor summary={summary} setSummary={setSummary} />

          <ResumePreview summary={summary} />

          <CompletionCard />
        </div>

        {/* PREVIOUS / NEXT NAVIGATION */}
        <div className="sum-page-navigation">
          <button
            type="button"
            className="sum-previous-button"
            onClick={goPrevious}
          >
            Previous
          </button>

          <button type="button" className="sum-next-button" onClick={goNext}>
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
