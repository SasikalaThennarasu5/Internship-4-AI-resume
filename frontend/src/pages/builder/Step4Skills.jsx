import { useState } from "react";

export default function Step4Skills({ next, back, updateData, data }) {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  // 🔥 SKILL DATABASE (acts like AI brain)
  const skillDatabase = {
    frontend: ["React", "HTML", "CSS", "JavaScript", "Tailwind", "Redux"],
    backend: ["Node.js", "Django", "REST API", "MongoDB", "SQL", "Express"],
    design: ["Figma", "Adobe XD", "UI Design", "UX Research", "Wireframing"],
    data: ["Python", "SQL", "Excel", "Power BI", "Data Visualization"],
    marketing: ["SEO", "Google Ads", "Content Writing", "Email Marketing"],
    support: ["Communication", "CRM Tools", "Problem Solving"],
    general: ["Teamwork", "Leadership", "Time Management"],
  };

  // 🔥 AI-LIKE ROLE MATCHING
  const getAISkills = (role) => {
    if (!role) return skillDatabase.general;

    const r = role.toLowerCase();

    if (
      r.includes("dev") ||
      r.includes("engineer") ||
      r.includes("programmer")
    ) {
      return [
        ...new Set([
          ...skillDatabase.frontend,
          ...skillDatabase.backend,
        ]),
      ];
    }

    if (r.includes("designer") || r.includes("ui") || r.includes("ux")) {
      return skillDatabase.design;
    }

    if (r.includes("data") || r.includes("analyst")) {
      return skillDatabase.data;
    }

    if (r.includes("marketing")) {
      return skillDatabase.marketing;
    }

    if (r.includes("support")) {
      return skillDatabase.support;
    }

    return skillDatabase.general;
  };

  // 🔥 FINAL SUGGESTIONS (filtered + limited)
  const suggestions = getAISkills(data?.role)
    .filter((s) => !skills.includes(s))
    .slice(0, 6);

  // ➕ ADD SKILL (no duplicates, case-safe)
  const addSkill = (value) => {
    if (
      value &&
      !skills.some((s) => s.toLowerCase() === value.toLowerCase())
    ) {
      setSkills([...skills, value]);
    }
    setSkill("");
  };

  // ❌ REMOVE SKILL
  const removeSkill = (value) => {
    setSkills(skills.filter((s) => s !== value));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">

      {/* HEADER */}
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
              className="bg-primary text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:scale-105 transition"
            >
              {s} ✕
            </span>
          ))}
        </div>

        {/* AI SUGGESTIONS */}
        <p className="text-primary text-sm mb-3 text-left">
          ✨ Smart Suggestions {data?.role && `(for ${data.role})`}
        </p>

        <div className="flex flex-wrap gap-2">
          {suggestions.length > 0 ? (
            suggestions.map((item, i) => (
              <span
                key={i}
                onClick={() => addSkill(item)}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-primary hover:text-white transition-all duration-200 hover:scale-105"
              >
                {item}
              </span>
            ))
          ) : (
            <p className="text-gray-400 text-sm">
              All suggested skills added ✅
            </p>
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between gap-4 mt-10">
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
              updateData({ skills });
              next();
            }}
            className="flex-1 bg-secondary text-white rounded py-2 hover:opacity-90"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}