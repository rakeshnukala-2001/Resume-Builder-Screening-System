import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginCanditate from "./Components-login-candidate/LoginCandidate";
import LoginRecruiter from "./Components-login-recruiter/LoginRecruiter";
import ForgotPassword from "./Components-login-candidate/Forgotpassword";
import CreatePassword from "./Components-login-candidate/CreatePassword";
import EmailVerification from "./Components-login-candidate/EmailVerification";
import OtpVerification from "./Components-login-candidate/OtpVerification";
import LandingPage from "./Components-landingpage/LandingPage";
import UserRegRecruiter from "./Components-login-recruiter/Userregrecruiter";
import UserRegCandidate from "./Components-login-candidate/Userregcandidate";
import Landingpage from "./Components-landingpage/LandingPage";
import EmailRecruiter from "./Components-login-recruiter/EmailRecruiter";
import OtpRecruiter from "./Components-login-recruiter/OtpRecruiter";
import ForgotPasswordRe from "./Components-login-recruiter/ForgotpasswordRe";
import CreatePasswordRe from "./Components-login-recruiter/CreatepasswordRe";
import RecruiterDashboard from "./Components-Recruiter/RecruiterDashboard";
import CandidtateDashboard from "./Components-Candidate/CandidateDashboard";
import AboutUs from "./Components-landingpage/AboutUs";
import RecruiterProfile from "./Components-Recruiter/RecruiterProfile";
import CandidateProfile from "./Components-Candidate/CandidateProfile";

import MainLayout from "./Components-Candidate/MainLayout";
import PersonalInfo from "./Components-Candidate/PersonalInfo";
import EducationPage from "./Components-Candidate/Education";
import SkillsPage from "./Components-Candidate/CandidateSkills";
import ExperiencePage from "./Components-Candidate/Experience";
import ReviewPage from "./Components-Candidate/ReviewPage";
import SummaryPage from "./Components-Candidate/Summary";

const router = createBrowserRouter([
  {
    path: "/Resume-builder/",
    element: <LandingPage />,
  },
  {
    path: "/Resume-builder/login/candidate",
    element: <LoginCanditate />,
  },
  {
    path: "/Resume-builder/login/recruiter",
    element: <LoginRecruiter />,
  },
  {
    path: "/Resume-builder/login/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/Resume-builder/login/createpassword",
    element: <CreatePassword />,
  },
  {
    path: "/Resume-builder/login/emailverification",
    element: <EmailVerification />,
  },
  {
    path: "/Resume-builder/login/emailverification/otpverification",
    element: <OtpVerification />,
  },
  {
    path: "/Resume-builder/userregrecruiter",
    element: <UserRegRecruiter />,
  },
  {
    path: "/Resume-builder/userregcandidate",
    element: <UserRegCandidate />,
  },
  {
    path: "/Resume-builder/login/emailrecruiter",
    element: <EmailRecruiter />,
  },
  {
    path: "/Resume-builder/login/emailrecruiter/otprecruiter",
    element: <OtpRecruiter />,
  },
  {
    path: "/Resume-builder/login/forgotpasswordre",
    element: <ForgotPasswordRe />,
  },
  {
    path: "/Resume-builder/login/createpasswordre",
    element: <CreatePasswordRe />,
  },
  {
    path: "/Resume-builder/dashboard/recruiter",
    element: <RecruiterDashboard />,
  },
  {
    path: "/Resume-builder/candidate/dashboard",
    element: <CandidtateDashboard />,
  },
  {
    path: "/Resume-builder/Aboutus",
    element: <AboutUs />,
  },
  {
    path: "Resume-builder/dashboard/recruiter/Profile",
    element: <RecruiterProfile />,
  },

  {
    element: <MainLayout />,
    children: [
      {
        path: "/Resume-builder/candidate/profile",
        element: <CandidateProfile />,
      },
      {
        path: "/Resume-builder/candidate/candidate/personalinfo",
        element: <PersonalInfo />,
      },
      {
        path: "/Resume-builder/candidate/candidate/education",
        element: <EducationPage />,
      },
      {
        path: "/Resume-builder/candidate/candidate/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/Resume-builder/candidate/candidate/skills",
        element: <SkillsPage />,
      },
      {
        path: "/Resume-builder/candidate/candidate/summary",
        element: <SummaryPage />,
      },
      {
        path: "/Resume-builder/candidate/candidate/review",
        element: <ReviewPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
