import { useState } from "react";

export default function Step4Skills({ next, back, updateData, data }) {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  // 🔥 ROLE-BASED SMART SUGGESTIONS (no API)
  const skillMap = {
    "UI Designer": [
      "Figma",
      "Adobe XD",
      "Wireframing",
      "Prototyping",
      "User Research",
      "UI Design",
    ],
    "Software Developer": [
      "JavaScript",
      "React",
      "Node.js",
      "Git",
      "REST API",
      "MongoDB",
    ],
    "Marketing Executive": [
      "SEO",
      "Social Media Marketing",
      "Content Writing",
      "Google Ads",
      "Email Marketing",
    ],
    "Data Analyst": [
      "Excel",
      "SQL",
      "Python",
      "Power BI",
      "Data Visualization",
    ],
    "Customer Support": [
      "Communication",
      "Problem Solving",
      "CRM Tools",
      "Customer Handling",
    ],
  };

  const suggestions = skillMap[data?.role] || [
    "Communication",
    "Teamwork",
    "Problem Solving",
  ];

  // ADD SKILL
  const addSkill = (value) => {
    if (value && !skills.includes(value)) {
      setSkills([...skills, value]);
    }
    setSkill("");
  };

  // REMOVE SKILL
  const removeSkill = (value) => {
    setSkills(skills.filter((s) => s !== value));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">

      <h1 className="text-4xl font-bold mb-2 text-center">
        Let’s <span className="text-primary">Build Your Resume</span>
      </h1>

      <p className="text-gray-500 mb-6 text-center">
        Answer a few quick questions and we’ll create your professional resume.
      </p>

      {/* CARD */}
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-md text-center">

        <h2 className="text-xl font-semibold mb-2">Add Skills</h2>

        <p className="text-gray-500 text-sm mb-6">
          Which skills describe you best?
        </p>

        {/* INPUT */}
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addSkill(skill);
          }}
          placeholder="Type skill & press Enter"
          className="w-full bg-gray-100 px-5 py-3 rounded-full outline-none mb-4"
        />

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {skills.map((s, i) => (
            <span
              key={i}
              onClick={() => removeSkill(s)}
              className="bg-primary text-white px-3 py-1 rounded-full text-sm cursor-pointer"
            >
              {s} ✕
            </span>
          ))}
        </div>

        {/* AI SUGGESTION */}
        <p className="text-primary text-sm mb-3 text-left">
          ✨ Smart Suggestions
        </p>

        <div className="text-left space-y-2 text-gray-700">
          {suggestions.map((item, i) => (
            <p
              key={i}
              className="cursor-pointer hover:text-primary"
              onClick={() => addSkill(item)}
            >
              {item}
            </p>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between gap-4 mt-10">
          <button onClick={back} className="flex-1 border rounded py-2">
            Back
          </button>

          <button className="flex-1 border rounded py-2">
            💾 Save as draft
          </button>

          <button
            onClick={() => {
              updateData({ skills });
              next();
            }}
            className="flex-1 bg-secondary text-white rounded py-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}