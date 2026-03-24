import { useEffect, useState } from "react";
import { getTestimonials } from "../../api/testimonialApi";

export default function Testimonials() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await getTestimonials();
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // AUTO SLIDE (safe)
  useEffect(() => {
    if (!data.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [data]);

  if (!data.length || !data[index]) return null;

  return (
    <div className="relative py-24 text-center text-white overflow-hidden">

  {/* 🖼 BACKGROUND IMAGE */}
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

  {/* CONTENT */}
  <div className="relative z-10"></div>

      {/* TITLE */}
      <h2 className="text-4xl font-bold mb-2">
        What Our Users Say
      </h2>
      <p className="text-sm opacity-90 mb-14">
        Join thousands of happy job seekers
      </p>

      {/* SLIDER CONTAINER */}
<div className="relative flex justify-center items-center h-[360px]">

  {/* STACKED PAPERS BEHIND */}
  <div className="absolute w-[420px] h-[260px] bg-white rotate-6 shadow-md"></div>
  <div className="absolute w-[420px] h-[260px] bg-white -rotate-6 shadow-md"></div>

  {/* MAIN SLIDER */}
  <div className="relative w-[420px] h-[280px] overflow-hidden">

    {data.map((item, i) => {
      let position =
        "translate-x-full opacity-0 scale-90";

      if (i === index) {
        position =
          "translate-x-0 opacity-100 scale-100 z-10";
      } else if (
        i === (index - 1 + data.length) % data.length
      ) {
        position =
          "-translate-x-full opacity-0 scale-90";
      }

      return (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full 
          bg-white text-black p-10 shadow-xl
          transition-all duration-700 ease-in-out ${position}`}

          /* ✂️ PAPER SHAPE */
          style={{
            clipPath:
              "polygon(5% 0%, 95% 0%, 100% 20%, 95% 100%, 5% 100%, 0% 20%)",
          }}
        >
          {/* QUOTE */}
          <div className="text-4xl text-orange-400 mb-4">❝</div>

          {/* RATING */}
          <div className="text-yellow-500 mb-4 tracking-widest text-lg">
            {"★".repeat(item?.rating || 0)}
          </div>

          {/* MESSAGE */}
          <p className="text-gray-700 mb-6 text-sm leading-relaxed">
            "{item.message}"
          </p>

          {/* USER */}
          <div className="flex items-center justify-center gap-3">
            <img
              src={item.image}
              onError={(e) =>
                (e.target.src = "/default-avatar.png")
              }
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
            />
            <div className="text-left">
              <p className="font-semibold text-gray-800">
                {item.name}
              </p>
              <p className="text-xs text-gray-500">
                {item.role}
              </p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

      {/* DOT CONTROLS */}
      <div className="mt-10 flex justify-center gap-3">
        {data.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === index
                ? "w-6 bg-white"
                : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}