import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../layout/DashboardLayout";
import AuthLayout from "../layout/AuthLayout";

// admin
import AdminDashboard from "../pages/admin/Dashboard";
import Settings from "../pages/admin/Settings";
import ApiKeys from "../pages/admin/ApiKeys";
import TenantManagement from "../pages/admin/TenantManagement";
import ViewTenant from "../pages/admin/ViewTenant";


// owner
import OwnerDashboard from "../pages/owner/Dashboard";
import AiTraining from "../pages/owner/AiTraining";
import CallSummary from "../pages/owner/CallSummary";
import OrderList from "../pages/owner/OrderList";
import ItemManagement from "../pages/owner/ItemManagement";
import OwnerSettings from "../pages/owner/Settings";


// auth
import LogIn from "../pages/auth/LogIn";
import SignUp from "../pages/auth/SignUp";
import ConfirmSignUp from "../pages/auth/ConfirmSignUp";
import ForgetPass from "../pages/auth/ForgetPass";
import OTP from "../pages/auth/OTP";
import NewPass from "../pages/auth/NewPass";
import Success from "../pages/auth/Success";
import Subscription from "@/pages/admin/Subscription";
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
   {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
       
      { path: "/admin/dashboard", element: <AdminDashboard /> },
      { path: "/admin/tenant-management", element: <TenantManagement /> },
      { path: "/admin/tenant-management/view/:id", element: <ViewTenant /> },
      { path: "/admin/subscriptions-billing", element: <Subscription /> },
      { path: "/admin/api-keys", element: <ApiKeys /> },
      { path: "/admin/settings", element: <Settings /> },
      
    ],
  },
  

  // SYSTEM OWNER DASHBOARD ROUTES
  {
    path: "/owner",
    element: <DashboardLayout />,
    children: [
       // owner
      { path: "/owner/dashboard", element: <OwnerDashboard /> },
      { path: "/owner/ai-training", element: <AiTraining /> },
      { path: "/owner/call-summary", element: <CallSummary /> },
      { path: "/owner/order-list", element: <OrderList /> },
      { path: "/owner/item-management", element: <ItemManagement /> },
      { path: "/owner/settings", element: <OwnerSettings /> },
      
    ],
  },

 

]);

export default router;