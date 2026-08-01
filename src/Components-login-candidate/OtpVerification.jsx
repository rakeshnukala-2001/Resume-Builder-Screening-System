import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OtpVerification.css";
import verified from "../assets/image 15.png";
import lockIcon from "../assets/lock-icon.png";
import backIcon from '../assets/arrw.png';

const OtpVerification = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
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

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError(""); 

    if (value && index < 5) {
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
     
      navigate("/Resume-builder/dashboard/candidate"); 
    } else {
      setError("❗ Invalid OTP. Please check and try again.");
    }
  };
 
  const handleResend = () => { 
    setOtp(["", "", "", "", "", ""]);
    setSeconds(40); 
    setError(""); 
    inputRefs.current[0]?.focus(); 
    console.log("OTP Resent successfully!");
  };

  return (
    <div className="otp-container">
      {/* Left Section */}
      <div className="otp-left">
        <img src={verified} alt="Verify Email" />
      </div>

      {/* Right Section */}
      <div className="otp-right">
        <div className="back-btn" onClick={() => navigate("/Resume-builder/login/candidate")} style={{ cursor: 'pointer' }}>
            <span><img src={backIcon} alt="back" className="btn-icon-img" style={{ width: "18px", height: "18px",  }} /> Back to login
           </span>
        </div>

        <div className="lock-circle">
        <img src={lockIcon} alt="Lock" />
        </div>

        <h4>The OTP you entered is incorrect</h4>
        <p>Please try again.</p>

        <form onSubmit={handleVerifyOtp} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="otp-inputs">
         {otp.map((digit, index) => (
          <input
           key={index}
           type="text"
           maxLength="1"
           value={digit}
           className={error ? "otp-error" : ""}
           ref={(el) => (inputRefs.current[index] = el)}
           onChange={(e) => handleChange(e.target.value, index)}
           onKeyDown={(e) => handleKeyDown(e, index)}
          />
 
    
         ))}
 
      </div>


          {error && (
            <div className="error-text" style={{ color: "#ef4444", fontWeight: "500", marginTop: "10px" }}>
              {error}
            </div>
          )}

          <div className="resend">
            {seconds > 0 ? (
              <span>Re-send OTP in ({formatTime(seconds)})</span>
            ) : (
              <>
                Re-send OTP? <span onClick={handleResend} style={{ cursor: "pointer", color: "#2563eb", fontWeight: "600" }}>Click here</span>
              </>
            )}
          </div>

          <button type="submit" className="verify-btn">
            Verify & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;