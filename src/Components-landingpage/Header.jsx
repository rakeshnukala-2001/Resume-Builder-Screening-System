import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Components-landingpage/Header.css";
import logo from "../assets/landingpage/logo.png";
 
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
 
  const handleNavigation = (path) => {
    setMenuOpen(false);
    navigate(path);
  };
 
  return (
    <header className="lp-header">
      {/* Logo */}
      <div className="lp-header-logo-section">
        <img src={logo} alt="logo" />
        <h2>AI RB & SS</h2>
      </div>
 
      {/* Hamburger */}
      <div className="lp-header-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ≡
      </div>
 
      {/* Nav Links */}
      <div className={`lp-header-nav-links ${menuOpen ? "lp-header-active" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "lp-header-active-link" : "")}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
 
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "lp-header-active-link" : "")}
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </NavLink>
 
        <button
          className="lp-header-login-btn"
          onClick={() => handleNavigation("/Resume-builder/login/candidate")}
        >
          Login
        </button>
 
        <button
          className="lp-header-register-btn"
          onClick={() => handleNavigation("/Resume-builder/userregcandidate")}
        >
          Registration
        </button>
      </div>
    </header>
  );
};
 
export default Header;