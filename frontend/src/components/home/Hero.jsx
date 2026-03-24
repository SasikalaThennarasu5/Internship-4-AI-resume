import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden text-center py-28 text-white">

      {/* 🌈 BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-600 to-purple-700"></div>

      {/* 💫 DANCING LIGHT (smooth flowing glow) */}
      <div className="absolute inset-0 animate-gradientMove 
        bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.6),transparent_60%)]">
      </div>

      {/* 💜 BOTTOM CURVE (slight motion) */}
      <div className="absolute bottom-0 left-0 w-full h-72 
        bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 
        rounded-t-[100%] opacity-80 animate-waveSlow">
      </div>

      {/* EXTRA SOFT BLEND */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Create a Professional Resume with AI
        </h1>

        <p className="max-w-2xl mx-auto mb-10 opacity-90">
          Build a job-winning resume in minutes using our AI-powered resume builder.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate("/builder")}
            className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-3 rounded-lg shadow-lg 
            hover:scale-105 transition"
          >
            Create My Resume
          </button>

          <button
            onClick={() => navigate("/templates")}
            className="bg-orange-400 hover:bg-orange-500 px-6 py-3 rounded-lg shadow-lg 
            hover:scale-105 transition"
          >
            View Templates
          </button>
        </div>

        <p className="mt-6 text-sm opacity-80">
          No design skills required. ATS-friendly templates.
        </p>
      </div>
    </div>
  );
}