import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Templates from "../pages/Templates";
import Pricing from "../pages/Pricing";
import BuilderLayout from "../pages/builder/BuilderLayout";
import ResumeBuilder from "../pages/ResumeBuilder";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* MAIN WEBSITE */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        {/* BUILDER (SEPARATE LAYOUT) */}
        <Route path="/builder" element={<BuilderLayout />}>
          <Route index element={<ResumeBuilder />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;