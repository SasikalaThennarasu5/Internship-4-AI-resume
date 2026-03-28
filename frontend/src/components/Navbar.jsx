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

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/templates", label: "Resume Templates" },
    { to: "/pricing", label: "Pricing" },
  ];

  return (
    <>
      <div
        className="flex justify-between items-center px-10 py-4 
        bg-gradient-to-r from-indigo-700 via-purple-600 to-purple-700 
        text-white shadow-md"
      >
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
        <div className="flex items-center gap-6">
          
          {/* NAV ITEMS */}
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-md transition ${
                  isActive
                    ? "bg-white text-black shadow"
                    : "hover:text-gray-200"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* LOGIN / LOGOUT */}
          {token ? (
            <button
              onClick={handleLogout}
              className="px-4 py-1.5 rounded-md hover:text-gray-200 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setOpenAuth(true)}
              className="px-4 py-1.5 rounded-md hover:text-gray-200 transition"
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

      {/* AUTH MODAL */}
      <AuthModal
        isOpen={openAuth}
        onClose={() => setOpenAuth(false)}
      />
    </>
  );
}