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
    <div className="py-24 text-center bg-gradient-to-r from-purple-400 to-purple-600 text-white relative overflow-hidden">

      {/* TITLE */}
      <h2 className="text-4xl font-bold mb-2">
        What Our Users Say
      </h2>
      <p className="text-sm opacity-90 mb-14">
        Join thousands of happy job seekers
      </p>

      {/* SLIDER CONTAINER */}
      <div className="relative flex justify-center items-center h-[320px]">

        {/* BACK CARDS (STACK EFFECT) */}
        <div className="absolute w-[380px] h-[240px] bg-white/20 rounded-2xl rotate-6 blur-sm"></div>
        <div className="absolute w-[380px] h-[240px] bg-white/30 rounded-2xl -rotate-6 blur-sm"></div>

        {/* SLIDES */}
        <div className="relative w-[380px] h-[260px] overflow-hidden">

          {data.map((item, i) => {
            let position =
              "translate-x-full opacity-0 scale-90 rotate-6";

            if (i === index) {
              position =
                "translate-x-0 opacity-100 scale-100 rotate-0 z-10";
            } else if (
              i === (index - 1 + data.length) % data.length
            ) {
              position =
                "-translate-x-full opacity-0 scale-90 -rotate-6";
            }

            return (
              <div
                key={i}
                className={`absolute top-0 left-0 bg-white/90 backdrop-blur-md text-black p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] w-full h-full
                transition-all duration-700 ease-in-out ${position}`}
              >
                {/* QUOTE */}
                <div className="text-4xl text-orange-400 mb-3">❝</div>

                {/* RATING */}
                <div className="text-yellow-500 mb-3 tracking-wide">
                  {"★".repeat(item?.rating || 0)}
                </div>

                {/* MESSAGE */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  "{item.message}"
                </p>

                {/* USER */}
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={item.image}
                    onError={(e) =>
                      (e.target.src = "/default-avatar.png")
                    }
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow"
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