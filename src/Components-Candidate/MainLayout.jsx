import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import CandidateHeader from "./CandidateHeader";

const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="candidate-app-layout"
      style={{ display: "flex", minHeight: "100vh", background: "#f8fafc" }}
    >
      {/* Sidebar */}
      <Sidebar isOpen={mobileMenuOpen} />

      {/* Main Content Area */}
      <div
        className="candidate-main-content"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        {/* Header */}
        <CandidateHeader
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Dynamic Page Content */}
        <div
          className="candidate-page-body"
          style={{ flex: 1, padding: "20px" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
