import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Minus, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import "./CandidateSkills.css";

import profileUserImg from "../assets/Create-Resume/profile.png";
import emailIcon from "../assets/Create-Resume/email.png";
import phoneIcon from "../assets/Create-Resume/phone.png";
import locationPinIcon from "../assets/Create-Resume/location.png";
import linkedinIcon from "../assets/Create-Resume/linkedin.png";
import aiSuggestIcon from "../assets/Create-Resume/Ai suggest.png";
import downloadIcon from "../assets/Create-Resume/download.png";
import contentIcon from "../assets/Create-Resume/content.png";
import skillsIcon from "../assets/Create-Resume/skills.png";
import experienceIcon from "../assets/Create-Resume/experience.png";
import ideaIcon from "../assets/Create-Resume/idea.png";
import fullScreenIcon from "../assets/Create-Resume/fullScreen.png";
import undoIcon from "../assets/Create-Resume/undo.png";
import toolsImage from "../assets/Create-Resume/tools.png";
import frontendImage from "../assets/Create-Resume/frontend.png";
import otherSkillImage from "../assets/Create-Resume/otherskill.png";

const resumeSteps = [
  ["1. Personal Info", "/Resume-builder/candidate/candidate/personalinfo"],
  ["2. Experience", "/Resume-builder/candidate/candidate/experience"],
  ["3. Education", "/Resume-builder/candidate/candidate/education"],
  ["4. Skills", "/Resume-builder/candidate/candidate/skills"],
  ["5. Summary", "/Resume-builder/candidate/candidate/summary"],
  ["5. Review", "/Resume-builder/candidate/candidate/review"],
];

const initialCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    textIcon: "</>",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Python"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: frontendImage,
    skills: ["React", "Tailwind CSS", "Redux", "Next.js"],
  },
  {
    id: "tools",
    title: "Tool & Technologies",
    icon: toolsImage,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  },
  {
    id: "other",
    title: "Other Skills",
    icon: otherSkillImage,
    skills: ["Rest API", "Agile", "Problem Solving"],
  },
];

const completionMetrics = [
  ["Content", 85, contentIcon],
  ["Skills", 78, skillsIcon],
  ["Experience", 82, experienceIcon],
];

const profile = {
  name: "Ajith Akash",
  role: "Full stack Developer",
  email: "ajith@email.com",
  phone: "+91 95000 40000",
  location: "Bengaluru, India",
  linkedin: "linkedin.com/in/ajith",
};

const contactItems = [
  [emailIcon, "email"],
  [phoneIcon, "phone"],
  [locationPinIcon, "location"],
  [linkedinIcon, "linkedin"],
];

const preferredOrder = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Rest API",
  "Python",
];

