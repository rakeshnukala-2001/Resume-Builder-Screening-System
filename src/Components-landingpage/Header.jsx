import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../Components-landingpage/Header.css";
import logo from "../assets/landingpage/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomeActive =
    location.pathname === "/Resume-builder/home" ||
    location.pathname === "/Resume-builder" ||
    location.pathname === "/" ||
    location.pathname.endsWith("/home");

  const isAboutActive = location.pathname.includes("about");

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
      <div
        className="lp-header-menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ≡
      </div>

      {/* Nav Links */}
      <div
        className={`lp-header-nav-links ${menuOpen ? "lp-header-active" : ""}`}
      >
        <Link
          to="/Resume-builder/home"
          className={isHomeActive ? "lp-header-active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={isAboutActive ? "lp-header-active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>

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
