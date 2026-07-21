import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import verified from "../assets/image 15.png";
import backIcon from '../assets/arrw.png';
import "./EmailVerification.css";

const EmailVerification = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [seconds, setSeconds] = useState(40);
  const [error, setError] = useState("");

  const inputRefs = useRef([]);
  const DEFAULT_OTP = "508213";

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    setError("");

    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length < 6) {
      setError("Please enter all 6 digits.");
      return;
    }

    
    if (enteredOtp === DEFAULT_OTP) {
      setError("");
      navigate("/Resume-builder/login/loginsuccess"); 
    } else {
      setError("❗ Invalid OTP. Please check and try again.");
      navigate("/Resume-builder/login/emailverification/otpverification");
    }
  };

  const handleResend = () => {
    setOtp(new Array(6).fill(""));
    setSeconds(40);
    setError("");
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="em-login-body">
      {/* Left Image Section */}
      <div className="em-login-illustration">
        <img src={verified} alt="OTP" />
      </div>

      {/* Right Content Card */}
      <div className="em-otp-container">
        
        {/* Back to Login Button */}
        <div className="em-back-container" onClick={() => navigate("/Resume-builder/login")} style={{ cursor: 'pointer' }}>
          <img src={backIcon} alt="back" className="em-back-icon" /> 
          <span>Back to Login</span>
        </div>

        <div className="em-right-side">
          <h2 className="em-otp-title">Verify your email</h2>

          <p className="em-otp-subtitle">
            We've sent a 6-digit OTP to
            <br />
            <strong>jhon.doe521@gmail.com</strong>
            <br />
            Enter the code below to continue
          </p>

          <form onSubmit={handleVerifyOtp}>
            <div className="em-otp-input-group">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  className={`em-otp-box ${error ? "em-input-error" : ""}`}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>

            {error && <p className="em-error-msg" style={{ color: "#ef4444", fontWeight: "500", marginTop: "10px", textAlign: "center" }}>{error}</p>}

            <p className="em-resend-text">
              Didn't receive the code?{" "}
              {seconds > 0 ? (
                <span className="em-timer-highlight">resend OTP({formatTime(seconds)})</span>
              ) : (
                <button type="button" className="em-resend-link" onClick={handleResend} style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', fontWeight: '600' }}>
                  resend OTP
                </button>
              )}
            </p>

            <button type="submit" className="em-verify-btn">
              Verify & Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;