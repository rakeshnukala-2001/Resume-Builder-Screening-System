import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OtpRecruiter.css";
import otpImage from "../assets/otp-error.png";
import backIcon from '../assets/arrw.png';
import lockIcon from "../assets/lock-icon.png";

const OtpRecruiter = () => {
  const navigate = useNavigate();

  // States & Refs
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
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
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; 

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError(""); 

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  // Handle Backspace Focus Move
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // OTP Verification Logic on Submit
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length < 6) {
      setError("Please enter all 6 digits.");
      return;
    }

    if (enteredOtp === DEFAULT_OTP) {
      setError("");
      
      navigate("/Resume-builder/dashboard/candidate"); 
    } else {
      setError("❗ Invalid OTP. Please check and try again.");
    }
  };

  // Resend OTP Logic
  const handleResend = () => { 
    setOtp(["", "", "", "", "", ""]);
    setSeconds(40); 
    setError(""); 
    inputs.current[0]?.focus(); 
    console.log("OTP Resent successfully!");
  };

  return (
    <div className="or-otp-error-container">

      {/* LEFT IMAGE */}
      <div className="or-otp-error-left">
        <img
          src={otpImage}
          alt="OTP Illustration"
          className="or-otp-error-image"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="or-otp-error-right">

        {/* Back to Login Button */}
        <div 
          className="or-back-login" 
          onClick={() => navigate("/Resume-builder/login/recruiter")} 
          style={{ cursor: 'pointer' }}
        >
          <img src={backIcon} alt="Back" />
          <span>Back to Login</span>
        </div>

        {/* Center Lock Icon */}
        <div className="or-lock-circle">
          <img src={lockIcon} alt="Lock" />
        </div>

        <h3>The OTP you entered is incorrect</h3>
        <p className="or-try-again">
          Please try again.
        </p>

        {/* Form Container */}
        <form onSubmit={handleVerifyOtp} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          
          {/* OTP Input Grid */}
          <div className="or-otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                className={error ? "otp-error" : ""} 
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          {/* Dynamic Error Message display */}
          {error && (
            <p className="or-error-text" style={{ color: "#ef4444", fontWeight: "500", marginTop: "10px", textAlign: "center" }}>
              {error}
            </p>
          )}

          {/* Resend Section with Timer conditional rendering */}
          <div className="or-resend">
            {seconds > 0 ? (
              <span>Re-send OTP in ({formatTime(seconds)})</span>
            ) : (
              <>
                Re-send OTP?{" "}
                <span onClick={handleResend} style={{ cursor: "pointer", color: "#2563eb", fontWeight: "600" }}>
                  Click here
                </span>
              </>
            )}
          </div>

          <button type="submit" className="or-verify-btn">
            Verify & Continue
          </button>
        </form>

      </div>
    </div>
  );
};

export default OtpRecruiter;