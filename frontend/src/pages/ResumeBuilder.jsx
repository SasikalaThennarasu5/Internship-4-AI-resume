import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ResumeContext } from "../context/ResumeContext";
import { createResume } from "../api/resumeApi";
import ModernPro from "../components/templates/ModernPro";
import Executive from "../components/templates/Executive";

export default function ResumeBuilder() {

  const handleSave = async () => {
  try {
    const response = await createResume({
      ...formData,
      template: template,
    });

    console.log("Saved:", response.data);
    alert("Resume Saved Successfully ✅");

  } catch (error) {
    console.error(error);
    alert("Error saving resume ❌");
  }
};

  const location = useLocation();

  // ✅ Template from navigation
  const selectedTemplate = location.state?.template || "Modern Pro";

  const { template, setTemplate } = useContext(ResumeContext);

  useEffect(() => {
    if (selectedTemplate) {
      setTemplate(selectedTemplate);
    }
  }, [selectedTemplate, setTemplate]);

  // ✅ Form Data (DECLARE FIRST 🔥)
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    skills: "",
    experience: "",
  });

  // ✅ Load saved data
  useEffect(() => {
    const saved = localStorage.getItem("resumeData");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // ✅ Auto save
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(formData));
  }, [formData]);

  // ✅ AI Suggestion (Debounced)
  const [aiText, setAiText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!formData.skills) {
        setAiText("Add skills to get AI suggestion");
      } else {
        setAiText(
          `Strong in ${formData.skills}. Suitable for ${
            formData.role || "software roles"
          }.`
        );
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [formData.skills, formData.role]);

  // ✅ Handle Input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Template Switch
  const renderTemplate = () => {
    switch (template) {
      case "Executive":
        return <Executive data={formData} />;

      case "Modern Pro":
      default:
        return <ModernPro data={formData} />;
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">

      {/* FORM */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Resume Form
        </h2>

        <p className="mb-4 text-sm">
          Template:{" "}
          <span className="text-primary font-semibold">{template}</span>
        </p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="text"
          name="role"
          placeholder="Job Role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills (e.g. React, Node)"
          value={formData.skills}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <textarea
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* ✅ USE aiText */}
        <div className="mt-4 p-3 bg-accent text-white rounded">
          🤖 AI Suggestion: {aiText}
        </div>
      </div>
      <button
  onClick={handleSave}
  className="mt-4 bg-primary text-white px-4 py-2 rounded w-full"
>
  Save Resume
</button>

      {/* PREVIEW */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Live Preview
        </h2>

        <div
          id="resume"
          className="transition-all duration-300"
        >
          {renderTemplate()}
        </div>
      </div>

    </div>
  );
}