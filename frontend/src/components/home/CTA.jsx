import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();
  return (
    <div className="py-24 bg-[#f3f4f8] flex justify-center">
      

      {/* MAIN CONTAINER */}
      <div className="relative w-[950px] rounded-[50px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

        <div className="absolute inset-0">
    <img
      src="/images/bg.png"
      alt="background"
      className="w-full h-full object-cover"
    />
  </div>
  {/* 🎨 PURPLE OVERLAY (IMPORTANT for readability) */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-purple-700/80"></div>

  {/* ✨ OPTIONAL SOFT GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_70%)]"></div>

        {/* GLOW BLOBS */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>

        {/* CONTENT WRAPPER */}
        <div className="relative px-12 py-14 flex items-center justify-center">

          {/* LEFT IMAGE */}
          <img
            src="/images/boy.png"
            alt="boy"
            className="absolute -left-12 bottom-0 w-64 object-contain animate-float"
          />

          {/* TEXT CONTENT */}
          
          <div className="text-center max-w-xl text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Create Your Professional Resume in Minutes
            </h2>

            <p className="text-sm md:text-base opacity-90 mb-8">
              Build a job-winning resume using AI-powered suggestions and modern templates.
            </p>

            {/* BUTTON */}
            <button onClick={() => navigate("/builder")} className="bg-orange-400 hover:bg-orange-500 px-8 py-3 rounded-lg font-medium shadow-lg 
              transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_25px_rgba(255,165,0,0.5)]">
              Create My Resume
            </button>
          </div>

        </div>

        {/* RIGHT SIDE GLOW CURVE */}
        <div className="absolute right-0 top-0 h-full w-32 bg-purple-400 rounded-l-full blur-2xl opacity-30"></div>

      </div>
    </div>
  );
}