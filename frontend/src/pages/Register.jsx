import { useState } from "react";
import { registerUser } from "../api/authApi";

export default function Register({ onClose, openLogin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      await registerUser({
        username: form.name,
        email: form.email,
        password: form.password,
      });

      openLogin(); // switch to login after success
    } catch (err) {
      console.log(err.response?.data);
      alert("Registration Failed ❌");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w-full max-w-[900px] h-[550px] bg-white rounded-2xl shadow-xl flex overflow-hidden">

        {/* LEFT FORM */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">

          <h2 className="text-3xl font-bold mb-2">
            Create <span className="text-primary">Account</span>
          </h2>

          <p className="text-gray-500 mb-6">
            Sign in to continue building your resume
          </p>

          {/* ✅ FORM START */}
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
                autoComplete="name"
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
                autoComplete="email"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 outline-none text-sm focus:ring-2 focus:ring-primary"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                autoComplete="new-password"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 outline-none text-sm focus:ring-2 focus:ring-primary"
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full mt-4 py-3 rounded-lg text-white 
              bg-gradient-to-r from-[#7b5cff] to-[#6C3BFF] 
              hover:opacity-90 transition"
            >
              Create Account
            </button>

          </form>
          {/* ✅ FORM END */}

          <div className="text-center my-4 text-gray-400">or</div>

          <div className="flex gap-3">
            <button className="flex-1 border py-2 rounded-lg hover:bg-gray-50">
              Google
            </button>

            <button className="flex-1 border py-2 rounded-lg hover:bg-gray-50">
              LinkedIn
            </button>
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

        {/* RIGHT SIDE */}
        <img
  src="/auth-illustration.png"
  className="w-72 opacity-90"
/>

      </div>
    </div>
  );
}