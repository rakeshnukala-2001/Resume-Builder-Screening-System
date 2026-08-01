import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Components-landingpage/Header.css";
import logo from "../assets/landingpage/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Active state checks with precise path matching
  const isHomeActive =
    location.pathname === "/Resume-builder" ||
    location.pathname === "/Resume-builder/home" ||
    location.pathname === "/";

  const isAboutActive =
    location.pathname === "/Resume-builder/Aboutus" ||
    location.pathname === "/about";

  const handleNavigation = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="lp-header">
      {/* 1. Logo Section */}
      <div 
        className="lp-header-logo-section" 
        onClick={() => handleNavigation("/Resume-builder")}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="logo" />
        <h2>AI RB & SS</h2>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        className="lp-header-menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ≡
      </div>

      {/* Main Navigation Wrapper */}
      <div className={`lp-header-nav-container ${menuOpen ? "lp-header-active" : ""}`}>
        
        {/* 2. Nav Links Div (Home & About Us) */}
        <div className="lp-header-center-links">
          <Link
            to="/Resume-builder"
            className={isHomeActive ? "lp-header-active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/Resume-builder/Aboutus"
            className={isAboutActive ? "lp-header-active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
        </div>

        {/* 3. Action Buttons Div (Login & Get Started) */}
        <div className="lp-header-action-btns">
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
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;