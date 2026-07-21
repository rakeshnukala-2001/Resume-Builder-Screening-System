import React, { useState } from 'react';
import './RecruiterDashboard.css';
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
import SearchIcon from "../assets/recruiter/SearchIcon.png";
import FiBell from "../assets/recruiter/FiBell.png";
import settings from "../assets/recruiter/settings.png";
import FiChevronDown from "../assets/recruiter/FiChevronDown.png";
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
import analytics from "../assets/recruiter/analytics.png";
import hire from "../assets/recruiter/hire.png";

const RecruiterDashboard = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');

    const handleNavClick = (tabName, sectionId) => {
        setActiveTab(tabName);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const chartData = [
        { name: 'JavaScript', value: 34, color: '#3b82f6' },
        { name: 'Python', value: 28, color: '#22c55e' },
        { name: 'Java', value: 15, color: '#f59e0b' },
        { name: 'SQL', value: 10, color: '#6366f1' },
        { name: 'AWS', value: 7, color: '#ef4444' },
        { name: 'Others', value: 6, color: '#94a3b8' },
    ];

    return (
        <>
        <div className='rec-dashboard-container'>
            <header className='rec-top-header'>
                <div className='rec-header-left'>
                    <span className='rec-dashboard-title-top'>Recruiter Dashboard</span>
                </div>
                <div className='rec-search-wrapper'>
                    <img src={SearchIcon} width={18} height={18} alt="Search" className='rec-search-icon' />
                    <input type='text' placeholder='Search roles, skills, or companies...' />
                </div>
                <div className='rec-user-profile'>
                    <div className='rec-header-icon'><img src={FiBell} width={20} height={20} alt="Notifications" /></div>
                    <div className='rec-header-icon'><img src={settings} width={20} height={20} alt="Settings" /></div>
                    <div className='rec-avatar-wrapper'>
                        <img src={FiUser} width={32} height={32} alt="User Avatar" className="rec-top-avatar" />
                        <div className='rec-user-info'>
                            <h4>Akash</h4>
                            <p>Recruiter</p>
                        </div>
                        <img src={FiChevronDown} width={14} height={14} alt="Dropdown" className="rec-dropdown-arrow" />
                    </div>
                </div>
            </header>

            <div className='rec-main-layout-wrapper'>
                
                {/* SIDEBAR */}
                <aside className='rec-sidebar'>
                    {/* <div className='rec-logo-section'>
                        <img src={logor} alt="Logo" className="rec-logo-img" />
                        <div className='rec-logo-text'>
                        </div>
                    </div> */}

                    <nav className='rec-nav-menu'>
                        <div className={`rec-nav-item ${activeTab === 'Dashboard' ? 'active' : ''}`} onClick={() => handleNavClick('Dashboard', 'rec-dashboard-sec')}>
                            <img src={dashboard} width={20} height={20} alt="Dashboard" className="rec-nav-icon" /> Dashboard
                        </div>
                        <div className={`rec-nav-item ${activeTab === 'Profile' ? 'active' : ''}`} onClick={() => handleNavClick('Profile', 'rec-profile-sec')}>
                            <img src={FiUser} width={20} height={20} alt="Profile" className="rec-nav-icon" /> Profile
                        </div>
                        <div className={`rec-nav-item ${activeTab === 'AI Report' ? 'active' : ''}`} onClick={() => handleNavClick('AI Report', 'rec-report-sec')}>
                            <img src={reports} width={20} height={20} alt="AI Report" className="rec-nav-icon" /> AI Report
                        </div>
                        <div className={`rec-nav-item ${activeTab === 'Skill Matching' ? 'active' : ''}`} onClick={() => handleNavClick('Skill Matching', 'rec-skill-sec')}>
                            <img src={screening} width={20} height={20} alt="Skill Matching" className="rec-nav-icon" /> Skill Matching
                        </div>
                        <div className={`rec-nav-item ${activeTab === 'Job Matches' ? 'active' : ''}`} onClick={() => handleNavClick('Job Matches', 'rec-jobs-sec')}>
                            <img src={jobs1} width={20} height={20} alt="Job Matches" className="rec-nav-icon" /> Job Matches
                        </div>
                        <div className={`rec-nav-item ${activeTab === 'Saved Jobs' ? 'active' : ''}`} onClick={() => handleNavClick('Saved Jobs', 'rec-saved-sec')}>
                            <img src={Shorlisted} width={20} height={20} alt="Saved Jobs" className="rec-nav-icon" /> Saved Jobs
                        </div>
                        <div className={`rec-nav-item ${activeTab === 'Message' ? 'active' : ''}`} onClick={() => handleNavClick('Message', 'rec-message-sec')}>
                            <div className="rec-msg-nav-content">
                                <span className="rec-nav-link-text">
                                    <img src={inbox} width={20} height={20} alt="Message" className="rec-nav-icon" /> Message
                                </span>
                                <span className='rec-msg-badge'>2</span>
                            </div>
                        </div>
                        <div className={`rec-nav-item ${activeTab === 'Learning Center' ? 'active' : ''}`} onClick={() => handleNavClick('Learning Center', 'rec-learning-sec')}>
                            <img src={assistant} width={20} height={20} alt="Learning Center" className="rec-nav-icon" /> Learning Center
                        </div>
                    </nav>

                    {/* UPGRADE BOX */}
                    <div className='rec-upgrade-box'>
                        <div className="rec-upgrade-header">
                            <span className="rec-crown-icon"></span>
                            <h4>Upgrade to Pro</h4>
                        </div>
                        <p>Unlock Premium tools and grow your career faster</p>
                        <ul className='rec-upgrade-features'>
                            <li>✓ Advanced AI Insights</li>
                            <li>✓ Unlimited Resumes</li>
                            <li>✓ Priority Support</li>
                            <li>✓ Job Match Boost</li>
                        </ul>
                        <button className='rec-upgrade-btn'>Upgrade Now →</button>
                    </div>
                </aside>

                {/* MAIN BODY CONTENT */}
                <main className='rec-main-content'>
                    <div className='rec-scrollable-body'>
                        
                        <div id="rec-dashboard-sec" className="rec-section-wrapper">
                            <div className='rec-title-area'>
                                <h2>Recruiter Dashboard</h2>
                                <p>manage candidates, screen resumes and hire the best talent with AI.</p>
                            </div>

                            {/* 4 TOP CARDS */}
                            <section className='rec-stats-grid'>
                                <div className='rec-stat-card'>
                                    <div className='rec-stat-icon-wrapper'><img src={applicants} alt="Applicants" /></div>
                                    <div className='rec-stat-data'>
                                        <span className='rec-stat-title'>Total Applicants</span>
                                        <h3>125</h3>
                                        <span className='rec-stat-trend'>↑ 12% this month</span>
                                    </div>
                                </div>
                                <div className='rec-stat-card'>
                                    <div className='rec-stat-icon-wrapper'><img src={scanner} alt="Scanned" /></div>
                                    <div className='rec-stat-data'>
                                        <span className='rec-stat-title'>Scanned Candidates</span>
                                        <h3>92</h3>
                                        <span className='rec-stat-trend'>↑ 12% this month</span>
                                    </div>
                                </div>
                                <div className='rec-stat-card'>
                                    <div className='rec-stat-icon-wrapper'><img src={Shorlisted} alt="Shortlisted" /></div>
                                    <div className='rec-stat-data'>
                                        <span className='rec-stat-title'>Shortlisted</span>
                                        <h3>48</h3>
                                        <span className='rec-stat-trend'>↑ 12% this month</span>
                                    </div>
                                </div>
                                <div className='rec-stat-card'>
                                    <div className='rec-stat-icon-wrapper'><img src={atsScore} alt="ATS Score" /></div>
                                    <div className='rec-stat-data'>
                                        <span className='rec-stat-title'>Average ATS Score</span>
                                        <h3>87%</h3>
                                        <span className='rec-stat-trend'>↑ 12% this month</span>
                                    </div>
                                </div>
                            </section>

                            {/* MIDDLE GRID */}
                            <section className='rec-middle-grid'>
                                <div className='rec-info-box'>
                                    <div className='rec-box-header'>
                                        <h4>Candidate Pipeline</h4>
                                        <select><option>This month</option></select>
                                    </div>
                                    <div className='rec-funnel-placeholder'>
                                        <div className='funnel-layer f-applied'><span>1,248</span> Applied</div>
                                        <div className='funnel-layer f-screened'><span>842</span> Screened</div>
                                        <div className='funnel-layer f-reviewed'><span>364</span> Reviewed</div>
                                        <div className='funnel-layer f-shortlisted'><span>236</span> Shortlisted</div>
                                        <div className='funnel-layer f-hired'><span>48</span> <img src={hire} width={14} alt="hire"/> Hired</div>
                                    </div>
                                </div>

                                <div className='rec-info-box'>
                                    <div className='rec-box-header'>
                                        <h4>AI Screening Overview</h4>
                                    </div>
                                    <div className='rec-screening-content'>
                                        <div className='rec-ats-circle-box'>
                                            <div className='rec-ats-circle'>
                                                <h3>87%</h3>
                                                <p>ATS Score</p>
                                            </div>
                                            <span className='rec-match-tag'>✓ Good Match</span>
                                        </div>
                                        <div className='rec-progress-bars'>
                                            <div className='rec-progress-item'>
                                                <label><img src={resume} width={14} alt="res"/> Resume Quality <span>82%</span></label>
                                                <div className='rec-bar'><div className='rec-fill blue-fill' style={{width: '82%'}}></div></div>
                                            </div>
                                            <div className='rec-progress-item'>
                                                <label><img src={skill} width={14} alt="sk"/> Skill match <span>78%</span></label>
                                                <div className='rec-bar'><div className='rec-fill green-fill' style={{width: '78%'}}></div></div>
                                            </div>
                                            <div className='rec-progress-item'>
                                                <label><img src={experience} width={14} alt="exp"/> Experience match <span>88%</span></label>
                                                <div className='rec-bar'><div className='rec-fill purple-fill' style={{width: '88%'}}></div></div>
                                            </div>
                                            <div className='rec-progress-item'>
                                                <label><img src={keyword} width={14} alt="key"/> Keyword Match <span>91%</span></label>
                                                <div className='rec-bar'><div className='rec-fill orange-fill' style={{width: '91%'}}></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='rec-info-box'>
                                    <div className='rec-box-header'>
                                        <h4>✨ AI Recommendations</h4>
                                    </div>
                                    <div className='rec-recommendations-list'>
                                        <div className='rec-rec-item'>
                                            <img src={FiUser} alt="avatar" className="rec-candidate-avatar" width={32} height={32} />
                                            <div className='rec-rec-details'>
                                                <h5>Anjali Mehta <span className='rec-score-badge green-text'>94%</span></h5>
                                                <p>Full stack Developer</p>
                                            </div>
                                        </div>
                                        <div className='rec-skills-demand'>
                                            <h6><img src={demand} width={14} alt="demand"/> Skills in Demand</h6>
                                            <div className='rec-tags'>
                                                <span>React</span> <span>Python</span> <span>AWS</span>
                                            </div>
                                            <p><img src={analytics} width={12} alt="in"/> More than 70% people have these skills</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* BOTTOM GRID */}
                            <section className='rec-bottom-grid'>
                                <div className='rec-table-box'>
                                    <h4>Recent Candidates</h4>
                                    <div className='rec-table-wrapper'>
                                        <table className='rec-custom-table'>
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
                                                    <td><strong>Anjali Mehta</strong><br/><small>anjali@gmail.com</small></td>
                                                    <td>Full Stack Developer</td>
                                                    <td>4 yrs</td>
                                                    <td><span className='table-skill'>React, Node.js</span></td>
                                                    <td><strong className='green-text'>95%</strong></td>
                                                    <td><span className='status-tag shortlisted'>Shortlisted</span></td>
                                                    <td>
                                                        <img src={eye} width={16} alt="view"/> 
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className='rec-chart-box'>
                                    <div className='rec-box-header'>
                                        <h4>Skills Distribution</h4>
                                        <select><option>This month</option></select>
                                    </div>
                                    <div className='rec-donut-mock-container'>
                                        <PieChart width={140} height={140}>
                                            <Pie data={chartData} cx="50%" cy="50%" innerRadius={35} outerRadius={55} paddingAngle={2} dataKey="value">
                                                {chartData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                        <div className='rec-chart-legends'>
                                            {chartData.map((item, i) => (
                                                <p key={i}><span className='dot' style={{backgroundColor: item.color}}></span> {item.name} <span>{item.value}%</span></p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </>
    );
};

export default RecruiterDashboard;