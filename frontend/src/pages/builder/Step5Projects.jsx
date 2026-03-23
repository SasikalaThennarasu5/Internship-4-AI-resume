import { useState } from "react";

export default function Step5Projects({ next, back, updateData }) {
  const [answer, setAnswer] = useState("yes");

  const [projects, setProjects] = useState([
    { title: "", tools: "", description: "" }
  ]);

  // Handle input change
  const handleChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  // Add new project
  const addProject = () => {
    setProjects([
      ...projects,
      { title: "", tools: "", description: "" }
    ]);
  };

  return (
    <div className="min-h-screen bg-[#f6f6f8] flex flex-col items-center py-10 px-4">

      {/* HEADER */}
      <h1 className="text-4xl font-bold mb-2 text-center">
        Let’s Build <span className="text-primary">Your Resume</span>
      </h1>

      <p className="text-gray-500 text-center mb-6">
        Answer a few quick questions and we’ll create your professional resume.
      </p>

      {/* STEP */}
      <div className="w-full max-w-5xl text-sm text-gray-500 mb-2">
        Step 5 of 7
      </div>

      {/* PROGRESS */}
      <div className="w-full max-w-5xl h-2 bg-gray-200 rounded-full mb-6">
        <div className="w-[70%] h-2 bg-primary rounded-full"></div>
      </div>

      {/* YES / NO */}
      <div className="flex justify-center gap-8 mb-10">
        {["yes", "no"].map((val) => (
          <button
            key={val}
            onClick={() => setAnswer(val)}
            className={`px-10 py-2 rounded-md border ${
              answer === val
                ? "border-primary text-primary"
                : "hover:bg-gray-100"
            }`}
          >
            {val === "yes" ? "Yes" : "No"}
          </button>
        ))}
      </div>

      {/* PROJECT FORMS */}
      {answer === "yes" && (
        <div className="bg-white w-full max-w-3xl p-6 rounded-xl shadow space-y-6">

          {projects.map((proj, index) => (
            <div key={index} className="border-b pb-4">

              <h3 className="font-semibold mb-3">
                Project {index + 1}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Project Title"
                  value={proj.title}
                  onChange={(e) =>
                    handleChange(index, "title", e.target.value)
                  }
                  className="p-2 bg-gray-100 rounded"
                />

                <input
                  placeholder="Tools Used"
                  value={proj.tools}
                  onChange={(e) =>
                    handleChange(index, "tools", e.target.value)
                  }
                  className="p-2 bg-gray-100 rounded"
                />
              </div>

              <textarea
                placeholder="Project Description"
                value={proj.description}
                onChange={(e) =>
                  handleChange(index, "description", e.target.value)
                }
                className="w-full mt-3 p-2 bg-gray-100 rounded"
              />
            </div>
          ))}

          {/* ADD BUTTON */}
          <button
            onClick={addProject}
            className="px-4 py-2 rounded bg-gradient-to-r from-purple-500 to-purple-700 text-white"
          >
            + Add Project
          </button>
        </div>
      )}

      {/* FOOTER */}
      <div className="flex justify-between items-center mt-8 w-full max-w-3xl">

        <button onClick={back} className="px-6 py-2 border rounded">
          Back
        </button>

        <button className="px-6 py-2 border rounded">
          💾 Save as draft
        </button>

        <button
          onClick={() => {
            updateData({
              hasProjects: answer,
              projects: answer === "yes" ? projects : []
            });
            next();
          }}
          className="px-8 py-2 bg-orange-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}