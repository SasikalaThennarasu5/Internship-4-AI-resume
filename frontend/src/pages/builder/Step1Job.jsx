import { useState } from "react";

export default function Step1Job({ next, back, updateData }) {
  const [role, setRole] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    "UI Designer",
    "UX Designer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Data Analyst",
    "Data Scientist",
    "Machine Learning Engineer",
    "Marketing Executive",
    "Digital Marketing Specialist",
    "SEO Analyst",
    "Product Manager",
    "Business Analyst",
    "Customer Support Executive",
  ];

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
      </div>

      {/* CARD */}
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-md">

        <h2 className="text-xl font-semibold text-center mb-6">
          What job are you applying for?
        </h2>

        {/* INPUT */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search job role..."
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-gray-100 px-10 py-3 rounded-full outline-none"
          />
          <span className="absolute left-3 top-3 text-gray-400">🔍</span>
        </div>

        {/* AI BUTTON */}
        <div className="flex justify-between items-center mb-3">
          <p
            onClick={() => setShowSuggestions(!showSuggestions)}
            className="text-primary text-sm cursor-pointer hover:underline"
          >
            ✨ AI Suggestions
          </p>

          {showSuggestions && (
            <p
              onClick={() => setShowSuggestions(false)}
              className="text-xs text-gray-400 cursor-pointer"
            >
              Close
            </p>
          )}
        </div>

        {/* DROPDOWN LIST */}
        {showSuggestions && (
          <div className="max-h-40 overflow-y-auto border rounded-lg p-2 bg-gray-50 shadow-inner space-y-1">

            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((item, i) => (
                <p
                  key={i}
                  onClick={() => {
                    setRole(item);
                    setShowSuggestions(false); // auto close
                  }}
                  className={`cursor-pointer px-3 py-2 rounded transition ${
                    role === item
                      ? "bg-primary text-white"
                      : "hover:bg-primary/10"
                  }`}
                >
                  {item}
                </p>
              ))
            ) : (
              <p className="text-gray-400 px-2 py-1">
                No suggestions found
              </p>
            )}

          </div>
        )}

        {/* BUTTONS */}
        <div className="flex justify-between mt-10 gap-4">

          <button
            onClick={back}
            className="flex-1 border rounded py-2 hover:bg-gray-50"
          >
            Back
          </button>

          <button className="flex-1 border rounded py-2 hover:bg-gray-50">
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