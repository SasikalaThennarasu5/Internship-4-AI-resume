import { useState } from "react";

export default function Step2Experience({ next, back, updateData }) {
  const [selected, setSelected] = useState("");

  const levels = [
    {
      label: "No Experience (Fresher)",
      value: "Fresher",
      img: "/images/fresher.png",
    },
    {
      label: "1-2 years",
      value: "1-2 Years",
      img: "/images/1-2.png",
    },
    {
      label: "3-5 Years",
      value: "3-5 Years",
      img: "/images/3-5.png",
    },
    {
      label: "5-10 Years",
      value: "5-10 Years",
      img: "/images/5-10.png",
    },
    {
      label: "10+ Years",
      value: "10+ Years",
      img: "/images/10plus.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">

      {/* HEADER */}
      <h1 className="text-4xl font-bold mb-2 text-center">
        Let’s <span className="text-primary">Build Your Resume</span>
      </h1>

      <p className="text-gray-500 mb-6 text-center">
        Answer a few quick questions and we’ll create your professional resume.
      </p>

      {/* STEP BAR */}
      <div className="w-full max-w-4xl mb-8">
        <p className="text-sm mb-2 text-gray-500">Step 2 of 7</p>

        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-primary w-[30%] rounded-full"></div>
        </div>

        <div className="flex justify-between mt-4 text-sm">
          {[1, 2, 3, 4, 5, 6, 7].map((num, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-xs ${
                  num <= 2 ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                {num}
              </div>
              <div className="w-10 h-[2px] bg-gray-300 mt-1"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CARD */}
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-md text-center">

        <h2 className="text-xl font-semibold mb-2">
          Experience Level
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          How much work experience do you have?
        </p>

        {/* OPTIONS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {levels.map((item, i) => (
            <button
              key={i}
              onClick={() => setSelected(item.value)}
              className={`flex items-center gap-3 p-3 rounded-lg border transition ${
                selected === item.value
                  ? "border-primary bg-purple-100 ring-2 ring-primary/40"
                  : "hover:border-primary"
              }`}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-10 h-10"
              />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between gap-4">
          
          <button
            onClick={back}
            className="flex-1 border rounded py-2 hover:bg-gray-50"
          >
            Back
          </button>

          <button className="flex-1 border rounded py-2 hover:bg-gray-50 flex items-center justify-center gap-2">
            💾 Save as draft
          </button>

          <button
            onClick={() => {
              if (!selected) {
                alert("Please select your experience level");
                return;
              }
              updateData({ experienceLevel: selected });
              next();
            }}
            className="flex-1 bg-orange-500 text-white rounded py-2 hover:opacity-90"
          >
            Next
          </button>

        </div>
      </div>
    </div>
  );
}