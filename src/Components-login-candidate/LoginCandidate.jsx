import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./LoginCandidate.css";
import loginImage from "../assets/login-image.png";
import googleIcon from "../assets/google.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/login-email.png";
import showPasswordIcon from "../assets/show_password.png";
import hidePasswordIcon from "../assets/eye-hide.png";
 
const LoginCandidate = () => {
  const navigate = useNavigate();
 
  const [view, setView] = useState('default');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
 
  const [emailError, setEmailError] = useState("");  
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
 
  const [showPassword, setShowPassword] = useState(false);
  
  const [userType, setUserType] = useState('candidate');

  const handleUserTypeChange = (type) => {
    if (type === userType) return;
    setUserType(type);
    if (type === 'recruiter') {
      navigate("/Resume-builder/login/recruiter"); 
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const onlyNums = value.replace(/[^0-9]/g, '');
    if (onlyNums.length <= 10) {
      setPhone(onlyNums);
      setPhoneError("");
    }
  };
 
  const handleLogin = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
 
    let valid = true;
 
    if (email.trim() === "") {
      setEmailError("Enter your email address");
      valid = false;
    }
 
    if (password.trim() === "") {
      setPasswordError("Enter your password");
      valid = false;
    } else {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d{@$!%*?&}]{8,}$/;
      if (!passwordRegex.test(password)) {
        setPasswordError("Password must be at least 8 characters long, include 1 uppercase letter, 1 number, and 1 special character.");
        valid = false;
      }
    }
 
    if (!valid) return;
    navigate("/Resume-builder/login/emailverification");
  };
 
  return (
    <div className="lc-login-container">
      {/* Left Section */}
      <div className="lc-left-section">
        <div className="lc-welcome-content">
          <h1>Welcome back!</h1>
          <p>Access your account<br />and continue where<br />you left off.</p>
        </div>
        <img src={loginImage} alt="Logincandidate" className="lc-login-image" />
      </div>
 
      {/* Right Section */}
      <div className="lc-right-section">
        <form className="lc-login-form" onSubmit={handleLogin}>
          {view !== 'default' && (
            <button
              type="button"
              className="lc-back-to-login-btn"
              onClick={() => setView('default')}
            >
               Back
            </button>
          )}
 
          <h2>
            {view === 'default' && (passwordError ? "Invalid Password Format" : "Login in to your Account")}
          </h2>

          <div className="lc-login-type">
            {/* ENHANCEMENT: Integrated user logic dynamically dynamically */}
            <button
              type="button"
              className={`lc-candidate-btn ${userType === 'candidate' ? 'active' : ''}`}
              onClick={() => handleUserTypeChange('candidate')}
            >
              Candidate
            </button>
 
            <button
              type="button"
              className={`lc-recruiter-btn ${userType === 'recruiter' ? 'active' : ''}`}
              onClick={() => handleUserTypeChange('recruiter')}
            >
              Recruiter
            </button>
          </div>
 
          {/* VIEW 1: DEFAULT LOGIN */}
          {view === 'default' && (
            <>
              {/* Email */}
              <div className="lc-input-group">
                <label>Email Address</label>
                <div className="lc-input-box">
                  {email === "" && <img src={emailIcon} alt="Email" className="lc-input-icon" />}
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    className={emailError ? "lc-error-input" : ""}
                  />
                </div>
                {emailError && <span className="lc-error-text">{emailError}</span>}
              </div>
 
              {/* Password */}
              <div className="lc-input-group">
                <label>Password</label>
                <div className="lc-password-box">
                  {password === "" && (
                    <span className="lc-eye-left" onClick={() => setShowPassword(!showPassword)}>
                      <img src={showPassword ? hidePasswordIcon : showPasswordIcon} alt="Toggle Password" className="lc-password-toggle-icon" />
                    </span>
                  )}
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError("");
                    }}
                    className={passwordError ? "lc-error-input" : ""}
                  />
                  {password !== "" && (
                    <span className="lc-eye-right" onClick={() => setShowPassword(!showPassword)}>
                      <img src={showPassword ? hidePasswordIcon : showPasswordIcon} alt="Toggle Password" className="lc-password-toggle-icon" />
                    </span>
                  )}
                </div>
                {passwordError && <span className="lc-error-text password-error-msg">{passwordError}</span>}
              </div>
 
              <div className="lc-options">
                <div className="lc-remember">
                  <input type="checkbox" id="lc-remember" />
                  <label htmlFor="lc-remember">Remember me</label>
                </div>
                <Link to="/Resume-builder/login/forgotpassword" className='lc-forgot-password'>Forgot Password?</Link>
              </div>
 
              <button type="submit" className="lc-continue-btn">Continue</button>
            </>
          )}
 
          <div className="lc-divider">
            <span></span><p>OR</p><span></span>
          </div>
 
          <p className="lc-continue-text">Or Continue with</p>
 
          <div className="lc-social-login">
            {view === 'default' && (
              <>
                <a href="https://accounts.google.com/" target="_blank" rel="noopener noreferrer">
                  <img src={googleIcon} alt="Google" />
                </a>
                <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
              </>
            )}
          </div>
 
          <p className="lc-contact-admin">
            Do you have account! <Link to="/Resume-builder/UserRegCandidate">Create Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
 
export default LoginCandidate;