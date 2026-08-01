import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import candidateIcon from "../assets/candidate.png";
import recruiterIcon from "../assets/recruiter.png";
import postJobsIcon from "../assets/p-job.png";
import findCandidatesIcon from "../assets/fi-can.png";
import interviewIcon from "../assets/int-mang.png";
import analyticsIcon from "../assets/rec-anal.png";
import regIcon from "../assets/reg-r-image.png";
import tickedImg from "../assets/tickbl.png";
import hidePasswordIcon from "../assets/eye-hide.png";
import showPasswordIcon from "../assets/show_password.png";
import "./UserRegRecruiter.css";

const UserRegRecruiter = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("recruiter");
  const [agreed, setAgreed] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // OTP Verification States
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpStep, setOtpStep] = useState(1);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [timer, setTimer] = useState(67);
  const [canResend, setCanResend] = useState(false);

  // Form State
  const [form, setForm] = useState({
    fullName: "",
    userName: "",
    recruiterName: "",
    email: "",
    phone: "",
    designation: "",
    companyName: "",
    companyWebsite: "",
    companyLocation: "",
    industryType: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const checklistItems = [
    "Post job openings",
    "Track hiring progress",
    "Search and filter candidates",
    "Access candidate resumes",
    "Manage applications",
    "Communicate with applicants",
  ];

  const featureCards = [
    { icon: postJobsIcon, title: "Post Jobs", description: "Create and publish job vacancies effortlessly." },
    { icon: findCandidatesIcon, title: "Find Candidates", description: "Advanced filters to find the perfect match." },
    { icon: interviewIcon, title: "Interview Management", description: "Seamlessly schedule and track interviews." },
    { icon: analyticsIcon, title: "Recruitment Analytics", description: "Data-driven insights into your hiring funnel." },
  ];

  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email || "");

  // Countdown Timer Logic
  useEffect(() => {
    let interval = null;
    if (showOtpModal && otpStep === 1 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [showOtpModal, otpStep, timer]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    if (field === "email") {
      setIsEmailVerified(false);
    }

    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // OTP Handlers
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    let newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    setOtpError("");

    if (value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pasteData)) {
      setOtp(pasteData.split(""));
      setOtpError("");
    }
  };

  const handleVerifyClick = () => {
    if (isEmailValid) {
      setOtp(["", "", "", "", "", ""]);
      setOtpError("");
      setOtpStep(1);
      setTimer(67);
      setCanResend(false);
      setShowOtpModal(true);
    } else {
      setErrors((prev) => ({ ...prev, email: "Enter a valid email address first" }));
    }
  };

  const handleResendOtp = () => {
    if (canResend) {
      setOtp(["", "", "", "", "", ""]);
      setOtpError("");
      setTimer(67);
      setCanResend(false);
    }
  };

  const handleConfirmOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 6) {
      setOtpError("Please enter complete 6-digit OTP");
      return;
    }

    if (enteredOtp === "894085") {
      setOtpError("");
      setOtpStep(2);
    } else {
      setOtpError("Invalid OTP! Please enter correct code");
    }
  };

  const handleFinishVerification = () => {
    setIsEmailVerified(true);
    setShowOtpModal(false);
  };

  const validate = () => {
    let newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!form.userName.trim()) newErrors.userName = "Username is required";
    if (!form.recruiterName.trim()) newErrors.recruiterName = "Recruiter Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!isEmailValid) {
      newErrors.email = "Enter a valid email address";
    } else if (!isEmailVerified) {
      newErrors.email = "Please verify your email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit mobile number";
    }

    if (!form.designation.trim()) newErrors.designation = "Designation is required";
    if (!form.companyName.trim()) newErrors.companyName = "Company Name is required";
    if (!form.companyWebsite.trim()) newErrors.companyWebsite = "Company Website is required";
    if (!form.companyLocation.trim()) newErrors.companyLocation = "Company Location is required";
    if (!form.industryType) newErrors.industryType = "Select Industry Type";

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Minimum 8 characters required";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!agreed) {
      newErrors.terms = "Accept Terms & Conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();

      formData.append("role", role);
      formData.append("agreedToTerms", agreed);
      formData.append("isEmailVerified", isEmailVerified);

      formData.append("fullName", form.fullName);
      formData.append("userName", form.userName);
      formData.append("recruiterName", form.recruiterName);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("designation", form.designation);
      formData.append("companyName", form.companyName);
      formData.append("companyWebsite", form.companyWebsite);
      formData.append("companyLocation", form.companyLocation);
      formData.append("industryType", form.industryType);
      formData.append("password", form.password);

      console.log("--- Recruiter Form Data Contents ---");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
      navigate("/Resume-builder/login/recruiter");
    }
  };

  return (
    <div className="urr-container">
      {/* LEFT INFO SECTION */}
      <div className="urr-info">
        <h1 className="urr-info__title">Create your account</h1>

        <ul className="urr-info__checklist">
          {checklistItems.map((item) => (
            <li key={item} className="urr-info__checklist-item" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={tickedImg} alt="tick" style={{ width: "15px", height: "15px" }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="urr-info__cards">
          {featureCards.map((card) => (
            <div className="urr-feature-card" key={card.title}>
              {card.icon && <img src={card.icon} alt={card.title} className="urr-feature-card__icon" />}
              <p className="urr-feature-card__title">{card.title}</p>
              <p className="urr-feature-card__desc">{card.description}</p>
            </div>
          ))}
        </div>

        {regIcon && (
          <img src={regIcon} alt="Hiring Illustration" className="urr-info__illustration" />
        )}
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="urr-page">
        <h1 className="urr-title">User Registration</h1>

        <form className="urr-card" onSubmit={handleSubmit}>
          <p className="urr-label urr-label--top">I am Registering as</p>

          <div className="urr-role-toggle">
            {/* CANDIDATE BUTTON */}
            <button
              type="button"
              className={`urr-role-card ${role === "candidate" ? "urr-role-card--active" : ""}`}
              onClick={() => {
                setRole("candidate");
                navigate("/Resume-builder/userregcandidate");
              }}
            >
              <span className="urr-role-radio">
                {role === "candidate" && <span className="urr-role-radio__dot" />}
              </span>
              <img src={candidateIcon} alt="Candidate" className="urr-role-icon" />
              <span className="urr-role-name">Candidate</span>
              <span className="urr-role-sub">Explore jobs take next step</span>
            </button>

            {/* RECRUITER BUTTON */}
            <button
              type="button"
              className={`urr-role-card ${role === "recruiter" ? "urr-role-card--active" : ""}`}
              onClick={() => setRole("recruiter")}
            >
              <span className="urr-role-radio">
                {role === "recruiter" && <span className="urr-role-radio__dot" />}
              </span>
              <img src={recruiterIcon} alt="Recruiter" className="urr-role-icon" />
              <span className="urr-role-name">Recruiter</span>
              <span className="urr-role-sub">Post jobs find talent and hire</span>
            </button>
          </div>

          <div className="urr-grid">
            {/* Full Name */}
            <div className="urr-field-wrapper">
              <label className="urr-field">
                <span className="urr-label">Full Name</span>
                <input
                  type="text"
                  placeholder=""
                  value={form.fullName}
                  onChange={handleChange("fullName")}
                />
              </label>
              {errors.fullName && <small className="error-text" style={{ color: "red", fontSize: "12px" }}>{errors.fullName}</small>}
            </div>

            {/* User Name */}
            <div className="urr-field-wrapper">
              <label className="urr-field">
                <span className="urr-label">User Name</span>
                <input
                  type="text"
                  placeholder=""
                  value={form.userName}
                  onChange={handleChange("userName")}
                />
              </label>
              {errors.userName && <small className="error-text" style={{ color: "red", fontSize: "12px" }}>{errors.userName}</small>}
            </div>

            {/* Recruiter Name */}
            <div className="urr-field-wrapper">
              <label className="urr-field">
                <span className="urr-label">Recruiter Name</span>
                <input
                  type="text"
                  placeholder=""
                  value={form.recruiterName}
                  onChange={handleChange("recruiterName")}
                />
              </label>
              {errors.recruiterName && <small className="error-text" style={{ color: "red", fontSize: "12px" }}>{errors.recruiterName}</small>}
            </div>

            {/* Email Address with Verification */}
            <div className="urr-field-wrapper">
              <label className="urr-field" style={{ position: "relative" }}>
                <span className="urr-label">Email Address</span>
                <div style={{ position: "relative", width: "100%" }}>
                  <input
                    type="email"
                    placeholder=""
                    value={form.email}
                    onChange={handleChange("email")}
                    style={{ paddingRight: "80px" }}
                  />
                  {isEmailValid && !isEmailVerified && (
                    <button
                      type="button"
                      className="urc-verify-btn"
                      onClick={handleVerifyClick}
                      style={{
                        position: "absolute",
                        right: "8px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        padding: "4px 10px",
                        cursor: "pointer",
                        fontSize: "12px",
                      }}
                    >
                      Verify
                    </button>
                  )}
                  {isEmailVerified && (
                    <span
                      className="urc-verified-badge"
                      style={{
                        position: "absolute",
                        right: "8px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#28a745",
                        fontWeight: "bold",
                        fontSize: "12px",
                      }}
                    >
                      Verified
                    </span>
                  )}
                </div>
              </label>
              {errors.email && <small className="error-text" style={{ color: "red", fontSize: "12px" }}>{errors.email}</small>}
            </div>

            {/* Phone Number */}
            <div className="urr-field-wrapper">
              <label className="urr-field">
                <span className="urr-label">Phone Number</span>
                <input
                  type="text"
                  placeholder=""
                  value={form.phone}
                  onChange={handleChange("phone")}
                />
              </label>
              {errors.phone && <small className="error-text" style={{ color: "red", fontSize: "12px" }}>{errors.phone}</small>}
            </div>

            {/* Designation / Job Title */}
            <div className="urr-field-wrapper">
              <label className="urr-field">
                <span className="urr-label">Designation / Job Title</span>
                <input
                  type="text"
                  placeholder=""
                  value={form.designation}
                  onChange={handleChange("designation")}
                />
              </label>
              {errors.designation && <small className="error-text" style={{ color: "red", fontSize: "12px" }}>{errors.designation}</small>}
            </div>

            {/* Company Name */}
            <div className="urr-field-wrapper">
              <label className="urr-field">
                <span className="urr-label">Company Name</span>
                <input
                  type="text"
                  placeholder=""
                  value={form.companyName}
                  onChange={handleChange("companyName")}
                />
              </label>
              {errors.companyName && <small className="error-text" style={{ color: "red", fontSize: "12px" }}>{errors.companyName}</small>}
            </div>

            {/* Company Website */}
            <div className="urr-field-wrapper">
              <label className="urr-field">
                <span className="urr-label">Company Website</span>
                <input
                  type="text"
                  placeholder=""
                  value={form.companyWebsite}
                  onChange={handleChange("companyWebsite")}
                />
              </label>
              {errors.companyWebsite && <small className="error-text" style={{ color: "red", fontSize: "12px" }}>{errors.companyWebsite}</small>}
            </div>

            {/* Company Location */}
            <div className="urr-field-wrapper">
              <label className="urr-field">
                <span className="urr-label">Company Location</span>
                <input
                  type="text"
                  placeholder=""
                  value={form.companyLocation}
                  onChange={handleChange("companyLocation")}
                />
              </label>
              {errors.companyLocation && <small className="error-text" style={{ color: "red", fontSize: "12px" }}>{errors.companyLocation}</small>}
            </div>

            {/* Industry Type */}
            <div className="urr-field-wrapper">
              <label className="urr-field">
                <span className="urr-label">Industry Type</span>
                <select value={form.industryType} onChange={handleChange("industryType")}>
                  <option value="" disabled hidden>Select Industry Type</option>
                  <option value="Designer">Designer</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              {errors.industryType && <small className="error-text" style={{ color: "red", fontSize: "12px" }}>{errors.industryType}</small>}
            </div>

            {/* Password */}
            <div className="urr-field-wrapper">
              <label className="urr-field" style={{ position: "relative" }}>
                <span className="urr-label">Password</span>
                <div style={{ position: "relative", width: "100%" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder=""
                    value={form.password}
                    onChange={handleChange("password")}
                  />
                  {form.password && (
                    <img
                      src={showPassword ? showPasswordIcon : hidePasswordIcon}
                      alt="toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", width: "20px", height: "20px" }}
                    />
                  )}
                </div>
              </label>
              {errors.password && <small className="error-text" style={{ color: "red", fontSize: "12px" }}>{errors.password}</small>}
            </div>

            {/* Confirm Password */}
            <div className="urr-field-wrapper">
              <label className="urr-field" style={{ position: "relative" }}>
                <span className="urr-label">Confirm Password</span>
                <div style={{ position: "relative", width: "100%" }}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder=""
                    value={form.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                  />
                  {form.confirmPassword && (
                    <img
                      src={showConfirmPassword ? showPasswordIcon : hidePasswordIcon}
                      alt="toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", width: "20px", height: "20px" }}
                    />
                  )}
                </div>
              </label>
              {errors.confirmPassword && <small className="error-text" style={{ color: "red", fontSize: "12px" }}>{errors.confirmPassword}</small>}
            </div>
          </div>

          {/* Terms & Conditions */}
          <label className="urr-agree">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>
              I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a> regarding my administrative access.
            </span>
          </label>
          {errors.terms && <div className="error-text" style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>{errors.terms}</div>}

          <button type="submit" className="urr-submit">
            Complete Registration
          </button>

          <p className="urr-login">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/Resume-builder/login/recruiter")}
              style={{ color: "#007bff", cursor: "pointer", textDecoration: "underline" }}
            >
              Login
            </span>
          </p>
        </form>
      </div>

      {/* OTP MODAL */}
      {showOtpModal && (
        <div className="urc-modal-overlay">
          <div className="urc-modal-content">
            {otpStep === 1 ? (
              <>
                <div className="urc-modal-icon">📩</div>
                <h3>Email Verification</h3>
                <p>We've Sent a Code To <strong>{form.email}</strong>.<br />Please enter it below</p>

                <div className="urc-otp-inputs">
                  {otp.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={data}
                      onChange={(e) => handleOtpChange(e, index)}
                      onKeyDown={(e) => handleOtpKeyDown(e, index)}
                      onPaste={handleOtpPaste}
                    />
                  ))}
                </div>

                {otpError && <small className="urc-error-text" style={{ color: "red", display: "block", marginBottom: "12px" }}>{otpError}</small>}

                <p className="urc-resend-text">
                  {!canResend ? (
                    <>Did not receive code? Resend OTP in <strong>{formatTime(timer)}</strong></>
                  ) : (
                    <>
                      Did not receive code?{" "}
                      <span className="urc-resend-link" onClick={handleResendOtp} style={{ color: "#007bff", cursor: "pointer", textDecoration: "underline" }}>
                        Resend OTP
                      </span>
                    </>
                  )}
                </p>

                <button className="urc-modal-btn" onClick={handleConfirmOtp}>Continue</button>
              </>
            ) : (
              <>
                <div className="urc-modal-icon urc-success-icon">✓</div>
                <h3>Verification Is Confirmed</h3>
                <button className="urc-modal-btn" onClick={handleFinishVerification}>Continue</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRegRecruiter;