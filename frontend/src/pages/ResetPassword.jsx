import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    // validation
    if (!password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // ✅ FAKE RESET (frontend only)
    localStorage.setItem("fakePassword", password);

    setMessage("Password reset successful ✅");

    // redirect after 2 sec
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold text-center mb-2">
          Reset Password
        </h2>

        <p className="text-gray-500 text-center mb-6 text-sm">
          Enter your new password below
        </p>

        <form onSubmit={handleReset} className="space-y-4">

          {/* NEW PASSWORD */}
          <div>
            <label className="text-sm">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full mt-1 p-3 rounded-lg bg-gray-100 outline-none text-sm focus:ring-2 focus:ring-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="text-sm">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full mt-1 p-3 rounded-lg bg-gray-100 outline-none text-sm focus:ring-2 focus:ring-primary"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white bg-gradient-to-r from-[#7b5cff] to-[#6C3BFF] hover:opacity-90 transition"
          >
            Reset Password
          </button>

        </form>

        {/* SUCCESS */}
        {message && (
          <p className="text-green-600 text-sm text-center mt-4">
            {message}
          </p>
        )}

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm text-center mt-4">
            {error}
          </p>
        )}

        {/* BACK */}
        <p
          onClick={() => navigate("/login")}
          className="text-center text-sm mt-6 text-primary cursor-pointer hover:underline"
        >
          ← Back to Login
        </p>

      </div>
    </div>
  );
}