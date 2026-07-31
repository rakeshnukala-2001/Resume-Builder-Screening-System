import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EmailRecruiter.css";
import otpImage from "../assets/otp-image.png";
import backIcon from '../assets/arrw.png';

const EmailRecruiter = () => {
  const navigate = useNavigate();

  // States & Refs
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [seconds, setSeconds] = useState(40);
  const [error, setError] = useState("");

  const inputs = useRef([]);
  const DEFAULT_OTP = "894085"; 

  // Timer Effect Logic
  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  // Time Formatter (00:40)
  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Handle Input Changes & Auto Focus Next
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return; 

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // OTP Verification Logic
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length < 6) {
      setError("Please enter all 6 digits.");
      return;
    }

    if (enteredOtp === DEFAULT_OTP) {
      setError("");
      navigate("/Resume-builder/dashboard/recruiter"); 
    } else {
      setError("❗ Invalid OTP. Please check and try again.");
      navigate("/Resume-builder/login/emailrecruiter/otprecruiter");
    }
  };

  // Resend OTP Logic
  const handleResend = () => {
    setOtp(new Array(6).fill(""));
    setSeconds(40);
    setError("");
    inputs.current[0]?.focus();
  };

  return (
    <div className="er-otp-container">

      {/* LEFT SIDE */}
      <div className="er-otp-left">
        <img
          src={otpImage}
          alt="OTP"
          className="er-otp-image"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="er-otp-right">

        {/* Back to Login */}
        <div 
          className="er-back-login" 
          onClick={() => navigate("/Resume-builder/login/recruiter")} 
          style={{ cursor: 'pointer' }}
        >
          <img src={backIcon} alt="Back" />
          <span>Back to Login</span>
        </div>

        <h2>Verify your email</h2>

        <p className="er-text">
          We've sent a 6-digit OTP to
        </p>

        <h4>john.doe521@gmail.com</h4>

        <p className="er-text">
          Enter the code below to continue
        </p>

        {/* OTP Form Start */}
        <form onSubmit={handleVerifyOtp}>
          <div className="er-otp-inputs">
            {otp.map((item, index) => (
              <input
                key={index}
                ref={(el) => (inputs.current[index] = el)}
                type="text"
                maxLength="1"
                value={item}
                className={error ? "em-input-error" : ""} 
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          {/* Error Message Display */}
          {error && (
            <p style={{ color: "#ef4444", fontWeight: "500", marginTop: "10px", textAlign: "center" }}>
              {error}
            </p>
          )}

          {/* Resend Section with Timer conditional rendering */}
          <p className="er-resend">
            Didn't receive the code?{" "}
            {seconds > 0 ? (
              <span>Resend OTP ({formatTime(seconds)})</span>
            ) : (
              <button 
                type="button" 
                onClick={handleResend} 
                style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', fontWeight: '600', padding: 0 }}
              >
                Resend OTP
              </button>
            )}
          </p>

          <button type="submit" className="er-verify-btn">
            Verify & Continue
          </button>
        </form>

      </div>
    </div>
  );
};

export default EmailRecruiter;