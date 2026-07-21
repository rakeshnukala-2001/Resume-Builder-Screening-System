import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePasswordRe.css";
import ResetImage from "../assets/PasswordRe.png";
import linkedinIcon from '../assets/linkedin.png';
import googleIcon from '../assets/google.png';
import eye from '../assets/show_password.png';    
import eyeHide from '../assets/eye-hide.png';    
 
const CreatePasswordRe = () => {
  const navigate = useNavigate();
 
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setconfirmPasswordShow] = useState(false);
 
  const initialValues = { newPassword: "", confirmPassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false); 
 
  const togglePasswordView = () => { setPasswordShow((prev) => !prev); };
  const toggleConfirmPasswordView = () => { setconfirmPasswordShow((prev) => !prev); };
 
  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
 
  const validateForm = () => {
    const newErrors = {};
    if (!formValues.newPassword.trim()) { newErrors.newPassword = "Password is required"; }
    else if (formValues.newPassword.length < 8) { newErrors.newPassword = "Password must be at least 8 characters"; }
 
    if (!formValues.confirmPassword.trim()) { newErrors.confirmPassword = "Confirm Password is required"; }
    else if (formValues.confirmPassword.length < 8) { newErrors.confirmPassword = "Password must be at least 8 characters"; }
    else if (formValues.confirmPassword !== formValues.newPassword) { newErrors.confirmPassword = "Passwords do not match"; }
 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return false;
 
    console.log("Password reset successfully", formValues);
    

    setShowPopup(true);
 
    setTimeout(() => {
      setShowPopup(false);
      setFormValues(initialValues);
      
  
      navigate("/Resume-builder/login/recruiter");
    }, 3000); 
  };
 
  return (
    <div className="re-password-container">
      <div className="re-left-section">
        <img src={ResetImage} alt="Reset Password" />
      </div>
 
      <div className="re-right-section">
        <h2>Create a New Password</h2>
        <p>Please Enter and Confirm New Password Below</p>
 
        <form onSubmit={handleSubmit}>
          <label>New Password</label>
          <div className="re-password-wrapper">
            <input
              type={passwordShow ? "text" : "password"}
              placeholder="Enter new password"
              name="newPassword"
              value={formValues.newPassword}
              onChange={handleForm}
              className={errors.newPassword ? "re-input-error" : ""}
            />
            <span className="re-eye-icon" onClick={togglePasswordView}>
              <img src={passwordShow ? eye : eyeHide} className="re-show-icon" alt="toggle view" />
            </span>
          </div>
          {errors.newPassword && <span className="re-error-msg">{errors.newPassword}</span>}
 
          <label>Confirm Password</label>
          <div className="re-password-wrapper">
            <input
              type={confirmPasswordShow ? "text" : "password"}
              placeholder="Confirm your Password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleForm}
              className={errors.confirmPassword ? "re-input-error" : ""}
            />
            <span className="re-eye-icon" onClick={toggleConfirmPasswordView}>
              <img src={confirmPasswordShow ? eye : eyeHide} className="re-show-icon" alt="toggle view" />
            </span>
          </div>
          {errors.confirmPassword && <span className="re-error-msg">{errors.confirmPassword}</span>}
 
          <button type="submit">Reset Password</button>
        </form>
 
        <div className="re-login-text">
          Remember your password?
          <span onClick={() => navigate("/Resume-builder/login/recruiter")}> Login</span>
        </div>
 
        <div className="re-divider">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>
 
        <p className="re-continue">Or Continue with</p>
 
        <div className="re-socialContainer">
          <button type="button" className="re-socialBtn"><img src={googleIcon} alt="Google" /></button>
          <button type="button" className="re-socialBtn"><img src={linkedinIcon} alt="LinkedIn" /></button>
        </div>
 
        <p className="re-contact">Need help & <span>Contact admin</span></p>
      </div>
 
      {/* Success Popup */}
      {showPopup && (
        <div className="re-popup-overlay">
          <div className="re-popup-box">
            {/* <div className="re-success-icon" style={{color: 'green', fontSize: '24px', marginBottom: '8px'}}>✓</div> */}
            <h3>Success!</h3>
            <p>Password reset successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default CreatePasswordRe;