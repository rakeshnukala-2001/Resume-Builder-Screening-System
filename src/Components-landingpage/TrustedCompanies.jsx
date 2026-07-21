import React from "react";
import "../Components-landingpage/TrustedCompanies.css";
import googleLogo from "../assets/google.png";
import infosysLogo from "../assets/landingpage/infosys.png";
import microsoftLogo from "../assets/landingpage/microsoft.png";
import hclLogo from "../assets/landingpage/hcl.png";
import tcsLogo from "../assets/landingpage/tcs.png";

const TrustedCompanies = () => {
  const logos = [googleLogo, infosysLogo, microsoftLogo, hclLogo, tcsLogo];

  return (
    <section className="trusted-section">
      <p className="trusted-title">
        TRUSTED BY PROFESSIONALS & RECRUITERS FROM TOP COMPANIES
      </p>
      <div className="tc-logos-container">
        {logos.map((logo, index) => (
          <div key={index} className="tc-logo-wrapper">
            <img src={logo} alt={`Company Logo ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
export default TrustedCompanies;