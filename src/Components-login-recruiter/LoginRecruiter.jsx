import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./LoginRecruiter.css";
import loginImage from "../assets/login-image.png";
import googleIcon from "../assets/google.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/login-email.png";
import showPasswordIcon from "../assets/show_password.png";
import hidePasswordIcon from "../assets/eye-hide.png";

const LoginRecruiter = () => {
  const navigate = useNavigate();

  // View States: 'default'
  const [view, setView] = useState('default');

  // Form Field States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  // Error States
  const [emailError, setEmailError] = useState("");   
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);


  const [userType, setUserType] = useState('recruiter');

  const handleUserTypeChange = (type) => {
    if (type === userType) return;
    setUserType(type);
    if (type === 'candidate') {
      navigate('/Resume-builder/login/candidate');
    }
  };

  // Phone input handling (only numbers up to 10 digits)
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

    // 1. User Name Validation
    const usernameRegex = /^[a-zA-Z0-9._]{4,20}$/;

    if (email.trim() === "") {
      setEmailError("Enter Your User Name");
      valid = false;
    } else if (!usernameRegex.test(email.trim())) {
      setEmailError("User Name must be 4-20 characters (letters, numbers, . or _ only)");
      valid = false;
    }

    // 2. Password Validation Rules
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

    navigate("/Resume-builder/login/emailrecruiter");
  };


  return (
    <div className="lr-login-container">
      {/* Left Section */}
      <div className="lr-left-section">
        <div className="lr-welcome-content">
          <h1>Welcome back!</h1>
          <p>
            Access your account
            <br />
            and continue where
            <br />
            you left off.
          </p>
        </div>

        <img src={loginImage} alt="Login" className="lr-login-image" />
      </div>

      {/* Right Section */}
      <div className="lr-right-section">
        <form className="lr-login-form" onSubmit={handleLogin}>
          
          {/* Back button for OTP views */}
          {view !== 'default' && (
            <button
              type="button"
              className="lr-back-to-login-btn"
              onClick={() => {
                setView('default');
              }}
            >
               Back
            </button>
          )}

          <h2>
            {view === 'default' && (passwordError ? "Invalid Password Format" : "Login in to your   Account")}
          </h2>

          {view === 'default' && (
            <div className="lr-usertype-toggle">
              <button
                type="button"
                className={`lr-usertype-btn ${userType === 'candidate' ? 'lr-usertype-active' : ''}`}
                onClick={() => handleUserTypeChange('candidate')}
              >
                Candidate
              </button>
              <button
                type="button"
                className={`lr-usertype-btn ${userType === 'recruiter' ? 'lr-usertype-active' : ''}`}
                onClick={() => handleUserTypeChange('recruiter')}
              >
                Recruiter
              </button>
            </div>
          )}

          {/* VIEW 1: DEFAULT LOGIN */}
          {view === 'default' && (
            <>
              {/* Email */}
              <div className="lr-input-group">
                <label>User Name</label>
                <div className="lr-input-box">
                  {email === "" && (
                    <img 
                      src={emailIcon} 
                      alt="Email" 
                      className="lr-input-icon" 
                    />
                  )}
                  <input
                    type="text"
                    placeholder="Enter your User Name"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value.replace(/\s/g, ""));
                      setEmailError("");
                    }}
                    className={emailError ? "lr-error-input" : ""}
                  />
                </div>
                {emailError && <span className="lr-error-text">{emailError}</span>}
              </div>

              {/* Password */}
              <div className="lr-input-group">
                <label>Password</label>
                <div className="lr-password-box">
                  {password === "" && (
                    <span className="lr-eye-left" onClick={() => setShowPassword(!showPassword)}>
                      <img
                        src={showPassword ? hidePasswordIcon : showPasswordIcon}
                        alt="Toggle Password"
                        className="lr-password-toggle-icon"
                      />
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
                    className={passwordError ? "lr-error-input" : ""}
                  />
                  {password !== "" && (
                    <span className="lr-eye-right" onClick={() => setShowPassword(!showPassword)}>
                      <img
                        src={showPassword ? hidePasswordIcon : showPasswordIcon}
                        alt="Toggle Password"
                        className="lr-password-toggle-icon"
                      />
                    </span>
                  )}
                </div>
                {passwordError && <span className="lr-error-text lr-password-error-msg">{passwordError}</span>}
              </div>

              {/* Options & Remember me */}
              <div className="lr-options">
                <div className="lr-remember">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <Link to="/Resume-builder/login/forgotpasswordre" className='lr-forgot-password'>Forgot Password?</Link>
              </div>

              <button type="submit" className="lr-continue-btn">Continue</button>
            </>
          )}


          {/* Dynamic Footer / Alternate Login Methods */}
          <div className="lr-divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <p className="lr-continue-text">Or Continue with</p>

          <div className="lr-social-login">
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

          <p className="lr-contact-admin">
            Do not have an account? <Link to="/Resume-builder/userregrecruiter">Create Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginRecruiter;