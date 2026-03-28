import { useState } from "react";
import { loginUser } from "../api/authApi";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Login({ onClose, openRegister }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await loginUser(form);
      localStorage.setItem("token", res.data.access);
      onClose();
      window.location.href = "/builder";
    } catch {
      alert("Invalid email or password ❌");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w-full max-w-[900px] h-[550px] bg-white rounded-2xl shadow-xl flex overflow-hidden">

        {/* LEFT */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">

          <h2 className="text-3xl font-bold mb-2">
            Welcome <span className="text-primary">Back</span>
          </h2>

          <p className="text-gray-500 mb-6">
            Sign in to continue building your resume
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="space-y-4"
          >
            {/* EMAIL */}
            <div>
              <label className="text-sm">Email Address</label>
              <input
                type="email"
                placeholder="Enter Email Id"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 outline-none text-sm focus:ring-2 focus:ring-primary"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm">Password</label>

              <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Enter Password"
    className="w-full mt-1 p-3 pr-10 rounded-lg bg-gray-100 outline-none text-sm focus:ring-2 focus:ring-primary"
    onChange={(e) =>
      setForm({ ...form, password: e.target.value })
    }
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
  >
    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
  </button>
</div>
            </div>

            {/* FORGOT PASSWORD */}
            <p
  onClick={() => {
    onClose();           // ✅ close modal first
    navigate("/forgot-password"); // ✅ then navigate
  }}
  className="text-right text-sm text-primary cursor-pointer"
>
  Forgot Password?
</p>

            <button className="w-full py-3 rounded-lg text-white bg-gradient-to-r from-[#7b5cff] to-[#6C3BFF]">
              Log In
            </button>
          </form>

          <div className="text-center my-4 text-gray-400">or</div>

          {/* SOCIAL LOGIN */}
          <div className="flex flex-col gap-3">

            <div className="border py-2 rounded-lg flex justify-center overflow-hidden">
              <GoogleLogin
                onSuccess={async (res) => {
                  const r = await axios.post(
                    "https://internship-4-ai-resume-5.onrender.com/api/auth/google/",
                    { token: res.credential }
                  );
                  localStorage.setItem("token", r.data.access);
                  onClose();
                  window.location.href = "/builder";
                }}
              />
            </div>

            

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Don’t have an account?{" "}
            <span
              onClick={openRegister}
              className="text-primary cursor-pointer"
            >
              Sign up for free
            </span>
          </p>
        </div>

        {/* RIGHT */}
        <div
  className="hidden md:flex w-1/2 relative"
  style={{
    backgroundImage: "url('/auth-illustration.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* Optional overlay (for premium look) */}
  



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