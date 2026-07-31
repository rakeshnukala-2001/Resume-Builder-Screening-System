import { useState } from "react";
import { useNavigate } from "react-router-dom";
import forgotLock from "../assets/forgot-lock.png";
import forgotImage from "../assets/forgot-image.png";
import "./ForgotPassword.css";
import linkedinIcon from "../assets/linkedin.png";
import googleIcon from "../assets/google.png";
import backIcon from "../assets/arrw.png";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");

    if (!email.trim()) {
      setEmailError("Please enter your email.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address (e.g., name@example.com).");
      return;
    }

    setEmail("");
    navigate("/Resume-builder/login/createpassword");
  };

  return (
    <div className="forgot-container">
      {/* Left Side */}
      <div className="forgot-left">
        <img src={forgotImage} alt="Forgot Password" />
      </div>

      {/* Right Side */}
      <div className="forgot-card">
        
        {/* Back Button Wrapper */}
        <div className="back-btn">
          <button 
            type="button" 
            onClick={() => navigate(-1)} 
          >
            <img
              src={backIcon}
              alt="back"
              className="btn-icon-img"
            />
            Back to login
          </button>
        </div>

        {/* Dynamic Class Sync with CSS Icon Circle */}
        <div className="icon-circle">
          <img src={forgotLock} alt="Lock" className="forgot-lock-img" />
        </div>

        <h2>Forgot Password?</h2>

        <p className="description">
          Enter the email address associated with your account
          <br />
          and we'll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="forgot-email">Email Address</label>

          <input
            id="forgot-email"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            className={emailError ? "error-input" : ""}
          />

          {emailError && (
            <span className="error-text">
              {emailError}
            </span>
          )}

          <button type="submit" className="submit-btn">
            Send Reset Link
          </button>
        </form>

        <div className="divider">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        <p className="continue-text"> Or Continue with</p>

        {/* HTML & CSS Class Synced Links */}
        <div className="social-login">
          <a href="https://accounts.google.com/" target="_blank" rel="noopener noreferrer">
            <img src={googleIcon} alt="Google" />
          </a>
          <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>

        <p className="help-text">
          Need help? <a href="/">Contact admin</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;