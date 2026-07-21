import React from "react";
import "../Components-landingpage/CallToAction.css";

const CallToAction = () => {
  return (
    <section className="cta-wrapper-section">
      <div className="cta-blue-card">
        <div className="cta-content-left">
          <h2> Ready to build your future?</h2>
          <p>
            Join thousands of professionals and recruiters using AI to transform
            hiring.
          </p>
        </div>
        <div className="cta-action-holder">
          <button
            className="cta-action-btn"
            onClick={() => (window.location.href = "#/register")}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;