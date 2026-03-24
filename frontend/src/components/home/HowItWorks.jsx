import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSteps } from "../../api/stepApi";

export default function HowItWorks() {
  const [steps, setSteps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const res = await getSteps();
        setSteps(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSteps();
  }, []);

  return (
    <div className="py-24 text-center bg-background">

      {/* TITLE */}
      <h2 className="text-4xl font-bold mb-2">
        How It <span className="text-primary">Works</span>
      </h2>

      <p className="mb-16 text-gray-500">
        Create Your Resume in 3 Simple Steps
      </p>

      {/* STEPS */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6">

        {steps.map((step, i) => (
          <div
            key={i}
            className="group relative bg-white p-6 rounded-2xl shadow-md w-80 text-left 
            transition-all duration-500 
            hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-200"
          >

            {/* STEP NUMBER BADGE */}
            <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center 
              bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full shadow-lg">
              {i + 1}
            </div>

            {/* ICON */}
            <img
              src={step.icon || "/default-icon.png"}
              onError={(e) => (e.target.src = "/default-icon.png")}
              className="w-14 h-14 mb-4 transition-transform duration-500 group-hover:scale-110"
              alt=""
            />

            {/* CORNER DESIGN */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-secondary rounded-bl-full opacity-80 
              transition-all duration-500 group-hover:scale-110"></div>

            {/* TEXT */}
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">
              {step.title}
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed">
              {step.description}
            </p>

            {/* BOTTOM LINE */}
            <div className="mt-6 h-1 bg-gradient-to-r from-primary to-purple-500 
              rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}

      </div>

      {/* CTA BUTTON */}
      <button
        onClick={() => navigate("/builder")}
        className="mt-16 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg
        transition-all duration-300 transform hover:scale-105 
        hover:shadow-[0_10px_30px_rgba(124,58,237,0.5)]"
      >
        Create My Resume
      </button>
    </div>
  );
}