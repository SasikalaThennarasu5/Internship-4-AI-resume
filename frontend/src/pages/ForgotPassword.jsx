import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!email) {
      setError("Please enter your email");
      return;
    }

    setLoading(true);

    // ✅ FRONTEND ONLY (store email)
    localStorage.setItem("resetEmail", email);

    setTimeout(() => {
      setLoading(false);
      setMessage("Password reset link sent (demo) ✅");

      // redirect to reset page
      setTimeout(() => {
        navigate("/reset-password");
      }, 1200);

    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold mb-2 text-center">
          Forgot Password
        </h2>

        <p className="text-gray-500 text-center mb-6 text-sm">
          Enter your email and we’ll send you a reset link
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* EMAIL */}
          <div>
            <label className="text-sm">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 rounded-lg bg-gray-100 outline-none text-sm focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg text-white bg-gradient-to-r from-[#7b5cff] to-[#6C3BFF] hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

        </form>

        {/* SUCCESS */}
        {message && (
          <p className="text-center text-sm mt-4 text-green-600">
            {message}
          </p>
        )}

        {/* ERROR */}
        {error && (
          <p className="text-center text-sm mt-4 text-red-500">
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