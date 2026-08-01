import React, { useState } from "react";
import "./RecruiterDashboard.css";
import RecruiterHeader from "./RecruiterHeader";
import RecruiterProfile from "./RecruiterProfile";
import { PieChart, Pie, Cell } from "recharts";

import logor from "../assets/recruiter/logor.png";
import dashboard from "../assets/recruiter/dashboard.png";
import FiUser from "../assets/recruiter/FiUser.png";
import reports from "../assets/recruiter/reports.png";
import screening from "../assets/recruiter/screening.png";
import jobs1 from "../assets/recruiter/jobs1.png";
import Shorlisted from "../assets/recruiter/Shorlisted.png";
import inbox from "../assets/recruiter/inbox.png";
import assistant from "../assets/recruiter/assistant.png";
import applicants from "../assets/recruiter/Applicants.png";
import scanner from "../assets/recruiter/Scanner.png";
import atsScore from "../assets/recruiter/ATS-score.png";
import resume from "../assets/recruiter/resume.png";
import skill from "../assets/recruiter/skill.png";
import experience from "../assets/recruiter/experience.png";
import keyword from "../assets/recruiter/keyword.png";
import demand from "../assets/recruiter/demand.png";
import insights from "../assets/recruiter/insights.png";
import eye from "../assets/recruiter/eye.png";
import hire from "../assets/recruiter/hire.png";
import Candidates from "../assets/recruiter/candidates.png";
import crownIcon from "../assets/recruiter/crown.png";
import savedjobs from "../assets/recruiter/savedjobs.png";
import tickIcon from "../assets/candidate/tick.png";
import arrowIcon from "../assets/candidate/arrow.png";

const RecruiterDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tabName, sectionId) => {
    setActiveTab(tabName);
    if (tabName === "Dashboard") {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
    setMobileMenuOpen(false);
  };

  const chartData = [
    { name: "JavaScript", value: 34, color: "#6366f1" },
    { name: "Python", value: 28, color: "#22c55e" },
    { name: "Java", value: 15, color: "#f59e0b" },
    { name: "SQL", value: 10, color: "#3b82f6" },
    { name: "AWS", value: 7, color: "#ef4444" },
    { name: "Others", value: 6, color: "#d1d5db" },
  ];

  const renderContent = () => {
    if (activeTab === "Profile") {
      return <RecruiterProfile />;
    }

    if (activeTab === "Dashboard") {
      return (
        <div className="rec-scrollable-body">
          <div id="rec-dashboard-sec" className="rec-section-wrapper">
            <div className="rec-title-area">
              <h2>Recruiter Dashboard</h2>
              <p>
                manage candidates, screen resumes and hire the best talent with
                AI.
              </p>
            </div>

            {/* 4 TOP CARDS */}
            <section className="rec-stats-grid">
              <div className="rec-stat-card">
                <div className="rec-stat-icon-wrapper">
                  <img src={applicants} alt="Applicants" />
                </div>
                <div className="rec-stat-data">
                  <span className="rec-stat-title">Total Applicants</span>
                  <h3>125</h3>
                  <span className="rec-stat-trend">↑ 12% this month</span>
                </div>
              </div>
              <div className="rec-stat-card">
                <div className="rec-stat-icon-wrapper">
                  <img src={scanner} alt="Scanned" />
                </div>
                <div className="rec-stat-data">
                  <span className="rec-stat-title">Scanned Candidates</span>
                  <h3>92</h3>
                  <span className="rec-stat-trend">↑ 12% this month</span>
                </div>
              </div>
              <div className="rec-stat-card">
                <div className="rec-stat-icon-wrapper">
                  <img src={savedjobs} alt="Saved Jobs" />
                </div>
                <div className="rec-stat-data">
                  <span className="rec-stat-title">Shortlisted</span>
                  <h3>48</h3>
                  <span className="rec-stat-trend">↑ 12% this month</span>
                </div>
              </div>
              <div className="rec-stat-card">
                <div className="rec-stat-icon-wrapper">
                  <img src={atsScore} alt="ATS Score" />
                </div>
                <div className="rec-stat-data">
                  <span className="rec-stat-title">Average ATS Score</span>
                  <h3>87%</h3>
                  <span className="rec-stat-trend">↑ 12% this month</span>
                </div>
              </div>
            </section>

            {/* MIDDLE GRID */}
            <section className="rec-middle-grid">
              <div className="rec-info-box">
                <div className="rec-box-header">
                  <h4>Candidate Pipeline</h4>
                  <select className="rec-filter">
                    <option>This month</option>
                  </select>
                </div>

                <div className="rec-funnel-placeholder">
                  <div className="rec-funnel">
                    <div className="rec-funnel-row">
                      <div className="funnel-layer f-applied">
                        <span>1,248</span>
                      </div>
                      <div className="pipeline-line blue"></div>
                      <div className="pipeline-label">Applied</div>
                    </div>

                    <div className="rec-funnel-row">
                      <div className="funnel-layer f-screened">
                        <span>842</span>
                      </div>
                      <div className="pipeline-line green"></div>
                      <div className="pipeline-label">Screened</div>
                    </div>

                    <div className="rec-funnel-row">
                      <div className="funnel-layer f-reviewed">
                        <span>364</span>
                      </div>
                      <div className="pipeline-line orange"></div>
                      <div className="pipeline-label">Reviewed</div>
                    </div>

                    <div className="rec-funnel-row">
                      <div className="funnel-layer f-shortlisted">
                        <span>236</span>
                      </div>
                      <div className="pipeline-line purple"></div>
                      <div className="pipeline-label">Shortlisted</div>
                    </div>

                    <div className="rec-funnel-row">
                      <div className="funnel-layer f-hired">
                        <span>48</span>
                      </div>
                      <div className="pipeline-line red"></div>
                      <div className="pipeline-label">Hired</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Screening Overview */}
              <div className="rec-info-box">
                <div className="rec-box-header">
                  <h4>AI Screening Overview</h4>
                </div>

                <div className="rec-screening-content">
                  <div className="rec-ats-circle-box">
                    <div className="rec-ats-circle">
                      <div className="rec-circle-inner">
                        <h2>87%</h2>
                        <p>ATS Score</p>
                      </div>
                    </div>
                    <div className="rec-match-tag">✓ Good Match</div>
                  </div>

                  <div className="rec-progress-bars">
                    <div className="rec-progress-item">
                      <div className="rec-progress-header">
                        <div className="rec-progress-title">
                          <img src={resume} alt="resume" />
                          <span>Resume Quality</span>
                        </div>
                        <strong>82%</strong>
                      </div>
                      <div className="rec-bar">
                        <div
                          className="rec-fill blue-fill"
                          style={{ width: "82%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="rec-progress-item">
                      <div className="rec-progress-header">
                        <div className="rec-progress-title">
                          <img src={skill} alt="skill" />
                          <span>Skill Match</span>
                        </div>
                        <strong>78%</strong>
                      </div>
                      <div className="rec-bar">
                        <div
                          className="rec-fill green-fill"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="rec-progress-item">
                      <div className="rec-progress-header">
                        <div className="rec-progress-title">
                          <img src={experience} alt="experience" />
                          <span>Experience Match</span>
                        </div>
                        <strong>88%</strong>
                      </div>
                      <div className="rec-bar">
                        <div
                          className="rec-fill purple-fill"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="rec-progress-item">
                      <div className="rec-progress-header">
                        <div className="rec-progress-title">
                          <img src={keyword} alt="keyword" />
                          <span>Keyword Match</span>
                        </div>
                        <strong>91%</strong>
                      </div>
                      <div className="rec-bar">
                        <div
                          className="rec-fill orange-fill"
                          style={{ width: "91%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rec-card rec-recommendation-card">
                <h3>AI Recommendations</h3>

                <div className="rec-recommend-item">
                  <img
                    src={Candidates}
                    alt="Candidate"
                    className="rec-recommend-icon"
                  />
                  <div className="rec-recommend-content">
                    <h4>Top Candidate</h4>
                    <p>Anjali Mehta</p>
                    <small>Full Stack Developer</small>
                  </div>
                  <span
                    className="rec-badge rec-success"
                    style={{ "--pct": 95 }}
                  >
                    <span>95%</span>
                  </span>
                </div>

                <div className="rec-recommend-item">
                  <img src={hire} alt="Hire" className="rec-recommend-icon" />
                  <div className="rec-recommend-content">
                    <h4>High Potential</h4>
                    <p>Rohit Verma</p>
                    <small>Backend Developer</small>
                  </div>
                  <span
                    className="rec-badge rec-success"
                    style={{ "--pct": 90 }}
                  >
                    <span>90%</span>
                  </span>
                </div>

                <div className="rec-recommend-item">
                  <img
                    src={demand}
                    alt="Demand"
                    className="rec-recommend-icon"
                  />
                  <div className="rec-recommend-content">
                    <h4>Skills In Demand</h4>
                    <div className="rec-skills-tags">
                      <span>React</span>
                      <span>Python</span>
                      <span>AWS</span>
                      <span>Node.js</span>
                    </div>
                  </div>
                </div>

                <div className="rec-recommend-item">
                  <img
                    src={insights}
                    alt="Insights"
                    className="rec-recommend-icon"
                  />
                  <div className="rec-recommend-content">
                    <h4>Hiring Insights</h4>
                    <small>Your time to hire reduced by 22%</small>
                  </div>
                </div>
              </div>
            </section>

            {/* BOTTOM GRID */}
            <section className="rec-bottom-grid">
              <div className="rec-table-box">
                <h4>Recent Candidates</h4>
                <div className="rec-table-wrapper">
                  <table className="rec-custom-table">
                    <thead>
                      <tr>
                        <th>Candidates</th>
                        <th>Job Applied</th>
                        <th>Experience</th>
                        <th>Skills</th>
                        <th>ATS Score</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Anjali Mehta</strong>
                          <br />
                          <small>anjalimehta@gmail.com</small>
                        </td>
                        <td>Full Stack Developer</td>
                        <td>4 yrs</td>
                        <td>
                          <div className="table-skill-wrap">
                            <span className="table-skill">React, Node js</span>
                            <span className="skill-count">+4</span>
                          </div>
                        </td>
                        <td>
                          <strong className="green-text">95%</strong>
                        </td>
                        <td>
                          <span className="status-tag shortlisted">
                            Shortlisted
                          </span>
                        </td>
                        <td>
                          <div className="rec-action-icons">
                            <img src={eye} width={16} alt="view" />
                            <span className="action-dots">⋮</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Rohit Verma</strong>
                          <br />
                          <small>rohitverma@gmail.com</small>
                        </td>
                        <td>Backend Developer</td>
                        <td>3 yrs</td>
                        <td>
                          <div className="table-skill-wrap">
                            <span className="table-skill">Python, Django</span>
                            <span className="skill-count">+3</span>
                          </div>
                        </td>
                        <td>
                          <strong className="blue-text">90%</strong>
                        </td>
                        <td>
                          <span className="status-tag review">Review</span>
                        </td>
                        <td>
                          <div className="rec-action-icons">
                            <img src={eye} width={16} alt="view" />
                            <span className="action-dots">⋮</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Sneha Iyer</strong>
                          <br />
                          <small>snehaiyer@gmail.com</small>
                        </td>
                        <td>Data Analyst</td>
                        <td>2 yrs</td>
                        <td>
                          <div className="table-skill-wrap">
                            <span className="table-skill">SQL, Python</span>
                            <span className="skill-count">+2</span>
                          </div>
                        </td>
                        <td>
                          <strong className="blue-text">82%</strong>
                        </td>
                        <td>
                          <span className="status-tag scanned">Scanned</span>
                        </td>
                        <td>
                          <div className="rec-action-icons">
                            <img src={eye} width={16} alt="view" />
                            <span className="action-dots">⋮</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Karan Singh</strong>
                          <br />
                          <small>karansingh@gmail.com</small>
                        </td>
                        <td>DevOps Engineer</td>
                        <td>5 yrs</td>
                        <td>
                          <div className="table-skill-wrap">
                            <span className="table-skill">AWS, Docker</span>
                            <span className="skill-count">+3</span>
                          </div>
                        </td>
                        <td>
                          <strong className="red-text">78%</strong>
                        </td>
                        <td>
                          <span className="status-tag rejected">Rejected</span>
                        </td>
                        <td>
                          <div className="rec-action-icons">
                            <img src={eye} width={16} alt="view" />
                            <span className="action-dots">⋮</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Pooja Sharma</strong>
                          <br />
                          <small>poojasharma@gmail.com</small>
                        </td>
                        <td>Frontend developer</td>
                        <td>2 yrs</td>
                        <td>
                          <div className="table-skill-wrap">
                            <span className="table-skill">HTML, CSS</span>
                            <span className="skill-count">+3</span>
                          </div>
                        </td>
                        <td>
                          <strong className="orange-text">75%</strong>
                        </td>
                        <td>
                          <span className="status-tag review">Review</span>
                        </td>
                        <td>
                          <div className="rec-action-icons">
                            <img src={eye} width={16} alt="view" />
                            <span className="action-dots">⋮</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rec-chart-box">
                <div className="rec-box-header">
                  <h4>Skills Distribution</h4>
                  <select>
                    <option>This month</option>
                  </select>
                </div>
                <div className="rec-donut-mock-container">
                  <div className="rec-donut-chart-wrap">
                    <PieChart width={140} height={140}>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={42}
                        outerRadius={65}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="none"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                    <div className="rec-donut-center-text">
                      <h3>1,248</h3>
                      <p>Total candidates</p>
                    </div>
                  </div>
                  <div className="rec-chart-legends">
                    {chartData.map((item, i) => (
                      <p key={i}>
                        <span className="rec-legend-label">
                          <span
                            className="dot"
                            style={{ backgroundColor: item.color }}
                          ></span>
                          {item.name}
                        </span>
                        <span className="rec-legend-value">{item.value}%</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    }

    return <div className="rec-empty-view"></div>;
  };

  return (
    <div className="rec-dashboard-container">
      <RecruiterHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="rec-main-layout-wrapper">
        <div
          className={`rec-sidebar-backdrop ${
            mobileMenuOpen ? "rec-sidebar-open" : ""
          }`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        <aside
          className={`rec-sidebar ${mobileMenuOpen ? "rec-sidebar-open" : ""}`}
        >
          <nav className="rec-nav-menu">
            <div
              className={`rec-nav-item ${
                activeTab === "Dashboard" ? "active" : ""
              }`}
              onClick={() => handleNavClick("Dashboard", "rec-dashboard-sec")}
            >
              <img
                src={dashboard}
                width={20}
                height={20}
                alt="Dashboard"
                className="rec-nav-icon"
              />{" "}
              Dashboard
            </div>
            <div
              className={`rec-nav-item ${
                activeTab === "Profile" ? "active" : ""
              }`}
              onClick={() => handleNavClick("Profile", "rec-profile-sec")}
            >
              <img
                src={Candidates}
                width={20}
                height={20}
                alt="Profile"
                className="rec-nav-icon"
              />{" "}
              Profile
            </div>
            <div
              className={`rec-nav-item ${
                activeTab === "AI Report" ? "active" : ""
              }`}
              onClick={() => handleNavClick("AI Report", "rec-report-sec")}
            >
              <img
                src={reports}
                width={20}
                height={20}
                alt="AI Report"
                className="rec-nav-icon"
              />{" "}
              AI Report
            </div>
            <div
              className={`rec-nav-item ${
                activeTab === "Skill Matching" ? "active" : ""
              }`}
              onClick={() => handleNavClick("Skill Matching", "rec-skill-sec")}
            >
              <img
                src={screening}
                width={20}
                height={20}
                alt="Skill Matching"
                className="rec-nav-icon"
              />{" "}
              Skill Matching
            </div>
            <div
              className={`rec-nav-item ${
                activeTab === "Job Matches" ? "active" : ""
              }`}
              onClick={() => handleNavClick("Job Matches", "rec-jobs-sec")}
            >
              <img
                src={jobs1}
                width={20}
                height={20}
                alt="Job Matches"
                className="rec-nav-icon"
              />{" "}
              Job Matches
            </div>
            <div
              className={`rec-nav-item ${
                activeTab === "Saved Jobs" ? "active" : ""
              }`}
              onClick={() => handleNavClick("Saved Jobs", "rec-saved-sec")}
            >
              <img
                src={Shorlisted}
                width={20}
                height={20}
                alt="Saved Jobs"
                className="rec-nav-icon"
              />{" "}
              Saved Jobs
            </div>
            <div
              className={`rec-nav-item ${
                activeTab === "Message" ? "active" : ""
              }`}
              onClick={() => handleNavClick("Message", "rec-message-sec")}
            >
              <div className="rec-msg-nav-content">
                <span className="rec-nav-link-text">
                  <img
                    src={inbox}
                    width={20}
                    height={20}
                    alt="Message"
                    className="rec-nav-icon"
                  />{" "}
                  Message
                </span>
                <span className="rec-msg-badge">2</span>
              </div>
            </div>
            <div
              className={`rec-nav-item ${
                activeTab === "Learning Center" ? "active" : ""
              }`}
              onClick={() =>
                handleNavClick("Learning Center", "rec-learning-sec")
              }
            >
              <img
                src={assistant}
                width={20}
                height={20}
                alt="Learning Center"
                className="rec-nav-icon"
              />{" "}
              Learning Center
            </div>
          </nav>

          {/* UPGRADE BOX WITH IMPORTED IMAGE ICONS */}
          <div className="rec-upgrade-box">
            <div className="rec-upgrade-header">
              <img
                src={crownIcon}
                width={20}
                height={20}
                alt="Crown"
                className="rec-crown-icon"
              />
              <h4>Upgrade to Pro</h4>
            </div>
            <p>Unlock Premium tools and grow your career faster</p>
            <ul className="rec-upgrade-features">
              <li>
                <img
                  src={tickIcon}
                  alt="tick"
                  className="rec-upgrade-tick-icon"
                />{" "}
                Advanced AI Insights
              </li>
              <li>
                <img
                  src={tickIcon}
                  alt="tick"
                  className="rec-upgrade-tick-icon"
                />{" "}
                Unlimited Resumes
              </li>
              <li>
                <img
                  src={tickIcon}
                  alt="tick"
                  className="rec-upgrade-tick-icon"
                />{" "}
                Priority Support
              </li>
              <li>
                <img
                  src={tickIcon}
                  alt="tick"
                  className="rec-upgrade-tick-icon"
                />{" "}
                Job Match Boost
              </li>
            </ul>
            <button className="rec-upgrade-btn">
              Upgrade Now{" "}
              <img
                src={arrowIcon}
                alt="arrow"
                className="rec-upgrade-arrow-icon"
              />
            </button>
          </div>
        </aside>

        {/* MAIN BODY CONTENT */}
        <main className="rec-main-content">
          <div className="rec-scrollable-body">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
