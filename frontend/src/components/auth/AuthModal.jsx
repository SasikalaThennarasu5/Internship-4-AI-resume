import { useState } from "react";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

export default function AuthModal({ isOpen, onClose }) {
  const [mode, setMode] = useState("login"); // "login" | "register"

  if (!isOpen) return null;

  const openLogin = () => setMode("login");
  const openRegister = () => setMode("register");

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-white w-[900px] h-[550px] rounded-2xl flex relative overflow-hidden shadow-xl">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 p-10">
          {mode === "login" ? (
            <Login onClose={onClose} openRegister={openRegister} />
          ) : (
            <Register onClose={onClose} openLogin={openLogin} />
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#7b5cff] to-[#6C3BFF] items-center justify-center relative">
          <p className="text-white text-lg font-semibold text-center px-6">
            Build your resume with AI ✨
          </p>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 rounded-full w-9 h-9 flex items-center justify-center shadow"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}