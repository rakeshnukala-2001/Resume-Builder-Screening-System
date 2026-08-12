import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import candidateIcon from "../assets/candidate.png";
import recruiterIcon from "../assets/recruiter.png";
import postJobsIcon from "../assets/p-job.png";
import findCandidatesIcon from "../assets/fi-can.png";
import interviewIcon from "../assets/int-mang.png";
import analyticsIcon from "../assets/rec-anal.png";
import regIcon from "../assets/reg-r-image.png";
import tickedImg from "../assets/tick.png";
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
    {
      icon: postJobsIcon,
      title: "Post Jobs",
      description: "Create and publish job vacancies effortlessly.",
    },
    {
      icon: findCandidatesIcon,
      title: "Find Candidates",
      description: "Advanced filters to find the perfect match.",
    },
    {
      icon: interviewIcon,
      title: "Interview Management",
      description: "Seamlessly schedule and track interviews.",
    },
    {
      icon: analyticsIcon,
      title: "Recruitment Analytics",
      description: "Data-driven insights into your hiring funnel.",
    },
  ];

  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
    form.email || "",
  );

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

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      // PASSWORD LIVE VALIDATION
      if (field === "password") {
        if (!value) {
          newErrors.password = "Password is required";
        } else if (value.length < 8) {
          newErrors.password = "Minimum 8 characters required";
        } else if (!/[A-Z]/.test(value)) {
          newErrors.password = "Must contain at least 1 uppercase letter";
        } else if (!/[!@#$%^&*(),.?":{}|<>_\-\\[\]/+=;'`~]/.test(value)) {
          newErrors.password = "Must contain at least 1 special character";
        } else {
          delete newErrors.password;
        }

        if (form.confirmPassword) {
          if (value !== form.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
          } else {
            delete newErrors.confirmPassword;
          }
        }
      }

      // CONFIRM PASSWORD LIVE VALIDATION
      if (field === "confirmPassword") {
        if (!value) {
          newErrors.confirmPassword = "Confirm Password is required";
        } else if (value !== form.password) {
          newErrors.confirmPassword = "Passwords do not match";
        } else {
          delete newErrors.confirmPassword;
        }
      }

      return newErrors;
    });
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
      setErrors((prev) => ({
        ...prev,
        email: "Enter a valid email address first",
      }));
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
    if (!form.recruiterName.trim())
      newErrors.recruiterName = "Recruiter Name is required";

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

    if (!form.designation.trim())
      newErrors.designation = "Designation is required";
    if (!form.companyName.trim())
      newErrors.companyName = "Company Name is required";
    if (!form.companyWebsite.trim())
      newErrors.companyWebsite = "Company Website is required";
    if (!form.companyLocation.trim())
      newErrors.companyLocation = "Company Location is required";
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
            <li key={item} className="urr-info__checklist-item">
              <img src={tickedImg} alt="tick" className="urr-info__check-img" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="urr-info__cards">
          {featureCards.map((card) => (
            <div className="urr-feature-card" key={card.title}>
              {card.icon && (
                <img
                  src={card.icon}
                  alt={card.title}
                  className="urr-feature-card__icon"
                />
              )}
              <p className="urr-feature-card__title">{card.title}</p>
              <p className="urr-feature-card__desc">{card.description}</p>
            </div>
          ))}
        </div>

        {regIcon && (
          <img
            src={regIcon}
            alt="Hiring Illustration"
            className="urr-info__illustration"
          />
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
                {role === "candidate" && (
                  <span className="urr-role-radio__dot" />
                )}
              </span>
              <img
                src={candidateIcon}
                alt="Candidate"
                className="urr-role-icon"
              />
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
                {role === "recruiter" && (
                  <span className="urr-role-radio__dot" />
                )}
              </span>
              <img
                src={recruiterIcon}
                alt="Recruiter"
                className="urr-role-icon"
              />
              <span className="urr-role-name">Recruiter</span>
              <span className="urr-role-sub">
                Post jobs find talent and hire
              </span>
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
              {errors.fullName && (
                <small className="urr-error-text">{errors.fullName}</small>
              )}
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
              {errors.userName && (
                <small className="urr-error-text">{errors.userName}</small>
              )}
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
              {errors.recruiterName && (
                <small className="urr-error-text">{errors.recruiterName}</small>
              )}
            </div>

            {/* Email Address with Verification */}
            <div className="urr-field-wrapper urr-email-wrapper">
              <label className="urr-field">
                <span className="urr-label">Email Address</span>
                <div className="urr-input-with-action">
                  <input
                    type="email"
                    placeholder=""
                    value={form.email}
                    onChange={handleChange("email")}
                  />
                  {isEmailValid && !isEmailVerified && (
                    <button
                      type="button"
                      className="urr-verify-btn"
                      onClick={handleVerifyClick}
                    >
                      Verify
                    </button>
                  )}
                  {isEmailVerified && (
                    <span className="urr-verified-badge">Verified</span>
                  )}
                </div>
              </label>
              {errors.email && (
                <small className="urr-error-text">{errors.email}</small>
              )}
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
              {errors.phone && (
                <small className="urr-error-text">{errors.phone}</small>
              )}
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
              {errors.designation && (
                <small className="urr-error-text">{errors.designation}</small>
              )}
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
              {errors.companyName && (
                <small className="urr-error-text">{errors.companyName}</small>
              )}
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
              {errors.companyWebsite && (
                <small className="urr-error-text">
                  {errors.companyWebsite}
                </small>
              )}
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
              {errors.companyLocation && (
                <small className="urr-error-text">
                  {errors.companyLocation}
                </small>
              )}
            </div>

            {/* Industry Type */}
            <div className="urr-field-wrapper">
              <label className="urr-field">
                <span className="urr-label">Industry Type</span>
                <select
                  value={form.industryType}
                  onChange={handleChange("industryType")}
                >
                  <option value="" disabled hidden>
                    Select Industry Type
                  </option>
                  <option value="Designer">Designer</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              {errors.industryType && (
                <small className="urr-error-text">{errors.industryType}</small>
              )}
            </div>

            {/* Password */}
            <div className="urr-field-wrapper urr-password-wrapper">
              <label className="urr-field">
                <span className="urr-label">Password</span>
                <div className="urr-input-with-icon">
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
                      className="urr-password-toggle-icon"
                    />
                  )}
                </div>
              </label>
              {errors.password && (
                <small className="urr-error-text">{errors.password}</small>
              )}
            </div>

            {/* Confirm Password */}
            <div className="urr-field-wrapper urr-password-wrapper">
              <label className="urr-field">
                <span className="urr-label">Confirm Password</span>
                <div className="urr-input-with-icon">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder=""
                    value={form.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                  />
                  {form.confirmPassword && (
                    <img
                      src={
                        showConfirmPassword
                          ? showPasswordIcon
                          : hidePasswordIcon
                      }
                      alt="toggle"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="urr-password-toggle-icon"
                    />
                  )}
                </div>
              </label>
              {errors.confirmPassword && (
                <small className="urr-error-text">
                  {errors.confirmPassword}
                </small>
              )}
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
              I agree to the <a href="#terms">Terms of Service</a> and{" "}
              <a href="#privacy">Privacy Policy</a> regarding my administrative
              access.
            </span>
          </label>
          {errors.terms && <div className="urr-error-text">{errors.terms}</div>}

          <button type="submit" className="urr-submit">
            Complete Registration
          </button>

          <p className="urr-login">
            Already have an account?{" "}
            <span onClick={() => navigate("/Resume-builder/login/recruiter")}>
              Login
            </span>
          </p>
        </form>
      </div>

      {/* OTP MODAL */}
      {showOtpModal && (
        <div className="urr-modal-overlay">
          <div className="urr-modal-content">
            {otpStep === 1 ? (
              <>
                <div className="urr-modal-icon">📩</div>
                <h3>Email Verification</h3>
                <p>
                  We've Sent a Code To <strong>{form.email}</strong>.<br />
                  Please enter it below
                </p>

                <div className="urr-otp-inputs">
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

                {otpError && (
                  <small className="urr-error-text">{otpError}</small>
                )}

                <p className="urr-resend-text">
                  {!canResend ? (
                    <>
                      Did not receive code? Resend OTP in{" "}
                      <strong>{formatTime(timer)}</strong>
                    </>
                  ) : (
                    <>
                      Did not receive code?{" "}
                      <span
                        className="urr-resend-link"
                        onClick={handleResendOtp}
                      >
                        Resend OTP
                      </span>
                    </>
                  )}
                </p>

                <button className="urr-modal-btn" onClick={handleConfirmOtp}>
                  Continue
                </button>
              </>
            ) : (
              <>
                <div className="urr-modal-icon urr-success-icon">✓</div>
                <h3>Verification Is Confirmed</h3>
                <button
                  className="urr-modal-btn"
                  onClick={handleFinishVerification}
                >
                  Continue
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRegRecruiter;
