import { useState, useEffect } from "react";

export default function Step5Projects({ next, back, updateData, data }) {

  // ✅ Prefill YES/NO based on existing data
  const [answer, setAnswer] = useState(
    data?.projects?.length ? "yes" : "no"
  );

  // ✅ Prefill projects
  const [projects, setProjects] = useState(
    data?.projects?.length
      ? data.projects
      : [{ title: "", tools: "", description: "" }]
  );

  const [errors, setErrors] = useState([]);

  // ✅ Sync when editing
  useEffect(() => {
    if (data?.projects?.length) {
      setAnswer("yes");
      setProjects(data.projects);
    }
  }, [data]);

  // ✅ Handle change + clear error
  const handleChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);

    const updatedErrors = [...errors];
    if (updatedErrors[index]) {
      delete updatedErrors[index][field];
    }
    setErrors(updatedErrors);
  };

  // ✅ Add project
  const addProject = () => {
    setProjects([
      ...projects,
      { title: "", tools: "", description: "" }
    ]);

    setErrors([...errors, {}]);
  };

  // ✅ VALIDATION
  const validate = () => {
    if (answer === "no") return true;

    let newErrors = [];

    projects.forEach((proj, index) => {
      let err = {};

      if (!proj.title.trim()) err.title = "Project title is required";
      if (!proj.tools.trim()) err.tools = "Tools are required";
      if (!proj.description.trim())
        err.description = "Description is required";

      newErrors[index] = err;
    });

    setErrors(newErrors);

    return newErrors.every((err) => Object.keys(err).length === 0);
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

      {/* ✅ CLEAR QUESTION */}
      <h2 className="text-lg font-semibold mb-4 text-center">
        Do you want to add projects?
      </h2>

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

          {/* TOP ERROR */}
          {errors.some((e) => Object.keys(e || {}).length > 0) && (
            <p className="text-red-600 text-center">
              Please fill all project details
            </p>
          )}

          {projects.map((proj, index) => (
            <div key={index} className="border-b pb-4">

              <h3 className="font-semibold mb-3">
                Project {index + 1}
              </h3>

              <div className="grid grid-cols-2 gap-4">

                {/* TITLE */}
                <div>
                  <input
                    placeholder="Project Title"
                    value={proj.title}
                    onChange={(e) =>
                      handleChange(index, "title", e.target.value)
                    }
                    className={`p-2 w-full rounded ${
                      errors[index]?.title
                        ? "bg-red-50 border border-red-400"
                        : "bg-gray-100"
                    }`}
                  />
                  {errors[index]?.title && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[index].title}
                    </p>
                  )}
                </div>

                {/* TOOLS */}
                <div>
                  <input
                    placeholder="Tools Used"
                    value={proj.tools}
                    onChange={(e) =>
                      handleChange(index, "tools", e.target.value)
                    }
                    className={`p-2 w-full rounded ${
                      errors[index]?.tools
                        ? "bg-red-50 border border-red-400"
                        : "bg-gray-100"
                    }`}
                  />
                  {errors[index]?.tools && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[index].tools}
                    </p>
                  )}
                </div>

              </div>

              {/* DESCRIPTION */}
              <div className="mt-3">
                <textarea
                  placeholder="Project Description"
                  value={proj.description}
                  onChange={(e) =>
                    handleChange(index, "description", e.target.value)
                  }
                  className={`w-full p-2 rounded ${
                    errors[index]?.description
                      ? "bg-red-50 border border-red-400"
                      : "bg-gray-100"
                  }`}
                />
                {errors[index]?.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[index].description}
                  </p>
                )}
              </div>

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
      <div className="flex justify-between items-center mt-8 w-full max-w-3xl gap-4">

        <button onClick={back} className="flex-1 py-2 border rounded">
          Back
        </button>

        <button className="flex-1 py-2 border rounded">
          💾 Save as draft
        </button>

        <button
          onClick={() => {
            if (validate()) {
              updateData({
                hasProjects: answer,
                projects: answer === "yes" ? projects : [],
              });
              next();
            }
          }}
          className="flex-1 py-2 bg-orange-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}