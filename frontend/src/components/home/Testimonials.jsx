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

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [data]);

  if (!data.length) return null;

  const current = data[index];

  return (
    <div className="py-20 text-center bg-gradient-to-r from-purple-300 to-purple-500 text-white relative overflow-hidden">

      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-2">
        What Our Users Say
      </h2>
      <p className="text-sm opacity-90 mb-10">
        Join thousands of happy job seekers
      </p>

      {/* STACK EFFECT */}
      <div className="relative flex justify-center items-center">

        {/* BACK CARDS */}
        <div className="absolute w-96 h-64 bg-white opacity-30 rounded-xl rotate-6"></div>
        <div className="absolute w-96 h-64 bg-white opacity-50 rounded-xl -rotate-6"></div>

        {/* MAIN CARD */}
        <div className="bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent)] text-black p-8 rounded-xl shadow-xl w-96 z-10 transition-all duration-500">

          {/* QUOTE ICON */}
          <div className="text-3xl text-orange-400 mb-2">❝</div>

          {/* RATING */}
          <div className="text-yellow-500 mb-3">
            {"★".repeat(current.rating)}
          </div>

          {/* MESSAGE */}
          <p className="text-gray-600 mb-6">
            "{current.message}"
          </p>

          {/* USER */}
          <div className="flex items-center justify-center gap-3">
            <img
              src={`http://127.0.0.1:8000${current.image}`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold">{current.name}</p>
              <p className="text-sm text-gray-500">
                {current.role}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* CONTROLS */}
      <div className="mt-6 flex justify-center gap-2">
        {data.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </div>
  );
}