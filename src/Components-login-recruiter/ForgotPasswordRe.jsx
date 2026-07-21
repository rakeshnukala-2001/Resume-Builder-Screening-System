import { useState } from "react";
import { useNavigate } from "react-router-dom";
import forgotLock from "../assets/forgot-lock.png";
import forgotReImage from "../assets/forgot-re.png";
import "./forgotPasswordRe.css";
import linkedinIcon from "../assets/linkedin.png";
import googleIcon from "../assets/google.png";
import backIcon from "../assets/arrw.png";

const ForgotPasswordRe = () => {
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
    navigate("/Resume-builder/login/createpasswordre");
  };

  return (
    <div className="re-forgot-container">
      {/* Left Side */}
      <div className="re-forgot-left">
        <img src={forgotReImage} alt="re-forgot Password" />
      </div>

      {/* Right Side */}
      <div className="re-forgot-card">
        
        {/* Back Button */}
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

        {/* Lock Logo Wrapper */}
        <div className="icon-circle">
          <img src={forgotLock} alt="Lock" className="re-forgot-lock-img" />
        </div>

        <h2>Forgot Password?</h2>

        <p className="description">
          Enter the email address associated with your account
          <br />  
          and we'll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="email-input">Email Address</label>

          <input
            id="email-input"
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

export default ForgotPasswordRe;