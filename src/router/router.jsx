import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../layout/DashboardLayout";
import AuthLayout from "../layout/AuthLayout";

// admin
// import Home from "../pages/admin/Home";


// owner
import Dashboard from "../pages/owner/Dashboard";


// auth
import LogIn from "../pages/auth/LogIn";
import SignUp from "../pages/auth/SignUp";
import ConfirmSignUp from "../pages/auth/ConfirmSignUp";
import ForgetPass from "../pages/auth/ForgetPass";
import OTP from "../pages/auth/OTP";
import NewPass from "../pages/auth/NewPass";
import Success from "../pages/auth/Success";
// import ResetPassword from "../pages/auth/ResetPassword";
// import NewPassword from "../pages/auth/NewPassword";
// import Success from "../pages/auth/Success";
// import VerifyEmail from "../pages/auth/VerifyEmail";
// import LandingPageLayout from "../layout/LandingPageLayout";
// import AboutUs from "../pages/landing/AboutUs";
// import PrivacyPolicy from "../pages/landing/PrivacyPolicy";
// import TermsService from "../pages/landing/TermsService";



const router = createBrowserRouter([
  //  AUTH ROUTES
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LogIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "signup/confirm", element: <ConfirmSignUp /> },
      { path: "forgot/password", element: <ForgetPass /> },
      { path: "verify/otp", element: <OTP /> },
      { path: "new/password", element: <NewPass /> },
      { path: "success", element: <Success /> },
      // { path: "reset/password", element: <ResetPassword /> },
      // { path: "success", element: <Success /> },
      // { path: "verify/email", element: <VerifyEmail /> },
    ],
  },

  // ADMIN DASHBOARD ROUTES
  //  {
  //   path: "/admin",
  //   element: <DashboardLayout />,
  //   children: [
  //      // owner
  //     { path: "/admin/dashboard", element: <Dashboard /> },
  //     { path: "/admin/farm/management", element: <FarmManagement /> },
  //     { path: "/admin/farm/management/details/:id", element: <FarmDetails /> },
  //     { path: "/admin/farm/management/create/farm", element: <CreateFarm /> },
  //     { path: "/admin/subscription/plans", element: <SubscriptionPlans /> },
  //     { path: "/admin/system/settings", element: <SystemSettings /> },
  //   ],
  // },
  

  // SYSTEM OWNER DASHBOARD ROUTES
  {
    path: "/owner",
    element: <DashboardLayout />,
    children: [
       // owner
      { path: "/owner/dashboard", element: <Dashboard /> },
      
    ],
  },

 

]);

export default router;