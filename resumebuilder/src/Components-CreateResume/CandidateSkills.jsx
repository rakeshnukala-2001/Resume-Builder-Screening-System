import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CandidateHeader from "./../Components-Candidate/CandidateHeader";
import Sidebar from "./Sidebar";
import "./CandidateSkills.css";

import editIcon from "../assets/Candidate/Profile-images/edit.png";
import deleteIcon from "../assets/Candidate/Profile-images/delete.png";

/* ===========================================
   Default Data
=========================================== */
const DEFAULT_TECH_SKILLS = [
  { id: 1, name: "Java", level: "Expert", match: 95 },
  { id: 2, name: "Python", level: "Advanced", match: 86 },
  { id: 3, name: "React", level: "Expert", match: 98 },
  { id: 4, name: "Node.js", level: "Intermediate", match: 72 },
];

const DEFAULT_TECH_TAGS = [
  "Java",
  "Python",
  "React.js",
  "Node.js",
  "SQL",
  "MongoDB",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Git",
  "REST API",
  "Bootstrap",
];

const DEFAULT_SOFT_SKILLS = [
  "Communication",
  "Leadership",
  "Team Work",
  "Problem Solving",
  "Time Management",
  "Critical Thinking",
  "Adaptability",
  "Creativity",
];

const DEFAULT_ADDITIONAL = [
  "VS Code",
  "Postman",
  "Figma",
  "Agile",
  "Jira",
  "AWS(Basic)",
];

const DEFAULT_DEV_TOOLS = [
  "Docker Desktop",
  "IntelliJ IDEA",
  "Git",
  "GitHub",
  "Swagger",
];

const LEVELS = ["Beginner", "Intermediate", "Advanced", "Expert"];

const LEVEL_META = {
  Expert: { bg: "#ede9fe", color: "#7c3aed" },
  Advanced: { bg: "#dbeafe", color: "#2563eb" },
  Intermediate: { bg: "#fef3c7", color: "#d97706" },
  Beginner: { bg: "#dcfce7", color: "#16a34a" },
};

