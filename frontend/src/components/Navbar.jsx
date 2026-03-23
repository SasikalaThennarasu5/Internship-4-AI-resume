import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthModal from "../components/auth/AuthModal";

export default function Navbar() {
  const navigate = useNavigate();
  const [openAuth, setOpenAuth] = useState(false);
  

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully 👋");
    navigate("/");
  };

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-secondary font-semibold"
      : "hover:text-gray-200";

  return (
    <>
      <div className="flex justify-between items-center px-10 py-4 bg-gradient-to-r from-primary to-purple-600 text-white">
        
        {/* LOGO */}
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          VetriSmartCV
        </h1>

        {/* NAV LINKS */}
        <div className="flex gap-6 items-center">
          
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/templates" className={linkStyle}>
            Resume Templates
          </NavLink>

          <NavLink to="/pricing" className={linkStyle}>
            Pricing
          </NavLink>

          {/* 🔐 AUTH BUTTON */}
          {token ? (
            <button
              onClick={handleLogout}
              className="hover:text-gray-200"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setOpenAuth(true)}
              className="hover:text-gray-200"
            >
              Login
            </button>
          )}

          {/* CTA BUTTON */}
          <button
            onClick={() => navigate("/builder")}
            className="bg-secondary px-4 py-2 rounded hover:opacity-90"
          >
            Create My Resume
          </button>
        </div>
      </div>

      {/* MODAL */}
      <AuthModal
        isOpen={openAuth}
        onClose={() => setOpenAuth(false)}
      />

      
      

    </>
  );
}