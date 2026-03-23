import { useState, useEffect } from "react";

export default function Step6Personal({ next, back, updateData, data }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
  });

  // ✅ Prefill when coming back
  useEffect(() => {
    if (data) {
      setForm({
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        summary: data.summary || "",
      });
    }
  }, [data]);

  // ✅ Smart AI-like summary (NO API)
  const generateSummary = () => {
    const role = data?.role || "professional";
    const skills = data?.skills?.join(", ") || "modern technologies";

    const generated = `Motivated ${role} with strong skills in ${skills}. Passionate about problem-solving and building efficient solutions. Looking to contribute and grow in a dynamic work environment.`;

    setForm({ ...form, summary: generated });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">

      <h1 className="text-4xl font-bold mb-2">
        Let’s Build <span className="text-primary">Your Resume</span>
      </h1>

      <p className="text-gray-500 mb-6 text-center">
        Answer a few quick questions and we’ll create your professional resume.
      </p>

      <div className="w-full max-w-5xl mb-2 text-sm text-gray-500">
        Step 6 of 7
      </div>

      <div className="w-full max-w-5xl h-2 bg-gray-200 rounded-full mb-6">
        <div className="w-[85%] h-2 bg-primary rounded-full"></div>
      </div>

      <div className="bg-white w-full max-w-3xl p-10 rounded-2xl shadow-md border">

        <h2 className="text-xl font-semibold text-center mb-6">
          Personal Details
        </h2>

        {/* FORM */}
        <div className="grid md:grid-cols-2 gap-6">

          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="p-3 bg-gray-100 rounded"
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="p-3 bg-gray-100 rounded"
          />

          <input
            placeholder="Phone"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            className="p-3 bg-gray-100 rounded"
          />
        </div>

        {/* SUMMARY */}
        <textarea
          placeholder="Profile Summary"
          value={form.summary}
          onChange={(e) =>
            setForm({ ...form, summary: e.target.value })
          }
          className="w-full mt-6 p-3 bg-gray-100 rounded"
        />

        <button
          onClick={generateSummary}
          className="mt-3 text-primary text-sm"
        >
          ✨ Generate Smart Summary
        </button>

        {/* BUTTONS */}
        <div className="flex justify-between mt-8">

          <button onClick={back} className="px-6 py-2 border rounded">
            Back
          </button>

          <button className="px-6 py-2 border rounded">
            💾 Save as draft
          </button>

          <button
            onClick={() => {
              updateData(form);
              next();
            }}
            className="px-8 py-2 bg-orange-500 text-white rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}