function CandidateSkills() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(initialCategories);
  const [newSkill, setNewSkill] = useState("");
  const [activeCategory, setActiveCategory] = useState("programming");
  const [categoryInputs, setCategoryInputs] = useState({});
  const [zoom, setZoom] = useState(100);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [actionMenuOpen, setActionMenuOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [saved, setSaved] = useState(false);

  const allSkills = useMemo(
    () => categories.flatMap(({ skills }) => skills),
    [categories],
  );

  const previewSkills = useMemo(() => {
    const preferred = preferredOrder.filter((skill) =>
      allSkills.includes(skill),
    );
    return [
      ...preferred,
      ...allSkills.filter((skill) => !preferredOrder.includes(skill)),
    ];
  }, [allSkills]);

  const handleNavigate = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  const updateCategory = (categoryId, callback) => {
    setCategories((current) =>
      current.map((category) =>
        category.id === categoryId ? callback(category) : category,
      ),
    );
  };

  const addSkill = (categoryId, value) => {
    const skill = value.trim();
    if (!skill) return;

    updateCategory(categoryId, (category) =>
      category.skills.includes(skill)
        ? category
        : { ...category, skills: [...category.skills, skill] },
    );
  };

  const handleAddSkill = () => {
    addSkill(activeCategory, newSkill);
    setNewSkill("");
  };

  const handleRemoveSkill = (categoryId, skill) => {
    updateCategory(categoryId, (category) => ({
      ...category,
      skills: category.skills.filter((item) => item !== skill),
    }));
  };

  const setCategoryInput = (categoryId, value) =>
    setCategoryInputs((current) => ({ ...current, [categoryId]: value }));

  const addCategorySkill = (categoryId) => {
    addSkill(categoryId, categoryInputs[categoryId] || "");
    setCategoryInput(categoryId, "");
  };

  const handleCategoryInputKeyDown = (event, categoryId) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addCategorySkill(categoryId);
    }
    if (event.key === "Escape") setCategoryInput(categoryId, "");
  };

  const handleSave = () => {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1600);
  };

  const handleDownload = () => window.print();
  const previousPage = () =>
    navigate("/Resume-builder/candidate/candidate/education");
  const nextPage = () =>
    navigate("/Resume-builder/candidate/candidate/summary");

  const changeZoom = (amount) =>
    setZoom((current) => Math.min(130, Math.max(70, current + amount)));

  return (
    <main className="candidate-skills-page">
      <Header
        saved={saved}
        onSave={handleSave}
        onDownload={handleDownload}
        menuOpen={mobileMenuOpen}
        setMenuOpen={setMobileMenuOpen}
        actionMenuOpen={actionMenuOpen}
        setActionMenuOpen={setActionMenuOpen}
      />

      <StepNavigation onNavigate={handleNavigate} />

      <MobileNavigation open={mobileMenuOpen} onNavigate={handleNavigate} />

      <section className="skills-layout">
        <SkillsPanel
          categories={categories}
          newSkill={newSkill}
          setNewSkill={setNewSkill}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categoryInputs={categoryInputs}
          setCategoryInput={setCategoryInput}
          onAddSkill={handleAddSkill}
          onAddCategorySkill={addCategorySkill}
          onCategoryKeyDown={handleCategoryInputKeyDown}
          onRemoveSkill={handleRemoveSkill}
        />

        <LivePreview
          zoom={zoom}
          setZoom={setZoom}
          onZoomChange={changeZoom}
          onFullscreen={() => setFullscreen(true)}
          skills={previewSkills}
        />

        <CompletionCard onImprove={nextPage} />
      </section>

      <footer className="skills-footer">
        <button
          type="button"
          className="footer-previous"
          onClick={previousPage}
        >
          <ChevronLeft size={15} />
          Previous
        </button>
        <button type="button" className="footer-next" onClick={nextPage}>
          Next
          <ChevronRight size={15} />
        </button>
      </footer>

      {fullscreen && (
        <div className="fullscreen-overlay">
          <div className="fullscreen-window">
            <div className="fullscreen-header">
              <strong>Live Preview</strong>
              <button type="button" onClick={() => setFullscreen(false)}>
                Close
              </button>
            </div>
            <div className="fullscreen-body">
              <ResumePreview
                profile={profile}
                allSkills={previewSkills}
                fullscreen
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Header({
  saved,
  onSave,
  onDownload,
  menuOpen,
  setMenuOpen,
  actionMenuOpen,
  setActionMenuOpen,
}) {
  return (
    <header className="skills-header">
      <button
        type="button"
        className={
          menuOpen
            ? "mobile-menu-button mobile-menu-button-open"
            : "mobile-menu-button"
        }
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Resume sections"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="skills-header-left">
        <h1>Create New Resume</h1>
      </div>

      <div className="skills-header-actions">
        <div className="desktop-header-actions">
          <button
            type="button"
            className={saved ? "save-button save-button-saved" : "save-button"}
            onClick={onSave}
          >
            {saved ? "Saved" : "Save"}
          </button>

          <button
            type="button"
            className="download-button"
            onClick={onDownload}
          >
            <img src={downloadIcon} alt="" />
            <span>Download</span>
          </button>
        </div>

        <button
          type="button"
          className="mobile-action-button"
          onClick={() => setActionMenuOpen((open) => !open)}
          aria-label="Save and download options"
          aria-expanded={actionMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {actionMenuOpen && (
          <div className="mobile-action-menu">
            <button type="button" onClick={onSave}>
              {saved ? "Saved" : "Save"}
            </button>
            <button type="button" onClick={onDownload}>
              Download
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

function StepNavigation({ onNavigate }) {
  return (
    <nav className="resume-step-navigation" aria-label="Resume sections">
      {resumeSteps.map(([label, path]) => (
        <button
          key={label}
          type="button"
          className={
            label === "4. Skills"
              ? "resume-step resume-step-active"
              : "resume-step"
          }
          onClick={() => onNavigate(path)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}

function MobileNavigation({ open, onNavigate }) {
  return (
    <div
      className={
        open
          ? "mobile-navigation mobile-navigation-visible"
          : "mobile-navigation"
      }
    >
      {resumeSteps.map(([label, path]) => (
        <button
          key={label}
          type="button"
          className={
            label === "4. Skills"
              ? "mobile-navigation-item mobile-navigation-item-active"
              : "mobile-navigation-item"
          }
          onClick={() => onNavigate(path)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function SkillsPanel({
  categories,
  newSkill,
  setNewSkill,
  activeCategory,
  setActiveCategory,
  categoryInputs,
  setCategoryInput,
  onAddSkill,
  onAddCategorySkill,
  onCategoryKeyDown,
  onRemoveSkill,
}) {
  return (
    <section className="skills-column">
      <div className="skills-details-card">
        <div className="skills-title-block">
          <h2>Skills Details</h2>
          <p>Add relevant skills to highlight your experience</p>
        </div>

        <div className="add-skills-block">
          <div className="add-skills-row">
            <label htmlFor="skill-input" className="add-skills-label">
              Add Skills
            </label>
            <button
              type="button"
              className="ai-suggest-button"
              aria-label="AI Suggest"
            >
              <img src={aiSuggestIcon} alt="AI Suggest" />
            </button>
          </div>

          <input
            id="skill-input"
            className="main-skill-input"
            type="text"
            value={newSkill}
            placeholder="Enter a skill (e.g. JavaScript)"
            onChange={(event) => setNewSkill(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                onAddSkill();
              }
            }}
          />
        </div>

        <div className="skill-categories-title">Skill Categories</div>

        <div className="skill-categories">
          {categories.map((category) => (
            <SkillCategory
              key={category.id}
              category={category}
              input={categoryInputs[category.id] || ""}
              editing={
                activeCategory === category.id &&
                Boolean(categoryInputs[category.id])
              }
              setActiveCategory={setActiveCategory}
              setInput={setCategoryInput}
              onAdd={onAddCategorySkill}
              onKeyDown={onCategoryKeyDown}
              onRemove={onRemoveSkill}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({
  category,
  input,
  editing,
  setActiveCategory,
  setInput,
  onAdd,
  onKeyDown,
  onRemove,
}) {
  return (
    <article className="skill-category-card">
      <div className="skill-category-header">
        <div className="skill-category-title">
          <div className="skill-category-icon">
            {category.icon ? (
              <img src={category.icon} alt="" />
            ) : (
              <span>{category.textIcon}</span>
            )}
          </div>
          <h3>{category.title}</h3>
        </div>
      </div>

      <div className="skill-chips">
        {category.skills.map((skill) => (
          <span className="skill-chip" key={skill}>
            <span>{skill}</span>
            <button
              type="button"
              aria-label={`Remove ${skill}`}
              onClick={() => onRemove(category.id, skill)}
            >
              ×
            </button>
          </span>
        ))}

        {editing && (
          <div className="category-inline-input">
            <input
              autoFocus
              value={input}
              placeholder="Add skill"
              onChange={(event) => setInput(category.id, event.target.value)}
              onKeyDown={(event) => onKeyDown(event, category.id)}
            />
            <button type="button" onClick={() => onAdd(category.id)}>
              +
            </button>
          </div>
        )}
      </div>

      {!editing && (
        <button
          type="button"
          className="add-category-skill"
          onClick={() => {
            setActiveCategory(category.id);
            setInput(category.id, "");
          }}
        >
          + Add Skills
        </button>
      )}
    </article>
  );
}

function LivePreview({ zoom, setZoom, onZoomChange, onFullscreen, skills }) {
  return (
    <section className="live-preview-card">
      <div className="live-preview-header">
        <h2>Live Preview</h2>

        <div className="preview-toolbar">
          <button
            type="button"
            className="preview-control"
            onClick={() => onZoomChange(-10)}
            aria-label="Zoom out"
          >
            <Minus size={14} />
          </button>

          <span className="preview-zoom">{zoom}%</span>

          <button
            type="button"
            className="preview-control"
            onClick={() => onZoomChange(10)}
            aria-label="Zoom in"
          >
            <Plus size={14} />
          </button>

          <button
            type="button"
            className="preview-control preview-image-control"
            onClick={onFullscreen}
            aria-label="Fullscreen"
          >
            <img src={fullScreenIcon} alt="" />
          </button>

          <button
            type="button"
            className="preview-control preview-image-control"
            onClick={() => setZoom(100)}
            aria-label="Refresh"
          >
            <img src={undoIcon} alt="" />
          </button>
        </div>
      </div>

      <div className="live-preview-body">
        <div
          className="resume-preview-wrapper"
          style={{ "--resume-scale": zoom / 100 }}
        >
          <ResumePreview profile={profile} allSkills={skills} />
        </div>
      </div>
    </section>
  );
}

function CompletionCard({ onImprove }) {
  return (
    <section className="overall-completion-card">
      <h2>Overall Completion</h2>

      <div className="completion-main">
        <div className="completion-score">
          <div className="completion-circle">
            <div className="completion-circle-inner">
              <strong>92</strong>
              <span>/100</span>
            </div>
          </div>
        </div>

        <div className="completion-description">
          <strong>Good</strong>
          <p>Your resume is well-structured and can be improved further.</p>
          <button type="button" onClick={onImprove}>
            Improve Resume
          </button>
        </div>

        <div className="completion-metrics">
          {completionMetrics.map(([label, value, icon]) => (
            <div className="completion-metric" key={label}>
              <div className="completion-metric-name">
                <img src={icon} alt="" />
                <span>{label}</span>
              </div>
              <strong className="completion-metric-value">{value}%</strong>
              <div className="completion-progress">
                <span style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="completion-tip">
        <img src={ideaIcon} alt="" />
        <span>
          Tip: Add more quantifiable achievements in your experience section to
          improve your score.
        </span>
      </div>
    </section>
  );
}

function ResumePreview({ profile, allSkills, fullscreen = false }) {
  return (
    <article
      className={
        fullscreen ? "resume-preview fullscreen-resume" : "resume-preview"
      }
    >
      <div className="resume-top">
        <div className="resume-profile-image">
          <img src={profileUserImg} alt={profile.name} />
        </div>

        <div className="resume-profile-content">
          <h3>{profile.name}</h3>
          <p className="resume-job-title">{profile.role}</p>

          <div className="resume-contact-details">
            {contactItems.map(([icon, key]) => (
              <span key={key}>
                <img src={icon} alt="" />
                <span>{profile[key]}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <ResumeSection title="PROFESSIONAL SUMMARY">
        <p>
          Full Stack Developer with 3+ years of experience building responsive
          web applications using HTML, CSS, JavaScript and React. Passionate
          about creating intuitive user interfaces and optimizing performance.
        </p>
      </ResumeSection>

      <ResumeSection title="EXPERIENCE">
        <div className="resume-experience-heading">
          <div>
            <strong>Full Stack Developer</strong>
            <span>Tech Company</span>
          </div>
          <span>Jan 2022 - Present</span>
        </div>

        <ul>
          <li>
            Developed responsive web applications using React, Redux and
            Tailwind CSS.
          </li>
          <li>Collaborated with UX/UI designers and backend developers.</li>
          <li>Improved website performance by 30%.</li>
        </ul>
      </ResumeSection>

      <ResumeSection title="EDUCATION">
        <div className="resume-education-heading">
          <div>
            <strong>Bachelor of Computer Science</strong>
            <span>Anna University</span>
          </div>
          <span>2018 - 2020</span>
        </div>
      </ResumeSection>

      <ResumeSection title="SKILLS">
        <div className="resume-skill-chips">
          {allSkills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </ResumeSection>
    </article>
  );
}

function ResumeSection({ title, children }) {
  return (
    <section className="resume-section">
      <h4>{title}</h4>
      {children}
    </section>
  );
}

export default CandidateSkills;
