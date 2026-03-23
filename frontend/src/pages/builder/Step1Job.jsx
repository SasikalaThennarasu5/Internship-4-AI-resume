import { useState } from "react";

export default function Step1Job({ next, back, updateData }) {
  const [role, setRole] = useState("");

  const suggestions = [
    "UI Designer",
    "Software Developer",
    "Marketing Executive",
    "Data Analyst",
    "Customer Support",
  ];

  // 🔥 Smart filtering (AI-like behavior)
  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(role.toLowerCase())
  );

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
        <p className="text-sm mb-2 text-gray-500">Step 1 of 7</p>

        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-primary w-[15%] rounded-full"></div>
        </div>

        {/* STEP NUMBERS */}
        <div className="flex justify-between mt-4 text-sm">
          {[1, 2, 3, 4, 5, 6, 7].map((num, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-xs ${
                  num === 1 ? "bg-green-500" : "bg-gray-300"
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
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-md">

        <h2 className="text-xl font-semibold text-center mb-6">
          What job are you applying for?
        </h2>

        {/* SEARCH INPUT */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search here"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-gray-100 px-10 py-3 rounded-full outline-none"
          />
          <span className="absolute left-3 top-3 text-gray-400">🔍</span>
        </div>

        {/* AI SUGGESTION */}
        <p className="text-primary text-sm mb-3">✨ AI Suggestion</p>

        {/* LIST */}
        <div className="space-y-2 text-gray-700">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((item, i) => (
              <p
                key={i}
                onClick={() => setRole(item)}
                className={`cursor-pointer px-2 py-1 rounded ${
                  role === item
                    ? "bg-primary text-white"
                    : "hover:text-primary"
                }`}
              >
                {item}
              </p>
            ))
          ) : (
            <p className="text-gray-400">No suggestions found</p>
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between mt-10 gap-4">
          
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
              if (!role.trim()) {
                alert("Please enter a job role");
                return;
              }
              updateData({ role });
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