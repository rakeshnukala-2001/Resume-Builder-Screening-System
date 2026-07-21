import React, { useState, useEffect } from "react";
import "./LoginSuccess.css";
import loginImage from "../assets/login-success.png";
import tickImage from "../assets/tick.png";
import securityImage from "../assets/security.png";
import security2Image from "../assets/login-sucess-2.png";

const LoginSuccess = () => {
  const [loginTime, setLoginTime] = useState("");

  useEffect(() => {
    const loginDate = new Date();

    const formattedTime =
      "Today, " +
      loginDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

    setLoginTime(formattedTime);
  }, []);

  return (
    <div className="ls-success-container">
      <div className="ls-success-card">

        {/* Left Image */}
        <div className="ls-image-section">
          <img
            src={loginImage}
            alt="Login Success"
            className="ls-login-image"
          />
        </div>

        {/* Right Section */}
        <div className="ls-content-section">

          {/* Success Tick Image */}
          <div className="ls-success-image-box">
            <img
              src={tickImage}
              alt="Success"
              className="ls-success-image"
            />
          </div>

          <h1>Login Successful</h1>

          <h2>Welcome Back</h2>

          <p className="ls-subtitle">
            You've successfully logged in.
            <br />
            You can access the software and continue
            <br />
            your work seamlessly.
          </p>

          {/* Blue Card */}
          <div className="ls-security-card">

            <div className="ls-security-icon-box">
              {/* Circle Image */}
              <img
                src={securityImage}
                alt="Security"
                className="ls-security-image"
              />

              {/* Icon inside Circle */}
              <img
                src={security2Image}
                alt="Security Icon"
                className="ls-security-image-inner"
              />
            </div>

            <div className="ls-security-info">
              <h3>Your account is secure</h3>

              <p>Last login: {loginTime}</p>

              <p>IP Address: 192.168.1.1</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default LoginSuccess;