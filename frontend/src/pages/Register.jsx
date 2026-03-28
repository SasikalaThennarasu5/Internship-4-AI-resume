import { useState } from "react";
import { registerUser } from "../api/authApi";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

export default function Register({ onClose, openLogin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    try {
      await registerUser({
        username: form.name,
        email: form.email,
        password: form.password,
      });

      openLogin();
    } catch (err) {
      console.log(err.response?.data);
      alert("Registration Failed ❌");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w-full max-w-[900px] h-[550px] bg-white rounded-2xl shadow-xl flex overflow-hidden">

        {/* LEFT */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">

          <h2 className="text-3xl font-bold mb-2">
            Create <span className="text-primary">Account</span>
          </h2>

          <p className="text-gray-500 mb-6">
            Sign up to start building your resume
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
            className="space-y-4"
          >

            {/* NAME */}
            <div>
              <label className="text-sm">Name</label>
              <input
                placeholder="Enter Name"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 outline-none text-sm focus:ring-2 focus:ring-primary"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
            </div>

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

            <button className="w-full mt-4 py-3 rounded-lg text-white bg-gradient-to-r from-[#7b5cff] to-[#6C3BFF]">
              Create Account
            </button>

          </form>

          <div className="text-center my-4 text-gray-400">or</div>

          {/* SOCIAL */}
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
            Already have an account?{" "}
            <span
              onClick={openLogin}
              className="text-primary cursor-pointer"
            >
              Log In
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
  

</div>

      </div>
    </div>
  );
}