/* ===========================================
   CandidateSkills Component
=========================================== */
const CandidateSkills = ({ onPrevious, onNext }) => {
  const navigate = useNavigate();

  // Layout & Navigation State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  /* ---- Skills Data States ---- */
  const [techSkills, setTechSkills] = useState(DEFAULT_TECH_SKILLS);
  const [techTags, setTechTags] = useState(DEFAULT_TECH_TAGS);
  const [softSkills, setSoftSkills] = useState(DEFAULT_SOFT_SKILLS);
  const [additional, setAdditional] = useState(DEFAULT_ADDITIONAL);
  const [devTools, setDevTools] = useState(DEFAULT_DEV_TOOLS);

  // Skill row modal
  const [showSkillModal, setShowSkillModal] = useState(false);
  const [editSkillId, setEditSkillId] = useState(null);
  const [skillForm, setSkillForm] = useState({
    name: "",
    level: "Intermediate",
    match: "",
  });

  // Tag modal
  const [tagModal, setTagModal] = useState(null);
  const [tagInput, setTagInput] = useState("");

  /* ---- Helpers ---- */
  const lvlMeta = (level) =>
    LEVEL_META[level] ?? { bg: "#f1f5f9", color: "#64748b" };

  const tagData = {
    tech: { list: techTags, set: setTechTags, label: "Technical Skill" },
    soft: { list: softSkills, set: setSoftSkills, label: "Soft Skill" },
    additional: {
      list: additional,
      set: setAdditional,
      label: "Additional Skill/Tool",
    },
    dev: { list: devTools, set: setDevTools, label: "Development Tool" },
  };

  /* ---- Navigation Handlers ---- */
  const handlePreviousNavigation = () => {
    if (onPrevious) {
      onPrevious();
    } else {
      navigate("/Resume-builder/candidate/candidate/education");
    }
  };

  const handleNextNavigation = () => {
    if (onNext) {
      onNext({
        techSkills,
        techTags,
        softSkills,
        additional,
        devTools,
      });
    } else {
      navigate("/Resume-builder/candidate/candidate/review");
    }
  };

  /* ---- Skill Row CRUD ---- */
  const openAdd = () => {
    setEditSkillId(null);
    setSkillForm({ name: "", level: "Intermediate", match: "" });
    setShowSkillModal(true);
  };

  const openEdit = (s) => {
    setEditSkillId(s.id);
    setSkillForm({ name: s.name, level: s.level, match: String(s.match) });
    setShowSkillModal(true);
  };

  const handleSaveSkill = (e) => {
    e.preventDefault();
    const mv = Number(skillForm.match);
    if (!skillForm.name.trim()) {
      alert("Skill name is required!");
      return;
    }
    if (isNaN(mv) || mv < 0 || mv > 100) {
      alert("Match % must be 0–100!");
      return;
    }

    if (editSkillId) {
      setTechSkills((p) =>
        p.map((s) =>
          s.id === editSkillId ? { ...s, ...skillForm, match: mv } : s,
        ),
      );
    } else {
      setTechSkills((p) => [...p, { id: Date.now(), ...skillForm, match: mv }]);
      if (!techTags.includes(skillForm.name.trim())) {
        setTechTags((p) => [...p, skillForm.name.trim()]);
      }
    }
    setShowSkillModal(false);
  };

  const handleDeleteSkill = (id) => {
    if (window.confirm("Delete this skill?"))
      setTechSkills((p) => p.filter((s) => s.id !== id));
  };

  /* ---- Tag CRUD ---- */
  const handleAddTag = () => {
    const val = tagInput.trim();
    if (!val || !tagModal) return;
    const { list, set } = tagData[tagModal];
    if (!list.includes(val)) set((p) => [...p, val]);
    setTagInput("");
  };

  const handleRemoveTag = (key, tag) => {
    tagData[key].set((p) => p.filter((t) => t !== tag));
  };

  /* ---- Render ---- */
  return (
    <div className="can-dashboard-page-wrapper">
      <CandidateHeader
        mobileMenuOpen={isSidebarOpen}
        setMobileMenuOpen={setIsSidebarOpen}
      />

      <div className="can-dashboard-layout">
        {/* Sidebar Component */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        {/* Main Work Area */}
        <main className="can-dashboard-main">
          <div className="sk-page-wrapper">
            <div className="sk-content">
              {/* ══════════ HEADER ══════════ */}
              <div className="sk-card">
                <div className="sk-header-title-row">
                  <span className="sk-user-icon">👤</span>
                  <h2 className="sk-main-heading">SKILLS</h2>
                </div>
                <p className="sk-bio-text">
                  A digital-oriented Frontend developer with strong experiences
                  in modern web technologies and a passion for building
                  responsive and user-friendly applications.
                </p>
              </div>

              {/* ══════════ TECHNICAL SKILLS ══════════ */}
              <div className="sk-card">
                <div className="sk-section-head">
                  <h3 className="sk-section-title sk-title-tech">
                    TECHNICAL SKILLS
                  </h3>
                  <button
                    type="button"
                    className="sk-add-tag-btn clickable-action"
                    onClick={() => {
                      setTagModal("tech");
                      setTagInput("");
                    }}
                  >
                    + Add Tag
                  </button>
                </div>

                {/* Tag chips */}
                <div className="sk-chips-wrap">
                  {techTags.map((tag) => (
                    <span key={tag} className="sk-chip sk-chip-outline">
                      {tag}
                      <button
                        type="button"
                        className="sk-chip-x"
                        onClick={() => handleRemoveTag("tech", tag)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>

                {/* Skill table */}
                <div className="sk-table-wrap">
                  <table className="sk-table">
                    <thead>
                      <tr>
                        <th className="sk-th-skill">Skill</th>
                        <th className="sk-th-level">Level</th>
                        <th className="sk-th-bar"></th>
                        <th className="sk-th-match">Match</th>
                        <th className="sk-th-action">
                          <button
                            type="button"
                            className="sk-add-row-btn clickable-action"
                            onClick={openAdd}
                          >
                            + Add
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {techSkills.map((s) => {
                        const lm = lvlMeta(s.level);
                        return (
                          <tr key={s.id} className="sk-tr">
                            <td className="sk-td-skill">{s.name}</td>
                            <td className="sk-td-level">
                              <span
                                className="sk-level-badge"
                                style={{ background: lm.bg, color: lm.color }}
                              >
                                {s.level}
                              </span>
                            </td>
                            <td className="sk-td-bar">
                              <div className="sk-bar-track">
                                <div
                                  className="sk-bar-fill"
                                  style={{ width: `${s.match}%` }}
                                />
                              </div>
                            </td>
                            <td className="sk-td-match">{s.match}%</td>
                            <td className="sk-td-action">
                              <img
                                src={editIcon}
                                alt="Edit"
                                className="sk-act-icon clickable-action"
                                onClick={() => openEdit(s)}
                                title="Edit"
                              />
                              <img
                                src={deleteIcon}
                                alt="Delete"
                                className="sk-act-icon sk-act-delete clickable-action"
                                onClick={() => handleDeleteSkill(s.id)}
                                title="Delete"
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ══════════ SOFT SKILLS ══════════ */}
              <div className="sk-card">
                <div className="sk-section-head">
                  <h3 className="sk-section-title sk-title-soft">
                    SOFT SKILLS
                  </h3>
                  <button
                    type="button"
                    className="sk-add-tag-btn clickable-action"
                    onClick={() => {
                      setTagModal("soft");
                      setTagInput("");
                    }}
                  >
                    + Add
                  </button>
                </div>
                <div className="sk-chips-wrap">
                  {softSkills.map((tag) => (
                    <span key={tag} className="sk-chip sk-chip-green">
                      {tag}
                      <button
                        type="button"
                        className="sk-chip-x"
                        onClick={() => handleRemoveTag("soft", tag)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* ══════════ ADDITIONAL SKILLS / TOOLS ══════════ */}
              <div className="sk-card">
                <div className="sk-section-head">
                  <h3 className="sk-section-title sk-title-additional">
                    ADDITIONAL SKILLS/TOOLS
                  </h3>
                  <button
                    type="button"
                    className="sk-add-tag-btn clickable-action"
                    onClick={() => {
                      setTagModal("additional");
                      setTagInput("");
                    }}
                  >
                    + Add
                  </button>
                </div>
                <div className="sk-chips-wrap">
                  {additional.map((tag) => (
                    <span key={tag} className="sk-chip sk-chip-outline">
                      {tag}
                      <button
                        type="button"
                        className="sk-chip-x"
                        onClick={() => handleRemoveTag("additional", tag)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* ══════════ DEVELOPMENT TOOLS ══════════ */}
              <div className="sk-card">
                <div className="sk-section-head">
                  <h3 className="sk-section-title sk-title-dev">
                    DEVELOPMENT TOOLS
                  </h3>
                  <button
                    type="button"
                    className="sk-add-tag-btn clickable-action"
                    onClick={() => {
                      setTagModal("dev");
                      setTagInput("");
                    }}
                  >
                    + Add
                  </button>
                </div>
                <div className="sk-chips-wrap">
                  {devTools.map((tag) => (
                    <span key={tag} className="sk-chip sk-chip-outline">
                      {tag}
                      <button
                        type="button"
                        className="sk-chip-x"
                        onClick={() => handleRemoveTag("dev", tag)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* ══════════ NAVIGATION ══════════ */}
              <div className="sk-nav-row">
                <button
                  type="button"
                  className="sk-nav-btn sk-nav-prev clickable-action"
                  onClick={handlePreviousNavigation}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="sk-nav-btn sk-nav-next clickable-action"
                  onClick={handleNextNavigation}
                >
                  Next
                </button>
              </div>
            </div>

            {/* ════════════════════════════════════════
                MODAL — Add / Edit Skill Row
            ════════════════════════════════════════ */}
            {showSkillModal && (
              <div
                className="sk-modal-overlay"
                onClick={() => setShowSkillModal(false)}
              >
                <div
                  className="sk-modal-box"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3>{editSkillId ? "Edit Skill" : "Add Skill"}</h3>
                  <form onSubmit={handleSaveSkill}>
                    <div className="form-field">
                      <label>Skill Name *</label>
                      <input
                        type="text"
                        value={skillForm.name}
                        placeholder="e.g. JavaScript"
                        onChange={(e) =>
                          setSkillForm({ ...skillForm, name: e.target.value })
                        }
                        autoFocus
                      />
                    </div>
                    <div className="form-field">
                      <label>Proficiency Level *</label>
                      <select
                        value={skillForm.level}
                        onChange={(e) =>
                          setSkillForm({ ...skillForm, level: e.target.value })
                        }
                      >
                        {LEVELS.map((l) => (
                          <option key={l} value={l}>
                            {l}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-field">
                      <label>Match % (0 – 100) *</label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={skillForm.match}
                        placeholder="e.g. 90"
                        onChange={(e) =>
                          setSkillForm({ ...skillForm, match: e.target.value })
                        }
                      />
                    </div>
                    <div className="modal-btn-row">
                      <button
                        type="button"
                        className="btn-cancel"
                        onClick={() => setShowSkillModal(false)}
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

            {/* ════════════════════════════════════════
                MODAL — Add Tag
            ════════════════════════════════════════ */}
            {tagModal && (
              <div
                className="sk-modal-overlay"
                onClick={() => setTagModal(null)}
              >
                <div
                  className="sk-modal-box"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3>Add {tagData[tagModal]?.label}</h3>
                  <div className="form-field">
                    <label>Name *</label>
                    <input
                      type="text"
                      value={tagInput}
                      placeholder="Type and press Enter or click Add…"
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddTag();
                        }
                      }}
                      autoFocus
                    />
                  </div>
                  <div className="modal-btn-row">
                    <button
                      type="button"
                      className="btn-cancel"
                      onClick={() => setTagModal(null)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn-save"
                      onClick={() => {
                        handleAddTag();
                        setTagModal(null);
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CandidateSkills;
