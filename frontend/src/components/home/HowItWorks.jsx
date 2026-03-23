import { useEffect, useState } from "react";
import { getSteps } from "../../api/stepApi";

export default function HowItWorks() {
  const [steps, setSteps] = useState([]);

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
    <div className="py-20 text-center bg-background">

      <h2 className="text-4xl font-bold mb-2">
        How It <span className="text-primary">Works</span>
      </h2>

      <p className="mb-12 text-gray-500">
        Create Your Resume in 3 Simple Steps
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-10 px-6">

        {steps.map((step, i) => (
          <div
            key={i}
            className="relative bg-white p-6 rounded-2xl shadow-md w-80 text-left"
          >
            {/* ICON */}
            <img
              src={step.icon}
              className="w-14 h-14 mb-4"
              alt=""
            />

            <div className="absolute top-0 right-0 w-16 h-16 bg-secondary rounded-bl-full"></div>

            <h3 className="font-semibold text-lg mb-2">
              {step.title}
            </h3>

            <p className="text-sm text-gray-500">
              {step.description}
            </p>
          </div>
        ))}

      </div>

      <button className="mt-12 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-lg shadow">
        Create My Resume
      </button>
    </div>
  );
}