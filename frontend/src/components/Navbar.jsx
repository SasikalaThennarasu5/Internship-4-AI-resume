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

  return (
    <>
      <div className="flex justify-between items-center px-10 py-4 
        bg-gradient-to-r from-indigo-700 via-purple-600 to-purple-700 
        text-white shadow-md">

        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-50 h-50 object-contain"
          />
          
        </div>

        {/* NAV LINKS */}
        <div className="flex gap-6 items-center">

          {/* HOME */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-md transition ${
                isActive
                  ? "bg-white text-black shadow"
                  : "hover:text-gray-200"
              }`
            }
          >
            Home
          </NavLink>

          {/* TEMPLATES */}
          <NavLink
            to="/templates"
            className={({ isActive }) =>
              `px-2 py-1.5 transition ${
                isActive
                  ? "text-white font-semibold"
                  : "hover:text-gray-200"
              }`
            }
          >
            Resume Templates
          </NavLink>

          {/* PRICING */}
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `px-2 py-1.5 transition ${
                isActive
                  ? "text-white font-semibold"
                  : "hover:text-gray-200"
              }`
            }
          >
            Pricing
          </NavLink>

          {/* LOGIN / LOGOUT */}
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
            className="flex items-center gap-2 
            bg-gradient-to-r from-orange-400 to-orange-500 
            px-5 py-2 rounded-md font-medium shadow-lg
            transition-all duration-300 hover:scale-105 
            hover:shadow-[0_10px_25px_rgba(255,165,0,0.5)]"
          >
            ⬆ Create My Resume
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