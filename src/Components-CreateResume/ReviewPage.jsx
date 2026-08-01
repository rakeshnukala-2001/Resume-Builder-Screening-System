import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CandidateHeader from "../Components-Candidate/CandidateHeader";
import Sidebar from "./Sidebar";
import "./ReviewPage.css";

// Importing AI icons
import improveWritingIcon from "../assets/Create-Resume/improve-writing.png";
import atsFriendlyIcon from "../assets/Create-Resume/ats-friendly.png";
import addKeywordsIcon from "../assets/Create-Resume/add-keywords.png";
import optimizeJdIcon from "../assets/Create-Resume/optimize-jd.png";
import correctGrammarIcon from "../assets/Create-Resume/correct-grammar.png";
import rewriteIcon from "../assets/Create-Resume/rewrite.png";
import shortenIcon from "../assets/Create-Resume/shorten.png";
import expandIcon from "../assets/Create-Resume/expand.png";

const ReviewPage = ({ onPrevious, onNext }) => {
  const navigate = useNavigate();

  // Layout & Sidebar state management
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const [formData, setFormData] = useState({
    jobTitle: "",
    experienceLevel: "2-4 Years",
    company: "Adhway",
    languagePreference: "English",
    careerObjective: "",
    summary: `Results-driven Full Stack Development with 4+ years of experience in designing and developing scalable web application using React.js, Node.js, Express.js, and MongoDB. Proven ability to build responsive user interfaces, develop RESTful APIs, and optimize application performance. Passionate about solving complex problems and delivering innovative solutions that drive business growth.`,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "careerObjective" && value.length > 150) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.summary.trim()) {
      newErrors.summary = "Summary is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Next / Save Resume Handler
  const handleNext = () => {
    if (validateForm()) {
      if (onNext) {
        onNext(formData);
      } else {
        navigate("/Resume-builder/candidate/candidate/dashboard");
      }
    }
  };

  // Previous Button Handler
  const handlePrevious = () => {
    if (onPrevious) {
      onPrevious();
    } else {
      navigate("/Resume-builder/candidate/candidate/skills");
    }
  };

  const aiTools = [
    {
      id: "improve_writing",
      title: "Improve Writing",
      desc: "Enhance clarity and impact",
      icon: improveWritingIcon,
    },
    {
      id: "ats_friendly",
      title: "Make it ATS Friendly",
      desc: "Optimize for ATS system",
      icon: atsFriendlyIcon,
    },
    {
      id: "add_keywords",
      title: "Add Keywords",
      desc: "Include relevent keywords",
      icon: addKeywordsIcon,
    },
    {
      id: "optimize_jd",
      title: "Optimize for JD",
      desc: "Match for description",
      icon: optimizeJdIcon,
    },
    {
      id: "correct_grammar",
      title: "Correct Grammar",
      desc: "Fix grammar and spelling",
      icon: correctGrammarIcon,
    },
    {
      id: "rewrite_professionally",
      title: "Rewrite Professionally",
      desc: "Improve professionalism",
      icon: rewriteIcon,
    },
    {
      id: "shorten_summary",
      title: "Shorten Summary",
      desc: "Make it concise",
      icon: shortenIcon,
    },
    {
      id: "expand_summary",
      title: "Expand Summary",
      desc: "Add more details",
      icon: expandIcon,
    },
  ];

  return (
    <div className="can-dashboard-page-wrapper">
      {/* Top Main Candidate Header */}
      <CandidateHeader
        mobileMenuOpen={isSidebarOpen}
        setMobileMenuOpen={setIsSidebarOpen}
      />

      <div className="can-dashboard-layout">
        {/* Left Sidebar Menu */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        {/* Central Content Canvas */}
        <main className="can-dashboard-main">
          <div className="summary-page-container">
            {/* Review Section Info */}
            <div className="summary-header">
              <h1 className="summary-title">FINAL REVIEW & SUMMARY</h1>
              <p className="summary-subtitle">
                Review your profile details and craft an impactful summary
                before completing your resume.
              </p>
            </div>

            {/* Main Inputs Card */}
            <div className="summary-card">
              {/* Form Row Inputs */}
              <div className="summary-form-row four-col">
                <div className="form-group">
                  <label>Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="e.g., Full Stack Developer"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Experience Level</label>
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                  >
                    <option value="0-1 Years">0-1 Years</option>
                    <option value="2-4 Years">2-4 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Language Preference</label>
                  <input
                    type="text"
                    name="languagePreference"
                    value={formData.languagePreference}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Career Objective */}
              <div className="form-group career-objective-group">
                <label>
                  Career Objective{" "}
                  <span className="optional-text">(Optional)</span>
                </label>
                <div className="textarea-wrapper">
                  <input
                    type="text"
                    name="careerObjective"
                    placeholder="Write your career goal in one or two sentences..."
                    value={formData.careerObjective}
                    onChange={handleInputChange}
                  />
                  <span className="char-counter">
                    {formData.careerObjective.length}/150
                  </span>
                </div>
              </div>

              {/* Summary Textarea */}
              <div className="form-group summary-textarea-group">
                <label>Summary</label>
                <p className="field-hint">
                  Write 2-4 lines about your experience, skills and
                  achievements.
                </p>
                <textarea
                  name="summary"
                  rows="5"
                  value={formData.summary}
                  onChange={handleInputChange}
                  className={errors.summary ? "error-border" : ""}
                />
                {errors.summary && (
                  <span className="error-text">{errors.summary}</span>
                )}
              </div>

              {/* AI Enhancement Section */}
              <div className="ai-enhance-section">
                <h3>AI Enhance Your Summary</h3>
                <p className="ai-subtitle">
                  Improve your summary with AI-powered tools.
                </p>

                <div className="ai-tools-grid">
                  {aiTools.map((tool) => (
                    <button
                      key={tool.id}
                      type="button"
                      className="ai-tool-card"
                    >
                      <div className="ai-tool-icon">
                        <img src={tool.icon} alt={tool.title} />
                      </div>
                      <div className="ai-tool-info">
                        <span className="ai-tool-title">{tool.title}</span>
                        <span className="ai-tool-desc">{tool.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="summary-navigation-buttons">
              <button
                type="button"
                className="btn-nav btn-previous"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn-nav btn-next"
                onClick={handleNext}
              >
                Finish & Save
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReviewPage;
