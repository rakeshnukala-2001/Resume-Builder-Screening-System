import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginCanditate from "./Components-login-candidate/LoginCandidate";
import LoginRecruiter from "./Components-login-recruiter/LoginRecruiter";
import ForgotPassword from "./Components-login-candidate/Forgotpassword";
import CreatePassword from "./Components-login-candidate/CreatePassword";
import EmailVerification from "./Components-login-candidate/EmailVerification";
import OtpVerification from "./Components-login-candidate/OtpVerification";
import LoginSuccess from "./Components-login-candidate/LoginSuccess";
import LandingPage from "./Components-landingpage/LandingPage";
import UserRegRecruiter from "./Components-login-recruiter/Userregrecruiter";
import UserRegCandidate from "./Components-login-candidate/Userregcandidate";
import Landingpage from "./Components-landingpage/LandingPage";
import EmailRecruiter from "./Components-login-recruiter/EmailRecruiter";
import OtpRecruiter from "./Components-login-recruiter/OtpRecruiter";
import ForgotPasswordRe from "./Components-login-recruiter/ForgotpasswordRe";
import CreatePasswordRe from "./Components-login-recruiter/CreatepasswordRe";
import RecruiterDashboard from "./Components-Recruiter/RecruiterDashboard";
import CandidateDashboard from "./Components-Candidate/CandidateDashboard";
import CandidateProfile from "./Components-CandidateProfile/CandidateProfile";

const router = createBrowserRouter([
  {
    path: "/Resume-builder/home",
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
    path: "/Resume-builder/login/loginsuccess",
    element: <LoginSuccess />,
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
    path: "/Resume-builder/dashboard/candidate",
    element: <CandidateDashboard />,
  },
  {
    path: "/Resume-builder/candidate/profile",
    element: <CandidateProfile />,
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
