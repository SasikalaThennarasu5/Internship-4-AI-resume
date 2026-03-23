import { useState } from "react";
import { loginUser } from "../api/authApi";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function Login({ onClose, openRegister }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      console.log("LOGIN DATA:", form); // ✅ debug

      const res = await loginUser(form);

      localStorage.setItem("token", res.data.access);

      onClose();

      // ✅ redirect
      window.location.href = "/builder";
    } catch (err) {
      console.log("LOGIN ERROR:", err.response?.data);
      alert("Invalid username or password ❌");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-lg relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2 text-center">
          Welcome <span className="text-primary">Back</span>
        </h2>

        <p className="text-sm text-center mb-4 text-gray-500">
          Sign in to continue building your resume
        </p>

        {/* ✅ FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          {/* USERNAME */}
          <input
            type="text"
            placeholder="Username"
            autoComplete="username"
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
            className="w-full border p-2 mb-3 rounded focus:ring-2 focus:ring-primary"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="w-full border p-2 mb-2 rounded focus:ring-2 focus:ring-primary"
          />

          <p className="text-right text-sm text-primary cursor-pointer mb-3">
            Forgot Password?
          </p>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded mb-3 hover:opacity-90"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-gray-400 mb-3">or</p>

        {/* ✅ GOOGLE LOGIN */}
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            try {
              const res = await axios.post(
                "http://127.0.0.1:8000/api/auth/google/",
                {
                  token: credentialResponse.credential,
                }
              );

              localStorage.setItem("token", res.data.access);

              onClose();
              window.location.href = "/builder";
            } catch (err) {
              console.log("GOOGLE ERROR:", err.response?.data);
              alert("Google Login Failed ❌");
            }
          }}
          onError={() => {
            alert("Google Login Failed ❌");
          }}
        />

        {/* LINKEDIN */}
        <button className="w-full border py-2 rounded mt-3 hover:bg-gray-50">
          🔗 LinkedIn
        </button>

        {/* SWITCH */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span
            onClick={openRegister}
            className="text-primary cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}